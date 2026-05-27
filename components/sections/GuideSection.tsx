import { siteContent } from '../../lib/data'

export default function GuideSection() {
  const { guideSection } = siteContent

  return (
    <section className="py-24 md:py-32 lg:py-40 bg-[#051424]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-center mb-6">
          <span className="label-caps text-secondary font-semibold">OUR GUIDE</span>
        </div>

        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-on-surface text-center tracking-tight mb-8 max-w-3xl mx-auto">
          {guideSection.headline}
        </h2>

        <div className="max-w-2xl mx-auto space-y-5 text-center">
          <p className="text-on-surface-variant text-[16px] leading-[26px]">
            {guideSection.description}
          </p>
        </div>
      </div>
    </section>
  )
}