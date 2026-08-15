'use client'

import { motion } from 'framer-motion'

const skillGroups = [
  {
    label: 'Languages',
    color: 'bg-violet-50 dark:bg-violet-900/20 text-violet-700 dark:text-violet-300 border-violet-100 dark:border-violet-800',
    skills: ['Java', 'Python'],
  },
  {
    label: 'Backend & APIs',
    color: 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border-blue-100 dark:border-blue-800',
    skills: ['Node.js', 'Express.js', 'FastAPI', 'REST APIs', 'JWT'],
  },
  {
    label: 'Database',
    color: 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300 border-emerald-100 dark:border-emerald-800',
    skills: ['MySQL', 'PostgreSQL', 'Prisma'],
  },
  {
    label: 'AI / ML & GenAI',
    color: 'bg-pink-50 dark:bg-pink-900/20 text-pink-700 dark:text-pink-300 border-pink-100 dark:border-pink-800',
    skills: ['Machine Learning', 'Deep Learning', 'NLP', 'LLM', 'RAG', 'Hugging Face', 'EDA', 'Generative AI'],
  },
  {
    label: 'DevOps & Platforms',
    color: 'bg-orange-50 dark:bg-orange-900/20 text-orange-700 dark:text-orange-300 border-orange-100 dark:border-orange-800',
    skills: ['Docker', 'Kubernetes', 'Helm', 'GitHub Actions', 'CI/CD', 'AWS EC2', 'AWS S3', 'AWS SQS', 'AWS SES', 'AWS IAM', 'AWS ECR'],
  },
  {
    label: 'Tools',
    color: 'bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border-zinc-200 dark:border-zinc-700',
    skills: ['VS Code', 'Git', 'GitHub', 'Google Colab'],
  },
]

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-white dark:bg-zinc-950">
      <div className="max-w-5xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white sm:text-4xl">
            About Me
          </h2>
          <div className="mt-2 mx-auto h-1 w-16 rounded bg-blue-600" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-lg">
              I&apos;m a passionate software developer with strong foundations in
              backend development, AI/ML, and cloud infrastructure. I build
              scalable APIs with <span className="text-zinc-900 dark:text-white font-medium">Node.js</span> and{' '}
              <span className="text-zinc-900 dark:text-white font-medium">FastAPI</span>, train and deploy
              machine learning models, and architect cloud-native solutions on{' '}
              <span className="text-zinc-900 dark:text-white font-medium">AWS</span>.
            </p>
            <p className="mt-4 text-zinc-600 dark:text-zinc-400 leading-relaxed text-lg">
              I&apos;m deeply interested in <span className="text-zinc-900 dark:text-white font-medium">Generative AI</span> — working
              with LLMs, RAG pipelines, and Hugging Face models to build
              intelligent applications. When I&apos;m not coding, I&apos;m exploring
              new research papers or contributing to open source.
            </p>
          </motion.div>

          {/* Skill groups */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-5"
          >
            {skillGroups.map((group) => (
              <div key={group.label}>
                <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-2">
                  {group.label}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`rounded-lg px-3 py-1 text-xs font-medium border ${group.color}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
