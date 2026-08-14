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
            <h1 style={{ fontFamily: 'Skreeble', color: '#009a2e', fontSize: 'clamp(64px, 10vw, 105px)', lineHeight: .88, margin: 0 }}>
              CHINEDU MOGBO
            </h1>
            <p style={{ ...paragraphStyle, fontSize: '19px', margin: '20px 0 0' }}>
              Greenfingers Wildlife Initiative
            </p>
          </header>

          <blockquote className="director-quote" style={{ backgroundColor: '#1C1C1C', color: '#ffffff', fontFamily: 'Skreeble', fontSize: 'clamp(28px, 4vw, 40px)', lineHeight: 1.25, margin: '0 0 42px', padding: '38px 42px', boxShadow: '0 9px 0 #F69524' }}>
            “My name means ‘God leads me’ in Igbo, my native language, and in many ways, it reflects the unexpected path that led me to conservation.”
          </blockquote>

          <section style={{ maxWidth: '790px' }}>
            <p style={paragraphStyle}>
              Chinedu Mogbo is a Nigerian wildlife conservationist, environmental educator, and founder of Greenfingers Wildlife Initiative, an organization dedicated to protecting Nigeria's wildlife through rescue, rehabilitation, education, and community engagement.
            </p>
            <p style={paragraphStyle}>
              His love for wildlife began in childhood, fascinated by the birds, lizards, insects, and other animals around him. Although his academic journey led him through biomedical science, public health, and medicine at universities in the UK and Grenada, his passion for animals and nature remained constant.
            </p>
            <p style={paragraphStyle}>
              Through the Greenfingers Wildlife Rehabilitation and Learning Centre, Chinedu has created a space where rescued and confiscated wildlife receive care while children, schools, families, and the wider public learn about Nigeria's biodiversity. Under his leadership, Greenfingers has cared for more than 150 rescued animals, including pangolins, sea turtles, African grey parrots, owls, crocodiles, and primates.
            </p>
            <p style={paragraphStyle}>
              His conservation work has a strong focus on threatened species, particularly sea turtles and pangolins. Through the Turtle Bae Sanctuary and partnerships with coastal stakeholders, more than 70 sea turtles have been released over approximately three years, alongside beach clean-ups, nesting surveys, habitat protection, and community education.
            </p>
            <p style={paragraphStyle}>
              Chinedu also uses art, sport, storytelling, and hands-on experiences to make conservation accessible to wider audiences through initiatives such as Play4Pangolin, Artivism, the Sea Turtle Festival, and the Ocean Heroes Forum.
            </p>
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
