import React from 'react'
import '../styles/Hero.css'

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Hi, I'm Frenzter Padal</h1>
          <h2>Computer Science Student at University of San Carlos</h2>
          <p>I build web projects and love solving problems</p>
          <button 
            className="cta-button"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Let's Talk
          </button>
        </div>
        <div className="hero-image">
          <div className="profile-picture">
            {/* Add your profile picture here */}
            <div className="placeholder-image">👨‍💻</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero 