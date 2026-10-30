import { useCallback, useEffect, useRef, useState } from 'react'
import star_shape from './assets/abstracts/star shape.png'
import shell from './assets/abstracts/shell.png'
import FreeformButton from './FreeformButton'

const imagePath = '/original%20images/hero%20slider/'
const AUTOPLAY_MS = 7000

const slides = [
  {
    id: 'welcome',
    image: `${imagePath}welcome-turtle-beach.webp`,
    position: 'center 55%',
    welcome: true,
    text: ["Where passion meets purpose in", "protecting Nigeria's extraordinary wildlife and natural heritage."],
    cta: { label: 'Discover our story', to: '/about', color: '#B2D235' },
  },
  {
    id: 'calendar',
    image: `${imagePath}world-animal-day.webp`,
    position: 'center 30%',
    eyebrow: 'Join us in person',
    title: 'SEE WHAT’S COMING UP',
    text: ['Festivals, clean-ups, forums and open days — find an event near you and come wild with us.'],
    cta: { label: 'View our calendar', to: '/events/calendar', color: '#F69524' },
  },
  {
    id: 'sea-turtle-stories',
    image: `${imagePath}turtle-art-student.webp`,
    position: 'center 35%',
    eyebrow: 'From the blog',
    title: 'SEA TURTLE STORIES',
    text: ['Stories through young eyes — a comic series imagining the ocean from the next generation of conservationists.'],
    cta: { label: 'Read more', to: '/blogs/sea-turtle-stories', color: '#B2D235' },
  },
  {
    id: 'releases',
    image: `${imagePath}turtle-release.webp`,
    position: 'center 60%',
    eyebrow: 'Wildlife releases',
    title: 'RECOVERY BECOMES FREEDOM',
    text: ['Follow the journeys of rescued turtles and pangolins as they return home to the wild.'],
    cta: { label: 'See the releases', to: '/sanctuary/releases', color: '#F69524' },
  },
  {
    id: 'sanctuary',
    image: `${imagePath}rescued-civet.webp`,
    position: 'center 35%',
    eyebrow: 'The sanctuary',
    title: 'A SECOND CHANCE',
    text: ['Every rescued animal receives expert care, a safe place to heal and, when possible, a path back to the wild.'],
    cta: { label: 'Explore the sanctuary', to: '/sanctuary', color: '#B2D235' },
  },
  {
    id: 'volunteer',
    image: `${imagePath}beach-cleanup.webp`,
    position: 'center 60%',
    eyebrow: 'Get involved',
    title: 'MANY HANDS, CLEAN BEACHES',
    text: ['Roll up your sleeves with our volunteers and help protect the animals that call Nigeria home.'],
    cta: { label: 'Volunteer with us', to: '/sanctuary/volunteer', color: '#F69524' },
  },
  {
    id: 'uk-visit',
    image: '/original%20images/blog%20images/Greenfingers%20DBH%20Visit%20Pix%20J%20%2838%29.webp',
    position: 'center 30%',
    eyebrow: 'From the blog',
    title: 'UK VISITS GREENFINGERS',
    text: ['The UK Deputy High Commissioner visits the Greenfingers Wildlife Sanctuary.'],
    cta: { label: 'Read more', to: '/blogs/uk-deputy-high-commissioner-visit', color: '#B2D235' },
  },
  {
    id: 'donate',
    image: `${imagePath}kinkajou.webp`,
    position: 'center 40%',
    eyebrow: 'Support our work',
    title: 'EVERY GIFT HELPS A WILD LIFE',
    text: ['Your support feeds, treats and protects animals like this one — and teaches the next generation to do the same.'],
    cta: { label: 'Donate today', to: '/support-us/donate', color: '#F69524' },
  },
]

function slideState(index, active) {
  const offset = (index - active + slides.length) % slides.length
  if (offset === 0) return ' is-active'
  if (offset === slides.length - 1) return ' is-prev'
  if (offset === 1) return ' is-next'
  return ''
}

const wavePath = 'M0 30 Q 50 60, 100 30 T 200 30 T 300 30 T 400 30 T 500 30 T 600 30 T 700 30 T 800 30 T 900 30 T 1000 30'

