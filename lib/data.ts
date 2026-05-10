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
  howIHelp?: string
  whatIDo?: { title: string; description: string }[]
  aboutCraig?: string
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

export interface Article {
  title: string
  excerpt: string
  image: string
  category: string
  url: string
}

export interface MotivationItem {
  text: string
}

export interface ProcessStep {
  number: string
  title: string
  description: string
  image: string
  imageAlt: string
}

export interface ProcessSection {
  title: string
  subtitle: string
  steps: ProcessStep[]
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

    // Scrolling Motivations Keywords
  motivationKeywords: [
    "Discover",
    "Learn",
    "Develop",
    "Focus",
    "Unlock",
    "Achieve",
    "Build",
    "Create",
    "Transform",
    "Grow",
    "Lead",
    "Inspire",
    "Motivate",
    "Empower",
    "Enhance",
    "Strengthen",
    "Elevate",
    "Advance",
    "Excel",
    "Thrive"
  ],

   // About Us | Who We Are | Challenge | Stats
   about: {
     sectionTitle: "WHO WE ARE",
      title: "Unlocking Potential Through People Development",
     "top-text": `Apex Leadership Specialists is a people development consultancy that works with individuals and teams to help them understand and achieve their true potential. Originally founded with a focus on leadership coaching, we have since developed a number of natural extensions to our core offering. These have given us the ability to go beyond simply focusing on individual impact to positively influence organisations in a more holistic and enduring way. While each individual has their own challenges, and each team has its own dynamic, we know that the fundamentals of what we offer remain the same. Whether working one-on-one or in groups, with leaders or operational teams, in all our work we aim to help people gain perspective to better understand themselves, their environment and the way in which they can be most effective within it.`,
     "bottom-text": "Whether working one-on-one or in groups, with leaders or operational teams, in all our work we aim to help people gain perspective to better understand themselves, their environment and the way in which they can be most effective within it.",
     statsChallenge: {
       items: [
         {
           icon: "Award",
           number: "7+",
           label: "Expert Coaches",
         },
         {
           icon: "Building2",
           number: "9+",
           label: "Partner Companies",
         },
         {
           icon: "MessageSquare",
           number: "12+",
           label: "Client Testimonials",
         },
       ],
     },
   },

   // Services Section / What We Do
   services: {
    sectionTitle: "SERVICES",
    title: "Our Capabilities",
    subtitle: "Integrated solutions designed to elevate individuals, teams, and organisations.",
     items: [
       {
         title: "Leadership and Resilience Coaching",
         description: "Working one-on-one or in focused groups to help individuals develop their leadership skills, enhance their performance and work more effectively as a part of their teams.",
         icon: "Leadership",
       },
       {
         title: "Facilitated Learning",
         description: "Engaging with leadership groups to help them build interpersonal skills and techniques to enhance team cohesion and effectiveness.",
         icon: "Learning",
       },
       {
         title: "People Development Strategy",
         description: "Collaborating with leadership to put programs and processes in place that support corporate culture, talent development, and succession planning.",
         icon: "Strategy",
       },
       {
         title: "Keynote Talks",
         description: "Sharing insights from the Global South to inspire and drive meaningful change among international audiences.",
         icon: "Keynote",
       },
       {
         title: "A Hero's Story",
         description: "Providing a space for inspiring individuals to share their stories of personal achievement or overcoming adversity to help motivate teams.",
         icon: "HeroStory",
       },
     ],
   },

