import Nav from './Nav'
import Footer from './Footer'

const headingStyle = {
  fontFamily: 'Skreeble',
  color: '#009a2e',
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

function AboutPage() {
  return (
    <div style={{ width: '100%', backgroundColor: '#FDF8DF', overflow: 'hidden' }}>
      <div style={{ paddingBottom: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <Nav />
        </div>
      </div>

      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '60px 80px' }}>
        <h1 style={{ fontFamily: 'Skreeble', color: '#009a2e', fontSize: '80px', margin: 0 }}>ABOUT US</h1>

        <h2 style={headingStyle}>Background</h2>

        <p style={paragraphStyle}>
          Founded in 2012, Greenfingers Wildlife Initiative was born out of a simple but urgent realization: Nigeria's incredible wildlife was disappearing, yet many people remained unaware of its importance or the threats it faced. From habitat destruction and illegal wildlife trade to pollution and human-wildlife conflict, we witnessed a growing disregard for the country's natural heritage and recognised the need for greater awareness and action.
        </p>
        <p style={paragraphStyle}>
          Rather than waiting for change, we decided to make a difference in our own little way.
        </p>
        <p style={paragraphStyle}>
          What began as a passion for wildlife has grown into a non-profit conservation organisation dedicated to protecting Nigeria's biodiversity through wildlife rescue and rehabilitation, conservation education, research, community engagement, and environmental advocacy. We believe that lasting conservation is only possible when people understand, appreciate, and actively protect the natural world around them.
        </p>
        <p style={paragraphStyle}>
          Our work is guided by the United Nations Sustainable Development Goals (SDGs), particularly SDG 4 (Quality Education), SDG 11 (Sustainable Cities and Communities), SDG 13 (Climate Action), SDG 14 (Life Below Water), SDG 15 (Life on Land), and SDG 17 (Partnerships for the Goals). Through innovative programmes, strategic partnerships, and community-driven initiatives, we work to address the challenges facing wildlife while inspiring individuals and organizations to become part of the solution.
        </p>
        <p style={paragraphStyle}>
          Today, Greenfingers Wildlife Initiative works with schools, communities, businesses, government agencies, researchers, and volunteers to create meaningful opportunities for conservation. Whether rescuing injured wildlife, educating the next generation, restoring habitats, or leading public awareness campaigns, every initiative is driven by one shared purpose - to ensure that Nigeria's wildlife is valued, protected, and able to thrive for generations to come.
        </p>
        <p style={paragraphStyle}>
          We believe that every action matters. By choosing to act instead of standing by, we have seen how small efforts can grow into lasting impact. Together with our partners, supporters, and volunteers, we continue to prove that when people come together for nature, meaningful change is possible.
        </p>
      </div>

      <Footer />
    </div>
  )
}

export default AboutPage
