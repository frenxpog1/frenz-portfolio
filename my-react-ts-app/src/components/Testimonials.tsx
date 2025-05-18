import React, { useState, useRef, useEffect } from 'react'
import '../styles/Testimonials.css'

interface Testimonial {
  id: string
  name: string
  role: string
  image: string
  text: string
  profileImage?: string
  socialMedia?: {
    github?: string
    linkedin?: string
    twitter?: string
    facebook?: string
  }
}

const initialTestimonials: Testimonial[] = [
  {
    id: "1",
    name: "John Doe",
    role: "Classmate",
    image: "👨",
    text: "Frenzter is an amazing developer who always delivers high-quality work.",
    socialMedia: {
      github: "johndoe",
      linkedin: "john-doe"
    }
  },
  {
    id: "2",
    name: "Jane Smith",
    role: "Instructor",
    image: "👩",
    text: "One of the most dedicated students I've had the pleasure to teach.",
    socialMedia: {
      linkedin: "jane-smith"
    }
  },
  {
    id: "3",
    name: "Mike Johnson",
    role: "Friend",
    image: "👨",
    text: "Great problem solver and always willing to help others learn.",
    socialMedia: {
      twitter: "mikej"
    }
  }
]

// Helper to generate a unique ID
const generateId = () => '_' + Math.random().toString(36).substr(2, 9)

const Testimonials: React.FC = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(() => {
    const saved = localStorage.getItem('testimonials')
    return saved ? JSON.parse(saved) : initialTestimonials
  })
  const [showForm, setShowForm] = useState(false)
  const [newTestimonial, setNewTestimonial] = useState({
    name: '',
    role: '',
    text: '',
    profileImage: '',
    socialMedia: {
      github: '',
      linkedin: '',
      twitter: '',
      facebook: ''
    }
  })
  const fileInputRef = useRef<HTMLInputElement>(null)

  // Store IDs of testimonials submitted by this user
  const [userTestimonialIds, setUserTestimonialIds] = useState<string[]>(() => {
    const saved = localStorage.getItem('userTestimonialIds')
    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {
    localStorage.setItem('testimonials', JSON.stringify(testimonials))
  }, [testimonials])

  useEffect(() => {
    localStorage.setItem('userTestimonialIds', JSON.stringify(userTestimonialIds))
  }, [userTestimonialIds])

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setNewTestimonial(prev => ({
          ...prev,
          profileImage: reader.result as string
        }))
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const id = generateId()
    const testimonial: Testimonial = {
      id,
      name: newTestimonial.name.trim() || 'Anonymous',
      role: newTestimonial.role,
      image: '👤',
      text: newTestimonial.text,
      profileImage: newTestimonial.profileImage,
      socialMedia: Object.values(newTestimonial.socialMedia).some(value => value)
        ? newTestimonial.socialMedia
        : undefined
    }
    setTestimonials([...testimonials, testimonial])
    setUserTestimonialIds([...userTestimonialIds, id])
    setNewTestimonial({
      name: '',
      role: '',
      text: '',
      profileImage: '',
      socialMedia: {
        github: '',
        linkedin: '',
        twitter: '',
        facebook: ''
      }
    })
    setShowForm(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    if (name.startsWith('social-')) {
      const platform = name.replace('social-', '')
      setNewTestimonial(prev => ({
        ...prev,
        socialMedia: {
          ...prev.socialMedia,
          [platform]: value
        }
      }))
    } else {
      setNewTestimonial(prev => ({
        ...prev,
        [name]: value
      }))
    }
  }

  const handleDelete = (id: string) => {
    setTestimonials(testimonials.filter(t => t.id !== id))
    setUserTestimonialIds(userTestimonialIds.filter(uid => uid !== id))
  }

  return (
    <section id="testimonials" className="testimonials">
      <h2>Testimonials</h2>
      <div className="testimonials-grid">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <div className="testimonial-image">
              {testimonial.profileImage ? (
                <img 
                  src={testimonial.profileImage} 
                  alt={testimonial.name} 
                  className="profile-image"
                />
              ) : (
                testimonial.image
              )}
            </div>
            <p className="testimonial-text">{testimonial.text}</p>
            <div className="testimonial-author">
              <h4>{testimonial.name}</h4>
              <span>{testimonial.role}</span>
              {testimonial.socialMedia && (
                <div className="social-links">
                  {testimonial.socialMedia.github && (
                    <a 
                      href={`https://github.com/${testimonial.socialMedia.github}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link github"
                    >
                      GitHub
                    </a>
                  )}
                  {testimonial.socialMedia.linkedin && (
                    <a 
                      href={`https://linkedin.com/in/${testimonial.socialMedia.linkedin}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link linkedin"
                    >
                      LinkedIn
                    </a>
                  )}
                  {testimonial.socialMedia.twitter && (
                    <a 
                      href={`https://twitter.com/${testimonial.socialMedia.twitter}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link twitter"
                    >
                      Twitter
                    </a>
                  )}
                  {testimonial.socialMedia.facebook && (
                    <a 
                      href={`https://facebook.com/${testimonial.socialMedia.facebook}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link facebook"
                    >
                      Facebook
                    </a>
                  )}
                </div>
              )}
              {userTestimonialIds.includes(testimonial.id) && (
                <button className="delete-btn" onClick={() => handleDelete(testimonial.id)}>
                  Delete
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="add-testimonial">
        {!showForm ? (
          <button 
            className="add-testimonial-btn"
            onClick={() => setShowForm(true)}
          >
            Add Your Testimonial
          </button>
        ) : (
          <form onSubmit={handleSubmit} className="testimonial-form">
            <div className="form-group image-upload">
              <div 
                className="image-preview"
                onClick={() => fileInputRef.current?.click()}
              >
                {newTestimonial.profileImage ? (
                  <img 
                    src={newTestimonial.profileImage} 
                    alt="Preview" 
                    className="preview-image"
                  />
                ) : (
                  <div className="upload-placeholder">
                    <span>📷</span>
                    <p>Click to upload photo</p>
                  </div>
                )}
              </div>
              <input
                type="file"
                ref={fileInputRef}
                accept="image/*"
                onChange={handleImageUpload}
                style={{ display: 'none' }}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name (Optional)"
                value={newTestimonial.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="role"
                placeholder="Your Role (Optional)"
                value={newTestimonial.role}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <textarea
                name="text"
                placeholder="Your Testimonial"
                value={newTestimonial.text}
                onChange={handleChange}
                required
                rows={4}
              />
            </div>
            <div className="form-group social-media-group">
              <h4>Social Media (Optional)</h4>
              <p className="helper-text">Add your social media to verify your identity</p>
              <div className="social-inputs">
                <input
                  type="text"
                  name="social-github"
                  placeholder="GitHub Username"
                  value={newTestimonial.socialMedia.github}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="social-linkedin"
                  placeholder="LinkedIn Username"
                  value={newTestimonial.socialMedia.linkedin}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="social-twitter"
                  placeholder="Twitter Username"
                  value={newTestimonial.socialMedia.twitter}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="social-facebook"
                  placeholder="Facebook Username"
                  value={newTestimonial.socialMedia.facebook}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-buttons">
              <button type="submit" className="submit-btn">Submit</button>
              <button 
                type="button" 
                className="cancel-btn"
                onClick={() => setShowForm(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  )
}

export default Testimonials 