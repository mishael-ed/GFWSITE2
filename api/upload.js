import { randomUUID } from 'node:crypto'
import { fail, readBuffer, route, send } from './_lib/http.js'
import { saveImage } from './_lib/store.js'

const MAX_BYTES = 4 * 1024 * 1024

// Checks the file's real signature rather than trusting the declared type.
function detectImage(buffer) {
  if (buffer.length < 12) return null
  if (buffer[0] === 0xff && buffer[1] === 0xd8 && buffer[2] === 0xff) return { type: 'image/jpeg', ext: 'jpg' }
  if (buffer.subarray(0, 8).equals(Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]))) return { type: 'image/png', ext: 'png' }
  if (buffer.subarray(0, 4).toString('ascii') === 'RIFF' && buffer.subarray(8, 12).toString('ascii') === 'WEBP') return { type: 'image/webp', ext: 'webp' }
  if (buffer.subarray(0, 3).toString('ascii') === 'GIF') return { type: 'image/gif', ext: 'gif' }
  return null
}

export default route(
  {
    async POST(req, res) {
      const buffer = await readBuffer(req, MAX_BYTES)
      const image = detectImage(buffer)
      if (!image) throw fail(400, 'Please upload a JPG, PNG, WebP or GIF image.')

      const url = await saveImage(buffer, `${randomUUID()}.${image.ext}`, image.type)
      send(res, 200, { url })
    },
  },
  { adminMethods: ['POST'] },
)

export const config = { api: { bodyParser: false } }
