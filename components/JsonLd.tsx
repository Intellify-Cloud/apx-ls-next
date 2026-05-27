export default function JsonLd() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://apexleadership.co.za/#localbusiness',
    name: 'Apex Leadership Specialists',
    url: 'https://apexleadership.co.za',
    logo: 'https://apexleadership.co.za/assets/logo/als-logo.png',
    image: 'https://apexleadership.co.za/assets/social/og-image.jpg',
    description: 'Apex Leadership Specialists is a people development consultancy that works with individuals and teams to help them understand and achieve their true potential.',
    email: 'craig@apexcoaching.co.za',
    telephone: '+27 73 316 7105',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Durban North',
      addressRegion: 'KwaZulu-Natal',
      addressCountry: 'ZA',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      availableHours: 'Mo-Fr 08:00-17:00',
    },
    sameAs: [
      'https://www.linkedin.com/company/apex-leadership-specialists',
      'https://www.facebook.com/apexleadership',
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  )
}

