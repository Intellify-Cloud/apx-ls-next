import Image from 'next/image'
import { siteContent } from '../../lib/data'

export default function TeamSection() {
  const { team } = siteContent

  return (
    <section id="team" className="py-24 md:py-32 lg:py-40 bg-[#12121A] relative overflow-hidden">

      {/* Top edge line */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px pointer-events-none"
        style={{ background: 'linear-gradient(to right, transparent, rgba(245,158,11,0.15), transparent)' }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-6 lg:px-12">

        {/* Section label */}
        <div className="flex items-center justify-center mb-6">
          <span className="font-mono text-xs text-amber-500 tracking-widest uppercase">The Coaches</span>
        </div>

        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center tracking-tight mb-6 max-w-2xl mx-auto">
          {team.title}
        </h2>
        <p className="text-zinc-400 text-center max-w-2xl mx-auto mb-16 leading-relaxed text-sm md:text-base">
          {team.description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.people.map((member, index) => (
            <div
              key={index}
              className="group rounded-xl overflow-hidden border border-white/[0.08] transition-all duration-300 hover:border-white/[0.15] hover:shadow-lg hover:scale-[1.02]"
              style={{ background: 'rgba(26, 26, 36, 0.6)', backdropFilter: 'blur(8px)' }}
            >
              {/* Photo */}
              <div className="aspect-square bg-[#1A1A24] relative overflow-hidden">
                {member.image ? (
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-zinc-600">
                    <svg className="w-16 h-16" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                  </div>
                )}
                {/* Subtle gradient overlay on image */}
                <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to top, rgba(26,26,36,0.4) 0%, transparent 50%)' }} />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-lg font-semibold text-white tracking-tight">{member.name}</h3>
                <p className="text-amber-400 text-sm font-medium mb-3">{member.role}</p>
                <p className="text-zinc-400 text-sm leading-relaxed mb-4">{member.focus}</p>

                {member.qualifications && member.qualifications.length > 0 && (
                  <div className="border-t border-white/[0.06] pt-4">
                    <p className="font-mono text-xs text-zinc-600 tracking-widest uppercase mb-2.5">Credentials</p>
                    <ul className="space-y-1.5">
                      {member.qualifications.slice(0, 3).map((q, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-zinc-500">
                          <span className="text-amber-500/60 mt-0.5 shrink-0">—</span>
                          <span>{q}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
