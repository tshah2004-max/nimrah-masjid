import { useState, useEffect } from 'react'

function Carousel() {
  const images = [
    '/mosque1.png',
    '/mosque2.png',
    '/mosque3.png',
    '/mosque4.png',
    '/mosque5.png',
    '/mosque6.png',
    '/mosque7.png',
    '/mosque8.png',
  ]

  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % images.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="w-full h-96 overflow-hidden relative">
      <img
        src={images[current]}
        alt="Nimrah Masjid"
        className="w-full h-full object-contain transition-all duration-500"
      />
    </div>
  )
}

export default Carousel