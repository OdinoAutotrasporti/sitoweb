'use client'

import Image from 'next/image'

const footerLinks = [
  { label: 'Chi Siamo', href: '#chi-siamo' },
  { label: 'Servizi', href: '#servizi' },
  { label: 'Flotta', href: '#flotta' },
  { label: 'Contatti', href: '#contatti' },
]

export default function Footer() {
  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-navy border-t border-gold/20" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {/* Brand column */}
          <div className="md:col-span-1">
            <div className="mb-6">
              <Image
                src="/logo.png"
                alt="Odino Autotrasporti"
                width={160}
                height={48}
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="font-body text-sm text-silver/50 leading-relaxed mb-6 max-w-xs">
              Trasporto merci su strada in Piemonte, Liguria e tutta Italia.
              Professionali, affidabili, dal 1987.
            </p>
            <div className="space-y-1">
              <p className="font-condensed text-xs tracking-widest uppercase text-silver/30">
                P.IVA: IT00000000000
              </p>
              <p className="font-condensed text-xs tracking-widest uppercase text-silver/30">
                REA: CN-000000
              </p>
            </div>
          </div>

          {/* Navigation column */}
          <div>
            <h2 className="font-condensed text-xs tracking-[0.35em] uppercase text-gold/70 mb-6">
              Navigazione
            </h2>
            <nav aria-label="Link navigazione footer">
              <ul className="space-y-3" role="list">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNav(e, link.href)}
                      className="font-condensed text-sm tracking-widest uppercase text-silver/50 hover:text-gold transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact column */}
          <div>
            <h2 className="font-condensed text-xs tracking-[0.35em] uppercase text-gold/70 mb-6">
              Recapiti
            </h2>
            <address className="not-italic space-y-4">
              <div>
                <p className="font-condensed text-[10px] tracking-[0.3em] uppercase text-silver/30 mb-1">Sede</p>
                <p className="font-body text-sm text-silver/50">Via Roma 14, Cuneo (CN) 12100</p>
              </div>
              <div>
                <p className="font-condensed text-[10px] tracking-[0.3em] uppercase text-silver/30 mb-1">Telefono</p>
                <a
                  href="tel:+390171000000"
                  className="font-body text-sm text-silver/50 hover:text-gold transition-colors duration-200"
                >
                  +39 0171 000000
                </a>
              </div>
              <div>
                <p className="font-condensed text-[10px] tracking-[0.3em] uppercase text-silver/30 mb-1">Email</p>
                <a
                  href="mailto:info@odinoautotrasporti.it"
                  className="font-body text-sm text-silver/50 hover:text-gold transition-colors duration-200 break-all"
                >
                  info@odinoautotrasporti.it
                </a>
              </div>
              <div>
                <p className="font-condensed text-[10px] tracking-[0.3em] uppercase text-silver/30 mb-1">Orari</p>
                <p className="font-body text-sm text-silver/50">Lun–Ven 7:00 – 18:00</p>
              </div>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-silver/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-condensed text-xs tracking-widest uppercase text-silver/25 text-center sm:text-left">
            &copy; 2024 Odino Autotrasporti Srl — Tutti i diritti riservati
          </p>
          <div className="flex items-center gap-2" aria-hidden="true">
            <span className="block w-4 h-[1px] bg-gold/20" />
            <span className="block w-1.5 h-1.5 rotate-45 bg-gold/30" />
            <span className="block w-4 h-[1px] bg-gold/20" />
          </div>
          <p className="font-condensed text-xs tracking-widest uppercase text-silver/25">
            Iscritti Albo Autotrasportatori
          </p>
        </div>
      </div>
    </footer>
  )
}
