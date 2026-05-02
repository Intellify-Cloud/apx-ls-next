import { siteContent } from '../../lib/data'

export interface ThreeRowTTextM3CardsBTextProps {
  heading?: string
  topText?: string
  bottomText?: string
  stats?: Array<{
    number: string
    label: string
  }>
}

export function ThreeRowTTextM3CardsBText({
  heading = siteContent.about.title,
  topText = siteContent.about.text,
  bottomText = siteContent.stats.bottomText,
  stats = siteContent.stats.items,
}: ThreeRowTTextM3CardsBTextProps) {
  return (
    <section className="w-full bg-[#ffffff]">
      <div className="max-w-[800px] mx-auto px-6 py-20 text-center">
        {/* Heading */}
        <h2 className="font-bold text-[42px] leading-[42px] text-[rgb(12,26,55)] uppercase mb-16">
          {heading}
        </h2>

        {/* Top text */}
        <p className="font-normal text-[16px] leading-[26px] text-[rgba(12,26,55,0.8)] mb-14 max-w-3xl mx-auto">
          {topText}
        </p>

        {/* Stats row - 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2 p-8 rounded-2xl bg-[#f1f5f9]"
            >
              <div className="font-bold text-[42px] leading-[42px] text-[rgb(12,26,55)]">
                {stat.number}
              </div>
              <div className="font-medium text-[14px] leading-[21px] text-[rgba(12,26,55,0.7)]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom text */}
        <p className="font-normal text-[16px] leading-[26px] text-[rgba(12,26,55,0.7)] max-w-2xl mx-auto">
          {bottomText}
        </p>
      </div>
    </section>
  )
}

export default ThreeRowTTextM3CardsBText
