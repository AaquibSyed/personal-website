export const projects = [
  {
    title: "Millennium Treasury - Payment Reconciliation AI Agent",
    description:
      "An AI-powered Glean Agent that processes 100+ daily treasury emails, extracts payment data from email bodies and attachments, cross-checks it with treasury portal records, and shares a Slack report highlighting verified payments and discrepancies.",
    tech: ["Glean Agent Framework", "Microsoft Graph Outlook API"],
    impact:
      "Streamlines daily reconciliation, saving 2-3 hours of manual effort and improving accuracy for treasury teams.",
    image: "/assets/glean.svg",
  },

  {
    title: "Explainable AI with H2O",
    description:
      "A practical exploration of explainability in bike rental prediction models using H2O's AutoML suite. Visualizes SHAP, feature importance, and model diagnostics.",
    tech: ["Python", "H2O", "Kaggle"],
    impact:
      "Demonstrated transparent AI modeling techniques for real-world forecasting use cases.",
    image: "/assets/bike.svg",
    link: "https://www.kaggle.com/code/syedasifmn/explainable-ai-using-h2o",
  },
  {
    title: "InsightGen - Developer Knowledge Search",
    description:
      "An AI-powered search engine that indexes and retrieves contextual information from GitHub, JIRA, and Confluence pages. It enables developers to quickly locate code snippets, tickets, and documentation without manual navigation.",
    tech: ["Copilot Studio"],
    impact:
      "Reduced developer effort by cutting search time for project information and documentation, improving productivity across teams.",
    image: "/assets/insight.svg",
  },
  {
    title: "Voter CRM",
    description:
      "An advanced, data-driven dashboard visualizing Telangana's 2023 voter base. It provides granular demographic insights - by gender, age and district. Thus empowering political campaigns and researchers. Developed and funded by IIIT-Hyderabad for election analytics.",
    tech: ["Python", "Flask", "Streamlit", "Docker"],
    impact:
      "Delivered actionable insights from 20M+ voter records, enabling data-informed political strategies.",
    image: "/assets/vote.svg",
    link: "https://github.com/syed-asif-mn/Voter-CRM",
  },
  {
    title: "OMNI Microservices Orchestrator",
    description:
      "A local orchestration platform with an intuitive dashboard for discovering, provisioning, and running Nasdaq OMNI microservices in Dockerized containers directly on developers' machines - ensuring consistent, production-parity environments.",
    tech: ["Vue 3", "PowerShell", "Docker"],
    impact:
      "Reduced environment setup time from 30 minutes to couple of minutes while eliminating configuration inconsistencies across teams.",
    image: "/assets/dashboard.svg",
  },
  {
    title: "Best",
    description:
      "A minimalistic web app featuring a handpicked collection of timeless song lyrics. Built for lovers of clean design and classic writing.",
    tech: ["React", "Tailwind CSS", "Glitch"],
    impact:
      "Offers a curated, personal archive of evergreen lyrics with a sleek UI.",
    image: "/assets/best.svg",
    link: "https://best-lyrics.stackblitz.io/",
  },
  {
    title: "unFold",
    description:
      "An open-source full-stack code generator that scaffolds complete projects based on user-defined inputs. Choose frameworks, name your app, and get instant boilerplate code.",
    tech: ["Angular", ".NET", "AWS"],
    impact:
      "Ranked Top 5 at Airbus Aerothon 2022. Supports auto-generation for 4 server-side and 3 client-side frameworks.",
    image: "/assets/unfold.svg",
    link: "https://unfold.stackblitz.io/",
  },
  {
    title: "Agile Project Management Tool",
    description:
      "A visual reporting solution for Agile teams with Epic, Feature, and Defect tracking. Built to streamline sprint planning and project oversight.",
    tech: [
      "Power BI",
      "Azure Analytic Views",
      "Python",
      "Pandas",
      "Matplotlib",
    ],
    impact:
      "Deployed across 15+ teams within Siemens Healthineers (Advanced Therapies Division).",
    image: "/assets/chart.svg",
  },
];

