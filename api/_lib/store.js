import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'

// On Vercel the data lives in Blob storage. Locally (no token) it is saved to a
// git-ignored .data folder so the admin can be tried out without any setup.
const useBlob = Boolean(process.env.BLOB_READ_WRITE_TOKEN)
const localRoot = path.join(process.cwd(), '.data')

function requireStorage() {
  if (!useBlob && process.env.VERCEL) {
    const error = new Error('Storage is not set up yet. Connect a Vercel Blob store to this project.')
    error.status = 503
    throw error
  }
}

export async function readJson(name, fallback) {
  requireStorage()

  if (useBlob) {
    const { head } = await import('@vercel/blob')
    try {
      const blob = await head(`data/${name}.json`)
      const response = await fetch(`${blob.url}?t=${Date.now()}`, { cache: 'no-store' })
      return response.ok ? await response.json() : fallback
    } catch (error) {
      if (error?.name === 'BlobNotFoundError') return fallback
      throw error
    }
  }

  try {
    return JSON.parse(await readFile(path.join(localRoot, `${name}.json`), 'utf8'))
  } catch (error) {
    if (error.code === 'ENOENT') return fallback
    throw error
  }
}

export async function writeJson(name, data) {
  requireStorage()
  const body = JSON.stringify(data, null, 2)

  if (useBlob) {
    const { put } = await import('@vercel/blob')
    await put(`data/${name}.json`, body, {
      access: 'public',
      contentType: 'application/json',
      addRandomSuffix: false,
      allowOverwrite: true,
      cacheControlMaxAge: 60,
    })
    return
  }

  await mkdir(localRoot, { recursive: true })
  await writeFile(path.join(localRoot, `${name}.json`), body)
}

export async function saveImage(buffer, filename, contentType) {
  requireStorage()

  if (useBlob) {
    const { put } = await import('@vercel/blob')
    const blob = await put(`uploads/${filename}`, buffer, {
      access: 'public',
      contentType,
      addRandomSuffix: false,
      cacheControlMaxAge: 31536000,
    })
    return blob.url
  }

  const dir = path.join(localRoot, 'uploads')
  await mkdir(dir, { recursive: true })
  await writeFile(path.join(dir, filename), buffer)
  return `/uploads/${filename}`
}

export function localUploadPath(filename) {
  return path.join(localRoot, 'uploads', path.basename(filename))
}

// Only images we stored ourselves may be used in a blog.
export function isStoredImage(url) {
  if (typeof url !== 'string' || url.length > 500) return false
  if (/^\/uploads\/[\w.-]+$/.test(url)) return true
  return /^https:\/\/[a-z0-9-]+\.public\.blob\.vercel-storage\.com\/uploads\/[\w.-]+$/.test(url)
}
