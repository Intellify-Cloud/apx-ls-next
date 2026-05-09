import Link from 'next/link'

interface CoachCTAProps {
  coachId: string
  title?: string
  description?: string
}

export default function CoachCTA({
  coachId,
  title = "Ready to Transform Your Leadership?",
  description = "Take the first step towards unlocking your full potential. Let's connect and explore how coaching can help you achieve your goals."
}: CoachCTAProps) {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-surface">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-on-surface tracking-tight mb-6">
          {title}
        </h2>
        <p className="text-on-surface-variant text-lg leading-relaxed max-w-2xl mx-auto mb-10">
          {description}
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
          href={`/contact?coach=${coachId}`}
          className="inline-flex items-center px-8 py-4 bg-secondary text-on-primary font-semibold rounded-[12px] transition-all duration-200 hover:bg-secondary-container focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
        >
          Schedule a Consultation
        </Link>
      </div>
    </section>
  )
}
