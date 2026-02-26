'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const navLinks = [
  { label: 'Chi Siamo', href: '#chi-siamo' },
  { label: 'Servizi', href: '#servizi' },
  { label: 'Flotta', href: '#flotta' },
  { label: 'Contatti', href: '#contatti' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [logoProgress, setLogoProgress] = useState(0) // 0 = left logo, 1 = center logo
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const NAV_H = 64
    const FADE_RANGE = 120

    const isMobileView = () => window.innerWidth < 640

    const updateLogo = () => {
      if (!isMobileView()) { setLogoProgress(0); return }
      const hero = document.getElementById('hero')
      if (!hero) return
      const bottom = hero.getBoundingClientRect().bottom
      const raw = (NAV_H + FADE_RANGE - bottom) / FADE_RANGE
      setLogoProgress(Math.min(1, Math.max(0, raw)))
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
      updateLogo()
    }

    const handleResize = () => {
      setIsMobile(isMobileView())
      updateLogo()
    }

    setIsMobile(isMobileView())
    handleScroll()

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleResize, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setMenuOpen(false)
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-navy shadow-lg shadow-navy/40 border-b border-gold/20'
            : 'bg-navy border-b border-gold/10'
        }`}
        role="banner"
      >
        <nav
          className="relative max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20"
          aria-label="Navigazione principale"
        >
          {/* Logo sinistra — sfuma su mobile mentre l'hero scorre fuori */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
            style={isMobile ? { opacity: 1 - logoProgress } : undefined}
            className={`flex items-center ${isMobile && logoProgress > 0.8 ? 'pointer-events-none' : ''}`}
            aria-label="Odino Autotrasporti – torna in cima"
          >
            <Image
              src="/logo.png"
              alt="Odino Autotrasporti"
              width={160}
              height={48}
              className="h-10 lg:h-12 w-auto object-contain"
              priority
            />
          </a>

          {/* Logo centrato — appare su mobile con fade + slide mentre l'hero esce */}
          <div
            aria-hidden={logoProgress < 0.5}
            style={isMobile ? {
              opacity: logoProgress,
              transform: `translateY(${(1 - logoProgress) * -8}px)`,
              willChange: 'opacity, transform',
            } : undefined}
            className={`sm:hidden absolute left-1/2 -translate-x-1/2 ${logoProgress < 0.2 ? 'pointer-events-none' : ''}`}
          >
            <Image
              src="/logo.png"
              alt="Odino Autotrasporti"
              width={160}
              height={48}
              className="h-8 w-auto object-contain"
            />
          </div>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-8" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="font-condensed text-sm font-500 tracking-widest uppercase text-light/70 hover:text-gold transition-colors duration-200 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold group-hover:w-full transition-all duration-300" />
                </a>
              </li>
            ))}
          </ul>

          {/* CTA desktop */}
          <a
            href="#contatti"
            onClick={(e) => handleNavClick(e, '#contatti')}
            className="hidden lg:inline-flex items-center gap-2 font-condensed text-sm font-600 tracking-widest uppercase px-5 py-2.5 border border-gold text-gold hover:bg-gold hover:text-dark transition-all duration-200"
            aria-label="Richiedi un preventivo"
          >
            Preventivo
          </a>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2 text-light"
            aria-label={menuOpen ? 'Chiudi menu' : 'Apri menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </nav>
      </header>

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-label="Menu mobile"
        aria-modal="true"
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-dark/60 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
        <nav
          className={`absolute top-16 left-0 right-0 bg-navy border-t border-gold/20 shadow-xl transition-all duration-300 ${
            menuOpen ? 'translate-y-0' : '-translate-y-4'
          }`}
        >
          <ul className="flex flex-col py-4" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="block font-condensed text-base font-500 tracking-widest uppercase text-light/70 hover:text-gold hover:bg-light/5 px-6 py-4 transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="px-6 pt-2 pb-4">
              <a
                href="#contatti"
                onClick={(e) => handleNavClick(e, '#contatti')}
                className="block text-center font-condensed text-sm font-600 tracking-widest uppercase px-5 py-3 border border-gold text-gold hover:bg-gold hover:text-dark transition-all duration-200"
              >
                Richiedi Preventivo
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}
