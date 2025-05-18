import React from 'react';
import '../styles/Footer.css'

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-info">
          <p>© 2025 Frenzter Padal. All rights reserved.</p>
          <p>Built with React and TypeScript</p>
        </div>
        <div className="footer-links">
          <a href="https://github.com/frenxpog1" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://web.facebook.com/frenzpog1" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer 