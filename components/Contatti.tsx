'use client'

import { useEffect, useRef, useState } from 'react'

export default function Contatti() {
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
      id="contatti"
      ref={sectionRef}
      className="bg-light py-14 sm:py-20 lg:py-32 scroll-mt-16 lg:scroll-mt-20"
      aria-labelledby="contatti-heading"
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div
          className={`mb-10 sm:mb-16 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="block w-8 h-[2px] bg-gold" aria-hidden="true" />
            <span className="font-condensed text-xs tracking-[0.4em] uppercase text-gold">
              Contatti
            </span>
          </div>
          <h2
            id="contatti-heading"
            className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-400 text-navy leading-tight"
          >
            Parliamo del
            <br />
            <span className="font-600 italic">tuo trasporto.</span>
          </h2>
        </div>

        {/* Address · Phone · Hours */}
        <div
          className={`grid sm:grid-cols-3 gap-8 transition-all duration-700 delay-100 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Address */}
          <div className="flex gap-5">
            <div className="flex-shrink-0 w-10 h-10 border border-gold/40 flex items-center justify-center text-gold/70">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <p className="font-condensed text-xs tracking-[0.3em] uppercase text-gold/70 mb-1">Sede Operativa</p>
              <p className="font-body text-navy/80">Via Cadelè Bricollo, 32A</p>
              <p className="font-body text-navy/80">16010 Serra Riccò (GE)</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex gap-5">
            <div className="flex-shrink-0 w-10 h-10 border border-gold/40 flex items-center justify-center text-gold/70">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div>
              <p className="font-condensed text-xs tracking-[0.3em] uppercase text-gold/70 mb-1">Telefono</p>
              <a href="tel:+393471505903" className="font-body text-navy/80 hover:text-gold transition-colors duration-200">
                +39 347 150 5903
              </a>
            </div>
          </div>

          {/* Hours */}
          <div className="flex gap-5">
            <div className="flex-shrink-0 w-10 h-10 border border-gold/40 flex items-center justify-center text-gold/70">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="font-condensed text-xs tracking-[0.3em] uppercase text-gold/70 mb-1">Orari Ufficio</p>
              <p className="font-body text-navy/80">Lun–Ven: 7:00 – 18:00</p>
              <p className="font-body text-navy/80">Sabato: 8:00 – 12:00</p>
            </div>
          </div>
        </div>

        {/* Email — tre indirizzi distinti */}
        <div
          className={`mt-12 border-t border-navy/10 pt-10 transition-all duration-700 delay-200 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="flex-shrink-0 w-10 h-10 border border-gold/40 flex items-center justify-center text-gold/70">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="font-condensed text-xs tracking-[0.3em] uppercase text-gold/70">
              Indirizzi Email
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            <div className="border border-navy/10 p-6 hover:border-gold/30 transition-colors duration-200">
              <p className="font-condensed text-xs tracking-[0.3em] uppercase text-gold/70 mb-1">Operativo</p>
              <p className="font-body text-xs text-navy/40 mb-4">Richieste di trasporto e spedizioni</p>
              <a
                href="mailto:operativo@odinoautotrasporti.it"
                className="font-body text-sm text-navy/80 hover:text-gold transition-colors duration-200 break-all"
              >
                operativo@odinoautotrasporti.it
              </a>
            </div>

            <div className="border border-navy/10 p-6 hover:border-gold/30 transition-colors duration-200">
              <p className="font-condensed text-xs tracking-[0.3em] uppercase text-gold/70 mb-1">Amministrazione</p>
              <p className="font-body text-xs text-navy/40 mb-4">Fatturazione e pratiche amministrative</p>
              <a
                href="mailto:amministrazione@odinoautotrasporti.it"
                className="font-body text-sm text-navy/80 hover:text-gold transition-colors duration-200 break-all"
              >
                amministrazione@odinoautotrasporti.it
              </a>
            </div>

            <div className="border border-navy/10 p-6 hover:border-gold/30 transition-colors duration-200">
              <p className="font-condensed text-xs tracking-[0.3em] uppercase text-gold/70 mb-1">Documenti DDT</p>
              <p className="font-body text-xs text-navy/40 mb-4">Invio documenti di trasporto</p>
              <a
                href="mailto:ddt@odinoautotrasporti.it"
                className="font-body text-sm text-navy/80 hover:text-gold transition-colors duration-200 break-all"
              >
                ddt@odinoautotrasporti.it
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
