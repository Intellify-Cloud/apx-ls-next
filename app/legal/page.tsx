import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Legal | Apex Leadership Specialists',
}

const email = 'craig@apexcoaching.co.za'

export default function LegalPage() {
  return (
    <div className="pt-20 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-10">
          Legal
        </h1>

        <div className="space-y-8 text-gray-600 leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-primary mb-3">Personal Information We Collect</h2>

            <h3 className="font-semibold text-gray-800 mb-2">Automatically Collected (Google Analytics)</h3>
            <p>When you visit this site, we automatically receive information about your device from your browser, such as your IP address. As you browse the site, we also collect information about how you interact with it. We refer to this automatically-collected information as &quot;Device Information&quot;.</p>
            <p className="mt-3">We collect Device Information using cookies. &quot;Cookies&quot; are data files that are placed on your device. For more information about cookies and how to disable them, visit{' '}
              <a href="http://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">allaboutcookies.org</a>.
            </p>
            <p className="mt-3">We do this using Google Analytics:{' '}
              <a href="https://www.google.com/intl/en/policies/privacy/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Google Privacy Policy</a>.
            </p>
            <p className="mt-3">You can opt out of Google Analytics here:{' '}
              <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Google Analytics Opt-out</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-3">Changes</h2>
            <p>We may update this policy from time to time for personal, operational, legal, or regulatory reasons.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-3">Contact Us</h2>
            <p>For more information about our privacy practices or if you have questions, please contact us at{' '}
              <a href={`mailto:${email}`} className="text-accent hover:underline">{email}</a>.
            </p>
          </section>

        </div>
      </div>
    </div>
  )
}
