import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import birdInHandLogo from './assets/bird in hand ring logo.png'
import menuIcon from './assets/abstracts/39Artboard 8menu .png'

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    if (!menuOpen) return undefined

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [menuOpen])

  return (
    <header className={`site-header${menuOpen ? ' menu-open' : ''}`}>
      <div className="mobile-header-row">
        <Link to="/" className="header-logo-link" aria-label="Greenfingers Wildlife Initiative home" onClick={() => setMenuOpen(false)}>
          <img className="header-logo" src={birdInHandLogo} alt="Greenfingers Wildlife Initiative" />
        </Link>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <img className="menu-icon" src={menuIcon} alt="" aria-hidden="true" />
        </button>
      </div>

      <nav id="main-navigation" className="site-nav" aria-label="Main navigation">
        <div className="site-nav-inner">
          <div className="site-nav-row">
            <svg className="nav-doodle nav-doodle-left" width="50" height="30" aria-hidden="true">
              <path d="M2 15 Q 15 2, 25 15 T 48 15" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
            </svg>

            <div className="nav-links">
              <Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>Home</Link>
              <Link to="/about" className="nav-link" onClick={() => setMenuOpen(false)}>About Us</Link>
              <Link to="/portfolio" className="nav-link" onClick={() => setMenuOpen(false)}>Portfolio</Link>
              <Link to="/contact" className="nav-link" onClick={() => setMenuOpen(false)}>Contact</Link>
              <a href="#blogs" className="nav-link" onClick={() => setMenuOpen(false)}>Blogs</a>
            </div>

            <svg className="nav-doodle nav-doodle-right" width="50" height="30" aria-hidden="true">
              <path d="M2 15 Q 15 28, 25 15 T 48 15" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
            </svg>
          </div>

          <svg className="nav-underline" width="100%" height="20" viewBox="0 0 1000 20" preserveAspectRatio="none" aria-hidden="true">
            <path
              d="M0 10 Q 50 6, 100 10 T 200 10 T 300 10 T 400 10 T 500 10 T 600 10 T 700 10 T 800 10 T 900 10 T 1000 10"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </nav>
    </header>
  )
}

export default Nav
