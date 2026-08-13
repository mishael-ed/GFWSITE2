import star_shape from './assets/abstracts/star shape.png'
import shell from './assets/abstracts/shell.png'
import safari from './assets/abstracts/safari.png'
import zebra_pattern from './assets/abstracts/zebra pattern.png'
import Reveal from './Reveal'
import Nav from './Nav'
import Footer from './Footer'
import FreeformButton from './FreeformButton'
import DoodleStat from './DoodleStat'

function Home() {
  return (
    <div className="home-page" style={{ display: 'flex', flexDirection: 'column', width: '100%', minHeight: '300vh', overflowX: 'hidden' }}>
      <div style={{ backgroundColor: '#FDF8DF' }}>
        <Reveal>
          <Nav />
        </Reveal>

        <div className="home-hero" style={{ position: 'relative', maxWidth: '1300px', marginLeft: 'auto', marginRight: 'auto' }}>
          <Reveal>
            <div className="home-hero-title" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '100px', lineHeight: '0.75' }}>
              <span style={{ fontFamily: 'Skreeble', fontSize: '110px', color: '#009a2e' }}>WELCOME TO</span>
              <span style={{ fontFamily: 'Skreeble', fontSize: '110px', color: '#009a2e' }}>GREENFINGERS WILDLIFE</span>
              <span style={{ fontFamily: 'Skreeble', fontSize: '110px', color: '#009a2e' }}>INITIATIVE</span>
            </div>
          </Reveal>

          <Reveal style={{ position: 'absolute', top: '1px', left: '28%', width: '90px', height: '90px' }}>
            <img src={star_shape} alt="" style={{ display: 'block', width: '100%', height: '100%' }} />
          </Reveal>

          <Reveal style={{ position: 'absolute', top: '140px', right: '31%', width: '90px', height: '90px' }}>
            <img src={shell} alt="" style={{ display: 'block', width: '80%', height: '80%', transform: 'rotate(25deg)' }} />
          </Reveal>
        </div>

        <Reveal>
          <p className="home-intro" style={{ fontFamily: 'Modern Sans', color: '#000000', textAlign: 'center', marginTop: '30px', fontWeight: 'bold', fontSize: '17px', lineHeight: '1.4' }}>
            Where passion meets purpose in
            <br />
            protecting Nigeria's extraordinary wildlife and natural heritage.
            <br />
            Nigeria's extraordinary wildlife and natural heritage
          </p>
        </Reveal>

        <div style={{ paddingBottom: '20px' }}></div>
      </div>

      <div style={{ backgroundColor: '#242424' }}>
        <svg width="100%" height="60" viewBox="0 0 1000 60" preserveAspectRatio="none" style={{ display: 'block' }}>
          <path
            d="M0 0 L0 30 Q 50 60, 100 30 T 200 30 T 300 30 T 400 30 T 500 30 T 600 30 T 700 30 T 800 30 T 900 30 T 1000 30 L 1000 0 Z"
            fill="#FDF8DF"
          />
        </svg>

        <div className="stats-grid" style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', flexWrap: 'wrap', gap: '60px', maxWidth: '1300px', margin: '0 auto', padding: '20px 20px 40px' }}>
          <DoodleStat number="15" label="YEARS OF IMPACT" />
          <DoodleStat number="300+" label="VOLUNTEERS" />
          <DoodleStat number="3,000+" label="ANIMALS RESCUED" />
          <DoodleStat number="500+" label="ANIMALS RELEASED" />
          <DoodleStat number="12,000+" label="STUDENTS REACHED" />
        </div>
      </div>

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
            <h1 className="home-feature-title" style={{ fontFamily: 'Skreeble', color: '#F69524', textAlign: 'left', margin: 0, fontSize: '60px' }}>SANCTUARY</h1>

            <p style={{ fontFamily: 'Modern Sans', color: '#000000', textAlign: 'left', margin: '20px 0 0', fontWeight: 'bold', fontSize: '17px', lineHeight: '1.4' }}>
              Welcome to Greenfingers Wildlife Sanctuary — a safe haven where rescued wildlife finds hope, healing, and a second chance.
            </p>

            <FreeformButton color="#F69524" to="/sanctuary">Learn more about the sanctuary</FreeformButton>
          </div>

          <div className="home-feature-image" style={{ border: '13px solid #F69524', borderRadius: '7px 3px 8px 4px', flexShrink: 0, width: '270px', height: '270px', boxSizing: 'border-box' }}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/3/37/African_Bush_Elephant.jpg"
              alt="Sanctuary"
              style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>

        <div className="home-feature home-feature-reverse" style={{ display: 'flex', alignItems: 'flex-start', gap: '60px', maxWidth: '800px', margin: '80px auto 40px' }}>
          <div className="home-feature-image" style={{ border: '13px solid #B2D235', borderRadius: '4px 8px 3px 7px', flexShrink: 0, width: '300px', height: '300px', boxSizing: 'border-box' }}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/08/School_children_release_a_ringed_yellow-fronted_tinkerbird_Pogoniulus_chrysoconus_in_Wondo_Genet_Ethiopia_as_part_of_a_project_that_combines_citizen_science_with_long-term_wildlife_monitoring.jpg"
              alt="Our Initiatives"
              style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          <div style={{ flex: 1 }}>
            <h1 className="home-feature-title" style={{ fontFamily: 'Skreeble', color: '#B2D235', textAlign: 'left', margin: 0, fontSize: '60px' }}>OUR INITIATIVES</h1>

            <p style={{ fontFamily: 'Modern Sans', color: '#000000', textAlign: 'left', margin: '20px 0 0', fontWeight: 'bold', fontSize: '17px', lineHeight: '1.4' }}>
              At Greenfingers Wildlife Initiative, we believe conservation is most effective when it brings people together. Our initiatives are designed to educate, inspire, and empower individuals, schools, communities, businesses, and policymakers to take meaningful action for wildlife and the environment.
            </p>

            <FreeformButton color="#B2D235" to="/initiatives">Learn more about our initiatives</FreeformButton>
          </div>
        </div>

        <div className="home-feature" style={{ display: 'flex', alignItems: 'flex-start', gap: '60px', maxWidth: '800px', margin: '80px auto 40px' }}>
          <div style={{ flex: 1 }}>
            <h1 className="home-feature-title" style={{ fontFamily: 'Skreeble', color: '#F69524', textAlign: 'left', margin: 0, fontSize: '60px' }}>EDUCATION</h1>

            <p style={{ fontFamily: 'Modern Sans', color: '#000000', textAlign: 'left', margin: '20px 0 0', fontWeight: 'bold', fontSize: '17px', lineHeight: '1.4' }}>
              Inspiring the next generation of conservation leaders.
              <br />
              <br />
              At Greenfingers Wildlife Initiative, we believe that education is one of the most powerful tools for protecting wildlife.
            </p>

            <FreeformButton color="#F69524" to="/education">Learn more about our education programmes</FreeformButton>
          </div>

          <div className="home-feature-image" style={{ border: '13px solid #F69524', borderRadius: '7px 3px 8px 4px', flexShrink: 0, width: '290px', height: '290px', boxSizing: 'border-box' }}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Table_Rocks_Environmental_Education_%2822874305734%29.jpg"
              alt="Education"
              style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
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

export default Home
