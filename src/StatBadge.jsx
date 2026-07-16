function StatBadge({ number, label, animationClass, duration, delay, style }) {
  return (
    <div
      className={animationClass}
      style={{
        position: 'absolute',
        textAlign: 'center',
        animationDuration: duration,
        animationDelay: delay,
        ...style,
      }}
    >
      <div style={{ fontFamily: 'Modern Sans', fontWeight: 'bold', fontSize: '30px', color: '#F69524' }}>{number}</div>
      <div style={{ fontFamily: 'Modern Sans', fontWeight: 'bold', fontSize: '11px', color: '#555555', letterSpacing: '1px' }}>{label}</div>
    </div>
  )
}

export default StatBadge
