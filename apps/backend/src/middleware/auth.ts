import type { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

export interface AuthRequest extends Request {
  admin?: boolean
}

export function requireAdmin(
  req: AuthRequest,
  res: Response,
  next: NextFunction
): void {
  const authHeader = req.headers.authorization
  if (!authHeader?.startsWith('Bearer ')) {
    res.status(401).json({ message: 'Unauthorized' })
    return
  }

  const token = authHeader.slice(7)
  const secret = process.env.JWT_SECRET

  if (!secret) {
    res.status(500).json({ message: 'Server misconfiguration: missing JWT_SECRET' })
    return
  }

  try {
    jwt.verify(token, secret)
    req.admin = true
    next()
  } catch {
    res.status(401).json({ message: 'Invalid or expired token' })
  }
}
