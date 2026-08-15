import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import './globals.css'

const geist = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Suyog Mali — Full-Stack Developer',
  description:
    'Portfolio of Suyog Mali, a Full-Stack Developer specialising in Next.js, React, and MySQL.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${geist.variable} scroll-smooth`}>
      <body className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-white antialiased">
        {children}
      </body>
    </html>
  )
}