export const experiences = [
  {
    company: "Millennium Management",
    role: "Software Engineering Consultant",
    period: "Sep 2025 - Present",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/60/Millennium_logo.svg",
    projects: [
      {
        name: "Regulatory Microservices",
        description: [
          "Designed and built T0 real-time and T1 batch reporting microservices processing ~1M trades/day using .NET, Angular, Kafka, and PostgreSQL.",
          "Architected AWS infrastructure with CloudFormation and integrated TeamCity CI/CD pipelines.",
          "Implemented Kibana dashboards for observability.",
          "Integrated Claude and Qodo into GitHub workflows to streamline code reviews and boost developer productivity.",
        ],
      },
    ],
  },
  {
    company: "Nasdaq",
    role: "Senior Analyst - Software Engineering",
    period: "Dec 2024 - Jul 2025",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/87/NASDAQ_Logo.svg",
    projects: [
      {
        name: "eVestment Omni",
        description: [
          "Engineered 5+ .NET microservices using Entity Framework, SQL Server, Vue.js, and AWS.",
          "Optimized development environment by containerizing services with Docker, reducing setup time by ~90%.",
          "Integrated Salesforce CRM for real-time data synchronization across trading systems.",
        ],
      },
    ],
  },
  {
    company: "Siemens Healthineers",
    role: "Engineer - Design & Development",
    period: "Sep 2020 - Nov 2024",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/79/Siemens_Healthineers_logo.svg",
    projects: [
      {
        name: "OnScreen Menu Configurator",
        description: [
          "Developed .NET REST microservices with MySQL/NHibernate, processing 10K+ daily transactions.",
          "Automated SSIT with Selenium and SpecFlow (BDD), reducing manual testing by ~80%.",
          "Built Azure DevOps pipelines for nightly builds and automated test runs.",
          "Wrote unit tests with MSTest and Jasmine, achieving 95% code coverage.",
        ],
      },
      {
        name: "Position List Editor",
        description: [
          "Implemented NgRx state management in Angular.",
          "Acted as subsystem product owner refining backlog with UX/QT teams.",
          "Proposed 3 product ideas adopted into production, improving usability and performance.",
          "Mentored team members through workshops and knowledge-sharing sessions.",
        ],
      },
      {
        name: "OnScreen Display",
        description: [
          "Migrated legacy UI to modular SHUI design.",
          "Resolved 25+ defects, boosting release confidence and stability.",
        ],
      },
    ],
  },
  {
    company: "Siemens Healthineers",
    role: "Intern",
    period: "Jan 2020 – May 2020",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/79/Siemens_Healthineers_logo.svg",
    projects: [
      {
        name: "Process Optimization",
        description: [
          "Automated 35+ OnScreen Display and CELoader workflows using C#, Python, and Selenium.",
          "Reduced testing efforts from 2 days to 4 hours.",
        ],
      },
    ],
  },
];

export const education = [
  {
    type: "degree",
    title: "PG Certificate in Software Engineering for Data Science",
    institution: "IIIT Hyderabad",
    period: "2022 - 2023",
    description:
      "Advanced coursework in Statistics, Python, Machine Learning and Data Science",
  },
  {
    type: "degree",
    title: "Bachelor of Engineering in Electronics & Communication",
    institution: "JSS Science and Technology University, Mysuru",
    period: "2016 - 2020",
    description: "CGPA: 9.14 / 10",
  },
];

