import { useEffect, useRef } from 'react'
import pawCursor from './assets/abstracts/pawprint cursor.png'

function CustomCursor() {
  const ref = useRef(null)

  useEffect(() => {
    const cursor = ref.current
    if (!cursor) return

    const handleMove = (e) => {
      cursor.style.left = `${e.clientX}px`
      cursor.style.top = `${e.clientY}px`
    }

    const handleOver = (e) => {
      if (e.target.closest('a, button, [role="button"]')) {
        cursor.classList.add('cursor-small')
      }
    }

    const handleOut = (e) => {
      if (e.target.closest('a, button, [role="button"]')) {
        cursor.classList.remove('cursor-small')
      }
    }

    window.addEventListener('mousemove', handleMove)
    document.addEventListener('mouseover', handleOver)
    document.addEventListener('mouseout', handleOut)

    return () => {
      window.removeEventListener('mousemove', handleMove)
      document.removeEventListener('mouseover', handleOver)
      document.removeEventListener('mouseout', handleOut)
    }
  }, [])

  return <img ref={ref} src={pawCursor} alt="" className="custom-cursor" />
}

export default CustomCursor
