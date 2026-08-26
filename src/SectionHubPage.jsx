import safari from './assets/abstracts/safari.png'
import Nav from './Nav'
import Footer from './Footer'
import PortfolioCard from './PortfolioCard'

function SectionHubPage({ title, description, color, cards }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', width: '100%', backgroundColor: '#FDF8DF', overflow: 'hidden' }}>
      <div style={{ flex: 1 }}>
        <div style={{ paddingBottom: '20px' }}>
          <Nav />
        </div>

        <header className="landing-header" style={{ maxWidth: '900px', margin: '0 auto', padding: '60px 30px 0', textAlign: 'center' }}>
          <h1 style={{ fontFamily: 'Skreeble', color, fontSize: 'clamp(65px, 10vw, 105px)', lineHeight: .9, margin: 0 }}>{title}</h1>
          <p style={{ fontFamily: 'Modern Sans', color: '#000000', fontWeight: 'bold', fontSize: '17px', lineHeight: 1.5, margin: '24px auto 0', maxWidth: '650px' }}>
            {description}
          </p>
        </header>

        <main className="card-list" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '40px', padding: '55px 60px 140px', width: '100%' }}>
          {cards.map((card) => <PortfolioCard key={card.title} {...card} />)}
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
            marginTop: '40px',
            marginBottom: '-70px',
          }}
        />
      </div>

      <Footer />
    </div>
  )
}

export default SectionHubPage
