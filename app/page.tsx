import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import FlyingLogo from '@/components/FlyingLogo'
import ChiSiamo from '@/components/ChiSiamo'
import Servizi from '@/components/Servizi'
import Flotta from '@/components/Flotta'
import Contatti from '@/components/Contatti'
import Footer from '@/components/Footer'

function Divider() {
  return <hr className="section-divider" aria-hidden="true" />
}

export default function Home() {
  return (
    <>
      <Navbar />
      <FlyingLogo />
      <main id="main-content">
        <Hero />
        <Divider />
        <ChiSiamo />
        <Divider />
        <Servizi />
        <Divider />
        <Flotta />
        <Divider />
        <Contatti />
      </main>
      <Divider />
      <Footer />
    </>
  )
}
