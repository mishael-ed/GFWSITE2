import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Nav from './Nav'
import Footer from './Footer'

const paragraphStyle = {
  fontFamily: 'Modern Sans',
  color: '#000000',
  fontWeight: 'bold',
  fontSize: '17px',
  lineHeight: 1.7,
  margin: '18px 0',
}

const headingStyle = {
  fontFamily: 'Skreeble, "Rainbow Theory", sans-serif',
  color: '#009a2e',
  fontWeight: 'normal',
  fontSize: 'clamp(34px, 5vw, 46px)',
  lineHeight: 1,
  margin: '52px 0 20px',
}

const comicPages = [
  {
    src: '/blog-images/Turtle%20Comic/Turtle%20pg%201.png',
    alt: 'Sea Turtle Stories page 1',
  },
  {
    src: '/blog-images/Turtle%20Comic/Turtle%20pg%202.png',
    alt: 'Sea Turtle Stories page 2',
  },
  {
    src: '/blog-images/Turtle%20Comic/Turtle%20pg%203.png',
    alt: 'Sea Turtle Stories page 3',
  },
  {
    src: '/blog-images/Turtle%20Comic/Turtle%20pg%204.png',
    alt: 'Sea Turtle Stories page 4',
  },
  {
    src: '/blog-images/Turtle%20Comic/Turtle%20pg%205.png',
    alt: 'Sea Turtle Stories page 5',
  },
  {
    src: '/blog-images/Turtle%20Comic/Turtle%20pg%206.png',
    alt: 'Sea Turtle Stories page 6',
  },
  {
    src: '/blog-images/Turtle%20Comic/Turtle%20pg%207.png',
    alt: 'Sea Turtle Stories page 7',
  },
  {
    src: '/blog-images/Turtle%20Comic/Turtle%20pg%208.png',
    alt: 'Sea Turtle Stories page 8',
  },
  {
    src: '/blog-images/Turtle%20Comic/Turtle%20pg%209.png',
    alt: 'Sea Turtle Stories page 9',
  },
  {
    src: '/blog-images/Turtle%20Comic/Turtle%20pg%2010.png',
    alt: 'Sea Turtle Stories page 10',
  },
  {
    src: '/blog-images/Turtle%20Comic/Turtle%20pg%2010%20(1).png',
    alt: 'Sea Turtle Stories page 10 alternate',
  },
  {
    src: '/blog-images/Turtle%20Comic/Turtle%20pg%2011.png',
    alt: 'Sea Turtle Stories page 11',
  },
  {
    src: '/blog-images/Turtle%20Comic/Turtle%20pg%2012.png',
    alt: 'Sea Turtle Stories page 12',
  },
  {
    src: '/blog-images/Turtle%20Comic/Turtle%20pg%2013.png',
    alt: 'Sea Turtle Stories page 13',
  },
  {
    src: '/blog-images/Turtle%20Comic/Turtle%20pg%2014.png',
    alt: 'Sea Turtle Stories page 14',
  },
  {
    src: '/blog-images/Turtle%20Comic/Turtle%20pg%2015.png',
    alt: 'Sea Turtle Stories page 15',
  },
  {
    src: '/blog-images/Turtle%20Comic/Turtle%20pg%2016.png',
    alt: 'Sea Turtle Stories page 16',
  },
  {
    src: '/blog-images/Turtle%20Comic/Turtle%20pg%2017.png',
    alt: 'Sea Turtle Stories page 17',
  },
  {
    src: '/blog-images/Turtle%20Comic/Turtle%20pg%2018.png',
    alt: 'Sea Turtle Stories page 18',
  },
  {
    src: '/blog-images/Turtle%20Comic/Turtle%20pg%2019.png',
    alt: 'Sea Turtle Stories page 19',
  },
]

