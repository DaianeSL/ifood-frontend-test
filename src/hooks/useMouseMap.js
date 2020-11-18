import { useEffect, useState } from 'react'

export const useMouseMap = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const setFromEvent = (e) =>
      setPosition({
        x: Math.round((e.clientX * 10) / window.innerWidth),
        y: Math.round((e.clientY * 10) / window.innerHeight),
      })
    window.addEventListener('mousemove', setFromEvent)

    return () => {
      window.removeEventListener('mousemove', setFromEvent)
    }
  }, [])

  return position
}
