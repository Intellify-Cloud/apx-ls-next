"use client"

import { useState, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'
import { siteContent } from '../../lib/data'

const heroImages = [
  '/assets/hero/1-wall.png',
  '/assets/hero/2-together.png',
  '/assets/hero/3-support.png',
  '/assets/hero/5-summit.png',
]

export default function HeroSection() {
  const { hero } = siteContent
  const [currentIndex, setCurrentIndex] = useState(0)
  const [fadeToBlack, setFadeToBlack] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeToBlack(true)
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % heroImages.length)
        setFadeToBlack(false)
      }, 1500)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-[95vh] flex items-center justify-center overflow-hidden bg-[#0c1a37]">
      <div className="absolute inset-0">
        {heroImages.map((img, index) => (
          <div
            key={img}
            className="absolute inset-0 transition-opacity duration-[1500ms] ease-in-out"
            style={{ opacity: index === currentIndex ? 1 : 0 }}
          >
            <img
              src={img}
              alt="Executive coaching and leadership development background"
              className="w-full h-full object-cover"
              loading={index === 0 ? 'eager' : 'lazy'}
            />
            <div
              className="absolute inset-0 bg-black transition-opacity duration-[1500ms] ease-in-out"
              style={{ opacity: fadeToBlack ? 1 : 0 }}
            />
          </div>
        ))}
      </div>

      <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(12,26,55,0.4) 0%, rgba(26,39,68,0.4) 50%, rgba(12,26,55,0.4) 100%)' }} />

      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(237,92,44,0.06) 0%, transparent 70%)', filter: 'blur(40px)' }}
        aria-hidden="true"
      />

      <div className="relative z-10 text-center px-6 max-w-[760px] mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#ed5c2c]/20 bg-[#ed5c2c]/10 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#ed5c2c] badge-pulse" aria-hidden="true" />
          <span className="font-mono text-xs text-[#ed5c2c] tracking-widest uppercase">People Development</span>
        </div>

        <h1 className="font-display font-black text-[63px] leading-[63px] text-white uppercase mb-6">
          {hero.headline}
        </h1>
        <p className="text-[21px] font-[300] leading-[28px] text-white/90 mb-10 max-w-[680px] mx-auto">
          {hero.subline}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={hero.ctaLink}
            className="inline-flex items-center px-7 py-3.5 bg-[#ed5c2c] text-[#051424] text-[16px] leading-[24px] font-semibold rounded-[12px] transition-all duration-200 hover:bg-[#dd5128] hover:shadow-amber-btn active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ed5c2c]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#051424] relative z-10"
          >
            {hero.ctaText}
          </a>
        </div>
      </div>

      <div className="absolute bottom-[48px] left-1/2 -translate-x-1/2 flex flex-col items-center justify-center z-20">
        <span className="font-mono text-[10px] text-[#ed5c2c] tracking-widest uppercase mb-2">Scroll</span>
        <div className="w-8 h-8 rounded-full border-2 border-[#ed5c2c]/30 flex items-center justify-center animate-bounce">
          <ChevronDown className="w-4 h-4 text-[#ed5c2c]" strokeWidth={2} />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[128px] pointer-events-none" style={{ background: 'linear-gradient(to bottom, transparent, #051424)' }} aria-hidden="true" />
    </section>
  )
}
