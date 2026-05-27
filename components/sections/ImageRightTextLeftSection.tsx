import Image from 'next/image'

interface ImageRightTextLeftSectionProps {
  title: string
  text: string
  image: string
  imageAlt: string
  ctaText?: string
  ctaLink?: string
}

export default function ImageRightTextLeftSection({
  title,
  text,
  image,
  imageAlt,
  ctaText,
  ctaLink,
}: ImageRightTextLeftSectionProps) {
  return (
    <section className="py-24 md:py-32 lg:py-40 bg-[#0A0A0F] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="font-mono text-xs text-[#ed5c2c] tracking-widest uppercase mb-4 block">Our Approach</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white tracking-tight mb-6">
              {title}
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
              {text}
            </p>
            {ctaText && ctaLink && (
              <a
                href={ctaLink}
                className="inline-flex items-center px-6 py-3 bg-[#ed5c2c] text-[#0A0A0F] text-[16px] leading-[24px] font-semibold rounded-lg transition-all duration-200 hover:bg-[#dd5128] hover:shadow-[#ed5c2c]/50 relative z-10"
              >
                {ctaText}
              </a>
            )}
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-xl overflow-hidden border border-white/[0.08]">
              <Image
                src={image}
                alt={imageAlt}
                fill
                className="object-cover"
              />
            </div>
            <div
              className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full pointer-events-none"
              style={{ background: 'radial-gradient(ellipse, rgba(237,92,44,0.15) 0%, transparent 70%)', filter: 'blur(20px)' }}
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  )
}





