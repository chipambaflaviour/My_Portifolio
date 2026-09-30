import type { Portfolio } from './types'

/**
 * The single source of truth for the site's content.
 * Edit this file to update the portfolio; the components only render it.
 */
export const portfolio: Portfolio = {
  profile: {
    name: 'Flaviour Chipamba',
    initials: 'FC',
    title: 'ICT Professional · Software Developer · Digital Solutions',
    location: 'Lusaka, Zambia',
    headline: 'Building practical digital solutions that make work simpler, smarter and more connected.',
    intro:
      "I'm Flaviour Chipamba, an ICT professional and software developer based in Zambia. I work across software development, enterprise systems, ICT support and digital transformation, turning real-world challenges into technology people can actually use.",
    photo: {
      src: '/images/portrait.jpg',
      alt: 'Flaviour Chipamba in a red suit, arms folded, smiling',
      width: 624,
      height: 780,
    },
    availability: undefined,
  },

  contact: {
    email: 'chipambaflaviour360@gmail.com',
    github: 'https://github.com/chipambaflaviour',
    linkedin: undefined,
    // This site now lives at the old portfolio's address, so no "earlier portfolio" link.
    previousPortfolio: undefined,
  },

  about: [
    'I am an ICT professional from Zambia with a background in Information and Communication Technology with Education. My experience spans software development, ICT support, learning-management systems, enterprise applications and digital product development.',
    'I enjoy understanding how people work, spotting the practical problems in their day, and using technology to build solutions that are useful, accessible and maintainable. Alongside development I value communication, documentation, user training and collaboration, because technology works best when people can use it with confidence.',
    'I keep developing my skills across software engineering, UX and product design, enterprise technology and digital transformation.',
  ],

  aboutPhoto: {
    src: '/images/at-work.jpg',
    alt: 'Flaviour Chipamba typing at a desktop workstation in an office',
    caption: 'At work in Lusaka',
    width: 1400,
    height: 933,
  },

  values: [
    { title: 'Practical problem-solving', description: 'Start from the real problem and the people who have it.' },
    { title: 'Clear communication', description: 'Explain technical work in terms non-technical people can act on.' },
    { title: 'User-focused technology', description: 'Make tools easier to use, not just possible to use.' },
    { title: 'Maintainable, secure work', description: 'Build things the next developer can understand and trust.' },
    { title: 'Reliability and accountability', description: 'Follow through, and say so when something is not finished.' },
    { title: 'Collaboration', description: 'Good solutions come from working closely with users and teammates.' },
    { title: 'Continuous learning', description: 'Keep studying, keep practising, keep improving.' },
  ],

  faithStatement: {
    enabled: false,
    text: 'My Christian faith shapes how I try to work: with honesty, humility and care for the people my work serves.',
  },

  impact: [
    { value: '20%', label: 'Revenue growth at Axis Solutions, which in-house development and tender wins contributed to' },
    { value: '40%', label: 'Increase in enrolment at LSUC, including online learners, supported by the Moodle work' },
    { value: '6', label: 'Client and internal systems contributed to at Axis Solutions' },
    { value: 'ZRA', label: 'Among the first at Axis to onboard clients to ZRA Smart Invoice' },
  ],

  education: [
    {
      qualification: 'Bachelor of Information and Communication Technology with Education',
      institution: 'Chalimbana University',
      location: 'Zambia',
      period: '2021 – 2025',
      verification: 'Verified by the Zambia Qualifications Authority (ZAQA)',
    },
    {
      qualification: 'Grade 12 School Certificate',
      verification: 'Verified by the Zambia Qualifications Authority (ZAQA)',
    },
  ],

  educationPhoto: {
    src: '/images/graduation.jpg',
    alt: 'Flaviour Chipamba smiling in a green and red Chalimbana University graduation gown',
    caption: 'Graduation, Chalimbana University',
    width: 768,
    height: 1020,
  },

  educationNote: 'Copies of certificates and ZAQA verification are available on request.',

  experience: [
    {
      organisation: 'Axis Solutions Africa Limited',
      role: 'Software Developer Intern',
      period: 'January 2026 – Present',
      location: 'Lusaka, Zambia',
      summary:
        'I joined as part of the company’s first in-house software development team, at the point Axis Solutions moved from only reselling third-party enterprise software, such as ManageEngine and Zoho One, to also designing and building its own systems.',
      metrics: [
        { value: '20%', label: 'increase in company revenue, which in-house development and client tender wins contributed to' },
        { value: '6', label: 'client and internal systems I have helped develop, test and deploy' },
      ],
      achievements: [
        'Helped the company add its own software to what it sells, contributing to a 20% increase in revenue through in-house development and client tender wins.',
        'Among the first at Axis Solutions to work on ZRA Smart Invoice through RevPOS, onboarding clients and integrating them with the Zambia Revenue Authority.',
        'Contributed to tender proposals for website and software development projects, supporting new business and a broader revenue base.',
      ],
      responsibilities: [
        'Develop, test and deploy client and internal systems: InsurShield, RevPOS, an HR management system, a biometric attendance system integrated with Zoho People, the itSMF Zambia website and the ZIPS Event Management System.',
        'Frontend development, UX/UI design and system workflows, turning requirements into screens people can use.',
        'Configure hardware won through tenders, such as laptops, desktops and tablets, with the client’s required setup (Windows 11, Microsoft 365) before delivery.',
        'Demonstrate systems to stakeholders and management, and support client communication across digital channels.',
      ],
    },
    {
      organisation: 'Lusaka South University College (LSUC)',
      role: 'ICT Officer',
      location: 'Lusaka, Zambia',
      summary:
        'I looked after the college’s online learning platform and website. Bringing learning materials together on Moodle made it possible for online and distance students to study from anywhere, which helped the college grow.',
      metrics: [{ value: '40%', label: 'increase in student enrolment, including online learners, which the Moodle work contributed to' }],
      achievements: [
        'Contributed to a 40% increase in student enrolment, including online learners, by consolidating learning materials on Moodle and making remote study practical.',
        'Kept the college website current and secure, supporting its public image and giving students and staff accurate information.',
        'Ran ICT and Moodle training sessions that improved digital adoption among staff and students.',
      ],
      responsibilities: [
        'Organised course content on Moodle: study materials, assignments, past papers and quizzes in one place.',
        'Managed the official website, applied regular security updates and contributed to its move from WordPress to React.',
        'Provided technical support and troubleshooting, and guided non-technical users through digital systems and online learning.',
        'Supported users of the Microsoft Dynamics finance system, and contributed to a student management portal and a staff attendance system.',
      ],
      photo: {
        src: '/images/lsuc-presentation.jpg',
        alt: 'Flaviour Chipamba presenting from a laptop beside a Lusaka South University College banner',
        caption: 'Presenting at Lusaka South University College',
        width: 1230,
        height: 820,
      },
    },
    {
      organisation: "St. Theresa's Combined School",
      role: 'ICT Teaching Practice',
      period: '2024',
      summary:
        'Teaching practice as part of my ICT with Education degree. It sharpened how I explain technical ideas, plan instruction and support people who are learning something new, skills I now use in user training, onboarding and support.',
      responsibilities: [],
    },
  ],

  skills: [
    {
      title: 'Software development',
      skills: ['JavaScript', 'TypeScript', 'React', 'HTML', 'CSS', 'PHP', 'Laravel', 'Node.js', 'C#', 'Python', 'REST APIs'],
    },
    {
      title: 'Databases & backend services',
      skills: ['MySQL', 'PostgreSQL', 'Supabase', 'Firebase', 'Database design and integration'],
    },
    {
      title: 'Frontend & UI',
      skills: [
        'React',
        'Vite',
        'Tailwind CSS',
        'shadcn/ui',
        'Responsive web design',
        'Component-based development',
        'UX/UI implementation',
        'Figma-assisted design workflows',
      ],
    },
    {
      title: 'Systems & IT support',
      skills: [
        'Moodle administration',
        'WordPress',
        'Microsoft Dynamics user support',
        'Systems troubleshooting',
        'User training and technical documentation',
        'Enterprise application support',
        'Linux and Windows environments',
      ],
    },
    {
      title: 'Tools & collaboration',
      skills: ['Git', 'GitHub', 'Visual Studio Code', 'Figma', 'Codex and AI-assisted development', 'Docker and deployment workflows'],
    },
    {
      title: 'Enterprise technology & cybersecurity',
      note: 'Areas of exposure and practical familiarity, not certified expertise.',
      skills: [
        'ManageEngine products',
        'Kaspersky security solutions',
        'Fortinet',
        'Palo Alto Networks',
        'IT service management and ITIL concepts',
        'Cybersecurity awareness and basic security tooling',
      ],
    },
  ],

  projects: [
    {
      id: 'insurshield',
      name: 'InsurShield',
      purpose:
        'A motor insurance marketplace for Zambia. A driver describes their vehicle once, the request goes to every insurer on the platform at the same time, and they compare the quotes that come back, pay and receive their cover.',
      impact: [
        'Saves drivers from visiting or calling insurers one by one: a single request reaches all of them.',
        'Makes prices easy to compare, because each quote comes from the insurer itself and sits side by side with the others.',
        'Gives insurers one digital channel to receive requests, send quotations and issue policies.',
        'Works from a phone as a Progressive Web App, including photo-based vehicle inspection.',
      ],
      status: 'developed',
      statusDetail: 'PWA · Native App Planned',
      context: 'Axis Solutions Africa',
      year: '2026',
      featured: true,
      contribution: [
        'Built much of the customer journey and the insurer and staff portals as part of the Axis Solutions team.',
        'Implemented insurer onboarding, quotation documents, quote expiry and re-quote flows, and two-step policy issue.',
        'Built device-aware vehicle inspection photo capture and a claims hand-off flow.',
      ],
      technologies: ['React', 'Vite', 'Tailwind CSS', 'PWA', 'NestJS', 'PostgreSQL', 'Prisma', 'Keycloak'],
      note: 'Insurer, payment and vehicle-data integrations depend on partner connections and are not presented here as live.',
      image: {
        src: '/images/projects/insurshield.webp',
        alt: 'InsurShield home page: "Every insurer. One request." with a diagram routing one request to five insurers',
        width: 2000,
        height: 1093,
      },
    },
    {
      id: 'revpos',
      name: 'RevPOS',
      purpose:
        'A point-of-sale and business platform for Zambia’s retail and wholesale branches, bringing sales, stock, branches and ZRA Smart Invoice (fiscalisation) into one workspace.',
      impact: [
        'Lets an owner see sales, payment methods and stock alerts across every branch in one view, instead of chasing reports from each shop.',
        'Issues invoices through ZRA Smart Invoice as part of making a sale, so staying compliant is not a separate chore.',
        'Warns when products are running low, before shelves go empty.',
      ],
      status: 'live',
      statusDetail: 'ZRA Smart Invoice',
      context: 'Axis Solutions Africa',
      year: '2026',
      featured: true,
      contribution: [
        'Among the first at Axis Solutions to work on ZRA Smart Invoice, onboarding clients and integrating them with the Zambia Revenue Authority.',
        'Customer journey and UX planning, business onboarding flows and responsive product design.',
        'Frontend work on search and module-access behaviour.',
      ],
      note: 'Team product at Axis Solutions, an approved ZRA Smart Invoice vendor. The public demo uses sample business data.',
      demoUrl: 'https://demo.revpos.co.zm/',
      displayUrl: 'demo.revpos.co.zm',
      image: {
        src: '/images/projects/revpos.webp',
        alt: 'RevPOS landing page: "Every branch. A clearer day." beside a business overview dashboard with sales, branches and top products',
        width: 2000,
        height: 1129,
      },
    },
    {
      id: 'smartbiz',
      name: 'SmartBiz',
      purpose:
        'An enterprise operating system for small and growing businesses: sales and POS, inventory, purchasing, suppliers, customers, HR and payroll, and finance in one multi-branch workspace.',
      impact: [
        'Replaces separate spreadsheets and apps with one place to record sales, stock, staff and expenses.',
        'Puts revenue, VAT collected, money owed and pending approvals on one dashboard.',
        'Runs several branches and client organisations, with a platform view for managing each workspace.',
      ],
      status: 'in-development',
      context: 'Personal',
      year: '2026',
      featured: true,
      contribution: ['Designed and built independently, from the data model to the interface.'],
      technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Supabase'],
      sourceUrl: 'https://github.com/chipambaflaviour/SmartBiz',
      image: {
        src: '/images/projects/smartbiz.webp',
        alt: 'SmartBiz dashboard with revenue, VAT and receivables tiles, a revenue versus expenses chart and quick actions',
        width: 2000,
        height: 1122,
      },
    },
    {
      id: 'agriconnect',
      name: 'AgriConnect Zambia',
      purpose:
        'An agricultural marketplace where farmers list produce and livestock, and buyers browse, request and order directly.',
      impact: [
        'Connects farmers directly with buyers, so fewer sales depend on middlemen.',
        'Shows market prices, helping farmers price their produce with better information.',
        'Gives buyers one place to find produce from different farmers.',
      ],
      status: 'in-development',
      context: 'Personal',
      year: '2026',
      featured: true,
      contribution: [
        'Designed and built it: role-based marketplace, cart, buy requests, order and stock management, and earnings views.',
      ],
      technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Supabase', 'Zustand'],
      note: 'A development initiative. Not every intended capability is complete.',
      sourceUrl: 'https://github.com/chipambaflaviour/agriconnect',
      image: {
        src: '/images/projects/agriconnect.jpg',
        alt: 'AgriConnect home page, "Zambia’s Premier Agricultural Marketplace", with recently listed products and prices',
        width: 1080,
        height: 528,
      },
    },
    {
      id: 'biometric-attendance',
      name: 'Biometric Attendance System',
      purpose: 'Staff attendance captured biometrically and recorded in Zoho People automatically.',
      impact: ['HR no longer compiles attendance by hand, and records stay consistent with the HR system.'],
      status: 'developed',
      context: 'Axis Solutions Africa',
      year: '2026',
      contribution: ['Contributed to development, testing and deployment.'],
      technologies: ['Zoho People'],
    },
    {
      id: 'hrms',
      name: 'HR Management System',
      purpose: 'A human resources system for employee information and HR processes.',
      impact: ['Keeps employee records and HR processes in one system instead of paper files and spreadsheets.'],
      status: 'developed',
      context: 'Axis Solutions Africa',
      year: '2026',
      contribution: ['Contributed to development, testing and deployment.'],
    },
    {
      id: 'zips-events',
      name: 'ZIPS Event Management System',
      purpose: 'A SaaS platform for running conferences and events.',
      impact: ['Gives organisers one platform to manage an event instead of spreading the work across tools.'],
      status: 'developed',
      context: 'Axis Solutions Africa',
      year: '2026',
      contribution: ['Contributed to development, testing and deployment.'],
    },
    {
      id: 'itsmf-zambia',
      name: 'itSMF Zambia Website',
      purpose: 'The website for itSMF Zambia, the IT service management professional association.',
      impact: ['Gives the association a central, up-to-date place for its information online.'],
      status: 'developed',
      context: 'Axis Solutions Africa',
      year: '2026',
      contribution: ['Contributed to development, testing and deployment.'],
    },
    {
      id: 'moodle',
      name: 'Moodle Learning Platform',
      purpose: 'Study materials, assignments, past papers and quizzes organised on the college’s Moodle platform.',
      impact: [
        'Online and distance learners can study from anywhere, which contributed to a 40% increase in enrolment.',
        'Training sessions helped staff and students adopt the platform.',
      ],
      status: 'institutional',
      context: 'Lusaka South University College',
      year: '2025',
      technologies: ['Moodle'],
    },
    {
      id: 'website-migration',
      name: 'College Website: WordPress to React',
      purpose: 'Moving the college’s older WordPress website to a React-based frontend.',
      impact: ['Kept the information students and staff rely on, on a more modern and maintainable site.'],
      status: 'institutional',
      context: 'Lusaka South University College',
      year: '2025',
      contribution: ['Contributed to the frontend build, site structure and content presentation.'],
      technologies: ['React', 'WordPress'],
    },
    {
      id: 'student-portal',
      name: 'Student Management Portal',
      purpose: 'A portal bringing student information and administrative workflows into one system.',
      status: 'institutional',
      context: 'Lusaka South University College',
      year: '2025',
      contribution: ['Contributed to development of the portal.'],
    },
    {
      id: 'staff-attendance',
      name: 'Staff Attendance System',
      purpose: 'A web system for recording and managing staff attendance, built as an internship project.',
      status: 'academic',
      statusDetail: 'Internship project',
      context: 'Lusaka South University College',
      year: '2025',
      technologies: ['PHP'],
      sourceUrl: 'https://github.com/chipambaflaviour/staff-attendance-system',
      // Earlier demo, unreachable when checked. Re-add as demoUrl once it responds:
      // https://smart-attendance-system-sb9n.onrender.com/
    },
    {
      id: 'pupil-management',
      name: 'Pupil Management System',
      purpose:
        'A records application for managing pupil information through create, read, update and delete workflows, built as a third-year university project.',
      status: 'academic',
      context: 'Academic',
      year: '2024',
      technologies: ['PHP'],
      sourceUrl: 'https://github.com/chipambaflaviour/Pupil-Management-System',
    },
    {
      id: 'siza',
      name: 'SIZA — Higher Education Discovery',
      purpose: 'Unconfirmed: describe the project here once its purpose and features are verified.',
      status: 'prototype',
      context: 'Personal',
      demoUrl: 'https://siza-app.onrender.com/',
      // Hidden until the description is confirmed and the demo responds.
      published: false,
    },
  ],

  learning: [
    { title: 'Kaspersky Next EDR Foundation', provider: 'Kaspersky', kind: 'Training' },
    { title: 'ICIP — OPSWAT Introduction to Critical Infrastructure Protection', provider: 'OPSWAT', year: '2025', kind: 'Training' },
    { title: 'HRM Product Technical Training', provider: 'KnowBe4', kind: 'Training' },
    { title: 'C# classes, methods and object-oriented programming', provider: 'Udemy', kind: 'Course' },
    { title: 'Introduction to Web Development', provider: 'Genius Code Bootcamp', year: '2024', kind: 'Course' },
    { title: 'Build Apps Using React: In Development & Production', provider: 'Skillsoft Percipio', year: '2026', kind: 'Certificate' },
    {
      title: 'Advanced Docker: Working with Services & Applications on Multiple Containers',
      provider: 'Skillsoft Percipio',
      year: '2026',
      kind: 'Certificate',
    },
    { title: 'ITIL® 4 Foundation: Service Management Practices (Part 2)', provider: 'Skillsoft Percipio', year: '2026', kind: 'Certificate' },
    { title: 'Git & GitHub: Using GitHub for Source Code Management', provider: 'Skillsoft Percipio', year: '2026', kind: 'Certificate' },
    { title: 'Introduction to the Threat Landscape', provider: 'Fortinet', year: '2026', kind: 'Training' },
    { title: 'SOC Processes', provider: 'Palo Alto Networks', year: '2026', kind: 'Training' },
    { title: 'Network-Focused Security', provider: 'Palo Alto Networks', year: '2026', kind: 'Training' },
    { title: 'Student Membership', provider: 'Information and Communications Technology Association of Zambia (ICTAZ)', year: '2025', kind: 'Membership' },
    { title: 'Google UX Design Certificate', provider: 'Google', kind: 'In progress' },
  ],

  interests: [
    'Software engineering and application development',
    'UX/UI and product design',
    'Enterprise systems and systems integration',
    'Digital transformation',
    'ICT support and user enablement',
    'Cybersecurity and secure technology practices',
    'Cloud platforms and deployment',
    'Automation and practical AI-assisted development',
    'Technology for Zambian businesses and institutions',
  ],
}

export const publishedProjects = portfolio.projects.filter((project) => project.published !== false)
