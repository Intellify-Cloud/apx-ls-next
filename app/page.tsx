import HeroSection from '../components/sections/HeroSection'
import AboutSection from '../components/sections/AboutSection'
import ServicesSection from '../components/sections/ServicesSection'
import ScarfSection from '../components/sections/ScarfSection'
import TeamSection from '../components/sections/TeamSection'
import ClientsSection from '../components/sections/ClientsSection'
import TestimonialsSection from '../components/sections/TestimonialsSection'
import ContactSection from '../components/sections/ContactSection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TeamSection />
      <ScarfSection />
      <ClientsSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  )
}
