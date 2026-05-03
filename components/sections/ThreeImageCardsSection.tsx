import Image from 'next/image'
import { siteContent } from '../../lib/data'

export default function ThreeImageCardsSection() {
  const { about } = siteContent

  return (
    <section id="about" className="py-[96px] md:py-[128px] lg:py-[160px] bg-[#051424] relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        {about?.title && (
          <div className="text-center mb-[64px]">
            {/* Applying WHO WE ARE element styling */}
            <span className="font-semibold text-[14px] leading-[14px] text-[#ed5c2c] tracking-widest uppercase mb-[24px] block">
              {about.title}
            </span>
{about?.["top-text"] && (
               <>
                 {/* Applying title style and font sizes (not color) used for "Unlocking potential through people development" */}
                 <p className="font-heading text-[clamp(32px,4vw,56px)] font-[700] tracking-tight mb-[48px] leading-[1.2] text-zinc-400 max-w-[480px] mx-auto">
                   {about["top-text"]}
                 </p>
               </>
             )}
          </div>
        )}
        
        {/* Adding three image cards section below the text - using process images as requested in original filename */}
        <div className="mt-[64px] grid grid-cols-1 md:grid-cols-3 gap-[32px]">
          {/* Card 1 - Assess & Align */}
          <div className="group flex flex-col items-start gap-[24px] rounded-[12px] border border-white/[0.08] transition-all duration-300 hover:border-[#ed5c2c]/20 hover:shadow-glow-sm">
            <div className="w-full">
              <div className="aspect-[16/9] rounded-[12px] overflow-hidden">
                <Image
                  src="/assets/img/process/assess-align.jpg"
                  alt="Leadership assessment workshop with team"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
            </div>
            <div className="flex items-center gap-[16px] w-full">
              <div className="flex-shrink-0">
                <div className="w-[48px] h-[48px] rounded-[12px] bg-[#ed5c2c]/20 flex items-center justify-center text-[#ed5c2c] font-mono text-[24px] font-[700]">
                  01
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-heading text-xl font-[600] text-white mb-[8px]">
                  Assess & Align
                </h3>
                <p className="text-zinc-400 text-sm leading-[1.6]">
                  We begin with a comprehensive leadership audit to identify strengths, gaps, and opportunities aligned with your business objectives.
                </p>
              </div>
            </div>
          </div>
          
          {/* Card 2 - Develop & Implement */}
          <div className="group flex flex-col items-start gap-[24px] rounded-[12px] border border-white/[0.08] transition-all duration-300 hover:border-[#ed5c2c]/20 hover:shadow-glow-sm">
            <div className="w-full">
              <div className="aspect-[16/9] rounded-[12px] overflow-hidden">
                <Image
                  src="/assets/img/process/develop-implement.jpg"
                  alt="Executive coaching session in progress"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
            </div>
            <div className="flex items-center gap-[16px] w-full">
              <div className="flex-shrink-0">
                <div className="w-[48px] h-[48px] rounded-[12px] bg-[#ed5c2c]/20 flex items-center justify-center text-[#ed5c2c] font-mono text-[24px] font-[700]">
                  02
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-heading text-xl font-[600] text-white mb-[8px]">
                  Develop & Implement
                </h3>
                <p className="text-zinc-400 text-sm leading-[1.6]">
                  Custom coaching programs and development plans are created and executed with measurable milestones and accountability frameworks.
                </p>
              </div>
            </div>
          </div>
          
          {/* Card 3 - Measure & Evolve */}
          <div className="group flex flex-col items-start gap-[24px] rounded-[12px] border border-white/[0.08] transition-all duration-300 hover:border-[#ed5c2c]/20 hover:shadow-glow-sm">
            <div className="w-full">
              <div className="aspect-[16/9] rounded-[12px] overflow-hidden">
                <Image
                  src="/assets/img/process/measure-evolve.jpg"
                  alt="Leadership team reviewing progress metrics"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
            </div>
            <div className="flex items-center gap-[16px] w-full">
              <div className="flex-shrink-0">
                <div className="w-[48px] h-[48px] rounded-[12px] bg-[#ed5c2c]/20 flex items-center justify-center text-[#ed5c2c] font-mono text-[24px] font-[700]">
                  03
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-heading text-xl font-[600] text-white mb-[8px]">
                  Measure & Evolve
                </h3>
                <p className="text-zinc-400 text-sm leading-[1.6]">
                  We track progress against KPIs, refine approaches based on data, and ensure sustainable leadership growth that drives business results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}