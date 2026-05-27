import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { siteContent } from '../../lib/data'

export default function TeamSection() {
  const { team } = siteContent

  return (
    <section id="team" className="py-[120px] bg-surface-container-low relative overflow-hidden">

      {/* Top edge line */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px pointer-events-none"
        style={{ background: 'linear-gradient(to right, transparent, var(--secondary), transparent)', opacity: 0.2 }}
        aria-hidden="true"
      />

      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">

        {/* Section label */}
        <div className="flex items-center justify-center mb-6">
          <span className="label-caps text-secondary font-semibold">{team.sectionTitle}</span>
        </div>

        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-on-surface text-center tracking-tight mb-4 max-w-[850px] mx-auto">
          {team.title}
        </h2>
        <p className="font-normal text-[16px] leading-[26px] text-on-surface-variant mb-14 max-w-[850px] mx-auto text-center">
          {team.description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {team.people.map((member, index) => {
            const isClickable = member.name === "Craig Stuart" || member.name === "CÃ©lia Senekal"
            const profileSlug = member.name === "Craig Stuart" ? "craig-stuart" : member.name === "CÃ©lia Senekal" ? "celia-senekal" : null
            
            const card = (
              <div
                className={`group -translate-y-1 rounded-lg overflow-hidden border border-white/[0.12] shadow-glow-sm transition-colors duration-300 hover:border-secondary/35 relative ${
                  isClickable ? 'cursor-pointer' : ''
                }`}
                style={{ background: '#071524' }}
              >
                {/* Photo */}
                <div className="aspect-square bg-surface-container-lowest relative overflow-hidden">
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full bg-surface-container flex items-center justify-center">
                      <span className="text-on-surface-variant text-4xl">?</span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display text-2xl font-bold text-on-surface mt-2 mb-3 tracking-tight">
                    {member.name}
                  </h3>
                  <p className="label-caps text-secondary font-semibold mb-4">
                    {member.role}
                  </p>
                  <p className="text-on-surface-variant text-base leading-relaxed">
                    {member.focus}
                  </p>
                </div>
              </div>
            )

            if (isClickable && profileSlug) {
              return (
                <div key={index} className="flex flex-col items-center">
                  <Link href={`/coaches/${profileSlug}`}>
                    {card}
                  </Link>
                   {member.name === "Craig Stuart" && (
                     <Link
                       href="/coaches/craig-stuart"
                       className="mt-3 inline-flex items-center gap-1 text-secondary text-[16px] leading-[24px] font-semibold hover:gap-2 transition-all"
                     >
                       See full profile
                       <ChevronRight className="w-4 h-4" strokeWidth={2} />
                     </Link>
                   )}
                </div>
              )
            }

            return <div key={index}>{card}</div>
          })}
        </div>
      </div>
    </section>
  )
}

