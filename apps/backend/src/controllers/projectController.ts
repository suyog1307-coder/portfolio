import type { Request, Response, NextFunction } from 'express'
import { z } from 'zod'
import { projectService } from '../services/projectService'

const projectSchema = z.object({
  title: z.string().min(1, 'Title is required.'),
  description: z.string().min(1, 'Description is required.'),
  techStack: z.string().min(1, 'Tech stack is required.'),
  imageUrl: z.string().url().optional().nullable(),
  githubUrl: z.string().url().optional().nullable(),
  liveUrl: z.string().url().optional().nullable(),
})

export const projectController = {
  async getAll(_req: Request, res: Response, next: NextFunction) {
    try {
      const projects = await projectService.findAll()
      res.json(projects)
    } catch (err) {
      next(err)
    }
  },

  async getOne(req: Request, res: Response, next: NextFunction) {
    try {
      const id = parseInt(req.params.id)
      if (isNaN(id)) { res.status(400).json({ message: 'Invalid ID' }); return }

      const project = await projectService.findById(id)
      if (!project) { res.status(404).json({ message: 'Project not found' }); return }

      res.json(project)
    } catch (err) {
      next(err)
    }
  },

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const parsed = projectSchema.safeParse(req.body)
      if (!parsed.success) {
        res.status(422).json({ message: parsed.error.issues[0].message })
        return
      }
      const project = await projectService.create(parsed.data)
      res.status(201).json(project)
    } catch (err) {
      next(err)
    }
  },

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const id = parseInt(req.params.id)
      if (isNaN(id)) { res.status(400).json({ message: 'Invalid ID' }); return }

      const parsed = projectSchema.partial().safeParse(req.body)
      if (!parsed.success) {
        res.status(422).json({ message: parsed.error.issues[0].message })
        return
      }

      const project = await projectService.update(id, parsed.data)
      res.json(project)
    } catch (err) {
      next(err)
    }
  },

  async remove(req: Request, res: Response, next: NextFunction) {
    try {
      const id = parseInt(req.params.id)
      if (isNaN(id)) { res.status(400).json({ message: 'Invalid ID' }); return }

      await projectService.delete(id)
      res.status(204).end()
    } catch (err) {
      next(err)
    }
  },
}
