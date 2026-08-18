import { unstable_noStore as noStore } from 'next/cache'
import { prisma } from '@backend/lib/prisma'
import { notFound } from 'next/navigation'
import EditProjectForm from './EditProjectForm'

export default async function EditProjectPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  noStore()
  const { id } = await params
  const projectId = parseInt(id)

  if (isNaN(projectId)) notFound()

  const project = await prisma.project.findUnique({
    where: { id: projectId },
  })

  if (!project) notFound()

  return <EditProjectForm project={project} />
}
