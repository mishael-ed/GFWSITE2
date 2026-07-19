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

        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '60px 80px 0', textAlign: 'center' }}>
          <h1 style={{ fontFamily: 'Skreeble', color: '#009a2e', fontSize: '110px', margin: 0 }}>PORTFOLIO</h1>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '60px', padding: '40px 80px 140px' }}>
          <PortfolioCard
            title="Nigerian Wildlife Awareness Campaign"
            image="https://upload.wikimedia.org/wikipedia/commons/7/7b/Sumu_wildlife_park_3.jpg"
          />
          <PortfolioCard
            title="Artivism for Conservation"
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
