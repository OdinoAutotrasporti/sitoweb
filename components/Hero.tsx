import Image from 'next/image'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full h-screen"
      aria-label="Immagine principale"
    >
      <Image
        src="/hero.jpg"
        alt="Odino Autotrasporti – trasporto merci su strada"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
    </section>
  )
}
