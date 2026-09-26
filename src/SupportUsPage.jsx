import Nav from './Nav'
import Footer from './Footer'
import PortfolioCard from './PortfolioCard'

function SupportUsPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', width: '100%', backgroundColor: '#FDF8DF', overflow: 'hidden' }}>
      <div style={{ flex: 1 }}>
        <Nav />

        <main className="content-page" style={{ maxWidth: '900px', margin: '0 auto', padding: '90px 80px 150px' }}>
          <h1
            className="content-page-title"
            style={{
              fontFamily: 'Skreeble, "Rainbow Theory", sans-serif',
              color: '#009a2e',
              fontSize: 'clamp(68px, 9vw, 105px)',
              fontWeight: 'normal',
              lineHeight: .9,
              textAlign: 'center',
              margin: '0 0 42px',
            }}
          >
            BE PART OF THE WORK
          </h1>

          <div className="card-list" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '40px', padding: '55px 0 10px', width: '100%', boxSizing: 'border-box' }}>
            <PortfolioCard
              title="DONATE"
              description="Make a direct contribution to wildlife rescue, care, and conservation."
              image="/original%20images/homepage/sanctuary.jpg"
              to="/support-us/donate"
            />
            <PortfolioCard
              title="BECOME A MEMBER"
              description="Join our conservation community and help sustain the work."
              image="/original%20images/homepage/ourevents.jpg"
              to="/support-us/member"
            />
            <PortfolioCard
              title="INTERNATIONAL DONATION"
              description="Support Greenfingers and Nigeria's wildlife from anywhere in the world."
              image="/original%20images/homepage/ourinitiatives.jpg"
              to="/support-us/international-donation"
            />
            <PortfolioCard
              title="BECOME A PATRON"
              description="Provide lasting support for our programmes and long-term impact."
              image="/original%20images/homepage/education.jpg"
              to="/support-us/patron"
            />
            <PortfolioCard
              title="BUSINESS PARTNERSHIP"
              description="Partner with us to create meaningful conservation impact."
              image="/original%20images/homepage/ourinitiatives.jpg"
              to="/support-us/business-partnership"
            />
          </div>
        </main>
      </div>

      <Footer />
    </div>
  )
}

export default SupportUsPage
