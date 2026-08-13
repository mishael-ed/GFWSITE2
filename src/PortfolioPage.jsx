import safari from './assets/abstracts/safari.png'
import Nav from './Nav'
import Footer from './Footer'
import PortfolioCard from './PortfolioCard'

function PortfolioPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', width: '100%', backgroundColor: '#FDF8DF', overflow: 'hidden' }}>
      <div style={{ flex: 1 }}>
        <div style={{ paddingBottom: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <Nav />
          </div>
        </div>

        <header style={{ maxWidth: '900px', margin: '0 auto', padding: '60px 30px 0', textAlign: 'center' }}>
          <h1 style={{ fontFamily: 'Skreeble', color: '#009a2e', fontSize: 'clamp(70px, 10vw, 110px)', lineHeight: .9, margin: 0 }}>PORTFOLIO</h1>
          <p style={{ fontFamily: 'Modern Sans', color: '#000000', fontWeight: 'bold', fontSize: '17px', lineHeight: 1.5, margin: '24px auto 0', maxWidth: '600px' }}>
            Explore our conservation campaigns and creative projects helping people connect with and protect Nigeria's wildlife.
          </p>
        </header>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '40px', padding: '55px 60px 140px', width: '100%', boxSizing: 'border-box' }}>
          <PortfolioCard
            title="Nigerian Wildlife Awareness Campaign"
            description="Inspiring communities to protect Nigeria's wildlife and habitats."
            image="https://upload.wikimedia.org/wikipedia/commons/7/7b/Sumu_wildlife_park_3.jpg"
          />
          <PortfolioCard
            title="Artivism for Conservation"
            description="Using art and storytelling to make conservation accessible."
            image="https://upload.wikimedia.org/wikipedia/commons/5/58/Elephant_mural_-_geograph.org.uk_-_7630225.jpg"
          />
        </div>

        <div
          style={{
            width: '100%',
            height: '500px',
            backgroundColor: '#242424',
            WebkitMaskImage: `url(${safari})`,
            maskImage: `url(${safari})`,
            WebkitMaskSize: 'cover',
            maskSize: 'cover',
            WebkitMaskPosition: '70% -20%',
            maskPosition: '70% -0%',
            WebkitMaskRepeat: 'no-repeat',
            maskRepeat: 'no-repeat',
            opacity: 100,
            marginTop: '60px',
            marginBottom: '-70px',
          }}
        />
      </div>

      <Footer />
    </div>
  )
}

export default PortfolioPage
