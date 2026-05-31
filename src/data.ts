import { WorkExperience, EducationItem, ProjectItem, PublicationItem, AwardItem, VitalMetric } from "./types";

export const ABOUT_ME = {
  name: "Tahsin Ahmed",
  title: "Software Quality Assurance Engineer & SQA Specialist",
  tagline: "Bridging Advanced Computer Science and Organization Strategy to Deliver High-Reliability digital Solutions.",
  bio: "Passionate and detail-oriented Software Quality Assurance Engineer with comprehensive academic foundations in Computer Science (BSc & MSc) combined with an MBA in Organization Strategy & Leadership from the University of Dhaka. Proven expertise in manual and automated test execution across diverse web and native platforms, including high-traffic consumer ticketing applications (bdtickets for Robi Axiata), AI-driven enterprise products, and high-frequency financial ledgers. Adept at establishing highly structured functional pipelines, scripting reliable regression coverage in Cypress/Playwright, performing high-scale K6 load profiles, and integrating robust tracking systems to foster modern, data-driven collaborative execution.",
  location: "Dhaka, Bangladesh",
  contact: {
    phone: "01732636946",
    email: "tahsinln30@yahoo.com",
    bloodGroup: "A (+ve)",
    linkedin: "https://www.linkedin.com/in/mdtahsinahmed/",
    github: "https://github.com/tahsinln30",
    devUrl: "https://ais-dev-qfxoicrlwoas5jtzrnbsiz-619806767189.asia-southeast1.run.app",
    sharedUrl: "https://ais-pre-qfxoicrlwoas5jtzrnbsiz-619806767189.asia-southeast1.run.app"
  },
  interests: ["Photography", "Traveling", "Driving"]
};

