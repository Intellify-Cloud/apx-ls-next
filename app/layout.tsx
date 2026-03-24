import './globals.css'
import type { Metadata } from 'next'
import Script from 'next/script'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import JsonLd from '../components/JsonLd'

// Replace GA_MEASUREMENT_ID with your actual Google Analytics 4 ID (e.g. G-XXXXXXXXXX)
const GA_MEASUREMENT_ID = 'GA_MEASUREMENT_ID'

export const metadata: Metadata = {
  title: {
    default: 'Apex Leadership Specialists',
    template: '%s | Apex Leadership Specialists',
  },
  description: 'Apex Leadership Specialists is a people development consultancy that works with individuals and teams to help them understand and achieve their true potential.',
  keywords: ['leadership development', 'team building', 'people development', 'executive coaching', 'corporate training', 'South Africa'],
  authors: [{ name: 'Apex Leadership Specialists' }],
  creator: 'Apex Leadership Specialists',
  publisher: 'Apex Leadership Specialists',
  metadataBase: new URL('https://apexleadership.co.za'),
  openGraph: {
    type: 'website',
    locale: 'en_ZA',
    url: 'https://apexleadership.co.za',
    siteName: 'Apex Leadership Specialists',
    title: 'Apex Leadership Specialists - People Development Consultancy',
    description: 'Apex Leadership Specialists is a people development consultancy that works with individuals and teams to help them understand and achieve their true potential.',
    images: [
      {
        url: '/assets/img/social/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Apex Leadership Specialists',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Apex Leadership Specialists - People Development Consultancy',
    description: 'Apex Leadership Specialists is a people development consultancy that works with individuals and teams to help them understand and achieve their true potential.',
    images: ['/assets/img/social/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <JsonLd />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-accent focus:text-white focus:rounded-lg"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
      </body>
    </html>
  )
}