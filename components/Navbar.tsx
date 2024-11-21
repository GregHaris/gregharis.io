'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

export default function Navbar() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background text-foreground shadow-md">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold">JD</Link>
          <div className="flex items-center space-x-4">
            <button onClick={() => scrollToSection('about')} className="hover:text-gray-600 dark:hover:text-gray-300">About</button>
            <button onClick={() => scrollToSection('projects')} className="hover:text-gray-600 dark:hover:text-gray-300">Projects</button>
            <button onClick={() => scrollToSection('skills')} className="hover:text-gray-600 dark:hover:text-gray-300">Skills</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-gray-600 dark:hover:text-gray-300">Contact</button>
            <Link href="/blog" className="hover:text-gray-600 dark:hover:text-gray-300">Blog</Link>
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
              aria-label="Toggle dark mode"
            >
              {mounted && (theme === 'dark' ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              ))}
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

