import { Link, useLocation } from 'react-router-dom'
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
  fontFamily: 'Skreeble, "Rainbow Theory", sans-serif',
  color: '#009a2e',
  fontWeight: 'normal',
  fontSize: '40px',
  lineHeight: 1,
  margin: '48px 0 18px',
}

const subheadingStyle = {
  fontFamily: 'Skreeble, "Rainbow Theory", sans-serif',
  color: '#F69524',
  fontWeight: 'normal',
  fontSize: '30px',
  lineHeight: 1.05,
  margin: '34px 0 12px',
}

const listStyle = {
  ...paragraphStyle,
  paddingLeft: '24px',
}

function DetailLayout({ title, intro, children }) {
  const location = useLocation()
  const openedFromInitiatives = location.pathname.startsWith('/initiatives/')
  const backTo = openedFromInitiatives ? '/initiatives' : '/portfolio'
  const backLabel = openedFromInitiatives ? 'Explore Initiatives' : 'Explore Portfolio'

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', width: '100%', backgroundColor: '#FDF8DF', overflow: 'hidden' }}>
      <div style={{ flex: 1 }}>
        <div style={{ paddingBottom: '20px' }}>
          <Nav />
        </div>

        <main className="content-page" style={{ maxWidth: '800px', margin: '0 auto', padding: '60px 80px 140px' }}>
          <Link to={backTo} style={{ display: 'inline-block', fontFamily: 'Modern Sans', color: '#000000', fontWeight: 'bold', fontSize: '15px', textDecoration: 'none', marginBottom: '28px' }}>
            ← {backLabel}
          </Link>
          <h1 className="content-page-title portfolio-detail-title" style={{ fontFamily: 'Skreeble, "Rainbow Theory", sans-serif', color: '#009a2e', fontSize: '72px', lineHeight: .95, margin: 0 }}>
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

const nwacPhotoPath = '/original%20images/nigerian-wildlife-awareness-campaign/'

function CampaignPhoto({ file, alt, color = '#F69524', radius = '7px 3px 8px 4px', ratio = '3 / 2', rotate = 0, position = 'center', style }) {
  return (
    <figure
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
        src={`${nwacPhotoPath}${file}`}
        alt={alt}
        loading="lazy"
        decoding="async"
        style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover', objectPosition: position }}
      />
    </figure>
  )
}

export function WildlifeCampaignPage() {
  return (
    <DetailLayout
      title="Nigerian Wildlife Awareness Campaign"
      intro="Greenfingers Wildlife Initiative's flagship national campaign dedicated to inspiring a greater appreciation for Nigeria's remarkable wildlife and natural heritage."
    >
      <CampaignPhoto
        file="nwac-team-banner.webp"
        alt="Players standing in front of the Nigerian Wildlife Awareness Campaign banner"
        style={{ margin: '34px 0 30px' }}
        position="center 40%"
      />
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

      <h2 style={headingStyle}>The Play4Pangolin Campaign</h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: '34px', alignItems: 'center', margin: '10px 0 30px' }}>
        <img
          src={`${nwacPhotoPath}play4pangolin-logo.webp`}
          alt="Play4Pangolins logo"
          loading="lazy"
          decoding="async"
          style={{ display: 'block', width: '100%', maxWidth: '320px', height: 'auto', margin: '0 auto' }}
        />
        <div>
          <h3 style={{ ...subheadingStyle, marginTop: 0 }}>What is Play4Pangolin?</h3>
          <p style={paragraphStyle}>
            Play4Pangolin is part of our #Sports4Wildlife campaign, which raises awareness through competitive sports.
          </p>
          <p style={paragraphStyle}>
            In Nigeria, soccer is a unifying game among schools, teenagers, and adults, so we use it as a way to raise awareness about wildlife and inspire young people to take action for wildlife.
          </p>
        </div>
      </div>

      <CampaignPhoto
        file="play4pangolin-header.webp"
        alt="Two players challenge for a header during a Play4Pangolin match at a school pitch"
        color="#B2D235"
        radius="4px 8px 3px 7px"
        style={{ margin: '34px 0' }}
        position="center 35%"
      />

      <h3 style={subheadingStyle}>What is the purpose of the Play4Pangolin event?</h3>
      <p style={paragraphStyle}>As part of our Wildlife Education Programmes, it:</p>
      <ul style={listStyle}>
        <li>Highlights endangered species within Nigeria.</li>
        <li>Raises awareness about wildlife in Nigeria.</li>
        <li>Involves teenagers in the cause of raising awareness for these species.</li>
        <li>Inspires competitiveness in sports amongst teenagers.</li>
      </ul>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '30px', margin: '44px 0 10px' }}>
        <CampaignPhoto
          file="play4pangolin-dribble.webp"
          alt="Players race for the ball during a Play4Pangolin match"
          rotate={-1.2}
        />
        <CampaignPhoto
          file="play4pangolin-kick.webp"
          alt="A player lines up a kick while schoolmates watch from the sideline"
          color="#B2D235"
          radius="4px 8px 3px 7px"
          rotate={1.2}
        />
      </div>
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
        <li><strong>Education and Engagement</strong> – Creating interactive experiences that connect people of all ages with nature.</li>
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
