import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const revealSelector = [
  '.landing-header',
  '.card-list > *',
  '.content-page > *',
  '.director-content > *',
  '.contact-layout > *',
  '.home-feature',
  '.stats-grid .doodle-stat',
  '.site-footer .footer-grid > *',
].join(',')

function SiteMotion() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined

    let observer
    const frame = requestAnimationFrame(() => {
      const elements = [...document.querySelectorAll(revealSelector)]

      elements.forEach((element, index) => {
        element.classList.add('motion-reveal')
        element.style.setProperty('--reveal-delay', `${Math.min(index % 5, 4) * 65}ms`)
      })

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return
            entry.target.classList.add('motion-visible')
            observer.unobserve(entry.target)
          })
        },
        { threshold: 0.08, rootMargin: '0px 0px -30px' }
      )

      elements.forEach((element) => observer.observe(element))
    })

    return () => {
      cancelAnimationFrame(frame)
      observer?.disconnect()
    }
  }, [location.pathname])

  return null
}

export default SiteMotion
