import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Sparkles, UsersRound } from 'lucide-react'
import { siteContent } from '../../lib/data'

export default function TeamCompactSection() {
  const { team } = siteContent
  const featuredCoaches = team.people.slice(0, 5)

  return (
    <section id="team" className="relative overflow-hidden bg-surface-container-low py-20 md:py-24">
      <div
        className="absolute top-0 left-1/2 h-px w-full max-w-3xl -translate-x-1/2 pointer-events-none"
        style={{ background: 'linear-gradient(to right, transparent, #ed5c2c, transparent)', opacity: 0.2 }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-12">
        <div>
          <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
            <UsersRound className="h-5 w-5" strokeWidth={2} />
          </div>

          <span className="label-caps font-semibold text-secondary">{team.sectionTitle}</span>
          <h2 className="mt-4 max-w-[620px] font-display text-3xl font-bold tracking-tight text-on-surface md:text-4xl lg:text-5xl">
            Find the coach who fits the leader you are becoming.
          </h2>
          <p className="mt-5 max-w-[620px] text-[16px] leading-[26px] text-on-surface-variant">
            Our coaching network brings together seasoned specialists across executive coaching, behavioural change, team performance, and personal leadership.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/coaches"
              className="inline-flex items-center justify-center gap-2 rounded-[12px] bg-secondary px-6 py-3 text-[16px] font-semibold leading-[24px] text-[#051424] transition-all duration-200 hover:bg-secondary-container hover:shadow-amber-btn active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#051424]"
            >
              Meet the full team
              <ArrowRight className="h-4 w-4" strokeWidth={2.4} />
            </Link>
            <div className="inline-flex items-center gap-2 text-[14px] font-semibold leading-[22px] text-on-surface-variant">
              <Sparkles className="h-4 w-4 text-secondary" strokeWidth={2} />
              Chemistry matters. Choice helps.
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-5 lg:gap-5">
            {featuredCoaches.map((member, index) => (
              <Link
                key={member.name}
                href="/coaches"
                className={`group relative block overflow-hidden rounded-lg border border-white/[0.12] bg-[#071524] shadow-glow-sm transition-colors duration-300 hover:border-secondary/35 ${
                  index % 2 === 0 ? 'sm:translate-y-5' : ''
                }`}
                aria-label={`Meet ${member.name} on the coaches page`}
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(min-width: 1024px) 170px, (min-width: 640px) 20vw, 45vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-surface-container">
                      <span className="text-3xl font-bold text-on-surface-variant">{member.name.charAt(0)}</span>
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
