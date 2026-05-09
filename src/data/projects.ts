import { type ProjectCardProps } from "@/components/projects/project-card";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";

export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = [
  {
    index: 0,
    title: "Jravel AI Powered Travel Planner",
    href: "/projects",
    tags: ["React", "Firebase", "GeminiAI", "GoogleMaps"],
    image: {
      LIGHT: "/images/projects/jravel-placeholder.svg",
      DARK: "/images/projects/jravel-placeholder.svg",
    },
  },
  {
    index: 1,
    title: "Student Admission System",
    href: "/projects",
    tags: ["Java", "Swing", "JDBC", "MySQL"],
    image: {
      LIGHT: "/images/projects/student-admission-placeholder.svg",
      DARK: "/images/projects/student-admission-placeholder.svg",
    },
  },
  {
    index: 2,
    title: "E-Waste Management Website",
    href: "/projects",
    tags: ["HTML", "CSS", "JavaScript", "RESTAPI"],
    image: {
      LIGHT: "/images/projects/ewaste-placeholder.svg",
      DARK: "/images/projects/ewaste-placeholder.svg",
    },
  },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "Jravel AI Powered Travel Planner",
    favicon: "/favicon.ico",
    imageUrl: ["/images/projects/jravel-placeholder.svg"],
    description:
      "Full stack collaborative travel planner with a 2-agent Gemini AI workflow that generates personalized destinations. Integrated Firebase Auth, Firestore, and real-time chat, cutting planning effort by 60% and improving collaboration by 45%.",
    sourceCodeHref: "https://github.com/Ady-OZz/Capstone-Project",
  },
  {
    name: "Student Admission System",
    favicon: "/favicon.ico",
    imageUrl: ["/images/projects/student-admission-placeholder.svg"],
    description:
      "Java Swing-based admission management system with MD5 authentication, JDBC/MySQL backend, and real-time record retrieval. Scaled backend services by 15%.",
    sourceCodeHref: "https://github.com/Ady-OZz/Student-Mngnt-SYS",
  },
  {
    name: "E-Waste Management Website",
    favicon: "/favicon.ico",
    imageUrl: ["/images/projects/ewaste-placeholder.svg"],
    description:
      "Responsive web app that automates e-waste pickup workflows, connects users with refurbishment centers, and improves navigation flow by 30%.",
    sourceCodeHref: "https://github.com/Ady-OZz/EWMS",
  },
  {
    name: "Budget Tracker Application",
    favicon: "/favicon.ico",
    imageUrl: ["/images/projects/budget-tracker-placeholder.svg"],
    description:
      "Integrated frontend and backend components with database queries to automate expense tracking, cutting task time by 35%.",
    sourceCodeHref: "https://github.com/Ady-OZz/Expense-Tracker",
  },
];
