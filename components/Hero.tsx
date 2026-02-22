import Image from 'next/image'

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col sm:flex-row w-full"
      style={{ height: '500px' }}
      aria-label="Intestazione principale"
    >
      {/* Left: photo */}
      <div className="relative w-full sm:w-1/2 h-[250px] sm:h-full">
        <Image
          src="/hero.jpg"
          alt="Odino Autotrasporti – trasporto merci su strada"
          fill
          priority
          className="object-cover"
          sizes="(max-width: 640px) 100vw, 50vw"
        />
      </div>

      {/* Right: logo panel */}
      <div className="w-full sm:w-1/2 h-[250px] sm:h-full bg-navy flex items-center justify-center px-8">
        <Image
          src="/logo.png"
          alt="Odino Autotrasporti"
          width={320}
          height={96}
          className="w-auto max-w-[280px] sm:max-w-[360px] h-auto object-contain"
          priority
        />
      </div>
    </section>
  )
}
