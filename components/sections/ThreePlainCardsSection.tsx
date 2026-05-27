import type React from 'react'
import { siteContent } from '../../lib/data'
import { Target, Users, TrendingUp } from 'lucide-react'

interface CardItem {
  title: string
  description: string
  icon?: React.ReactNode
  subLabel?: string
}

interface ThreePlainCardsProps {
  title?: string
  subtitle?: string
  cards?: CardItem[]
}

interface ValueStackCard {
  icon: string
  title: string
  description: string
}

const iconMap: Record<string, React.ReactNode> = {
  Target: <Target className="w-5 h-5" />,
  Users: <Users className="w-5 h-5" />,
  TrendingUp: <TrendingUp className="w-5 h-5" />,
}

export default function ThreePlainCardsSection({ title, subtitle, cards }: ThreePlainCardsProps) {
  const { valueStack } = siteContent
  const sectionTitle = title || valueStack.title
  const sectionSubtitle = subtitle || valueStack.subtitle
  const rawCards = cards || valueStack.cards
  const sectionCards: CardItem[] = rawCards.map(card => ({
    ...card,
    icon: (iconMap as Record<string, React.ReactNode>)[(card as any).icon] || null
  }))
  return (
    <section className="relative overflow-hidden bg-[#F8F8F6]">
      <div className="relative py-20 md:py-24 lg:py-28 max-w-6xl mx-auto px-6 lg:px-12 z-10">
        <div className="flex items-center justify-center mb-4">
          <span className="label-caps text-secondary font-semibold">
            {sectionTitle}
          </span>
        </div>
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-[rgb(12,26,55)] text-center tracking-tight mb-10 max-w-2xl mx-auto">
          {sectionSubtitle}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {sectionCards.map((card, index) => (
            <div
              key={index}
              className="group -translate-y-1 p-5 bg-white border border-[rgba(12,26,55,0.12)] rounded-lg shadow-lg transition-colors duration-300 hover:border-secondary/35"
            >
              {card.icon && (
                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center text-orange-600 mb-3">
                  {card.icon}
                </div>
              )}
              <h3 className="font-manrope font-bold text-[18px] leading-[25px] text-[rgb(12,26,55)] mb-1">
                {card.title}
              </h3>
              {card.subLabel && (
                <p className="text-secondary text-xs font-semibold uppercase tracking-wider mb-4">
                  {card.subLabel}
                </p>
              )}
              <p className="font-inter font-normal text-[14px] leading-[23px] text-[rgba(12,26,55,0.7)]">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

