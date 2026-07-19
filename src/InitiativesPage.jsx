import Nav from './Nav'
import Footer from './Footer'

const headingStyle = {
  fontFamily: 'Skreeble',
  color: '#B2D235',
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

function InitiativesPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', width: '100%', backgroundColor: '#FDF8DF', overflow: 'hidden' }}>
      <div style={{ flex: 1 }}>
        <div style={{ paddingBottom: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <Nav />
          </div>
        </div>

        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '60px 80px 140px' }}>
        <h1 style={{ fontFamily: 'Skreeble', color: '#B2D235', fontSize: '80px', margin: 0 }}>OUR INITIATIVES</h1>

        <p style={paragraphStyle}>
          At Greenfingers Wildlife Initiative, we believe conservation is most effective when it brings people together. Our initiatives are designed to educate, inspire, and empower individuals, schools, communities, businesses, and policymakers to take meaningful action for wildlife and the environment.
        </p>
        <p style={paragraphStyle}>
          Each programme addresses a unique conservation challenge while contributing to our shared vision of a future where people and wildlife thrive together.
        </p>
        <p style={paragraphStyle}>
          Explore our flagship initiatives below.
        </p>

        <h2 style={headingStyle}>Nigerian Wildlife Awareness Campaign</h2>
        <p style={paragraphStyle}>
          Our flagship national campaign dedicated to raising awareness about Nigeria's incredible wildlife through education, public engagement, and community outreach. Together, we are inspiring a culture of conservation across the country.
        </p>

        <h2 style={headingStyle}>Play4Pangolins</h2>
        <p style={paragraphStyle}>
          A sports-based conservation initiative that uses the power of sports (football &amp; basketball) to raise awareness about pangolin conservation while encouraging teamwork, healthy living, and environmental stewardship.
        </p>

        <h2 style={headingStyle}>Artivism for Conservation</h2>
        <p style={paragraphStyle}>
          An innovative programme that combines art, fashion, music, and creative expression with environmental action to inspire conservation through culture and creativity.
        </p>

        <h2 style={headingStyle}>Sea Turtle Awakening</h2>
        <p style={paragraphStyle}>
          A conservation campaign dedicated to protecting Nigeria's sea turtles through education, coastal clean-ups, community engagement, research, and public events that celebrate marine conservation.
        </p>

        <h2 style={headingStyle}>Nature School Programme</h2>
        <p style={paragraphStyle}>
          Immersive learning experiences that connect children, students, educators, and families with wildlife through hands-on conservation education, school programmes, and outdoor experiences.
        </p>

        <h2 style={headingStyle}>Wildlife Rescue &amp; Rehabilitation</h2>
        <p style={paragraphStyle}>
          Our wildlife sanctuary provides rescue, rehabilitation, and lifelong care for animals in need while working to return suitable wildlife to their natural habitats whenever possible.
        </p>

        <h2 style={headingStyle}>Community Conservation</h2>
        <p style={paragraphStyle}>
          Working alongside local communities to promote sustainable conservation practices, protect wildlife habitats, and empower people to become champions for nature.
        </p>

        <h2 style={headingStyle}>Join the Movement</h2>
        <p style={paragraphStyle}>
          Whether you choose to volunteer, partner with us, participate in one of our programmes, or support our work through a donation, you can play a vital role in protecting Nigeria's wildlife.
        </p>
        <p style={paragraphStyle}>
          Together, we are creating lasting change—one initiative at a time.
        </p>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default InitiativesPage
