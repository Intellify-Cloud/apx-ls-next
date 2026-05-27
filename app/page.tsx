import type { Metadata } from 'next'
import HeroSection from '../components/sections/HeroSection'
import ScrollingMotivationsSection from '../components/sections/ScrollingMotivationsSection'
import ThreePlainCardsSection from '../components/sections/ThreePlainCardsSection'
import ProblemSection from '../components/sections/ProblemSection'
import BenefitsSection from '../components/sections/BenefitsSection'
import GuideSection from '../components/sections/GuideSection'
import MethodologySection from '../components/sections/MethodologySection'
import SuccessOutcomesSection from '../components/sections/SuccessOutcomesSection'
import PrimaryCTASection from '../components/sections/PrimaryCTASection'
import ProblemPullQuoteSection from '../components/sections/ProblemPullQuoteSection'
import ThreeRowTTextM3CardsBText from '../components/sections/ThreeRowTTextM3CardsBText'
import ServicesSection from '../components/sections/ServicesSection'
import TeamSection from '../components/sections/TeamSection'
import ScarfSection from '../components/sections/ScarfSection'
import ClientsSection from '../components/sections/ClientsSection'
import TestimonialsSection from '../components/sections/TestimonialsSection'
import ProcessSection from '../components/sections/ProcessSection'
import TwoColumnLeft1ImageRight from '../components/sections/2ColumnLImageRTextCards'
import ContactFormSection from '../components/sections/ContactFormSection'

export const metadata: Metadata = {
  title: {
    absolute: 'Apex Leadership Specialists | Executive Coaching & Leadership Development South Africa',
  },
  description: 'Apex Leadership Specialists is a South African people development consultancy offering executive coaching, facilitated learning, and leadership strategy.',
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <ScrollingMotivationsSection />
      <ThreePlainCardsSection />
      <ProblemSection />
      <BenefitsSection />
      <GuideSection />
      <ClientsSection />
      <ServicesSection />
      <MethodologySection />
      <SuccessOutcomesSection />
      <PrimaryCTASection />
      <ProblemPullQuoteSection />
      <ThreeRowTTextM3CardsBText />
      <TeamSection />
      <ScarfSection />
      <ClientsSection />
      <TestimonialsSection />
      <ProcessSection />
      <TwoColumnLeft1ImageRight 
        imageSrc="/assets/images/trial-matters.jpg"
        imageAlt="Product trial demonstration"
      />
      <ContactFormSection />
    </>
  )
}
