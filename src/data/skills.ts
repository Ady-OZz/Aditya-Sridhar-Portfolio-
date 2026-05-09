import {
  SiCss3,
  SiDocker,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiKubernetes,
  SiLinux,
  SiMysql,
  SiNumpy,
  SiPandas,
  SiPostgresql,
  SiPython,
  SiTensorflow,
  SiVisualstudiocode,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { FiBox, FiCode, FiLayers, FiShuffle, FiTool } from "react-icons/fi";
import { type SkillsShowcaseProps } from "@/components/skills/skills-showcase";

export const SKILLS_DATA: SkillsShowcaseProps["skills"] = [
  {
    sectionName: "Languages",
    skills: [
      {
        name: "Java",
        icon: FaJava,
      },
      {
        name: "Python",
        icon: SiPython,
      },
      {
        name: "JavaScript",
        icon: SiJavascript,
      },
      {
        name: "SQL",
        icon: SiMysql,
      },
      {
        name: "HTML",
        icon: SiHtml5,
      },
      {
        name: "CSS",
        icon: SiCss3,
      },
    ],
  },
  {
    sectionName: "Libraries",
    skills: [
      {
        name: "Pandas",
        icon: SiPandas,
      },
      {
        name: "NumPy",
        icon: SiNumpy,
      },
      {
        name: "Matplotlib",
        icon: FiLayers,
      },
      {
        name: "TensorFlow",
        icon: SiTensorflow,
      },
    ],
  },
  {
    sectionName: "Tools & DevOps",
    skills: [
      {
        name: "Kubernetes",
        icon: SiKubernetes,
      },
      {
        name: "Docker",
        icon: SiDocker,
      },
      {
        name: "Git",
        icon: SiGit,
      },
      {
        name: "Linux",
        icon: SiLinux,
      },
      {
        name: "VS Code",
        icon: SiVisualstudiocode,
      },
    ],
  },
  {
    sectionName: "Databases",
    skills: [
      {
        name: "MySQL",
        icon: SiMysql,
      },
      {
        name: "PostgreSQL",
        icon: SiPostgresql,
      },
    ],
  },
  {
    sectionName: "Core Concepts",
    skills: [
      {
        name: "DSA",
        icon: FiCode,
      },
      {
        name: "OOP",
        icon: FiBox,
      },
      {
        name: "System Design",
        icon: FiLayers,
      },
      {
        name: "SDLC",
        icon: FiTool,
      },
      {
        name: "REST APIs",
        icon: FiShuffle,
      },
    ],
  },
];
