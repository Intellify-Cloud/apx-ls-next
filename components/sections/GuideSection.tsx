import { siteContent } from '../../lib/data'

export default function GuideSection() {
  const { guideSection } = siteContent

  return (
    <section className="py-20 md:py-24 lg:py-32 bg-[#051424]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-center mb-4">
          <span className="label-caps text-secondary font-semibold">OUR GUIDE</span>
        </div>

        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-on-surface text-center tracking-tight mb-4 max-w-[760px] mx-auto">
          {guideSection.headline}
        </h2>

        <div className="max-w-[680px] mx-auto space-y-3">
          <p className="text-[14px] leading-[22px] text-on-surface-variant text-center">
            {guideSection.description}
          </p>
        </div>
      </div>
    </section>
  )
}
