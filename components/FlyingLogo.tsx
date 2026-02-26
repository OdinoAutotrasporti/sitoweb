'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

// Must match Hero.tsx mobile layout constants
const HERO_IMG_H = 260     // h-[260px] on mobile
const NAV_STRIP_H = 20     // h-[20px] on mobile
const NAVBAR_CENTER_Y = 32 // center of fixed h-16 navbar

// Scroll breakpoints
const PHASE1_END = 80      // by this scroll offset, logo is at hero-image center (200px)
const PHASE2_END = 280     // by this offset, logo has floated to navbar (matches Navbar logoProgress=1)

const smoothstep = (t: number) => t * t * (3 - 2 * t)
const lerp = (a: number, b: number, t: number) => a + (b - a) * t

interface LogoStyle {
  top: string
  width: string
  opacity: number
}

export default function FlyingLogo() {
  // Initial state: tiny logo at navy-strip center position (scroll = 0)
  const [ls, setLs] = useState<LogoStyle>({
    top: `${64 + HERO_IMG_H + NAV_STRIP_H / 2}px`,
    width: '35px',
    opacity: 1,
  })

  useEffect(() => {
    const update = () => {
      if (window.innerWidth >= 640) {
        setLs(s => ({ ...s, opacity: 0 }))
        return
      }

      const hero = document.getElementById('hero')
      if (!hero) return
      const rect = hero.getBoundingClientRect()

      // Live viewport-Y anchors (move as page scrolls)
      const tinyLogoY    = rect.bottom - NAV_STRIP_H / 2   // center of navy strip
      const heroImgCenterY = rect.top + HERO_IMG_H / 2     // center of hero photo

      const scrollY = window.scrollY

      if (scrollY <= PHASE1_END) {
        const t = smoothstep(scrollY / PHASE1_END)
        setLs({
          top:     `${lerp(tinyLogoY, heroImgCenterY, t)}px`,
          width:   `${lerp(35, 200, t)}px`,
          opacity: 1,
        })
      } else if (scrollY <= PHASE2_END) {
        const t    = (scrollY - PHASE1_END) / (PHASE2_END - PHASE1_END)
        const ease = smoothstep(t)
        // Fade out over the last 30 % of phase 2
        const fadeT   = Math.max(0, (t - 0.7) / 0.3)
        setLs({
          top:     `${lerp(heroImgCenterY, NAVBAR_CENTER_Y, ease)}px`,
          width:   `${lerp(200, 32, ease)}px`,
          opacity: 1 - fadeT,
        })
      } else {
        setLs({ top: `${NAVBAR_CENTER_Y}px`, width: '32px', opacity: 0 })
      }
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
    <div
      className="sm:hidden fixed left-1/2 z-[48]"
      style={{
        top: ls.top,
        width: ls.width,
        opacity: ls.opacity,
        transform: 'translateX(-50%) translateY(-50%)',
        pointerEvents: 'none',
        willChange: 'top, width, opacity',
      }}
      aria-hidden="true"
    >
      <Image
        src="/logo.png"
        alt=""
        width={200}
        height={57}
        className="w-full h-auto object-contain"
        priority
      />
    </div>
  )
}
