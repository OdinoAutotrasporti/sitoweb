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
  const [heroVisible, setHeroVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Mobile-only: swap logo when hero scrolls out of view
  useEffect(() => {
    if (window.innerWidth >= 640) return
    const hero = document.getElementById('hero')
    if (!hero) return
    const observer = new IntersectionObserver(
      ([entry]) => setHeroVisible(entry.isIntersecting),
      { threshold: 0 }
    )
    observer.observe(hero)
    return () => observer.disconnect()
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
          {/* Logo sinistra — si nasconde su mobile quando l'hero esce dallo schermo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
            className={`flex items-center transition-opacity duration-500 sm:opacity-100 sm:pointer-events-auto ${
              heroVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
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

          {/* Logo centrato — appare su mobile quando l'hero esce dallo schermo */}
          <div
            aria-hidden={heroVisible}
            className={`sm:hidden absolute left-1/2 -translate-x-1/2 transition-opacity duration-500 ${
              heroVisible ? 'opacity-0 pointer-events-none' : 'opacity-100'
            }`}
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
