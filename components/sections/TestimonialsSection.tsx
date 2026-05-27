import Image from 'next/image'
import { MessageSquare } from 'lucide-react'
import { siteContent } from '../../lib/data'

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'MessageSquare':
      return <MessageSquare className="w-6 h-6 stroke-[1.5] text-[#ed5c2c]" />
    default:
      return <MessageSquare className="w-6 h-6 stroke-[1.5] text-[#ed5c2c]" />
  }
}

export default function TestimonialsSection() {
  const { testimonials } = siteContent

  return (
    <section id="testimonials" className="relative overflow-hidden">
      {/* Background image with fixed attachment for parallax */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/assets/hero/f6ff6b9452576cf9c1ed097d0deef5d7.jpg")',
          backgroundAttachment: 'fixed',
          willChange: 'transform',
          filter: 'blur(2px) brightness(0.7)'
        }}
      />
      {/* Slow scroll animated gradient overlay */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 animate-pulse-slow opacity-30" style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(237,92,44,0.1) 0%, transparent 50%)',
          backgroundSize: '100% 100%'
        }} />
        <div className="absolute inset-0 animate-float opacity-40" style={{
          background: 'linear-gradient(45deg, transparent 40%, rgba(237,92,44,0.05) 50%, transparent 60%)',
          backgroundSize: '300% 300%'
        }} />
      </div>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[rgba(10,10,15,0.6)]" />

      <div className="relative py-[120px] max-w-[1200px] mx-auto px-6 lg:px-12 z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px pointer-events-none" style={{ background: 'linear-gradient(to right, transparent, var(--secondary), transparent)', opacity: 0.2 }} aria-hidden="true" />

        {/* Section label */}
        <div className="flex items-center justify-center mb-6">
          <span className="label-caps text-secondary font-semibold">{testimonials.sectionTitle}</span>
        </div>

        {/* Title */}
         <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center tracking-tight mb-4 max-w-[850px] mx-auto">
           {testimonials.subtitle}
         </h2>

        {/* Subtitle/Description */}
        <p className="font-normal text-[16px] leading-[26px] text-zinc-400 mb-14 max-w-[850px] mx-auto text-center">
          {testimonials.subtitle}
        </p>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.people.map((testimonial, index) => (
            <div
              key={index}
              className="group -translate-y-1 p-6 rounded-lg border border-white/[0.12] shadow-glow-sm transition-colors duration-300 hover:border-secondary/35 cursor-default"
              style={{ background: 'rgba(18,33,49,0.5)', backdropFilter: 'blur(8px)' }}
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center text-[#ed5c2c] mb-6 transition-colors duration-300 group-hover:bg-secondary/20">
                {renderIcon(testimonial.icon)}
              </div>

              {/* Testimonial body */}
              <p className="text-zinc-400 text-base leading-relaxed mb-6 italic">
                "{testimonial.testimony}"
              </p>

              {/* Author info */}
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

