'use client'

import { useActionState } from 'react'
import { useFormStatus } from 'react-dom'
import { ArrowLeft, Save, AlertCircle } from 'lucide-react'
import Link from 'next/link'
import { updateProject } from '@backend/actions/projectActions'

interface Project {
  id: number
  title: string
  description: string
  techStack: string
  imageUrl: string | null
  githubUrl: string | null
  liveUrl: string | null
}

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <button
      type="submit"
      disabled={pending}
      className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed transition-colors ml-auto"
    >
      {pending ? 'Saving…' : (<><Save size={15} /> Update Project</>)}
    </button>
  )
}

const inputCls =
  'w-full rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 px-4 py-3 text-sm text-zinc-900 dark:text-white placeholder-zinc-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all'

export default function EditProjectForm({ project }: { project: Project }) {
  const updateProjectWithId = updateProject.bind(null, project.id)
  const [state, formAction] = useActionState(updateProjectWithId, null)

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 p-6">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <Link
            href="/admin"
            className="rounded-xl p-2 text-zinc-500 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          >
            <ArrowLeft size={20} />
          </Link>
          <h1 className="text-2xl font-bold text-zinc-900 dark:text-white">Edit Project</h1>
        </div>

        <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6">
          {state?.error && (
            <div className="flex items-center gap-3 rounded-xl border border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-900/20 px-4 py-3 text-sm text-red-700 dark:text-red-400 mb-5">
              <AlertCircle size={16} className="shrink-0" />
              {state.error}
            </div>
          )}

          <form action={formAction} className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
                Project Title <span className="text-red-500">*</span>
              </label>
              <input type="text" name="title" required defaultValue={project.title} className={inputCls} />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
                Description <span className="text-red-500">*</span>
              </label>
              <textarea name="description" required rows={4} defaultValue={project.description} className={inputCls} />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
                Tech Stack <span className="text-red-500">*</span>
              </label>
              <input type="text" name="techStack" required defaultValue={project.techStack} className={inputCls} />
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">GitHub URL</label>
              <input type="url" name="githubUrl" defaultValue={project.githubUrl ?? ''} className={inputCls} />
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">Live Demo URL</label>
              <input type="url" name="liveUrl" defaultValue={project.liveUrl ?? ''} className={inputCls} />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">Cover Image URL</label>
              <input type="url" name="imageUrl" defaultValue={project.imageUrl ?? ''} className={inputCls} />
            </div>

            <div className="md:col-span-2 pt-4 border-t border-zinc-100 dark:border-zinc-800 flex justify-end">
              <SubmitButton />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
