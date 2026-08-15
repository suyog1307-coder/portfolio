import { unstable_noStore as noStore } from 'next/cache'
import { prisma } from '@/lib/prisma'
import type { Project, ContactMessage } from '@prisma/client'
import { logoutAdmin } from '@/actions/authActions'
import { deleteProject } from '@/actions/projectActions'
import DeleteProjectButton from './DeleteProjectButton'
import DeleteMessageButton from './DeleteMessageButton'
import {
  LogOut,
  Plus,
  FolderKanban,
  Edit,
  Mail,
  Inbox,
} from 'lucide-react'
import Link from 'next/link'

export default async function AdminDashboard() {
  noStore()
  const [messages, projects] = await Promise.all([
    prisma.contactMessage.findMany({ orderBy: { createdAt: 'desc' } }),
    prisma.project.findMany({ orderBy: { createdAt: 'desc' } }),
  ])

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 p-6">
      <div className="max-w-6xl mx-auto space-y-8">

        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-zinc-900 dark:text-white">
              Admin Dashboard
            </h1>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-0.5">
              Manage your portfolio content
            </p>
          </div>
          <div className="flex gap-3">
            <Link
              href="/admin/projects/new"
              className="flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 transition-colors"
            >
              <Plus size={16} /> Add Project
            </Link>
            <form action={logoutAdmin}>
              <button
                type="submit"
                className="flex items-center gap-2 rounded-xl border border-zinc-200 dark:border-zinc-700 px-4 py-2 text-sm font-semibold text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
              >
                <LogOut size={16} /> Logout
              </button>
            </form>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-5 flex items-center gap-4">
            <div className="rounded-xl bg-blue-50 dark:bg-blue-900/20 p-3">
              <FolderKanban size={22} className="text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-zinc-900 dark:text-white">{projects.length}</p>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">Projects</p>
            </div>
          </div>
          <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-5 flex items-center gap-4">
            <div className="rounded-xl bg-blue-50 dark:bg-blue-900/20 p-3">
              <Mail size={22} className="text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-zinc-900 dark:text-white">{messages.length}</p>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">Messages</p>
            </div>
          </div>
        </div>

        {/* Projects table */}
        <section className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 overflow-hidden">
          <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-100 dark:border-zinc-800">
            <h2 className="font-semibold text-zinc-900 dark:text-white flex items-center gap-2">
              <FolderKanban size={18} /> Projects
            </h2>
          </div>

          {projects.length === 0 ? (
            <div className="flex flex-col items-center py-12 text-zinc-400 dark:text-zinc-600">
              <FolderKanban size={36} className="opacity-40 mb-3" />
              <p className="text-sm">No projects yet.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="border-b border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-800/50">
                  <tr>
                    <th className="px-6 py-3 text-left font-medium text-zinc-500 dark:text-zinc-400">Title</th>
                    <th className="px-6 py-3 text-left font-medium text-zinc-500 dark:text-zinc-400">Tech Stack</th>
                    <th className="px-6 py-3 text-left font-medium text-zinc-500 dark:text-zinc-400">Added</th>
                    <th className="px-6 py-3 text-right font-medium text-zinc-500 dark:text-zinc-400">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                  {projects.map((proj: Project) => (
                    <tr key={proj.id} className="hover:bg-zinc-50 dark:hover:bg-zinc-800/40 transition-colors">
                      <td className="px-6 py-4 font-medium text-zinc-900 dark:text-white">{proj.title}</td>
                      <td className="px-6 py-4 text-zinc-500 dark:text-zinc-400 max-w-xs truncate">{proj.techStack}</td>
                      <td className="px-6 py-4 text-zinc-500 dark:text-zinc-400">
                        {proj.createdAt.toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-end gap-2">
                          <Link
                            href={`/admin/projects/${proj.id}/edit`}
                            className="rounded-lg p-2 text-zinc-500 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                            title="Edit"
                          >
                            <Edit size={15} />
                          </Link>
                          <DeleteProjectButton id={proj.id} />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>

        {/* Messages table */}
        <section className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 overflow-hidden">
          <div className="px-6 py-4 border-b border-zinc-100 dark:border-zinc-800">
            <h2 className="font-semibold text-zinc-900 dark:text-white flex items-center gap-2">
              <Inbox size={18} /> Recent Messages
            </h2>
          </div>

          {messages.length === 0 ? (
            <div className="flex flex-col items-center py-12 text-zinc-400 dark:text-zinc-600">
              <Mail size={36} className="opacity-40 mb-3" />
              <p className="text-sm">No messages yet.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="border-b border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-800/50">
                  <tr>
                    <th className="px-6 py-3 text-left font-medium text-zinc-500 dark:text-zinc-400">Date</th>
                    <th className="px-6 py-3 text-left font-medium text-zinc-500 dark:text-zinc-400">Name</th>
                    <th className="px-6 py-3 text-left font-medium text-zinc-500 dark:text-zinc-400">Email</th>
                    <th className="px-6 py-3 text-left font-medium text-zinc-500 dark:text-zinc-400">Message</th>
                    <th className="px-6 py-3 text-right font-medium text-zinc-500 dark:text-zinc-400">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                  {messages.map((msg: ContactMessage) => (
                    <tr key={msg.id} className="hover:bg-zinc-50 dark:hover:bg-zinc-800/40 transition-colors">
                      <td className="px-6 py-4 text-zinc-500 dark:text-zinc-400 whitespace-nowrap">
                        {msg.createdAt.toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 font-medium text-zinc-900 dark:text-white">{msg.name}</td>
                      <td className="px-6 py-4 text-zinc-500 dark:text-zinc-400">{msg.email}</td>
                      <td className="px-6 py-4 text-zinc-500 dark:text-zinc-400 max-w-xs truncate">{msg.message}</td>
                      <td className="px-6 py-4 text-right">
                        <DeleteMessageButton id={msg.id} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>

      </div>
    </div>
  )
}
