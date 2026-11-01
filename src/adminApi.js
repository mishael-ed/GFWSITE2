const TOKEN_KEY = 'gfw-admin-token'

export function getToken() {
  try {
    return sessionStorage.getItem(TOKEN_KEY)
  } catch {
    return null
  }
}

export function setToken(token) {
  try {
    if (token) sessionStorage.setItem(TOKEN_KEY, token)
    else sessionStorage.removeItem(TOKEN_KEY)
  } catch {
    // Private windows can block storage; the login just won't survive a refresh.
  }
}

export class ApiError extends Error {
  constructor(message, status) {
    super(message)
    this.status = status
  }
}

async function request(path, { method = 'GET', body, headers = {} } = {}) {
  const token = getToken()
  let response
  try {
    response = await fetch(path, {
      method,
      headers: { ...(token ? { Authorization: `Bearer ${token}` } : {}), ...headers },
      body,
    })
  } catch {
    throw new ApiError('Could not reach the server. Check your connection and try again.', 0)
  }

  let data = null
  try {
    data = await response.json()
  } catch {
    // Non-JSON reply (for example the API is not running).
  }

  if (!response.ok) throw new ApiError(data?.error || 'Something went wrong. Please try again.', response.status)
  if (data === null) throw new ApiError('The server is not responding properly.', response.status)
  return data
}

export const adminApi = {
  login: (password) =>
    request('/api/login', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ password }) }),

  getCalendar: () => request('/api/calendar'),
  saveCalendar: (events) =>
    request('/api/calendar', { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ events }) }),

  getBlogs: () => request('/api/blogs'),
  getBlog: (slug) => request(`/api/blogs?slug=${encodeURIComponent(slug)}`),
  saveBlog: (blog) =>
    request('/api/blogs', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(blog) }),
  deleteBlog: (id) => request(`/api/blogs?id=${encodeURIComponent(id)}`, { method: 'DELETE' }),
}

// Shrinks big phone photos in the browser first so uploads are quick and pages stay light.
async function shrinkImage(file, maxSize = 1600) {
  if (file.type === 'image/gif') return file

  let bitmap
  try {
    bitmap = await createImageBitmap(file)
  } catch {
    return file
  }

  const scale = Math.min(1, maxSize / Math.max(bitmap.width, bitmap.height))
  const canvas = document.createElement('canvas')
  canvas.width = Math.round(bitmap.width * scale)
  canvas.height = Math.round(bitmap.height * scale)
  canvas.getContext('2d').drawImage(bitmap, 0, 0, canvas.width, canvas.height)
  bitmap.close?.()

  const blob = await new Promise((resolve) => canvas.toBlob(resolve, 'image/webp', 0.82))
  return blob && blob.type === 'image/webp' ? blob : file
}

export async function uploadImage(file) {
  if (!file.type.startsWith('image/')) throw new ApiError('Please choose an image file.', 400)
  const body = await shrinkImage(file)
  const data = await request('/api/upload', { method: 'POST', headers: { 'Content-Type': 'application/octet-stream' }, body })
  return data.url
}
