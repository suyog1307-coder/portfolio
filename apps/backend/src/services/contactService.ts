import { prisma } from '../lib/prisma'

export interface ContactInput {
  name: string
  email: string
  message: string
}

export const contactService = {
  findAll() {
    return prisma.contactMessage.findMany({ orderBy: { createdAt: 'desc' } })
  },

  create(data: ContactInput) {
    return prisma.contactMessage.create({ data })
  },

  delete(id: number) {
    return prisma.contactMessage.delete({ where: { id } })
  },
}
