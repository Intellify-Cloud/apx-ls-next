interface PersonJsonLdProps {
  name: string
  jobTitle: string
  description: string
  image: string
  url: string
}

export default function PersonJsonLd({
  name,
  jobTitle,
  description,
  image,
  url,
}: PersonJsonLdProps) {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name,
    jobTitle,
    description,
    image,
    url,
    worksFor: {
      '@type': 'LocalBusiness',
      '@id': 'https://apexleadership.co.za/#localbusiness',
      name: 'Apex Leadership Specialists',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  )
}
