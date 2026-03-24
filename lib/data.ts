// Site content data - centralized like Jekyll's sitetext.yml
// Using TypeScript optional properties to match Jekyll's {% if %} conditional logic

export interface ServiceItem {
  title: string
  description: string
  icon?: string
  link?: { url: string; text: string }
}

export interface TeamMember {
  name: string
  role: string
  image?: string
  focus: string
  qualifications?: string[]
  experience?: string[]
}

export interface ClientItem {
  title: string
  url: string
  logo?: string
}

export interface TestimonialPerson {
  name: string
  company: string
  testimony: string
}

export const siteContent = {
  // Navigation
  navigation: [
    { title: "About", section: "about" },
    { title: "Services", section: "services" },
    { title: "Coaches", section: "team" },
    { title: "Partners", section: "clients" },
    { title: "Testimonials", section: "testimonials" },
    { title: "Contact", url: "/contact" },
  ],

  // Hero Section
  hero: {
    title: "Apex Leadership Specialists",
    subtitle: "Unlocking potential through people development",
    ctaText: "Get in Touch",
    ctaLink: "#contact",
  },

  // About Section
  about: {
    title: "WHO WE ARE",
    text: `Apex Leadership Specialists is a people development consultancy that works with individuals and teams to help them understand and achieve their true potential. Originally founded with a focus on leadership coaching, we have since developed a number of natural extensions to our core offering. These have given us the ability to go beyond simply focusing on individual impact to positively influence organisations in a more holistic and enduring way. While each individual has their own challenges, and each team has its own dynamic, we know that the fundamentals of what we offer remain the same. Whether working one-on-one or in groups, with leaders or operational teams, in all our work we aim to help people gain perspective to better understand themselves, their environment and the way in which they can be most effective within it.`,
  },

  // Services Section (WHAT WE DO)
  services: {
    title: "WHAT WE DO",
    items: [
      {
        title: "Leadership and Resilience Coaching",
        description: "Working one-on-one or in focused groups to help individuals develop their leadership skills, enhance their performance and work more effectively as a part of their teams.",
      },
      {
        title: "Facilitated Learning",
        description: "Engaging with leadership groups to help them build interpersonal skills and techniques to enhance team cohesion and effectiveness.",
      },
      {
        title: "People Development Strategy",
        description: "Collaborating with leadership to put programs and processes in place that support corporate culture, talent development, and succession planning.",
      },
      {
        title: "Keynote Talks",
        description: "Sharing insights from the Global South to inspire and drive meaningful change among international audiences.",
      },
      {
        title: "A Hero's Story",
        description: "Providing a space for inspiring individuals to share their stories of personal achievement or overcoming adversity to help motivate teams.",
      },
    ],
  },

  // Team Section
  team: {
    title: "Meet the Coaches",
    description: "Unlocking leadership potential requires the right coach – someone who not only possesses the skills but also aligns with your unique leadership style and personality. I've curated a cohort of Southern Africa's top coaches – passionate, skilled professionals who prioritize client growth. Let's connect you with the ideal coach to elevate your leadership and team performance through a powerful coaching chemistry.",
    people: [
      {
        name: "Craig Stuart",
        role: "Executive Coach",
        image: "/assets/img/team/craig-stuart.png",
        focus: "Driven, authentic, and intentional, Craig is passionate about helping individuals and teams unlock their potential through increased self-awareness, emotional intelligence, and improved thinking.",
        qualifications: [
          "Bachelor of Business Administration (Honours): IMM",
          "Foundations of Executive Coaching: UCT",
          "NeuroLeadership Institute (NLI) Brain-Based Coach",
          "Comensa accredited coach",
        ],
      },
      {
        name: "Célia Senekal",
        role: "Executive Coach",
        image: "/assets/img/team/Celia-Senekal.png",
        focus: "Helping individuals unlock their full potential through leadership development, career growth with purpose, and meaningful intelligence for stronger relationships and decision-making.",
        qualifications: [
          "BA Corporate Communications",
          "Corporate Communications Honours",
          "Psychology Honours",
          "MA Psychology",
          "CompTIA Certified Technical Trainer (CTT+)",
          "Assessor Training NQF Level 5 US 115753",
          "Thoughtsmiths Accredited Coach",
          "5 Lenses Enneagram",
        ],
      },
      {
        name: "Graham Kiggan",
        role: "Executive Coach",
        image: "/assets/img/team/Graham-Kiggan.png",
        focus: "Passionate about coaching individuals to unlock their full potential and become leaders. Graham has helped organizations build strong teams with intentional cultures.",
        qualifications: [
          "BSc Wits",
          "BCom UNISA",
          "Certificate in Coaching Practice USB",
          "19 years of coaching experience with over 4000 coaching hours",
          "Master Practitioner accreditation",
        ],
      },
      {
        name: "Bron Villet",
        role: "Mental Health & Behavioural Coach",
        image: "/assets/img/team/Bron-Villet.png",
        focus: "Specializes in leadership development, mental wellness in teams, and behavioural change in corporate environments.",
        qualifications: [
          "Certified Behavioural Coach, SA College of Applied Psychology",
          "Facilitator Accreditation, Participlan",
          "Transactional Analysis Training",
          "MBSR (Mindfulness-Based Stress Reduction) Course",
          "Neurozone Accreditation",
        ],
      },
      {
        name: "Candice King",
        role: "Breakthrough Life Coach",
        image: "/assets/img/team/Candice-King.png",
        focus: "Helping individuals discover and use their unique strengths to achieve personal and professional goals.",
        qualifications: [
          "NeuroLeadership Institute (Results Coaching Systems)",
          "Brain Based Intensive Coaching Training",
          "Integrative 9 Enneagram Practitioner",
          "Six Seconds Emotional Intelligence Network - Practitioner & Assessor",
          "Bachelor of Arts in Psychology",
        ],
      },
      {
        name: "Julie Robinson",
        role: "Executive Coach & Industrial/Organisational Psychologist",
        image: "/assets/img/team/Julie-Robinson.png",
        focus: "Julie brings a unique mindbody approach to leadership, self-awareness, and wellbeing.",
        qualifications: [
          "Registered Industrial/Organisational Psychologist with the HPCSA",
          "Certificate in Neuroscience Brain-Based Coaching through the NeuroLeadership Institute",
          "Certified Business Psychologist with the Association for Business Psychology (UK)",
          "Advanced Pneumanity Breathwork Practitioner",
          "Accredited Heartlines What's Your Story? Facilitator",
        ],
      },
      {
        name: "Vusi Kokela",
        role: "Executive Coach",
        image: "/assets/img/team/Vusi-Kokela.png",
        focus: "Empowering high-achieving leaders to unleash their potential, develop emotional intelligence, and create a more sustainable future.",
        qualifications: [
          "Certified Conscious Coaching Program facilitator",
          "Over 8 years of coaching experience in diverse industries",
        ],
      },
    ],
  },

  // Clients/Partners Section
  clients: {
    title: "Our Partners",
    list: [
      { title: "Appletree", url: "https://appletreegroup.co.za/", logo: "/assets/img/clients/appletree-logo.png" },
      { title: "The New Forest Company", url: "https://newforests.earth/", logo: "/assets/img/clients/the-new-forest-company-logo.png" },
      { title: "AVI-Products", url: "https://www.aviproducts.co.za/", logo: "/assets/img/clients/aviproducts-logo.png" },
      { title: "Kaomi", url: "https://www.kaomimarketing.com/", logo: "/assets/img/clients/kaomi-logo.png" },
      { title: "Freys", url: "https://freys.co.za/", logo: "/assets/img/clients/freys-logo.png" },
      { title: "Michaelhouse", url: "https://www.michaelhouse.org/", logo: "/assets/img/clients/michaelhouse-logo.png" },
      { title: "Metric Edge", url: "https://metricedge.co.za/", logo: "/assets/img/clients/metric-edge-logo.png" },
      { title: "Singita", url: "https://singita.com/", logo: "/assets/img/clients/singita-game-reserves-logo.png" },
      { title: "Mr Price Group", url: "https://mrpricegroup.com/", logo: "/assets/img/clients/mr-price-group-logo.png" },
    ],
  },

  // Testimonials Section
  testimonials: {
    title: "What Others Say",
    people: [
      { name: "Travis Gale", company: "Appletree", testimony: "We are privileged to partner with Craig in the coaching arena at Appletree. He is passionate about what he does which is highly infectious and inspirational to the rest of our team." },
      { name: "Anton Clarke", company: "IOEC", testimony: "Craig understands the nuanced and important balance between equipping a team with tools to better cope with their stressful lives and keeping a high-performance mindset." },
      { name: "Gerrie Noel", company: "Michaelhouse", testimony: "Having someone independent from your work and personal life to download all that is going through your head has been an invaluable discovery for me." },
      { name: "Matthew Merrick", company: "New Forests", testimony: "I thoroughly enjoy my sessions with Craig. He is clearly passionate about coaching people and trying to get them to realize their full potential." },
      { name: "Ross Rodger", company: "Olive Tree Church", testimony: "I've got to see him use many different skills to effectively bring people into good emotional spaces and then equip them to take appropriate next steps." },
      { name: "Sue Oosthuizen", company: "Vezikhono | Frey's Food Brands", testimony: "Craig is a natural leader and has quickly understood the demands and challenges of my world which has made it easy to work with him." },
      { name: "Jared Price", company: "Kaomi Marketing", testimony: "Craig is very relatable which helps me open up in our coaching sessions. I find Craig's approach adaptable in creating practices and actions that seem tailored for me." },
      { name: "Jenna Gamble", company: "Kaomi Marketing", testimony: "Craig is thoughtful, insightful and uplifting. He has unlocked strengths and abilities within me that I never knew I had locked away." },
      { name: "Johnathan Bailes", company: "Singita Game Reserves", testimony: "Craig has been a sensational life and business coach. He can connect on a deep level and has incredible values and judgement." },
      { name: "Jessica King", company: "Kaomi Marketing", testimony: "Craig's coaching sessions from the start have been a great learning curve for me. They have helped me grow as a person not only in my personal life, but in my professional workplace as well." },
      { name: "Austen Johnston", company: "Time and Tide", testimony: "I don't naturally gravitate towards sharing, being open or expressive. I internalise – which is not always the best way to live life! I've had several opportunities to engage leadership coaches in my career and you are the first that I've 'retained'." },
      { name: "Justin Sandler", company: "Kaomi Marketing", testimony: "The journey I have been on with you has been life changing. I've engaged with your coaching for over 2 years now, and I've changed dramatically." },
    ],
  },

  // SCARF Assessment Section
  scarf: {
    title: "SCARF Assessment",
    description: "You are accessing the English Language version of the SCARF\u00ae Assessment.",
    image: "/assets/img/content/scarf-assessment.png",
    welcomeText: "Welcome to the SCARF\u00ae Assessment, a short, multiple-choice survey.",
    details: "This assessment will give you a better understanding of your relative sensitivity towards different types of social drivers in each domain of SCARF\u00ae.",
    benefits: [
      "Understand how your role and work environment impact your current engagement",
      "Better regulate your emotions",
      "Better communicate your needs to others",
      "Make choices more suited to your own preferences",
    ],
    instructions: "Remember, there are no right or wrong answers. Once you click the button below, you can begin the assessment. Your results will appear on screen after submission, and you can print or email a copy for your records.",
    buttonText: "Take the SCARF Assessment",
    buttonLink: "/contact",
  },

  // Home Page Contact Section
  homeContact: {
    title: "Contact Us",
    text: "Ready to take the next step in your leadership journey?",
  },

  // Dedicated Contact Page
  contactPage: {
    heroTitle: "Get in Touch",
    heroSubtitle: "Ready to take the next step in your leadership journey? We'd love to hear from you.",
    infoTitle: "Contact Information",
    formTitle: "Send us a Message",
    labels: {
      name: "Your Name",
      email: "Your Email",
      subject: "Subject",
      message: "Message",
      namePlaceholder: "John Doe",
      emailPlaceholder: "john@example.com",
      subjectPlaceholder: "How can we help you?",
      messagePlaceholder: "Tell us more about your inquiry...",
      submitButton: "Send Message",
    },
    contactInfo: {
      email: {
        label: "Email",
        value: "craig@apexcoaching.co.za",
      },
      phone: {
        label: "Phone",
        value: "+27 73 316 7105",
      },
      website: {
        label: "Website",
        value: "www.apexleadership.co.za",
      },
    },
    socialTitle: "Follow Us",
    socialLinks: [
      { url: "https://www.facebook.com/ApexLeadershipSpecialists/", platform: "facebook" },
      { url: "https://www.linkedin.com/company/apex-leadership-specialists/", platform: "linkedin" },
      { url: "https://wa.me/27733167105", platform: "whatsapp" },
    ],
  },

  // Footer
  footer: {
    legal: "© Apex Leadership Specialists",
    social: [
      { url: "https://www.facebook.com/ApexLeadershipSpecialists/", platform: "facebook" },
      { url: "https://www.linkedin.com/company/apex-leadership-specialists/", platform: "linkedin" },
      { url: "https://wa.me/27733167105", platform: "whatsapp" },
    ],
  },
};