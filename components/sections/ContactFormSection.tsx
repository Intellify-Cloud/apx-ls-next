import { useState } from 'react'
import { siteContent } from '../../lib/data'

export default function ContactFormSection() {
  const { contactPage } = siteContent
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section className="py-24 md:py-32 lg:py-40 bg-[#0A0A0F] relative overflow-hidden">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px pointer-events-none"
        style={{ background: 'linear-gradient(to right, transparent, rgba(237,92,44,0.2), transparent)' }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <span className="font-mono text-xs text-[#ed5c2c] tracking-widest uppercase mb-4 block">{contactPage.infoTitle}</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white tracking-tight mb-8">
              {contactPage.heroTitle}
            </h2>

            <div className="space-y-8">
              {contactPage.contactInfo && (
                <div className="space-y-4">
                  {contactPage.contactInfo.email && (
                    <div>
                      <p className="font-mono text-xs text-zinc-500 uppercase tracking-wider">{contactPage.contactInfo.email.label}</p>
                      <a href={`mailto:${contactPage.contactInfo.email.value}`} className="text-lg text-white hover:text-[#ed5c2c] transition-colors">
                        {contactPage.contactInfo.email.value}
                      </a>
                    </div>
                  )}
                  {contactPage.contactInfo.phone && (
                    <div>
                      <p className="font-mono text-xs text-zinc-500 uppercase tracking-wider">{contactPage.contactInfo.phone.label}</p>
                      <a href={`tel:${contactPage.contactInfo.phone.value}`} className="text-lg text-white hover:text-[#ed5c2c] transition-colors">
                        {contactPage.contactInfo.phone.value}
                      </a>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          <div>
            <span className="font-mono text-xs text-[#ed5c2c] tracking-widest uppercase mb-4 block">{contactPage.formTitle}</span>

            {submitted ? (
              <div className="p-6 rounded-xl border border-[#ed5c2c]/30 bg-[#ed5c2c]/10">
                <p className="text-[#ed5c2c] font-medium">Thank you for your message! We'll be in touch soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2">
                      {contactPage.labels.name}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={contactPage.labels.namePlaceholder}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:border-[#ed5c2c]/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2">
                      {contactPage.labels.email}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={contactPage.labels.emailPlaceholder}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:border-[#ed5c2c]/50 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2">
                    {contactPage.labels.subject}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder={contactPage.labels.subjectPlaceholder}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:border-[#ed5c2c]/50 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2">
                    {contactPage.labels.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={contactPage.labels.messagePlaceholder}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:border-[#ed5c2c]/50 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-6 py-3.5 bg-[#ed5c2c] text-[#0A0A0F] font-semibold rounded-lg transition-all duration-200 hover:bg-[#dd5128] hover:shadow-amber-btn relative z-10"
                >
                  {contactPage.labels.submitButton}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}




