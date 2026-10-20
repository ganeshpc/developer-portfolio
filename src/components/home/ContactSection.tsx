import { Button } from "@/components/ui/Button";
import { profile } from "@/data/profile";

export function ContactSection() {
  const primary = profile.email
    ? { href: `mailto:${profile.email}`, external: false, label: "Get in touch" }
    : {
        href: profile.linkedin,
        external: true,
        label: "Get in touch",
      };

  const links = [
    profile.email
      ? { label: "Email", href: `mailto:${profile.email}`, external: false }
      : null,
    { label: "GitHub", href: profile.github, external: true },
    { label: "LinkedIn", href: profile.linkedin, external: true },
    { label: "Résumé", href: profile.resumeUrl, external: true },
  ].filter((item) => item !== null);

  return (
    <section id="contact" className="scroll-mt-20 border-t border-border">
      <div className="page-wrap flex flex-col gap-8 py-12 sm:py-14 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <h2 className="max-w-[18ch] text-[clamp(1.75rem,2.5vw,2.25rem)] leading-tight font-semibold tracking-[-0.04em] text-text">
            Have an interesting problem? Let&apos;s talk.
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-6 text-secondary sm:text-[15px] sm:leading-7">
            Feel free to reach out about engineering opportunities, collaboration,
            or a technical problem worth talking through.
          </p>
          <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
            {links.map((link) => (
              <li key={link.label}>
                {link.external ? (
                  <a
                    href={link.href}
                    className="text-sm text-secondary transition-colors duration-200 hover:text-text"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                  </a>
                ) : (
                  <a
                    href={link.href}
                    className="text-sm text-secondary transition-colors duration-200 hover:text-text"
                  >
                    {link.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
          <Button
            href={primary.href}
            external={primary.external}
            aria-label={
              profile.email ? "Get in touch by email" : "Get in touch on LinkedIn"
            }
          >
            {primary.label}
          </Button>
          <Button href={profile.resumeUrl} variant="secondary" external icon="download">
            Download résumé
          </Button>
        </div>
      </div>
    </section>
  );
}
