import { siteContent } from '../../lib/data'

export default function AboutSection() {
  const { about } = siteContent

  return (
    <section id="about" className="py-24 md:py-32 lg:py-40 bg-[#12121A] relative overflow-hidden">

      {/* Subtle radial ambient */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px pointer-events-none"
        style={{ background: 'linear-gradient(to right, transparent, rgba(245,158,11,0.2), transparent)' }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-6 lg:px-12">

        {/* Section label */}
        <div className="flex items-center justify-center mb-6">
          <span className="font-mono text-xs text-amber-500 tracking-widest uppercase">{about.title}</span>
        </div>

        {/* Heading */}
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center tracking-tight mb-12 max-w-2xl mx-auto">
          Unlocking potential through people development
        </h2>

        {/* Glass content card */}
        <div
          className="max-w-3xl mx-auto rounded-xl p-8 md:p-10 border border-white/[0.08]"
          style={{ background: 'rgba(26, 26, 36, 0.6)', backdropFilter: 'blur(8px)' }}
        >
          <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
            {about.text}
          </p>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-6 mt-12 max-w-2xl mx-auto">
          {[
            { value: '7+', label: 'Expert Coaches' },
            { value: '9+', label: 'Partner Companies' },
            { value: '12+', label: 'Client Testimonials' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p className="font-display text-3xl font-bold text-amber-400 mb-1">{stat.value}</p>
              <p className="font-mono text-xs text-zinc-500 tracking-wide uppercase">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
