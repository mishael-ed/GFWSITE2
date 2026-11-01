import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { adminApi, getToken, setToken } from './adminApi'
import { AdminButton, Message, ui } from './adminUi'
import AdminCalendar from './AdminCalendar'
import AdminBlogs from './AdminBlogs'

function LoginForm({ onLogin }) {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [busy, setBusy] = useState(false)

  const submit = async (event) => {
    event.preventDefault()
    setBusy(true)
    setError('')
    try {
      const { token } = await adminApi.login(password)
      setToken(token)
      onLogin()
    } catch (err) {
      setError(err.message)
    } finally {
      setBusy(false)
    }
  }

  return (
    <form onSubmit={submit} style={{ ...ui.card, maxWidth: '420px', margin: '0 auto' }}>
      <label style={ui.label} htmlFor="admin-password">Admin password</label>
      <input
        id="admin-password"
        style={ui.input}
        type="password"
        autoComplete="current-password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        autoFocus
        required
      />
      <Message>{error}</Message>
      <AdminButton type="submit" variant="primary" disabled={busy || !password} style={{ marginTop: '14px' }}>
        {busy ? 'Checking…' : 'Log in'}
      </AdminButton>
    </form>
  )
}

function AdminPage() {
  const [loggedIn, setLoggedIn] = useState(() => Boolean(getToken()))
  const [tab, setTab] = useState('calendar')

  useEffect(() => {
    document.title = 'Admin | Greenfingers'
    const meta = document.createElement('meta')
    meta.name = 'robots'
    meta.content = 'noindex, nofollow'
    document.head.appendChild(meta)
    return () => meta.remove()
  }, [])

  const logout = () => {
    setToken(null)
    setLoggedIn(false)
  }

  const tabStyle = (name) => ({
    padding: '10px 20px',
    fontFamily: 'Modern Sans',
    fontWeight: 'bold',
    fontSize: '16px',
    cursor: 'pointer',
    color: '#000000',
    background: tab === name ? '#B2D235' : '#ffffff',
    border: '2px solid #1C1C1C',
    borderRadius: '4px 8px 3px 7px',
  })

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#FDF8DF', padding: '28px 20px 80px', boxSizing: 'border-box' }}>
      <div style={{ maxWidth: '980px', margin: '0 auto' }}>
        <header style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '14px', marginBottom: '30px' }}>
          <h1 style={{ ...ui.heading, color: '#009a2e', fontSize: 'clamp(40px, 7vw, 60px)' }}>ADMIN</h1>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <Link to="/" style={{ fontFamily: 'Modern Sans', fontWeight: 'bold', color: '#000000', fontSize: '15px' }}>← Back to site</Link>
            {loggedIn && <AdminButton small onClick={logout}>Log out</AdminButton>}
          </div>
        </header>

        {!loggedIn ? (
          <LoginForm onLogin={() => setLoggedIn(true)} />
        ) : (
          <>
            <div role="tablist" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '26px' }}>
              <button type="button" role="tab" aria-selected={tab === 'calendar'} style={tabStyle('calendar')} onClick={() => setTab('calendar')}>Calendar</button>
              <button type="button" role="tab" aria-selected={tab === 'blogs'} style={tabStyle('blogs')} onClick={() => setTab('blogs')}>Blogs</button>
            </div>

            {tab === 'calendar' ? <AdminCalendar onLogout={logout} /> : <AdminBlogs onLogout={logout} />}
          </>
        )}
      </div>
    </div>
  )
}

export default AdminPage
