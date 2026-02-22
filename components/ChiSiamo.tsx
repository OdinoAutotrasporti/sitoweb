'use client'

import { useEffect, useRef, useState } from 'react'

interface StatItem {
  value: number
  suffix: string
  label: string
  sublabel: string
}

const stats: StatItem[] = [
  { value: 35, suffix: '+', label: 'Anni di Esperienza', sublabel: 'Dal 1987 sul campo' },
  { value: 50, suffix: '+', label: 'Veicoli in Flotta', sublabel: 'Sempre aggiornati' },
  { value: 10000, suffix: '+', label: 'Consegne Effettuate', sublabel: 'Con puntualità' },
]

function useCountUp(target: number, duration: number, start: boolean) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!start) return
    let startTime: number | null = null
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = progress < 0.5
        ? 2 * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 2) / 2
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [target, duration, start])
  return count
}

function StatCard({ stat, animate }: { stat: StatItem; animate: boolean }) {
  const count = useCountUp(stat.value, 1800, animate)
  return (
    <div className="text-center lg:text-left border-b lg:border-b-0 lg:border-r border-silver/20 last:border-0 pb-8 lg:pb-0 lg:pr-10 last:pr-0">
      <div className="flex items-start justify-center lg:justify-start gap-1 mb-2">
        <span className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-300 text-navy leading-none">
          {stat.value >= 1000
            ? `${Math.floor(count / 1000).toLocaleString('it-IT')}.${String(count % 1000).padStart(3, '0')}`
            : count}
        </span>
        <span className="font-display text-4xl lg:text-5xl font-300 text-gold leading-none mt-2">
          {stat.suffix}
        </span>
      </div>
      <p className="font-condensed text-base font-600 tracking-widest uppercase text-navy mb-1">
        {stat.label}
      </p>
      <p className="font-body text-sm text-navy/50">{stat.sublabel}</p>
    </div>
  )
}

export default function ChiSiamo() {
  const sectionRef = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)
  const [animateStats, setAnimateStats] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            setTimeout(() => setAnimateStats(true), 300)
            observer.disconnect()
          }
        })
      },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="chi-siamo"
      ref={sectionRef}
      className="bg-light pt-20 pb-14 sm:py-20 lg:py-32 scroll-mt-16 lg:scroll-mt-20"
      aria-labelledby="chi-siamo-heading"
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
            Chi Siamo
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Stats column */}
          <div
            className={`transition-all duration-700 delay-100 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="grid grid-cols-1 gap-10 lg:gap-12">
              {stats.map((stat, i) => (
                <StatCard key={i} stat={stat} animate={animateStats} />
              ))}
            </div>
          </div>

          {/* Text column */}
          <div
            className={`transition-all duration-700 delay-200 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2
              id="chi-siamo-heading"
              className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-400 text-navy leading-tight mb-8"
            >
              Una famiglia,
              <br />
              <span className="font-600 italic">un impegno preciso.</span>
            </h2>

            <div className="space-y-5 font-body text-navy/70 text-base lg:text-lg leading-relaxed">
              <p>
                Odino Autotrasporti nasce nel 1987 a Cuneo, nel cuore del Piemonte, dalla
                visione di un imprenditore che credeva in un principio semplice: la merce
                consegnata in tempo, in condizioni perfette, è la promessa che distingue
                un partner affidabile da un semplice fornitore.
              </p>
              <p>
                Da allora la nostra azienda è cresciuta mantenendo intatta l&apos;anima
                familiare: decisioni rapide, responsabilità diretta, rispetto per il cliente
                e per il lavoro degli autisti. Ogni veicolo della flotta è moderno,
                omologato e condotto da personale certificato ADR e qualificato per merci
                speciali.
              </p>
              <p>
                Operiamo regolarmente in Piemonte, Liguria, Lombardia e su tutto il
                territorio nazionale, con possibilità di servizi internazionali tramite
                partner certificati. La nostra forza è la continuità: clienti che ci
                scelgono da decenni, perché sanno che manteniamo le promesse.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {['Puntualità', 'Affidabilità', 'Trasparenza', 'Cura del Carico'].map((val) => (
                <span
                  key={val}
                  className="font-condensed text-xs tracking-widest uppercase px-4 py-2 border border-navy/20 text-navy/60 hover:border-gold/60 hover:text-gold transition-colors duration-200"
                >
                  {val}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
