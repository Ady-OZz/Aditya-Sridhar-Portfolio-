import { type ProjectCardProps } from "@/components/projects/project-card";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";

export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = [
  {
    index: 0,
    title: "Jravel AI Powered Travel Planner",
    href: "/projects",
    tags: ["React", "Firebase", "GeminiAI", "GoogleMaps"],
    image: {
      LIGHT: "/images/projects/jravel-ai-powered-travel-planner/01.png",
      DARK: "/images/projects/jravel-ai-powered-travel-planner/01.png",
    },
  },
  {
    index: 1,
    title: "Student Admission System",
    href: "/projects",
    tags: ["Java", "Swing", "JDBC", "MySQL"],
    image: {
      LIGHT: "/images/projects/student-admission-system/01.png",
      DARK: "/images/projects/student-admission-system/01.png",
    },
  },
  {
    index: 2,
    title: "E-Waste Management Website",
    href: "/projects",
    tags: ["HTML", "CSS", "JavaScript", "RESTAPI"],
    image: {
      LIGHT: "/images/projects/e-waste-management-website/01.png",
      DARK: "/images/projects/e-waste-management-website/01.png",
    },
  },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "Jravel AI Powered Travel Planner",
    favicon: "/favicon.ico",
    imageUrl: [
      "/images/projects/jravel-ai-powered-travel-planner/01.png",
      "/images/projects/jravel-ai-powered-travel-planner/02.png",
      "/images/projects/jravel-ai-powered-travel-planner/03.png",
      "/images/projects/jravel-ai-powered-travel-planner/04.png",
      "/images/projects/jravel-ai-powered-travel-planner/05.png",
      "/images/projects/jravel-ai-powered-travel-planner/06.png",
    ],
    description:
      "Full stack collaborative travel planner with a 2-agent Gemini AI workflow that generates personalized destinations.",
    date: "May 2026",
    techStack: ["React", "Firebase", "Gemini AI", "Maps", "REST API", "Git"],
    bullets: [
      "Engineered a full stack travel planner enabling collaborative trip management with real time itinerary updates.",
      "Configured a 2-agent Gemini AI workflow that generated personalized destinations, reducing trip planning effort by 60%.",
      "Integrated Firebase Auth, Firestore, and realtime chat to improve secure collaboration efficiency by 45%.",
    ],
    sourceCodeHref: "https://github.com/Ady-OZz/Capstone-Project",
  },
  {
    name: "Student Admission System",
    favicon: "/favicon.ico",
    imageUrl: [
      "/images/projects/student-admission-system/01.png",
      "/images/projects/student-admission-system/02.png",
      "/images/projects/student-admission-system/03.png",
      "/images/projects/student-admission-system/04.png",
    ],
    description:
      "Java Swing-based admission management system with MD5 authentication and a JDBC/MySQL backend.",
    date: "Aug 2025",
    techStack: ["Java", "Swing", "JDBC", "MySQL", "Git"],
    bullets: [
      "Created a Java Swing based admission management system to support student onboarding and administrative operations.",
      "Secured authentication using MD5 hashing and access control mechanisms to protect database operations.",
      "Enabled real time record retrieval and updates via JDBC and MySQL, scaling backend services by 15%.",
    ],
    sourceCodeHref: "https://github.com/Ady-OZz/Student-Mngnt-SYS",
  },
  {
    name: "E-Waste Management Website",
    favicon: "/favicon.ico",
    imageUrl: [
      "/images/projects/e-waste-management-website/01.png",
      "/images/projects/e-waste-management-website/02.png",
      "/images/projects/e-waste-management-website/03.png",
      "/images/projects/e-waste-management-website/04.png",
      "/images/projects/e-waste-management-website/05.png",
    ],
    description:
      "Responsive web app that automates e-waste pickup workflows and connects users with refurbishment centers.",
    date: "Jan 2025",
    techStack: ["HTML", "CSS", "JavaScript", "REST API", "Git"],
    bullets: [
      "Developed a responsive web application to automate e-waste pickup workflows, reducing manual coordination by 40%.",
      "Implemented routing logic to connect users with refurbishment centers, eliminating intermediaries.",
      "Improved usability by building reusable UI components and streamlining navigation flow by 30%.",
    ],
    sourceCodeHref: "https://github.com/Ady-OZz/EWMS",
  },
  {
    name: "Budget Tracker Application",
    favicon: "/favicon.ico",
    imageUrl: ["/images/projects/budget-tracker-application/01.png"],
    description:
      "Integrated frontend and backend components with database queries to automate expense tracking.",
    date: "Oct 2024",
    techStack: ["Git"],
    bullets: [
      "Integrated frontend, backend, and database layers to support end-to-end application functionality, automating expense tracking and cutting task completion time by 35%.",
    ],
    sourceCodeHref: "https://github.com/Ady-OZz/Expense-Tracker",
  },
];
