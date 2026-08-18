import { prisma } from '../lib/prisma'

export interface ProjectInput {
  title: string
  description: string
  techStack: string
  imageUrl?: string | null
  githubUrl?: string | null
  liveUrl?: string | null
}

export const projectService = {
  findAll() {
    return prisma.project.findMany({ orderBy: { createdAt: 'desc' } })
  },

  findById(id: number) {
    return prisma.project.findUnique({ where: { id } })
  },

  create(data: ProjectInput) {
    return prisma.project.create({ data })
  },

  update(id: number, data: Partial<ProjectInput>) {
    return prisma.project.update({ where: { id }, data })
  },

  delete(id: number) {
    return prisma.project.delete({ where: { id } })
  },
}
