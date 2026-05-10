import Image from 'next/image'
import { BookOpen, RefreshCw, Ruler } from 'lucide-react'
import { siteContent } from '../../lib/data'

export interface TwoColumnLeft1ImageRightProps {
  imageSrc?: string
  imageAlt?: string
}

export default function TwoColumnLeft1ImageRight({ imageSrc, imageAlt }: TwoColumnLeft1ImageRightProps = {}) {
  const { trial } = siteContent

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Hand':
        return <BookOpen className="w-5 h-5 text-orange-600" />
      case 'MessageSquare':
        return <RefreshCw className="w-5 h-5 text-orange-600" />
      case 'Target':
        return <Ruler className="w-5 h-5 text-orange-600" />
      default:
        return <BookOpen className="w-5 h-5 text-orange-600" />
    }
  }

   return (
     <section className="py-24 md:py-32 lg:py-40 bg-[#F8F8F6] relative overflow-hidden">
      <div className="max-w-[1000px] mx-auto px-6 lg:px-12">
        
        {/* Section label */}
        <div className="mb-6 text-center">
          <span className="label-caps text-secondary font-semibold">{trial.sectionTitle}</span>
        </div>
        
        {/* Title */}
        <h2 className="mb-4 text-center font-display text-3xl md:text-4xl lg:text-5xl font-bold text-[rgb(12,26,55)] tracking-tight max-w-2xl mx-auto">
          {trial.title}
        </h2>
        
        {/* Description */}
        <p className="mb-12 text-center font-normal text-[16px] leading-[26px] text-[rgba(12,26,55,0.7)] max-w-3xl mx-auto">
          {trial.description}
        </p>

        {/* Two-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Image with decorative panel */}
          <div className="relative aspect-square max-w-[500px] mx-auto lg:mx-0">
            <div className="absolute -top-4 -left-4 w-full h-full bg-[#ddd6d6] rounded-2xl z-0" />
            <Image
              src={imageSrc || trial.image}
              alt={imageAlt || trial.imageAlt}
              fill
              className="relative z-10 rounded-2xl object-cover"
            />
          </div>

          {/* Right Column - Intro text + feature cards */}
          <div>
            <div className="max-w-[540px] mx-auto space-y-4">
               {trial.cards.map((card: any, index: number) => (
                <article
                  key={index}
                  className="flex flex-col items-center text-center p-5 bg-white rounded-2xl shadow-sm border border-outline-variant/10"
                >
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0 mb-3">
                    {renderIcon(card.icon)}
                  </div>
                   <div>
                     <h3 className="font-manrope font-bold text-[18px] leading-[25px] text-[rgb(12,26,55)] mb-1">
                       {card.title}
                     </h3>
                     <p className="font-inter font-normal text-[14px] leading-[23px] text-[rgba(12,26,55,0.7)] leading-relaxed">
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
