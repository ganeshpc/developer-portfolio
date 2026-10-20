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
    <section id="contact" className="section scroll-mt-20 border-t border-border">
      <div className="page-wrap">
        <h2 className="max-w-[16ch] font-serif text-[clamp(2rem,3.5vw,3rem)] leading-[1.08] font-medium tracking-[-0.03em] text-balance text-text">
          Have an interesting problem? Let&apos;s talk.
        </h2>
        <p className="mt-5 max-w-xl text-base leading-7 text-secondary sm:text-lg">
          {profile.email
            ? "Email is the direct line. The other links are here if you would rather start there."
            : "Email is not published on this site yet. LinkedIn and GitHub are the public ways to reach me."}
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
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
        <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2">
          {links.map((link) => (
            <li key={link.label}>
              {link.external ? (
                <a
                  href={link.href}
                  className="text-sm text-secondary hover:text-text"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                </a>
              ) : (
                <a href={link.href} className="text-sm text-secondary hover:text-text">
                  {link.label}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
