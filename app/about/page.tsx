import type { Metadata } from 'next'
import ThreeRowTTextM3CardsBText from '../../components/sections/ThreeRowTTextM3CardsBText'
import MethodologySection from '../../components/sections/MethodologySection'
import TestimonialsSection from '../../components/sections/TestimonialsSection'

export const metadata: Metadata = {
  title: {
    absolute: 'About Apex Leadership Specialists | People Development Consultancy South Africa',
  },
  description: 'Learn about Apex Leadership Specialists, a South African people development consultancy offering executive coaching, leadership development, and facilitated learning.',
}

export default function AboutPage() {
  return (
    <main className="bg-[#051424] pt-20">
      <ThreeRowTTextM3CardsBText tone="dark" />
      <MethodologySection />
      <TestimonialsSection />
    </main>
  )
}
