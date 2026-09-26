import { Link } from 'react-router-dom'
import Nav from './Nav'
import Footer from './Footer'
import FreeformButton from './FreeformButton'

const paragraphStyle = {
  fontFamily: 'Modern Sans',
  color: '#000000',
  fontWeight: 'bold',
  fontSize: '17px',
  lineHeight: 1.7,
  margin: '18px 0',
}

function SupportDetailPage({ title, subtitle, paragraphs, buttonLabel, color = '#B2D235' }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', width: '100%', backgroundColor: '#FDF8DF', overflow: 'hidden' }}>
      <div style={{ flex: 1 }}>
        <div style={{ paddingBottom: '20px' }}><Nav /></div>

        <main className="content-page" style={{ maxWidth: '760px', margin: '0 auto', padding: '60px 80px 150px' }}>
          <Link to="/support-us" style={{ display: 'inline-block', fontFamily: 'Modern Sans', color: '#000000', fontWeight: 'bold', fontSize: '15px', textDecoration: 'none', marginBottom: '30px' }}>
            ← Explore Support Us
          </Link>

          <h1
            className="content-page-title"
            style={{
              fontFamily: 'Skreeble, "Rainbow Theory", sans-serif',
              color: '#009a2e',
              fontSize: 'clamp(65px, 9vw, 92px)',
              fontWeight: 'normal',
              lineHeight: .92,
              margin: 0,
            }}
          >
            {title}
          </h1>

          <h2 style={{ fontFamily: 'Skreeble, "Rainbow Theory", sans-serif', color: '#F69524', fontSize: 'clamp(32px, 5vw, 44px)', fontWeight: 'normal', lineHeight: 1, margin: '28px 0 30px' }}>
            {subtitle}
          </h2>

          {paragraphs.map((paragraph) => <p key={paragraph} style={paragraphStyle}>{paragraph}</p>)}

          <FreeformButton color={color} to="/contact">{buttonLabel}</FreeformButton>
        </main>
      </div>

      <Footer />
    </div>
  )
}

export function DonatePage() {
  return (
    <SupportDetailPage
      title="DONATE"
      subtitle="Help Us Protect Wildlife"
      paragraphs={[
        'Your donation helps support the everyday work of wildlife conservation - from caring for rescued animals and providing food and veterinary care to supporting education, community outreach, habitat protection and conservation projects.',
        'Every contribution helps us continue giving wildlife a second chance while inspiring people to become better stewards of nature.',
      ]}
      buttonLabel="DONATE NOW"
      color="#B2D235"
    />
  )
}

export function MembershipPage() {
  return (
    <SupportDetailPage
      title="BECOME A MEMBER"
      subtitle="Join the Greenfingers Community"
      paragraphs={[
        'Become part of a growing community of people who care about wildlife and the environment. Greenfingers membership provides opportunities to participate in conservation activities, educational programmes, events and experiences throughout the year.',
        'Whether you are an individual, family, young person or wildlife enthusiast, there is a place for you in the Greenfingers community.',
      ]}
      buttonLabel="BECOME A MEMBER"
      color="#F69524"
    />
  )
}

export function InternationalDonationPage() {
  return (
    <SupportDetailPage
      title="INTERNATIONAL DONATION"
      subtitle="Support Greenfingers From Anywhere in the World"
      paragraphs={[
        "You don't have to be in Nigeria to support wildlife conservation.",
        "Our international donation option makes it possible for friends, supporters, organisations and conservation partners around the world to contribute to Greenfingers' work.",
        "Your support can help us care for rescued wildlife, develop conservation education programmes, engage communities and advance projects protecting Nigeria's wildlife and natural habitats.",
      ]}
      buttonLabel="DONATE INTERNATIONALLY"
      color="#B2D235"
    />
  )
}

export function PatronPage() {
  return (
    <SupportDetailPage
      title="BECOME A PATRON"
      subtitle="Champion Wildlife Conservation"
      paragraphs={[
        'Becoming a Greenfingers Patron means making a deeper and more sustained commitment to wildlife conservation.',
        'Patrons help provide long-term support for our sanctuary, wildlife rehabilitation, education programmes and conservation initiatives. It is an opportunity to play a meaningful role in the continued growth of Greenfingers and the work we do for wildlife.',
      ]}
      buttonLabel="BECOME A PATRON"
      color="#F69524"
    />
  )
}

export function BusinessPartnershipPage() {
  return (
    <SupportDetailPage
      title="BUSINESS PARTNERSHIP"
      subtitle="Partner With Greenfingers"
      paragraphs={[
        'Businesses can make a meaningful contribution to conservation while engaging employees, customers and communities through purposeful partnerships.',
        'We work with businesses and organisations on conservation campaigns, environmental activities, educational programmes, community initiatives, sponsorships, employee volunteering and corporate social responsibility projects.',
        'Whether you want to support a specific project or develop a long-term partnership, we would love to explore what we can achieve together.',
      ]}
      buttonLabel="BECOME A BUSINESS PARTNER"
      color="#B2D235"
    />
  )
}