  // Team Section / Meet the Coaches
  team: {
    sectionTitle: "THE TEAM",
    title: "Meet the Coaches",
    description: "Unlocking leadership potential requires the right coach – someone who not only possesses the skills but also aligns with your unique leadership style and personality. I've curated a cohort of Southern Africa's top coaches – passionate, skilled professionals who prioritize client growth. Let's connect you with the ideal coach to elevate your leadership and team performance through a powerful coaching chemistry.",
    people: [
      {
        name: "Craig Stuart",
        role: "Executive Coach",
        image: "/assets/team/craig-stuart.png",
        focus: "Driven, authentic, and intentional, Craig is passionate about helping individuals and teams unlock their potential through increased self-awareness, emotional intelligence, and improved thinking.",
        howIHelp: `The business world does not stop. The optimal way for us to focus on our own journey, however, is to slow down and allow the voice of an experienced and professional coach to speak into those areas that challenge us by holding up a mirror to our lives, understanding that the hardest person we will ever have to lead is ourselves.

Sustainable growth requires us to both experience events and then reflect on them. If you want to grow your leadership abilities, you need to create space for intentional reflection with someone you trust, who has integrity, and who wants to see you journey toward a better place.

The people who benefit the most from my coaching are:

• Leaders focused on developing their ability to self-lead and how they lead their teams.
• Leaders engaging in relational complexity, usually arising from a rapidly changing business landscape.
• New leaders embarking on discovering their own leadership style.
• Individuals wanting to create intentional and practical rhythms, routines, and habits to their lives.
• Anyone stuck in a rut needing new to change the way they solve problems, by changing the way they think.`,
        whatIDo: [
          {
            title: "Understanding",
            description: "Increase levels of self-awareness."
          },
          {
            title: "Strengthening",
            description: "Encourage, motivate, and hold accountable."
          },
          {
            title: "Unlocking",
            description: "Create positive and lasting change."
          }
        ],
        aboutCraig: `I am a coach and people development specialist who works with individuals and teams to create positive and lasting change. My work is grounded in the understanding that we are what we repeatedly do, and my approach involves helping people to overcome challenges through attention, repetition, and encouragement. This creates sound patterns of self-leadership through enhanced self-awareness. Not only does this process help individuals to be fully present in their work and life, it also ultimately empowers them to take control of what guides and drives them.

My key strength lies in navigating relational complexity in the workplace. I do this by helping my clients gain perspective and a clear understanding of their environment, themselves, and their role in those spaces. My coaching niche lies in my ability to create healthy rhythms, routines, and habits for those already on their leadership journey or those just starting out, with the core belief that "It is not the mountain we conquer, but ourselves."`,
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
        image: "/assets/team/Celia-Senekal.png",
        focus: "Helping individuals unlock their full potential through leadership development, career growth with purpose, and meaningful intelligence for stronger relationships and decision-making.",
        howIHelp: `As an executive coach with a deep foundation in psychology and communications, I believe that transformative leadership begins with self-awareness and the ability to connect authentically with others. In today's fast-paced business environment, leaders face unprecedented complexity—navigating diverse teams, making high-stakes decisions, and driving performance while maintaining personal wellbeing.

My coaching creates a safe yet challenging space for leaders to explore their potential, understand their impact, and develop the emotional intelligence needed to inspire and lead with confidence. Together, we'll work on:

• Developing authentic leadership presence that builds trust and engagement
• Enhancing communication and influence across all organizational levels
• Building resilience and strategic thinking in times of change and uncertainty
• Aligning personal values with professional goals for purposeful career growth
• Improving decision-making through deeper self-knowledge and emotional insight`,
        whatIDo: [
          {
            title: "Understanding",
            description: "Deepen self-awareness and emotional intelligence through neuroscience-based coaching."
          },
          {
            title: "Empowering",
            description: "Build confidence and communication skills to lead with authenticity and influence."
          },
          {
            title: "Transforming",
            description: "Create sustainable behavioural change that drives both personal and organizational results."
          }
        ],
        aboutCraig: `With a strong academic background in Psychology and Corporate Communications, complemented by practical experience as a technical trainer and assessor, I bring a unique blend of analytical depth and practical wisdom to my coaching practice. My approach integrates psychological principles with real-world application, helping leaders understand not just what to do, but why and how—creating lasting transformation.

I am passionate about unlocking human potential and believe that great leadership emerges when we align our inner world with our outer actions. My work with executives, emerging leaders, and teams focuses on bridging the gap between intention and impact, fostering environments where people can thrive and perform at their best.

Based in South Africa, I work with clients across industries and cultures, bringing a global perspective and deep respect for individual differences. My certifications in coaching, training, and the 5 Lenses Enneagram equip me with powerful tools to facilitate insight and growth at every level.`,
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
        image: "/assets/team/Graham-Kiggan.png",
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
        image: "/assets/team/Bron-Villet.png",
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
        image: "/assets/team/Candice-King.png",
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
        image: "/assets/team/Julie-Robinson.png",
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
        name: "Helen Stone",
        role: "Executive Coach & Wellness Specialist",
        image: "/assets/team/helen-stone.png",
        focus: "Empowering individuals to unlock their true potential through personalized coaching and holistic wellness practices.",
        howIHelp: `My mission is to guide and empower individuals like you to break barriers, overcome challenges, and achieve your dreams. Through personalized coaching, we're here to support your journey towards personal and professional fulfillment.

The people who benefit the most from my coaching are:

• Professionals seeking career advancement and leadership growth
• Individuals navigating major life transitions and purpose discovery
• Leaders wanting to balance ambition with wellbeing
• Anyone ready to break through limiting beliefs and embrace their potential`,
        whatIDo: [
          {
            title: "Understanding",
            description: "Deepen self-awareness and emotional intelligence through personalized assessments."
          },
          {
            title: "Empowering",
            description: "Build confidence and communication skills to lead with authenticity and influence."
          },
          {
            title: "Transforming",
            description: "Create sustainable behavioural change that drives both personal and organizational results."
          }
        ],
        aboutCraig: `Helen Stone is a seasoned executive coach and wellness specialist with over 15 years of experience in leadership development and personal transformation. Her unique approach blends evidence-based coaching methodologies with mindfulness and wellness practices.

Helen holds certifications from the NeuroLeadership Institute and is a certified coach through the International Coach Federation. She specializes in helping high-performing professionals navigate complexity, find their authentic voice, and achieve sustainable success without burnout.

Based in Cape Town, Helen works with executives, entrepreneurs, and high-potential individuals across Africa and internationally, delivering coaching programs that create lasting impact.`,
        qualifications: [
          "Masters in Organizational Psychology",
          "Certified Executive Coach - NeuroLeadership Institute",
          "International Coach Federation (ICF) Accredited",
          "Mindfulness-Based Stress Reduction Certification",
          "Positive Psychology Practitioner",
        ],
      },
    ],
  },

