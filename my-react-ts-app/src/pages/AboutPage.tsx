import React from 'react'
import '../styles/AboutPage.css'

const AboutPage: React.FC = () => {
  return (
    <main className="about-page">
      <section className="about-header">
        <h1>About Me</h1>
        <p>Get to know more about my journey and expertise</p>
      </section>

      <section className="about-content">
        <div className="about-section">
          <h2>My Journey</h2>
          <p>
            I'm Frenzter Padal, a Computer Science student at the University of San Carlos. My journey in technology began with a deep curiosity about how computers and software work, which inspired me to pursue a degree in Computer Science.
          </p>
          <p>
            Throughout my studies, I've been passionate about building web applications, learning new programming languages, and collaborating on projects with my peers. I enjoy solving problems, exploring new technologies, and continuously improving my skills to become a better developer and technologist.
          </p>
        </div>

        <div className="about-section">
          <h2>Skills & Expertise</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Frontend Development</h3>
              <ul>
                <li>React & TypeScript</li>
                <li>HTML5 & CSS3</li>
                <li>Responsive Design</li>
                <li>UI/UX Principles</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Backend Development</h3>
              <ul>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>RESTful APIs</li>
                <li>Database Design</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Tools & Technologies</h3>
              <ul>
                <li>Git & GitHub</li>
                <li>Docker</li>
                <li>AWS</li>
                <li>CI/CD</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="about-section">
          <h2>Education & Certifications</h2>
          <div className="education-timeline">
            <div className="timeline-item">
              <div className="timeline-date">2023 - Present</div>
              <div className="timeline-content">
                <h3>Bachelor of Science in Computer Science</h3>
                <p>University of San Carlos</p>
                <p>Focus on Software Engineering and Web Development</p>
              </div>
            </div>
          </div>
        </div>

        <div className="about-section">
          <h2>Interests & Hobbies</h2>
          <div className="interests-grid">
            <div className="interest-item">
              <span className="interest-icon">📺</span>
              <h3>Watching</h3>
              <p>Watching movies and series</p>
            </div>
            <div className="interest-item">
              <span className="interest-icon">🎮</span>
              <h3>Gaming</h3>
              <p>Strategy and puzzle games</p>
            </div>
            <div className="interest-item">
              <span className="interest-icon">🎵</span>
              <h3>Music</h3>
              <p>Listening to music</p>
            </div>
            <div className="interest-item">
              <span className="interest-icon">♟️⚽</span>
              <h3>Sports</h3>
              <p>Chess and football</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default AboutPage 