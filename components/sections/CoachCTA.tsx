import Link from 'next/link'
import { Mail, Phone } from 'lucide-react'

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
            <Mail className="w-5 h-5 text-secondary" strokeWidth={1.5} />
            <span>craig@apexcoaching.co.za</span>
          </div>
          <div className="flex items-center gap-3 text-on-surface-variant">
            <Phone className="w-5 h-5 text-secondary" strokeWidth={1.5} />
            <span>+27 73 316 7105</span>
          </div>
        </div>

        <Link
          href={`/contact?coach=${coachId}`}
          className="inline-flex items-center px-8 py-4 bg-secondary text-on-primary text-[16px] leading-[24px] font-semibold rounded-[12px] transition-all duration-200 hover:bg-secondary-container focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
        >
          Schedule a Consultation
        </Link>
      </div>
    </section>
  )
}
