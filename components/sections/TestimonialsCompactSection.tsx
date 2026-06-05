import { MessageSquare } from 'lucide-react'
import { siteContent } from '../../lib/data'

export default function TestimonialsCompactSection() {
  const { testimonials } = siteContent
  const marqueeItems = [...testimonials.people, ...testimonials.people]

  return (
    <section id="testimonials" className="overflow-hidden bg-[#051424] py-16 md:py-20">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col gap-5 mb-10 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="label-caps text-secondary font-semibold">{testimonials.sectionTitle}</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-on-surface tracking-tight mt-4 max-w-[850px]">
              {testimonials.subtitle}
            </h2>
          </div>
          <p className="font-inter text-[16px] leading-[26px] text-on-surface-variant max-w-[420px]">
            Short reflections from leaders, teams, and organisations who have worked with Apex.
          </p>
        </div>

      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#051424] to-transparent md:w-28" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#051424] to-transparent md:w-28" />

        <div className="flex animate-scroll gap-5 px-6 lg:px-12">
          {marqueeItems.map((testimonial, index) => (
            <article
              key={`${testimonial.name}-${index}`}
              className="flex w-[320px] shrink-0 flex-col -translate-y-1 rounded-lg border border-white/[0.12] bg-white/[0.06] p-5 shadow-glow-sm transition-colors duration-300 hover:border-secondary/35 md:w-[380px]"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary/10 text-[#ed5c2c]">
                  <MessageSquare className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-manrope text-[16px] font-bold leading-[22px] text-white">
                    {testimonial.name}
                  </h3>
                  <p className="font-inter text-[12px] font-semibold uppercase leading-[18px] tracking-wider text-secondary">
                    {testimonial.company}
                  </p>
                </div>
              </div>

              <p className="font-inter text-[14px] leading-[23px] text-on-surface-variant">
                "{testimonial.testimony}"
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
