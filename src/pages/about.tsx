import { NextSeo } from "next-seo";

import AboutHero from "@/components/about-hero";
import ExperienceShowcaseList from "@/components/experience/experience-showcase-list";
import { EXPERIENCE } from "@/data/experience";
import { EDUCATION } from "@/data/education";
import { siteMetadata } from "@/data/siteMetaData.mjs";

const publications = [
  "Research Paper (In Progress): Design and Development of an AI Enabled Collaborative Travel Planning Platform",
  "Technical Book (Proposed): Web Based E Waste Management System - proposed for Packt Publishing",
];

const achievements = [
  "200+ LeetCode problems solved, strengthening problem solving and optimization skills",
  "Delivered multiple production applications combining full stack web development with OOP and SDLC",
  "FinTech Hackathon at IIIT Delhi",
  "Facebook Developers Circle Hackathon",
];

function InfoSection({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="mx-auto my-32 max-w-7xl px-6 sm:px-14 md:my-40 md:px-20">
      <h2 className="mb-12 w-full bg-gradient-to-r from-accent/70 to-accent bg-clip-text text-center text-3xl font-bold text-transparent xs:text-4xl sm:text-6xl md:text-7xl">
        {title}
      </h2>
      <div className="grid gap-6 md:grid-cols-2">
        {items.map((item) => (
          <div
            key={item}
            className="rounded-2xl border border-accent/20 bg-background p-6 text-foreground shadow-sm dark:bg-zinc-900"
          >
            <p className="text-sm font-medium text-muted-foreground sm:text-base">
              {item}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function About() {
  return (
    <>
      <NextSeo
        title="About Aditya Sridhar | Software Developer"
        description="Learn more about Aditya Sridhar, an Integrated M.Tech (CSE) student and Software Developer. Explore education, experience, and achievements that shape his work."
        canonical={`${siteMetadata.siteUrl}/about`}
        openGraph={{
          url: `${siteMetadata.siteUrl}/about`,
          title: "Learn About Aditya Sridhar - Software Developer",
          description:
            "Dive into the journey of Aditya Sridhar, a Software Developer focused on building production-quality applications.",
          images: [
            {
              url: `${siteMetadata.siteUrl}${siteMetadata.twitterImage}`,
              alt: "Aditya Sridhar - Portfolio Image",
            },
          ],
          siteName: siteMetadata.siteName,
          type: "website",
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            property: "keywords",
            content:
              "Software Developer portfolio, Java Developer, Full Stack Developer, Integrated M.Tech CSE, Projects, Experience, Education",
          },
        ]}
      />
      <AboutHero />
      <ExperienceShowcaseList title="Education" details={EDUCATION} />
      <ExperienceShowcaseList title="Experience" details={EXPERIENCE} />
      <InfoSection title="Publications" items={publications} />
      <InfoSection title="Achievements" items={achievements} />
    </>
  );
}
