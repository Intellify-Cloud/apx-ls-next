// TeamLoop Component - React/Next.js Version
// Loops through consultants/coaches array to generate repeated HTML cards
// Supports: limit, offset, reversed props

import { siteContent } from '../../lib/data'

interface TeamMember {
  name: string
  role: string
  image?: string
  focus?: string
  howIHelp?: string
  whatIDo?: Array<{ title: string; description: string }>
  aboutCraig?: string
  qualifications?: string[]
  experience?: string[]
}

interface TeamLoopProps {
  limit?: number
  offset?: number
  reversed?: boolean
  showHeader?: boolean
  people?: TeamMember[]
}

export function TeamLoop({
  limit,
  offset = 0,
  reversed = false,
  showHeader = true,
  people = siteContent.team.people
}: TeamLoopProps) {
  
  // Handle empty data
  if (!people || people.length === 0) {
    return (
      <section className="team-loop-section">
        <div className="max-w-7xl mx-auto px-6 py-16 text-center">
          <p className="text-on-surface/50">No team members found.</p>
        </div>
      </section>
    )
  }

  // Apply modifiers
  let team = [...people]

  if (offset > 0) {
    team = team.slice(offset)
  }

  if (limit) {
    team = team.slice(0, limit)
  }

  if (reversed) {
    team = team.reverse()
  }

  return (
    <section className="team-loop-section">
      <div className="max-w-7xl mx-auto px-6 py-16">
        
        {/* Section Header */}
        {showHeader && (
          <div className="text-center mb-16">
            <span className="label-caps text-secondary tracking-widest mb-4 block">
              Our Team
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-on-surface mb-6">
              {siteContent.team.title}
            </h2>
            <p className="text-on-surface-variant text-lg max-w-3xl mx-auto">
              {siteContent.team.description}
            </p>
          </div>
        )}

        {/* Cards Grid */}
        <div className="team-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {team.map((coach, index) => (
            <article
              key={`${coach.name}-${index}`}
              className="coach-card group bg-surface-container-low rounded-2xl overflow-hidden border border-outline-variant/20 hover:border-outline-variant/40 transition-all duration-300 hover:shadow-xl"
            >
              {/* Card Image */}
              <div className="relative h-64 bg-gradient-to-br from-primary/20 to-secondary/20 overflow-hidden">
                {coach.image ? (
                  <img
                    src={coach.image}
                    alt={`${coach.name} - ${coach.role}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="font-display text-6xl text-on-surface/20">
                      {coach.name.charAt(0)}
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#051424]/80 to-transparent"></div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                
                {/* Name & Role */}
                <div className="mb-4">
                  <h3 className="font-display text-xl font-bold text-on-surface mb-1">
                    {coach.name}
                  </h3>
                  <p className="text-sm text-secondary font-medium">
                    {coach.role}
                  </p>
                </div>

                {/* Focus/About */}
                {(coach.focus || coach.howIHelp || coach.aboutCraig) && (
                  <p className="text-on-surface-variant text-sm leading-relaxed mb-4 line-clamp-3">
                    {coach.focus || 
                     coach.howIHelp?.replace(/<[^>]*>/g, '').substring(0, 120) + '...' ||
                     coach.aboutCraig?.replace(/<[^>]*>/g, '').substring(0, 120) + '...' ||
                     'Dedicated to helping individuals and teams unlock their full potential.'}
                  </p>
                )}

                {/* Qualifications */}
                {(coach.qualifications || coach.whatIDo) && (
                  <div className="coach-qualifications mb-4">
                    <ul className="space-y-2">
                      {coach.qualifications?.slice(0, 3).map((qual, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-on-surface/70">
                          <span className="w-1 h-1 rounded-full bg-secondary mt-2 flex-shrink-0"></span>
                          <span>{qual}</span>
                        </li>
                      ))}
                      {coach.whatIDo?.slice(0, 2).map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-on-surface/70">
                          <span className="w-1 h-1 rounded-full bg-secondary mt-2 flex-shrink-0"></span>
                          <span>{item.title}: {item.description}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* CTA Button */}
                <a
                  href={`/coaches/${coach.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="coach-cta inline-flex items-center gap-2 text-sm font-medium text-secondary hover:text-secondary/80 transition-colors"
                >
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </a>

              </div>
            </article>
          ))}
          
        </div>
      </div>
    </section>
  )
}

// Usage Examples:
// 
// <TeamLoop />                                    {/* All coaches */}
// <TeamLoop limit={3} />                          {/* First 3 coaches */}
// <TeamLoop limit={3} offset={2} />               {/* Skip 2, show 3 */}
// <TeamLoop limit={3} reversed={true} />          {/* Last 3 coaches */}
// <TeamLoop showHeader={false} />                 {/* No header */}
// <TeamLoop people={customArray} />               {/* Custom data */}
