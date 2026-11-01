import { createReadStream, existsSync } from 'node:fs'
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// Runs the files in /api during `npm run dev`, the same way Vercel runs them in production.
function localApi() {
  return {
    name: 'local-api',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const { pathname } = new URL(req.url, 'http://localhost')

        if (pathname.startsWith('/uploads/')) {
          const { localUploadPath } = await server.ssrLoadModule('/api/_lib/store.js')
          const file = localUploadPath(pathname.slice('/uploads/'.length))
          if (!existsSync(file)) return next()
          res.setHeader('Content-Type', { jpg: 'image/jpeg', png: 'image/png', webp: 'image/webp', gif: 'image/gif' }[file.split('.').pop()] || 'application/octet-stream')
          return createReadStream(file).pipe(res)
        }

        const match = pathname.match(/^\/api\/([\w-]+)$/)
        if (!match) return next()

        try {
          const handler = (await server.ssrLoadModule(`/api/${match[1]}.js`)).default
          await handler(req, res)
        } catch (error) {
          server.config.logger.error(String(error))
          res.statusCode = 404
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify({ error: 'Not found' }))
        }
      })
    },
  }
}

export default defineConfig(({ mode }) => {
  // Make non-VITE_ values from .env.local (ADMIN_PASSWORD etc.) visible to the /api code in dev.
  Object.assign(process.env, loadEnv(mode, process.cwd(), ''))

  return { plugins: [react(), localApi()] }
})
