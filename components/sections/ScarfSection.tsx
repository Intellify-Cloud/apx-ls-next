import Image from 'next/image'
import { siteContent } from '../../lib/data'

export default function ScarfSection() {
  const { scarf } = siteContent

  return (
    <section id="scarf" className="py-[96px] md:py-[128px] lg:py-[160px] bg-[#051424] relative overflow-hidden">

      {/* Ambient orb bottom-left */}
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(237,92,44,0.04) 0%, transparent 65%)', filter: 'blur(60px)' }}
        aria-hidden="true"
      />

      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[96px] lg:gap-[128px] items-center">

          {/* Image */}
          <div className="relative h-[288px] md:h-[384px] lg:h-[480px] min-h-[360px] rounded-[12px] overflow-hidden border border-white/[0.08]">
            <Image
              src={scarf.image}
              alt="SCARF Assessment"
              fill
              className="object-cover"
            />
            {/* Amber overlay */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: 'linear-gradient(135deg, rgba(237,92,44,0.06) 0%, transparent 60%)' }}
            />
          </div>

          {/* Content */}
          <div>
            {/* Section label */}
            <div className="mb-6">
              <span className="label-caps text-secondary font-semibold">{scarf.sectionTitle}</span>
            </div>

            {/* Orange label */}
            <span className="font-mono text-xs text-[#ed5c2c] tracking-widest uppercase block text-center mb-4">
              {scarf.description}
            </span>

            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-on-surface text-center tracking-tight mb-4 max-w-2xl mx-auto">
              {scarf.title}
            </h2>
            <p className="font-normal text-[16px] leading-[26px] text-on-surface-variant mb-14 max-w-3xl mx-auto text-center">
              {scarf.welcomeText}
            </p>
            <p className="font-normal text-[16px] leading-[26px] text-on-surface-variant mb-16 max-w-3xl mx-auto">
              {scarf.details}
            </p>

            <ul className="space-y-[24px] mb-[64px] max-w-[800px] mx-auto text-center">
              {scarf.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-[24px]">
                  <span className="w-[20px] h-[20px] rounded-full bg-[#ed5c2c]/15 flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-[12px] h-[12px] text-[#ed5c2c]" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-zinc-400 text-sm leading-relaxed">{benefit}</span>
                </li>
              ))}
            </ul>

            <p className="text-zinc-500 text-sm mb-[64px] leading-relaxed max-w-[800px] mx-auto text-center">
              {scarf.instructions}
            </p>

            <a
              href={scarf.buttonLink}
              className="inline-flex items-center gap-[16px] px-[56px] py-[24px] bg-[#ed5c2c] text-[#051424] font-semibold rounded-[12px] transition-all duration-200 hover:bg-[#dd5128] hover:shadow-amber-btn active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ed5c2c] focus-visible:ring-offset-2 focus-visible:ring-offset-[#051424] relative z-10 mx-auto"
            >
              {scarf.buttonText}
              <svg className="w-[24px] h-[24px]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
