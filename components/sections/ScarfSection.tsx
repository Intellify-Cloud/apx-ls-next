import Image from 'next/image'
import { Check } from 'lucide-react'
import { siteContent } from '../../lib/data'

export default function ScarfSection() {
  const { scarf } = siteContent

  return (
    <section className="py-24 md:py-32 lg:py-40 bg-[#12121A] relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        
        {/* Header: Section label (centered single row) */}
        <div className="mb-6 text-center">
          <span className="label-caps text-secondary font-semibold">{scarf.sectionTitle}</span>
        </div>
        
        {/* Title: Main title (centered single row) */}
        <h2 className="mb-6 text-center font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight max-w-[760px] mx-auto">
          {scarf.title}
        </h2>
        
         {/* First paragraph: Welcome text (centered single row) */}
         <p className="mb-8 text-center text-zinc-400 text-lg leading-relaxed max-w-[680px] mx-auto">
           {scarf.welcomeText}
         </p>
         
         {/* 2 Columns: Image | Benefits checklist */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start max-w-[900px] mx-auto mt-8">
           {/* Image Column */}
           <div className="flex justify-center">
             <div className="relative w-full max-w-[320px]">
                <div className="aspect-[4/3] rounded-xl overflow-hidden border border-white/[0.08] relative">
                  <div className="absolute inset-0 rounded-xl border-2 border-[#ed5c2c] opacity-50 pointer-events-none z-10" />
                  <Image
                    src={scarf.image}
                    alt="SCARF Assessment"
                    fill
                    className="object-cover"
                  />
                </div>
               <div
                 className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full pointer-events-none"
                 style={{ background: 'radial-gradient(ellipse, rgba(237,92,44,0.15) 0%, transparent 70%)', filter: 'blur(20px)' }}
                 aria-hidden="true"
               />
             </div>
           </div>
          
           {/* Benefits Column: Checklist copy (left-aligned) */}
           <div className="space-y-5">
              {scarf.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#ed5c2c] flex-shrink-0" strokeWidth={2.5} />
                  <span className="text-zinc-300 leading-relaxed">{benefit}</span>
                </div>
              ))}
           </div>
         </div>
         
         {/* Second paragraph: Instructions (centered single row) */}
         <p className="mt-8 mb-8 text-center text-zinc-500 text-sm leading-relaxed max-w-[680px] mx-auto">
          {scarf.instructions}
        </p>
        
        {/* Button (centered) */}
        {scarf.buttonText && scarf.buttonLink && (
          <div className="flex justify-center">
            <a
              href={scarf.buttonLink}
              className="inline-flex items-center px-6 py-3 bg-[#ed5c2c] text-[#0A0A0F] text-[16px] leading-[24px] font-semibold rounded-lg transition-all duration-200 hover:bg-[#dd5128] hover:shadow-[#ed5c2c]/50 relative z-10"
            >
              {scarf.buttonText}
            </a>
          </div>
        )}
      </div>
    </section>
  )
}
