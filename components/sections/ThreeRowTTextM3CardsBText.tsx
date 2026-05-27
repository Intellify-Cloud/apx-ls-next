import { Award, Building2, MessageSquare } from 'lucide-react'
import { siteContent } from '../../lib/data'

export interface ThreeRowTTextM3CardsBTextProps {
  sectionTitle?: string
  heading?: string
  bodyText?: string
  closingText?: string
  items?: Array<{
    icon: string
    number: string
    label: string
  }>
}

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'Award':
      return <Award className="w-6 h-6 stroke-[1.5] text-[rgb(12,26,55)]" />
    case 'Building2':
      return <Building2 className="w-6 h-6 stroke-[1.5] text-[rgb(12,26,55)]" />
    case 'MessageSquare':
      return <MessageSquare className="w-6 h-6 stroke-[1.5] text-[rgb(12,26,55)]" />
    default:
      return <Award className="w-6 h-6 stroke-[1.5] text-[rgb(12,26,55)]" />
  }
}

export function ThreeRowTTextM3CardsBText({
  sectionTitle = siteContent.about.sectionTitle,
  heading = siteContent.about.title,
  bodyText = siteContent.about["top-text"],
  closingText = siteContent.about["bottom-text"],
  items = siteContent.about.statsChallenge.items,
}: ThreeRowTTextM3CardsBTextProps) {

  return (
    <section className="w-full bg-[#ffffff]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 py-20 text-center">
        
        {/* Section label */}
        <div className="flex items-center justify-center mb-6">
          <span className="label-caps text-secondary font-semibold">{sectionTitle}</span>
        </div>

        {/* Heading */}
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-[rgb(12,26,55)] text-center tracking-tight mb-4 max-w-[760px] mx-auto">
          {heading}
        </h2>

        {/* Body paragraph */}
        <p className="font-normal text-[16px] leading-[26px] text-[rgba(12,26,55,0.7)] mb-14 max-w-[680px] mx-auto">
          {bodyText}
        </p>

        {/* 3 Cards with icons, numbers, labels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-14">
          {items.map((item, index) => (
            <div
              key={index}
              className="group flex flex-col items-center gap-4 -translate-y-1 p-6 rounded-lg border border-[rgba(12,26,55,0.12)] shadow-lg transition-colors duration-300 hover:border-secondary/35 cursor-default bg-[#f1f5f9]"
            >
              <div className="w-14 h-14 rounded-2xl bg-[linear-gradient(to_bottom_right,rgba(221,224,229),#ede5e4)] flex items-center justify-center">
                {renderIcon(item.icon)}
              </div>
              <div className="font-bold text-[42px] leading-[42px] text-[rgb(12,26,55)]">
                {item.number}
              </div>
              <div className="font-medium text-[14px] leading-[21px] text-[rgba(12,26,55,0.7)]">
                {item.label}
              </div>
            </div>
          ))}
        </div>

        {/* Closing paragraph */}
        <p className="font-normal text-[16px] leading-[26px] text-[rgba(12,26,55,0.7)] max-w-[680px] mx-auto">
          {closingText}
        </p>
      </div>
    </section>
  )
}

export default ThreeRowTTextM3CardsBText
