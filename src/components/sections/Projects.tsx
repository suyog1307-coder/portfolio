import { unstable_noStore as noStore } from 'next/cache'
import { prisma } from '@backend/lib/prisma'
import { ExternalLink, FolderOpen } from 'lucide-react'
import Link from 'next/link'

// Inline GitHub icon since lucide-react v1+ removed the Github export
function GitHubIcon({ size = 15 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

export default async function Projects() {
  noStore()
  const projects = await prisma.project.findMany({
    orderBy: { createdAt: 'desc' },
  })

  return (
    <section id="projects" className="py-24 px-6 bg-zinc-50 dark:bg-zinc-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white sm:text-4xl">
            Featured Projects
          </h2>
          <div className="mt-2 mx-auto h-1 w-16 rounded bg-blue-600" />
          <p className="mt-4 text-zinc-500 dark:text-zinc-400">
            A selection of things I&apos;ve built
          </p>
        </div>

        {projects.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-zinc-400 dark:text-zinc-600">
            <FolderOpen size={48} className="mb-4 opacity-40" />
            <p className="text-lg font-medium">No projects yet.</p>
            <p className="text-sm mt-1">
              Add projects from the{' '}
              <Link href="/admin" className="text-blue-500 hover:underline">
                admin dashboard
              </Link>
              .
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <article
                key={project.id}
                className="group flex flex-col rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 shadow-sm hover:shadow-lg transition-shadow overflow-hidden"
              >
                {/* Image or placeholder */}
                <div className="relative h-44 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-zinc-700 dark:to-zinc-600 overflow-hidden">
                  {project.imageUrl ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center">
                      <FolderOpen size={40} className="text-blue-300 dark:text-zinc-500" />
                    </div>
                  )}
                </div>

                <div className="flex flex-col flex-1 p-5">
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400 line-clamp-3 flex-1">
                    {project.description}
                  </p>

                  {/* Tech badges */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.techStack.split(',').map((tech: string) => (
                      <span
                        key={tech}
                        className="rounded-md bg-zinc-100 dark:bg-zinc-700 px-2.5 py-0.5 text-xs font-medium text-zinc-600 dark:text-zinc-300"
                      >
                        {tech.trim()}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  {(project.githubUrl || project.liveUrl) && (
                    <div className="mt-4 flex items-center gap-3 pt-4 border-t border-zinc-100 dark:border-zinc-700">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-sm font-medium text-zinc-600 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                          <GitHubIcon size={15} /> Code
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-sm font-medium text-zinc-600 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                          <ExternalLink size={15} /> Live Demo
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
