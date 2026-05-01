import Image from 'next/image'
import Link from 'next/link'
import { siteContent } from '../../../lib/data'

export const metadata = {
  title: 'Craig Stuart | Executive Coach | Apex Leadership Specialists',
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
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src="/assets/team/craig-stuart.png"
            alt="Craig Stuart - Executive Coach"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#051424] via-[#051424]/90 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#051424] via-transparent to-[#051424]/30" />
        </div>

        {/* Ambient accent */}
        <div
          className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(237,92,44,0.06) 0%, transparent 70%)', filter: 'blur(40px)' }}
          aria-hidden="true"
        />

        {/* Content */}
        <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-12 w-full">
          <div className="max-w-2xl">
            {/* Back link */}
            <Link
              href="/#team"
              className="inline-flex items-center gap-2 text-zinc-400 hover:text-[#ed5c2c] transition-colors mb-8 font-mono text-xs uppercase tracking-wider"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Coaches
            </Link>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#ed5c2c]/20 bg-[#ed5c2c]/10 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ed5c2c] animate-pulse" aria-hidden="true" />
              <span className="font-mono text-xs text-[#ed5c2c] tracking-widest uppercase">Executive Coach</span>
            </div>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-6 uppercase">
              {craig.name}
            </h1>

            <p className="text-[#ed5c2c] text-lg font-semibold mb-6 font-mono tracking-wide uppercase">
              Executive Coach
            </p>

            <p className="text-zinc-300 text-lg leading-relaxed max-w-xl mb-10">
              {craig.focus}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact?coach=craig-stuart"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#ed5c2c] text-[#051424] font-semibold rounded-[12px] transition-all duration-200 hover:bg-[#dd5128] hover:shadow-[0_0_30px_rgba(237,92,44,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ed5c2c]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#051424]"
              >
                Book a Session
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-white font-medium rounded-[12px] transition-all duration-200 hover:bg-white/5 hover:border-white/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ed5c2c]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#051424]"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-[120px] bg-surface-container-low relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px pointer-events-none" style={{ background: 'linear-gradient(to right, transparent, var(--secondary), transparent)', opacity: 0.2 }} />

        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-center mb-6">
            <span className="label-caps text-secondary">About Craig</span>
          </div>

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-on-surface text-center tracking-tight mb-16 max-w-2xl mx-auto">
            A Journey of Authentic Leadership
          </h2>

          {/* Content layout with image */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
            {/* Left: Image */}
            <div className="relative aspect-square rounded-2xl overflow-hidden border border-outline-variant/30" style={{ background: 'rgba(18,33,49,0.5)', backdropFilter: 'blur(8px)' }}>
              <Image
                src="/assets/team/craig-stuart.png"
                alt="Craig Stuart"
                fill
                className="object-cover"
              />
            </div>

            {/* Right: Bio */}
            <div className="flex flex-col justify-center">
              <p className="text-on-surface-variant text-base leading-relaxed mb-6 opacity-90 whitespace-pre-line">
                {craig.aboutCraig}
              </p>

              {/* Credentials */}
              <div className="mt-10 pt-8 border-t border-outline-variant/30">
                <h3 className="font-display text-xl font-bold text-on-surface mb-6">Credentials & Qualifications</h3>
                <ul className="space-y-4">
                  {craig.qualifications?.map((q, i) => (
                    <li key={i} className="flex items-start gap-3 text-on-surface-variant">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2.5 shrink-0" />
                      {q}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How I Can Help Section */}
      <section className="relative overflow-hidden py-24 md:py-32 lg:py-40">
        {/* Background */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(5,20,36,0.95) 0%, rgba(10,10,15,0.9) 100%)'
          }}
        />
        <div
          className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(237,92,44,0.04) 0%, transparent 70%)', filter: 'blur(60px)' }}
          aria-hidden="true"
        />

        <div className="relative max-w-6xl mx-auto px-6 lg:px-12 z-10">
          <div className="flex items-center justify-center mb-6">
            <span className="label-caps text-secondary">How I Can Help</span>
          </div>

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center tracking-tight mb-16 max-w-2xl mx-auto">
            Unlock Your Leadership Potential
          </h2>

          {/* Intro paragraph */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-on-surface-variant text-lg leading-relaxed whitespace-pre-line">
              {introPart}
            </p>
          </div>

          {/* Benefits/Bullet points as cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {bulletPoints.map((point, index) => (
              <div
                key={index}
                className="group p-8 bg-[#0A1A2F]/40 backdrop-blur-sm rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg glass-card"
                style={{
                  background: 'linear-gradient(135deg, rgba(10,26,47,0.4) 0%, rgba(10,10,15,0.6) 100%)',
                  backdropFilter: 'blur(12px)'
                }}
              >
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-white mb-5 transition-colors duration-300 group-hover:bg-[#dd5128]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-white text-base leading-relaxed">
                  {point}
                </p>
              </div>
            ))}
          </div>

          {/* Benefits/Bullet points as cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {bulletPoints.map((point, index) => (
              <div
                key={index}
                className="group p-8 bg-[#0A1A2F]/40 backdrop-blur-sm rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{ background: 'linear-gradient(135deg, rgba(10,26,47,0.4) 0%, rgba(10,10,15,0.6) 100%)', backdropFilter: 'blur(12px)' }}
              >
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-white mb-5 transition-colors duration-300 group-hover:bg-[#dd5128]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-white text-base leading-relaxed">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What I Do Section */}
      <section id="services" className="py-[120px] bg-[#051424] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(ellipse, rgba(237,92,44,0.03) 0%, transparent 70%)', filter: 'blur(60px)' }} />

        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-center mb-6">
            <span className="label-caps text-[#ed5c2c]">What I Do</span>
          </div>

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center tracking-tight mb-4 max-w-2xl mx-auto">
            My Approach
          </h2>
          <p className="text-zinc-400 text-center mb-[80px] max-w-[800px] mx-auto body-lg">
            Understanding. Strengthening. Unlocking.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[32px] max-w-4xl mx-auto">
            {craig.whatIDo?.map((item, index) => (
              <div
                key={index}
                className="group p-[40px] rounded-lg border border-outline-variant/20 transition-all duration-300 hover:border-secondary/30 hover:scale-[1.01] hover:shadow-glow-sm"
                style={{ background: 'rgba(18,33,49,0.5)', backdropFilter: 'blur(8px)' }}
              >
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary mb-[24px] transition-colors duration-300 group-hover:bg-secondary/20">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    {index === 0 && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                    )}
                    {index === 1 && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 012.437 0 3.42 3.42 0 001.946.806 3.42 3.42 0 012.437 0 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-2.437 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-2.437 0 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-2.437 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-2.437 0" />
                    )}
                    {index === 2 && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09M18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                    )}
                  </svg>
                </div>

                <span className="label-caps text-on-surface-variant opacity-40 text-[10px]">{(index + 1).toString().padStart(2, '0')}</span>

                <h3 className="font-display text-xl font-bold text-on-surface mt-4 mb-3 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
                className="group p-8 bg-[#0A1A2F]/40 backdrop-blur-sm rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg glass-card"
                style={{
                  background: 'linear-gradient(135deg, rgba(10,26,47,0.4) 0%, rgba(10,10,15,0.6) 100%)',
                  backdropFilter: 'blur(12px)'
                }}
              >
                {/* Icon */}
                <div className="w-10 h-10 bg-[#ed5c2c] flex items-center justify-center text-white mb-6">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M14.017 21v-7.03a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v7.03a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1zm4 0v-7.03a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v7.03a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1z" />
                  </svg>
                </div>

                <p className="text-zinc-400 text-base leading-relaxed mb-6 italic">
                  "{testimonial.testimony}"
                </p>

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

      {/* Trusted By Section */}
      <section className="py-[96px] md:py-[128px] bg-surface-container-low relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-on-surface text-center tracking-tight mb-[48px] uppercase">
            Trusted by Leading Organisations
          </h2>

          <div className="relative">
            <div className="flex animate-scroll space-x-6">
              {[...clients.list, ...clients.list].map((client, index) => (
                <a
                  key={index}
                  href={client.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${client.title}`}
                  className="flex-shrink-0 bg-surface-container rounded-lg border border-outline-variant/30 shadow-sm flex items-center justify-center w-[160px] md:w-[200px] h-[100px] md:h-[120px] p-4 hover:border-secondary/30 transition-all duration-300"
                >
                  {client.logo ? (
                    <Image
                      src={client.logo}
                      alt={client.title}
                      width={120}
                      height={60}
                      className="object-contain"
                    />
                  ) : (
                    <span className="text-on-surface-variant font-medium text-sm">{client.title}</span>
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 md:py-32 relative overflow-hidden bg-surface">
        {/* Background gradient */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at center, rgba(237,92,44,0.08) 0%, transparent 60%)' }}
          aria-hidden="true"
        />

        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-on-surface tracking-tight mb-6">
            Ready to Transform Your Leadership?
          </h2>
          <p className="text-on-surface-variant text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Take the first step towards unlocking your full potential. Let&apos;s connect and explore how coaching can help you achieve your goals.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <div className="flex items-center gap-3 text-on-surface-variant">
              <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 0 1 0 1.953l-7.108 4.062A1.125 1.125 0 0 1 3 16.81V8.688Z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.5 4.5V5.999M19.5 7.5l-4.5-4.5M19.5 7.5l-4.5 4.5M19.5 7.5l4.5 4.5M19.5 7.5l4.5-4.5" />
              </svg>
              <span>craig@apexcoaching.co.za</span>
            </div>
            <div className="flex items-center gap-3 text-on-surface-variant">
              <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
              <span>+27 73 316 7105</span>
            </div>
          </div>

          <Link
            href="/contact?coach=craig-stuart"
            className="inline-flex items-center px-8 py-4 bg-secondary text-on-primary font-semibold rounded-[12px] transition-all duration-200 hover:bg-secondary-container focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </>
  )
}
