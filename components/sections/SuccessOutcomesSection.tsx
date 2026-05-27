import { siteContent } from '../../lib/data'

export default function SuccessOutcomesSection() {
  const { successOutcomes } = siteContent

  return (
    <section className="py-24 md:py-32 lg:py-40 bg-[#051424]">
      <div className="max-w-[1000px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-center mb-6">
          <span className="label-caps text-secondary font-semibold">SUCCESS OUTCOMES</span>
        </div>

        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-on-surface text-center tracking-tight mb-8 max-w-3xl mx-auto">
          {successOutcomes.headline}
        </h2>

        <p className="text-[16px] leading-[26px] text-on-surface-variant text-center max-w-2xl mx-auto">
          {successOutcomes.description}
        </p>
      </div>
    </section>
  )
}