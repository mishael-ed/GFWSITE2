import { useId } from 'react'

function PortfolioCard({ title, image }) {
  const clipId = useId()

  return (
    <div style={{ position: 'relative', width: '50%', height: 'auto' }}>
      {/* Black drop shadow layer */}
      <div style={{ position: 'absolute', top: '8px', left: '0', width: '100%', height: '200px', backgroundColor: '#000000', zIndex: 0 }} />
      
      {/* Main card */}
      <div style={{ position: 'relative', width: '100%', height: '200px', overflow: 'hidden', zIndex: 1 }}>
        {/* Background image */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
        
        {/* Dark overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.7)',
          }}
        />
        
        {/* Title text */}
        <div
          style={{
            position: 'relative',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '30px 25px',
            boxSizing: 'border-box',
          }}
        >
          <h3 style={{ fontFamily: 'Skreeble', color: '#ffffff', fontWeight: 'normal', textAlign: 'center', fontSize: '32px', margin: 0, lineHeight: 1.1 }}>
            {title}
          </h3>
        </div>
      </div>
    </div>
  )
}

export default PortfolioCard