export const certifications = [
  {
    name: "Claude Code 101",
    issuer: "Anthropic",
    date: "2026",
    credentialId: "jkwjpxtwf97j",
    url: "https://verify.skilljar.com/c/jkwjpxtwf97j",
  },
  {
    name: "AI Fluency: Framework & Foundations",
    issuer: "Anthropic",
    date: "2026",
    credentialId: "gdos6co4u9wa",
    url: "https://verify.skilljar.com/c/gdos6co4u9wa",
  },
  {
    name: "AI Capabilities and Limitations",
    issuer: "Anthropic",
    date: "2026",
    credentialId: "tohsajjj2j7q",
    url: "https://verify.skilljar.com/c/tohsajjj2j7q",
  },
  {
    name: "Generative AI Mastermind",
    issuer: "Outskill",
    date: "2025",
    credentialId: "OUTSKILL",
    url: "/assets/outsill_certificate.pdf",
  },
  {
    name: "GenAI Engineering Mastermind",
    issuer: "Outskill",
    date: "2025",
    credentialId: "OUTSKILL",
    url: "/assets/outsill_eng_certificate.pdf",
  },
  {
    name: "AWS DevOps Engineer Pro 2024: Mastering CI/CD Pipelines",
    issuer: "Skillsoft",
    date: "2025",
    credentialId: "11104808",
    url: "https://skillsoft.digitalbadges-eu.skillsoft.com/84d6c503-0635-410b-9ad8-5313ee3d4658",
  },
  {
    name: "Secure Coding",
    issuer: "CodeBashing",
    date: "2025",
    credentialId: "SC-CB",
  },
  {
    name: "Scrum Product Owner",
    issuer: "Skillsoft",
    date: "2024",
    credentialId: "10920581",
    url: "https://skillsoft.digitalbadges-eu.skillsoft.com/cacefea2-37c4-4574-8625-7356a4a4c7de",
  },
  {
    name: "AI on Cloud",
    issuer: "Great Learning",
    date: "2023",
    credentialId: "JTWYHSGM",
    url: "https://www.mygreatlearning.com/certificate/JTWYHSGM",
  },
  {
    name: "Data Visualization using Power BI",
    issuer: "Great Learning",
    date: "2023",
    credentialId: "QFXJGRUK",
    url: "https://www.mygreatlearning.com/certificate/QFXJGRUK",
  },
  {
    name: "AWS Machine Learning Foundations",
    issuer: "Udacity",
    date: "2022",
    credentialId: "RUTWWDQY",
    url: "https://s3-us-west-2.amazonaws.com/udacity-printer/production/certificates/7c8bd99c-bc0b-46f1-9b51-1812471368f9.pdf",
  },
  {
    name: "Deep Learning Specialization",
    issuer: "Coursera",
    date: "2020",
    credentialId: "GDZA77AZUVRV",
    url: "https://www.coursera.org/account/accomplishments/specialization/certificate/GDZA77AZUVRV",
  },
  {
    name: "Data Structures and Algorithms",
    issuer: "Udacity",
    date: "2020",
    credentialId: "DSA-UD",
  },
  {
    name: "IoT Programming",
    issuer: "KEONICS",
    date: "2019",
    credentialId: "KEONICS",
    url: "/assets/keonics.jpg",
  },
  {
    name: "Advanced Embedded Programming",
    issuer: "IEEE SJCE & Cypress Semiconductor",
    date: "2019",
    credentialId: "CYPRUS",
    url: "/assets/aep.jpg",
  },
  {
    name: "Semiconductor Device Modelling",
    issuer: "SJCE",
    date: "2019",
    credentialId: "TEQIP-3",
    url: "/assets/teqip.jpg",
  },
  {
    name: "ROBOTIX Workshop",
    issuer: "IEEE SJCE EDS",
    date: "2018",
    credentialId: "ROBOTIX",
    url: "/assets/robotix.jpg",
  },
];

