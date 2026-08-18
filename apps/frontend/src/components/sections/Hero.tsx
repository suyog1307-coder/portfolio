'use client'

import type { Variants } from 'framer-motion'
import { motion } from 'framer-motion'
import { ArrowRight, Download, MapPin, Briefcase } from 'lucide-react'
import Image from 'next/image'
import AnimatedBackground from '@/components/ui/AnimatedBackground'

const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: 'easeOut' as const },
  }),
}

const fadeRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { delay: 0.3, duration: 0.7, ease: 'easeOut' as const },
  },
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0f] px-6 py-24"
    >
      <AnimatedBackground />

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-indigo-600/10 blur-[120px]" />
        <div className="absolute top-0 right-0 h-72 w-72 rounded-full bg-blue-500/10 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-violet-500/10 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        <div className="flex flex-col items-start text-left order-2 lg:order-1">
          <motion.p
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeLeft}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-sm font-semibold text-indigo-300"
          >
            👋 Available for opportunities
          </motion.p>

          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeLeft}
            className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl xl:text-6xl leading-tight"
          >
            Hi, I&apos;m{' '}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400 bg-clip-text text-transparent">
              Suyog Mali
            </span>
          </motion.h1>

          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeLeft}
            className="mt-2 text-xl font-medium text-indigo-300"
          >
            Software Developer & AI/ML Engineer
          </motion.p>

          <motion.p
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeLeft}
            className="mt-5 text-base text-zinc-400 leading-relaxed max-w-lg"
          >
            A fresher software developer passionate about building scalable backend
            systems with <span className="text-white font-medium">Node.js</span> &{' '}
            <span className="text-white font-medium">FastAPI</span>, deploying cloud
            infrastructure on <span className="text-white font-medium">AWS</span>, and
            developing intelligent applications powered by{' '}
            <span className="text-white font-medium">LLMs, RAG</span> &{' '}
            <span className="text-white font-medium">Generative AI</span>.
          </motion.p>

          <motion.div
            custom={4}
            initial="hidden"
            animate="visible"
            variants={fadeLeft}
            className="mt-6 flex flex-wrap gap-3"
          >
            <span className="flex items-center gap-1.5 text-sm text-zinc-400">
              <MapPin size={14} className="text-indigo-400" /> India — Open to Remote
            </span>
            <span className="flex items-center gap-1.5 text-sm text-zinc-400">
              <Briefcase size={14} className="text-indigo-400" /> Fresher
            </span>
          </motion.div>

          <motion.div
            custom={5}
            initial="hidden"
            animate="visible"
            variants={fadeLeft}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 hover:bg-indigo-500 transition-colors"
            >
              View My Work <ArrowRight size={16} />
            </a>
            <a
              href="/Suyog_Mali_Resume.pdf"
              download="Suyog_Mali_Resume.pdf"
              className="flex items-center gap-2 rounded-xl border border-zinc-700 px-6 py-3 text-sm font-semibold text-zinc-300 hover:border-zinc-500 hover:text-white transition-colors"
            >
              Download Resume <Download size={16} />
            </a>
          </motion.div>

          <motion.div
            custom={6}
            initial="hidden"
            animate="visible"
            variants={fadeLeft}
            className="mt-8 flex items-center gap-4"
          >
            <a
              href="https://github.com/suyog1307-coder"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex items-center gap-2 text-sm text-zinc-500 hover:text-white transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              GitHub
            </a>
            <span className="text-zinc-700">|</span>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex items-center gap-2 text-sm text-zinc-500 hover:text-white transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeRight}
          className="flex justify-center order-1 lg:order-2"
        >
          <div className="relative">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-blue-500 via-indigo-500 to-violet-500 blur-md opacity-60 animate-pulse" />
            <div className="absolute -inset-4 rounded-2xl border border-dashed border-indigo-500/30 animate-spin [animation-duration:20s]" />
            <div className="relative h-72 w-72 sm:h-96 sm:w-96 rounded-2xl overflow-hidden border-4 border-zinc-800 shadow-2xl shadow-indigo-500/20">
              <Image
                src="/suyog.jpg"
                alt="Suyog Mali"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
