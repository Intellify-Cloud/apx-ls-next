import Link from 'next/link'
import Image from 'next/image'
import { siteContent } from '../lib/data'

export default function Footer() {
  const { footer } = siteContent

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
    <footer className="bg-[#12121A] border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Brand */}
          <div>
            <Image
              src="/assets/img/logo/als-footer-logo.png"
              alt="Apex Leadership Specialists"
              width={160}
              height={48}
              className="object-contain mb-5 brightness-0 invert opacity-80"
            />
            <p className="text-zinc-500 text-sm leading-relaxed">
              People development consultancy helping individuals and teams achieve their true potential.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-sm font-semibold text-zinc-300 tracking-widest uppercase mb-5">Quick Links</h4>
            <ul className="space-y-2.5">
              {siteContent.navigation.map((item, index) => (
                <li key={index}>
                  {item.section ? (
                    <a
                      href={`#${item.section}`}
                      className="text-zinc-500 hover:text-amber-400 text-sm transition-colors duration-200 focus-visible:outline-none focus-visible:text-amber-400"
                    >
                      {item.title}
                    </a>
                  ) : (
                    <Link
                      href={item.url || '/'}
                      className="text-zinc-500 hover:text-amber-400 text-sm transition-colors duration-200 focus-visible:outline-none focus-visible:text-amber-400"
                    >
                      {item.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-display text-sm font-semibold text-zinc-300 tracking-widest uppercase mb-5">Connect With Us</h4>
            <div className="flex space-x-4 mb-6">
              {footer.social.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow us on ${social.platform}`}
                  className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/[0.05] border border-white/[0.08] text-zinc-400 hover:text-amber-400 hover:border-amber-500/30 hover:bg-amber-500/10 transition-all duration-200"
                >
                  {renderSocialIcon(social.platform)}
                </a>
              ))}
            </div>
            <p className="text-zinc-500 text-sm">
              <a
                href="mailto:craig@apexcoaching.co.za"
                className="hover:text-amber-400 transition-colors"
              >
                craig@apexcoaching.co.za
              </a>
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.06] mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-zinc-600 text-sm">{footer.legal} {new Date().getFullYear()}</p>
          <nav aria-label="Legal links" className="flex gap-6 text-sm">
            <Link href="/privacy-statement" className="text-zinc-600 hover:text-amber-400 transition-colors">
              Privacy Statement
            </Link>
            <Link href="/data-sharing-agreement" className="text-zinc-600 hover:text-amber-400 transition-colors">
              Data Sharing
            </Link>
            <Link href="/legal" className="text-zinc-600 hover:text-amber-400 transition-colors">
              Legal
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
