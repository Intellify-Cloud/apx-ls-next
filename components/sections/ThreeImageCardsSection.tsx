import Image from 'next/image'
import { siteContent } from '../../lib/data'

interface ProcessStep {
  number: string
  title: string
  description: string
  image: string
  imageAlt: string
}

export default function ProcessSection() {
  const { process } = siteContent

  return (
    <section id="process" className="py-[96px] md:py-[128px] lg:py-[160px] bg-[#051424] relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        {process?.title && (
          <div className="text-center mb-[64px]">
            <span className="font-mono text-xs text-[#ed5c2c] tracking-widest uppercase mb-[24px] block">
              {process.title}
            </span>
            {process.subtitle && (
              <h2 className="font-heading text-[clamp(32px,4vw,56px)] font-[700] text-[#ed5c2c] tracking-tight mb-[48px] leading-[1.2]">
                {process.subtitle}
              </h2>
            )}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[32px]">
          {process?.steps?.map((step, index) => (
            <div
              key={index}
              className="group flex flex-col items-start gap-[24px] rounded-[12px] border border-white/[0.08] transition-all duration-300 hover:border-[#ed5c2c]/20 hover:shadow-glow-sm"
              style={{ background: 'rgba(13,28,45,0.6)', backdropFilter: 'blur(8px)' }}
            >
              <div className="flex items-center gap-[16px] w-full">
                {/* Step Number */}
                <div className="flex-shrink-0">
                  <div className="w-[48px] h-[48px] rounded-[12px] bg-[#ed5c2c]/20 flex items-center justify-center text-[#ed5c2c] font-mono text-[24px] font-[700]">
                    {step.number}
                  </div>
                </div>
                
                {/* Step Content */}
                <div className="flex-1">
                  <h3 className="font-heading text-xl font-[600] text-white mb-[8px]">
                    {step.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-[1.6]">
                    {step.description}
                  </p>
                </div>
              </div>
              
              {/* Step Image */}
              <div className="w-full">
                <div className="aspect-[16/9] rounded-[12px] overflow-hidden">
                  <Image
                    src={step.image}
                    alt={step.imageAlt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


