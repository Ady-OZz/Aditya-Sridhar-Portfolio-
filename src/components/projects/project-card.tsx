import Image from "next/image";

import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

import Corosel from "@/components/utility/corosel";
import { GithubIcon } from "@/components/icons";

export interface ProjectCardProps {
  name: string;
  favicon: string;
  imageUrl: string[];
  description: string;
  date: string;
  techStack: string[];
  bullets: string[];
  sourceCodeHref: string;
  liveWebsiteHref?: string;
}

export default function ProjectCard(props: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ y: 80 }}
      whileInView={{ y: 0 }}
      transition={{
        type: "spring",
        duration: 0.4,
      }}
      onHoverStart={() => setIsExpanded(true)}
      onHoverEnd={() => setIsExpanded(false)}
      onClick={() => setIsExpanded((prev) => !prev)}
      className="w-full overflow-hidden rounded-lg border border-accent/20 bg-background shadow-md transition-shadow duration-150 hover:shadow-md hover:shadow-accent/20 dark:bg-zinc-800 dark:hover:shadow-lg"
    >
      <Corosel images={props.imageUrl} aspectRatio={2.1} />
      <div className="p-3 text-foreground sm:p-4">
        <div className="flex items-center gap-3">
          <span className="relative h-5 w-5">
            <Image src={props.favicon} alt="logo" fill />
          </span>
          <span className="text-sm font-semibold">{props.name}</span>
        </div>
        <div className="mt-3">
          <p className="text-xs md:text-sm">{props.description}</p>
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="mt-4 flex flex-col gap-3">
                  <div className="flex flex-wrap gap-2">
                    {props.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="rounded-full bg-accent/10 px-2 py-1 text-xs font-medium text-accent"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="text-xs font-semibold text-muted-foreground md:text-sm">
                    {props.date}
                  </div>
                  <ul className="list-inside list-disc space-y-1 text-xs text-foreground md:text-sm">
                    {props.bullets.map((bullet, idx) => (
                      <li key={idx}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className="mt-6 flex items-center justify-end gap-6">
          <a
            href={props.sourceCodeHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-xs underline md:text-sm"
          >
            <GithubIcon className="h-5 w-5" /> Source code
          </a>
          {props.liveWebsiteHref && (
            <a
              href={props.liveWebsiteHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-xs underline md:text-sm"
            >
              <FiExternalLink className="h-5 w-5" /> Live
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
