import 'dotenv/config'
import express from 'express'
import cors from 'cors'

import authRoutes from './routes/authRoutes'
import projectRoutes from './routes/projectRoutes'
import contactRoutes from './routes/contactRoutes'
import { errorHandler } from './middleware/errorHandler'

const app = express()

// ── CORS ──────────────────────────────────────────────────────────────────────
const allowedOrigins = (process.env.ALLOWED_ORIGINS ?? 'http://localhost:3000')
  .split(',')
  .map((s) => s.trim())

app.use(
  cors({
    origin: (origin, cb) => {
      // Allow requests with no origin (e.g. curl, server-to-server)
      if (!origin || allowedOrigins.includes(origin)) {
        cb(null, true)
      } else {
        cb(new Error(`CORS: origin ${origin} not allowed`))
      }
    },
    credentials: true,
  })
)

// ── Body parsing ──────────────────────────────────────────────────────────────
app.use(express.json())

// ── Routes ────────────────────────────────────────────────────────────────────
app.use('/api/auth', authRoutes)
app.use('/api/projects', projectRoutes)
app.use('/api/contact', contactRoutes)

// ── Health check ──────────────────────────────────────────────────────────────
app.get('/health', (_req, res) => res.json({ status: 'ok' }))

// ── Error handler (must be last) ──────────────────────────────────────────────
app.use(errorHandler)

// ── Start ─────────────────────────────────────────────────────────────────────
const PORT = parseInt(process.env.PORT ?? '4000', 10)

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`)
})

export default app
