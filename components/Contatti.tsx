'use client'

import { useEffect, useRef, useState } from 'react'

interface FormData {
  nome: string
  azienda: string
  telefono: string
  email: string
  messaggio: string
}

interface FormErrors {
  nome?: string
  email?: string
  messaggio?: string
}

export default function Contatti() {
  const sectionRef = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    nome: '',
    azienda: '',
    telefono: '',
    email: '',
    messaggio: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

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

  const validate = (): boolean => {
    const newErrors: FormErrors = {}
    if (!formData.nome.trim()) newErrors.nome = 'Il nome è obbligatorio'
    if (!formData.email.trim()) {
      newErrors.email = "L'email è obbligatoria"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Inserisci un indirizzo email valido'
    }
    if (!formData.messaggio.trim()) {
      newErrors.messaggio = 'Il messaggio è obbligatorio'
    } else if (formData.messaggio.trim().length < 20) {
      newErrors.messaggio = 'Il messaggio deve essere di almeno 20 caratteri'
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setSubmitting(true)
    setTimeout(() => {
      setSubmitting(false)
      setSubmitted(true)
    }, 900)
  }

  const inputClass = (field: keyof FormErrors) =>
    `w-full bg-navy/5 border ${
      errors[field] ? 'border-red-400/70' : 'border-navy/20 focus:border-gold/60'
    } px-4 py-3.5 font-body text-sm text-navy placeholder:text-navy/30
    outline-none transition-colors duration-200`

  return (
    <section
      id="contatti"
      ref={sectionRef}
      className="bg-light py-14 sm:py-20 lg:py-32 scroll-mt-16 lg:scroll-mt-20"
      aria-labelledby="contatti-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
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

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Contact info */}
          <div
            className={`transition-all duration-700 delay-100 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="space-y-8 mb-10">
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
                  <p className="font-body text-navy/80">Via Roma 14</p>
                  <p className="font-body text-navy/80">Cuneo (CN) 12100</p>
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
                  <a href="tel:+390171000000" className="font-body text-navy/80 hover:text-gold transition-colors duration-200">
                    +39 0171 000000
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-5">
                <div className="flex-shrink-0 w-10 h-10 border border-gold/40 flex items-center justify-center text-gold/70">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-condensed text-xs tracking-[0.3em] uppercase text-gold/70 mb-1">Email</p>
                  <a href="mailto:info@odinoautotrasporti.it" className="font-body text-navy/80 hover:text-gold transition-colors duration-200 break-all">
                    info@odinoautotrasporti.it
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
                </div>
              </div>
            </div>

            {/* Maps placeholder */}
            <div className="relative border border-silver/60 overflow-hidden bg-navy/5" style={{ paddingBottom: '56.25%' }}>
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-navy/30">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6-10l6-3m0 13l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4" />
                </svg>
                <span className="font-condensed text-xs tracking-widest uppercase">
                  Cuneo, Piemonte
                </span>
                <span className="font-body text-xs text-navy/20">
                  Google Maps — da integrare
                </span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div
            className={`transition-all duration-700 delay-200 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center gap-6 py-20 border border-gold/30 bg-dark/5">
                <div className="w-16 h-16 border border-gold flex items-center justify-center text-gold">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-display text-3xl font-400 text-navy">
                  Messaggio inviato.
                </h3>
                <p className="font-body text-navy/60 max-w-sm">
                  Grazie per averci contattato. Risponderemo entro un giorno lavorativo.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false)
                    setFormData({ nome: '', azienda: '', telefono: '', email: '', messaggio: '' })
                  }}
                  className="font-condensed text-xs tracking-widest uppercase text-gold/70 hover:text-gold underline underline-offset-4 transition-colors duration-200"
                >
                  Invia un altro messaggio
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                aria-label="Modulo di contatto"
                className="space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="nome" className="block font-condensed text-xs tracking-widest uppercase text-navy/60 mb-2">
                      Nome <span className="text-gold" aria-label="obbligatorio">*</span>
                    </label>
                    <input
                      id="nome"
                      name="nome"
                      type="text"
                      value={formData.nome}
                      onChange={handleChange}
                      placeholder="Mario Rossi"
                      autoComplete="name"
                      aria-required="true"
                      aria-invalid={!!errors.nome}
                      aria-describedby={errors.nome ? 'nome-error' : undefined}
                      className={inputClass('nome')}
                    />
                    {errors.nome && (
                      <p id="nome-error" role="alert" className="mt-1 font-body text-xs text-red-400">
                        {errors.nome}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="azienda" className="block font-condensed text-xs tracking-widest uppercase text-navy/60 mb-2">
                      Azienda
                    </label>
                    <input
                      id="azienda"
                      name="azienda"
                      type="text"
                      value={formData.azienda}
                      onChange={handleChange}
                      placeholder="Nome Azienda Srl"
                      autoComplete="organization"
                      className={inputClass('nome').replace('border-navy/20 focus:border-gold/60', 'border-navy/20 focus:border-gold/60')}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="telefono" className="block font-condensed text-xs tracking-widest uppercase text-navy/60 mb-2">
                      Telefono
                    </label>
                    <input
                      id="telefono"
                      name="telefono"
                      type="tel"
                      value={formData.telefono}
                      onChange={handleChange}
                      placeholder="+39 000 0000000"
                      autoComplete="tel"
                      className="w-full bg-navy/5 border border-navy/20 focus:border-gold/60 px-4 py-3.5 font-body text-sm text-navy placeholder:text-navy/30 outline-none transition-colors duration-200"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block font-condensed text-xs tracking-widest uppercase text-navy/60 mb-2">
                      Email <span className="text-gold" aria-label="obbligatoria">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="mario@azienda.it"
                      autoComplete="email"
                      aria-required="true"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                      className={inputClass('email')}
                    />
                    {errors.email && (
                      <p id="email-error" role="alert" className="mt-1 font-body text-xs text-red-400">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="messaggio" className="block font-condensed text-xs tracking-widest uppercase text-navy/60 mb-2">
                    Messaggio <span className="text-gold" aria-label="obbligatorio">*</span>
                  </label>
                  <textarea
                    id="messaggio"
                    name="messaggio"
                    value={formData.messaggio}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Descrivici la tua esigenza di trasporto: tipo di merce, origine, destinazione, frequenza..."
                    aria-required="true"
                    aria-invalid={!!errors.messaggio}
                    aria-describedby={errors.messaggio ? 'messaggio-error' : undefined}
                    className={`${inputClass('messaggio')} resize-none`}
                  />
                  {errors.messaggio && (
                    <p id="messaggio-error" role="alert" className="mt-1 font-body text-xs text-red-400">
                      {errors.messaggio}
                    </p>
                  )}
                </div>

                <p className="font-body text-xs text-navy/40">
                  I campi contrassegnati con <span className="text-gold">*</span> sono obbligatori.
                </p>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full group flex items-center justify-center gap-3 font-condensed text-sm font-700 tracking-[0.2em] uppercase
                    px-8 py-4 bg-gold text-dark hover:bg-gold/90 disabled:opacity-60
                    transition-all duration-200 hover:-translate-y-0.5 shadow-md shadow-gold/20"
                  aria-label="Invia richiesta di preventivo"
                >
                  {submitting ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Invio in corso...
                    </>
                  ) : (
                    <>
                      Invia Richiesta
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
