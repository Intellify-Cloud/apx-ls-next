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
    e.currentTarget.style.borderColor = 'rgba(237,92,44,0.5)'
    e.currentTarget.style.boxShadow = '0 0 20px rgba(237,92,44,0.1), 0 0 0 2px rgba(237,92,44,0.2)'
  }

  const handleInputBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
    e.currentTarget.style.boxShadow = 'none'
  }

  const renderSocialIcon = (platform: string) => {
    switch (platform) {
      case 'facebook':
        return (
          <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
          </svg>
        )
      case 'linkedin':
        return (
          <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"/>
            <circle cx="4" cy="4" r="2"/>
          </svg>
        )
      case 'whatsapp':
        return (
          <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1664 1600" fill="currentColor">
            <path d="M985 878q13 0 97.5 44t89.5 53q2 5 2 15q0 33-17 76q-16 39-71 65.5T984 1158q-57 0-190-62q-98-45-170-118T476 793q-72-107-71-194v-8q3-91 74-158q24-22 52-22q6 0 18 1.5t19 1.5q19 0 26.5 6.5T610 448q8 20 33 88t25 75q0 21-34.5 57.5T599 715q0 7 5 15q34 73 102 137q56 53 151 101q12 7 22 7q15 0 54-48.5t52-48.5m-203 530q127 0 243.5-50t200.5-134t134-200.5t50-243.5t-50-243.5T1226 336t-200.5-134T782 152t-243.5 50T338 336T204 536.5T154 780q0 203 120 368l-79 233l242-77q158 104 345 104m0-1382q153 0 292.5 60T1315 247t161 240.5t60 292.5t-60 292.5t-161 240.5t-240.5 161t-292.5 60q-195 0-365-94L0 1574l136-405Q28 991 28 780q0-153 60-292.5T249 247T489.5 86T782 26" />
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
           style={{ background: 'radial-gradient(ellipse at top, rgba(237,92,44,0.04) 0%, transparent 60%)' }}
           aria-hidden="true"
         />
         <div className="max-w-6xl mx-auto px-6 lg:px-12 text-center">
           <span className="font-mono text-xs text-[#ed5c2c] tracking-widest uppercase">{contactPage.sectionTitle}</span>
           <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mt-4 mb-4 max-w-2xl mx-auto">
             {contactPage.contactTitle}
           </h1>
           <p className="text-base md:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
             {contactPage.contactParagraph}
           </p>
         </div>
       </section>

      {/* Contact content */}
      <section className="pb-32 relative">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

            {/* Info */}
            <div>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4 max-w-2xl mx-auto text-center">
                Contact Information
              </h2>

              <div className="space-y-5 mb-10">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#ed5c2c]/15 flex items-center justify-center text-[#ed5c2c] shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-mono text-xs text-zinc-500 tracking-widest uppercase mb-1">Email</p>
                    <a href={`mailto:${contactPage.ContactInformation.ContactInformationEmail}`} className="text-zinc-300 hover:text-[#ed5c2c] transition-colors">
                      {contactPage.ContactInformation.ContactInformationEmail}
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#ed5c2c]/15 flex items-center justify-center text-[#ed5c2c] shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-mono text-xs text-zinc-500 tracking-widest uppercase mb-1">Phone</p>
                    <a href={`tel:${contactPage.ContactInformation.ContactInformationPhone.replace(/\s/g, '')}`} className="text-zinc-300 hover:text-[#ed5c2c] transition-colors">
                      {contactPage.ContactInformation.ContactInformationPhone}
                    </a>
                  </div>
                </div>

                {/* Website */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#ed5c2c]/15 flex items-center justify-center text-[#ed5c2c] shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253M3 12a8.959 8.959 0 0 0 .284 2.253" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-mono text-xs text-zinc-500 tracking-widest uppercase mb-1">Website</p>
                    <span className="text-zinc-300">{contactPage.ContactInformation.ContactInformationWebsite}</span>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div>
                <p className="font-mono text-xs text-zinc-500 tracking-widest uppercase mb-4">{contactPage.socialTitle}</p>
                <div className="flex space-x-3">
                  {contactPage.ContactSocialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Follow us on ${link.platform}`}
                      className="w-10 h-10 flex items-center justify-center rounded-lg border border-white/[0.08] text-zinc-400 hover:text-[#ed5c2c] hover:border-[#ed5c2c]/30 hover:bg-[#ed5c2c]/10 transition-all duration-200"
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
               <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4 max-w-2xl mx-auto text-center">
                 {contactPage.formTitle}
               </h2>

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
                  className="w-full h-11 bg-[#ed5c2c] text-[#0A0A0F] font-semibold rounded-lg transition-all duration-200 hover:bg-[#dd5128] hover:shadow-amber-btn active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ed5c2c] focus-visible:ring-offset-2 focus-visible:ring-offset-[#12121A] relative z-10"
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





