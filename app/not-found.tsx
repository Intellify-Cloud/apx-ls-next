import Image from 'next/image'
import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0A0A0F]">

      {/* Background image */}
      <Image
        src="/assets/img/hero/hero-bw.jpg"
        alt="Mountain landscape"
        fill
        className="object-cover opacity-20"
        priority
      />

      {/* Dark overlay */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(10,10,15,0.7), rgba(10,10,15,0.85))' }} />

      {/* Ambient orb */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(245,158,11,0.05) 0%, transparent 65%)', filter: 'blur(60px)' }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">

        <span className="font-mono text-xs text-amber-500 tracking-widest uppercase">Error 404</span>

        <h1 className="font-display text-8xl md:text-9xl font-bold text-white tracking-tight mt-4 mb-6" style={{ textShadow: '0 0 80px rgba(245,158,11,0.15)' }}>
          404
        </h1>

        {/* Haiku */}
        <div className="mb-8 space-y-1">
          <p className="font-display text-xl md:text-2xl text-zinc-300 italic font-light">Trails fade behind you</p>
          <p className="font-display text-xl md:text-2xl text-zinc-300 italic font-light">The summit still waits for you</p>
          <p className="font-display text-xl md:text-2xl text-zinc-300 italic font-light">Turn back, find the path</p>
        </div>

        <p className="text-zinc-500 mb-10">
          You&apos;ve wandered off the map. Let&apos;s get you back on the trail.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-7 py-3.5 bg-amber-500 text-[#0A0A0F] font-semibold rounded-lg transition-all duration-200 hover:brightness-110 hover:shadow-amber-btn active:scale-[0.98]"
          >
            Return Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-7 py-3.5 border border-white/15 text-white font-medium rounded-lg transition-all duration-200 hover:bg-white/5 hover:border-white/25 active:scale-[0.98]"
          >
            Get Directions
          </Link>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none" style={{ background: 'linear-gradient(to bottom, transparent, #0A0A0F)' }} aria-hidden="true" />
    </main>
  )
}
