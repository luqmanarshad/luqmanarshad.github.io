export const profile = {
  name: 'Luqman Arshad',
  title: 'Full Stack Engineer',
  stack: 'Laravel · Vue.js · Angular · MySQL',
  location: 'Lahore, Punjab, Pakistan',
  email: 'luqmanarshad469@gmail.com',
  phone: '+92 336 4003281',
  whatsapp: 'https://wa.me/923364003281',
  github: 'https://github.com/luqmanarshad',
  linkedin: 'https://www.linkedin.com/in/luqman-arshad-16b8b3112/',
  resume: '/Luqman_Arshad_Resume.pdf',
  coverLetter: '/Luqman_Arshad_Cover_Letter.pdf',
  tagline:
    'I build secure, scalable enterprise web applications and REST APIs with Laravel, Vue.js and Angular, from government information systems to multi-tenant ERP SaaS.',
  about: [
    'Full Stack Engineer with 7+ years of experience designing, developing and maintaining enterprise-grade web applications. My daily stack is PHP, Laravel, Vue.js, Angular, MySQL and Redis.',
    'I have delivered government information systems at the Punjab Information Technology Board (PITB) and the Punjab LG&CD Department, and worked on a multi-tenant ERP SaaS platform at Clebiz, Denmark.',
    'I care about clean architecture (Repository Pattern, RBAC, queues and jobs), query performance, and APIs that other teams can rely on.',
  ],
  stats: [
    { value: '7+', label: 'Years of experience' },
    { value: '4', label: 'Organizations' },
    { value: '50+', label: 'Projects delivered' },
    { value: '3', label: 'Sectors: Gov, ERP, E-commerce' },
  ],
}

export const skills = [
  { group: 'Backend', items: ['PHP', 'Laravel', 'REST APIs', 'Authentication & Authorization', 'RBAC', 'Repository Pattern', 'MVC', 'Queues & Jobs', 'CodeIgniter', 'Yii'] },
  { group: 'Frontend', items: ['Vue.js', 'Angular', 'Inertia.js', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'Bootstrap', 'HTML5 / CSS3', 'jQuery / AJAX'] },
  { group: 'Data', items: ['MySQL', 'Redis', 'Query Optimization'] },
  { group: 'Services & Integrations', items: ['Firebase', 'Twilio', 'Pusher', 'DomPDF', 'Government APIs'] },
  { group: 'Tools', items: ['Git', 'GitHub', 'GitLab', 'Postman', 'Laragon', 'WordPress'] },
]

