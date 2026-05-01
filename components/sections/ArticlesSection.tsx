import { siteContent } from '../../lib/data'
import Image from 'next/image'

export default function ArticlesSection() {
  const { articles } = siteContent

  return (
    <section id="articles" className="py-[96px] md:py-[128px] lg:py-[160px] bg-[#051424] relative overflow-hidden">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px pointer-events-none"
        style={{ background: 'linear-gradient(to right, transparent, rgba(237,92,44,0.15), transparent)' }}
        aria-hidden="true"
      />

      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-center mb-[24px]">
          <span className="font-mono text-xs text-[#ed5c2c] tracking-widest uppercase">Insights</span>
        </div>

        <h2 className="font-heading text-3xl md:text-4xl font-bold text-white text-center tracking-tight mb-[96px] max-w-[800px] mx-auto">
          Latest Articles
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px]">
          {(articles || []).map((article: any, index: number) => (
            <a
              key={index}
              href={article.url || '#'}
              className="group rounded-[12px] overflow-hidden border border-white/[0.08] transition-all duration-300 hover:border-[#ed5c2c]/20"
              style={{ background: 'rgba(13,28,45,0.6)', backdropFilter: 'blur(8px)' }}
            >
              <div className="aspect-[16/9] relative overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                {article.category && (
                  <span className="absolute top-[8px] left-[8px] px-[8px] py-[4px] bg-[#ed5c2c]/20 border border-[#ed5c2c]/30 rounded-[6px] text-[#ed5c2c] text-[12px] font-medium">
                    {article.category}
                  </span>
                )}
              </div>
              <div className="p-[24px]">
                <h3 className="font-heading text-lg font-semibold text-white mb-[12px] tracking-tight">
                  {article.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {article.excerpt}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}




