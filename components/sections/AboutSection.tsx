import { siteContent } from '../../lib/data'

export default function AboutSection() {
  const { about } = siteContent

  return (
    <section id="about" className="py-[120px] bg-surface-container-low relative overflow-hidden">

      {/* Subtle radial ambient */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px pointer-events-none"
        style={{ background: 'linear-gradient(to right, transparent, var(--secondary), transparent)', opacity: 0.2 }}
        aria-hidden="true"
      />

      <div className="max-w-[1000px] mx-auto px-6 lg:px-12">

        {/* Section label */}
        <div className="flex items-center justify-center mb-6">
          <span className="label-caps text-secondary">{about.title}</span>
        </div>

        {/* Heading */}
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-on-surface text-center tracking-tight mb-12 max-w-2xl mx-auto">
          Unlocking potential through people development
        </h2>

        {/* Glass content card */}
        <div
          className="max-w-[1000px] mx-auto rounded-lg p-8 md:p-10 border border-outline-variant/30"
          style={{ background: 'rgba(18,33,49,0.6)', backdropFilter: 'blur(8px)' }}
        >
<p className="text-on-surface-variant text-[16px] leading-[26px]">
             {about["top-text"]}
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
              <p className="font-display text-3xl font-bold text-secondary mb-1">{stat.value}</p>
              <p className="label-caps text-on-surface-variant opacity-60 text-[10px]">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