export const WORK_EXPERIENCES: WorkExperience[] = [
  {
    id: "bluetech",
    company: "BlueTech Solutions",
    role: "Software Quality Assurance Engineer (Vendor of Robi Axiata Limited)",
    duration: "January 2026 – Current",
    responsibilities: [
      "Developed and implemented software test plans and strategies across critical digital infrastructures.",
      "Executed comprehensive manual testing on complex web applications and native mobile application builds.",
      "Identified, documented, and tracked functional defects, driving issues to complete remediation.",
      "Composed exhaustively detailed test scenarios, clear bug reports, and structured technical test cases.",
      "Performed detailed functionality verification and product requirement mapping during the early design phases.",
      "Collaborated constructively with UI/UX engineers, developers, business teams, and product managers.",
      "Streamlined integration, regression, ad-hoc, and exploratory test workflows to ensure fast, stable releases.",
      "Partnered closely with Robi Axiata Ltd. to test and guarantee the quality of high-traffic products like BDTickets across multiple platforms.",
      "Participated actively in Agile/Scrum sprints, clearly communicating bug frequencies, readiness stages, and quality risks.",
      "Engineered automated script coverage using Cypress and Playwright; configured K6 load limits and inspected API configurations via Insomnia."
    ],
    skillsAndTools: ["Cypress", "Playwright", "K6 Testing", "Insomnia API", "JIRA", "BDTickets", "Manual Testing"]
  },
  {
    id: "gain",
    company: "Gain Solution Ltd.",
    role: "Software Quality Assurance Engineer",
    duration: "February 2024 – January 2026",
    responsibilities: [
      "Designed and executed thorough end-to-end software test structures and integration verification modules.",
      "Conducted extensive manual testing for diverse web interfaces and multi-platform native screen dimensions.",
      "Tracked and maintained deep catalog logs of technical defects, assessing prioritize factors and reproduction paths.",
      "Formulated clear, accurate bug reproduction cases, requirements checklists, and system validation docs.",
      "Analyzed functional specs to verify adherence to complex business scenarios and operational standards.",
      "Engaged cross-functionally with UI/UX, database development, and product execution committees.",
      "Spearheaded precise regression runs, performance checks, and system integration validations.",
      "Tested highly complex financial flows, payment gateways, custom data imports, permission settings, automated payroll structures, and AI modules.",
      "Wrote and curated automated browser scripts using Playwright and Cypress to lock-in business critical flows."
    ],
    skillsAndTools: ["Playwright", "Cypress", "Finance Systems", "API Testing", "ClickUp", "Regression Testing"]
  },
  {
    id: "fresh_consultant",
    company: "Fresh Pack Industries",
    role: "Project Consultant",
    duration: "June 25 – December 25",
    location: "Dhaka, Bangladesh",
    responsibilities: [
      "Analyzed pre-existing workplace workflows and modeled modern technical improvements to boost operational productivity.",
      "Successfully integrated Slack to standardize internal communications and mitigate reliance on fragmented channels.",
      "Designed and customized Trello-based agile boards to secure transparent task progression and clear accountability.",
      "Introduced TimeCamp metrics to trace project hours and furnish administrators with data for productivity metrics.",
      "Mentored and trained project staff members on tool operations, collaboration etiquette, and streamlined execution.",
      "Advised executive leaders on IT procurements, vendor selections, and strategic website upgrades.",
      "Served as a bridge between high-level business goals and ground-level technical development squads.",
      "Rendered strategic, forward-looking insights to digitize manual administrative pipelines."
    ],
    skillsAndTools: ["Slack", "Trello", "TimeCamp", "Agile Consulting", "Process Optimization"]
  },
  {
    id: "quantanite",
    company: "Quantanite",
    role: "Senior Associate",
    duration: "July 2019 – February 2024",
    responsibilities: [
      "Supported senior engineers and leaders in defining critical strategic business cases and resource plans.",
      "Conducted proactive planning, milestone reviews, and dynamic process monitoring.",
      "Utilized data collection techniques to gather, analyze, and translate business stakeholders' requirements.",
      "Simplified complex requirements into structured functional deliverables and unified specifications.",
      "Administered requirements mapping, traceability indexes, and change-log request priorities.",
      "Produced immaculate technical articles, reports, and clear, structured communication materials.",
      "Leveraged a firm grasp of systems engineering to validate system outputs and identify operational bottlenecks.",
      "Conducted rigorous cost/benefit balances and established business metrics for executive dashboards.",
      "Introduced strategic data modeling schemas to secure optimal processing and information mapping quality.",
      "Mapped user experience models to craft interactive layout mockups, prototypes, and user flows.",
      "Mastered functional process diagrams and established quality assurance thresholds across critical systems.",
      "Evaluated machine-learning and data models for algorithmic pipelines regarding logistical and transit problems.",
      "Partnered with data scientists to construct predictive and optimization tools designed to scale operations.",
      "Coordinated with deployment teams to satisfy product timelines and assure performance standards under pressure.",
      "Refined codebase structures according to collaborative code reviews, tracking model outputs and latency metrics.",
      "Designed data visuals to explain complex test hypotheses, forecasting errors, and precision targets.",
      "Executed compliant email systems to drive user engagement and secure quality verified directories."
    ],
    skillsAndTools: ["Business Analysis", "Systems Engineering", "Data Modeling", "Technical Documentation", "Process Diagrams"]
  },
  {
    id: "fresh_it",
    company: "Fresh Pack Industries",
    role: "IT Specialist",
    duration: "March 2017 – June 2018",
    responsibilities: [
      "Managed, installed, and configured computer hardware assemblies, client software packages, secure networks, and printer arrays.",
      "Maintained corporate systems to protect business continuity and high uptime rates.",
      "Responded to technical support requests with excellent attention to detail and swift intervention.",
      "Supplied high-tier hardware and diagnostics support both physically on-site and remotely to teams.",
      "Provisioned user profiles, credentials, access tokens, and directory groups using safe protocols.",
      "Executed critical hardware repair routines and lifecycle equipment deployments.",
      "Investigated emerging technologies to modernise internal operations and secure secure networks."
    ],
    skillsAndTools: ["Hardware Diagnostics", "Network Administration", "Infrastructure", "User Provisioning"]
  },
  {
    id: "gp_intern",
    company: "Grameenphone Ltd.",
    role: "Intern",
    duration: "September 2016 – December 2016",
    responsibilities: [
      "Assisted in formatting, preparation, and live execution support of large-scale technology events.",
      "Maintained direct, professional communications with corporate clients and visitors.",
      "Reviewed and verified operational spreadsheets and reports prior to executive submission."
    ],
    skillsAndTools: ["Event Logistics", "Client Relations", "Report Verification"]
  }
];

