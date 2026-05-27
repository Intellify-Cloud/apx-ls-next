import { Brain, Shield, Lock } from 'lucide-react'

interface Coach3CardProps {
  items?: Array<{
    title: string
    description: string
  }>
  sectionTitle?: string
  heading?: string
  subtitle?: string
}

export default function Coach3Card({
  items = [],
  sectionTitle = "What I Do",
  heading = "My Approach",
  subtitle = "Understanding. Strengthening. Unlocking.",
}: Coach3CardProps) {
  const icons = [Brain, Shield, Lock]

  return (
    <section id="services" className="py-[120px] bg-[#051424] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(ellipse, rgba(237,92,44,0.03) 0%, transparent 70%)', filter: 'blur(60px)' }} />

      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-center mb-6">
          <span className="label-caps text-[#ed5c2c]">{sectionTitle}</span>
        </div>

        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center tracking-tight mb-4 max-w-2xl mx-auto">
          {heading}
        </h2>
        <p className="text-zinc-400 text-center mb-[80px] max-w-[800px] mx-auto body-lg">
          {subtitle}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {items.map((item, index) => {
            const Icon = icons[index]
            return (
              <div
                key={index}
                className="group -translate-y-1 p-8 rounded-lg border border-white/[0.12] shadow-glow-sm transition-colors duration-300 hover:border-secondary/35"
                style={{ background: 'rgba(18,33,49,0.5)', backdropFilter: 'blur(8px)' }}
              >
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary mb-6 transition-colors duration-300 group-hover:bg-secondary/20">
                  <Icon className="w-6 h-6" strokeWidth={1.5} />
                </div>

                <h3 className="font-display text-xl font-bold text-on-surface mt-4 mb-3 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
