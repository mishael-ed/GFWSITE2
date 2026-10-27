import safari from './assets/abstracts/safari.png'
import zebra_pattern from './assets/abstracts/zebra pattern.png'
import HeroSlider from './HeroSlider'
import Nav from './Nav'
import Footer from './Footer'
import FreeformButton from './FreeformButton'
import DoodleStat from './DoodleStat'
import SponsorStrip from './SponsorStrip'

function Home() {
  return (
    <div className="home-page" style={{ display: 'flex', flexDirection: 'column', width: '100%', minHeight: '300vh', overflowX: 'hidden' }}>
      <div style={{ backgroundColor: '#FDF8DF' }}>
        <Nav />

        <HeroSlider />
      </div>

      <div style={{ backgroundColor: '#B2D235' }}>
        <div className="stats-grid" style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', flexWrap: 'wrap', gap: '60px', maxWidth: '1300px', margin: '0 auto', padding: '20px 20px 40px' }}>
          <DoodleStat number="15" label="YEARS OF IMPACT" />
          <DoodleStat number="300+" label="VOLUNTEERS" />
          <DoodleStat number="3,000+" label="ANIMALS RESCUED" />
          <DoodleStat number="500+" label="ANIMALS RELEASED" />
          <DoodleStat number="12,000+" label="STUDENTS REACHED" />
        </div>
      </div>

      <SponsorStrip />

      <div
        style={{
          backgroundColor: '#ffffff',
          backgroundImage: `linear-gradient(rgba(255,255,255,0.96), rgba(255,255,255,0.96)), url(${zebra_pattern})`,
          backgroundSize: 'cover, cover',
          backgroundRepeat: 'no-repeat, no-repeat',
          backgroundPosition: 'center',
          flex: 1,
        }}
      >

        <div className="home-feature" style={{ display: 'flex', alignItems: 'flex-start', gap: '60px', maxWidth: '800px', margin: '40px auto 0' }}>
          <div style={{ flex: 1 }}>
            <h1 className="home-feature-title" style={{ fontFamily: 'Skreeble, "Rainbow Theory", sans-serif', color: '#F69524', textAlign: 'left', margin: 0, fontSize: '60px' }}>SANCTUARY</h1>

            <p style={{ fontFamily: 'Modern Sans', color: '#000000', textAlign: 'left', margin: '20px 0 0', fontWeight: 'bold', fontSize: '17px', lineHeight: '1.4' }}>
              Welcome to Greenfingers Wildlife Sanctuary — a safe haven where rescued wildlife finds hope, healing, and a second chance.
            </p>

            <FreeformButton color="#F69524" to="/sanctuary">Learn more about the sanctuary</FreeformButton>
          </div>

          <div className="home-feature-image" style={{ border: '13px solid #F69524', borderRadius: '7px 3px 8px 4px', flexShrink: 0, width: '270px', height: '270px', boxSizing: 'border-box' }}>
            <img loading="lazy" decoding="async"
              src="/original%20images/homepage/sanctuary.webp"
              alt="Sanctuary"
              style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
            />
          </div>
        </div>

        <div className="home-feature home-feature-reverse" style={{ display: 'flex', alignItems: 'flex-start', gap: '60px', maxWidth: '800px', margin: '80px auto 40px' }}>
          <div className="home-feature-image" style={{ border: '13px solid #B2D235', borderRadius: '4px 8px 3px 7px', flexShrink: 0, width: '300px', height: '300px', boxSizing: 'border-box' }}>
            <img loading="lazy" decoding="async"
              src="/original%20images/homepage/ourinitiatives.webp"
              alt="Our Initiatives"
              style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
            />
          </div>

          <div style={{ flex: 1 }}>
            <h1 className="home-feature-title" style={{ fontFamily: 'Skreeble, "Rainbow Theory", sans-serif', color: '#B2D235', textAlign: 'left', margin: 0, fontSize: '60px' }}>OUR INITIATIVES</h1>

            <p style={{ fontFamily: 'Modern Sans', color: '#000000', textAlign: 'left', margin: '20px 0 0', fontWeight: 'bold', fontSize: '17px', lineHeight: '1.4' }}>
              At Greenfingers Wildlife Initiative, we believe conservation is most effective when it brings people together. Our initiatives are designed to educate, inspire, and empower individuals, schools, communities, businesses, and policymakers to take meaningful action for wildlife and the environment.
            </p>

            <FreeformButton color="#B2D235" to="/initiatives">Learn more about our initiatives</FreeformButton>
          </div>
        </div>

        <div className="home-feature" style={{ display: 'flex', alignItems: 'flex-start', gap: '60px', maxWidth: '800px', margin: '80px auto 40px' }}>
          <div style={{ flex: 1 }}>
            <h1 className="home-feature-title" style={{ fontFamily: 'Skreeble, "Rainbow Theory", sans-serif', color: '#F69524', textAlign: 'left', margin: 0, fontSize: '60px' }}>EDUCATION</h1>

            <p style={{ fontFamily: 'Modern Sans', color: '#000000', textAlign: 'left', margin: '20px 0 0', fontWeight: 'bold', fontSize: '17px', lineHeight: '1.4' }}>
              Inspiring the next generation of conservation leaders.
              <br />
              <br />
              At Greenfingers Wildlife Initiative, we believe that education is one of the most powerful tools for protecting wildlife.
            </p>

            <FreeformButton color="#F69524" to="/education">Learn more about our education programmes</FreeformButton>
          </div>

          <div className="home-feature-image" style={{ border: '13px solid #F69524', borderRadius: '7px 3px 8px 4px', flexShrink: 0, width: '290px', height: '290px', boxSizing: 'border-box' }}>
            <img loading="lazy" decoding="async"
              src="/original%20images/homepage/education.webp"
              alt="Education"
              style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
            />
          </div>
        </div>

        <div className="home-feature home-feature-reverse" style={{ display: 'flex', alignItems: 'flex-start', gap: '60px', maxWidth: '800px', margin: '80px auto 40px' }}>
          <div className="home-feature-image" style={{ border: '13px solid #B2D235', borderRadius: '4px 8px 3px 7px', flexShrink: 0, width: '270px', height: '270px', boxSizing: 'border-box' }}>
            <img loading="lazy" decoding="async"
              src="/original%20images/homepage/ourevents.webp"
              alt="Our Events"
              style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
            />
          </div>

          <div style={{ flex: 1 }}>
            <h1 className="home-feature-title" style={{ fontFamily: 'Skreeble, "Rainbow Theory", sans-serif', color: '#B2D235', textAlign: 'left', margin: 0, fontSize: '60px' }}>OUR EVENTS</h1>

            <p style={{ fontFamily: 'Modern Sans', color: '#000000', textAlign: 'left', margin: '20px 0 0', fontWeight: 'bold', fontSize: '17px', lineHeight: '1.4' }}>
              Our events bring people together to learn, explore, and take action for wildlife. From exhibitions and festivals to beach clean-ups and conservation forums, there's a way for everyone to connect with nature all year round.
            </p>

            <FreeformButton color="#B2D235" to="/events">Learn more about our events</FreeformButton>
          </div>
        </div>

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

export default Home
