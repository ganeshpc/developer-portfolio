import { profile } from "@/data/profile";

const links = [
  { label: "GitHub", href: profile.github },
  { label: "LinkedIn", href: profile.linkedin },
  { label: "Résumé", href: profile.resumeUrl },
];

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="page-wrap flex flex-col gap-6 py-8 sm:flex-row sm:items-end sm:justify-between sm:py-10">
        <div>
          <p className="text-sm text-text">{profile.name}</p>
          <p className="mt-1 max-w-md text-sm leading-6 text-secondary">
            © 2026 {profile.name}. {profile.availabilityNote}
          </p>
        </div>
        <ul className="flex flex-wrap gap-x-5 gap-y-2">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-sm text-secondary transition-colors duration-200 hover:text-text"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