function HeroSlider() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const [swiped, setSwiped] = useState(false)
  const sliderRef = useRef(null)
  const touch = useRef(null)

  const go = useCallback((index) => setActive((index + slides.length) % slides.length), [])

  useEffect(() => {
    if (paused || swiped || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined
    const timer = setTimeout(() => setActive((index) => (index + 1) % slides.length), AUTOPLAY_MS)
    return () => clearTimeout(timer)
  }, [active, paused, swiped])

  const setDrag = (px) => sliderRef.current?.style.setProperty('--drag', `${px}px`)

  const onTouchStart = (event) => {
    const { clientX, clientY } = event.touches[0]
    touch.current = { x: clientX, y: clientY, dragging: false }
  }

  const onTouchMove = (event) => {
    const state = touch.current
    if (!state) return
    const dx = event.touches[0].clientX - state.x
    const dy = event.touches[0].clientY - state.y

    if (!state.dragging) {
      if (Math.abs(dx) < 8 && Math.abs(dy) < 8) return
      if (Math.abs(dy) > Math.abs(dx)) { touch.current = null; return }
      state.dragging = true
      sliderRef.current?.classList.add('is-dragging')
      setPaused(true)
      // They've found the swipe, so stop auto-advancing for good.
      setSwiped(true)
    }
    setDrag(dx)
  }

  const onTouchEnd = (event) => {
    const state = touch.current
    touch.current = null
    if (!state?.dragging) return

    const delta = event.changedTouches[0].clientX - state.x
    const width = sliderRef.current?.offsetWidth || 1
    sliderRef.current?.classList.remove('is-dragging')
    setDrag(0)
    setPaused(false)
    if (Math.abs(delta) > Math.min(80, width * 0.2)) go(active + (delta > 0 ? -1 : 1))
  }

  return (
    <section
      ref={sliderRef}
      className="hero-slider"
      data-no-lightbox
      aria-roledescription="carousel"
      aria-label="Greenfingers highlights"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      onTouchCancel={onTouchEnd}
    >
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`hero-slide${slideState(index, active)}`}
          inert={index === active ? undefined : ''}
          role="group"
          aria-roledescription="slide"
          aria-label={`${index + 1} of ${slides.length}`}
          aria-hidden={index !== active}
        >
          <img
            className="hero-slide-image"
            src={slide.image}
            alt=""
            style={{ objectPosition: slide.position }}
            loading={index === 0 ? 'eager' : 'lazy'}
            fetchpriority={index === 0 ? 'high' : undefined}
            decoding="async"
          />

          <div className="hero-slide-content">
            {slide.welcome ? (
              <div className="hero-slide-welcome">
                <span className="hero-line hero-first-line">
                  WELCOME TO
                  <img className="hero-decoration hero-star" src={star_shape} alt="" aria-hidden="true" />
                </span>
                <span className="hero-welcome-name">GREENFINGERS WILDLIFE</span>
                <span className="hero-line hero-last-line">
                  INITIATIVE
                  <img className="hero-decoration hero-shell" src={shell} alt="" aria-hidden="true" />
                </span>
              </div>
            ) : (
              <>
                <p className="hero-slide-eyebrow">{slide.eyebrow}</p>
                <h2 className="hero-slide-title">{slide.title}</h2>
              </>
            )}

            <p className="hero-slide-text">
              {slide.text.map((line, lineIndex) => (
                <span key={line}>
                  {lineIndex > 0 && <br />}
                  {line}
                </span>
              ))}
            </p>

            <FreeformButton color={slide.cta.color} to={slide.cta.to}>{slide.cta.label}</FreeformButton>
          </div>
        </div>
      ))}

      <svg className="hero-slider-wave hero-slider-wave-bottom" viewBox="0 0 1000 60" preserveAspectRatio="none" aria-hidden="true">
        <path d={`M0 60 L0 30 ${wavePath.slice(5)} L1000 60 Z`} fill="#B2D235" />
      </svg>

      <button className="hero-slider-arrow hero-slider-prev" type="button" aria-label="Previous slide" onClick={() => go(active - 1)}>‹</button>
      <button className="hero-slider-arrow hero-slider-next" type="button" aria-label="Next slide" onClick={() => go(active + 1)}>›</button>
    </section>
  )
}

export default HeroSlider