export const skills = [
  {
    category: "Programming Languages",
    items: [
      { name: "C#", level: "Professional" },
      { name: "TypeScript", level: "Professional" },
      { name: "JavaScript", level: "Professional" },
      { name: "Python", level: "Intermediate" },
    ],
  },
  {
    category: "AI & Automation",
    items: [
      { name: "Glean Agent builder", level: "Professional" },
      { name: "Claude Code", level: "Professional" },
      { name: "Copilot Studio", level: "Professional" },
    ],
  },
  {
    category: "Architecture",
    items: [
      { name: "Event-Driven Architecture", level: "Professional" },
      { name: "Microservices", level: "Professional" },
      { name: "REST API Design", level: "Professional" },
    ],
  },
  {
    category: "Backend Technologies",
    items: [
      { name: ".NET Core", level: "Professional" },
      { name: ".NET Framework", level: "Professional" },
      { name: "Kafka", level: "Professional" },
      { name: "LINQ", level: "Professional" },
      { name: "Entity Framework", level: "Intermediate" },
    ],
  },
  {
    category: "Web Development",
    items: [
      { name: "Angular (v8 - v20)", level: "Professional" },
      { name: "Vue.js", level: "Intermediate" },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "PostgreSQL", level: "Professional" },
      { name: "SQL Server", level: "Professional" },
      { name: "MongoDB", level: "Intermediate" },
    ],
  },
  {
    category: "Cloud & DevOps",
    items: [
      { name: "AWS", level: "Intermediate" },
      { name: "Azure DevOps", level: "Intermediate" },
      { name: "Docker", level: "Intermediate" },
    ],
  },
  {
    category: "Observability",
    items: [
      { name: "Datadog", level: "Intermediate" },
      { name: "Kibana", level: "Intermediate" },
    ],
  },
  {
    category: "Testing & Quality Assurance",
    items: [
      { name: "Test-Driven Development", level: "Professional" },
      { name: "BDD (SpecFlow)", level: "Professional" },
      { name: "Selenium", level: "Professional" },
      { name: "MSTest", level: "Professional" },
      { name: "Jasmine", level: "Professional" },
    ],
  },
  {
    category: "Version Control",
    items: [
      { name: "Git (Github, Gitlab)", level: "Professional" },
      { name: "TFS", level: "Professional" },
    ],
  },
  {
    category: "Methodologies",
    items: [
      { name: "Scaled Agile Framework", level: "Professional" },
      { name: "Domain-Driven Design", level: "Professional" },
    ],
  },
];

export const highlights = [
  {
    title: "DAQ - Act as an Owner",
    organization: "Nasdaq",
    type: "Award",
    icon: "🔷",
    year: "2025",
  },
  {
    title: "Star of the Sprints",
    organization: "Siemens Healthineers",
    type: "Award",
    icon: "⭐",
    year: "2024",
  },
  {
    title: "Leadership Launchpad",
    organization: "Siemens Healthineers",
    type: "Mentorship Programme",
    icon: "❇️",
    year: "2024",
  },
  {
    title: "Contributer - AI Hack-celerator",
    organization: "Millenium",
    type: "Competition",
    icon: "🤖",
    year: "2026",
  },
  {
    title: "Top 10 - HackWave",
    organization: "Nasdaq",
    type: "Competition",
    icon: "🌐",
    year: "2025",
  },
  {
    title: "AVM Analyzer POC selected for evaluation at SHIFT Hackathon",
    organization: "Siemens Healthineers",
    type: "Competition",
    icon: "🧠",
    year: "2024",
  },
  {
    title: "Hackathon Winner",
    organization: "IIITH PGCSEDS",
    type: "Competition",
    icon: "🏅",
    year: "2022",
  },
  {
    title: "Finalist - HackerEarth Aerothon",
    organization: "HackerEarth",
    type: "Competition",
    icon: "✈️",
    year: "2022",
  },
  {
    title: "Volunteer - Veteran Hiring Program",
    organization: "Siemens Healthineers",
    type: "Volunteer",
    icon: "🪖",
    year: "2022-24",
  },
  {
    title: "Volunteer - Project Rise",
    organization: "Save The Child NGO",
    type: "Volunteer",
    icon: "🧍",
    year: "2021-23",
  },
];
