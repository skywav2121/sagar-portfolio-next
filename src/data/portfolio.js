export const portfolioData = {
  personal: {
    name: "Sagar Wavare",
    title: "Junior Web Developer & Full-Stack .NET Engineer",
    shortTitle: "Full-Stack .NET Developer",
    location: "At. Mahim, Palghar, 401404, Maharashtra, India",
    phone: "+91 8668946352",
    email: "sagarwavare2015@gmail.com",
    linkedin: "https://in.linkedin.com/in/sagar-wavare-33a815213",
    status: "Open to New Opportunities · MMXXVI",
    yearsExperience: "4+",
    bio: "Enthusiastic and dedicated .NET Developer with 4 years of experience designing, developing, and maintaining high-performance web applications using .NET MVC and .NET Core. Expert in architecting secure RESTful APIs for Android and Flutter mobile apps, database optimization with SQL Server, and crafting responsive frontend user interfaces.",
    quote: "Good Architecture & Clean Code Build Lasting Impact.",
  },

  skills: {
    categories: [
      { id: "all", name: "All Technologies" },
      { id: "backend", name: "Backend & .NET" },
      { id: "frontend", name: "Frontend & UI" },
      { id: "database", name: "Database & Cloud" },
      { id: "tools", name: "Tools & DevOps" },
    ],
    items: [
      { name: "C#", category: "backend", level: "Expert", years: "4 yrs", desc: "Core object-oriented design, async patterns, LINQ, and robust backend logic." },
      { name: ".NET Core", category: "backend", level: "Advanced", years: "3+ yrs", desc: "Building cross-platform microservices, dependency injection, and scalable web apps." },
      { name: "ASP.NET MVC", category: "backend", level: "Expert", years: "4 yrs", desc: "Enterprise web architecture, controllers, Razor views, routing, and filters." },
      { name: "RESTful Web APIs", category: "backend", level: "Advanced", years: "3+ yrs", desc: "Contract design, token authentication (JWT), and mobile integration for Android & Flutter." },
      { name: "SQL Server", category: "database", level: "Expert", years: "4 yrs", desc: "Complex stored procedures, triggers, index optimization, and relational schema design." },
      { name: "HTML5 & CSS3", category: "frontend", level: "Expert", years: "4 yrs", desc: "Semantic structure, responsive layouts, flexbox, CSS grid, and modern animations." },
      { name: "JavaScript (ES6+)", category: "frontend", level: "Advanced", years: "4 yrs", desc: "Asynchronous programming, DOM manipulation, client-side state, and event handling." },
      { name: "Next.js & React", category: "frontend", level: "Intermediate", years: "2 yrs", desc: "Modern component-driven web apps, SSR, App Router, and server actions." },
      { name: "Bootstrap", category: "frontend", level: "Certified", years: "4 yrs", desc: "Udemy certified; rapid prototyping of responsive grid systems and UI kits." },
      { name: "jQuery", category: "frontend", level: "Advanced", years: "4 yrs", desc: "Dynamic UI interactions, AJAX requests, form validation, and plugin integration." },
      { name: "Azure", category: "database", level: "Proficient", years: "2 yrs", desc: "App Services deployment, Azure SQL Database management, and basic cloud storage." },
      { name: "Git & GitHub", category: "tools", level: "Advanced", years: "4 yrs", desc: "Branching strategies, pull requests, version control, and team collaboration." },
      { name: "Visual Studio & VS Code", category: "tools", level: "Expert", years: "4 yrs", desc: "Debugging, profiling, NuGet package management, and IDE workflows." },
      { name: "Postman", category: "tools", level: "Advanced", years: "3 yrs", desc: "API testing, automated test collections, request mocking, and environment variables." },
    ]
  },

  experience: [
    {
      company: "Techiefleet Technologies",
      role: "Junior Web Developer",
      period: "8 Aug 2022 - Present",
      location: "Mumbai / Remote",
      type: "Full-Time",
      description: "Driving the backend and full-stack development of enterprise web applications and mobile service backends.",
      achievements: [
        "Architected and maintained web applications using .NET MVC and .NET Core with 99.9% uptime.",
        "Engineered, tested, and documented secure RESTful APIs serving both Android and Flutter mobile apps.",
        "Created complex SQL Server stored procedures, views, and queries, optimizing query response time by 30%.",
        "Implemented token-based authentication and granular authorization mechanisms to secure sensitive endpoints.",
        "Developed clean, responsive frontend interfaces with HTML5, CSS3, JavaScript, Bootstrap, and jQuery.",
      ],
      tags: [".NET Core", "ASP.NET MVC", "SQL Server", "REST APIs", "Flutter Integration", "C#", "JavaScript"]
    },
    {
      company: "Goup Technologies",
      role: "Web Developer Trainee",
      period: "1 Nov 2021 - 30 Apr 2022",
      location: "Mumbai",
      type: "Internship / Trainee",
      description: "Built web modules, assisted in database design, and resolved critical bugs in production software.",
      achievements: [
        "Developed and maintained web applications using C#, ASP.NET MVC, and Microsoft SQL Server.",
        "Collaborated tightly with QA and testing teams to resolve defects, resulting in reducing reported bugs by 25%.",
        "Wrote structured database migration scripts and validated user inputs across all web forms.",
        "Participated in daily standups and agile sprint reviews for timely delivery of client requirements.",
      ],
      tags: ["C#", "ASP.NET MVC", "SQL Server", "Bug Fixing", "HTML/CSS", "QA Collaboration"]
    }
  ],

  education: [
    {
      institution: "University Of Mumbai",
      degree: "Masters Of Computer Science (M.Sc CS)",
      period: "Jun 2019 - Dec 2021",
      cgpa: "7.79 CGPA",
      location: "Mumbai, India",
      details: "Comprehensive coursework in Advanced Database Systems, Software Architecture, Distributed Computing, Algorithm Design, and Information Security."
    }
  ],

  projects: [
    {
      id: "encyklomedia",
      title: "Encyklomedia",
      tagline: "Media & Entertainment Professional Ecosystem",
      category: "B2B Platform",
      url: "https://encyklomedia.in",
      image: "/projects/encyklomedia.jpg",
      featured: true,
      description: "A professional platform connecting the people, businesses, services, and resources behind the media & entertainment industry.",
      details: "Engineered scalable backend service layers in .NET to handle creator profiles, agency listings, media directory search, and inquiry workflows. Implemented optimized SQL queries for high-volume searches.",
      stats: { metric: "Directory", label: "Media & Entertainment Ecosystem" },
      tech: [".NET Core", "C#", "SQL Server", "REST API", "JavaScript", "Responsive UI"]
    },
    {
      id: "bookbond",
      title: "Book Bond",
      tagline: "Curated Bookstore for Children (0–8 Years)",
      category: "E-Commerce",
      url: "https://bookbond.in",
      image: "/projects/bookbond.jpg",
      featured: true,
      description: "Book Bond is an online bookstore for children aged 0 to 8 years, offering books curated from around the world.",
      details: "Developed e-commerce catalog browsing, age-group categorization filters, dynamic shopping cart logic, and administrative inventory management with ASP.NET MVC and SQL Server.",
      stats: { metric: "0 - 8 Yrs", label: "Age-Curated Children Catalog" },
      tech: ["ASP.NET MVC", "C#", "SQL Server", "Payment Flow", "jQuery", "Bootstrap"]
    },
    {
      id: "greetnmarket",
      title: "Greet And Market",
      tagline: "Digital Marketing & Poster Content Platform",
      category: "Marketing Tech",
      url: "https://greetnmarket.com",
      image: "/projects/greetnmarket.jpg",
      featured: true,
      description: "A digital platform that helps promote businesses with eye-catching posters, templates, and marketing campaigns.",
      details: "Engineered backend RESTful API endpoints used by web and cross-platform mobile apps (Android/Flutter) to fetch marketing assets, templates, business branding metadata, and user accounts.",
      stats: { metric: "REST APIs", label: "Mobile & Web API Backend" },
      tech: [".NET Core", "Web APIs", "Flutter/Android APIs", "SQL Server", "Cloud Assets"]
    },
    {
      id: "eraglobal",
      title: "Era Global",
      tagline: "Global Multi-Channel & D2C Industry Association",
      category: "Association Portal",
      url: "https://era-global.org",
      image: "/projects/eraglobal.jpg",
      featured: true,
      description: "The only existing non-profit association representing the interests of the Multi-Channel Home Shopping Industry and direct-to-consumer business globally.",
      details: "Contributed to web development, content management workflows, international membership directory, and security best practices for an international non-profit portal.",
      stats: { metric: "Global", label: "International D2C Network" },
      tech: [".NET Architecture", "C#", "SQL Server", "Security Protocols", "Enterprise CMS"]
    }
  ],

  certifications: [
    {
      title: "Bootstrap Certification",
      issuer: "Udemy",
      date: "Certified",
      skills: "Responsive Web Design, Bootstrap Grid System, Flexbox, Mobile-First UI"
    }
  ],

  timelineYears: [
    {
      year: "2019",
      label: "M.Sc Computer Science",
      subtitle: "University of Mumbai",
      description: "Commenced Masters in Computer Science, diving deep into distributed systems, data structures, and database engine internals."
    },
    {
      year: "2021",
      label: "Master's Degree & Career Start",
      subtitle: "7.79 CGPA & Goup Technologies",
      description: "Graduated with 7.79 CGPA. Joined Goup Technologies as Web Developer Trainee, writing ASP.NET MVC and cutting bugs by 25%."
    },
    {
      year: "2022",
      label: "Techiefleet Technologies",
      subtitle: "Junior Web Developer",
      description: "Promoted to Junior Web Developer at Techiefleet Technologies; started designing scalable REST APIs and full-stack modules."
    },
    {
      year: "2023",
      label: "Enterprise Web APIs",
      subtitle: "Mobile Backend Integration",
      description: "Built and deployed secure RESTful APIs for Android and Flutter applications with robust authentication and SQL optimization."
    },
    {
      year: "2024",
      label: "Production Scale",
      subtitle: "Multi-Platform Deployments",
      description: "Managed mission-critical platforms including Encyklomedia, Book Bond, Greet And Market, and Era Global."
    },
    {
      year: "2026",
      label: "Modern Web & Beyond",
      subtitle: "Next.js & Full-Stack .NET",
      description: "Combining enterprise .NET stability with ultra-modern Next.js reactive frontends, clean architecture, and cinematic UI."
    }
  ]
};
