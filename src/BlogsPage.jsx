import safari from './assets/abstracts/safari.png'
import Nav from './Nav'
import Footer from './Footer'
import PortfolioCard from './PortfolioCard'

const topics = [
  {
    title: 'UK VISITS GREENFINGERS',
    description: 'UK Deputy High Commissioner Visits the Greenfingers Wildlife Sanctuary',
    image: '/original%20images/blog%20images/Greenfingers%20DBH%20Visit%20Pix%20J%20%2838%29.jpg',
    to: '/blogs/uk-deputy-high-commissioner-visit',
  },
  {
    title: 'SEA TURTLE STORIES',
    description: 'Stories Through Young Eyes',
    image: '/blog-images/Turtle%20Comic/Turtle%20pg%201.png',
    to: '/blogs/sea-turtle-stories',
  },
]

function BlogsPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', width: '100%', backgroundColor: '#FDF8DF', overflow: 'hidden' }}>
      <div style={{ flex: 1 }}>
        <div style={{ paddingBottom: '20px' }}>
          <Nav />
        </div>

        <header className="landing-header" style={{ maxWidth: '900px', margin: '0 auto', padding: '60px 30px 0', textAlign: 'center' }}>
          <h1 style={{ fontFamily: 'Skreeble, "Rainbow Theory", sans-serif', color: '#009a2e', fontSize: 'clamp(70px, 10vw, 110px)', lineHeight: .9, margin: 0 }}>BLOGS</h1>
          <p style={{ fontFamily: 'Modern Sans', color: '#000000', fontWeight: 'bold', fontSize: '17px', lineHeight: 1.5, margin: '24px auto 0', maxWidth: '600px' }}>
            Explore stories, ideas, and updates from our work protecting wildlife and inspiring people.
          </p>
        </header>

        <main className="card-list" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '40px', padding: '55px 60px 140px', width: '100%' }}>
          {topics.map((topic) => (
            <PortfolioCard key={topic.title} {...topic} />
          ))}
        </main>

        <div
          className="safari-divider"
          style={{
            width: '100%',
            height: '500px',
            backgroundColor: '#1C1C1C',
            WebkitMaskImage: `url(${safari})`,
            maskImage: `url(${safari})`,
            WebkitMaskSize: 'cover',
            maskSize: 'cover',
            WebkitMaskPosition: '70% 0%',
            maskPosition: '70% 0%',
            WebkitMaskRepeat: 'no-repeat',
            maskRepeat: 'no-repeat',
            marginTop: '60px',
            marginBottom: '-70px',
          }}
        />
      </div>

      <Footer />
    </div>
  )
}

export default BlogsPage