export const experience = [
  {
    role: 'Software Engineer',
    company: 'Punjab Local Government & Community Development Department (LG&CD)',
    project: 'PMIU – IT Based Monitoring & Information System (PMIU-ITBMS)',
    period: 'July 2026 – Present',
    points: [
      'Develop enterprise-grade government web applications using PHP Laravel, Angular, MySQL and Redis.',
      'Design and maintain secure RESTful APIs, including authentication, authorization and RBAC.',
      'Build budgeting, reporting and workflow automation modules.',
      'Optimize SQL queries and use Redis with Laravel Queues & Jobs for background processing.',
      'Troubleshoot production issues in collaboration with QA and stakeholders.',
    ],
  },
  {
    role: 'Senior Software Engineer',
    company: 'Clebiz, Denmark',
    project: 'Multi-tenant ERP SaaS platform',
    period: 'February 2025 – June 2026',
    points: [
      'Developed and enhanced a multi-tenant ERP SaaS platform.',
      'Built customer, invoicing and workforce management modules.',
      'Implemented the Repository Pattern and REST APIs.',
      'Optimized MySQL performance and integrated DomPDF for document generation.',
    ],
  },
  {
    role: 'Full Stack Engineer',
    company: 'Punjab Information Technology Board (PITB)',
    project: 'Government information systems',
    period: 'March 2020 – February 2025',
    points: [
      'Developed enterprise government applications using Laravel and Vue.js.',
      'Integrated Firebase, Twilio, Pusher and government APIs.',
      'Implemented the Repository Pattern and optimized SQL queries.',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'Lead Concept Solution',
    project: 'Zero Docs and Laravel enterprise apps',
    period: 'March 2019 – March 2020',
    points: [
      'Developed enterprise Laravel applications including Zero Docs.',
      'Worked across backend, frontend, testing and optimization.',
    ],
  },
]

export const projects = [
  {
    name: 'Lapzo Store',
    type: 'Full Stack E-Commerce',
    description:
      'Responsive e-commerce platform with a dynamic product catalog, category management, shopping cart and a product management dashboard, backed by REST API integration.',
    tags: ['Vue.js', 'REST API', 'E-commerce'],
    live: 'https://jamshaidcomputer.vercel.app/',
    featured: true,
  },
  {
    name: 'Translation Management Service',
    type: 'Backend REST API',
    description:
      'Laravel 13 API for storing, tagging, searching and exporting translations across multiple locales. Handles 100k+ keys with a cached JSON export under 500ms, MySQL FULLTEXT search, Sanctum token auth, Docker setup and PHPUnit tests.',
    tags: ['Laravel', 'PHP 8.3', 'MySQL', 'REST API', 'Docker'],
    live: '/demos/translation-api/',
    repo: 'https://github.com/luqmanarshad/translation-management-service',
    featured: true,
  },
  {
    name: 'School Management System',
    type: 'Live Demo',
    description:
      'School management demo with a dashboard, student records (search, add, delete), daily attendance and fee tracking. Runs on sample data in your browser.',
    tags: ['Vue.js', 'Tailwind CSS', 'Dashboard'],
    live: '/demos/school/',
    repo: 'https://github.com/luqmanarshad/school-management-demo',
  },
  {
    name: 'Pizza Shop Ordering System',
    type: 'Live Demo',
    description:
      'Pizza shop demo with a menu, size and topping options, cart, checkout (delivery or pickup) and a kitchen view to move orders through their stages. Runs on sample data in your browser.',
    tags: ['Vue.js', 'Tailwind CSS', 'Order Management'],
    live: '/demos/pizza/',
    repo: 'https://github.com/luqmanarshad/pizza-shop-demo',
  },
  {
    name: 'PWD SPU – Population Welfare',
    type: 'Government System',
    description:
      'Comprehensive management system for the Population Welfare Department, built with Laravel and Vue.js, with Twilio integration for SMS notifications.',
    tags: ['Laravel', 'Vue.js', 'Twilio'],
    repo: 'https://github.com/luqmanarshad/Pwd-spu-project-population-welfare-',
  },
  {
    name: 'Zero Docs',
    type: 'Document Management',
    description:
      'Document management system for handling, storing and retrieving digital documents, built with Laravel and Vue.js with a secure platform for document workflows.',
    tags: ['Laravel', 'Vue.js', 'Security'],
    repo: 'https://github.com/luqmanarshad/Zero-Docs',
  },
  {
    name: 'ICMS',
    type: 'Industrial Commodity Management',
    description:
      'Industrial Commodity Management System built with Laravel and Bootstrap to streamline the efficient management of industrial commodities.',
    tags: ['Laravel', 'Bootstrap', 'MySQL'],
    repo: 'https://github.com/luqmanarshad/ICMS',
  },
  {
    name: 'FDIMS',
    type: 'Food Inventory System',
    description:
      'Food Digitization Inventory Management System: a Laravel-based platform for automating food inventory operations.',
    tags: ['Laravel', 'MySQL', 'Automation'],
    repo: 'https://github.com/luqmanarshad/Food_digitization_inventory_managment_system-FDIMS-',
  },
]

export const education = {
  degree: 'Bachelor of Science in Information Technology (BSIT)',
  school: 'University of Sargodha',
  period: '2014 – 2018',
  certifications: ['Competitive Analysis', 'Website Development'],
  languages: ['English', 'Urdu', 'Punjabi'],
}
