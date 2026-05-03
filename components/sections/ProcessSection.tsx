import Image from 'next/image'
import { siteContent } from '../../lib/data'

export default function ProcessSection() {
  const { process } = siteContent

  return (
    <section id="process" className="py-[96px] md:py-[128px] lg:py-[160px] bg-[#051424] relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        
        {/* Section label */}
        <div className="mb-6 text-center">
          <span className="label-caps text-secondary font-semibold">{process.sectionTitle}</span>
        </div>
        
        {/* Title */}
        <h2 className="mb-4 text-center font-display text-3xl md:text-4xl lg:text-5xl font-bold text-on-surface tracking-tight max-w-2xl mx-auto">
          {process.title}
        </h2>
        
        {/* Subtitle/Description */}
        <p className="mb-16 text-center font-normal text-[16px] leading-[26px] text-on-surface-variant max-w-3xl mx-auto">
          {process.subtitle}
        </p>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[32px]">
          {process?.steps?.map((step, index) => (
            <div
              key={index}
              className="group flex flex-col gap-6 rounded-xl border border-outline-variant/20 transition-all duration-300 hover:border-secondary/30 hover:scale-[1.01] hover:shadow-glow-sm"
              style={{ background: 'rgba(18,33,49,0.5)', backdropFilter: 'blur(8px)' }}
            >
              {/* Step Number */}
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary font-mono text-lg font-bold">
                {step.number}
              </div>

              {/* Step Content */}
              <div>
                <h3 className="font-display text-xl font-bold text-on-surface mb-3 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Step Image */}
              <div className="mt-auto">
                <div className="aspect-video rounded-lg overflow-hidden">
                  <Image
                    src={step.image}
                    alt={step.imageAlt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
