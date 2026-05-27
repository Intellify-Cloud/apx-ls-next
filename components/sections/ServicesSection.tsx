import { User, BookOpen, Lightbulb, Mic, BookOpen as FileText, BookMarked } from 'lucide-react'
import { siteContent } from '../../lib/data'

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'Leadership':
      return <User className="w-6 h-6" strokeWidth={1.5} />
    case 'Learning':
      return <BookOpen className="w-6 h-6" strokeWidth={1.5} />
    case 'Strategy':
      return <Lightbulb className="w-6 h-6" strokeWidth={1.5} />
    case 'Keynote':
      return <Mic className="w-6 h-6" strokeWidth={1.5} />
    case 'HeroStory':
      return <FileText className="w-6 h-6" strokeWidth={1.5} />
    case 'Methodology':
      return <BookMarked className="w-6 h-6" strokeWidth={1.5} />
    default:
      return null
  }
}

export default function ServicesSection() {
  const { services } = siteContent

  return (
    <section id="services" className="py-[120px] bg-surface relative overflow-hidden">

      {/* Ambient orb */}
      <div
        className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(237,92,44,0.03) 0%, transparent 70%)', filter: 'blur(60px)' }}
        aria-hidden="true"
      />

      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">

        {/* Section label */}
        <div className="flex items-center justify-center mb-6">
          <span className="label-caps text-secondary font-semibold">{services.sectionTitle}</span>
        </div>

        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-on-surface text-center tracking-tight mb-4 max-w-[760px] mx-auto">
          {services.title}
        </h2>
        <p className="font-normal text-[16px] leading-[26px] text-on-surface-variant mb-14 max-w-[680px] mx-auto text-center">
          {services.subtitle}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.items.map((item, index) => (
             <div
               key={index}
               className="group -translate-y-1 p-6 rounded-lg border border-white/[0.12] shadow-glow-sm transition-colors duration-300 hover:border-secondary/35 cursor-default"
               style={{ background: 'rgba(18,33,49,0.5)', backdropFilter: 'blur(8px)' }}
             >
                {/* Icon */}
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary mb-6 transition-colors duration-300 group-hover:bg-secondary/20">
                  {renderIcon(item.icon as string)}
                </div>

                <h3 className="font-display text-2xl font-bold text-on-surface mt-2 mb-3 tracking-tight">
                  {item.title}
                </h3>
               <p className="text-on-surface-variant text-base leading-relaxed">
                 {item.description}
               </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
