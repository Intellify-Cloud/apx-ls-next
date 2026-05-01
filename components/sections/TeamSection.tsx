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

      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">

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
            const isCraig = member.name === "Craig Stuart"
            
            const card = (
              <div
                className={`group h-full rounded-lg overflow-hidden border border-outline-variant/30 transition-all duration-300 hover:border-secondary/30 hover:shadow-glow-sm hover:scale-[1.01] relative ${isCraig ? 'cursor-pointer' : ''}`}
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
                    <div className="absolute inset-0 flex items-center justify-center text-on-surface-variant opacity-20">
                      <svg className="w-16 h-16" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                      </svg>
                    </div>
                  )}
                  <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to top, rgba(5,20,36,0.4) 0%, transparent 50%)' }} />
                </div>

                {/* Content */}
                <div className="relative p-[32px]">
                  <h3 className="font-display text-xl font-bold text-on-surface tracking-tight">{member.name}</h3>
                  <p className="text-secondary text-sm font-semibold mb-[12px] label-caps tracking-normal normal-case">{member.role}</p>
                  <p className="text-on-surface-variant text-sm leading-relaxed mb-[20px] opacity-80">{member.focus}</p>

                  {member.qualifications && member.qualifications.length > 0 && (
                    <div className="border-t border-outline-variant/30 pt-[20px]">
                      <p className="label-caps text-on-surface-variant opacity-40 text-[10px] mb-[12px]">Credentials</p>
                      <ul className="space-y-[8px]">
                        {member.qualifications.slice(0, 3).map((q, i) => (
                          <li key={i} className="flex items-start gap-[8px] text-[11px] text-on-surface-variant opacity-60">
                            <span className="text-secondary/40 mt-0.5 shrink-0">—</span>
                            <span>{q}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Hover overlay for clickable card */}
                {isCraig && (
                  <div className="absolute inset-0 flex items-center justify-center bg-[#ed5c2c]/0 group-hover:bg-[#ed5c2c]/5 transition-all duration-300 pointer-events-none">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#ed5c2c] text-[#051424] text-sm font-semibold rounded-[12px]">
                        View Profile
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </div>
                  </div>
                )}
              </div>
            )

            return isCraig ? (
              <Link key={index} href="/coaches/craig-stuart" className="block">
                {card}
              </Link>
            ) : (
              <div key={index}>{card}</div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
