import { siteContent } from '../../lib/data'

export default function ProblemSection() {
  const { problemSection } = siteContent

  return (
    <section className="py-24 md:py-32 lg:py-40 bg-[#F8F8F6]">
      <div className="max-w-[1000px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-center mb-6">
          <span className="label-caps text-secondary font-semibold">THE PROBLEM</span>
        </div>

        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-[rgb(12,26,55)] text-center tracking-tight mb-8 max-w-3xl mx-auto">
          {problemSection.headline}
        </h2>

        <div className="max-w-2xl mx-auto space-y-5 text-center">
          {problemSection.description.map((para, index) => (
            <p key={index} className="text-[16px] leading-[26px] text-[rgba(12,26,55,0.7)]">
              {para}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}