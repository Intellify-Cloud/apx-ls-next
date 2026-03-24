import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/privacy-statement/', '/data-sharing-agreement/', '/legal/'],
    },
    sitemap: 'https://apexleadership.co.za/sitemap.xml',
  }
}