import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
      <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <svg width="50" height="30" style={{ flexShrink: 0, overflow: 'visible' }}>
            <path d="M2 15 Q 15 2, 25 15 T 48 15" stroke="#000000" strokeWidth="4" fill="none" strokeLinecap="round" />
          </svg>

          <div style={{ display: 'flex', gap: '60px' }}>
            <Link to="/" className="nav-link" style={{ textDecoration: 'none', fontSize: '50px' }}>Home</Link>
            <Link to="/about" className="nav-link" style={{ textDecoration: 'none', fontSize: '50px' }}>About</Link>
            <Link to="/portfolio" className="nav-link" style={{ textDecoration: 'none', fontSize: '50px' }}>Portfolio</Link>
            <a href="#blogs" className="nav-link" style={{ textDecoration: 'none', fontSize: '50px' }}>Contact</a>
            <a href="#donate" className="nav-link" style={{ textDecoration: 'none', fontSize: '50px' }}>Blogs</a>
          </div>

          <svg width="50" height="30" style={{ flexShrink: 0, overflow: 'visible' }}>
            <path d="M2 15 Q 15 28, 25 15 T 48 15" stroke="#000000" strokeWidth="4" fill="none" strokeLinecap="round" />
          </svg>
        </div>

        <svg width="100%" height="20" viewBox="0 0 1000 20" preserveAspectRatio="none" style={{ marginTop: '10px' }}>
          <path
            d="M0 10 Q 50 6, 100 10 T 200 10 T 300 10 T 400 10 T 500 10 T 600 10 T 700 10 T 800 10 T 900 10 T 1000 10"
            stroke="#000000"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  )
}

export default Nav
