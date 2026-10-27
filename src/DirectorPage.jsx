import { Link } from 'react-router-dom'
import Nav from './Nav'
import Footer from './Footer'

const paragraphStyle = {
  fontFamily: 'Modern Sans',
  color: '#000000',
  fontWeight: 'bold',
  fontSize: '17px',
  lineHeight: '1.7',
  margin: '0 0 22px',
}

const photoPath = '/original%20images/about%20the%20director/'

const splitRowStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
  gap: '38px',
  alignItems: 'center',
  margin: '48px 0',
}

function Photo({ file, alt, color = '#F69524', radius = '7px 3px 8px 4px', ratio = '3 / 4', rotate = 0, position = 'center', style }) {
  return (
    <figure
      className="director-photo"
      style={{
        margin: 0,
        border: `13px solid ${color}`,
        borderRadius: radius,
        boxSizing: 'border-box',
        overflow: 'hidden',
        aspectRatio: ratio,
        transform: rotate ? `rotate(${rotate}deg)` : undefined,
        backgroundColor: '#ffffff',
        ...style,
      }}
    >
      <img
        src={`${photoPath}${file}`}
        alt={alt}
        loading="lazy"
        decoding="async"
        style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover', objectPosition: position }}
      />
    </figure>
  )
}

function DirectorPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', width: '100%', backgroundColor: '#FDF8DF', overflow: 'hidden' }}>
      <div style={{ flex: 1 }}>
        <div style={{ paddingBottom: '20px' }}>
          <Nav />
        </div>

        <main className="director-content" style={{ maxWidth: '920px', margin: '0 auto', padding: '55px 30px 130px' }}>
          <Link to="/about" style={{ display: 'inline-block', fontFamily: 'Modern Sans', color: '#000000', fontWeight: 'bold', fontSize: '15px', textDecoration: 'none', marginBottom: '34px' }}>
            ← Explore About
          </Link>

          <header style={{ borderBottom: '4px solid #000000', paddingBottom: '32px', marginBottom: '38px' }}>
            <p style={{ fontFamily: 'Modern Sans', color: '#F69524', fontWeight: 'bold', fontSize: '16px', letterSpacing: '2px', textTransform: 'uppercase', margin: '0 0 12px' }}>
              Founder and Director
            </p>
            <h1 style={{ fontFamily: 'Skreeble, "Rainbow Theory", sans-serif', color: '#009a2e', fontSize: 'clamp(64px, 10vw, 105px)', lineHeight: .88, margin: 0 }}>
              CHINEDU MOGBO
            </h1>
            <p style={{ ...paragraphStyle, fontSize: '19px', margin: '20px 0 0' }}>
              Greenfingers Wildlife Initiative
            </p>
          </header>

          <div
            className="director-hero-image"
            style={{
              width: '100%',
              height: 'clamp(250px, 42vw, 400px)',
              margin: '0 0 48px',
              border: '13px solid #F69524',
              borderRadius: '7px 3px 8px 4px',
              boxSizing: 'border-box',
              overflow: 'hidden',
            }}
          >
            <img
              src="/original%20images/about%20the%20director/director%20and%20the%20crow.webp"
              alt="Chinedu Mogbo with a rescued crow at Greenfingers Wildlife Sanctuary"
              style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
            />
          </div>

          <blockquote
            className="director-quote"
            style={{
              position: 'relative',
              backgroundColor: '#1C1C1C',
              color: '#ffffff',
              fontFamily: 'Skreeble, "Rainbow Theory", sans-serif',
              fontSize: 'clamp(26px, 3.6vw, 38px)',
              lineHeight: 1.3,
              margin: '10px 0 64px',
              padding: 'clamp(54px, 7vw, 74px) clamp(24px, 5vw, 56px) clamp(30px, 4vw, 40px)',
              borderRadius: '4px 8px 3px 7px',
              boxShadow: '12px 12px 0 #F69524',
              transform: 'rotate(-0.8deg)',
            }}
          >
            <svg
              aria-hidden="true"
              width="74"
              height="58"
              viewBox="0 0 74 58"
              style={{ position: 'absolute', top: '-22px', left: '28px', transform: 'rotate(-4deg)' }}
            >
              <path d="M0 58V30C0 12 10 2 28 0v13c-8 2-12 7-12 15h12v30H0zm42 0V30C42 12 52 2 70 0v13c-8 2-12 7-12 15h12v30H42z" fill="#B2D235" />
            </svg>
            My name means ‘God leads me’ in Igbo, my native language, and in many ways, it reflects the unexpected path that led me to conservation.
            <footer style={{ marginTop: '26px', fontFamily: 'Modern Sans', fontWeight: 'bold', fontSize: '16px', letterSpacing: '2px', textTransform: 'uppercase', color: '#F69524' }}>
              — Chinedu Mogbo
            </footer>
          </blockquote>

          <section style={{ maxWidth: '790px' }}>
            <p style={paragraphStyle}>
              Chinedu Mogbo is a Nigerian wildlife conservationist, environmental educator, and founder of Greenfingers Wildlife Initiative, an organization dedicated to protecting Nigeria's wildlife through rescue, rehabilitation, education, and community engagement.
            </p>
          </section>

          <div style={splitRowStyle}>
            <div>
              <p style={paragraphStyle}>
                His love for wildlife began in childhood, fascinated by the birds, lizards, insects, and other animals around him. Although his academic journey led him through biomedical science, public health, and medicine at universities in the UK and Grenada, his passion for animals and nature remained constant.
              </p>
            </div>
            <Photo file="director-img_4896.webp" alt="Chinedu Mogbo hand-feeding a rescued kinkajou" rotate={1.5} />
          </div>

          <div style={splitRowStyle}>
            <Photo file="director-img_6245.webp" alt="Chinedu Mogbo speaking to schoolchildren while holding a snake" color="#B2D235" radius="4px 8px 3px 7px" rotate={-1.5} position="center 30%" />
            <div>
              <p style={paragraphStyle}>
                Through the Greenfingers Wildlife Rehabilitation and Learning Centre, Chinedu has created a space where rescued and confiscated wildlife receive care while children, schools, families, and the wider public learn about Nigeria's biodiversity. Under his leadership, Greenfingers has cared for more than 150 rescued animals, including pangolins, sea turtles, African grey parrots, owls, crocodiles, and primates.
              </p>
            </div>
          </div>

          <section style={{ maxWidth: '790px' }}>
            <p style={paragraphStyle}>
              His conservation work has a strong focus on threatened species, particularly sea turtles and pangolins. Through the Turtle Bae Sanctuary and partnerships with coastal stakeholders, more than 70 sea turtles have been released over approximately three years, alongside beach clean-ups, nesting surveys, habitat protection, and community education.
            </p>
          </section>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 230px), 1fr))', gap: '30px', margin: '44px 0 52px' }}>
            <Photo file="director-img_5823.webp" alt="Chinedu Mogbo crouching between two sea turtles on the beach" rotate={-1.5} position="center 40%" />
            <Photo file="director-img_5935.webp" alt="Chinedu Mogbo with a leatherback turtle and community members on the beach" color="#B2D235" radius="4px 8px 3px 7px" rotate={1} position="center 70%" />
            <Photo file="director-img_6623.webp" alt="Chinedu Mogbo watching a green turtle on the sand" rotate={-0.8} position="center 30%" />
          </div>

          <section style={{ maxWidth: '790px' }}>
            <p style={paragraphStyle}>
              Chinedu also uses art, sport, storytelling, and hands-on experiences to make conservation accessible to wider audiences through initiatives such as Play4Pangolin, Artivism, the Sea Turtle Festival, and the Ocean Heroes Forum.
            </p>
          </section>

          <Photo
            file="director-cdbfa6f5-5f75-4897-9be9-64953efaed16.webp"
            alt="Chinedu Mogbo teaching sea turtle anatomy at an Artivism event"
            color="#B2D235"
            radius="4px 8px 3px 7px"
            ratio="3 / 2"
            style={{ margin: '48px 0' }}
          />

          <section style={{ maxWidth: '790px' }}>
            <p style={{ ...paragraphStyle, color: '#009a2e', fontSize: '22px', lineHeight: 1.5, marginTop: '34px' }}>
              At the heart of his work is a simple belief: conservation is not only about saving wildlife, but inspiring people to protect it. His vision is to build a new generation of Nigerians who understand, value, and actively protect the country's wildlife and natural ecosystems.
            </p>
          </section>
        </main>
      </div>

      <Footer />
    </div>
  )
}

export default DirectorPage
