'use client'

import { useState } from 'react'
import { siteContent } from '../../lib/data'

export default function ContactPage() {
  const { contactPage } = siteContent
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const inputStyle = {
    background: 'rgba(26, 26, 36, 0.6)',
    backdropFilter: 'blur(8px)',
    border: '1px solid rgba(255,255,255,0.08)',
  }

  const handleInputFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.borderColor = 'rgba(245,158,11,0.5)'
    e.currentTarget.style.boxShadow = '0 0 20px rgba(245,158,11,0.1), 0 0 0 2px rgba(245,158,11,0.2)'
  }

  const handleInputBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
    e.currentTarget.style.boxShadow = 'none'
  }

  const renderSocialIcon = (platform: string) => {
    switch (platform) {
      case 'facebook':
        return (
          <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5h-4.33C10.24.5,9.5,3.44,9.5,5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4Z"/>
          </svg>
        )
      case 'linkedin':
        return (
          <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        )
      case 'whatsapp':
        return (
          <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472,14.382c-0.297-0.149-1.758-0.867-2.03-0.967c-0.273-0.099-0.471-0.148c-0.67,0.15c-0.197,0.297c-0.767,0.966c-0.94,1.164c-0.173,0.199c-0.347,0.223c-0.644,0.075c-0.297-0.15c-1.255-0.463c-2.39-1.475c-0.883-0.788c-1.48-1.761c-1.653-2.059c-0.173-0.297c-0.018-0.458c0.13-0.606c0.134-0.133c0.298-0.347c0.446-0.52c0.149-0.174c0.198-0.298c0.298-0.497c0.099-0.198c0.05-0.371c-0.025-0.52c-0.075-0.149c-0.669-1.612c-0.916-2.207c-0.242-0.579c-0.487-0.5c-0.669-0.51c-0.173-0.008c-0.371-0.01c-0.57-0.01c-0.198,0c-0.52,0.074c-0.792,0.372c-0.272,0.297c-1.04,1.016c-1.04,2.479c0,1.462c1.065,2.875c1.213,3.074c0.149,0.198c2.096,3.2c5.077,4.487c0.709,0.306c1.262,0.489c1.694,0.625c0.712,0.227c1.36,0.195c1.871,0.118c0.571-0.085c1.758-0.719c2.006-1.413c0.248-0.694c0.248-1.289c0.173-1.413c-0.074-0.124c-0.272-0.198c-0.57-0.347m-5.421,7.403h-.004a9.87,9.87,0,0,1-5.031-1.378l-.361-.214l-3.741.982l.998-3.648l-.235-.374a9.86,9.86,0,0,1-1.51-5.26c.001-5.45,4.436-9.884,9.888-9.884c2.64,0,5.122,1.03,6.988,2.898a9.825,9.825,0,0,1,2.893,6.994c-.003,5.45-4.437,9.884-9.885,9.884m8.413-18.297A11.815,11.815,0,0,0,12.05,0C5.495,0,.16,5.335.157,11.892c0,2.096.547,4.142,1.588,5.945L.057,24l6.305-1.654a11.882,11.882,0,0,0,5.683,1.448h.005c6.554,0,11.89-5.335,11.893-11.893a11.821,11.821,0,0,0-3.48-8.413Z"/>
          </svg>
        )
      default:
        return null
    }
  }

  return (
    <div className="pt-20 bg-[#0A0A0F] min-h-screen">

      {/* Hero */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at top, rgba(245,158,11,0.04) 0%, transparent 60%)' }}
          aria-hidden="true"
        />
        <div className="max-w-6xl mx-auto px-6 lg:px-12 text-center">
          <span className="font-mono text-xs text-amber-500 tracking-widest uppercase">Contact</span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mt-4 mb-4">
            {contactPage.heroTitle}
          </h1>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            {contactPage.heroSubtitle}
          </p>
        </div>
      </section>

      {/* Contact content */}
      <section className="pb-32 relative">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

            {/* Info */}
            <div>
              <h2 className="font-display text-2xl font-bold text-white tracking-tight mb-8">
                {contactPage.infoTitle}
              </h2>

              <div className="space-y-5 mb-10">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/15 flex items-center justify-center text-amber-500 shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-mono text-xs text-zinc-500 tracking-widest uppercase mb-1">{contactPage.contactInfo.email.label}</p>
                    <a href={`mailto:${contactPage.contactInfo.email.value}`} className="text-zinc-300 hover:text-amber-400 transition-colors">
                      {contactPage.contactInfo.email.value}
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/15 flex items-center justify-center text-amber-500 shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-mono text-xs text-zinc-500 tracking-widest uppercase mb-1">{contactPage.contactInfo.phone.label}</p>
                    <a href={`tel:${contactPage.contactInfo.phone.value.replace(/\s/g, '')}`} className="text-zinc-300 hover:text-amber-400 transition-colors">
                      {contactPage.contactInfo.phone.value}
                    </a>
                  </div>
                </div>

                {/* Website */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/15 flex items-center justify-center text-amber-500 shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253M3 12a8.959 8.959 0 0 0 .284 2.253" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-mono text-xs text-zinc-500 tracking-widest uppercase mb-1">{contactPage.contactInfo.website.label}</p>
                    <span className="text-zinc-300">{contactPage.contactInfo.website.value}</span>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div>
                <p className="font-mono text-xs text-zinc-500 tracking-widest uppercase mb-4">{contactPage.socialTitle}</p>
                <div className="flex space-x-3">
                  {contactPage.socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Follow us on ${link.platform}`}
                      className="w-10 h-10 flex items-center justify-center rounded-lg border border-white/[0.08] text-zinc-400 hover:text-amber-400 hover:border-amber-500/30 hover:bg-amber-500/10 transition-all duration-200"
                      style={{ background: 'rgba(26, 26, 36, 0.6)' }}
                    >
                      {renderSocialIcon(link.platform)}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div
              className="rounded-2xl p-8 md:p-10 border border-white/[0.08]"
              style={{ background: 'rgba(26, 26, 36, 0.6)', backdropFilter: 'blur(8px)' }}
            >
              <h2 className="font-display text-2xl font-bold text-white tracking-tight mb-8">{contactPage.formTitle}</h2>

              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block font-mono text-xs text-zinc-500 tracking-widest uppercase mb-2">
                      {contactPage.labels.name}
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full h-11 px-4 rounded-lg text-white placeholder-zinc-600 text-sm transition-all duration-200 focus:outline-none"
                      placeholder={contactPage.labels.namePlaceholder}
                      style={inputStyle}
                      onFocus={handleInputFocus}
                      onBlur={handleInputBlur}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block font-mono text-xs text-zinc-500 tracking-widest uppercase mb-2">
                      {contactPage.labels.email}
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full h-11 px-4 rounded-lg text-white placeholder-zinc-600 text-sm transition-all duration-200 focus:outline-none"
                      placeholder={contactPage.labels.emailPlaceholder}
                      style={inputStyle}
                      onFocus={handleInputFocus}
                      onBlur={handleInputBlur}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block font-mono text-xs text-zinc-500 tracking-widest uppercase mb-2">
                    {contactPage.labels.subject}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full h-11 px-4 rounded-lg text-white placeholder-zinc-600 text-sm transition-all duration-200 focus:outline-none"
                    placeholder={contactPage.labels.subjectPlaceholder}
                    style={inputStyle}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block font-mono text-xs text-zinc-500 tracking-widest uppercase mb-2">
                    {contactPage.labels.message}
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg text-white placeholder-zinc-600 text-sm transition-all duration-200 focus:outline-none resize-none"
                    placeholder={contactPage.labels.messagePlaceholder}
                    style={inputStyle}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full h-11 bg-amber-500 text-[#0A0A0F] font-semibold rounded-lg transition-all duration-200 hover:brightness-110 hover:shadow-amber-btn active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#12121A]"
                >
                  {contactPage.labels.submitButton}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
