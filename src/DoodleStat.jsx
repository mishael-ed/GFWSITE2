import { useEffect, useRef, useState } from 'react'

function DoodleStat({ number, label, style }) {
  const match = number.match(/^([\d,]+)(.*)$/)
  const target = match ? parseInt(match[1].replace(/,/g, ''), 10) : 0
  const suffix = match ? match[2] : ''

  const [count, setCount] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return

        const duration = 1500
        const start = performance.now()

        const step = (now) => {
          const progress = Math.min((now - start) / duration, 1)
          setCount(Math.floor(progress * target))
          if (progress < 1) requestAnimationFrame(step)
        }

        requestAnimationFrame(step)
        observer.disconnect()
      },
      { threshold: 0.3 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return (
    <div ref={ref} style={{ textAlign: 'center', ...style }}>
      <div style={{ fontFamily: 'Rainbow Theory', fontSize: '60px', color: '#F69524' }}>
        {count.toLocaleString()}
        {suffix}
      </div>
      <div style={{ fontFamily: 'Modern Sans', fontWeight: 'bold', fontSize: '13px', color: '#ffffff', letterSpacing: '0.5px' }}>{label}</div>
    </div>
  )
}

export default DoodleStat
