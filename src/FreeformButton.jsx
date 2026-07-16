import { Link } from 'react-router-dom'

function FreeformButton({ children, color = '#F69524', to }) {
  const content = (
    <>
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: 'calc(100% + 8px)', overflow: 'hidden' }}>
        <svg
          width="100%"
          height="calc(100% - 8px)"
          viewBox="0 0 300 60"
          preserveAspectRatio="none"
          style={{ position: 'absolute', top: '7px', left: 0 }}
        >
          <path
            d="M2 4 C90 1 210 6 298 4 L298 56 C210 59 90 54 2 56 Z"
            fill="#000000"
          />
        </svg>

        <svg
          width="100%"
          height="calc(100% - 8px)"
          viewBox="0 0 300 60"
          preserveAspectRatio="none"
          style={{ position: 'absolute', top: 0, left: 0 }}
        >
          <path
            d="M2 4 C90 1 210 6 298 4 L298 56 C210 59 90 54 2 56 Z"
            fill={color}
            stroke="#000000"
            strokeWidth="0"
            strokeLinejoin="miter"
          />
        </svg>
      </div>
      <span style={{ position: 'relative' }}>{children}</span>
    </>
  )

  const style = {
    position: 'relative',
    display: 'inline-block',
    fontFamily: 'Modern Sans',
    fontWeight: 'bold',
    fontSize: '16px',
    color: '#000000',
    background: 'none',
    border: 'none',
    padding: '16px 34px',
    margin: '30px 0 8px 0',
    textDecoration: 'none',
  }

  if (to) {
    return (
      <Link to={to} style={style}>
        {content}
      </Link>
    )
  }

  return <button style={style}>{content}</button>
}

export default FreeformButton
