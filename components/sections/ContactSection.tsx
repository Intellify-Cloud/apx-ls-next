'use client'

import { siteContent } from '../../lib/data'

export default function ContactSection() {
  const { homeContact } = siteContent

  const handleSubmit = (e: { preventDefault(): void }) => {
    e.preventDefault()
    alert('Thank you for your message! We will get back to you soon.')
  }

  return (
    <section id="contact" className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {homeContact.title}
          </h2>
          <p className="text-gray-300 text-lg">{homeContact.text}</p>
        </div>
        <div className="max-w-xl mx-auto">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="home-name" className="sr-only">Your Name</label>
              <input
                id="home-name"
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:border-accent"
              />
            </div>
            <div>
              <label htmlFor="home-email" className="sr-only">Your Email</label>
              <input
                id="home-email"
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:border-accent"
              />
            </div>
            <div>
              <label htmlFor="home-message" className="sr-only">Your Message</label>
              <textarea
                id="home-message"
                placeholder="Your Message"
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:border-accent"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-accent text-white py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
