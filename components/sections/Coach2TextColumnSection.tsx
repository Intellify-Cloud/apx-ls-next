
interface Coach2TextColumnSectionProps {
  title: string
  text: string
  qualifications: string[]
  image: string
  imageAlt: string
}

export default function Coach2TextColumnSection({
  title,
  text,
  qualifications,
  image,
  imageAlt,
}: Coach2TextColumnSectionProps) {
  return (
    <section className="py-16 md:py-24 lg:py-[120px] bg-surface-container-low relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px pointer-events-none"
        style={{ background: 'linear-gradient(to right, transparent, var(--secondary), transparent)', opacity: 0.2 }} />

      <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-12">
        <div className="flex items-center justify-center mb-4 md:mb-6">
          <span className="label-caps text-secondary">{title}</span>
        </div>

        <h2 className="font-display text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-on-surface text-center tracking-tight mb-8 md:mb-12 lg:mb-16 max-w-2xl mx-auto">
          A Journey of Authentic Leadership
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto items-start">
          <div className="flex flex-col">
            <p className="text-on-surface-variant text-base leading-relaxed mb-6 opacity-90 whitespace-pre-line">
              {text}
            </p>
          </div>

          <div className="flex flex-col">
            <h3 className="font-display text-xl font-bold text-on-surface mb-6">Credentials & Qualifications</h3>
            <ul className="space-y-4">
              {qualifications.map((q, i) => (
                <li key={i} className="flex items-start gap-3 text-on-surface-variant">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2.5 shrink-0" />
                  {q}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}