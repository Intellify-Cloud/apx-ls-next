import Image from 'next/image'
import { siteContent } from '../../lib/data'

export default function HeroSection() {
  const { hero } = siteContent

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">

      {/* Background image with Ken Burns */}
      <Image
        src="/assets/img/hero/hero-bw.jpg"
        alt="Apex Leadership Specialists - Leadership Development Consultancy"
        fill
        className="object-cover hero-image"
        priority
      />

      {/* Layered dark overlay */}
      <div className="absolute inset-0 hero-overlay" style={{ background: 'linear-gradient(to bottom, rgba(10,10,15,0.55) 0%, rgba(10,10,15,0.45) 40%, rgba(10,10,15,0.85) 100%)' }} />

      {/* Ambient amber orb */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(245,158,11,0.04) 0%, transparent 70%)', filter: 'blur(40px)' }}
        aria-hidden="true"
      />

      {/* Hero content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto hero-content">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/20 bg-amber-500/10 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 badge-pulse" aria-hidden="true" />
          <span className="font-mono text-xs text-amber-400 tracking-widest uppercase">People Development</span>
        </div>

        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-6 leading-[1.05]">
          {hero.title}
        </h1>
        <p className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          {hero.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={hero.ctaLink}
            className="inline-flex items-center px-7 py-3.5 bg-amber-500 text-[#0A0A0F] font-semibold rounded-lg transition-all duration-200 hover:brightness-110 hover:shadow-amber-btn active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0F]"
          >
            {hero.ctaText}
          </a>
          <a
            href="#about"
            className="inline-flex items-center px-7 py-3.5 border border-white/15 text-white font-medium rounded-lg transition-all duration-200 hover:bg-white/5 hover:border-white/25 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0F]"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Bottom gradient fade into page */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none" style={{ background: 'linear-gradient(to bottom, transparent, #0A0A0F)' }} aria-hidden="true" />
    </section>
  )
}
