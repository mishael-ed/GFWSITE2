import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Nav from './Nav'
import Footer from './Footer'

const paragraphStyle = {
  fontFamily: 'Modern Sans',
  color: '#000000',
  fontWeight: 'bold',
  fontSize: '17px',
  lineHeight: 1.7,
  margin: '18px 0',
  whiteSpace: 'pre-wrap',
  overflowWrap: 'anywhere',
}

const headingStyle = {
  fontFamily: 'Skreeble, "Rainbow Theory", sans-serif',
  color: '#009a2e',
  fontWeight: 'normal',
  fontSize: 'clamp(34px, 5vw, 46px)',
  lineHeight: 1,
  margin: '52px 0 20px',
}

function DynamicBlogPage() {
  const { slug } = useParams()
  const [blog, setBlog] = useState(null)
  const [status, setStatus] = useState('loading')

  useEffect(() => {
    let cancelled = false
    setStatus('loading')
    fetch(`/api/blogs?slug=${encodeURIComponent(slug)}`)
      .then((response) => (response.ok ? response.json() : Promise.reject(response.status)))
      .then((data) => {
        if (cancelled) return
        setBlog(data.blog)
        setStatus('ready')
        document.title = `${data.blog.title} | Greenfingers`
      })
      .catch((reason) => { if (!cancelled) setStatus(reason === 404 ? 'missing' : 'error') })
    return () => { cancelled = true }
  }, [slug])

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', width: '100%', backgroundColor: '#FDF8DF', overflow: 'hidden' }}>
      <div style={{ flex: 1 }}>
        <div style={{ paddingBottom: '20px' }}><Nav /></div>

        <main className="content-page" style={{ maxWidth: '800px', margin: '0 auto', padding: '60px 80px 150px' }}>
          <Link to="/blogs" style={{ display: 'inline-block', fontFamily: 'Modern Sans', color: '#000000', fontWeight: 'bold', fontSize: '15px', textDecoration: 'none', marginBottom: '30px' }}>
            ← Back to Blogs
          </Link>

          {status === 'loading' && <p style={paragraphStyle}>Loading…</p>}
          {status === 'missing' && <p style={paragraphStyle}>We couldn't find that blog. It may have been removed.</p>}
          {status === 'error' && <p style={paragraphStyle}>We couldn't load this blog right now. Please try again in a moment.</p>}

          {status === 'ready' && (
            <article>
              <h1 className="content-page-title" style={{ fontFamily: 'Skreeble, "Rainbow Theory", sans-serif', color: '#009a2e', fontSize: 'clamp(55px, 8vw, 84px)', fontWeight: 'normal', lineHeight: .92, margin: 0 }}>
                {blog.title}
              </h1>

              <p style={{ ...paragraphStyle, color: '#F69524', fontSize: '20px', margin: '28px 0 34px' }}>{blog.description}</p>

              <div style={{ border: '13px solid #009a2e', borderRadius: '7px 3px 8px 4px', boxSizing: 'border-box', overflow: 'hidden', height: 'clamp(250px, 42vw, 400px)', marginBottom: '40px' }}>
                <img src={blog.cover} alt={blog.title} decoding="async" style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>

              {blog.blocks.map((block, index) => {
                if (block.type === 'heading') return <h2 key={index} style={headingStyle}>{block.text}</h2>
                if (block.type === 'image') {
                  return (
                    <figure key={index} style={{ margin: '36px auto', width: '100%', maxWidth: '620px' }}>
                      <div style={{ border: '13px solid #F69524', borderRadius: '7px 3px 8px 4px', boxSizing: 'border-box', overflow: 'hidden' }}>
                        <img loading="lazy" decoding="async" src={block.src} alt={block.caption || blog.title} style={{ display: 'block', width: '100%', height: 'auto' }} />
                      </div>
                      {block.caption && <figcaption style={{ fontFamily: 'Modern Sans', fontWeight: 'bold', fontSize: '14px', color: '#444444', margin: '10px 0 0' }}>{block.caption}</figcaption>}
                    </figure>
                  )
                }
                return <p key={index} style={paragraphStyle}>{block.text}</p>
              })}
            </article>
          )}
        </main>
      </div>

      <Footer />
    </div>
  )
}

export default DynamicBlogPage
