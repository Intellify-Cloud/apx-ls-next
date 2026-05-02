import Image from 'next/image'
import { Hand, MessageSquare, Target } from 'lucide-react'

export interface TwoColumnLeft1ImageRightProps {
  heading?: string
  introParagraph?: string
  imageSrc: string
  imageAlt?: string
  cards?: Array<{
    icon: string
    title: string
    body: string
  }>
}

export function TwoColumnLeft1ImageRight({
  heading = 'WHY TRIAL MATTERS',
  introParagraph = 'The fastest way to learn is not another report or dashboard. It\'s putting the product directly into peoples hands and listening to what they say right then, in that moment.',
  imageSrc,
  imageAlt = '',
  cards,
}: TwoColumnLeft1ImageRightProps) {
  const defaultCards = [
    {
      icon: 'Hand',
      title: 'DIRECT EXPERIENCE',
      body: 'A consumer who touches, tastes, or uses a product remembers it differently than one who only sees an ad.',
    },
    {
      icon: 'MessageSquare',
      title: 'IN-THE-MOMENT FEEDBACK',
      body: 'Capture genuine reactions before opinions fade. Real-time insight reveals what surveys weeks later cannot.',
    },
    {
      icon: 'Target',
      title: 'ACTIONABLE CLARITY',
      body: 'Move from "we think" to "we know." Ground your strategy in evidence from the people you\'re trying to reach.',
    },
  ]

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Hand':
        return <Hand className="w-5 h-5 text-orange-600" />
      case 'MessageSquare':
        return <MessageSquare className="w-5 h-5 text-orange-600" />
      case 'Target':
        return <Target className="w-5 h-5 text-orange-600" />
      default:
        return <Hand className="w-5 h-5 text-orange-600" />
    }
  }

  return (
    <section className="w-full bg-[#f1f5f9] py-20">
      <div className="max-w-[800px] mx-auto px-6">
        {/* Heading */}
        <h2 className="text-center font-bold text-[42px] leading-[42px] text-[rgb(12,26,55)] uppercase mb-16">
          {heading}
        </h2>

        {/* Two-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image with decorative panel */}
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-full h-full bg-[#ddd6d6] rounded-2xl z-0" />
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={600}
              height={800}
              className="relative z-10 rounded-2xl object-cover aspect-[3/4]"
            />
          </div>

          {/* Right Column - Intro text + feature cards */}
          <div>
            <p className="font-medium text-[18px] leading-[25px] text-[rgba(12,26,55,0.8)] mb-8 normal-case">
              {introParagraph}
            </p>

            <div className="space-y-4">
              {(cards || defaultCards).map((card, index) => (
                <article
                  key={index}
                  className="flex items-start gap-4 p-5 bg-white rounded-2xl shadow-sm"
                >
                  <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center shrink-0">
                    {renderIcon(card.icon)}
                  </div>
                  <div>
                    <h3 className="uppercase font-bold text-[14px] leading-[21px] text-[rgb(12,26,55)] mb-1">
                      {card.title}
                    </h3>
                    <p className="text-sm text-[rgba(12,26,55,0.7)] leading-relaxed">
                      {card.body}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TwoColumnLeft1ImageRight
