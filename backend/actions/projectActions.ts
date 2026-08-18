'use server'

import { prisma } from '@backend/lib/prisma'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { z } from 'zod'

const projectSchema = z.object({
  title: z.string().min(1, 'Title is required.'),
  description: z.string().min(1, 'Description is required.'),
  techStack: z.string().min(1, 'Tech stack is required.'),
  imageUrl: z.string().optional().or(z.literal('')),
  githubUrl: z.string().optional().or(z.literal('')),
  liveUrl: z.string().optional().or(z.literal('')),
})

export async function createProject(
  _prevState: { error?: string } | null,
  formData: FormData
): Promise<{ error: string } | never> {
  const raw = {
    title: formData.get('title') as string,
    description: formData.get('description') as string,
    techStack: formData.get('techStack') as string,
    imageUrl: (formData.get('imageUrl') as string) || '',
    githubUrl: (formData.get('githubUrl') as string) || '',
    liveUrl: (formData.get('liveUrl') as string) || '',
  }

  const result = projectSchema.safeParse(raw)
  if (!result.success) {
    return { error: result.error.issues[0].message }
  }

  const { imageUrl, githubUrl, liveUrl, ...rest } = result.data

  await prisma.project.create({
    data: {
      ...rest,
      imageUrl: imageUrl || null,
      githubUrl: githubUrl || null,
      liveUrl: liveUrl || null,
    },
  })

  revalidatePath('/')
  revalidatePath('/admin')
  redirect('/admin')
}

export async function updateProject(
  id: number,
  _prevState: { error?: string } | null,
  formData: FormData
): Promise<{ error: string } | never> {
  const raw = {
    title: formData.get('title') as string,
    description: formData.get('description') as string,
    techStack: formData.get('techStack') as string,
    imageUrl: (formData.get('imageUrl') as string) || '',
    githubUrl: (formData.get('githubUrl') as string) || '',
    liveUrl: (formData.get('liveUrl') as string) || '',
  }

  const result = projectSchema.safeParse(raw)
  if (!result.success) {
    return { error: result.error.issues[0].message }
  }

  const { imageUrl, githubUrl, liveUrl, ...rest } = result.data

  await prisma.project.update({
    where: { id },
    data: {
      ...rest,
      imageUrl: imageUrl || null,
      githubUrl: githubUrl || null,
      liveUrl: liveUrl || null,
    },
  })

  revalidatePath('/')
  revalidatePath('/admin')
  redirect('/admin')
}

export async function deleteProject(id: number): Promise<{ error?: string }> {
  try {
    await prisma.project.delete({ where: { id } })
    revalidatePath('/')
    revalidatePath('/admin')
    return {}
  } catch {
    return { error: 'Failed to delete project.' }
  }
}

export async function deleteMessage(id: number): Promise<{ error?: string }> {
  try {
    await prisma.contactMessage.delete({ where: { id } })
    revalidatePath('/admin')
    return {}
  } catch {
    return { error: 'Failed to delete message.' }
  }
}
