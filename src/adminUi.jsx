export const ui = {
  label: { display: 'block', fontFamily: 'Modern Sans', fontWeight: 'bold', fontSize: '14px', color: '#1C1C1C', marginBottom: '6px' },
  input: {
    width: '100%',
    boxSizing: 'border-box',
    padding: '11px 12px',
    fontFamily: 'Modern Sans',
    fontWeight: 'bold',
    fontSize: '16px',
    color: '#000000',
    backgroundColor: '#ffffff',
    border: '2px solid #1C1C1C',
    borderRadius: '4px 8px 3px 7px',
  },
  card: { backgroundColor: '#ffffff', border: '3px solid #1C1C1C', borderRadius: '4px 8px 3px 7px', boxShadow: '5px 5px 0 #B2D235', padding: '20px' },
  hint: { fontFamily: 'Modern Sans', fontSize: '13px', color: '#555555', margin: '6px 0 0', lineHeight: 1.4 },
  heading: { fontFamily: 'Skreeble, "Rainbow Theory", sans-serif', fontWeight: 'normal', lineHeight: 1, margin: 0 },
}

const buttonColors = {
  primary: { background: '#B2D235', color: '#000000' },
  secondary: { background: '#ffffff', color: '#000000' },
  danger: { background: '#ffffff', color: '#b00020' },
}

export function AdminButton({ variant = 'secondary', small = false, style, ...props }) {
  const disabled = props.disabled
  return (
    <button
      type="button"
      {...props}
      style={{
        ...buttonColors[variant],
        padding: small ? '7px 12px' : '12px 22px',
        fontFamily: 'Modern Sans',
        fontWeight: 'bold',
        fontSize: small ? '13px' : '16px',
        border: `2px solid ${variant === 'danger' ? '#b00020' : '#1C1C1C'}`,
        borderRadius: '4px 8px 3px 7px',
        boxShadow: small ? 'none' : '3px 3px 0 #1C1C1C',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.55 : 1,
        ...style,
      }}
    />
  )
}

export function Message({ kind = 'error', children }) {
  if (!children) return null
  const colors = kind === 'error' ? { background: '#fdecee', border: '#b00020', color: '#7a0016' } : { background: '#eef7d4', border: '#6f8a12', color: '#2f3d00' }
  return (
    <p role={kind === 'error' ? 'alert' : 'status'} style={{ margin: '14px 0', padding: '10px 14px', fontFamily: 'Modern Sans', fontWeight: 'bold', fontSize: '15px', background: colors.background, border: `2px solid ${colors.border}`, borderRadius: '4px 8px 3px 7px', color: colors.color }}>
      {children}
    </p>
  )
}
