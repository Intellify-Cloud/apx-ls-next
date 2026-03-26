import { siteContent } from '../../lib/data'

export default function TestimonialsSection() {
  const { testimonials } = siteContent

  return (
    <section id="testimonials" className="py-24 md:py-32 lg:py-40 bg-[#0A0A0F] relative overflow-hidden">

      {/* Ambient orb */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(245,158,11,0.025) 0%, transparent 65%)', filter: 'blur(80px)' }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-6 lg:px-12">

        {/* Section label */}
        <div className="flex items-center justify-center mb-6">
          <span className="font-mono text-xs text-amber-500 tracking-widest uppercase">Testimonials</span>
        </div>

        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center tracking-tight mb-4">
          {testimonials.title}
        </h2>
        <p className="text-zinc-500 text-center mb-16 max-w-md mx-auto text-sm">
          Real experiences from the people we've had the privilege to work with.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.people.slice(0, 6).map((testimonial, index) => (
            <div
              key={index}
              className="group relative p-7 rounded-xl border border-white/[0.08] transition-all duration-300 hover:border-white/[0.13] hover:scale-[1.02] hover:shadow-lg"
              style={{ background: 'rgba(26, 26, 36, 0.6)', backdropFilter: 'blur(8px)' }}
            >
              {/* Amber left accent with glow */}
              <div
                className="absolute left-0 top-6 bottom-6 w-0.5 rounded-full"
                style={{ background: 'rgba(245,158,11,0.4)', boxShadow: '0 0 8px rgba(245,158,11,0.2)' }}
                aria-hidden="true"
              />

              {/* Quote mark */}
              <div className="font-display text-5xl text-amber-500/20 leading-none mb-3 select-none" aria-hidden="true">"</div>

              <p className="text-zinc-400 text-sm leading-relaxed mb-6 italic">
                {testimonial.testimony}
              </p>

              <div className="border-t border-white/[0.06] pt-4">
                <p className="font-semibold text-white text-sm">{testimonial.name}</p>
                <p className="font-mono text-xs text-amber-500/70 tracking-wide mt-0.5">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
