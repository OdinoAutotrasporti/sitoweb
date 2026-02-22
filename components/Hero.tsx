'use client'

export default function Hero() {
  const scrollToContatti = (e: React.MouseEvent) => {
    e.preventDefault()
    const target = document.querySelector('#contatti')
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark"
      aria-label="Intestazione principale"
    >
      {/* Metallic CSS texture layers */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: `
            repeating-linear-gradient(
              90deg,
              rgba(255,255,255,0.015) 0px,
              rgba(255,255,255,0.015) 1px,
              transparent 1px,
              transparent 5px
            ),
            repeating-linear-gradient(
              180deg,
              rgba(255,255,255,0.008) 0px,
              rgba(255,255,255,0.008) 1px,
              transparent 1px,
              transparent 10px
            ),
            linear-gradient(
              160deg,
              rgba(27, 42, 65, 0.8) 0%,
              rgba(18, 24, 32, 0.95) 40%,
              rgba(27, 42, 65, 0.6) 100%
            )
          `,
        }}
      />

      {/* Diagonal gold accent lines */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        <div
          className="absolute top-0 right-0 w-[60%] h-full opacity-10"
          style={{
            background: `repeating-linear-gradient(
              -55deg,
              transparent 0px,
              transparent 40px,
              rgba(168,142,94,0.3) 40px,
              rgba(168,142,94,0.3) 41px
            )`,
          }}
        />
      </div>

      {/* Deep vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 40%, rgba(18,24,32,0.7) 100%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
        {/* Eyebrow */}
        <p className="font-condensed text-xs tracking-[0.4em] uppercase text-gold/80 mb-6 animate-fadeInUp">
          Trasporto Merci su Strada — Piemonte &amp; Liguria
        </p>

        {/* Main heading */}
        <h1
          className="font-display text-5xl sm:text-6xl lg:text-8xl xl:text-9xl font-300 text-light leading-[0.95] mb-8"
          style={{ animationDelay: '0.1s' }}
        >
          Trasportiamo
          <br />
          <span className="font-600 italic text-silver">con Serietà.</span>
          <br />
          <span
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-300 tracking-widest text-silver/60"
          >
            Dal 1987.
          </span>
        </h1>

        {/* Subheadline */}
        <p
          className="font-body text-base sm:text-lg lg:text-xl text-silver/70 max-w-2xl mx-auto mb-12 leading-relaxed"
          style={{ animationDelay: '0.2s' }}
        >
          Flotta moderna, autisti qualificati e una tradizione di puntualità che
          costruisce fiducia. Dalla Granda al mondo.
        </p>

        {/* Gold divider */}
        <div className="flex items-center justify-center gap-4 mb-12" aria-hidden="true">
          <span className="block w-16 h-[1px] bg-gold/40" />
          <span className="block w-2 h-2 rotate-45 bg-gold/60" />
          <span className="block w-16 h-[1px] bg-gold/40" />
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contatti"
            onClick={scrollToContatti}
            className="group inline-flex items-center gap-3 font-condensed text-sm font-700 tracking-[0.2em] uppercase px-10 py-4 bg-gold text-dark hover:bg-gold/90 transition-all duration-200 hover:-translate-y-1 shadow-lg shadow-gold/20"
            aria-label="Richiedi un preventivo gratuito"
          >
            Richiedi un Preventivo
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>

          <a
            href="#chi-siamo"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#chi-siamo')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="font-condensed text-sm font-500 tracking-[0.2em] uppercase px-8 py-4 border border-silver/30 text-silver/70 hover:border-silver/60 hover:text-silver transition-all duration-200"
          >
            Scopri di Più
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="font-condensed text-[10px] tracking-[0.3em] uppercase text-silver/40">Scorri</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-silver/40 to-transparent" />
      </div>
    </section>
  )
}
