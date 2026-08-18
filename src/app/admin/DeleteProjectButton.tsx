'use client'

import { Trash2 } from 'lucide-react'
import { deleteProject } from '@backend/actions/projectActions'

export default function DeleteProjectButton({ id }: { id: number }) {
  const handleDelete = async () => {
    if (!confirm('Delete this project? This cannot be undone.')) return
    await deleteProject(id)
  }

  return (
    <button
      onClick={handleDelete}
      className="rounded-lg p-2 text-zinc-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
      title="Delete"
    >
      <Trash2 size={15} />
    </button>
  )
}
