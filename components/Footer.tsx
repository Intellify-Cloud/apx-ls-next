import Link from 'next/link'
import Image from 'next/image'
import { siteContent } from '../lib/data'

export default function Footer() {
  const { footer } = siteContent

  const renderSocialIcon = (platform: string) => {
    switch (platform) {
      case 'facebook':
        return (
          <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
          </svg>
        )
      case 'linkedin':
        return (
          <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"/>
            <circle cx="4" cy="4" r="2"/>
          </svg>
        )
      case 'whatsapp':
        return (
          <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1664 1600"
            fill="currentColor"
          >
            <path d="M985 878q13 0 97.5 44t89.5 53q2 5 2 15q0 33-17 76q-16 39-71 65.5T984 1158q-57 0-190-62q-98-45-170-118T476 793q-72-107-71-194v-8q3-91 74-158q24-22 52-22q6 0 18 1.5t19 1.5q19 0 26.5 6.5T610 448q8 20 33 88t25 75q0 21-34.5 57.5T599 715q0 7 5 15q34 73 102 137q56 53 151 101q12 7 22 7q15 0 54-48.5t52-48.5m-203 530q127 0 243.5-50t200.5-134t134-200.5t50-243.5t-50-243.5T1226 336t-200.5-134T782 152t-243.5 50T338 336T204 536.5T154 780q0 203 120 368l-79 233l242-77q158 104 345 104m0-1382q153 0 292.5 60T1315 247t161 240.5t60 292.5t-60 292.5t-161 240.5t-240.5 161t-292.5 60q-195 0-365-94L0 1574l136-405Q28 991 28 780q0-153 60-292.5T249 247T489.5 86T782 26" />
          </svg>
        )
      default:
        return null
    }
  }

  return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant/20">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">

        {/* ROW 1: 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-20 text-center">
          {/* Column 1: Brand */}
          <div className="flex flex-col items-center justify-center text-center">
            <Image
              src="/assets/logo/als-footer-logo.png"
              alt="Apex Leadership Specialists"
              width={160}
              height={48}
              style={{ width: 'auto', height: 'auto' }}
              className="object-contain mb-6 brightness-0 invert opacity-70"
            />
             <p className="text-on-surface-variant/70 text-sm leading-relaxed">
               People development consultancy helping individuals and teams achieve their true potential.
             </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col items-center justify-center text-center">
            <h4 className="label-caps text-on-surface mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {siteContent.navigation.map((item, index) => (
                <li key={index}>
                  {item.section ? (
                     <a
                       href={`#${item.section}`}
                       className="text-on-surface-variant/60 hover:text-secondary text-sm transition-colors duration-200 focus-visible:outline-none focus-visible:text-secondary"
                     >
                      {item.title}
                    </a>
                  ) : (
                    <Link
                      href={item.url || '/'}
                      className="text-on-surface-variant/60 hover:text-secondary text-sm transition-colors duration-200 focus-visible:outline-none focus-visible:text-secondary"
                    >
                      {item.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Connect */}
          <div className="flex flex-col items-center justify-center text-center">
            <h4 className="label-caps text-on-surface mb-6">Connect With Us</h4>
            <div className="flex space-x-4 mb-8">
              {footer.social.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow us on ${social.platform}`}
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-surface-bright/10 border border-outline-variant/30 text-on-surface-variant hover:text-secondary hover:border-secondary/40 hover:bg-secondary/10 transition-all duration-300"
                >
                  {renderSocialIcon(social.platform)}
                </a>
              ))}
            </div>
             <p className="text-on-surface-variant/60 text-sm">
               <a
                 href="mailto:craig@apexcoaching.co.za"
                 className="hover:text-secondary transition-colors"
               >
                 craig@apexcoaching.co.za
               </a>
             </p>
          </div>
        </div>

        {/* Separator Line */}
        <div className="border-t border-outline-variant/20" />

         {/* ROW 2: 2-column grid */}
         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 py-4 text-center">
          <div className="flex flex-col items-center justify-center text-center">
            <p className="text-on-surface-variant/40 text-sm tracking-wide">{footer.legal} {new Date().getFullYear()}</p>
          </div>
          <div className="flex flex-col items-center justify-center text-center">
            <nav aria-label="Legal links" className="flex gap-8 text-sm">
              <Link href="/privacy-statement" className="text-on-surface-variant/40 hover:text-secondary transition-colors">
                Privacy Statement
              </Link>
              <Link href="/data-sharing-agreement" className="text-on-surface-variant/40 hover:text-secondary transition-colors">
                Data Sharing
              </Link>
              <Link href="/legal" className="text-on-surface-variant/40 hover:text-secondary transition-colors">
                Legal
              </Link>
            </nav>
          </div>
        </div>

        {/* Separator Line */}
        <div className="border-t border-outline-variant/20" />

        {/* ROW 3: Single column full width */}
        <div className="py-4 flex flex-col items-center justify-center text-center">
          <p className="text-on-surface-variant/60 text-sm">
            Powered by <a href="https://www.intellify.co.za/" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">Intellify</a>
          </p>
        </div>

       </div>
     </footer>
   )
 }

