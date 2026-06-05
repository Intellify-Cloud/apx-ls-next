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
        <h2 className="mb-4 text-center font-display text-3xl md:text-4xl lg:text-5xl font-bold text-on-surface tracking-tight max-w-[850px] mx-auto">
          {process.title}
        </h2>
        
        {/* Subtitle/Description */}
        <p className="mb-16 text-center font-normal text-[16px] leading-[26px] text-on-surface-variant max-w-[850px] mx-auto">
          {process.subtitle}
        </p>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {process?.steps?.map((step, index) => (
            <div
              key={index}
              className="group relative aspect-[1.618/1] -translate-y-1 rounded-lg border border-white/[0.12] shadow-glow-sm transition-colors duration-300 hover:border-secondary/35 overflow-hidden"
              style={{ background: 'rgba(18,33,49,0.5)' }}
            >
              {/* Background Image with overlay */}
              <div className="absolute inset-0">
                <Image
                  src={step.image}
                  alt={step.imageAlt}
                  fill
                  className="object-cover opacity-30 transition-opacity duration-300 group-hover:opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(18,33,49,0.95)] via-[rgba(18,33,49,0.7)] to-[rgba(18,33,49,0.4)]" />
              </div>

              {/* Content - positioned on top */}
              <div className="relative p-6 flex flex-col h-full">
                {/* Step Number */}
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary font-mono text-lg font-bold mb-6">
                  {step.number}
                </div>

                {/* Step Content */}
                <div className="flex-1">
                  <h3 className="font-display text-xl font-bold text-on-surface mb-3 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

