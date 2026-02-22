import type { Metadata } from 'next'
import { Cormorant_Garamond, Barlow_Condensed, Barlow } from 'next/font/google'
import './globals.css'

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
})

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-condensed',
  display: 'swap',
})

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Odino Autotrasporti – Trasporto Merci Professionale dal 1987',
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
  description:
    'Odino Autotrasporti Srl: trasporto merci su strada, distribuzione regionale e logistica in Piemonte, Liguria e tutta Italia. Affidabili dal 1987.',
  keywords: [
    'trasporto merci',
    'autotrasporti Cuneo',
    'trasporto industriale Piemonte',
    'distribuzione regionale',
    'logistica Liguria',
    'trasporto su strada Italia',
  ],
  openGraph: {
    title: 'Odino Autotrasporti – Trasporto Merci Professionale dal 1987',
    description:
      'Trasporto merci su strada con serietà e puntualità. Flotta moderna, certificazioni ISO, operativi dal 1987.',
    type: 'website',
    locale: 'it_IT',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="it"
      className={`${cormorantGaramond.variable} ${barlowCondensed.variable} ${barlow.variable}`}
    >
      <body className="font-body antialiased">{children}</body>
    </html>
  )
}
