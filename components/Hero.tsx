import Image from 'next/image'

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col sm:flex-row w-full mt-16 lg:mt-20 scroll-mt-16 lg:scroll-mt-20 sm:h-[480px] lg:h-[500px]"
      aria-label="Intestazione principale"
    >
      {/* Left: photo */}
      <div className="relative w-full sm:w-1/2 h-[260px] sm:h-full">
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
      <div className="w-full sm:w-1/2 h-[24px] sm:h-full bg-navy flex sm:items-center sm:justify-center sm:px-6 relative">
        {/* Mobile: logo floats below the navy strip onto the light background */}
        <div className="sm:hidden absolute left-1/2 -translate-x-1/2 top-full mt-4 z-10">
          <Image
            src="/logo.png"
            alt="Odino Autotrasporti"
            width={300}
            height={85}
            className="w-[120px] h-auto object-contain"
            priority
          />
        </div>

        {/* Desktop: logo centered inside the full-height navy panel */}
        <Image
          src="/logo.png"
          alt="Odino Autotrasporti"
          width={300}
          height={85}
          className="hidden sm:block w-[200px] lg:w-[260px] max-w-[65%] h-auto object-contain"
          priority
        />
      </div>
    </section>
  )
}
