import Image from 'next/image'
import { siteContent } from '../../lib/data'

export default function HeroSection() {
  const { hero } = siteContent

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <Image
        src="/assets/img/hero/hero-bw.jpg"
        alt="Apex Leadership Specialists - Leadership Development Consultancy"
        fill
        className="object-cover hero-image"
        priority
      />
      <div className="absolute inset-0 bg-black hero-overlay" />
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto hero-content">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          {hero.title}
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-8">
          {hero.subtitle}
        </p>
        <a
          href={hero.ctaLink}
          className="inline-block bg-accent text-white px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all"
        >
          {hero.ctaText}
        </a>
      </div>
    </section>
  )
}
