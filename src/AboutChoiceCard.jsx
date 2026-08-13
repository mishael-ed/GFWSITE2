import { Link } from 'react-router-dom'

function AboutChoiceCard({ title, description, image, to }) {
  return (
    <Link
      to={to}
      className="about-choice-card"
      style={{
        position: 'relative',
        display: 'block',
        width: 'min(680px, 100%)',
        height: '230px',
        color: '#ffffff',
        textDecoration: 'none',
        filter: 'drop-shadow(0 9px 0 #000000)',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `linear-gradient(90deg, rgba(0,0,0,.82), rgba(0,0,0,.52)), url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div
        style={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          height: '100%',
          padding: '32px 42px',
          boxSizing: 'border-box',
        }}
      >
        <h2 style={{ fontFamily: 'Skreeble', fontWeight: 'normal', fontSize: '45px', lineHeight: 1, margin: 0 }}>
          {title}
        </h2>
        <p style={{ fontFamily: 'Modern Sans', fontWeight: 'bold', fontSize: '16px', lineHeight: 1.5, maxWidth: '470px', margin: '15px 0 0' }}>
          {description}
        </p>
      </div>
    </Link>
  )
}

export default AboutChoiceCard
