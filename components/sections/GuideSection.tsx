import { siteContent } from '../../lib/data'

export default function GuideSection() {
  const { guideSection } = siteContent
  const paragraphs = [
    "We understand what's at stake. Leadership development isn't a nice-to-have; it's the difference between teams that thrive and teams that just survive.",
    "That's why we combine expert coaching, evidence-based methodologies, and deep organisational experience to help your leaders grow with confidence.",
    "For years, we've worked with individuals and organisations across Southern Africa. From high-growth businesses to established institutions, helping people reach their true potential.",
  ]

  return (
    <section className="py-20 md:py-24 lg:py-32 bg-[#051424]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-center mb-4">
          <span className="label-caps text-secondary font-semibold">OUR GUIDE</span>
        </div>

        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-on-surface text-center tracking-tight mb-4 max-w-[850px] mx-auto">
          {guideSection.headline}
        </h2>

        <div className="max-w-[850px] mx-auto space-y-3">
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="text-[16px] leading-[26px] text-on-surface-variant text-center">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}

