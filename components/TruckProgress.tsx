'use client'

import { useEffect, useState } from 'react'

function TruckIcon() {
  return (
    <svg
      width="60"
      height="30"
      viewBox="0 0 60 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Trailer box */}
      <rect x="1" y="2" width="36" height="18" rx="1.5" fill="#A88E5E" />
      {/* Trailer panel lines */}
      <line x1="13" y1="2" x2="13" y2="20" stroke="#1B2A41" strokeWidth="0.5" opacity="0.3" />
      <line x1="25" y1="2" x2="25" y2="20" stroke="#1B2A41" strokeWidth="0.5" opacity="0.3" />
      {/* Cab */}
      <path d="M37 7 L37 20 L54 20 L54 14 L49 7 Z" fill="#A88E5E" />
      {/* Windshield */}
      <path d="M42 9 L48 9 L51 13 L42 13 Z" fill="#F4F5F6" opacity="0.5" />
      {/* Exhaust pipe */}
      <rect x="51" y="3" width="3" height="6" rx="1" fill="#1B2A41" opacity="0.5" />
      {/* Chassis underline */}
      <rect x="1" y="20" width="55" height="2" fill="#1B2A41" opacity="0.15" />
      {/* Rear wheel */}
      <circle cx="10" cy="24" r="5" fill="#1B2A41" />
      <circle cx="10" cy="24" r="2.5" fill="#D1D5D8" />
      {/* Drive wheel */}
      <circle cx="28" cy="24" r="5" fill="#1B2A41" />
      <circle cx="28" cy="24" r="2.5" fill="#D1D5D8" />
      {/* Front wheel */}
      <circle cx="45" cy="24" r="5" fill="#1B2A41" />
      <circle cx="45" cy="24" r="2.5" fill="#D1D5D8" />
    </svg>
  )
}

// Truck width in px (must match the SVG width above)
const TRUCK_W = 60

export default function TruckProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const update = () => {
      const chiSiamo = document.getElementById('chi-siamo')
      if (!chiSiamo) return
      // Truck reaches far-right when Chi Siamo's top aligns with the navbar
      const NAVBAR_H = 80
      const endScroll = chiSiamo.offsetTop - NAVBAR_H
      const p = endScroll > 0 ? Math.min(1, Math.max(0, window.scrollY / endScroll)) : 1
      setProgress(p)
    }

    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update, { passive: true })
    update()
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  return (
    <div className="relative bg-light h-14 overflow-hidden" aria-hidden="true">
      {/* Road track */}
      <div className="absolute top-1/2 left-0 right-0 h-px bg-navy/15" />
      {/* Truck */}
      <div
        className="absolute top-1/2"
        style={{
          left: `calc(${progress * 100}% - ${progress * TRUCK_W}px)`,
          transform: 'translateY(-50%)',
          willChange: 'left',
        }}
      >
        <TruckIcon />
      </div>
    </div>
  )
}
