'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function loginAdmin(
  _prevState: { error: string } | null,
  formData: FormData
): Promise<{ error: string } | never> {
  const password = formData.get('password')

  if (password !== process.env.ADMIN_PASSWORD) {
    return { error: 'Invalid credentials. Please try again.' }
  }

  const cookieStore = await cookies()
  cookieStore.set('admin_session', 'authenticated', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24, // 1 day
    path: '/',
  })

  redirect('/admin')
}

export async function logoutAdmin() {
  const cookieStore = await cookies()
  cookieStore.delete('admin_session')
  redirect('/admin/login')
}