     // Assessment Section | SCARF
   scarf: {
     sectionTitle: "ASSESSMENT",
     title: "SCARF Assessment",
     description: "You are accessing the English Language version of the SCARF® Assessment.",
    image: "/assets/content/scarf-assessment.png",
    welcomeText: "Welcome to the SCARF® Assessment, a short, multiple-choice survey.",
    details: "This assessment will give you a better understanding of your relative sensitivity towards different types of social drivers in each domain of SCARF®.",
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


    // Clients/Partners Section
    clients: {
      sectionTitle: "OUR PARTNERS",
      title: "Our Partners",
      subtitle: "Trusted by leading organisations across Southern Africa.",
      list: [
        { title: "Appletree", url: "https://appletreegroup.co.za/", logo: "/assets/clients/appletree-logo.png" },
        { title: "The New Forest Company", url: "https://newforests.earth/", logo: "/assets/clients/the-new-forest-company-logo.png" },
        { title: "AVI-Products", url: "https://www.aviproducts.co.za/", logo: "/assets/clients/aviproducts-logo.png" },
        { title: "Kaomi", url: "https://www.kaomimarketing.com/", logo: "/assets/clients/kaomi-logo.png" },
        { title: "Freys", url: "https://freys.co.za/", logo: "/assets/clients/freys-logo.png" },
        { title: "Michaelhouse", url: "https://www.michaelhouse.org/", logo: "/assets/clients/michaelhouse-logo.png" },
        { title: "Metric Edge", url: "https://metricedge.co.za/", logo: "/assets/clients/metric-edge-logo.png" },
        { title: "Singita", url: "https://singita.com/", logo: "/assets/clients/singita-game-reserves-logo.png" },
        { title: "Mr Price Group", url: "https://mrpricegroup.com/", logo: "/assets/clients/mr-price-group-logo.png" },
      ],
    },

    // Testimonials Section
   testimonials: {
     sectionTitle: "What Others Say",
     subtitle: "Trusted by leaders across industries",
     people: [
       { name: "Travis Gale", company: "Appletree", icon: "MessageSquare", testimony: "We are privileged to partner with Craig in the coaching arena at Appletree. He is passionate about what he does which is highly infectious and inspirational to the rest of our team." },
       { name: "Anton Clarke", company: "IOEC", icon: "MessageSquare", testimony: "Craig understands the nuanced and important balance between equipping a team with tools to better cope with their stressful lives and keeping a high-performance mindset." },
       { name: "Gerrie Noel", company: "Michaelhouse", icon: "MessageSquare", testimony: "Having someone independent from your work and personal life to download all that is going through your head has been an invaluable discovery for me." },
       { name: "Matthew Merrick", company: "New Forests", icon: "MessageSquare", testimony: "I thoroughly enjoy my sessions with Craig. He is clearly passionate about coaching people and trying to get them to realize their full potential." },
       { name: "Ross Rodger", company: "Olive Tree Church", icon: "MessageSquare", testimony: "I've got to see him use many different skills to effectively bring people into good emotional spaces and then equip them to take appropriate next steps." },
       { name: "Sue Oosthuizen", company: "Vezikhono | Frey's Food Brands", icon: "MessageSquare", testimony: "Craig is a natural leader and has quickly understood the demands and challenges of my world which has made it easy to work with him." },
       { name: "Jared Price", company: "Kaomi Marketing", icon: "MessageSquare", testimony: "Craig is very relatable which helps me open up in our coaching sessions. I find Craig's approach adaptable in creating practices and actions that seem tailored for me." },
       { name: "Jenna Gamble", company: "Kaomi Marketing", icon: "MessageSquare", testimony: "Craig is thoughtful, insightful and uplifting. He has unlocked strengths and abilities within me that I never knew I had locked away." },
       { name: "Johnathan Bailes", company: "Singita Game Reserves", icon: "MessageSquare", testimony: "Craig has been a sensational life and business coach. He can connect on a deep level and has incredible values and judgement." },
       { name: "Jessica King", company: "Kaomi Marketing", icon: "MessageSquare", testimony: "Craig's coaching sessions from the start have been a great learning curve for me. They have helped me grow as a person not only in my personal life, but in my professional workplace as well." },
       { name: "Austen Johnston", company: "Time and Tide", icon: "MessageSquare", testimony: "I don't naturally gravitate towards sharing, being open or expressive. I internalise – which is not always the best way to live life! I've had several opportunities to engage leadership coaches in my career and you are the first that I've 'retained'." },
       { name: "Justin Sandler", company: "Kaomi Marketing", icon: "MessageSquare", testimony: "The journey I have been on with you has been life changing. I've engaged with your coaching for over 2 years now, and I've changed dramatically." },
     ],
  },



  // Articles Section
  articles: [
    {
      title: "The Future of Leadership Development",
      excerpt: "Exploring how neuroscience and psychology are reshaping leadership training in the modern workplace.",
      image: "/assets/portfolio/franchises.jpg",
      category: "Leadership",
      url: "/articles/future-of-leadership",
    },
    {
      title: "Building Resilient Teams",
      excerpt: "Key strategies for developing teams that thrive under pressure and adapt to change.",
      image: "/assets/portfolio/insurance.jpg",
      category: "Team Building",
      url: "/articles/building-resilient-teams",
    },
    {
      title: "The Science of Decision Making",
      excerpt: "Understanding cognitive biases and how they impact leadership effectiveness.",
      image: "/assets/textblock/testimonial-wall.png",
      category: "Psychology",
      url: "/articles/science-of-decision-making",
    },
  ],

  // Home Page Contact Section
  homeContact: {
    title: "Contact Us",
    text: "Ready to take the next step in your leadership journey?",
    label: "Get Started",
  },

  // Subscribe Section
  subscribe: {
    title: "Stay Updated",
    text: "Get the latest insights on leadership development and people growth delivered to your inbox.",
  },

   // Dedicated Contact Page
   contactPage: {
     sectionTitle: "Contact",
     contactTitle: "Get in Touch",
     contactParagraph: "Ready to take the next step in your leadership journey? We'd love to hear from you.",
     ContactInformation: {
       ContactInformationEmail: "craig@apexcoaching.co.za",
       ContactInformationPhone: "+27 73 316 7105",
       ContactInformationWebsite: "www.apexleadership.co.za",
     },
     ContactSocialLinks: [
       { url: "https://www.facebook.com/ApexLeadershipSpecialists/", platform: "facebook" },
       { url: "https://www.linkedin.com/company/apex-leadership-specialists/", platform: "linkedin" },
       { url: "https://wa.me/27733167105", platform: "whatsapp" },
     ],
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
   },

    // Process Section (How Brands Work With Us)
    process: {
      sectionTitle: "THE PROCESS",
      title: "HOW BRANDS WORK WITH US",
      subtitle: "Our proven 3-step process delivers measurable leadership transformation",
      steps: [
       {
         number: "01",
         title: "Assess & Align",
         description: "We begin with a comprehensive leadership audit to identify strengths, gaps, and opportunities aligned with your business objectives.",
         image: "/assets/content/1_0YM6H-PpCsRLwYCpnqBYpA.jpg",
         imageAlt: "Leadership assessment workshop with team"
       },
       {
         number: "02",
         title: "Develop & Implement",
         description: "Custom coaching programs and development plans are created and executed with measurable milestones and accountability frameworks.",
         image: "/assets/content/360_F_170903108_dLHTUqgzwxqcOGl5ndpnHc46RhmRK5co.jpg",
         imageAlt: "Executive coaching session in progress"
       },
       {
         number: "03",
         title: "Measure & Evolve",
         description: "We track progress against KPIs, refine approaches based on data, and ensure sustainable leadership growth that drives business results.",
         image: "/assets/content/images.jfif",
         imageAlt: "Leadership team reviewing progress metrics"
       },
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

     // Trial Section (Why Trial Matters)
 trial: {
       sectionTitle: "TRANSFORMATION THROUGH ACTION",
       title: "The Power of Experiential Growth",
       description: "True leadership isn't found in a textbook or a slide deck. Real growth happens when you step out of your comfort zone, apply new frameworks in real-time, and observe the immediate impact on your team.",
       image: "/assets/content/download.jpg",
       imageAlt: "Executive coaching session in progress",
      cards: [
        {
          icon: "Zap",
          title: "Applied Learning",
          body: "Theory only takes you so far. We focus on real-world application, ensuring new leadership behaviors become permanent habits through practice.",
        },
        {
          icon: "RefreshCw",
          title: "The Feedback Loop",
          body: "Growth requires a mirror. Our process provides immediate, objective insights into your leadership style, highlighting blind spots in real-time.",
        },
        {
          icon: "TrendingUp",
          title: "Measurable Impact",
          body: "Move beyond 'feeling' like a better leader. Ground your development in tangible results that elevate both your performance and your team's culture.",
        },
      ],
    },

  }