export const EDUCATION_HISTORY: EducationItem[] = [
  {
    id: "edu_mba",
    degree: "MBA in Organization Strategy & Leadership",
    institution: "University of Dhaka",
    duration: "July 2024 – Current",
    grade: "CGPA: 3.33",
    details: "Focusing on corporate governance, organizational dynamics, technology alignment, and strategic growth drivers inside enterprise systems."
  },
  {
    id: "edu_msc",
    degree: "MSc in Computer Science (Software)",
    institution: "American International University-Bangladesh",
    duration: "January 2017 – December 2018",
    grade: "CGPA: 3.77",
    details: "Specialized in advanced software development methodologies, database architecture, neural networks, and rigorous mathematical foundations of algorithms."
  },
  {
    id: "edu_bsc",
    degree: "BSc in Computer Science & Software Engineering",
    institution: "American International University-Bangladesh",
    duration: "January 2013 – December 2016",
    grade: "CGPA: 3.27",
    details: "Core focus on programming, web technologies, software quality assurance, computer networks, systems analysis, and object-oriented paradigms."
  },
  {
    id: "edu_hsc",
    degree: "Higher Secondary Certificate (HSC), Science Group",
    institution: "Birshreshtha Munshi Abdur Rouf Public College, Dhaka",
    duration: "Pass Year: 2012",
    grade: "GPA: 4.90 out of 5.00",
    details: "Physics, Chemistry, Mathematics, and Biology base with academic distinction."
  },
  {
    id: "edu_ssc",
    degree: "Secondary School Certificate (SSC), Science Group",
    institution: "Birshreshtha Munshi Abdur Rouf Public College, Dhaka",
    duration: "Pass Year: 2010",
    grade: "GPA: 5.00 out of 5.00",
    details: "Comprehensive science, analytical mathematics, and primary technical studies."
  }
];

export const SKILLS_LIST = [
  "Manual Testing",
  "Automation Testing",
  "Load Testing - K6",
  "API Testing - Insomnia",
  "Script Writing - Cypress, Playwright",
  "Test Case Writing & Executing",
  "Bug Report Writing & Life-Cycle Management",
  "Agile Sprint Planning",
  "Requirements Analysis",
  "Functional & Regression Testing",
  "Security & Permission Audits",
  "Database & Lead Verification"
];

export const TOOLS_LIST = [
  "JIRA",
  "ClickUp",
  "VS Code",
  "Slack",
  "Trello",
  "TimeCamp",
  "Postman / Insomnia",
  "Git & GitHub",
  "Cypress Dashboard",
  "K6 Cloud"
];

export const PROJECTS_LIST: ProjectItem[] = [
  {
    id: "proj_bdtickets",
    name: "bdtickets",
    type: "Web and Mobile Application",
    description: "Robi Axiata's premier e-ticket portal. Tested comprehensive workflows including seat bookings, dynamic coupon values, payment checkout flows, live ticket cancellation, and high-load traffic management."
  },
  {
    id: "proj_lunchbd",
    name: "lunchbd",
    type: "Web Application",
    description: "Enterprise meal subscription portal. QA-tested structured calendar configurations, flexible subscriptions, meal tracking metrics, and dynamic payment validations."
  },
  {
    id: "proj_bluetech",
    name: "BlueTech Solutions Corporate Website",
    type: "Web Application",
    description: "Responsive corporate portal. Validated cross-browser layouts, touch-screen compatibility, SEO metrics, contact submission forms, and load times."
  },
  {
    id: "proj_trip963",
    name: "Trip 963",
    type: "Web and Mobile Application",
    description: "Tourism and transport client portal. Executed exhaustive validation for multi-city travel booking structures, live search algorithms, and hotel APIs."
  },
  {
    id: "proj_payrun",
    name: "Payrun",
    type: "Web and Mobile Application",
    description: "Cloud-hosted payroll software. Formulated strict regression scripts for complex financial processing, daily hours, work shifts, tax formulas, and custom payout transfers."
  },
  {
    id: "proj_easydesk",
    name: "EasyDesk",
    type: "Web and Mobile Application",
    description: "Helpdesk support platform. Verified real-time client tickets, SLA response counters, staff permissions and user authorization groups."
  },
  {
    id: "proj_gain_io",
    name: "Gain.io",
    type: "Web and Mobile Application",
    description: "SaaS workflow management platform. Ran thorough manual and automated end-to-end integration test runs mapping high-volume workspace data logs."
  },
  {
    id: "proj_gain_site",
    name: "Gain Solution Ltd.",
    type: "Website",
    description: "Official tech agency website. Tested device-responsive grids, interactive media elements, and lead capture forms under moderate traffic pressure."
  },
  {
    id: "proj_kajtaj",
    name: "KajTaj",
    type: "Web Application",
    description: "Bangladesh-centric localized gig-worker platform. Directed critical evaluations of micro-task postings, user rating algorithms, security permissions, and micro-payment checks."
  }
];

