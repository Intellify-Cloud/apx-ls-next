import Image from 'next/image'
import { siteContent } from '../../lib/data'

export default function HeroSection() {
  const { hero } = siteContent

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with Ken Burns */}
      <Image
        src="/assets/hero/hero-bw.jpg"
        alt="Apex Leadership Specialists - Leadership Development Consultancy"
        fill
        className="object-cover hero-image"
        priority
      />

      {/* Layered dark overlay */}
      <div className="absolute inset-0 hero-overlay" style={{ background: 'linear-gradient(to bottom, rgba(5,20,36,0.55) 0%, rgba(5,20,36,0.45) 40%, rgba(5,20,36,0.85) 100%)' }} />

      {/* Ambient amber orb */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(237,92,44,0.04) 0%, transparent 70%)', filter: 'blur(40px)' }}
        aria-hidden="true"
      />

      {/* Hero content */}
      <div className="relative z-10 text-center px-6 max-w-[800px] mx-auto hero-content">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#ed5c2c]/20 bg-[#ed5c2c]/10 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#ed5c2c] badge-pulse" aria-hidden="true" />
          <span className="font-mono text-xs text-[#ed5c2c] tracking-widest uppercase">People Development</span>
        </div>

        <h1 className="font-display font-black text-[63px] leading-[63px] text-white uppercase mb-6">
          {hero.title.toUpperCase()}
        </h1>
        <p className="text-[21px] font-[300] leading-[28px] text-white/90 mb-10 max-w-2xl mx-auto">
          {hero.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={hero.ctaLink}
            className="inline-flex items-center px-7 py-3.5 bg-[#ed5c2c] text-[#051424] font-semibold rounded-[12px] transition-all duration-200 hover:bg-[#dd5128] hover:shadow-amber-btn active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ed5c2c]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#051424] relative z-10"
          >
            {hero.ctaText}
          </a>
          <a
            href="#about"
            className="inline-flex items-center px-7 py-3.5 border border-white/15 text-[#ed5c2c] font-medium rounded-[12px] transition-all duration-200 hover:bg-white/5 hover:border-white/25 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ed5c2c]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#051424] relative z-10"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Bottom gradient fade into page */}
      <div className="absolute bottom-0 left-0 right-0 h-[128px] pointer-events-none" style={{ background: 'linear-gradient(to bottom, transparent, #051424)' }} aria-hidden="true" />

      {/* Bouncing chevron icon */}
      <div className="absolute bottom-[48px] left-1/2 -translate-x-1/2 flex items-center justify-center z-20">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down w-4 h-4 text-[#ed5c2c] animate-bounce">
          <path d="m6 9 6 6 6-6"></path>
        </svg>
      </div>
    </section>
  )
}
