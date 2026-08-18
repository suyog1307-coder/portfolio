import type { Request, Response, NextFunction } from 'express'
import { z } from 'zod'
import { contactService } from '../services/contactService'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Please enter a valid email address.'),
  message: z.string().min(10, 'Message must be at least 10 characters.'),
})

export const contactController = {
  async getAll(_req: Request, res: Response, next: NextFunction) {
    try {
      const messages = await contactService.findAll()
      res.json(messages)
    } catch (err) {
      next(err)
    }
  },

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const parsed = contactSchema.safeParse(req.body)
      if (!parsed.success) {
        res.status(422).json({ message: parsed.error.issues[0].message })
        return
      }
      const msg = await contactService.create(parsed.data)
      res.status(201).json({ success: true, id: msg.id })
    } catch (err) {
      next(err)
    }
  },

  async remove(req: Request, res: Response, next: NextFunction) {
    try {
      const id = parseInt(req.params.id)
      if (isNaN(id)) { res.status(400).json({ message: 'Invalid ID' }); return }

      await contactService.delete(id)
      res.status(204).end()
    } catch (err) {
      next(err)
    }
  },
}
