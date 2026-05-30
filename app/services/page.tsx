import type { Metadata } from 'next'
import Link from 'next/link'
import { BookMarked, BookOpen, Lightbulb, Mic, User, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: {
    absolute: 'Leadership Coaching & Development Services | Apex Leadership Specialists',
  },
  description: 'Explore leadership development services including executive coaching, facilitated learning, people development strategy, keynote talks, and more.',
}

const services = [
  {
    title: 'Leadership and Resilience Coaching',
    icon: User,
    intro: 'Working one-on-one or in focused groups, we help individuals develop their leadership skills, enhance their performance, and work more effectively as part of their teams.',
    body: 'This is the foundation of what we do. Using evidence-based tools, including the 5 Lens Enneagram and brain-based coaching methodologies, we help leaders understand themselves more deeply, manage their responses under pressure, and show up with greater intention.',
    fit: [
      'You want to become a more effective, self-aware leader.',
      "Your team is performing, but you know there's more potential to unlock.",
      "You're navigating a significant transition, a new role, a growing team, or a period of change.",
      'You want a structured, confidential space to think, reflect, and grow.',
    ],
    cta: 'Find out more about coaching',
  },
  {
    title: 'Facilitated Learning',
    icon: BookOpen,
    intro: 'Engaging with leadership groups to help them build interpersonal skills and techniques to enhance team cohesion and effectiveness.',
    body: 'Facilitated learning moves beyond the traditional workshop format. Our sessions are interactive, challenge-based, and grounded in real team dynamics. Leaders leave with practical tools they can apply immediately, and a shared language for how they work together.',
    fit: [
      'Your leadership team is technically skilled but struggles to function as a unit.',
      "You're preparing for a strategic shift and need your team aligned and ready.",
      'Communication, trust, or accountability have become friction points.',
      'You want a skilled external facilitator to hold the space for a difficult conversation.',
    ],
    cta: 'Speak to us about facilitated learning',
  },
  {
    title: 'People Development Strategy',
    icon: Lightbulb,
    intro: 'Collaborating with leadership to put programmes and processes in place that support corporate culture, talent development, and succession planning.',
    body: "Great organisations don't happen by accident. Behind every high-performing culture is a deliberate strategy for developing people. We work alongside your leadership team to design and implement that strategy, one that reflects your values, your goals, and the realities of your environment.",
    fit: [
      'You want to build a culture of growth and continuous development.',
      "You're thinking about succession and need a pipeline of future leaders.",
      'Your people strategy feels reactive rather than intentional.',
      'You want to retain your best talent and give them a reason to stay and grow.',
    ],
    cta: 'Talk to us about your strategy',
  },
  {
    title: 'Keynote Talks',
    icon: Mic,
    intro: 'Sharing insights from the Global South to inspire and drive meaningful change among international audiences.',
    body: "Our keynote talks draw on real stories, cross-cultural insight, and the kind of hard-won perspective that only comes from years working across Southern Africa's most dynamic organisations. Whether you're hosting a leadership conference, a corporate summit, or an internal strategy day, we bring energy, substance, and stories that land.",
    fit: [
      'Leading through uncertainty: lessons from the Global South.',
      'What great coaching teaches us about great leadership.',
      'The self-aware leader: how knowing yourself changes how you lead others.',
      'Building resilience in high-performance teams.',
    ],
    cta: 'Enquire about a keynote',
  },
  {
    title: "A Hero's Story",
    icon: Users,
    intro: 'Providing a space for inspiring individuals to share their stories of personal achievement or overcoming adversity to help motivate teams.',
    body: "Nothing moves people like a real story. A Hero's Story is a curated storytelling experience designed to inspire, reconnect, and motivate your team. We work with extraordinary individuals, people who have overcome adversity, defied expectations, or achieved something remarkable, and help them share that story in a way that resonates deeply with your team.",
    fit: [
      'Company conferences and year-end functions.',
      'Leadership off-sites and culture days.',
      'Moments of transition, challenge, or celebration.',
    ],
    cta: 'Find out more',
  },
]

