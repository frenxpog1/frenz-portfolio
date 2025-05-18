import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../styles/Navbar.css'

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const isActive = (path: string) => {
    return location.pathname === path
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo" onClick={closeMenu}>
          Frenzter Padal
        </Link>

        <button className="menu-toggle" onClick={toggleMenu}>
          <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}></span>
        </button>

        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <Link 
            to="/" 
            className={isActive('/') ? 'active' : ''} 
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className={isActive('/about') ? 'active' : ''} 
            onClick={closeMenu}
          >
            About
          </Link>
          <Link 
            to="/projects" 
            className={isActive('/projects') ? 'active' : ''} 
            onClick={closeMenu}
          >
            Projects
          </Link>
          <Link 
            to="/blog" 
            className={isActive('/blog') ? 'active' : ''} 
            onClick={closeMenu}
          >
            Blog
          </Link>
          <Link 
            to="/contact" 
            className={isActive('/contact') ? 'active' : ''} 
            onClick={closeMenu}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 