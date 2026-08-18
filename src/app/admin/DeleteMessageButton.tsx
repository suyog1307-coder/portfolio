'use client'

import { Trash2 } from 'lucide-react'
import { deleteMessage } from '@backend/actions/projectActions'

export default function DeleteMessageButton({ id }: { id: number }) {
  const handleDelete = async () => {
    if (!confirm('Delete this message? This cannot be undone.')) return
    await deleteMessage(id)
  }

  return (
    <button
      onClick={handleDelete}
      className="rounded-lg p-2 text-zinc-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
      title="Delete message"
    >
      <Trash2 size={15} />
    </button>
  )
}
