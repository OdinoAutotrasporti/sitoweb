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
      <div className="w-full sm:w-1/2 h-[20px] sm:h-full bg-navy flex sm:items-center sm:justify-center sm:px-6 relative overflow-visible">
        {/* Mobile: logo mostly inside navy panel, small peek (~8px) below */}
        <div className="sm:hidden flex justify-center items-start pt-[1px] w-full overflow-visible">
          <Image
            src="/logo.png"
            alt="Odino Autotrasporti"
            width={300}
            height={85}
            className="w-[100px] h-auto object-contain relative z-10"
            priority
          />
        </div>

        {/* Desktop: logo centered inside full-height navy panel */}
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
