'use client'

import { useEffect, useRef, useState } from 'react'

const services = [
  {
    title: 'Trasporto Generale Merci',
    description:
      'Ritiro e consegna di merci palettizzate, sfuse o in colli su tutto il territorio nazionale. Tracciabilità del carico e aggiornamenti in tempo reale.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className="w-10 h-10">
        <rect x="4" y="28" width="32" height="14" rx="2" />
        <path d="M36 32h4l4 4v6h-8V32z" />
        <circle cx="12" cy="44" r="3" fill="currentColor" stroke="none" />
        <circle cx="28" cy="44" r="3" fill="currentColor" stroke="none" />
        <circle cx="40" cy="44" r="3" fill="currentColor" stroke="none" />
        <path d="M4 28V16l8-8h12v20" />
        <path d="M8 28v-8l4-4h8v12" />
      </svg>
    ),
  },
  {
    title: 'Trasporto Industriale',
    description:
      'Movimentazione di carichi pesanti, macchinari, materie prime per industria manifatturiera e metalmeccanica. Pianificazione itinerari eccezionali.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className="w-10 h-10">
        <path d="M6 38V18l10-10h16l10 10v20" />
        <path d="M6 18h36" />
        <rect x="18" y="26" width="12" height="12" />
        <path d="M22 26v12M26 26v12" />
        <circle cx="12" cy="42" r="3" fill="currentColor" stroke="none" />
        <circle cx="36" cy="42" r="3" fill="currentColor" stroke="none" />
        <path d="M16 8l-4 4M32 8l4 4" />
      </svg>
    ),
  },
  {
    title: 'Distribuzione Regionale',
    description:
      'Servizi di distribuzione capillare in Piemonte e Liguria con furgoni e camion medi. Consegne programmate, orari concordati, flessibilità operativa.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className="w-10 h-10">
        <circle cx="24" cy="20" r="10" />
        <path d="M24 4v4M24 36v4M4 20h4M40 20h4" />
        <path d="M24 20l6-8M24 20l-5 9" />
        <circle cx="24" cy="20" r="2" fill="currentColor" stroke="none" />
        <path d="M10 34c3-3 8-5 14-5s11 2 14 5" strokeLinecap="round" />
        <path d="M14 38l4-4 6 2 6-2 4 4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Logistica e Stoccaggio',
    description:
      'Magazzinaggio temporaneo, gestione stock e preparazione ordini presso la nostra sede di Cuneo. Soluzioni flessibili per picchi di domanda.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className="w-10 h-10">
        <path d="M4 44V18L24 6l20 12v26" />
        <path d="M4 18h40" />
        <rect x="10" y="24" width="8" height="8" />
        <rect x="22" y="24" width="8" height="8" />
        <rect x="34" y="24" width="8" height="8" />
        <rect x="16" y="36" width="16" height="8" />
        <path d="M24 36v8" />
      </svg>
    ),
  },
]

export default function Servizi() {
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
      id="servizi"
      ref={sectionRef}
      className="bg-white py-20 lg:py-32"
      aria-labelledby="servizi-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div
          className={`mb-16 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="block w-8 h-[2px] bg-gold" aria-hidden="true" />
            <span className="font-condensed text-xs tracking-[0.4em] uppercase text-gold">
              I Nostri Servizi
            </span>
          </div>
          <h2
            id="servizi-heading"
            className="font-display text-4xl lg:text-5xl xl:text-6xl font-400 text-navy leading-tight max-w-2xl"
          >
            Soluzioni complete
            <br />
            <span className="font-600 italic">per ogni esigenza.</span>
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-px bg-navy/5">
          {services.map((service, i) => (
            <article
              key={service.title}
              className={`group relative bg-light p-8 lg:p-10 flex flex-col gap-6 cursor-default
                border border-transparent hover:border-gold/60 hover:-translate-y-1
                transition-all duration-300 shadow-none hover:shadow-lg hover:shadow-gold/10
                ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
              `}
              style={{ transitionDelay: visible ? `${i * 100}ms` : '0ms' }}
            >
              {/* Gold top border on hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" aria-hidden="true" />

              {/* Icon */}
              <div className="text-gold/70 group-hover:text-gold transition-colors duration-300">
                {service.icon}
              </div>

              {/* Content */}
              <div>
                <h3 className="font-condensed text-base font-600 tracking-widest uppercase text-navy mb-3">
                  {service.title}
                </h3>
                <p className="font-body text-sm text-navy/60 group-hover:text-navy/80 leading-relaxed transition-colors duration-300">
                  {service.description}
                </p>
              </div>

              {/* Arrow */}
              <div className="mt-auto pt-4 border-t border-navy/10 group-hover:border-gold/20 transition-colors duration-300">
                <span className="font-condensed text-xs tracking-widest uppercase text-gold/40 group-hover:text-gold transition-colors duration-300 flex items-center gap-2">
                  Scopri
                  <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
