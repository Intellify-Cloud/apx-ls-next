import Image from 'next/image'
import Link from 'next/link'
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

      <div className="max-w-[800px] mx-auto px-6 lg:px-12">

        {/* Section label */}
        <div className="flex items-center justify-center mb-[24px]">
          <span className="label-caps text-secondary">The Coaches</span>
        </div>

        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-on-surface text-center tracking-tight mb-[24px] max-w-[800px] mx-auto">
          {team.title}
        </h2>
        <p className="text-on-surface-variant text-center max-w-[800px] mx-auto mb-[80px] leading-relaxed body-lg opacity-80">
          {team.description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px]">
          {team.people.map((member, index) => {
            const isClickable = member.name === "Craig Stuart" || member.name === "Célia Senekal"
            const profileSlug = member.name === "Craig Stuart" ? "craig-stuart" : member.name === "Célia Senekal" ? "celia-senekal" : null
            
            const card = (
              <div
                className={`group h-full rounded-lg overflow-hidden border border-outline-variant/30 transition-all duration-300 hover:border-secondary/30 hover:shadow-glow-sm hover:scale-[1.01] relative ${isClickable ? 'cursor-pointer' : ''}`}
                style={{ background: 'rgba(18,33,49,0.5)', backdropFilter: 'blur(8px)' }}
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
                  <h3 className="font-display text-xl font-bold text-on-surface mb-2">
                    {member.name}
                  </h3>
                  <p className="label-caps text-secondary text-[10px] mb-4">
                    {member.role}
                  </p>
                  <p className="text-on-surface-variant text-sm leading-relaxed line-clamp-3">
                    {member.focus}
                  </p>
                </div>
              </div>
            )

            if (isClickable && profileSlug) {
              return (
                <Link key={index} href={`/coaches/${profileSlug}`}>
                  {card}
                </Link>
              )
            }

            return <div key={index}>{card}</div>
          })}
        </div>
      </div>
    </section>
  )
}
