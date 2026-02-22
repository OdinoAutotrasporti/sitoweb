'use client'

import { useEffect, useRef, useState } from 'react'

const certifications = [
  {
    code: 'Albo',
    title: 'Albo Nazionale Autotrasportatori',
    description:
      'Iscrizione regolare all\'Albo Nazionale delle Imprese di Autotrasporto di Cose per Conto di Terzi. Garanzia di operatività legale e professionale nel settore.',
    year: '1987',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className="w-8 h-8">
        <path d="M24 4l4 8 9 1.5-6.5 6.5 1.5 9L24 25l-8 4 1.5-9L11 13.5 20 12z" />
        <path d="M16 28l-4 16 12-6 12 6-4-16" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    code: 'ISO',
    title: 'ISO 9001:2015',
    description:
      'Sistema di gestione della qualità certificato secondo lo standard ISO 9001:2015. Processi controllati, miglioramento continuo, soddisfazione del cliente garantita.',
    year: '2009',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className="w-8 h-8">
        <circle cx="24" cy="24" r="18" />
        <circle cx="24" cy="24" r="10" />
        <path d="M24 6v6M24 36v6M6 24h6M36 24h6" />
        <path d="M18 18l4 4 8-8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    code: 'UE',
    title: 'Licenza Comunitaria',
    description:
      'Autorizzazione per il trasporto internazionale di merci su strada nell\'Unione Europea, in conformità al Regolamento CE 1072/2009. Operatività in tutta Europa.',
    year: '2002',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className="w-8 h-8">
        <circle cx="24" cy="24" r="18" />
        <path d="M24 6c0 0-8 6-8 18s8 18 8 18" />
        <path d="M24 6c0 0 8 6 8 18s-8 18-8 18" />
        <path d="M6 24h36" />
        <path d="M8 16h32M8 32h32" />
      </svg>
    ),
  },
  {
    code: 'ADR',
    title: 'Certificazione ADR',
    description:
      'Abilitazione al trasporto di merci pericolose su strada secondo l\'Accordo Europeo ADR. Autisti certificati, veicoli omologati, documentazione completa.',
    year: '1998',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className="w-8 h-8">
        <path d="M24 4L44 40H4L24 4z" />
        <path d="M24 18v10" strokeLinecap="round" />
        <circle cx="24" cy="34" r="1.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
]

export default function Certificazioni() {
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
      id="certificazioni"
      ref={sectionRef}
      className="bg-navy py-14 sm:py-20 lg:py-32 relative overflow-hidden scroll-mt-16 lg:scroll-mt-20"
      aria-labelledby="certificazioni-heading"
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-5"
        aria-hidden="true"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            rgba(168,142,94,0.5) 0px,
            rgba(168,142,94,0.5) 1px,
            transparent 1px,
            transparent 60px
          )`,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div
          className={`mb-10 sm:mb-16 text-center transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="block w-8 h-[2px] bg-gold" aria-hidden="true" />
            <span className="font-condensed text-xs tracking-[0.4em] uppercase text-gold">
              Certificazioni
            </span>
            <span className="block w-8 h-[2px] bg-gold" aria-hidden="true" />
          </div>
          <h2
            id="certificazioni-heading"
            className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-400 text-light leading-tight"
          >
            Qualità verificata,
            <br />
            <span className="font-600 italic">sicurezza documentata.</span>
          </h2>
        </div>

        {/* Certifications grid */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
          {certifications.map((cert, i) => (
            <article
              key={cert.code}
              className={`group relative flex flex-col items-center text-center gap-5 p-8 lg:p-10
                border border-gold/30 hover:border-gold bg-dark/30
                hover:-translate-y-1 transition-all duration-300
                ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
              `}
              style={{ transitionDelay: visible ? `${i * 100}ms` : '0ms' }}
            >
              {/* Corner ornaments */}
              <span className="absolute top-2 left-2 w-3 h-3 border-t border-l border-gold/50 group-hover:border-gold transition-colors duration-300" aria-hidden="true" />
              <span className="absolute top-2 right-2 w-3 h-3 border-t border-r border-gold/50 group-hover:border-gold transition-colors duration-300" aria-hidden="true" />
              <span className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-gold/50 group-hover:border-gold transition-colors duration-300" aria-hidden="true" />
              <span className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-gold/50 group-hover:border-gold transition-colors duration-300" aria-hidden="true" />

              {/* Icon circle */}
              <div className="w-16 h-16 rounded-full border border-gold/40 group-hover:border-gold flex items-center justify-center text-gold/70 group-hover:text-gold transition-all duration-300 bg-dark/50">
                {cert.icon}
              </div>

              {/* Code badge */}
              <span className="font-condensed text-xs tracking-[0.35em] uppercase text-gold/60 group-hover:text-gold transition-colors duration-300">
                {cert.code}
              </span>

              {/* Title */}
              <h3 className="font-condensed text-sm font-700 tracking-wider uppercase text-light leading-tight">
                {cert.title}
              </h3>

              {/* Divider */}
              <div className="w-8 h-[1px] bg-gold/30 group-hover:bg-gold group-hover:w-16 transition-all duration-300" aria-hidden="true" />

              {/* Description */}
              <p className="font-body text-xs text-silver/50 group-hover:text-silver/70 leading-relaxed transition-colors duration-300">
                {cert.description}
              </p>

              {/* Year */}
              <div className="mt-auto pt-4 border-t border-gold/10 w-full group-hover:border-gold/30 transition-colors duration-300">
                <p className="font-condensed text-[10px] tracking-[0.3em] uppercase text-gold/40 group-hover:text-gold/60 transition-colors duration-300">
                  Dal {cert.year}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
