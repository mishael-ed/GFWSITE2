import { useCallback, useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'

// Images inside these are navigation or chrome, not content photos.
const excludedAncestors = 'a, button, header, footer, nav, .sponsor-strip, [data-no-lightbox]'

function isGalleryImage(img) {
  if (!img.currentSrc && !img.src) return false
  if (img.closest(excludedAncestors)) return false
  if (img.getAttribute('aria-hidden') === 'true' || !img.alt) return false
  return img.getBoundingClientRect().width >= 120
}

function pageImages() {
  return [...document.querySelectorAll('img')].filter(isGalleryImage)
}

function ImageLightbox() {
  const location = useLocation()
  const [gallery, setGallery] = useState([])
  const [active, setActive] = useState(null)
  const touchStart = useRef(null)

  const close = useCallback(() => setActive(null), [])
  const step = useCallback(
    (direction) => setActive((index) => (index === null ? index : (index + direction + gallery.length) % gallery.length)),
    [gallery.length]
  )

  useEffect(() => {
    const onClick = (event) => {
      const img = event.target instanceof Element ? event.target.closest('img') : null
      if (!img || !isGalleryImage(img)) return

      const images = pageImages()
      const index = images.indexOf(img)
      if (index === -1) return

      setGallery(images.map((item) => ({ src: item.currentSrc || item.src, alt: item.alt })))
      setActive(index)
    }

    const onOver = (event) => {
      const img = event.target instanceof Element ? event.target.closest('img') : null
      if (img && isGalleryImage(img)) img.style.cursor = 'zoom-in'
    }

    document.addEventListener('click', onClick)
    document.addEventListener('mouseover', onOver)
    return () => {
      document.removeEventListener('click', onClick)
      document.removeEventListener('mouseover', onOver)
    }
  }, [])

  useEffect(() => {
    setActive(null)
  }, [location.pathname])

  useEffect(() => {
    if (active === null) return undefined

    const onKey = (event) => {
      if (event.key === 'Escape') close()
      if (event.key === 'ArrowLeft') step(-1)
      if (event.key === 'ArrowRight') step(1)
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKey)
    }
  }, [active, close, step])

  if (active === null || !gallery[active]) return null

  const current = gallery[active]
  const multiple = gallery.length > 1

  const onTouchEnd = (event) => {
    if (touchStart.current === null) return
    const delta = event.changedTouches[0].clientX - touchStart.current
    touchStart.current = null
    if (Math.abs(delta) > 50) step(delta > 0 ? -1 : 1)
  }

  return (
    <div
      className="blog-lightbox"
      role="dialog"
      aria-modal="true"
      aria-label="Image gallery"
      data-no-lightbox
      onClick={close}
      onTouchStart={(event) => { touchStart.current = event.touches[0].clientX }}
      onTouchEnd={onTouchEnd}
    >
      {multiple ? (
        <button
          className="blog-lightbox-control blog-lightbox-previous"
          type="button"
          aria-label="Previous image"
          onClick={(event) => { event.stopPropagation(); step(-1) }}
        >
          ‹
        </button>
      ) : <span />}

      <figure onClick={(event) => event.stopPropagation()}>
        <div className="blog-lightbox-image-shell">
          <button className="blog-lightbox-close" type="button" aria-label="Close gallery" onClick={close} />
          <img src={current.src} alt={current.alt} />
        </div>
        <figcaption>{active + 1} / {gallery.length}</figcaption>
      </figure>

      {multiple ? (
        <button
          className="blog-lightbox-control blog-lightbox-next"
          type="button"
          aria-label="Next image"
          onClick={(event) => { event.stopPropagation(); step(1) }}
        >
          ›
        </button>
      ) : <span />}
    </div>
  )
}

export default ImageLightbox
