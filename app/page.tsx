import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import ChiSiamo from '@/components/ChiSiamo'
import Servizi from '@/components/Servizi'
import Flotta from '@/components/Flotta'
import Certificazioni from '@/components/Certificazioni'
import Contatti from '@/components/Contatti'
import Footer from '@/components/Footer'

function Divider() {
  return <hr className="section-divider" aria-hidden="true" />
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Divider />
        <ChiSiamo />
        <Divider />
        <Servizi />
        <Divider />
        <Flotta />
        <Divider />
        <Certificazioni />
        <Divider />
        <Contatti />
      </main>
      <Divider />
      <Footer />
    </>
  )
}
