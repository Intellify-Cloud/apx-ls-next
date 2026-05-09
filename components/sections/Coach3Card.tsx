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
          {items.map((item, index) => (
            <div
              key={index}
              className="group p-8 rounded-xl border border-outline-variant/20 transition-all duration-300 hover:border-secondary/30 hover:scale-[1.01] hover:shadow-glow-sm"
              style={{ background: 'rgba(18,33,49,0.5)', backdropFilter: 'blur(8px)' }}
            >
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary mb-6 transition-colors duration-300 group-hover:bg-secondary/20">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  {index === 0 && (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                  )}
                  {index === 1 && (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 012.437 0 3.42 3.42 0 001.946.806 3.42 3.42 0 012.437 0 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-2.437 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-2.437 0 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-2.437 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-2.437 0" />
                  )}
                  {index === 2 && (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0 3.09 3.09M18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                  )}
                </svg>
              </div>

              <h3 className="font-display text-xl font-bold text-on-surface mt-4 mb-3 tracking-tight">
                {item.title}
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
