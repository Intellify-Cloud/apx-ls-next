import Image from 'next/image'
import { siteContent } from '../../lib/data'

export default function ScarfSection() {
  const { scarf } = siteContent

  return (
    <section id="scarf" className="py-24 md:py-32 lg:py-40 bg-[#0A0A0F] relative overflow-hidden">

      {/* Ambient orb bottom-left */}
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(245,158,11,0.04) 0%, transparent 65%)', filter: 'blur(60px)' }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Image */}
          <div className="relative h-72 md:h-96 lg:h-full min-h-[360px] rounded-xl overflow-hidden border border-white/[0.08]">
            <Image
              src={scarf.image}
              alt="SCARF Assessment"
              fill
              className="object-cover"
            />
            {/* Amber overlay */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: 'linear-gradient(135deg, rgba(245,158,11,0.06) 0%, transparent 60%)' }}
            />
          </div>

          {/* Content */}
          <div>
            <span className="font-mono text-xs text-amber-500 tracking-widest uppercase">{scarf.description}</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white tracking-tight mt-4 mb-3">
              {scarf.title}
            </h2>
            <p className="text-lg font-medium text-zinc-300 mb-3">{scarf.welcomeText}</p>
            <p className="text-zinc-400 mb-8 leading-relaxed">{scarf.details}</p>

            <ul className="space-y-3 mb-8">
              {scarf.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-amber-500/15 flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-amber-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-zinc-400 text-sm leading-relaxed">{benefit}</span>
                </li>
              ))}
            </ul>

            <p className="text-zinc-600 text-sm mb-8 leading-relaxed">{scarf.instructions}</p>

            <a
              href={scarf.buttonLink}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-amber-500 text-[#0A0A0F] font-semibold rounded-lg transition-all duration-200 hover:brightness-110 hover:shadow-amber-btn active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0F]"
            >
              {scarf.buttonText}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
