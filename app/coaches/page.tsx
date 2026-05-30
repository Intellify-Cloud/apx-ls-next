import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, BadgeCheck } from 'lucide-react'
import { siteContent } from '../../lib/data'

export const metadata: Metadata = {
  title: {
    absolute: 'Meet Our Executive Coaches | Apex Leadership Specialists South Africa',
  },
  description: "Meet the Apex Leadership coaching team, a curated group of Southern Africa's top executive and life coaches. Find the right coach for your leadership journey.",
}

const coachProfileLinks: Record<string, string> = {
  'Craig Stuart': '/coaches/craig-stuart',
  'Celia Senekal': '/coaches/celia-senekal',
  'Julie Robinson': '/coaches/julie-robinson',
}

function displayName(name: string) {
  return name.replace('CÃ©lia', 'Celia')
}

export default function CoachesPage() {
  const coaches = siteContent.team.people

  return (
    <main className="bg-[#051424] pt-20">
      <section className="py-20 md:py-24 lg:py-32 bg-[#051424]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 text-center">
          <div className="flex items-center justify-center mb-4">
            <span className="label-caps text-secondary font-semibold">Meet the Coaches</span>
          </div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-on-surface tracking-tight mb-6 max-w-[850px] mx-auto">
            Find the Right Guide for Your Leadership Journey
          </h1>

          <div className="max-w-[850px] mx-auto space-y-5">
            <p className="font-inter font-normal text-[16px] leading-[26px] text-on-surface-variant">
              Unlocking your leadership potential requires the right coach. Someone who not only has the skills and credentials, but who genuinely connects with your style, your story, and where you want to go.
            </p>
            <p className="font-inter font-normal text-[16px] leading-[26px] text-on-surface-variant">
              We have curated a cohort of Southern Africa's top executive coaches and leadership coaches: passionate, skilled professionals who put client growth at the centre of everything they do.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 lg:py-32 bg-[#F8F8F6]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {coaches.map((coach) => {
              const name = displayName(coach.name)
              const profileHref = coachProfileLinks[name]

              return (
                <article
                  key={coach.name}
                  className="group flex flex-col overflow-hidden -translate-y-1 bg-white border border-[rgba(12,26,55,0.12)] rounded-lg shadow-lg transition-colors duration-300 hover:border-secondary/35"
                >
                  <div className="relative aspect-[4/3] bg-[#e8ecef]">
                    <Image
                      src={coach.image}
                      alt={`${name}, ${coach.role} at Apex Leadership Specialists in South Africa`}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover object-top"
                    />
                  </div>

                  <div className="flex flex-col flex-1 p-6">
                    <p className="label-caps text-secondary font-semibold mb-3">{coach.role}</p>
                    <h2 className="font-display text-2xl md:text-3xl font-bold text-[rgb(12,26,55)] tracking-tight mb-3">
                      {name}
                    </h2>
                    <p className="font-inter text-[16px] leading-[26px] text-[rgba(12,26,55,0.7)] mb-5">
                      {coach.focus}
                    </p>

                    <div className="mt-auto">
                      <h3 className="font-manrope font-bold text-[18px] leading-[25px] text-[rgb(12,26,55)] mb-3">
                        Qualifications & experience
                      </h3>
                      <ul className="space-y-3 mb-6">
                        {coach.qualifications.slice(0, 4).map((qualification) => (
                          <li
                            key={qualification}
                            className="flex gap-3 font-inter text-[14px] leading-[23px] text-[rgba(12,26,55,0.7)]"
                          >
                            <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-orange-600" strokeWidth={1.5} />
                            <span>{qualification}</span>
                          </li>
                        ))}
                      </ul>

                      <Link
                        href={profileHref || '/contact'}
                        className="inline-flex items-center gap-2 text-secondary text-[16px] leading-[24px] font-semibold hover:text-secondary-container transition-colors"
                      >
                        {profileHref ? 'View profile' : 'Start a conversation'}
                        <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
                      </Link>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 lg:py-32 bg-[#051424] text-center">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-center mb-4">
            <span className="label-caps text-secondary font-semibold">Coaching Chemistry</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-on-surface tracking-tight mb-5 max-w-[850px] mx-auto">
            We'll help you find the right match.
          </h2>
          <p className="font-inter text-[16px] leading-[26px] text-on-surface-variant max-w-[850px] mx-auto mb-8">
            Use the profiles above to get a sense of each coach, then reach out and we will help connect you with the right person through a coaching chemistry conversation.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-secondary text-white font-semibold text-[16px] leading-[24px] px-8 py-4 rounded-lg hover:bg-secondary-container transition-colors duration-200"
          >
            Schedule a Free Discovery Call
          </Link>
        </div>
      </section>
    </main>
  )
}
