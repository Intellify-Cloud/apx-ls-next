import HeroSection from '../components/sections/HeroSection'
import AboutSection from '../components/sections/AboutSection'
import ServicesSection from '../components/sections/ServicesSection'
import ScarfSection from '../components/sections/ScarfSection'
import TeamSection from '../components/sections/TeamSection'
import ClientsSection from '../components/sections/ClientsSection'
import TestimonialsSection from '../components/sections/TestimonialsSection'
import ContactSection from '../components/sections/ContactSection'
import ProcessSection from '../components/sections/ProcessSection'
import ScrollingMotivationsSection from '../components/sections/ScrollingMotivationsSection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <ScrollingMotivationsSection />
      <AboutSection />
      <ServicesSection />
      <TeamSection />
      <ScarfSection />
      <ClientsSection />
      <TestimonialsSection />
      <ProcessSection />
      <ContactSection />
    </>
  )
}

