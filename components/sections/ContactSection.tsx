'use client'

import { siteContent } from '../../lib/data'

export default function ContactSection() {
  const { homeContact } = siteContent

  const handleSubmit = (e: { preventDefault(): void }) => {
    e.preventDefault()
    alert('Thank you for your message! We will get back to you soon.')
  }

  return (
    <section id="contact" className="py-24 md:py-32 lg:py-40 bg-[#12121A] relative overflow-hidden">

      {/* Top edge */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px pointer-events-none"
        style={{ background: 'linear-gradient(to right, transparent, rgba(245,158,11,0.2), transparent)' }}
        aria-hidden="true"
      />

      {/* Ambient orb */}
      <div
        className="absolute bottom-0 right-0 w-[450px] h-[450px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(245,158,11,0.04) 0%, transparent 65%)', filter: 'blur(80px)' }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-14">
          <span className="font-mono text-xs text-amber-500 tracking-widest uppercase">Get in Touch</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mt-4 mb-4">
            {homeContact.title}
          </h2>
          <p className="text-zinc-400 text-base md:text-lg max-w-md mx-auto">{homeContact.text}</p>
        </div>

        <div className="max-w-xl mx-auto">
          <div
            className="rounded-2xl p-8 md:p-10 border border-white/[0.08]"
            style={{ background: 'rgba(26, 26, 36, 0.6)', backdropFilter: 'blur(8px)' }}
          >
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="home-name" className="block font-mono text-xs text-zinc-500 tracking-widest uppercase mb-2">
                  Your Name
                </label>
                <input
                  id="home-name"
                  type="text"
                  placeholder="John Doe"
                  required
                  className="w-full h-11 px-4 rounded-lg text-white placeholder-zinc-600 text-sm transition-all duration-200 focus:outline-none focus:ring-2"
                  style={{
                    background: 'rgba(26, 26, 36, 0.6)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                  onFocus={e => {
                    e.currentTarget.style.borderColor = 'rgba(245,158,11,0.5)'
                    e.currentTarget.style.boxShadow = '0 0 20px rgba(245,158,11,0.1), 0 0 0 2px rgba(245,158,11,0.2)'
                  }}
                  onBlur={e => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                />
              </div>

              <div>
                <label htmlFor="home-email" className="block font-mono text-xs text-zinc-500 tracking-widest uppercase mb-2">
                  Your Email
                </label>
                <input
                  id="home-email"
                  type="email"
                  placeholder="john@example.com"
                  required
                  className="w-full h-11 px-4 rounded-lg text-white placeholder-zinc-600 text-sm transition-all duration-200 focus:outline-none"
                  style={{
                    background: 'rgba(26, 26, 36, 0.6)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                  onFocus={e => {
                    e.currentTarget.style.borderColor = 'rgba(245,158,11,0.5)'
                    e.currentTarget.style.boxShadow = '0 0 20px rgba(245,158,11,0.1), 0 0 0 2px rgba(245,158,11,0.2)'
                  }}
                  onBlur={e => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                />
              </div>

              <div>
                <label htmlFor="home-message" className="block font-mono text-xs text-zinc-500 tracking-widest uppercase mb-2">
                  Message
                </label>
                <textarea
                  id="home-message"
                  placeholder="Tell us about your leadership journey..."
                  rows={5}
                  required
                  className="w-full px-4 py-3 rounded-lg text-white placeholder-zinc-600 text-sm transition-all duration-200 focus:outline-none resize-none"
                  style={{
                    background: 'rgba(26, 26, 36, 0.6)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                  onFocus={e => {
                    e.currentTarget.style.borderColor = 'rgba(245,158,11,0.5)'
                    e.currentTarget.style.boxShadow = '0 0 20px rgba(245,158,11,0.1), 0 0 0 2px rgba(245,158,11,0.2)'
                  }}
                  onBlur={e => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                />
              </div>

              <button
                type="submit"
                className="w-full h-11 bg-amber-500 text-[#0A0A0F] font-semibold rounded-lg transition-all duration-200 hover:brightness-110 hover:shadow-amber-btn active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#12121A]"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact details */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm">
            <a
              href="mailto:craig@apexcoaching.co.za"
              className="flex items-center gap-2 text-zinc-500 hover:text-amber-400 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
              craig@apexcoaching.co.za
            </a>
            <a
              href="tel:+27733167105"
              className="flex items-center gap-2 text-zinc-500 hover:text-amber-400 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
              +27 73 316 7105
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
