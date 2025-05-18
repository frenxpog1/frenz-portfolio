import '../styles/TechStack.css'

const technologies = [
  { name: 'Web Development', icon: '💻' },
  { name: 'Mobile Development', icon: '📱' },
  { name: 'HTML5', icon: '🌐' },
  { name: 'CSS3', icon: '🎨' },
  { name: 'JavaScript', icon: '📜' },
  { name: 'TypeScript', icon: '📘' },
  { name: 'React', icon: '⚛️' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'Git', icon: '📦' },
  { name: 'GitHub', icon: '🐙' },
  { name: 'C', icon: '🔵' }
]

const TechStack = () => {
  return (
    <section id="tech-stack" className="tech-stack">
      <h2>Tech Stack</h2>
      <div className="tech-grid">
        {technologies.map((tech, index) => (
          <div key={index} className="tech-item">
            <div className="tech-icon">{tech.icon}</div>
            <span className="tech-name">{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TechStack 