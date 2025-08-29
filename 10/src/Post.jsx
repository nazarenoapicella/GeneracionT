import { useState } from 'react'

export default function Post() {
  const [likes, setLikes] = useState(0)
  const [funny, setFunny] = useState(0)
  const [wow, setWow] = useState(0)

  const [comment, setComment] = useState('')
  const [comments, setComments] = useState([])
  const [error, setError] = useState('')

  const [animLike, setAnimLike] = useState(false)
  const [animFunny, setAnimFunny] = useState(false)
  const [animWow, setAnimWow] = useState(false)

  const animate = (setAnim) => {
    setAnim(true)
    setTimeout(() => setAnim(false), 300)
  }

  const handleComment = () => {
    if (!comment.trim()) {
      setError('⚠ El comentario no puede estar vacío.')
      return
    }
    if (comment.length > 40) {
      setError('⚠ Máximo 40 caracteres.')
      return
    }
    setComments([...comments, comment])
    setComment('')
    setError('')
  }

  return (
    <div style={{
      backgroundColor: '#202533',
      color: '#fff',
      padding: '1.5rem',
      borderRadius: '12px',
      width: '350px',
      fontFamily: 'sans-serif',
      boxShadow: '0 4px 10px rgba(0,0,0,0.3)'
    }}>
      <img
        src="https://i.imgur.com/feRvFIh.gif"
        alt="Meme"
        style={{ width: '100%', borderRadius: '8px', marginBottom: '1rem' }}
      />

      <p style={{ fontSize: '1.1rem' }}>¡Mi primer post en Reactbook! 🚀</p>

      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
        <button
          onClick={() => {
            setLikes(likes + 1)
            animate(setAnimLike)
          }}
          style={{
            transform: animLike ? 'scale(1.4)' : 'scale(1)',
            transition: 'transform 0.3s ease'
          }}
        >
          ❤️ {likes}
        </button>
        <button
          onClick={() => {
            setFunny(funny + 1)
            animate(setAnimFunny)
          }}
          style={{
            transform: animFunny ? 'scale(1.4)' : 'scale(1)',
            transition: 'transform 0.3s ease'
          }}
        >
          😂 {funny}
        </button>
        <button
          onClick={() => {
            setWow(wow + 1)
            animate(setAnimWow)
          }}
          style={{
            transform: animWow ? 'scale(1.4)' : 'scale(1)',
            transition: 'transform 0.3s ease'
          }}
        >
          😲 {wow}
        </button>
      </div>

      <div>
        <input
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Escribí un comentario..."
          maxLength={40}
          style={{
            width: '100%',
            padding: '0.5rem',
            borderRadius: '6px',
            border: '1px solid #ccc',
            marginBottom: '0.5rem'
          }}
        />
        <button
          onClick={handleComment}
          style={{
            backgroundColor: '#00b4d8',
            color: 'white',
            border: 'none',
            padding: '0.5rem 1rem',
            borderRadius: '6px',
            cursor: 'pointer'
          }}
        >
          Comentar
        </button>
        {error && <p style={{ color: 'red', fontSize: '0.9rem' }}>{error}</p>}
      </div>

      <div style={{ marginTop: '1rem', textAlign: 'left' }}>
        {comments.length > 0 && <h4>Comentarios:</h4>}
        <ul>
          {comments.map((c, i) => (
            <li key={i} style={{ marginBottom: '0.3rem' }}>💬 {c}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
