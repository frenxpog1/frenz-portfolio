import React from 'react'
import '../styles/ProjectsPage.css'

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A modern portfolio website built with React and TypeScript",
    technologies: ["React", "TypeScript", "CSS"],
    image: "🌐",
    link: "#",
    longDescription: "A comprehensive portfolio website showcasing my work and skills. Features include dark/light mode, responsive design, and interactive components.",
    features: [
      "Dark/Light mode toggle",
      "Responsive design",
      "Interactive components",
      "Modern UI/UX"
    ],
    githubLink: "https://github.com/yourusername/portfolio"
  },
  {
    id: 2,
    title: "Task Manager",
    description: "A full-stack task management application",
    technologies: ["React", "Node.js", "MongoDB"],
    image: "📝",
    link: "#",
    longDescription: "A full-featured task management application with user authentication, real-time updates, and collaborative features.",
    features: [
      "User authentication",
      "Real-time updates",
      "Task categories",
      "Collaborative features"
    ],
    githubLink: "https://github.com/yourusername/task-manager"
  },
  {
    id: 3,
    title: "Weather App",
    description: "Real-time weather information application",
    technologies: ["JavaScript", "API Integration", "CSS"],
    image: "🌤️",
    link: "#",
    longDescription: "A weather application that provides real-time weather information using external APIs. Features include location-based weather, forecasts, and weather alerts.",
    features: [
      "Location-based weather",
      "5-day forecast",
      "Weather alerts",
      "Interactive maps"
    ],
    githubLink: "https://github.com/yourusername/weather-app"
  }
]

const ProjectsPage: React.FC = () => {
  return (
    <main className="projects-page">
      <section className="projects-header">
        <h1>My Projects</h1>
        <p>Explore my latest work and personal projects</p>
      </section>

      <section className="projects-grid">
        {projects.map((project) => (
          <article key={project.id} className="project-card">
            <div className="project-image">
              {project.image}
            </div>
            <div className="project-content">
              <h2>{project.title}</h2>
              <p className="project-description">{project.longDescription}</p>
              
              <div className="project-features">
                <h3>Key Features</h3>
                <ul>
                  {project.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="project-technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>

              <div className="project-links">
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="github-link"
                >
                  View on GitHub
                </a>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="demo-link"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  )
}

export default ProjectsPage 