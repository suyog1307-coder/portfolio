/**
 * Typed API client for the backend service.
 * Uses NEXT_PUBLIC_API_URL (set per environment in .env.local).
 */

const BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:5000'

export interface Project {
  id: number
  title: string
  description: string
  imageUrl: string | null
  techStack: string
  githubUrl: string | null
  liveUrl: string | null
  createdAt: string
}

export interface ContactMessage {
  id: number
  name: string
  email: string
  message: string
  createdAt: string
}

// ── Projects ──────────────────────────────────────────────────────────────────

export async function getProjects(): Promise<Project[]> {
  const res = await fetch(`${BASE_URL}/api/projects`, { cache: 'no-store' })
  if (!res.ok) throw new Error('Failed to fetch projects')
  return res.json()
}

export async function getProject(id: number): Promise<Project> {
  const res = await fetch(`${BASE_URL}/api/projects/${id}`, { cache: 'no-store' })
  if (!res.ok) throw new Error('Failed to fetch project')
  return res.json()
}

export async function createProject(
  data: Omit<Project, 'id' | 'createdAt'>,
  token: string
): Promise<Project> {
  const res = await fetch(`${BASE_URL}/api/projects`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    body: JSON.stringify(data),
  })
  if (!res.ok) {
    const err = await res.json().catch(() => ({}))
    throw new Error((err as { message?: string }).message ?? 'Failed to create project')
  }
  return res.json()
}

export async function updateProject(
  id: number,
  data: Partial<Omit<Project, 'id' | 'createdAt'>>,
  token: string
): Promise<Project> {
  const res = await fetch(`${BASE_URL}/api/projects/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    body: JSON.stringify(data),
  })
  if (!res.ok) {
    const err = await res.json().catch(() => ({}))
    throw new Error((err as { message?: string }).message ?? 'Failed to update project')
  }
  return res.json()
}

export async function deleteProject(id: number, token: string): Promise<void> {
  const res = await fetch(`${BASE_URL}/api/projects/${id}`, {
    method: 'DELETE',
    headers: { Authorization: `Bearer ${token}` },
  })
  if (!res.ok) throw new Error('Failed to delete project')
}

// ── Messages ──────────────────────────────────────────────────────────────────

export async function submitContactForm(data: {
  name: string
  email: string
  message: string
}): Promise<{ success: boolean }> {
  const res = await fetch(`${BASE_URL}/api/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  if (!res.ok) {
    const err = await res.json().catch(() => ({}))
    throw new Error((err as { message?: string }).message ?? 'Failed to send message')
  }
  return res.json()
}

export async function getMessages(token: string): Promise<ContactMessage[]> {
  const res = await fetch(`${BASE_URL}/api/contact`, {
    headers: { Authorization: `Bearer ${token}` },
    cache: 'no-store',
  })
  if (!res.ok) throw new Error('Failed to fetch messages')
  return res.json()
}

export async function deleteMessage(id: number, token: string): Promise<void> {
  const res = await fetch(`${BASE_URL}/api/contact/${id}`, {
    method: 'DELETE',
    headers: { Authorization: `Bearer ${token}` },
  })
  if (!res.ok) throw new Error('Failed to delete message')
}

// ── Auth ──────────────────────────────────────────────────────────────────────

export async function loginAdmin(password: string): Promise<{ token: string }> {
  const res = await fetch(`${BASE_URL}/api/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ password }),
  })
  if (!res.ok) {
    const err = await res.json().catch(() => ({}))
    throw new Error((err as { message?: string }).message ?? 'Invalid credentials')
  }
  return res.json()
}
