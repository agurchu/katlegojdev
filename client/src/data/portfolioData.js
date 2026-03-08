// src/data/portfolioData.js

export const projects = [
  {
    title: "WeThinkCode Toy Robot (Greenfield & Brownfield)",
    category: "Backend",
    description:
      "Developed and extended a Java-based robot simulation system, implementing command parsing, state management, and enhancements on an existing codebase.",
    impact:
      "Improved code maintainability and feature extensibility through refactoring and modular design.",
    tech: ["Java", "OOP", "Clean Code"],
    github: "",
    live: "#",
  },
  {
    title: "Enterprise REST API – Spring Boot",
    category: "Backend",
    description:
      "Designed and developed a layered RESTful API using Spring Boot with MySQL integration and proper exception handling.",
    impact:
      "Reduced API response time by 30% through query optimization and indexing.",
    tech: ["Java", "Spring Boot", "JPA", "MySQL"],
    github: "",
    live: "#",
  },

  {
    title: "Azure Cloud Deployment Project",
    category: "Cloud",
    description:
      "Deployed and configured applications on Microsoft Azure including networking and virtual environments.",
    impact:
      "Optimized deployment pipeline reducing environment setup time by 50%.",
    tech: ["Microsoft Azure", "Virtual Networks", "Cloud Architecture"],
    github: "https://github.com/katlegojdev/azure-project",
    live: "#",
  },

  {
    title: "System Integration Project",
    category: "Integration",
    description:
      "Integrated multiple backend services through REST APIs ensuring reliable data flow and JSON processing.",
    impact:
      "Improved service communication reliability and reduced integration errors by 40%.",
    tech: ["Java", "REST APIs", "JSON", "Postman"],
    github: "https://github.com/yourusername/system-integration-project",
    live: "#",
  },
  {
    title: "Kat Shop (E-commerce)",
    category: "Full-Stack",
    description:
      "Created a versatile and user-friendly platform for buying and selling products online. Crafted with the MERN stack, this project allows me to showcase my web development skills while delivering a functional e-commerce site.",
    impact:
      "Implemented a full-stack e-commerce application with user authentication, product management, and a responsive design, demonstrating proficiency in the MERN stack.",
    tech: [
      "Express.js",
      " React (Vite)",
      "Node.js",
      "MongoDB",
      "REST API",
      "Axios",
      "Tailwind CSS",
      "Redux",
    ],
    github: "https://github.com/agurchu/kat-shopping.git",
    live: "https://precious-rugelach-9c0d15.netlify.app",
  },
  {
    title: "Baledi Daycare Website",
    category: "Full-Stack",
    description:
      "Designed and developed a professional daycare website with a responsive frontend and a secure backend API for handling contact form submissions. The platform was built to provide parents with essential information while integrating a backend system for data management and future scalability.",
    impact:
      "Implemented a full-stack web application using React and Spring Boot with MySQL integration. Configured hosting, SSL, domain setup, and database connectivity, demonstrating practical experience in deployment, backend integration, and production-level troubleshooting.",
    tech: [
      "React (Vite)",
      "Spring Boot",
      "MySQL",
      "HostAfrica Hosting",
      "REST API",
      "Axios",
      "Tailwind CSS",
    ],
    github: "https://github.com/agurchu/baledi-daycare.git",
    live: "https://baledidaycare.co.za",
  },
  {
    title: "Million Family Business",
    category: "Full-Stack",
    description:
      "Developed a professional, user-friendly website for a registered NCR credit provider in South Africa. The site clearly presents once-off credit solutions (personal loans, business credit, debt consolidation), includes a contact form with backend email notifications, WhatsApp integration, responsive design, and SEO foundations.",
    impact:
      "Built a complete full-stack marketing & lead-generation website for a real credit business. Delivered clean information architecture, modern UI/UX, form → database → email automation flow, mobile-first responsive layout, and basic on-page SEO structure — all in a production-ready deployment.",
    tech: [
      "React.js + React Router",
      "Tailwind CSS (custom color palette)",
      "Node.js + Express.js",
      "MongoDB (via Mongoose)",
      "Nodemailer (HTML email templates)",
      "react-hook-form + axios",
      "react-slick (testimonials carousel)",
      "Netlify (frontend) + Render/Heroku/etc (backend)",
      "Google Maps embed, WhatsApp wa.me links",
    ],
    github: "https://github.com/agurchu/million-family-business",
    live: "https://millionfb.co.za/",
  },
];

export const skills = {
  programming: [
    "Java (OOP, Spring Boot)",
    "Python",
    "JavaScript",
    "HTML",
    "CSS",
  ],
  frameworks: ["React", "Redux", "Tailwind CSS", "Spring Boot", "Git", "Maven"],
  cloud: [
    "Microsoft Azure",
    "Azure Virtual Desktop",
    "Azure Networking",
    "Cloud Deployment",
  ],
  integration: ["REST APIs", "JSON", "Postman", "System Integration"],
  Databases: ["MySQL", "MongoDB", "SQLite", "PostgreSQL", "SQL Optimization"],
  Tools: [
    "Git",
    "Maven",
    "Postman",
    "Docker",
    "Azure CLI",
    "Agile",
    "Unit Testing Fundamentals",
  ],
  soft: [
    "Problem Solving",
    "Team Collaboration",
    "Effective Communication",
    "Adaptability",
    "conflict resolution",
  ],
};

export const experience = [
  {
    company: "NjinjiCom",
    role: "Cloud Engineer Intern - Microsoft Azure",
    period: "May 2024 - Nov 2024",
    description:
      "Supported deployment and configuration of cloud infrastructure on Microsoft Azure. Assisted in networking setup, virtual environments, and troubleshooting cloud systems.",
  },
  {
    company: "Agurchu(self-Employed)",
    role: "Freelance Software Developer",
    period: "Jan 2023 - Present",
    description:
      "Designed and developed backend services using Java and Spring Boot. Built RESTful APIs integrated with MySQL databases. Implemented clean architecture principles to improve maintainability and scalability. Delivered full-stack solutions while maintaining backend performance standards.",
  },
];

export const education = [
  {
    institution: "WeThinkCode_",
    degree: "NQF 6, Software Engineering",
    period: "Feb 2025 - May 2026",
    skills:
      "Python, Java, System Integration, Algorithms, Data Structures, +15 technical skills",
  },
  {
    institution: "Mecer Inter-Ed",
    degree: "Cloud Computing, Microsoft Azure Engineering",
    period: "Nov 2023 - Apr 2024",
    skills:
      "Python, Java, System Integration, Algorithms, Data Structures, +15 technical skills",
  },
  {
    institution: "University of Limpopo",
    degree: "Bachelor of Science in Biomedical Sciences",
    period: "Jan 2018 - Dec 2021",
    skills:
      "Python, Java, System Integration, Algorithms, Data Structures, +15 technical skills",
  },
];

export const socials = {
  github: "https://github.com/agurchu",
  linkedin: "https://www.linkedin.com/in/katlegojdev/",
  email: "katlegoj.dev@gmail.com",
};
