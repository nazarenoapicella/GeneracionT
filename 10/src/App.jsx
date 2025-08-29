import Post from './Post'

export default function App() {
  return (
    <main style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #4a00e0, #8e2de2)',
      margin: 0,
      padding: '2rem',
      fontFamily: 'sans-serif',
    }}>
      <Post />
    </main>
  )
}
