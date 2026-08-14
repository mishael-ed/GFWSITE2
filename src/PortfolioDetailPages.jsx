import { Link } from 'react-router-dom'
import Nav from './Nav'
import Footer from './Footer'

const paragraphStyle = {
  fontFamily: 'Modern Sans',
  color: '#000000',
  fontWeight: 'bold',
  fontSize: '17px',
  lineHeight: '1.65',
  margin: '16px 0',
}

const headingStyle = {
  fontFamily: 'Skreeble',
  color: '#009a2e',
  fontWeight: 'normal',
  fontSize: '40px',
  lineHeight: 1,
  margin: '48px 0 18px',
}

const listStyle = {
  ...paragraphStyle,
  paddingLeft: '24px',
}

function DetailLayout({ title, intro, children }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', width: '100%', backgroundColor: '#FDF8DF', overflow: 'hidden' }}>
      <div style={{ flex: 1 }}>
        <div style={{ paddingBottom: '20px' }}>
          <Nav />
        </div>

        <main className="content-page" style={{ maxWidth: '800px', margin: '0 auto', padding: '60px 80px 140px' }}>
          <Link to="/portfolio" style={{ display: 'inline-block', fontFamily: 'Modern Sans', color: '#000000', fontWeight: 'bold', fontSize: '15px', textDecoration: 'none', marginBottom: '28px' }}>
            ← Explore Portfolio
          </Link>
          <h1 className="content-page-title portfolio-detail-title" style={{ fontFamily: 'Skreeble', color: '#009a2e', fontSize: '72px', lineHeight: .95, margin: 0 }}>
            {title}
          </h1>
          {intro && <p style={{ ...paragraphStyle, fontSize: '20px', color: '#F69524', margin: '25px 0 30px' }}>{intro}</p>}
          {children}
        </main>
      </div>

      <Footer />
    </div>
  )
}

export function WildlifeCampaignPage() {
  return (
    <DetailLayout
      title="Nigerian Wildlife Awareness Campaign"
      intro="Greenfingers Wildlife Initiative's flagship national campaign dedicated to inspiring a greater appreciation for Nigeria's remarkable wildlife and natural heritage."
    >
      <p style={paragraphStyle}>
        Created in response to the growing threats facing biodiversity and the need for greater public awareness, the campaign brings together education, conservation, culture, sports, storytelling, and community action to inspire positive environmental change. By connecting people with nature through engaging experiences, NWAC encourages individuals, schools, businesses, and communities to become active participants in protecting Nigeria's wildlife.
      </p>
      <p style={paragraphStyle}>
        Our campaign reaches people through a variety of initiatives, including educational programmes, conservation events, creative arts, sports, citizen science, digital campaigns, public exhibitions, and community outreach. Each activity is designed to increase knowledge, celebrate Nigeria's unique species, and empower people to take meaningful action for conservation.
      </p>

      <h2 style={headingStyle}>Our Campaign Pillars</h2>
      <ul style={listStyle}>
        <li><strong>Wildlife Education</strong> – Inspiring learning through schools, workshops, and public engagement.</li>
        <li><strong>Conservation Action</strong> – Encouraging hands-on participation through clean-ups, habitat restoration, and citizen science.</li>
        <li><strong>Creative Advocacy</strong> – Using art, storytelling, media, and culture to make conservation accessible and engaging.</li>
        <li><strong>Sports for Conservation</strong> – Harnessing the power of sport through initiatives like Play4Pangolins and the Race4Wildlife to inspire environmental stewardship.</li>
        <li><strong>Community Engagement</strong> – Working alongside communities to build a nationwide movement for wildlife conservation.</li>
      </ul>
    </DetailLayout>
  )
}

export function ArtivismPage() {
  return (
    <DetailLayout title="Artivism for Conservation" intro="Where creativity inspires conservation.">
      <p style={paragraphStyle}>
        Artivism for Conservation is Greenfingers Wildlife Initiative's creative environmental campaign that uses the power of art, culture, and storytelling to inspire action for wildlife and the planet.
      </p>
      <p style={paragraphStyle}>
        We believe that art has the unique ability to connect people emotionally with nature, transforming complex environmental challenges into powerful stories that educate, inspire, and motivate change. Through creative expression, we encourage individuals and communities to rethink their relationship with the environment and become active participants in conservation.
      </p>
      <p style={paragraphStyle}>
        Our campaign addresses pressing issues such as plastic pollution, habitat destruction, biodiversity loss, and climate change by combining environmental education with artistic innovation. From recycled art and sustainable fashion to public exhibitions, performances, storytelling, and community engagement, Artivism demonstrates that creativity can be a powerful force for environmental action.
      </p>

      <h2 style={headingStyle}>Our Focus</h2>
      <ul style={listStyle}>
        <li><strong>Creative Advocacy</strong> – Using art, music, fashion, theatre, and storytelling to communicate conservation messages.</li>
        <li><strong>Environmental Action</strong> – Inspiring communities to reduce waste, embrace sustainability, and protect wildlife.</li>
        <li><strong>Education &amp; Engagement</strong> – Creating interactive experiences that connect people of all ages with nature.</li>
        <li><strong>Collaboration</strong> – Bringing together artists, schools, businesses, conservationists, and communities to create meaningful environmental impact.</li>
      </ul>

      <h2 style={headingStyle}>Signature Experiences</h2>
      <p style={paragraphStyle}>Artivism comes to life through a variety of inspiring programmes and events, including:</p>
      <ul style={listStyle}>
        <li>Trashion Shows celebrating fashion created from recycled materials.</li>
        <li>Beach and Community Clean-ups that turn environmental action into creative expression.</li>
        <li>Eco-Art Exhibitions showcasing artworks inspired by wildlife and conservation.</li>
        <li>Workshops and School Programmes that encourage creativity while promoting environmental responsibility.</li>
        <li>Storytelling, Performances, and Public Installations that spark conversation and inspire action.</li>
      </ul>

      <h2 style={headingStyle}>Create. Inspire. Protect.</h2>
      <p style={paragraphStyle}>
        Artivism is more than an art campaign—it's a movement that empowers people to become advocates for nature through creativity.
      </p>
      <p style={paragraphStyle}>
        Whether you're an artist, student, educator, designer, performer, volunteer, or environmental enthusiast, there's a place for you in the movement. Together, we can transform creativity into conservation and inspire lasting change for wildlife and our planet.
      </p>
    </DetailLayout>
  )
}
