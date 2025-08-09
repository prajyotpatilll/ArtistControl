'use client'

import { useEffect, useState } from 'react'

const ToggleTheme: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    // Check saved theme in localStorage
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light')
    setTheme(initialTheme)
    document.documentElement.classList.toggle('dark', initialTheme === 'dark')
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.classList.toggle('dark', newTheme === 'dark')
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-1 rounded border bg-gray-200 dark:bg-gray-800 dark:text-white"
    >
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  )
}

export default ToggleTheme
