export const profileData = {
  personal: {
    name: "Kamal Jeet Singh",
    title: "Senior Technology & Engineering Leader",
    tagline: "Engineering Strategy | Banking & Cards Platforms | Cloud Modernization | Digital Customer Experience | Agentic AI Innovation",
    location: "Pune, Maharashtra, India",
    email: "kams63@gmail.com",
    phone: "+91 9764005775",
    linkedin: "https://linkedin.com",
    experienceYears: "20+",
    currentRole: "Technology Leader – Digital Customer Experience & Platform Engineering",
    currentCompany: "Barclays India",
    photo: "/profile.jpg"
  },
  
  targetRoles: [
    "VP of Engineering",
    "Head of Technology / Platform Engineering",
    "Director of Cloud & Digital Transformation",
    "Chief Technology Officer (Fintech / Enterprise)"
  ],

  executiveSummary: "Senior technology and engineering leader with 20 years of proven track record delivering mission-critical transformation across Tier-1 banking, cards, collections, customer servicing, online banking, analytics, and enterprise platforms. Known for architecting resilient distributed systems, leading global engineering organizations of 50+, managing £8M+ portfolios, and generating over £15M+ in annual business value through modernization, cloud adoption, and AI-enabled automation.",

  leadershipPillars: [
    {
      id: "scale",
      title: "Scale & High-Volume Architecture",
      subtitle: "Enterprise Platforms & Millions of Daily Transactions",
      icon: "Cpu",
      description: "Designed and modernized high-throughput, low-latency banking and cards platforms that power customer engagement across web, chat, messaging, voice, and online banking.",
      highlights: [
        "Architected scalable online banking processing platform supporting millions of daily transactions.",
        "Reduced core transaction latency by 15% via event-driven architecture and optimized API gateways.",
        "Transitioned legacy monolithic architectures into decoupled microservices and event streams."
      ]
    },
    {
      id: "cloud-ai",
      title: "Cloud & AI Innovation",
      subtitle: "AWS Native & Agentic AI Platforms",
      icon: "Sparkles",
      description: "Pioneering the adoption of cloud-native systems, DevSecOps pipelines, conversational AI, and cutting-edge Agentic AI workflows (MCP, A2A, LLMs) to redefine digital customer servicing.",
      highlights: [
        "Engineered cloud-native contact center and servicing solutions using AWS and Amazon Connect.",
        "Delivered 30% reduction in infrastructure costs by migrating legacy IVR to modern cloud infrastructure.",
        "Integrated multi-channel AI engagement (Agentic AI, MCP, LLM orchestrations, predictive analytics)."
      ]
    },
    {
      id: "value",
      title: "Business Value & Financial Impact",
      subtitle: "£15M+ Annual Savings & £8M+ Portfolio Stewardship",
      icon: "TrendingUp",
      description: "Direct alignment of engineering investments to executive P&L, customer retention, operational efficiency, and rapid time-to-market in highly regulated financial environments.",
      highlights: [
        "Generated ~£15M+ annual recurring savings through digital self-service and platform automation.",
        "Owned and directed £8M+ capital and operational technology portfolios with disciplined governance.",
        "Executed strategic vendor management and contract negotiations to maximize ROI."
      ]
    },
    {
      id: "people",
      title: "People & Engineering Culture",
      subtitle: "50+ Global Engineering Teams & SAFe 6 Excellence",
      icon: "Users",
      description: "Passionate leader building high-performing, customer-obsessed engineering cultures, fostering technical mentorship, psychological safety, and rapid delivery cadences.",
      highlights: [
        "Scaled and led distributed engineering organizations of 50+ across global hubs.",
        "Boosted engineering team velocity and productivity by 18% via Agile/SAFe transformation.",
        "Built succession pipelines and mentored senior architects, tech leads, and product engineers."
      ]
    }
  ],

  keyMetrics: [
    {
      label: "Annual Business Savings",
      value: "£15M+",
      subtext: "Delivered through automation, simplification & cloud",
      trend: "Recurring P&L Impact",
      accent: "emerald"
    },
    {
      label: "Tech Portfolio Owned",
      value: "£8M+",
      subtext: "Platform strategy & cloud transformation programs",
      trend: "Direct Budget Accountability",
      accent: "blue"
    },
    {
      label: "Global Team Leadership",
      value: "50+",
      subtext: "Distributed cross-functional engineers & architects",
      trend: "Multi-Region Delivery",
      accent: "amber"
    },
    {
      label: "Transaction Latency",
      value: "-15%",
      subtext: "High-volume processing platform optimization",
      trend: "Millions of Tx/Day",
      accent: "cyan"
    },
    {
      label: "Infra Cost Reduction",
      value: "30%",
      subtext: "Legacy IVR migration to cloud-native architecture",
      trend: "AWS Modernization",
      accent: "indigo"
    },
    {
      label: "Team Productivity",
      value: "+18%",
      subtext: "Achieved via Agile & SAFe 6 delivery transformation",
      trend: "Speed to Market",
      accent: "purple"
    }
  ],

  caseStudies: [
    {
      id: "barclays-digital-cx",
      company: "Barclays US Cards",
      role: "Technology Leader – Digital Customer Experience & Platform Engineering",
      period: "May 2022 - Present",
      title: "Digital CX & AI-Enabled Omnichannel Servicing Transformation",
      badge: "Flagship Transformation",
      impact: "~£15M+ Annual Savings | 50+ Global Engineers | £8M+ Portfolio",
      summary: "Spearheaded platform strategy, cloud transformation, and engineering delivery for Barclays US Cards customer engagement platforms spanning Web, Chat, Messaging, Conversational AI, and Voice.",
      challenges: [
        "Siloed legacy customer touchpoints resulting in fragmented customer journeys.",
        "High operational costs from legacy on-prem IVR and manual servicing channels.",
        "Strict regulatory and compliance standards requiring enterprise-grade security and zero downtime."
      ],
      solutions: [
        "Architected unified omnichannel servicing fabric on AWS utilizing Amazon Connect, Microservices, and DevSecOps.",
        "Introduced Conversational AI and Agentic automation for intelligent self-service customer interactions.",
        "Instituted automated CI/CD pipelines, end-to-end observability, and automated testing."
      ],
      outcomes: [
        "Delivered ~£15M+ in annualized savings through digital deflection and automation.",
        "Reduced infrastructure operating costs by 30% through cloud modernization.",
        "Dramatically improved customer CSAT and NPS across US Cards servicing channels."
      ],
      techStack: ["AWS", "Amazon Connect", "Agentic AI", "MCP", "Microservices", "Golang", "Java", "Docker/K8s", "DevSecOps"]
    },
    {
      id: "barclays-collections",
      company: "Barclays India",
      role: "Head of Digital Deliveries, Collections",
      period: "Jun 2018 - Apr 2022",
      title: "Omnichannel Collections & Financial Assistance Modernization",
      badge: "Core Banking Modernization",
      impact: "£15M+ Annual Savings | Legacy SOAP to REST Migration | £8M+ Scope",
      summary: "Directed omnichannel engineering for collections, recoveries, and financial assistance platforms across internet and mobile banking channels.",
      challenges: [
        "Complex legacy SOAP-based integrations slowing down feature release cycles.",
        "High friction in vulnerable customer journeys during financial assistance applications.",
        "Disparate data models across legacy core systems."
      ],
      solutions: [
        "Designed and implemented modern RESTful API ecosystem, decoupling frontend customer journeys from core banking backends.",
        "Strengthened engineering governance, reusable component design, and automated release gates.",
        "Established self-service repayment and assistance workflows on digital channels."
      ],
      outcomes: [
        "Accelerated release cycle speed to market by 40% with reusable REST APIs.",
        "Achieved £15M+ in efficiency and recovery improvements.",
        "Maintained 99.99% platform availability across peak operational cycles."
      ],
      techStack: ["Java", "Spring Boot", "REST APIs", "Microservices", "OpenShift", "GitLab CI/CD", "PostgreSQL", "SAFe 6"]
    },
    {
      id: "barclays-online-banking",
      company: "Barclays India",
      role: "Technical Delivery Head, Online Banking",
      period: "Sep 2014 - May 2018",
      title: "High-Volume Retail Online Banking & Authentication Overhaul",
      badge: "Enterprise Scale",
      impact: "15% Latency Reduction | Millions of Daily Transactions | Auth Modernization",
      summary: "Led architecture and engineering delivery for retail online banking platforms, with a focus on modern authentication, API design, and production-scale resilience.",
      challenges: [
        "Aging Struts-based web monolith with severe performance bottlenecks during peak loads.",
        "Complex authentication flows prone to friction and security overhead."
      ],
      solutions: [
        "Engineered modern SPA architecture using AngularJS backed by robust Java REST microservices.",
        "Re-architected core transaction pipeline with intelligent caching and database query optimization.",
        "Implemented standardized API design patterns over enterprise systems of record."
      ],
      outcomes: [
        "Cut end-to-end transaction latency by 15% under multi-million daily transaction loads.",
        "Seamlessly migrated millions of active online banking users to modern authentication.",
        "Delivered zero-downtime releases for critical retail banking operations."
      ],
      techStack: ["Java", "Spring", "AngularJS", "REST Services", "MySQL", "Jenkins", "Distributed Caching"]
    },
    {
      id: "enterprise-bi-data",
      company: "ZS Associates / IBM / Cybage",
      role: "Platform Lead & Engineering Tech Lead",
      period: "Apr 2005 - Sep 2014",
      title: "Enterprise BI, Analytics & Quality Engineering Foundations",
      badge: "Data & Systems Foundation",
      impact: "Mission-Critical Analytics Continuity | Enterprise Quality Automation",
      summary: "Led data engineering, BI ecosystems, and quality automation for global enterprise clients across banking, telecom, and life sciences.",
      challenges: [
        "Complex multi-source data workflows across heterogeneous enterprise silos.",
        "Ensuring high availability of revenue-critical executive dashboards and reports."
      ],
      solutions: [
        "Managed large-scale BI estates (MicroStrategy, Cognos, Tableau, Informatica) with strict SLAs.",
        "Built automated testing suites and data validation pipelines for enterprise releases."
      ],
      outcomes: [
        "Ensured 99.9% uptime for revenue-generating analytics platforms across global pharma and banking clients.",
        "Standardized engineering rigor and test automation across development lifecycles."
      ],
      techStack: ["MicroStrategy", "Tableau", "Cognos", "Informatica", "SQL", "Data Pipelines", "Quality Automation"]
    }
  ],

  technologyRadar: {
    "Cloud & Infrastructure": [
      { name: "Amazon Web Services (AWS)", level: "Expert", tag: "Primary Cloud" },
      { name: "Amazon Connect", level: "Expert", tag: "Contact Center" },
      { name: "Kubernetes & Docker", level: "Advanced", tag: "Containerization" },
      { name: "OpenShift / ECS / EKS", level: "Advanced", tag: "Orchestration" },
      { name: "CI/CD & DevSecOps", level: "Expert", tag: "Automation" },
      { name: "Jenkins / GitLab / Bitbucket", level: "Expert", tag: "Tooling" }
    ],
    "AI & Data Engineering": [
      { name: "Agentic AI & Orchestration", level: "Advanced", tag: "Cutting Edge" },
      { name: "Model Context Protocol (MCP)", level: "Advanced", tag: "Architecture" },
      { name: "Agent-to-Agent (A2A)", level: "Advanced", tag: "Multi-Agent" },
      { name: "LLMs (Claude, ChatGPT, Titan)", level: "Advanced", tag: "GenAI" },
      { name: "Predictive Analytics & ML", level: "Advanced", tag: "Data Science" },
      { name: "Data Analytics & BI", level: "Expert", tag: "Enterprise BI" }
    ],
    "Architecture & Engineering": [
      { name: "Microservices & Distributed Systems", level: "Expert", tag: "Architecture" },
      { name: "REST API & API Gateway Design", level: "Expert", tag: "Integration" },
      { name: "Cloud-Native Solution Design", level: "Expert", tag: "Scalability" },
      { name: "Event-Driven Architecture", level: "Expert", tag: "Resilience" },
      { name: "High-Volume Transaction Processing", level: "Expert", tag: "Performance" },
      { name: "Enterprise Security & Governance", level: "Expert", tag: "Compliance" }
    ],
    "Languages & Frameworks": [
      { name: "Golang", level: "Proficient", tag: "Backend" },
      { name: "Java & Spring / Spring Boot", level: "Expert", tag: "Enterprise" },
      { name: "Python", level: "Proficient", tag: "AI/Data" },
      { name: "JavaScript / TypeScript", level: "Proficient", tag: "Full-Stack" },
      { name: "PostgreSQL / MySQL / MongoDB", level: "Expert", tag: "Databases" },
      { name: "Redis", level: "Advanced", tag: "Caching" }
    ],
    "Leadership & Operating Models": [
      { name: "SAFe 6 (Scaled Agile Framework)", level: "Certified Agilist", tag: "Governance" },
      { name: "Agile, Scrum & Kanban", level: "Master", tag: "Delivery" },
      { name: "Engineering Strategy & Roadmap", level: "Executive", tag: "Vision" },
      { name: "Executive P&L & Budget (£8M+)", level: "Executive", tag: "Financial" },
      { name: "Strategic Vendor Governance", level: "Executive", tag: "Partnerships" },
      { name: "Talent Mentorship & Succession", level: "Executive", tag: "People" }
    ]
  },

  careerHistory: [
    {
      company: "Barclays India",
      role: "Technology Leader – Digital Customer Experience & Platform Engineering",
      location: "Pune, India",
      period: "May 2022 - Present",
      type: "Executive Leadership",
      responsibilities: [
        "Direct platform strategy, engineering roadmap, and cloud transformation for Barclays US Cards customer engagement platforms.",
        "Lead a global engineering organization of 50+ engineers, managers, and architects across web, chat, messaging, voice, and conversational AI.",
        "Hold P&L and delivery accountability for an £8M+ annual technology portfolio.",
        "Champion modern cloud-native architectures on AWS, DevSecOps automation, and robust site reliability observability.",
        "Deliver ~£15M+ annual cost savings through digital self-service automation and customer friction reduction.",
        "Partner with C-suite stakeholders, product leads, and vendor partners to drive innovation."
      ]
    },
    {
      company: "Barclays India",
      role: "Head of Digital Deliveries, Collections",
      location: "Pune, India",
      period: "Jun 2018 - Apr 2022",
      type: "Engineering Leadership",
      responsibilities: [
        "Led omnichannel engineering for collections, recoveries, and financial assistance platforms across web and mobile.",
        "Managed £8M+ transformation portfolio with 50+ engineers across multiple squads.",
        "Drove legacy SOAP-to-REST API modernization, accelerating feature delivery and system reusability.",
        "Delivered £15M+ in annualized savings through cloud adoption and automated workflows."
      ]
    },
    {
      company: "Barclays India",
      role: "Technical Delivery Head, Online Banking",
      location: "Pune, India",
      period: "Sep 2014 - May 2018",
      type: "Architecture & Delivery",
      responsibilities: [
        "Directed architecture and delivery for retail online banking platforms serving millions of daily active users.",
        "Led 50+ engineers across core banking journeys, security authentication, and platform resilience.",
        "Modernized authentication stack from legacy Struts to Angular with REST backends.",
        "Reduced transaction latency by 15% through high-throughput platform optimization."
      ]
    },
    {
      company: "ZS Associates",
      role: "Platform Lead / BI Specialist",
      location: "Pune, India",
      period: "Jul 2013 - Sep 2014",
      type: "Platform & Analytics",
      responsibilities: [
        "Led platform support and operations for enterprise BI ecosystems (Cognos, Tableau, MicroStrategy, QlikView, Informatica).",
        "Ensured continuous availability for pharmaceutical clients' revenue-generating analytics."
      ]
    },
    {
      company: "IBM India Pvt. Ltd.",
      role: "Engineering Lead / Tech Lead",
      location: "Pune, India",
      period: "Jan 2009 - Jul 2013",
      type: "Technical Leadership",
      responsibilities: [
        "Led BI and data engineering initiatives across Tier-1 banking and telecom clients.",
        "Spearheaded data integration, enterprise reporting architecture, and workflow design."
      ]
    },
    {
      company: "Cybage Software Pvt. Ltd.",
      role: "Engineering Lead / Tech Lead",
      location: "Pune, India",
      period: "Apr 2005 - Jan 2009",
      type: "Engineering & QA",
      responsibilities: [
        "Directed test automation, quality control engineering, and BI reporting for global enterprise clients."
      ]
    }
  ],

  education: [
    {
      degree: "Post Graduate Program in Data Science & Business Analytics",
      institution: "Great Lakes Executive Learning & Texas McCombs School of Business (UT Austin)",
      year: "2022",
      badge: "Executive Certification",
      highlights: "Advanced machine learning, predictive analytics, statistical modeling, and data-driven decision frameworks."
    },
    {
      degree: "Bachelor of Engineering (B.E.), Mechanical",
      institution: "University of Pune",
      year: "2000",
      badge: "Engineering Foundation",
      highlights: "Analytical foundations, systems engineering, and quantitative problem-solving."
    }
  ],

  certifications: [
    {
      name: "SAFe Agilist 6",
      issuer: "Scaled Agile Framework",
      category: "Agile & Enterprise Governance",
      icon: "ShieldCheck"
    },
    {
      name: "AWS Cloud Practitioner Essentials",
      issuer: "Amazon Web Services (AWS)",
      category: "Cloud Computing",
      icon: "Cloud"
    },
    {
      name: "Executive Leadership",
      issuer: "LinkedIn Learning",
      category: "Executive Management",
      icon: "Award"
    },
    {
      name: "Python Data Structures",
      issuer: "University of Michigan (Coursera)",
      category: "Data & Software Engineering",
      icon: "Code"
    }
  ]
};