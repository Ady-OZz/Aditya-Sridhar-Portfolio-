import { useState } from "react";
import {
  type CertificationGroup,
  CERTIFICATION_GROUPS,
} from "@/data/certifications";

export interface CertificationsShowcaseProps {
  title?: string;
  groups?: CertificationGroup[];
  items?: CertificationGroup[];
}

function OracleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 4C7.582 4 4 7.582 4 12s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zm0 13.5c-3.038 0-5.5-2.462-5.5-5.5s2.462-5.5 5.5-5.5 5.5 2.462 5.5 5.5-2.462 5.5-5.5 5.5z" />
    </svg>
  );
}

function CiscoIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M4 14.5a1 1 0 011 1v2a1 1 0 11-2 0v-2a1 1 0 011-1zm3-3a1 1 0 011 1v5a1 1 0 11-2 0v-5a1 1 0 011-1zm3-3a1 1 0 011 1v8a1 1 0 11-2 0V9.5a1 1 0 011-1zm3 3a1 1 0 011 1v5a1 1 0 11-2 0v-5a1 1 0 011-1zm3-3a1 1 0 011 1v8a1 1 0 11-2 0V9.5a1 1 0 011-1zm3 3a1 1 0 011 1v5a1 1 0 11-2 0v-5a1 1 0 011-1zm3 3a1 1 0 011 1v2a1 1 0 11-2 0v-2a1 1 0 011-1z" />
    </svg>
  );
}

function AdobeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M14.55 3.5H24v17H18.9l-3.3-8.8-1.05 3.1h3.35l-1.05 2.8h-3.35l-1.15 2.9H9.45L14.55 3.5zm-5.1 0L0 20.5h5.1L9.45 3.5z" />
    </svg>
  );
}

function InfosysIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2L14.4 8.6L21 11L14.4 13.4L12 20L9.6 13.4L3 11L9.6 8.6L12 2Z" />
    </svg>
  );
}

function getIssuerIcon(issuer: string) {
  const lower = issuer.toLowerCase();
  if (lower.includes("oracle")) {
    return <OracleIcon className="h-6 w-6" />;
  }
  if (lower.includes("cisco")) {
    return <CiscoIcon className="h-6 w-6" />;
  }
  if (lower.includes("adobe")) {
    return <AdobeIcon className="h-6 w-6" />;
  }
  return <InfosysIcon className="h-6 w-6" />;
}

export default function CertificationsShowcase({
  title = "Certifications",
  groups = CERTIFICATION_GROUPS,
  items,
}: CertificationsShowcaseProps) {
  const displayGroups = groups || items || CERTIFICATION_GROUPS;
  const [activeCardIndex, setActiveCardIndex] = useState<number | null>(null);

  if (!displayGroups || displayGroups.length === 0) {
    return null;
  }

  return (
    <section className="mx-auto my-32 max-w-7xl px-6 sm:px-14 md:my-40 md:px-20">
      <div className="text-center">
        <h2 className="mb-4 w-full bg-gradient-to-r from-accent/70 to-accent bg-clip-text text-3xl font-bold text-transparent xs:text-4xl sm:text-6xl md:text-7xl">
          {title}
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-sm text-muted-foreground sm:text-base">
          Professional certifications validating technical expertise across
          cloud computing, artificial intelligence, cybersecurity, and agile
          practices.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
        {displayGroups.map((group, groupIndex) => {
          const isToggled = activeCardIndex === groupIndex;

          return (
            <div
              key={group.issuer}
              tabIndex={0}
              role="region"
              aria-label={`${group.issuer} certifications`}
              onClick={() => setActiveCardIndex(isToggled ? null : groupIndex)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setActiveCardIndex(isToggled ? null : groupIndex);
                }
              }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-accent/20 bg-background/60 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 hover:bg-background/90 hover:shadow-2xl hover:shadow-accent/10 focus:outline-none focus:ring-2 focus:ring-accent sm:p-8"
            >
              {/* Subtle ambient background glow on hover */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-accent/10 opacity-40 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

              {/* Card Header: Issuer Logo, Name, Badge */}
              <div className="relative z-10">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3.5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-accent/20 bg-accent/10 text-accent transition-transform duration-300 group-hover:scale-110 group-hover:border-accent">
                      {getIssuerIcon(group.issuer)}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                        {group.issuer}
                      </h3>
                      <p className="text-xs font-medium text-muted-foreground sm:text-sm">
                        {group.category}
                      </p>
                    </div>
                  </div>

                  <span className="inline-flex shrink-0 items-center rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                    {group.badgeCount}
                  </span>
                </div>

                {/* Divider */}
                <div className="bg-accent/15 my-5 h-px w-full transition-colors duration-300 group-hover:bg-accent/30" />

                {/* Certificate Bullet Points Section */}
                <div>
                  <div className="mb-3 flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Credentials
                    </span>
                    <span className="text-[11px] text-accent/80 transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100">
                      Click bullet to open PDF ↗
                    </span>
                  </div>

                  <ul className="space-y-2.5">
                    {group.certifications.map((cert) => {
                      const href = cert.credentialUrl || cert.image;

                      return (
                        <li key={cert.title}>
                          <a
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="group/item flex items-start justify-between gap-3 rounded-xl border border-transparent p-2.5 transition-all duration-200 hover:border-accent/30 hover:bg-accent/10"
                          >
                            <div className="flex items-start gap-2.5">
                              {/* Custom bullet dot */}
                              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent/60 transition-all duration-200 group-hover/item:scale-125 group-hover/item:bg-accent" />
                              <span className="text-sm font-medium text-foreground transition-colors group-hover/item:text-accent sm:text-[15px]">
                                {cert.title}
                              </span>
                            </div>

                            <div className="flex shrink-0 items-center gap-2 pt-0.5">
                              <span className="text-xs text-muted-foreground">
                                {cert.date}
                              </span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="h-4 w-4 text-accent/50 transition-all duration-200 group-hover/item:-translate-y-0.5 group-hover/item:translate-x-0.5 group-hover/item:text-accent"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </div>
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>

              {/* Bottom Footer Hint */}
              <div className="relative z-10 mt-5 border-t border-accent/10 pt-3">
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>Verified Credentials</span>
                  <span className="flex items-center gap-1 font-medium text-accent transition-transform duration-300 group-hover:translate-x-1">
                    View Documents →
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
