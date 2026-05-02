import { MousePointerClick, Box, TrendingDown } from 'lucide-react'

export interface ThreeRowTTextM3CardsBTextProps {
  heading?: string
  leadText?: string
  bodyText?: string
  closingText?: string
  cards?: Array<{
    icon: string
    title: string
    body: string
  }>
}

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'MousePointerClick':
      return <MousePointerClick className="w-6 h-6 stroke-[1.5] text-[rgb(12,26,55)]" />
    case 'Box':
      return <Box className="w-6 h-6 stroke-[1.5] text-[rgb(12,26,55)]" />
    case 'TrendingDown':
      return <TrendingDown className="w-6 h-6 stroke-[1.5] text-[rgb(12,26,55)]" />
    default:
      return <MousePointerClick className="w-6 h-6 stroke-[1.5] text-[rgb(12,26,55)]" />
  }
}

export function ThreeRowTTextM3CardsBText({
  heading = 'THE CHALLENGE',
  leadText = '',
  bodyText = '',
  closingText = '',
  cards,
}: ThreeRowTTextM3CardsBTextProps) {
  const defaultCards = [
    {
      icon: 'MousePointerClick',
      title: 'CLICKS & IMPRESSIONS',
      body: 'Track visibility, not validation.',
    },
    {
      icon: 'Box',
      title: 'REAL EXPERIENCE',
      body: 'Validation happens in use.',
    },
    {
      icon: 'TrendingDown',
      title: 'THE GAP',
      body: 'Assumptions cost money.',
    },
  ]

  return (
    <section className="w-full bg-[#ffffff]">
      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
        {/* Heading */}
        <h2 className="font-bold text-[42px] leading-[42px] text-[rgb(12,26,55)] uppercase mb-10">
          {heading}
        </h2>

        {/* Lead paragraph */}
        {leadText && (
          <p className="font-medium text-[18px] leading-[25px] text-[rgba(12,26,55,0.8)] mb-6">
            {leadText}
          </p>
        )}

        {/* Body paragraph */}
        {bodyText && (
          <p className="font-normal text-[16px] leading-[26px] text-[rgba(12,26,55,0.7)] mb-14 max-w-3xl mx-auto">
            {bodyText}
          </p>
        )}

        {/* Three cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-14">
          {(cards || defaultCards).map((card, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-4 p-8 rounded-2xl bg-[#f1f5f9]"
            >
              <div className="w-14 h-14 rounded-2xl bg-[linear-gradient(to_bottom_right,rgba(221,224,229),#ede5e4)] flex items-center justify-center">
                {renderIcon(card.icon)}
              </div>
              <h3 className="uppercase font-bold text-[14px] leading-[21px] text-[rgb(12,26,55)]">
                {card.title}
              </h3>
              <p className="text-[14px] leading-[21px] text-[rgba(12,26,55,0.7)]">
                {card.body}
              </p>
            </div>
          ))}
        </div>

        {/* Closing paragraph */}
        {closingText && (
          <p className="font-normal text-[16px] leading-[26px] text-[rgba(12,26,55,0.7)] max-w-2xl mx-auto">
            {closingText}
          </p>
        )}
      </div>
    </section>
  )
}

export default ThreeRowTTextM3CardsBText
