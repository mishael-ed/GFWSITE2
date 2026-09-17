import { Link } from 'react-router-dom'
import Nav from './Nav'
import Footer from './Footer'
import FreeformButton from './FreeformButton'

const paragraphStyle = {
  fontFamily: 'Modern Sans',
  color: '#000000',
  fontWeight: 'bold',
  fontSize: '17px',
  lineHeight: '1.65',
  margin: '16px 0',
}

function ProgrammeDetailPage({ title, intro, image, color, backTo, backLabel, overview, audiences, experiences, availability, children, cta = 'Make an inquiry' }) {
  const headingStyle = {
    fontFamily: 'Skreeble, "Rainbow Theory", sans-serif',
    color,
    fontWeight: 'normal',
    fontSize: '40px',
    lineHeight: 1,
    margin: '48px 0 18px',
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', width: '100%', backgroundColor: '#FDF8DF', overflow: 'hidden' }}>
      <div style={{ flex: 1 }}>
        <div style={{ paddingBottom: '20px' }}><Nav /></div>

        <main className="content-page" style={{ maxWidth: '800px', margin: '0 auto', padding: '60px 80px 140px' }}>
          <Link to={backTo} style={{ display: 'inline-block', fontFamily: 'Modern Sans', color: '#000000', fontWeight: 'bold', fontSize: '15px', textDecoration: 'none', marginBottom: '28px' }}>
            ← {backLabel}
          </Link>

          <h1 className="content-page-title programme-detail-title" style={{ fontFamily: 'Skreeble, "Rainbow Theory", sans-serif', color, fontSize: '72px', lineHeight: .95, margin: 0 }}>{title}</h1>
          <p style={{ ...paragraphStyle, color: '#F69524', fontSize: '20px', margin: '25px 0 30px' }}>{intro}</p>

          {image && (
            <div className="programme-detail-image" style={{ borderColor: color }}>
              <img src={image} alt={`${title} programme`} />
            </div>
          )}

          {overview.map((paragraph) => <p key={paragraph} style={paragraphStyle}>{paragraph}</p>)}

          {audiences?.length > 0 && (
            <>
              <h2 style={headingStyle}>Who It Is For</h2>
              <ul style={{ ...paragraphStyle, paddingLeft: '24px' }}>
                {audiences.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </>
          )}

          {experiences?.length > 0 && (
            <>
              <h2 style={headingStyle}>What You Will Experience</h2>
              <ul style={{ ...paragraphStyle, paddingLeft: '24px' }}>
                {experiences.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </>
          )}

          {children}

          {availability && (
            <>
              <h2 style={headingStyle}>Availability</h2>
              <p style={paragraphStyle}>{availability}</p>
            </>
          )}

          <FreeformButton color={color} to="/contact">{cta}</FreeformButton>
        </main>
      </div>

      <Footer />
    </div>
  )
}

export default ProgrammeDetailPage
