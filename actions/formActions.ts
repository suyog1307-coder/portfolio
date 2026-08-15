'use server'

import { prisma } from '@/lib/prisma'
import { z } from 'zod'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Please enter a valid email address.'),
  message: z.string().min(10, 'Message must be at least 10 characters.'),
})

export async function submitContactForm(
  _prevState: { success: boolean; error?: string } | null,
  formData: FormData
): Promise<{ success: boolean; error?: string }> {
  const raw = {
    name: formData.get('name') as string,
    email: formData.get('email') as string,
    message: formData.get('message') as string,
  }

  const result = contactSchema.safeParse(raw)
  if (!result.success) {
    return { success: false, error: result.error.issues[0].message }
  }

  try {
    await prisma.contactMessage.create({ data: result.data })
    return { success: true }
  } catch {
    return { success: false, error: 'Failed to send message. Please try again.' }
  }
}
