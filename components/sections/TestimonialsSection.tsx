import { siteContent } from '../../lib/data'

export default function TestimonialsSection() {
  const { testimonials } = siteContent

  return (
    <section id="testimonials" className="relative overflow-hidden">
      {/* Background image with fixed attachment for parallax */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/assets/hero/hero-bw.jpg")',
          backgroundAttachment: 'fixed',
          willChange: 'transform'
        }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[rgba(10,10,15,0.6)]" />

      <div className="relative py-[120px] max-w-6xl mx-auto px-6 lg:px-12 z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px pointer-events-none" style={{ background: 'linear-gradient(to right, transparent, var(--secondary), transparent)', opacity: 0.2 }} aria-hidden="true" />

        <div className="flex items-center justify-center mb-6">
          <span className="label-caps text-[#ed5c2c]">{testimonials.title}</span>
        </div>

        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center tracking-tight mb-16 max-w-2xl mx-auto">
          {testimonials.subtitle}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.people.map((testimonial, index) => (
            <div
              key={index}
              className="group p-8 bg-[#0A1A2F]/40 backdrop-blur-sm rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg glass-card"
              style={{
                background: 'linear-gradient(135deg, rgba(10,26,47,0.4) 0%, rgba(10,10,15,0.6) 100%)',
                backdropFilter: 'blur(12px)'
              }}
            >
              {/* Icon */}
              <div className="w-10 h-10 bg-[#ed5c2c] flex items-center justify-center text-white mb-6">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M14.017 21v-7.03a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v7.03a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1zm4 0v-7.03a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v7.03a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1z" />
                </svg>
              </div>

              {/* Testimonial body */}
              <p className="text-zinc-400 text-base leading-relaxed mb-6 italic">
                "{testimonial.testimony}"
              </p>

              {/* Author info - acts as sub-label + headline */}
              <div className="mt-auto pt-6 border-t border-white/10">
                <p className="font-display text-xl font-bold text-white uppercase tracking-tight mb-1">
                  {testimonial.name}
                </p>
                <p className="text-[#ed5c2c] text-xs font-semibold uppercase tracking-wider">
                  {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

