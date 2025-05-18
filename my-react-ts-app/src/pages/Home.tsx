import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Home.css'

const Home: React.FC = () => {
  return (
    <main className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Hi, I'm Frenzter Padal</h1>
          <h2>Computer Science Student</h2>
          <p>
            I build modern web applications with a focus on user experience
            and clean code. Let's create something amazing together.
          </p>
          <div className="hero-buttons">
            <Link to="/projects" className="primary-button">
              View My Work
            </Link>
            <Link to="/contact" className="secondary-button">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      <section className="featured-projects">
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <div className="project-image">🌐</div>
            <div className="project-content">
              <h3>Portfolio Website</h3>
              <p>A modern portfolio website built with React and TypeScript</p>
              <Link to="/projects" className="project-link">
                Learn More
              </Link>
            </div>
          </div>
          <div className="project-card">
            <div className="project-image">📝</div>
            <div className="project-content">
              <h3>Task Manager</h3>
              <p>A full-stack task management application</p>
              <Link to="/projects" className="project-link">
                Learn More
              </Link>
            </div>
          </div>
          <div className="project-card">
            <div className="project-image">🌤️</div>
            <div className="project-content">
              <h3>Weather App</h3>
              <p>Real-time weather information application</p>
              <Link to="/projects" className="project-link">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="tech-stack">
        <h2>Tech Stack</h2>
        <div className="tech-grid">
          <div className="tech-item">
            <span className="tech-icon">⚛️</span>
            <h3>React</h3>
          </div>
          <div className="tech-item">
            <span className="tech-icon">📘</span>
            <h3>TypeScript</h3>
          </div>
          <div className="tech-item">
            <span className="tech-icon">🎨</span>
            <h3>CSS</h3>
          </div>
          <div className="tech-item">
            <span className="tech-icon">🚀</span>
            <h3>Node.js</h3>
          </div>
        </div>
      </section>

      <section className="cta">
        <h2>Ready to Start Your Project?</h2>
        <p>Let's work together to bring your ideas to life</p>
        <Link to="/contact" className="cta-button">
          Get in Touch
        </Link>
      </section>
    </main>
  )
}

export default Home 