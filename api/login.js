import { adminConfigured, fail, issueToken, passwordMatches, readJson, route, send } from './_lib/http.js'

// Best-effort brute-force guard (per server instance).
const failures = new Map()
const WINDOW_MS = 10 * 60 * 1000
const MAX_FAILURES = 6

function clientKey(req) {
  return String(req.headers['x-forwarded-for'] || req.socket?.remoteAddress || 'unknown').split(',')[0].trim()
}

export default route({
  async POST(req, res) {
    if (!adminConfigured()) throw fail(503, 'Admin login has not been set up on the server yet.')

    const key = clientKey(req)
    const now = Date.now()
    const recent = (failures.get(key) || []).filter((time) => now - time < WINDOW_MS)
    if (recent.length >= MAX_FAILURES) throw fail(429, 'Too many attempts. Please wait a few minutes and try again.')

    const { password } = await readJson(req, 2000)
    if (typeof password !== 'string' || !passwordMatches(password)) {
      failures.set(key, [...recent, now])
      await new Promise((resolve) => setTimeout(resolve, 600))
      throw fail(401, 'That password is not right.')
    }

    failures.delete(key)
    send(res, 200, { token: issueToken() })
  },
})
