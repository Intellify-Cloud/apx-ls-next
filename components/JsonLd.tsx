export default function JsonLd() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Apex Leadership Specialists',
    url: 'https://apexleadership.co.za',
    logo: 'https://apexleadership.co.za/assets/img/logo/als-logo.png',
    description: 'Apex Leadership Specialists is a people development consultancy that works with individuals and teams to help them understand and achieve their true potential.',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'ZA',
      addressRegion: 'South Africa',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      availableHours: 'Mo-Fr 08:00-17:00',
    },
    sameAs: [
      'https://www.linkedin.com/company/apex-leadership-specialists',
      'https://www.facebook.com/apexleadership',
      'https://twitter.com/apexleadership',
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  )
}