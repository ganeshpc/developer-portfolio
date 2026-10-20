"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  isCurrent,
  MobileNavigation,
  navItems,
} from "@/components/layout/MobileNavigation";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { profile } from "@/data/profile";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-page">
      <div className="page-wrap grid h-16 grid-cols-[1fr_auto] items-center lg:grid-cols-[1fr_auto_1fr]">
        <Link href="/" className="flex items-center gap-2.5 justify-self-start">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-button text-sm font-semibold text-button-text">
            G
          </span>
          <span className="hidden text-sm font-medium tracking-[-0.01em] text-text sm:inline">
            {profile.name}
          </span>
        </Link>
        <nav aria-label="Primary" className="hidden justify-self-center lg:block">
          <ul className="flex items-center gap-7">
            {navItems.map((item) => {
              const current = isCurrent(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={current ? "page" : undefined}
                    className={`relative py-1 text-sm transition-colors duration-200 ${
                      current ? "text-text" : "text-secondary hover:text-text"
                    }`}
                  >
                    {item.label}
                    {current ? (
                      <span className="absolute right-0 -bottom-1.5 left-0 h-px bg-text" />
                    ) : null}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="flex items-center justify-self-end gap-1">
          <ThemeToggle />
          <Link
            href="/#contact"
            className="ml-1 hidden h-9 items-center rounded-full border border-border bg-surface px-4 text-sm text-text transition-colors duration-200 hover:bg-surface-secondary sm:inline-flex"
          >
            Contact
          </Link>
          <MobileNavigation />
        </div>
      </div>
    </header>
  );
}
