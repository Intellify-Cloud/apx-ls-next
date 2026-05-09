import Image from 'next/image'
import Link from 'next/link'

interface CoachHeroProps {
  name: string
  title: string
  description: string
  cardDescription?: string
  image: string
  imageAlt: string
  coachId: string
  layout?: 'default' | '60-40'
}

export default function CoachHero({
  name,
  title,
  description,
  cardDescription,
  image,
  imageAlt,
  coachId,
  layout,
}: CoachHeroProps) {

  return (
    <section className="relative h-screen flex items-center justify-center pt-20 overflow-hidden bg-[#f8f8f6]">
      <div className="absolute inset-0 max-w-[1280px] mx-auto px-6 lg:px-12 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center h-full">
          <div className="flex flex-col justify-center">
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-[#0c1a37] tracking-tight mb-6 leading-[1.05]">
              {title}
            </h1>
            <p className="text-lg md:text-xl text-[#0c1a37]/70 mb-10 max-w-[560px] leading-relaxed">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={`/contact?coach=${coachId}`}
                className="inline-flex items-center justify-center px-8 py-4 bg-[#ed5c2c] text-white font-semibold rounded-[12px] transition-all duration-200 hover:bg-[#dd5128] hover:shadow-[0_0_30px_rgba(237,92,44,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ed5c2c]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                Start your journey
              </Link>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[480px]">
               <div className="absolute z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-5 scale-110">
                 <div className="w-full h-full rounded-3xl bg-[#ed5c2c]" />
               </div>
                <div className="relative z-10 bg-white rounded-3xl shadow-2xl overflow-hidden">
                  <Image
                    src={image}
                    alt={imageAlt}
                    width={400}
                    height={400}
                    className="object-contain"
                    priority
                    style={{ width: 'auto', height: 'auto' }}
                  />
                </div>
                <div className="absolute z-20" style={{ top: 'calc(50% + 162px)', left: 'calc(50% + 210px)', transform: 'translate(-50%, -50%)' }}>
                  <div className="relative bg-white rounded-2xl shadow-xl p-6 w-[300px]">
                    <p className="font-display text-xl font-bold text-[#0c1a37] mb-2">{name}</p>
                    <p className="text-[#0c1a37]/70 text-sm">{cardDescription || description}</p>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}