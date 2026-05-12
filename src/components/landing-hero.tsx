import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

import FadeUp from "@/animation/fade-up";
import DuotoneImage from "@/components/duotone-image";
import { GithubIcon, LinkedinIcon, MailIcon } from "@/components/icons";
import { siteMetadata } from "@/data/siteMetaData.mjs";

const ROLE_TITLES = [
  "Software Developer",
  "Java Developer",
  "Full Stack Developer",
  "Problem Solver",
];

export default function LandingHero() {
  const [scrollY, setScrollY] = useState(0);
  const [roleIndex, setRoleIndex] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  let progress = 0;
  const { current: elContainer } = ref;

  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight);
  }

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);

    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLE_TITLES.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      animate={{
        transform: `translateY(${progress * 20}vh)`,
      }}
      transition={{ type: "spring", stiffness: 100 }}
      ref={ref}
      className="flex max-h-[1000px] min-h-[calc(100vh-200px)] items-center px-6 sm:px-14 md:h-[calc(100vh-200px)] md:min-h-max md:px-20"
    >
      <div className="w-full">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <AnimatePresence>
                <FadeUp key="title-main" duration={0.6}>
                  <span className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    Hi, I am
                  </span>
                  <h1 className="bg-accent bg-clip-text py-2 text-5xl font-bold text-transparent sm:text-6xl md:text-7xl xl:text-8xl">
                    Aditya Sridhar
                  </h1>
                  <div className="mt-2 h-10 sm:h-12">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={ROLE_TITLES[roleIndex]}
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -10, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-xl font-semibold text-foreground md:text-3xl"
                      >
                        {ROLE_TITLES[roleIndex]}
                      </motion.span>
                    </AnimatePresence>
                  </div>
                </FadeUp>
                <FadeUp key="description" duration={0.6} delay={0.2}>
                  <p className="mt-6 max-w-2xl text-base font-semibold text-foreground sm:text-base md:text-xl">
                    Integrated M.Tech (CSE) student at NIET. Building scalable
                    apps with Java, Python, and React.
                  </p>
                  <p className="mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
                    Software Developer and Integrated M.Tech (CSE) student
                    seeking a fresher role to contribute problem solving skills,
                    programming expertise, and continuous learning.
                  </p>
                </FadeUp>
                <FadeUp key="cta" duration={0.6} delay={0.3}>
                  <div className="mt-8 flex flex-wrap gap-4">
                    <Link
                      href="/projects"
                      className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-background transition-colors hover:bg-accent/90 sm:text-base"
                    >
                      View Projects
                    </Link>
                    <a
                      href="https://drive.google.com/file/d/19oWSfeielzVApqE094LbzLFmvuj5e0uc/view?usp=drive_link"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-full border border-accent/40 px-6 py-3 text-sm font-semibold text-accent transition-colors hover:border-accent hover:bg-accent/10 sm:text-base"
                    >
                      View Resume
                    </a>
                  </div>
                </FadeUp>
                <FadeUp key="socials" duration={0.6} delay={0.4}>
                  <div className="mt-6 flex items-center gap-4">
                    <a
                      href={siteMetadata.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-accent/30 text-accent transition-colors hover:bg-accent/10"
                      aria-label="Github"
                    >
                      <GithubIcon className="h-5 w-5" />
                    </a>
                    <a
                      href={siteMetadata.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-accent/30 text-accent transition-colors hover:bg-accent/10"
                      aria-label="LinkedIn"
                    >
                      <LinkedinIcon className="h-5 w-5" />
                    </a>
                    <a
                      href={`mailto:${siteMetadata.email}`}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-accent/30 text-accent transition-colors hover:bg-accent/10"
                      aria-label="Email"
                    >
                      <MailIcon className="h-5 w-5" />
                    </a>
                  </div>
                </FadeUp>
              </AnimatePresence>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-sm">
                <AnimatePresence>
                  <FadeUp key="hero-image" duration={0.6} delay={0.2}>
                    <DuotoneImage
                      src="/images/profile.webp"
                      fallbackSrc="/images/heroProfile.jpeg"
                      width={520}
                      height={640}
                      className="h-auto w-full rounded-2xl border border-accent/20"
                      alt="Aditya Sridhar portrait"
                      lightColor="#E0FFFF"
                      darkColor="#004D4D"
                      unoptimized
                    />
                  </FadeUp>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
