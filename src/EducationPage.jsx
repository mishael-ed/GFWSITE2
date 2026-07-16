import Nav from './Nav'
import Footer from './Footer'

const headingStyle = {
  fontFamily: 'Skreeble',
  color: '#F69524',
  margin: '50px 0 10px',
}

const paragraphStyle = {
  fontFamily: 'Modern Sans',
  color: '#000000',
  fontWeight: 'bold',
  fontSize: '17px',
  lineHeight: '1.6',
  margin: '16px 0',
}

function EducationPage() {
  return (
    <div style={{ width: '100%', backgroundColor: '#FDF8DF', overflow: 'hidden' }}>
      <div style={{ paddingBottom: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <Nav />
        </div>
      </div>

      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '60px 80px 140px' }}>
        <h1 style={{ fontFamily: 'Skreeble', color: '#F69524', fontSize: '80px', margin: 0 }}>EDUCATION</h1>

        <p style={paragraphStyle}>
          Inspiring the next generation of conservation leaders.
        </p>
        <p style={paragraphStyle}>
          At Greenfingers Wildlife Initiative, we believe that education is one of the most powerful tools for protecting wildlife. Our educational programmes are designed to spark curiosity, build knowledge, and inspire meaningful action by connecting learners of all ages with the natural world.
        </p>
        <p style={paragraphStyle}>
          Whether in classrooms, at our wildlife sanctuary, or through creative learning experiences, our programmes encourage participants to explore, discover, and become lifelong champions for wildlife conservation.
        </p>
        <p style={paragraphStyle}>
          Discover our educational initiatives below.
        </p>

        <h2 style={headingStyle}>Wildlife Warriors Programme</h2>
        <p style={paragraphStyle}>
          The Wildlife Warriors Programme empowers children and young people to become ambassadors for nature through hands-on conservation activities, wildlife experiences, environmental leadership, and community action. Participants develop the knowledge, skills, and confidence to make a positive impact for wildlife.
        </p>

        <h2 style={headingStyle}>Nature School</h2>
        <p style={paragraphStyle}>
          Nature School transforms learning into an outdoor adventure by bringing students closer to wildlife and nature. Through interactive lessons, sanctuary visits, field experiences, and curriculum-aligned activities, learners gain a deeper understanding of biodiversity, ecosystems, and conservation.
        </p>

        <h2 style={headingStyle}>Wild Tales</h2>
        <p style={paragraphStyle}>
          Wild Tales uses the power of storytelling to inspire a love for wildlife and the environment. Through creative writing, reading, and storytelling activities, participants explore the wonders of nature while developing their imagination, communication skills, and appreciation for conservation.
        </p>

        <h2 style={headingStyle}>Research &amp; Conservation</h2>
        <p style={paragraphStyle}>
          Supporting wildlife conservation through research, species monitoring, habitat protection, and evidence-based solutions that strengthen biodiversity conservation across Nigeria.
        </p>

        <h2 style={headingStyle}>Building a Generation That Cares</h2>
        <p style={paragraphStyle}>
          Every educational experience is designed to nurture curiosity, encourage critical thinking, and inspire action. By engaging children, students, educators, and families, we are helping build a future where people understand, value, and actively protect Nigeria's extraordinary wildlife and natural heritage.
        </p>
      </div>

      <Footer />
    </div>
  )
}

export default EducationPage
