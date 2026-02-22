import type { Metadata } from 'next'
import { Saira, Saira_Condensed } from 'next/font/google'
import './globals.css'

const saira = Saira({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
})

const sairaCondensed = Saira_Condensed({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-condensed',
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
      className={`${saira.variable} ${sairaCondensed.variable}`}
    >
      <body className="font-body antialiased">{children}</body>
    </html>
  )
}
