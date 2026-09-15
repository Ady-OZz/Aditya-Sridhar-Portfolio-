export interface Certification {
  title: string;
  issuer: string;
  date: string;
  image: string;
  credentialUrl?: string;
}

export interface CertificationGroup {
  issuer: string;
  category: string;
  badgeCount: string;
  certifications: Certification[];
}

export const CERTIFICATION_GROUPS: CertificationGroup[] = [
  {
    issuer: "Oracle",
    category: "Cloud & AI Infrastructure",
    badgeCount: "3 Certifications",
    certifications: [
      {
        title: "OCI 2025 Certified AI Foundations Associate",
        issuer: "Oracle",
        date: "May 2025",
        image: "/certifications/oracle-merged.pdf",
      },
      {
        title: "OCI 2025 Certified Foundations Associate",
        issuer: "Oracle",
        date: "May 2025",
        image: "/certifications/oracle-merged.pdf",
      },
      {
        title: "Data Platform 2025 Certified Foundations Associate",
        issuer: "Oracle",
        date: "May 2025",
        image: "/certifications/oracle-merged.pdf",
      },
    ],
  },
  {
    issuer: "Cisco",
    category: "Networking, AI & Data Science",
    badgeCount: "5 Certifications",
    certifications: [
      {
        title: "Apply AI: Analyze Customer Reviews",
        issuer: "Cisco",
        date: "Aug 2025",
        image:
          "/certifications/apply_ai-_analyze_customer_reviews_certificate_0221mcsd064-niet-co-in_3c36c47b-de37-4614-8f83-b0be8939716c.pdf",
      },
      {
        title: "Introduction to Cybersecurity",
        issuer: "Cisco",
        date: "Aug 2025",
        image:
          "/certifications/introduction_to_cybersecurity_certificate_0221mcsd064-niet-co-in_f138f5ed-3c81-4145-8059-349ea714ec01.pdf",
      },
      {
        title: "Introduction to Data Science",
        issuer: "Cisco",
        date: "Aug 2025",
        image:
          "/certifications/introduction_to_data_science_certificate_0221mcsd064-niet-co-in_ec82b687-6df1-4cd8-86c6-86677264813c.pdf",
      },
      {
        title: "Introduction to Modern AI",
        issuer: "Cisco",
        date: "Aug 2025",
        image:
          "/certifications/introduction_to_modern_ai_certificate_0221mcsd064-niet-co-in_e09cdae4-14e8-4c03-86ca-758e3c6253b4.pdf",
      },
      {
        title: "Python Essentials 2",
        issuer: "Cisco",
        date: "Aug 2025",
        image:
          "/certifications/python_essentials_2_certificate_0221mcsd064-niet-co-in_2c8dea63-d79d-4864-8fd8-990819784eed.pdf",
      },
    ],
  },
  {
    issuer: "Adobe",
    category: "Generative AI & Creativity",
    badgeCount: "1 Certification",
    certifications: [
      {
        title: "Creativity and Generative AI",
        issuer: "Adobe",
        date: "Jun 2026",
        image: "/certifications/adobe-creativity-and-gen-ai.pdf",
      },
    ],
  },
  {
    issuer: "Infosys Springboard",
    category: "Agile & Software Practices",
    badgeCount: "1 Certification",
    certifications: [
      {
        title: "Kanban In Practice",
        issuer: "Infosys Springboard",
        date: "Apr 2026",
        image: "/certifications/kanban-in-practice506.pdf",
      },
    ],
  },
];

export const CERTIFICATIONS: Certification[] = CERTIFICATION_GROUPS.flatMap(
  (group) => group.certifications,
);
