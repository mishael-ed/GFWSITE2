import { Link } from 'react-router-dom'
import Nav from './Nav'
import Footer from './Footer'
import FreeformButton from './FreeformButton'

const color = '#B2D235'

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
  color,
  fontWeight: 'normal',
  fontSize: '40px',
  lineHeight: 1,
  margin: '48px 0 18px',
}

const eventStyle = {
  fontFamily: 'Modern Sans',
  color: '#000000',
  fontWeight: 'bold',
  fontSize: '20px',
  lineHeight: 1.2,
  margin: '28px 0 6px',
}

const annualEvents = [
  {
    name: 'Wildlife and Conservation Experiences',
    description: 'Interactive events that bring people closer to wildlife through education, animal encounters, conservation talks and hands-on learning experiences.',
  },
  {
    name: 'Sea Turtle Festival',
    description: 'A family-friendly celebration of sea turtles and our oceans, bringing together conservation, education, art, entertainment and community action to inspire people to play, protect and preserve our marine environment.',
  },
  {
    name: 'Sea Turtle Conservation Forum',
    description: 'A platform for students, researchers, conservationists, organisations and ocean advocates to share knowledge, showcase ideas and discuss solutions for protecting our oceans and marine wildlife.',
  },
  {
    name: 'Arthropod Exhibition',
    description: 'A fascinating exploration into the world of insects, spiders and other arthropods. Visitors can learn about their diversity, ecological importance and the incredible role they play in our environment.',
  },
  {
    name: 'Beach and Community Clean-Ups',
    description: 'Community-driven conservation activities that bring volunteers together to remove waste from beaches and communities while raising awareness about plastic pollution and its impact on wildlife.',
  },
  {
    name: 'Wildlife Education and School Events',
    description: 'Special programmes, competitions, workshops and exhibitions designed to inspire the next generation of conservationists and encourage young people to become active wildlife ambassadors.',
  },
  {
    name: 'Wildlife Awareness Campaign Activities',
    description: 'A series of events and public engagement activities organised as part of our ongoing efforts to increase awareness, promote coexistence and encourage the protection of Nigeria\'s wildlife.',
  },
  {
    name: 'Wildlife Releases and Conservation Milestones',
    description: 'Special moments where communities and supporters come together to witness the release of rehabilitated wildlife back into their natural habitats and celebrate important conservation achievements.',
  },
]

function EventsDetailPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', width: '100%', backgroundColor: '#FDF8DF', overflow: 'hidden' }}>
      <div style={{ flex: 1 }}>
        <div style={{ paddingBottom: '20px' }}><Nav /></div>

        <main className="content-page" style={{ maxWidth: '800px', margin: '0 auto', padding: '60px 80px 140px' }}>
          <Link to="/events" style={{ display: 'inline-block', fontFamily: 'Modern Sans', color: '#000000', fontWeight: 'bold', fontSize: '15px', textDecoration: 'none', marginBottom: '28px' }}>
            ← Back to Events
          </Link>

          <h1 style={{ fontFamily: 'Skreeble, "Rainbow Theory", sans-serif', color, fontSize: '72px', lineHeight: .95, margin: 0 }}>GREENFINGERS EVENTS</h1>
          <p style={{ ...paragraphStyle, color: '#F69524', fontSize: '20px', margin: '25px 0 30px' }}>
            Connecting People, Wildlife and Nature Through Experiences
          </p>

          <p style={paragraphStyle}>
            At Greenfingers Wildlife Initiative, our events bring people together to learn, explore, take action and make a difference for wildlife and the environment.
          </p>
          <p style={paragraphStyle}>
            Throughout the year, we host a diverse range of educational, conservation-focused and community-centred events designed for children, young people, families, schools, wildlife enthusiasts, organisations and the wider public.
          </p>
          <p style={paragraphStyle}>
            From wildlife exhibitions and educational experiences to beach clean-ups, conservation forums and family festivals, every Greenfingers event creates an opportunity for people to connect with nature while contributing to the protection of wildlife and their habitats.
          </p>

          <h2 style={headingStyle}>Our Annual Events</h2>

          {annualEvents.map((event) => (
            <div key={event.name}>
              <h3 style={eventStyle}>{event.name}</h3>
              <p style={paragraphStyle}>{event.description}</p>
            </div>
          ))}

          <h2 style={headingStyle}>Be Part of the Experience</h2>
          <p style={paragraphStyle}>
            Whether you are a wildlife enthusiast, student, family, school, organisation or volunteer, there is always an opportunity to be part of a Greenfingers event.
          </p>
          <p style={paragraphStyle}>
            Join us throughout the year as we celebrate wildlife, take action for the environment and create unforgettable experiences that inspire people to become guardians of nature.
          </p>
          <p style={paragraphStyle}>
            Explore our upcoming events, save the dates and join the movement to protect wildlife and wild spaces.
          </p>

          <FreeformButton color={color} to="/events/calendar">View our calendar</FreeformButton>
        </main>
      </div>

      <Footer />
    </div>
  )
}

export default EventsDetailPage
