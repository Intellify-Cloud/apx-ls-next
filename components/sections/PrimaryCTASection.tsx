import { siteContent } from '../../lib/data'
import Link from 'next/link'

export default function PrimaryCTASection() {
  const { primaryCTA } = siteContent

  return (
    <section className="py-20 md:py-24 lg:py-32 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 text-center">
        <div className="flex items-center justify-center mb-4">
          <span className="label-caps text-secondary font-semibold">GET STARTED</span>
        </div>

        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-[rgb(12,26,55)] tracking-tight mb-4 max-w-[760px] mx-auto">
          {primaryCTA.headline}
        </h2>

        <Link
          href="/contact"
          className="inline-flex items-center justify-center bg-secondary text-white font-semibold text-[16px] leading-[24px] px-8 py-4 rounded-lg hover:bg-secondary-container transition-colors duration-200"
        >
          {primaryCTA.buttonText}
        </Link>
      </div>
    </section>
  )
}
