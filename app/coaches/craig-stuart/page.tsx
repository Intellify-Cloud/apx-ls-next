import Image from 'next/image'
import Link from 'next/link'
import { siteContent } from '../../../lib/data'
import CoachHero from '../../../components/sections/CoachHero'
import Coach2TextColumnSection from '../../../components/sections/Coach2TextColumnSection'
import CoachCTA from '../../../components/sections/CoachCTA'
import Coach3Card from '../../../components/sections/Coach3Card'
import ClientsSection from '../../../components/sections/ClientsSection'
import PersonJsonLd from '../../../components/PersonJsonLd'
import { MessageSquare } from 'lucide-react'

export const metadata = {
  title: {
    absolute: 'Craig Stuart | Executive Coach | Apex Leadership Specialists',
  },
  description: 'Craig Stuart is an executive coach passionate about helping individuals and teams unlock their potential through increased self-awareness, emotional intelligence, and improved thinking.',
}

export default function CraigStuartPage() {
  const { team, clients, testimonials } = siteContent
  const craig = team.people.find(p => p.name === 'Craig Stuart')!

  // Filter testimonials that mention Craig
  const craigTestimonials = testimonials.people.filter(t =>
    t.testimony.toLowerCase().includes('craig') ||
    t.name.toLowerCase().includes('craig')
  )

  // Parse the howIHelp text into intro and bullet points
  const howIHelpText = craig.howIHelp || ''
  const parts = howIHelpText.split('\n\n')
  const introPart = parts[0] || ''
  
  // Extract bullet points from the section about "people who benefit"
  const bulletSection = parts.slice(1).join('\n\n')
  const bulletPoints = bulletSection
    .split('\n')
    .map(line => line.replace(/^[•\-\*\s]+/, '').trim())
    .filter(line => line.length > 0 && !line.toLowerCase().includes('people who benefit'))

  return (
    <>
      <PersonJsonLd
        name="Craig Stuart"
        jobTitle="Executive Coach"
        description={craig.focus}
        image="https://apexleadership.co.za/assets/team/craig-stuart.png"
        url="https://apexleadership.co.za/coaches/craig-stuart"
      />

      <CoachHero
        name="Craig Stuart"
        title="Self-Leadership & Relational Coach"
        description={craig.focus || ''}
        cardDescription="Driven and authentic, Craig helps teams unlock potential through self-awareness."
        image="/assets/team/craig-stuart.png"
        imageAlt="Craig Stuart, executive coach in South Africa"
        coachId="craig-stuart"
      />

      <Coach2TextColumnSection
        title="About Craig"
        text={craig.aboutCraig || ''}
        qualifications={craig.qualifications || []}
        image={craig.image || ''}
        imageAlt="Craig Stuart, executive coach in South Africa"
      />

       <Coach3Card items={craig.whatIDo || []} />

        {/* Testimonials Section */}
        <section className="relative overflow-hidden">
          {/* Background */}
          <div
            className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url("/assets/hero/hero-bw.jpg")',
              backgroundAttachment: 'fixed',
              willChange: 'transform'
            }}
          />
          <div className="absolute inset-0 bg-[rgba(10,10,15,0.7)]" />

          <div className="relative py-[120px] max-w-6xl mx-auto px-6 lg:px-12 z-10">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px pointer-events-none" style={{ background: 'linear-gradient(to right, transparent, var(--secondary), transparent)', opacity: 0.2 }} />

            <div className="flex items-center justify-center mb-6">
              <span className="label-caps text-[#ed5c2c]">Testimonials</span>
            </div>

            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center tracking-tight mb-16 max-w-2xl mx-auto">
              What Clients Say About Craig
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {craigTestimonials.slice(0, 6).map((testimonial, index) => (
                <div
                  key={index}
                  className="group -translate-y-1 p-[40px] rounded-lg border border-white/[0.12] shadow-glow-sm transition-colors duration-300 hover:border-secondary/35 cursor-default min-w-[280px] glass-card"
                  style={{ background: 'rgba(18,33,49,0.5)', backdropFilter: 'blur(8px)' }}
                >
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center text-[#ed5c2c] mb-6 transition-colors duration-300 group-hover:bg-secondary/20">
                    <MessageSquare className="w-6 h-6 stroke-[1.5] text-[#ed5c2c]" />
                  </div>

                  {/* Testimonial body */}
                  <p className="text-zinc-400 text-base leading-relaxed mb-6 italic">
                    "{testimonial.testimony}"
                  </p>

                  {/* Author info */}
                  <div className="mt-auto pt-6 border-t border-white/10">
                    <p className="font-display text-xl font-bold text-white uppercase tracking-tight mb-1">
                      {testimonial.name}
                    </p>
                    <p className="text-[#ed5c2c] text-xs font-semibold uppercase tracking-wider">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

       <ClientsSection />

       <CoachCTA coachId="craig-stuart" />
    </>
  )
}
