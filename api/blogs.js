import { randomUUID } from 'node:crypto'
import { fail, query, readJson, route, send } from './_lib/http.js'
import { isStoredImage, readJson as readData, writeJson } from './_lib/store.js'

const MAX_BLOCKS = 200

function slugify(text) {
  return text
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 60) || 'blog'
}

function text(value, max, label) {
  const clean = typeof value === 'string' ? value.trim() : ''
  if (clean.length > max) throw fail(400, `${label} is too long.`)
  return clean
}

function cleanBlocks(input) {
  if (!Array.isArray(input) || input.length > MAX_BLOCKS) throw fail(400, `A blog can have up to ${MAX_BLOCKS} sections.`)

  const blocks = input.map((block, index) => {
    const position = `Section ${index + 1}`
    if (block?.type === 'image') {
      if (!isStoredImage(block.src)) throw fail(400, `${position} needs an uploaded photo.`)
      return { type: 'image', src: block.src, caption: text(block.caption, 240, `${position} caption`) }
    }
    if (block?.type === 'heading') {
      const value = text(block.text, 160, `${position} heading`)
      return value ? { type: 'heading', text: value } : null
    }
    if (block?.type === 'text') {
      const value = text(block.text, 10000, position)
      return value ? { type: 'text', text: value } : null
    }
    throw fail(400, `${position} has an unknown type.`)
  })

  return blocks.filter(Boolean)
}

function summary({ id, slug, title, description, cover, createdAt }) {
  return { id, slug, title, description, cover, createdAt }
}

export default route(
  {
    async GET(req, res) {
      const blogs = await readData('blogs', [])
      const slug = query(req).get('slug')

      if (slug) {
        const blog = blogs.find((item) => item.slug === slug)
        if (!blog) throw fail(404, 'Blog not found.')
        return send(res, 200, { blog })
      }

      const list = [...blogs].sort((a, b) => b.createdAt.localeCompare(a.createdAt)).map(summary)
      send(res, 200, { blogs: list })
    },

    async POST(req, res) {
      const body = await readJson(req, 2_000_000)
      const title = text(body.title, 120, 'The title')
      const description = text(body.description, 300, 'The short description')

      if (!title) throw fail(400, 'Please add a title.')
      if (!description) throw fail(400, 'Please add a short description for the blog card.')
      if (!isStoredImage(body.cover)) throw fail(400, 'A cover photo is required for the blog card.')

      const blocks = cleanBlocks(body.blocks)
      if (!blocks.length) throw fail(400, 'Please write something in the blog first.')

      const blogs = await readData('blogs', [])
      const now = new Date().toISOString()
      const existing = body.id ? blogs.find((item) => item.id === body.id) : null

      if (body.id && !existing) throw fail(404, 'That blog no longer exists.')

      let saved
      if (existing) {
        saved = { ...existing, title, description, cover: body.cover, blocks, updatedAt: now }
        blogs[blogs.indexOf(existing)] = saved
      } else {
        const base = slugify(title)
        let slug = base
        for (let n = 2; blogs.some((item) => item.slug === slug); n += 1) slug = `${base}-${n}`
        saved = { id: randomUUID(), slug, title, description, cover: body.cover, blocks, createdAt: now, updatedAt: now }
        blogs.push(saved)
      }

      await writeJson('blogs', blogs)
      send(res, 200, { blog: saved })
    },

    async DELETE(req, res) {
      const id = query(req).get('id')
      const blogs = await readData('blogs', [])
      if (!blogs.some((item) => item.id === id)) throw fail(404, 'Blog not found.')
      await writeJson('blogs', blogs.filter((item) => item.id !== id))
      send(res, 200, { ok: true })
    },
  },
  { adminMethods: ['POST', 'DELETE'] },
)
