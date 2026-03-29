'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

const photos = [
  { src: '/gallery/Foto(16).jpg', alt: 'Odino Autotrasporti al lavoro' },
  { src: '/gallery/Foto(17).jpg', alt: 'Odino Autotrasporti al lavoro' },
  { src: '/gallery/Foto(18).jpg', alt: 'Odino Autotrasporti al lavoro' },
  { src: '/gallery/Foto(19).jpg', alt: 'Odino Autotrasporti al lavoro' },
]

export default function ComeLavoriamo() {
  const sectionRef = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="come-lavoriamo"
      ref={sectionRef}
      className="bg-navy py-14 sm:py-20 lg:py-32 scroll-mt-16 lg:scroll-mt-20"
      aria-labelledby="come-lavoriamo-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section label */}
        <div
          className={`flex items-center gap-4 mb-10 sm:mb-16 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="block w-8 h-[2px] bg-gold" aria-hidden="true" />
          <span className="font-condensed text-xs tracking-[0.4em] uppercase text-gold">
            Come Lavoriamo
          </span>
        </div>

        <h2
          id="come-lavoriamo-heading"
          className={`font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-400 text-light leading-tight mb-12 sm:mb-16 transition-all duration-700 delay-100 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Sul campo,
          <br />
          <span className="font-600 italic">ogni giorno.</span>
        </h2>

        {/* 2×2 photo grid */}
        <div
          className={`grid grid-cols-2 gap-3 lg:gap-4 transition-all duration-700 delay-200 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {photos.map((photo, i) => (
            <div
              key={i}
              className="relative aspect-[4/3] overflow-hidden"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 50vw, 50vw"
              />
              <div className="absolute inset-0 bg-navy/25 hover:bg-navy/5 transition-colors duration-300" />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
