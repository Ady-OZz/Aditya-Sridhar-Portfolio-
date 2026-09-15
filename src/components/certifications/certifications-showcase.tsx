import Image from "next/image";

export interface CertificationsShowcaseProps {
  title: string;
  items: {
    title: string;
    issuer: string;
    date: string;
    image: string;
    credentialUrl?: string;
  }[];
}

export default function CertificationsShowcase({
  title,
  items,
}: CertificationsShowcaseProps) {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <section className="mx-auto my-32 max-w-7xl px-6 sm:px-14 md:my-40 md:px-20">
      <h2 className="mb-12 w-full bg-gradient-to-r from-accent/70 to-accent bg-clip-text text-center text-3xl font-bold text-transparent xs:text-4xl sm:text-6xl md:text-7xl">
        {title}
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((cert) => {
          const isPdf = cert.image.toLowerCase().endsWith(".pdf");
          const href = cert.credentialUrl || cert.image;

          return (
            <a
              key={cert.title}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col overflow-hidden rounded-2xl border border-accent/20 bg-background shadow-sm transition-all duration-300 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5"
            >
              {/* Thumbnail / placeholder */}
              <div className="relative flex h-48 items-center justify-center overflow-hidden bg-accent/5">
                {isPdf ? (
                  <div className="flex flex-col items-center gap-2 text-accent/60">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-12 w-12"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                      />
                    </svg>
                    <span className="text-xs font-medium">PDF Certificate</span>
                  </div>
                ) : (
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    unoptimized
                  />
                )}
              </div>

              {/* Card body */}
              <div className="flex flex-1 flex-col gap-1 p-5">
                <h3 className="text-sm font-semibold text-foreground sm:text-base">
                  {cert.title}
                </h3>
                <span className="text-xs text-muted-foreground">
                  {cert.issuer}
                </span>
                <span className="mt-auto pt-2 text-xs text-accent/70">
                  {cert.date}
                </span>
              </div>

              {/* Footer link hint */}
              <div className="border-t border-accent/10 px-5 py-3">
                <span className="text-xs font-medium text-accent transition-colors group-hover:text-accent/80">
                  View certificate →
                </span>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
