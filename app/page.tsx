import HeroSection from '../components/sections/HeroSection'
import ScrollingMotivationsSection from '../components/sections/ScrollingMotivationsSection'
import ThreeRowTTextM3CardsBText from '../components/sections/ThreeRowTTextM3CardsBText'
import AboutSection from '../components/sections/AboutSection'
import ServicesSection from '../components/sections/ServicesSection'
import TeamSection from '../components/sections/TeamSection'
import ScarfSection from '../components/sections/ScarfSection'
import ClientsSection from '../components/sections/ClientsSection'
import TestimonialsSection from '../components/sections/TestimonialsSection'
import ProcessSection from '../components/sections/ProcessSection'
import TwoColumnLeft1ImageRight from '../components/sections/2ColumnLImageRTextCards'
import ContactFormSection from '../components/sections/ContactFormSection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <ScrollingMotivationsSection />
      <ThreeRowTTextM3CardsBText />
      <AboutSection />
      <ServicesSection />
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