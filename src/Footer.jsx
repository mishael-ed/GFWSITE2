import logo from './assets/logo.png'

function Footer() {
  return (
    <div>
      <footer id="contact" className="site-footer" style={{ backgroundColor: '#1C1C1C', padding: '80px 0 40px' }}>
        <div
          className="footer-grid"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            gap: '50px',
            maxWidth: '1300px',
            margin: '0 auto',
            padding: '0 60px',
            boxSizing: 'border-box',
          }}
        >
          <img className="footer-logo" src={logo} alt="Green Fingers Wildlife Conservation Initiative" style={{ height: '70px' }} />

          <p
            style={{
              fontFamily: 'Modern Sans',
              color: '#ffffff',
              fontWeight: 'bold',
              fontSize: '17px',
              lineHeight: '1.5',
              maxWidth: '320px',
              margin: 0,
              textAlign: 'left',
            }}
          >
            We are a Non-Governmental Organization focused on Wildlife and Environmental Conservation.
          </p>

          <div className="footer-contact" style={{ textAlign: 'left' }}>
            <h3 style={{ fontFamily: 'Skreeble', color: '#F69524', fontSize: '46px', fontWeight: 'normal', margin: '0 0 16px' }}>Visit Us</h3>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '14px', maxWidth: '300px' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#ffffff" style={{ flexShrink: 0, marginTop: '3px' }}>
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />
              </svg>
              <p style={{ fontFamily: 'Modern Sans', color: '#ffffff', fontSize: '15px', lineHeight: '1.5', margin: 0 }}>
                10 Emmanuel Iroabuchi Street, Thera-Annex Estate, Off Lekki-Epe, Express Way, Lagos, Nigeria.
              </p>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#ffffff" style={{ flexShrink: 0 }}>
                <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24 11.36 11.36 0 0 0 3.57.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.36 11.36 0 0 0 .57 3.57 1 1 0 0 1-.25 1.01l-2.2 2.21z" />
              </svg>
              <p style={{ fontFamily: 'Modern Sans', color: '#ffffff', fontSize: '15px', margin: 0 }}>+2348188743394</p>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#ffffff" style={{ flexShrink: 0 }}>
                <path d="M2 4h20v16H2V4zm2 2v.01L12 13l8-6.99V6H4zm16 2.24-7.4 6.47a1 1 0 0 1-1.2 0L4 8.24V18h16V8.24z" />
              </svg>
              <p style={{ fontFamily: 'Modern Sans', color: '#ffffff', fontSize: '15px', margin: 0 }}>info@greenfingerswi.org</p>
            </div>
          </div>
        </div>

        <p style={{ fontFamily: 'Modern Sans', color: '#ffffff', textAlign: 'center', margin: '60px 0 0', fontSize: '14px' }}>
          © 2026 Greenfingers Wildlife Initiative. All rights reserved.
        </p>
      </footer>
    </div>
  )
}

export default Footer
