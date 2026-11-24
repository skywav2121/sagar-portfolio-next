export const portfolioData = {
  personal: {
    name: "Sagar Wavare",
    title: "Full-Stack .NET Developer & API Engineer",
    shortTitle: "Full-Stack .NET Developer",
    location: "Palghar / Mumbai, India",
    email: "sagarwavare2015@gmail.com",
    linkedin: "https://in.linkedin.com/in/sagar-wavare-33a815213",
    status: "Available for Full-Stack .NET & Backend Roles",
    yearsExperience: "4+",
    bio: "Full-Stack .NET Developer with 4+ years of production experience architecting enterprise web applications in .NET Core and ASP.NET MVC, cross-platform REST APIs for Flutter and Android apps, and high-throughput SQL Server databases. Proven track record delivering 4 live production platforms, optimizing query response times by 30%, and reducing defect rates by 25%.",
    quote: "Clean architecture. Measurable scale.",
  },

  skills: {
    categories: [
      { id: "all", name: "All" },
      { id: "backend", name: "Backend & .NET" },
      { id: "database", name: "Database & Cloud" },
      { id: "frontend", name: "Frontend" },
      { id: "tools", name: "DevOps & Tools" },
    ],
    items: [
      { name: "C#", category: "backend", years: "4 yrs", desc: "Object-oriented architecture, asynchronous concurrency patterns, and LINQ data pipelines." },
      { name: ".NET Core", category: "backend", years: "3+ yrs", desc: "Cross-platform web APIs, dependency injection containers, and scalable middleware services." },
      { name: "ASP.NET MVC", category: "backend", years: "4 yrs", desc: "Enterprise MVC patterns, Razor view models, controller lifecycles, and authorization filters." },
      { name: "RESTful Web APIs", category: "backend", years: "3+ yrs", desc: "JWT token authentication, contract design, and mobile backend integration for Android & Flutter." },
      { name: "SQL Server", category: "database", years: "4 yrs", desc: "Complex stored procedures, execution plan analysis, index optimization, and relational modeling." },
      { name: "Azure Services", category: "database", years: "2 yrs", desc: "App Services deployments, Azure SQL databases, and cloud asset storage pipelines." },
      { name: "HTML5 & CSS3", category: "frontend", years: "4 yrs", desc: "Semantic DOM architecture, responsive layout grids, flexbox, and modern CSS variables." },
      { name: "JavaScript (ES6+)", category: "frontend", years: "4 yrs", desc: "Asynchronous programming, event loops, DOM performance, and client-side logic." },
      { name: "React & Next.js", category: "frontend", years: "2 yrs", desc: "Component architecture, Server Components, App Router, and dynamic client hydration." },
      { name: "Bootstrap", category: "frontend", years: "4 yrs", desc: "Certified responsive UI frameworks, mobile-first design grids, and utility systems." },
      { name: "jQuery", category: "frontend", years: "4 yrs", desc: "AJAX lifecycle handling, dynamic DOM manipulation, and asynchronous form flows." },
      { name: "Git & GitHub", category: "tools", years: "4 yrs", desc: "Branching workflows, pull request reviews, version control discipline, and CI integrations." },
      { name: "Visual Studio & VS Code", category: "tools", years: "4 yrs", desc: "Profiling, native debugging, NuGet dependency management, and productivity toolchains." },
      { name: "Postman", category: "tools", years: "3 yrs", desc: "Automated API contract testing, environment management, and mocking suites." },
    ]
  },

  experience: [
    {
      company: "Techiefleet Technologies",
      role: "Full-Stack .NET Developer",
      period: "Aug 2022 – Present",
      location: "Mumbai / Remote",
      type: "Full-Time",
      description: "Leading the development and maintenance of enterprise .NET Core web platforms, mobile REST APIs, and database architecture.",
      achievements: [
        "Architected and maintained mission-critical web applications with .NET MVC and .NET Core, ensuring 99.9% uptime across production workloads.",
        "Engineered, tested, and documented robust RESTful APIs powering cross-platform mobile apps on Android and Flutter.",
        "Designed and tuned complex SQL Server stored procedures and indexing strategies, decreasing query latency by 30%.",
        "Implemented secure JWT authentication and role-based access control (RBAC) to safeguard sensitive enterprise endpoints.",
        "Delivered responsive, clean web interfaces with modern JavaScript, CSS3, Bootstrap, and Next.js.",
      ],
      tags: [".NET Core", "ASP.NET MVC", "SQL Server", "REST APIs", "Flutter Integration", "C#", "JavaScript"]
    },
    {
      company: "Goup Technologies",
      role: "Web Developer Trainee",
      period: "Nov 2021 – Apr 2022",
      location: "Mumbai, India",
      type: "Internship",
      description: "Engineered web modules, assisted in database design, and resolved production bugs across client systems.",
      achievements: [
        "Built modular web features using C#, ASP.NET MVC, and Microsoft SQL Server.",
        "Partnered with QA teams to diagnose and remediate defects, achieving a 25% reduction in reported software bugs.",
        "Constructed structured database migration scripts and client-side form validation routines.",
        "Participated in daily agile standups and sprint retrospectives for timely milestone execution.",
      ],
      tags: ["C#", "ASP.NET MVC", "SQL Server", "Bug Fixing", "HTML/CSS", "QA Collaboration"]
    }
  ],

  education: [
    {
      institution: "University of Mumbai",
      degree: "Master of Science in Computer Science (M.Sc CS)",
      period: "2019 – 2021",
      cgpa: "7.79 CGPA",
      location: "Mumbai, India",
      details: "Rigorous coursework in Advanced Database Systems, Software Architecture, Distributed Computing, Algorithm Design, and Information Security."
    }
  ],

  projects: [
    {
      id: "encyklomedia",
      title: "Encyklomedia",
      tagline: "Media & Entertainment Professional Ecosystem",
      category: "B2B Platform",
      impactBadge: "High-Throughput Search",
      url: "https://encyklomedia.in",
      image: "/projects/encyklomedia.jpg",
      featured: true,
      problem: "Media and entertainment professionals lacked a unified directory to discover verified talent, agency listings, and production resources.",
      architecture: "Architected modular .NET Core backend services, decoupled repository layers, and query-optimized SQL Server search procedures.",
      impact: "Powers responsive directory search, inquiry workflows, and professional profiles for thousands of industry users with sub-second response times.",
      stats: { metric: "High Scale", label: "Media Directory" },
      tech: [".NET Core", "C#", "SQL Server", "REST API", "JavaScript", "Responsive UI"]
    },
    {
      id: "bookbond",
      title: "Book Bond",
      tagline: "Curated Children's International Bookstore (0–8 Years)",
      category: "E-Commerce",
      impactBadge: "Full-Cycle E-Commerce",
      url: "https://bookbond.in",
      image: "/projects/bookbond.jpg",
      featured: true,
      problem: "Parents needed an intuitive online bookstore with titles curated from around the world, categorized strictly by early childhood developmental stages.",
      architecture: "Engineered an ASP.NET MVC platform with age-bracket dynamic filtering, persistent cart state, and relational SQL Server schemas.",
      impact: "Delivers a seamless catalog browsing, search, and checkout journey supporting high concurrent shopper traffic.",
      stats: { metric: "0–8 Yrs", label: "Age-Curated Catalog" },
      tech: ["ASP.NET MVC", "C#", "SQL Server", "Payment Flow", "jQuery", "Bootstrap"]
    },
    {
      id: "greetnmarket",
      title: "Greet And Market",
      tagline: "Digital Marketing & Brand Poster Distribution Platform",
      category: "Marketing Tech",
      impactBadge: "Web + Flutter/Android API",
      url: "https://greetnmarket.com",
      image: "/projects/greetnmarket.jpg",
      featured: true,
      problem: "Small businesses and marketing teams required rapid generation and retrieval of branded posters, seasonal greetings, and creative templates.",
      architecture: "Engineered scalable .NET Core RESTful APIs serving both web interfaces and cross-platform Flutter/Android mobile applications.",
      impact: "Seamlessly synchronizes brand assets, JWT session security, and dynamic template feeds across mobile and desktop clients.",
      stats: { metric: "Cross-Platform", label: "Mobile & Web API" },
      tech: [".NET Core", "Web APIs", "Flutter/Android APIs", "SQL Server", "Cloud Assets"]
    },
    {
      id: "eraglobal",
      title: "Era Global",
      tagline: "International Multi-Channel & D2C Industry Association",
      category: "Association Portal",
      impactBadge: "Global D2C Portal",
      url: "https://era-global.org",
      image: "/projects/eraglobal.jpg",
      featured: true,
      problem: "A global non-profit association representing direct-to-consumer businesses required a secure, international membership portal and CMS.",
      architecture: "Contributed to .NET architecture, role-based membership directory access, secure CMS workflows, and data integrity protocols.",
      impact: "Established a trusted digital hub for global D2C commerce stakeholders, trade delegations, and executive members.",
      stats: { metric: "Global", label: "International Network" },
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
      role: "Master's Degree Candidate",
      description: "Commenced Masters in Computer Science, focusing on distributed computing, advanced database internals, algorithms, and object-oriented systems."
    },
    {
      year: "2021",
      label: "Master's Degree & Engineering Trainee",
      subtitle: "7.79 CGPA · Goup Technologies",
      role: "Web Developer Trainee",
      description: "Graduated with 7.79 CGPA. Joined Goup Technologies as Web Developer Trainee, writing ASP.NET MVC and collaborating with QA to reduce bugs by 25%."
    },
    {
      year: "2022",
      label: "Techiefleet Technologies",
      subtitle: "Full-Time Production Role",
      role: "Junior Web Developer",
      description: "Started at Techiefleet Technologies as Junior Web Developer; transitioned into architecting scalable .NET Core backend services and database layers."
    },
    {
      year: "2023",
      label: "Enterprise REST APIs & Mobile Backends",
      subtitle: "Techiefleet Technologies",
      role: "Full-Stack .NET Developer",
      description: "Engineered secure RESTful APIs serving both Android and Flutter mobile apps with JWT token authentication, rate limiting, and SQL optimization."
    },
    {
      year: "2024",
      label: "Multi-Platform Production Scaling",
      subtitle: "Techiefleet Technologies",
      role: "Full-Stack .NET Developer",
      description: "Scaled and maintained 4 enterprise production platforms: Encyklomedia, Book Bond, Greet And Market, and Era Global with 99.9% uptime."
    },
    {
      year: "2026",
      label: "Full-Stack .NET & Next.js Architecture",
      subtitle: "Senior Engineering Focus",
      role: "Full-Stack .NET Developer & API Engineer",
      description: "Pairing high-throughput .NET Core microservices and SQL Server databases with modern reactive Next.js frontends and clean architecture."
    }
  ]
};
