import { useState } from 'react'
import { siteContent } from '../../lib/data'

export default function SubscribeSection() {
  const { subscribe } = siteContent
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="py-24 md:py-32 lg:py-40 bg-[#12121A] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
        <div className="flex items-center justify-center mb-6">
          <span className="font-mono text-xs text-[#ed5c2c] tracking-widest uppercase">{subscribe.title}</span>
        </div>

        <h2 className="font-display text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
          Subscribe to our newsletter
        </h2>
        <p className="text-zinc-400 text-lg mb-10 max-w-2xl mx-auto">
          {subscribe.text}
        </p>

        {submitted ? (
          <div className="inline-flex items-center px-6 py-3 bg-[#ed5c2c]/15 border border-[#ed5c2c]/30 rounded-lg">
            <span className="text-[#ed5c2c] font-medium">Thank you for subscribing!</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 w-full px-5 py-3.5 rounded-lg bg-white/5 border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:border-[#ed5c2c]/50 transition-colors"
            />
            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 bg-[#ed5c2c] text-[#0A0A0F] font-semibold rounded-lg transition-all duration-200 hover:bg-[#dd5128] hover:shadow-[#ed5c2c]/50 relative z-10"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  )
}