function SeaTurtleStoriesPage() {
  const [activeImage, setActiveImage] = useState(null)

  useEffect(() => {
    if (activeImage === null) return undefined

    const previousOverflow = document.body.style.overflow
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setActiveImage(null)
      if (event.key === 'ArrowLeft') setActiveImage((index) => (index - 1 + comicPages.length) % comicPages.length)
      if (event.key === 'ArrowRight') setActiveImage((index) => (index + 1) % comicPages.length)
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [activeImage])

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', width: '100%', backgroundColor: '#FDF8DF', overflow: 'hidden' }}>
      <div style={{ flex: 1 }}>
        <div style={{ paddingBottom: '20px' }}><Nav /></div>

        <main className="content-page" style={{ maxWidth: '1000px', margin: '0 auto', padding: '60px 48px 140px' }}>
          <Link to="/blogs" style={{ display: 'inline-block', fontFamily: 'Modern Sans', color: '#000000', fontWeight: 'bold', fontSize: '15px', textDecoration: 'none', marginBottom: '28px' }}>
            ← Back to Blogs
          </Link>

          <h1 className="content-page-title" style={{ fontFamily: 'Skreeble, "Rainbow Theory", sans-serif', color: '#009a2e', fontSize: 'clamp(60px, 8vw, 90px)', fontWeight: 'normal', lineHeight: 0.92, margin: 0 }}>
            Sea Turtle Stories
          </h1>
          <p style={{ ...paragraphStyle, color: '#F69524', fontSize: '20px', margin: '18px 0 8px' }}>Stories Through Young Eyes</p>
          <p style={{ ...paragraphStyle, marginTop: '8px' }}>
            Through these fun and imaginative cartoon stories, children share their ideas about sea turtles, the ocean, and the importance of protecting marine life. Each story is a child’s unique way of exploring the challenges sea turtles face—from plastic pollution and fishing nets to habitat loss—and imagining how people can make a difference.
          </p>
          <p style={paragraphStyle}>
            Created by young storytellers, these stories remind us that conservation can begin with a simple idea, a drawing, or a story.
          </p>
          <p style={paragraphStyle}>
            Dive into their adventures, meet their sea turtle characters, and discover the ocean through the eyes of the next generation of conservationists.
          </p>
          <p style={{ ...paragraphStyle, marginBottom: '30px' }}>
            Read. Imagine. Learn. Protect.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '28px' }}>
            <p style={{ ...paragraphStyle, margin: 0 }}>Story written by children</p>
            <p style={{ ...paragraphStyle, margin: 0 }}>Illustrated by The Greenfingers Comics Team</p>
          </div>

          <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '18px' }}>
            {comicPages.map((page, index) => (
              <button
                key={page.src}
                type="button"
                onClick={() => setActiveImage(index)}
                aria-label={`Open ${page.alt}`}
                style={{
                  padding: 0,
                  background: 'none',
                  overflow: 'hidden',
                  cursor: 'zoom-in',
                  boxSizing: 'border-box',
                  aspectRatio: '1 / 1',
                  transition: 'transform 180ms ease, box-shadow 180ms ease',
                  willChange: 'transform',
                }}
                onMouseEnter={(event) => {
                  event.currentTarget.style.transform = 'scale(1.03)'
                  event.currentTarget.style.boxShadow = '0 14px 28px rgba(0, 0, 0, 0.18)'
                }}
                onMouseLeave={(event) => {
                  event.currentTarget.style.transform = 'scale(1)'
                  event.currentTarget.style.boxShadow = 'none'
                }}
              >
                <img
                  src={page.src}
                  alt={page.alt}
                  style={{ display: 'block', width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'center' }}
                />
              </button>
            ))}
          </section>
        </main>
      </div>

      <Footer />

      {activeImage !== null && (
        <div className="blog-lightbox" role="dialog" aria-modal="true" aria-label="Sea Turtle Stories image gallery" onClick={() => setActiveImage(null)}>
          <button
            className="blog-lightbox-control blog-lightbox-previous"
            type="button"
            aria-label="Previous image"
            style={{ cursor: 'none' }}
            onClick={(event) => {
              event.stopPropagation()
              setActiveImage((activeImage - 1 + comicPages.length) % comicPages.length)
            }}
          >
            ‹
          </button>

          <figure onClick={(event) => event.stopPropagation()}>
            <div className="blog-lightbox-image-shell">
              <button className="blog-lightbox-close" type="button" aria-label="Close gallery" style={{ cursor: 'none' }} onClick={() => setActiveImage(null)} />
              <img src={comicPages[activeImage].src} alt={comicPages[activeImage].alt} />
            </div>
            <figcaption>{activeImage + 1} / {comicPages.length}</figcaption>
          </figure>

          <button
            className="blog-lightbox-control blog-lightbox-next"
            type="button"
            aria-label="Next image"
            style={{ cursor: 'none' }}
            onClick={(event) => {
              event.stopPropagation()
              setActiveImage((activeImage + 1) % comicPages.length)
            }}
          >
            ›
          </button>
        </div>
      )}
    </div>
  )
}

export default SeaTurtleStoriesPage