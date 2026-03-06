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

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['LocalBusiness', 'Organization'],
      '@id': 'https://www.odinoautotrasporti.it/#organization',
      name: 'Odino Autotrasporti',
      alternateName: ['Odino Trasporti', 'Odino Autotrasporti Srl'],
      url: 'https://www.odinoautotrasporti.it',
      logo: 'https://www.odinoautotrasporti.it/logo.png',
      description:
        'Trasporto merci su strada con Matteo Odino. Tre generazioni di autotrasporti da Genova in tutta Italia dal 1947.',
      telephone: '+393471505903',
      email: 'operativo@odinoautotrasporti.it',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Via Cadelè Bricollo, 32A',
        addressLocality: 'Serra Riccò',
        addressRegion: 'GE',
        postalCode: '16010',
        addressCountry: 'IT',
      },
      areaServed: [
        { '@type': 'City', name: 'Genova' },
        { '@type': 'State', name: 'Liguria' },
        { '@type': 'Country', name: 'Italia' },
      ],
      foundingDate: '1947',
      employee: {
        '@type': 'Person',
        name: 'Matteo Odino',
        jobTitle: 'Titolare',
      },
    },
    {
      '@type': 'Person',
      '@id': 'https://www.odinoautotrasporti.it/#matteo-odino',
      name: 'Matteo Odino',
      jobTitle: 'Titolare',
      worksFor: {
        '@id': 'https://www.odinoautotrasporti.it/#organization',
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Odino Autotrasporti | Matteo Odino – Trasporti Genova dal 1947',
  description:
    'Odino Autotrasporti di Matteo Odino: trasporto merci su strada da Genova in tutta Italia. Odino Trasporti, affidabili dal 1947 – tre generazioni al servizio della logistica.',
  keywords: [
    'Odino Autotrasporti',
    'Odino Trasporti',
    'Matteo Odino',
    'Odino Matteo',
    'Matteo Odino Autotrasporti',
    'Odino Matteo Genova',
    'Odino Genova',
    'Trasporti Genova',
    'autotrasporti Genova',
    'trasporto merci Genova',
    'trasporto merci su strada',
    'logistica Liguria',
    'distribuzione regionale',
    'trasporto industriale Nord Italia',
  ],
  alternates: {
    canonical: 'https://www.odinoautotrasporti.it',
  },
  openGraph: {
    title: 'Odino Autotrasporti | Matteo Odino – Trasporti Genova dal 1947',
    description:
      'Odino Autotrasporti di Matteo Odino: trasporto merci su strada da Genova in tutta Italia dal 1947.',
    type: 'website',
    locale: 'it_IT',
    url: 'https://www.odinoautotrasporti.it',
    siteName: 'Odino Autotrasporti',
  },
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body antialiased">{children}</body>
    </html>
  )
}
