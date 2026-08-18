import type { Request, Response } from 'express'
import jwt from 'jsonwebtoken'

export async function login(req: Request, res: Response): Promise<void> {
  const { password } = req.body as { password?: string }

  if (!password || password !== process.env.ADMIN_PASSWORD) {
    res.status(401).json({ message: 'Invalid credentials. Please try again.' })
    return
  }

  const secret = process.env.JWT_SECRET
  if (!secret) {
    res.status(500).json({ message: 'Server misconfiguration: missing JWT_SECRET' })
    return
  }

  const token = jwt.sign({ role: 'admin' }, secret, { expiresIn: '1d' })
  res.json({ token })
}
