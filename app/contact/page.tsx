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
            <path d="M17.472,14.382c-0.297-0.149-1.758-0.867-2.03-0.967c-0.273-0.099-0.471-0.148c-0.67,0.15c-0.197,0.297c-0.767,0.966c-0.94,1.164c-0.173,0.199c-0.347,0.223c-0.644,0.075c-0.297-0.15c-1.255-0.463c-2.39-1.475c-0.883-0.788c-1.48-1.761c-1.653-2.059c-0.173-0.297c-0.018-0.458c0.13-0.606c0.134-0.133c0.298-0.347c0.446-0.52c0.149-0.174c0.198-0.298c0.298-0.497c0.099-0.198c0.05-0.371c-0.025-0.52c-0.075-0.149c-0.669-1.612c-0.916-2.207c-0.242-0.579c-0.487-0.5c-0.669-0.51c-0.173-0.008c-0.371-0.01c-0.57-0.01c-0.198,0c-0.52,0.074c-0.792,0.372c-0.272,0.297c-1.04,1.016c-1.04,2.479c0,1.462c1.065,2.875c1.213,3.074c0.149,0.198c2.096,3.2c5.077,4.487c0.709,0.306c1.262,0.489c1.694,0.625c0.712,0.227c1.36,0.195c1.871,0.118c0.571-0.085c1.758-0.719c2.006-1.413c0.248-0.694c0.248-1.289c0.173-1.413c-0.074-0.124c-0.272-0.198c-0.57-0.347"/>
          </svg>
        )
      default:
        return null
    }
  }

  return (
    <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary via-secondary to-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {contactPage.heroTitle}
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              {contactPage.heroSubtitle}
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div>
                <h2 className="text-3xl font-bold text-primary mb-6">{contactPage.infoTitle}</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-accent" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-primary">{contactPage.contactInfo.email.label}</p>
                      <p className="text-gray-600">{contactPage.contactInfo.email.value}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-accent" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-primary">{contactPage.contactInfo.phone.label}</p>
                      <p className="text-gray-600">{contactPage.contactInfo.phone.value}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-accent" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-primary">{contactPage.contactInfo.website.label}</p>
                      <p className="text-gray-600">{contactPage.contactInfo.website.value}</p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-8">
                  <p className="font-semibold text-primary mb-4">{contactPage.socialTitle}</p>
                  <div className="flex space-x-4">
                    {contactPage.socialLinks.map((link, index) => (
                      <a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Follow us on ${link.platform}`}
                        className="w-10 h-10 bg-primary text-white rounded-lg flex items-center justify-center hover:bg-accent transition-colors"
                      >
                        {renderSocialIcon(link.platform)}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-primary mb-6">{contactPage.formTitle}</h2>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        {contactPage.labels.name}
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
                        placeholder={contactPage.labels.namePlaceholder}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        {contactPage.labels.email}
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
                        placeholder={contactPage.labels.emailPlaceholder}
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      {contactPage.labels.subject}
                    </label>
                    <input
                      type="text"
                      id="subject"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
                      placeholder={contactPage.labels.subjectPlaceholder}
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      {contactPage.labels.message}
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
                      placeholder={contactPage.labels.messagePlaceholder}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-accent text-white py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all"
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