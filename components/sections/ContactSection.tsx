import { siteContent } from '../../lib/data'

export default function ContactSection() {
  const { homeContact } = siteContent

  return (
    <section id="contact" className="py-[96px] md:py-[128px] lg:py-[160px] bg-[#051424] relative overflow-hidden">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px pointer-events-none"
        style={{ background: 'linear-gradient(to right, transparent, rgba(237,92,44,0.2), transparent)' }}
        aria-hidden="true"
      />

      <div className="max-w-[800px] mx-auto px-6 lg:px-12 text-center">
        <span className="font-mono text-xs text-[#ed5c2c] tracking-widest uppercase mb-[24px] block">{homeContact.label}</span>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-white tracking-tight mb-[24px]">
          {homeContact.title}
        </h2>
        <p className="text-zinc-400 text-lg mb-[64px] max-w-[800px] mx-auto">
          {homeContact.text}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-[32px]">
          <a
            href="/contact"
            className="inline-flex items-center px-[40px] py-[16px] bg-[#ed5c2c] text-[#051424] text-[16px] leading-[24px] font-semibold rounded-[12px] transition-all duration-200 hover:bg-[#dd5128] hover:shadow-[#ed5c2c]/50 relative z-10"
          >
            Contact Us
          </a>
          <a
            href="mailto:craig@apexcoaching.co.za"
            className="inline-flex items-center px-[40px] py-[16px] border border-white/15 text-white text-[16px] leading-[24px] font-medium rounded-[12px] transition-all duration-200 hover:bg-white/5 hover:border-white/25"
          >
            Email Directly
          </a>
        </div>
      </div>
    </section>
  )
}





