import { Award, Building2, MessageSquare } from 'lucide-react'
import { siteContent } from '../../lib/data'

export interface ThreeRowTTextM3CardsBTextProps {
  sectionTitle?: string
  heading?: string
  topText?: string
  bottomText?: string
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
  topText = siteContent.about["top-text"],
  bottomText = siteContent.about["bottom-text"],
  items = siteContent.about.statsChallenge.items,
}: ThreeRowTTextM3CardsBTextProps) {

  return (
    <section className="w-full bg-[#ffffff]">
      <div className="max-w-[800px] mx-auto px-6 py-20 text-center">
        
         {/* Section label */}
         <div className="flex items-center justify-center mb-6">
           <span className="label-caps text-secondary font-semibold">{sectionTitle}</span>
         </div>

         {/* Heading */}
         <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-[rgb(12,26,55)] text-center tracking-tight mb-4 max-w-2xl mx-auto">
           {heading}
         </h2>

        {/* Top text */}
        {topText && (
          <p className="font-normal text-[16px] leading-[26px] text-[rgba(12,26,55,0.8)] mb-14 max-w-3xl mx-auto">
            {topText}
          </p>
        )}

        {/* 3 Cards with icons, numbers, labels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-4 p-8 rounded-2xl bg-[#f1f5f9]"
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

        {/* Bottom text */}
        {bottomText && (
          <p className="font-normal text-[16px] leading-[26px] text-[rgba(12,26,55,0.7)] max-w-2xl mx-auto">
            {bottomText}
          </p>
        )}
      </div>
    </section>
  )
}

export default ThreeRowTTextM3CardsBText
