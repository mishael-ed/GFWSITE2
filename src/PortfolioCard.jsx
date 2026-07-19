import { useId } from 'react'

const CARD_PATH =
  'M15 15 C100 10 220 13 305 11 L305 392 C220 398 100 390 15 395 L15 15 Z'

function PortfolioCard({ title, image }) {
  const clipId = useId()

  return (
    <div style={{ position: 'relative', width: '320px', height: '400px' }}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 320 400"
        preserveAspectRatio="none"
        style={{ position: 'absolute', top: '10px', left: 0 }}
      >
        <path d={CARD_PATH} fill="#000000" />
      </svg>

      <svg width="100%" height="100%" viewBox="0 0 320 400" preserveAspectRatio="none" style={{ position: 'absolute', top: 0, left: 0 }}>
        <defs>
          <clipPath id={clipId}>
            <path d={CARD_PATH} />
          </clipPath>
        </defs>
        <image href={image} x="0" y="0" width="320" height="400" preserveAspectRatio="xMidYMid slice" clipPath={`url(#${clipId})`} />
        <path d={CARD_PATH} fill="rgba(0,0,0,0.7)" />
      </svg>

      <div
        style={{
          position: 'relative',
          height: '100%',
          display: 'flex',
          alignItems: 'flex-end',
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
  )
}

export default PortfolioCard
