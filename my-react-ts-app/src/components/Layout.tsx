import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import '../styles/Layout.css'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'dark') return true
    if (savedTheme === 'light') return false
    // Default to dark mode
    return true
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light')
    localStorage.setItem('theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div className="layout">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      {children}
      <Footer />
    </div>
  )
}

export default Layout 