const methodology = [
  {
    title: '5 Lens Enneagram',
    description: 'A data-driven personality framework that gives leaders deep insight into their patterns of thinking, feeling, and behaving.',
  },
  {
    title: 'Brain-Based Coaching',
    description: 'Grounded in neuroscience, this approach helps leaders understand how to change behaviour and build new habits that stick.',
  },
  {
    title: 'Comensa Standards',
    description: 'All our coaches operate within the ethical and professional framework set by Coaches and Mentors of South Africa.',
  },
]

export default function ServicesPage() {
  return (
    <main className="bg-[#051424] pt-20">
      <section className="py-20 md:py-24 lg:py-32 bg-[#051424]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 text-center">
          <div className="flex items-center justify-center mb-4">
            <span className="label-caps text-secondary font-semibold">Our Services</span>
          </div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-on-surface tracking-tight mb-6 max-w-[850px] mx-auto">
            What We Offer, and What It Does for You
          </h1>

          <p className="font-normal text-[16px] leading-[26px] text-on-surface-variant max-w-[850px] mx-auto">
            Every service we offer is designed with one goal in mind: to help your people grow into the leaders your organisation needs. We work across individuals, teams, and executive groups, and every engagement is tailored to the specific context, challenge, and goals at hand.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-24 lg:py-32 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 space-y-8">
          {services.map((service) => {
            const Icon = service.icon

            return (
              <article
                key={service.title}
                className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6 lg:gap-8 -translate-y-1 p-6 md:p-8 bg-white border border-[rgba(12,26,55,0.12)] rounded-lg shadow-lg transition-colors duration-300 hover:border-secondary/35"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center text-orange-600 mb-5">
                    <Icon className="w-6 h-6" strokeWidth={1.5} />
                  </div>
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-[rgb(12,26,55)] tracking-tight">
                    {service.title}
                  </h2>
                </div>

                <div>
                  <p className="font-inter text-[16px] leading-[26px] text-[rgb(12,26,55)] font-medium mb-4">
                    {service.intro}
                  </p>
                  <p className="font-inter text-[16px] leading-[26px] text-[rgba(12,26,55,0.7)] mb-6">
                    {service.body}
                  </p>

                  <h3 className="font-manrope font-bold text-[18px] leading-[25px] text-[rgb(12,26,55)] mb-3">
                    This is for you if:
                  </h3>
                  <ul className="space-y-3 mb-6">
                    {service.fit.map((item) => (
                      <li key={item} className="flex gap-3 font-inter text-[16px] leading-[26px] text-[rgba(12,26,55,0.7)]">
                        <span className="mt-2 h-2 w-2 rounded-full bg-secondary shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className="inline-flex items-center text-secondary text-[16px] leading-[24px] font-semibold hover:text-secondary-container transition-colors"
                  >
                    {service.cta}
                  </Link>
                </div>
              </article>
            )
          })}
        </div>
      </section>

      <section className="py-20 md:py-24 lg:py-32 bg-[#F8F8F6]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-center mb-4">
            <span className="label-caps text-secondary font-semibold">How We Work</span>
          </div>

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-[rgb(12,26,55)] text-center tracking-tight mb-4 max-w-[850px] mx-auto">
            We don't use a one-size-fits-all approach.
          </h2>

          <p className="text-[16px] leading-[26px] text-[rgba(12,26,55,0.7)] text-center max-w-[850px] mx-auto mb-12">
            Every engagement begins with a conversation about what you need, who you are, and what success looks like for you. From there, we draw on a range of tools and frameworks, always choosing what serves the goal rather than what's easiest to deliver.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {methodology.map((item) => (
              <div
                key={item.title}
                className="flex flex-col items-center text-center -translate-y-1 p-6 bg-white border border-[rgba(12,26,55,0.12)] rounded-lg shadow-lg transition-colors duration-300 hover:border-secondary/35"
              >
                <BookMarked className="w-6 h-6 text-orange-600 mb-4" strokeWidth={1.5} />
                <h3 className="font-manrope font-bold text-[18px] leading-[25px] text-[rgb(12,26,55)] mb-1">
                  {item.title}
                </h3>
                <p className="font-inter font-normal text-[14px] leading-[23px] text-[rgba(12,26,55,0.7)]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 lg:py-32 bg-[#051424] text-center">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-on-surface tracking-tight mb-8 max-w-[850px] mx-auto">
            Ready to choose the right support for your leaders?
          </h2>
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
