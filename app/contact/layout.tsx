import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    absolute: 'Contact Apex Leadership Specialists | Executive Coaching South Africa',
  },
  description: 'Get in touch with the Apex Leadership team to find out more about our coaching and development services.',
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