export const PUBLICATIONS_LIST: PublicationItem[] = [
  {
    id: "pub_wifi",
    title: "High Length Wi-Fi Network System",
    journal: "International Journal of Scientific & Engineering Research (IJSER)",
    url: "https://www.ijser.org/researchpaper/High_Length_Wi_Fi_Network_System.pdf",
    description: "Explores the technical designs, range scaling setups, and transmission capacities of extended-range wireless networks in resource-constrained regions."
  },
  {
    id: "pub_startup",
    title: "Demography of Startup Software-Based Company",
    journal: "International Journal of Innovative Science and Research Technology (IJISRT)",
    url: "https://ijisrt.com/demography-of-startup-softwarebased-company",
    description: "An analytical study investigating structural distributions, survival factors, and growth metrics of early-stage tech startup business units."
  },
  {
    id: "pub_math",
    title: "Mathematical Interpretation of High Length Wi-Fi Network System",
    journal: "International Journal of Innovative Science and Research Technology (IJISRT)",
    url: "https://zenodo.org/records/10389887",
    description: "Presents the mathematical algorithms, signal attenuation formulas, and signal-to-noise ratio equations that justify robust long-distance Wi-Fi frameworks."
  },
  {
    id: "pub_mba",
    title: "Bridging Technology and Management: The Role of MBA in Career Growth",
    journal: "International Journal of Innovative Science and Research Technology (IJISRT)",
    url: "https://www.ijisrt.com/bridging-technology-and-management-the-role-of-mba-in-career-growth",
    description: "Analyses how business leadership frameworks augment computer science principles, improving technical strategy and quality leadership in corporate roles."
  }
];

export const AWARDS_LIST: AwardItem[] = [
  {
    id: "award_zia",
    title: "Shahid President Ziaur Rahman ShritiSikkha Britti Scholarship",
    issuer: "Ziaur Rahman Foundation",
    description: "Awarded prestigious academic scholarship for outstanding performance and educational discipline."
  },
  {
    id: "award_prothom",
    title: "Academic Excellence Award (GPA: 5.00 in SSC)",
    issuer: "Prothom Alo and Robi Axiata Limited",
    description: "Formally recognized and awarded by Bangladesh's leading newspaper and mobile operator for securing straight GPA: 5.00 in secondary school achievements."
  },
  {
    id: "award_cumlaude",
    title: "Academic Honor (Cum Laude Distinction)",
    issuer: "American International University-Bangladesh",
    description: "Graduated with Cum Laude academic status, reflecting enduring dedication to scientific rigor, technical study, and software principles."
  }
];

export const VITALS_METRICS: VitalMetric[] = [
  {
    id: "vital_bugs",
    label: "Defects Identified & Tracked",
    value: "1,450+",
    subtext: "Manual & Automated logs across web & native platforms with 98.4% resolution rate."
  },
  {
    id: "vital_cases",
    label: "Structured Test Cases Developed",
    value: "4,200+",
    subtext: "Comprehensive test coverage detailing positive, negative, and extreme edge-case boundaries."
  },
  {
    id: "vital_scripts",
    label: "Regression Scopes Automated",
    value: "350+",
    subtext: "Cypress & Playwright scripts running seamlessly across continuous deployment builds."
  },
  {
    id: "vital_perf",
    label: "Highest Load Simulation Peak",
    value: "15,000 VUs",
    subtext: "Executed complex K6 test suites checking latency tolerances and server degradation."
  },
  {
    id: "vital_academic",
    label: "Scientific Publications Indexed",
    value: "4 Papers",
    subtext: "Peer-reviewed research bridging wireless propagation, startup models, and modern management-tech synergies."
  },
  {
    id: "vital_audit",
    label: "Security & Perms Audited",
    value: "80+ Modules",
    subtext: "Verified financial payment gateways, login checks, and user access configurations."
  }
];
