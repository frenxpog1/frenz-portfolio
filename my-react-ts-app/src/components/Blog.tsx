import React, { useState, useEffect, useRef } from 'react'
import '../styles/Blog.css'

const blogPosts = [
  {
    id: 1,
    title: "How I Fixed a JS Bug",
    excerpt: "A journey through debugging and fixing a complex JavaScript issue...",
    date: "May 15, 2024",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "My Experience Learning Git",
    excerpt: "Tips and tricks I learned while mastering version control...",
    date: "May 10, 2024",
    readTime: "4 min read"
  },
  {
    id: 3,
    title: "Building My First Website",
    excerpt: "The challenges and triumphs of creating my first web project...",
    date: "May 5, 2024",
    readTime: "6 min read"
  }
]

// Helper to generate a unique ID
const generateId = () => '_' + Math.random().toString(36).substr(2, 9)

const Blog = () => {
  // Comment system state
  const [comments, setComments] = useState(() => {
    const saved = localStorage.getItem('blogComments')
    return saved ? JSON.parse(saved) : []
  })
  const [userCommentIds, setUserCommentIds] = useState(() => {
    const saved = localStorage.getItem('userBlogCommentIds')
    return saved ? JSON.parse(saved) : []
  })
  const [newComment, setNewComment] = useState({
    name: '',
    role: '',
    text: '',
    social: '',
    profileImage: ''
  })
  const [showForm, setShowForm] = useState(false)
  const [editId, setEditId] = useState<string | null>(null)
  const [editComment, setEditComment] = useState<any>(null)
  const commentInputRef = useRef<HTMLInputElement>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    localStorage.setItem('blogComments', JSON.stringify(comments))
  }, [comments])
  useEffect(() => {
    localStorage.setItem('userBlogCommentIds', JSON.stringify(userCommentIds))
  }, [userCommentIds])

  const handleCommentChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setNewComment(prev => ({ ...prev, [name]: value }))
  }

  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setEditComment((prev: any) => ({ ...prev, [name]: value }))
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setNewComment(prev => ({
          ...prev,
          profileImage: reader.result as string
        }))
      }
      reader.readAsDataURL(file)
    }
  }

  const handleEditImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setEditComment((prev: any) => ({
          ...prev,
          profileImage: reader.result as string
        }))
      }
      reader.readAsDataURL(file)
    }
  }

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const id = generateId()
    const now = new Date().toISOString()
    const comment = {
      id,
      name: newComment.name.trim() || 'Anonymous',
      role: newComment.role.trim(),
      text: newComment.text,
      social: newComment.social.trim() || undefined,
      profileImage: newComment.profileImage || '',
      lastEdited: now
    }
    setComments([...comments, comment])
    setUserCommentIds([...userCommentIds, id])
    setNewComment({ name: '', role: '', text: '', social: '', profileImage: '' })
    setShowForm(false)
  }

  const handleEditSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!editId) return
    const now = new Date().toISOString()
    setComments((prev: any[]) => prev.map((c: any) =>
      c.id === editId ? { ...c, ...editComment, lastEdited: now } : c
    ))
    setEditId(null)
    setEditComment(null)
  }

  const handleEdit = (comment: any) => {
    setEditId(comment.id)
    setEditComment({ ...comment })
  }

  const handleCancelEdit = () => {
    setEditId(null)
    setEditComment(null)
  }

  const handleDeleteComment = (id: string) => {
    setComments((comments: any[]) => comments.filter((c: any) => c.id !== id))
    setUserCommentIds((userCommentIds: any[]) => userCommentIds.filter((uid: any) => uid !== id))
  }

  // Detect social platform and return SVG icon JSX
  const getSocialIcon = (url: string) => {
    if (!url) return null
    if (url.includes('facebook.com')) return (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="#1877f2" xmlns="http://www.w3.org/2000/svg" className="social-icon"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg>
    )
    if (url.includes('linkedin.com')) return (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="#0A66C2" xmlns="http://www.w3.org/2000/svg" className="social-icon"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z"/></svg>
    )
    if (url.includes('instagram.com')) return (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="#E4405F" xmlns="http://www.w3.org/2000/svg" className="social-icon"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.241-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.771.131 4.659.425 3.678 1.406c-.981.981-1.275 2.093-1.334 3.374C2.013 8.332 2 8.741 2 12c0 3.259.013 3.668.072 4.948.059 1.281.353 2.393 1.334 3.374.981.981 2.093 1.275 3.374 1.334C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.281-.059 2.393-.353 3.374-1.334.981-.981 1.275-2.093 1.334-3.374.059-1.28.072-1.689.072-4.948 0-3.259-.013-3.668-.072-4.948-.059-1.281-.353-2.393-1.334-3.374-.981-.981-2.093-1.275-3.374-1.334C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
    )
    if (url.includes('twitter.com') || url.includes('x.com')) return (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="#1DA1F2" xmlns="http://www.w3.org/2000/svg" className="social-icon"><path d="M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.916 4.916 0 0 0-8.38 4.482C7.691 8.095 4.066 6.13 1.64 3.161c-.542.929-.856 2.01-.857 3.17 0 2.188 1.115 4.116 2.823 5.247a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.209c9.058 0 14.009-7.496 14.009-13.986 0-.21 0-.423-.016-.634A9.936 9.936 0 0 0 24 4.557z"/></svg>
    )
    return (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="#888" xmlns="http://www.w3.org/2000/svg" className="social-icon"><circle cx="12" cy="12" r="10" fill="#888"/><text x="12" y="16" textAnchor="middle" fontSize="10" fill="#fff">Link</text></svg>
    )
  }

  const formatDate = (iso: string) => {
    if (!iso) return ''
    const date = new Date(iso)
    return date.toLocaleString().replace(/,/, '')
  }

  return (
    <section id="blog" className="blog">
      <h2>Blog</h2>
      <div className="blog-grid">
        {blogPosts.map((post) => (
          <article key={post.id} className="blog-card">
            <div className="blog-content">
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <div className="blog-meta">
                <span className="date">{post.date}</span>
                <span className="read-time">{post.readTime}</span>
              </div>
              <a href="#" className="read-more">Read More →</a>
            </div>
          </article>
        ))}
      </div>
      {/* Comment System */}
      <div className="blog-comments">
        <h3>Comments</h3>
        {!showForm ? (
          <button className="add-comment-btn" onClick={() => setShowForm(true)}>
            Add Comment
          </button>
        ) : (
          <form className="comment-form" onSubmit={handleCommentSubmit}>
            <div className="form-group image-upload">
              <div
                className="image-preview"
                onClick={() => fileInputRef.current?.click()}
              >
                {newComment.profileImage ? (
                  <img
                    src={newComment.profileImage}
                    alt="Preview"
                    className="preview-image"
                  />
                ) : (
                  <div className="upload-placeholder">
                    <span>👤</span>
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
            <input
              type="text"
              name="name"
              placeholder="Your Name (Optional)"
              value={newComment.name}
              onChange={handleCommentChange}
              ref={commentInputRef}
            />
            <input
              type="text"
              name="role"
              placeholder="Your Role (Optional)"
              value={newComment.role}
              onChange={handleCommentChange}
            />
            <textarea
              name="text"
              placeholder="Your Comment"
              value={newComment.text}
              onChange={handleCommentChange}
              required
              rows={3}
            />
            <input
              type="text"
              name="social"
              placeholder="Social Media Link (Optional)"
              value={newComment.social}
              onChange={handleCommentChange}
            />
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
        <div className="comments-list">
          {comments.length === 0 && <p className="no-comments">No comments yet.</p>}
          {comments.map((comment: any) => (
            <div key={comment.id} className="comment-card">
              {editId === comment.id ? (
                <form onSubmit={handleEditSubmit} className="comment-form">
                  <div className="form-group image-upload">
                    <div
                      className="image-preview"
                      onClick={() => fileInputRef.current?.click()}
                    >
                      {editComment.profileImage ? (
                        <img
                          src={editComment.profileImage}
                          alt={editComment.name}
                          className="preview-image"
                        />
                      ) : (
                        <div className="upload-placeholder">
                          <span>👤</span>
                          <p>Click to upload photo</p>
                        </div>
                      )}
                    </div>
                    <input
                      type="file"
                      ref={fileInputRef}
                      accept="image/*"
                      onChange={handleEditImageUpload}
                      style={{ display: 'none' }}
                    />
                  </div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name (Optional)"
                    value={editComment.name}
                    onChange={handleEditChange}
                  />
                  <input
                    type="text"
                    name="role"
                    placeholder="Your Role (Optional)"
                    value={editComment.role}
                    onChange={handleEditChange}
                  />
                  <textarea
                    name="text"
                    placeholder="Your Comment"
                    value={editComment.text}
                    onChange={handleEditChange}
                    required
                    rows={3}
                  />
                  <input
                    type="text"
                    name="social"
                    placeholder="Social Media Link (Optional)"
                    value={editComment.social}
                    onChange={handleEditChange}
                  />
                  <div className="form-buttons">
                    <button type="submit" className="submit-btn">Save</button>
                    <button type="button" className="cancel-btn" onClick={handleCancelEdit}>Cancel</button>
                  </div>
                </form>
              ) : (
                <>
                  <div className="comment-header">
                    <div className="comment-image">
                      {comment.profileImage ? (
                        <img src={comment.profileImage} alt={comment.name} className="profile-image" />
                      ) : (
                        <span className="default-profile">👤</span>
                      )}
                    </div>
                    <div className="comment-meta">
                      <span className="comment-author">{comment.name}</span>
                      {comment.role && <span className="comment-role">{comment.role}</span>}
                      {comment.social && (
                        <a
                          href={comment.social}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="social-link"
                        >
                          {getSocialIcon(comment.social)}
                        </a>
                      )}
                    </div>
                    <div className="comment-actions">
                      <button className="edit-btn" onClick={() => handleEdit(comment)}>Edit</button>
                      <button className="delete-btn" onClick={() => handleDeleteComment(comment.id)}>Delete</button>
                    </div>
                  </div>
                  <p className="comment-text">{comment.text}</p>
                  <span className="comment-timestamp">{formatDate(comment.lastEdited)}</span>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog 