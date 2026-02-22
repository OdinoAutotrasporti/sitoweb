'use client'

import { useEffect, useRef, useState } from 'react'

const vehicles = [
  {
    name: 'Trattore + Semirimorchio',
    category: 'Trasporto Pesante',
    specs: [
      { label: 'Portata max', value: '24.000 kg' },
      { label: 'Lunghezza utile', value: '13,6 m' },
      { label: 'Volume', value: '90 m³' },
      { label: 'Normativa', value: 'Euro VI' },
    ],
    badge: 'Flotta principale',
    icon: (
      <svg viewBox="0 0 80 32" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true" className="w-full h-auto max-h-16">
        {/* Semirimorchio */}
        <rect x="20" y="8" width="52" height="16" rx="1" />
        <line x1="20" y1="12" x2="72" y2="12" />
        <line x1="36" y1="8" x2="36" y2="24" />
        <line x1="52" y1="8" x2="52" y2="24" />
        {/* Cabina */}
        <path d="M2 24V16l4-8h14v16H2z" />
        <path d="M6 8h10v6H2" />
        <rect x="4" y="10" width="5" height="4" rx="0.5" opacity="0.5" />
        {/* Ruote */}
        <circle cx="8" cy="24" r="3" fill="currentColor" opacity="0.4" stroke="none" />
        <circle cx="8" cy="24" r="1.5" stroke="currentColor" fill="none" opacity="0.8" />
        <circle cx="30" cy="24" r="3" fill="currentColor" opacity="0.4" stroke="none" />
        <circle cx="30" cy="24" r="1.5" stroke="currentColor" fill="none" opacity="0.8" />
        <circle cx="40" cy="24" r="3" fill="currentColor" opacity="0.4" stroke="none" />
        <circle cx="40" cy="24" r="1.5" stroke="currentColor" fill="none" opacity="0.8" />
        <circle cx="58" cy="24" r="3" fill="currentColor" opacity="0.4" stroke="none" />
        <circle cx="58" cy="24" r="1.5" stroke="currentColor" fill="none" opacity="0.8" />
        <circle cx="68" cy="24" r="3" fill="currentColor" opacity="0.4" stroke="none" />
        <circle cx="68" cy="24" r="1.5" stroke="currentColor" fill="none" opacity="0.8" />
      </svg>
    ),
  },
  {
    name: 'Camion Medio',
    category: 'Trasporto Regionale',
    specs: [
      { label: 'Portata max', value: '8.500 kg' },
      { label: 'Lunghezza utile', value: '7,2 m' },
      { label: 'Volume', value: '42 m³' },
      { label: 'Normativa', value: 'Euro VI' },
    ],
    badge: 'Distribuzione',
    icon: (
      <svg viewBox="0 0 60 32" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true" className="w-full h-auto max-h-16">
        <rect x="16" y="6" width="38" height="18" rx="1" />
        <line x1="16" y1="11" x2="54" y2="11" />
        <line x1="32" y1="6" x2="32" y2="24" />
        <path d="M2 24V14l4-8h10v18H2z" />
        <rect x="4" y="10" width="5" height="4" rx="0.5" opacity="0.5" />
        <circle cx="8" cy="24" r="3.5" fill="currentColor" opacity="0.4" stroke="none" />
        <circle cx="8" cy="24" r="1.8" stroke="currentColor" fill="none" opacity="0.8" />
        <circle cx="24" cy="24" r="3.5" fill="currentColor" opacity="0.4" stroke="none" />
        <circle cx="24" cy="24" r="1.8" stroke="currentColor" fill="none" opacity="0.8" />
        <circle cx="48" cy="24" r="3.5" fill="currentColor" opacity="0.4" stroke="none" />
        <circle cx="48" cy="24" r="1.8" stroke="currentColor" fill="none" opacity="0.8" />
      </svg>
    ),
  },
  {
    name: 'Furgone',
    category: 'Consegne Urgenti',
    specs: [
      { label: 'Portata max', value: '1.400 kg' },
      { label: 'Lunghezza utile', value: '3,1 m' },
      { label: 'Volume', value: '11 m³' },
      { label: 'Normativa', value: 'Euro VI' },
    ],
    badge: 'Last-Mile',
    icon: (
      <svg viewBox="0 0 50 32" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true" className="w-full h-auto max-h-16">
        <path d="M4 24V10l4-6h26l6 6v14H4z" />
        <path d="M4 10h36" />
        <path d="M4 10l4-6" />
        <path d="M14 4v6" />
        <rect x="6" y="12" width="10" height="8" rx="0.5" opacity="0.4" />
        <rect x="22" y="12" width="14" height="8" rx="0.5" opacity="0.4" />
        <circle cx="12" cy="24" r="3.5" fill="currentColor" opacity="0.4" stroke="none" />
        <circle cx="12" cy="24" r="1.8" stroke="currentColor" fill="none" opacity="0.8" />
        <circle cx="36" cy="24" r="3.5" fill="currentColor" opacity="0.4" stroke="none" />
        <circle cx="36" cy="24" r="1.8" stroke="currentColor" fill="none" opacity="0.8" />
      </svg>
    ),
  },
  {
    name: 'Bisarca',
    category: 'Trasporto Veicoli',
    specs: [
      { label: 'Capacità', value: '8–10 auto' },
      { label: 'Piano superiore', value: 'Idraulico' },
      { label: 'Lunghezza', value: '20 m' },
      { label: 'Normativa', value: 'Euro VI' },
    ],
    badge: 'Specializzato',
    icon: (
      <svg viewBox="0 0 80 36" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true" className="w-full h-auto max-h-16">
        {/* Semirimorchio bisarca */}
        <rect x="18" y="4" width="54" height="4" rx="0.5" />
        <rect x="18" y="18" width="54" height="4" rx="0.5" />
        {/* Auto piccole sul piano sup */}
        <rect x="22" y="2" width="10" height="2" rx="0.3" opacity="0.5" />
        <rect x="36" y="2" width="10" height="2" rx="0.3" opacity="0.5" />
        <rect x="50" y="2" width="10" height="2" rx="0.3" opacity="0.5" />
        {/* Auto piccole piano inf */}
        <rect x="22" y="16" width="10" height="2" rx="0.3" opacity="0.5" />
        <rect x="36" y="16" width="10" height="2" rx="0.3" opacity="0.5" />
        <rect x="50" y="16" width="10" height="2" rx="0.3" opacity="0.5" />
        {/* Supporti */}
        <line x1="28" y1="8" x2="28" y2="18" opacity="0.4" />
        <line x1="48" y1="8" x2="48" y2="18" opacity="0.4" />
        <line x1="66" y1="8" x2="66" y2="18" opacity="0.4" />
        {/* Cabina */}
        <path d="M2 28V18l4-8h12v18H2z" />
        {/* Ruote */}
        <circle cx="8" cy="28" r="3" fill="currentColor" opacity="0.4" stroke="none" />
        <circle cx="8" cy="28" r="1.5" stroke="currentColor" fill="none" opacity="0.8" />
        <circle cx="30" cy="28" r="3" fill="currentColor" opacity="0.4" stroke="none" />
        <circle cx="40" cy="28" r="3" fill="currentColor" opacity="0.4" stroke="none" />
        <circle cx="60" cy="28" r="3" fill="currentColor" opacity="0.4" stroke="none" />
        <circle cx="70" cy="28" r="3" fill="currentColor" opacity="0.4" stroke="none" />
      </svg>
    ),
  },
]

export default function Flotta() {
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
      id="flotta"
      ref={sectionRef}
      className="bg-navy py-20 lg:py-32"
      aria-labelledby="flotta-heading"
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
              La Flotta
            </span>
          </div>
          <h2
            id="flotta-heading"
            className="font-display text-4xl lg:text-5xl xl:text-6xl font-400 text-light leading-tight max-w-2xl"
          >
            Mezzi moderni,
            <br />
            <span className="font-600 italic">manutenzione rigorosa.</span>
          </h2>
          <p className="mt-6 font-body text-base text-silver/60 max-w-xl">
            Ogni veicolo è verificato, assicurato e conforme alle normative europee più
            recenti. Investiamo nella flotta perché la qualità del mezzo riflette la
            qualità del servizio.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {vehicles.map((vehicle, i) => (
            <article
              key={vehicle.name}
              className={`group relative bg-dark/40 border border-silver/20 p-6 flex flex-col gap-6
                hover:border-gold/60 hover:-translate-y-1 hover:shadow-xl hover:shadow-dark/40
                shimmer-card transition-all duration-300
                ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
              `}
              style={{ transitionDelay: visible ? `${i * 120}ms` : '0ms' }}
            >
              {/* Badge */}
              <span className="absolute top-4 right-4 font-condensed text-[10px] tracking-widest uppercase px-2 py-1 bg-light/5 text-light/40 group-hover:bg-gold/10 group-hover:text-gold transition-colors duration-300">
                {vehicle.badge}
              </span>

              {/* Vehicle illustration */}
              <div className="text-silver/30 group-hover:text-gold/50 transition-colors duration-300 pt-4">
                {vehicle.icon}
              </div>

              {/* Info */}
              <div>
                <p className="font-condensed text-[10px] tracking-[0.35em] uppercase text-gold/70 mb-1">
                  {vehicle.category}
                </p>
                <h3 className="font-condensed text-lg font-700 tracking-wide uppercase text-light">
                  {vehicle.name}
                </h3>
              </div>

              {/* Specs */}
              <div className="grid grid-cols-2 gap-3 mt-auto border-t border-silver/20 pt-5 group-hover:border-gold/20 transition-colors duration-300">
                {vehicle.specs.map((spec) => (
                  <div key={spec.label}>
                    <p className="font-condensed text-[10px] tracking-widest uppercase text-silver/40 mb-0.5">
                      {spec.label}
                    </p>
                    <p className="font-condensed text-sm font-600 text-light">
                      {spec.value}
                    </p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* Note */}
        <p
          className={`mt-10 text-center font-body text-sm text-silver/40 transition-all duration-700 delay-500 ${
            visible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          Flotta continuamente aggiornata. Per esigenze specifiche contattare l&apos;ufficio operativo.
        </p>
      </div>
    </section>
  )
}
