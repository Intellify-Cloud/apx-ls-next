// Type definitions for site content - equivalent to Jekyll's {% if %} conditional logic

export interface NavigationItem {
  title: string
  section?: string
  url?: string
}

export interface HeroSection {
  title: string
  subtitle: string
  ctaText: string
  ctaLink: string
}

export interface AboutSection {
  title: string
  text: string
}

export interface ServiceItem {
  title: string
  description: string
  // Optional: conditional display like Jekyll {% if item.icon %}
  icon?: string
  link?: {
    url: string
    text: string
  }
}

export interface ServicesSection {
  title: string
  items: ServiceItem[]
}

export interface TeamMember {
  name: string
  role: string
  // Optional image - conditional render like {% if member.image %}
  image?: string
  focus: string
  // Optional: conditional display
  qualifications?: string[]
  experience?: string[]
  personal_profile?: string[]
  social?: Array<{
    url: string
    icon: string
  }>
}

export interface TeamSection {
  title: string
  description: string
  // Optional: conditional display like {% if team.people %}
  people?: TeamMember[]
}

export interface ClientItem {
  title: string
  url: string
  // Optional logo - conditional render
  logo?: string
}

export interface ClientsSection {
  title: string
  // Optional list - conditional like {% if clients.list %}
  list?: ClientItem[]
}

export interface TestimonialPerson {
  name: string
  company: string
  testimony: string
}

export interface TestimonialsSection {
  title: string
  // Optional: conditional like {% if testimonials.people %}
  people?: TestimonialPerson[]
}

export interface ContactSection {
  title: string
  text: string
  section?: string
}

export interface ContactInfoItem {
  label: string
  value: string
}

export interface ContactPageSection {
  heroTitle: string
  heroSubtitle: string
  infoTitle: string
  formTitle: string
  labels: {
    name: string
    email: string
    subject: string
    message: string
    namePlaceholder: string
    emailPlaceholder: string
    subjectPlaceholder: string
    messagePlaceholder: string
    submitButton: string
  }
  contactInfo: {
    email: ContactInfoItem
    phone: ContactInfoItem
    website: ContactInfoItem
  }
  socialTitle: string
  // Optional social links - conditional like {% if footer.social %}
  socialLinks?: Array<{
    url: string
    platform: string
  }>
}

export interface FooterSection {
  legal: string
  // Optional: conditional like {% if site.social %}
  social?: Array<{
    url: string
    platform: string
  }>
}

export interface SiteContent {
  navigation: NavigationItem[]
  hero: HeroSection
  about: AboutSection
  services: ServicesSection
  team: TeamSection
  clients: ClientsSection
  testimonials: TestimonialsSection
  homeContact: ContactSection
  contactPage: ContactPageSection
  footer: FooterSection
}

declare global {
  const siteContent: SiteContent
}

export {}