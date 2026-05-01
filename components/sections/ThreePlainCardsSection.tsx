import Image from 'next/image'

interface CardItem {
  title: string
  description: string
  icon?: React.ReactNode
  subLabel?: string
}

interface ThreePlainCardsProps {
  title?: string
  subtitle?: string
  cards: CardItem[]
}

export default function ThreePlainCardsSection({ title, subtitle, cards }: ThreePlainCardsProps) {
  return (
    <section className="relative overflow-hidden">
      {/* Background image with fixed attachment for parallax */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/assets/content/differentiators-bg.jpg")',
          backgroundAttachment: 'fixed',
          willChange: 'transform'
        }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[rgba(10,10,15,0.6)] -z-9"></div>

      <div className="relative py-24 md:py-32 lg:py-40 max-w-6xl mx-auto px-6 lg:px-12 z-10">
        {title && (
          <div className="text-center mb-16">
            <span className="font-mono text-xs text-[#ed5c2c] tracking-widest uppercase mb-4 block">
              {title}
            </span>
            {subtitle && (
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white tracking-tight max-w-2xl mx-auto">
                {subtitle}
              </h2>
            )}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="group p-8 bg-[#0A1A2F]/40 backdrop-blur-sm rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg glass-card"
              style={{
                background: 'linear-gradient(135deg, rgba(10,26,47,0.4) 0%, rgba(10,10,15,0.6) 100%)',
                backdropFilter: 'blur(12px)'
              }}
            >
              {card.icon && (
                <div className="w-10 h-10 bg-[#ed5c2c] flex items-center justify-center text-white mb-5">
                  {card.icon}
                </div>
              )}
              <h3 className="font-display text-xl font-bold text-white tracking-tight uppercase mb-3">
                {card.title}
              </h3>
              {card.subLabel && (
                <p className="text-[#ed5c2c] text-xs font-semibold uppercase tracking-wider mb-4">
                  {card.subLabel}
                </p>
              )}
              <p className="text-zinc-400 text-base leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

