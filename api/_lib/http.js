import { createHash, createHmac, timingSafeEqual } from 'node:crypto'

const SESSION_MS = 12 * 60 * 60 * 1000

export function send(res, status, body) {
  res.statusCode = status
  res.setHeader('Content-Type', 'application/json; charset=utf-8')
  res.setHeader('Cache-Control', 'no-store')
  res.end(JSON.stringify(body))
}

export function methodNotAllowed(res, allowed) {
  res.setHeader('Allow', allowed.join(', '))
  send(res, 405, { error: 'Method not allowed' })
}

export async function readBuffer(req, limit) {
  const chunks = []
  let size = 0
  for await (const chunk of req) {
    size += chunk.length
    if (size > limit) {
      const error = new Error('Request body is too large')
      error.status = 413
      throw error
    }
    chunks.push(chunk)
  }
  return Buffer.concat(chunks)
}

export async function readJson(req, limit = 1_000_000) {
  const raw = (await readBuffer(req, limit)).toString('utf8')
  try {
    return raw ? JSON.parse(raw) : {}
  } catch {
    const error = new Error('Request body is not valid JSON')
    error.status = 400
    throw error
  }
}

export function query(req) {
  return new URL(req.url, 'http://localhost').searchParams
}

function secret() {
  return process.env.ADMIN_SECRET || `gfw-admin:${process.env.ADMIN_PASSWORD || ''}`
}

function sign(payload) {
  return createHmac('sha256', secret()).update(payload).digest('base64url')
}

function digest(value) {
  return createHash('sha256').update(String(value)).digest()
}

export function adminConfigured() {
  return Boolean(process.env.ADMIN_PASSWORD)
}

export function passwordMatches(candidate) {
  if (!adminConfigured()) return false
  return timingSafeEqual(digest(candidate), digest(process.env.ADMIN_PASSWORD))
}

export function issueToken() {
  const payload = Buffer.from(JSON.stringify({ exp: Date.now() + SESSION_MS })).toString('base64url')
  return `${payload}.${sign(payload)}`
}

export function isAdmin(req) {
  if (!adminConfigured()) return false
  const header = req.headers.authorization || ''
  const token = header.startsWith('Bearer ') ? header.slice(7) : ''
  const [payload, signature] = token.split('.')
  if (!payload || !signature) return false

  const expected = Buffer.from(sign(payload))
  const given = Buffer.from(signature)
  if (expected.length !== given.length || !timingSafeEqual(expected, given)) return false

  try {
    return JSON.parse(Buffer.from(payload, 'base64url').toString('utf8')).exp > Date.now()
  } catch {
    return false
  }
}

// Wraps a handler so thrown errors become JSON responses and admin-only methods are checked.
export function route(handlers, { adminMethods = [] } = {}) {
  return async (req, res) => {
    try {
      const handler = handlers[req.method]
      if (!handler) return methodNotAllowed(res, Object.keys(handlers))
      if (adminMethods.includes(req.method) && !isAdmin(req)) {
        return send(res, 401, { error: 'Please log in again.' })
      }
      return await handler(req, res)
    } catch (error) {
      const status = error.status || 500
      if (status === 500) console.error(error)
      return send(res, status, { error: status === 500 ? 'Something went wrong on the server.' : error.message })
    }
  }
}

export function fail(status, message) {
  const error = new Error(message)
  error.status = status
  return error
}
