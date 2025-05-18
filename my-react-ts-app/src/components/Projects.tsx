import React from 'react'
import '../styles/Projects.css'

interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  image: string
  link: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A modern portfolio website built with React and TypeScript",
    technologies: ["React", "TypeScript", "CSS"],
    image: "🌐",
    link: "#"
  },
  {
    id: 2,
    title: "Task Manager",
    description: "A full-stack task management application",
    technologies: ["React", "Node.js", "MongoDB"],
    image: "📝",
    link: "#"
  },
  {
    id: 3,
    title: "Weather App",
    description: "Real-time weather information application",
    technologies: ["JavaScript", "API Integration", "CSS"],
    image: "🌤️",
    link: "#"
  }
]

const Projects: React.FC = () => {
  return (
    <section id="projects" className="projects">
      <h2>Featured Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image">
              {project.image}
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
              <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                View Project →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects 