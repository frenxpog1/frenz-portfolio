import '../styles/About.css'

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Git & GitHub",
  "Node.js",
  "SQL"
]

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-image">
          <div className="profile-picture">
            <div className="placeholder-image">👨‍💻</div>
          </div>
        </div>
        <div className="about-content">
          <h2>About Me</h2>
          <p>
            I'm a Computer Science student at the University of San Carlos with a passion for web development
            and problem-solving. I love creating modern, responsive web applications that provide great user
            experiences.
          </p>
          <p>
            Currently, I'm focused on mastering React and TypeScript while building various projects to
            enhance my skills. My goal is to become a full-stack developer and contribute to meaningful
            projects that make a difference.
          </p>
          <div className="skills">
            <h3>Skills</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <span className="check">✅</span>
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 