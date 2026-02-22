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

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
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
            ? 'bg-light/95 backdrop-blur-md border-b border-navy/10 shadow-sm'
            : 'bg-light/80 backdrop-blur-sm'
        }`}
        role="banner"
      >
        <nav
          className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20"
          aria-label="Navigazione principale"
        >
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
            className="flex items-center"
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

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-8" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="font-condensed text-sm font-500 tracking-widest uppercase text-navy/70 hover:text-gold transition-colors duration-200 relative group"
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
            className="lg:hidden flex flex-col gap-1.5 p-2 text-navy"
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
          className="absolute inset-0 bg-navy/30 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
        <nav
          className={`absolute top-16 left-0 right-0 bg-light border-t border-navy/10 shadow-lg transition-all duration-300 ${
            menuOpen ? 'translate-y-0' : '-translate-y-4'
          }`}
        >
          <ul className="flex flex-col py-4" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="block font-condensed text-base font-500 tracking-widest uppercase text-navy/70 hover:text-gold hover:bg-silver/30 px-6 py-4 transition-colors duration-200"
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
