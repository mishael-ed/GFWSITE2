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

            <div className="nav-links">
              <Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>Home</Link>
              <Link to="/about" className="nav-link" onClick={() => setMenuOpen(false)}>About</Link>
              <Link to="/portfolio" className="nav-link" onClick={() => setMenuOpen(false)}>Portfolio</Link>
              <Link to="/contact" className="nav-link" onClick={() => setMenuOpen(false)}>Contact</Link>
              <Link to="/blogs" className="nav-link" onClick={() => setMenuOpen(false)}>Blogs</Link>
              <Link to="/support-us" className="nav-link" onClick={() => setMenuOpen(false)}>Support Us</Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Nav
