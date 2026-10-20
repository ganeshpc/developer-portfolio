import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "text";
  external?: boolean;
  icon?: "download" | "arrow" | "external" | "none";
  className?: string;
  "aria-label"?: string;
};

const variants = {
  primary:
    "bg-button text-button-text hover:opacity-90 border border-transparent",
  secondary:
    "border border-border bg-surface text-text hover:bg-surface-secondary",
  text: "h-auto rounded-none border-0 bg-transparent px-0 text-accent hover:opacity-80",
};

export function Button({
  href,
  children,
  variant = "primary",
  external = false,
  icon = "none",
  className = "",
  "aria-label": ariaLabel,
}: ButtonProps) {
  const classes = [
    "inline-flex items-center justify-center gap-2 rounded-full px-5 text-sm font-medium",
    "transition-colors duration-200",
    variant === "text" ? "min-h-11" : "h-11",
    variants[variant],
    className,
  ].join(" ");

  const content = (
    <>
      {icon === "download" ? <DownloadIcon /> : null}
      {children}
      {icon === "arrow" ? (
        <ArrowRight className="h-4 w-4" strokeWidth={1.5} aria-hidden />
      ) : null}
      {icon === "external" ? (
        <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} aria-hidden />
      ) : null}
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} aria-label={ariaLabel}>
      {content}
    </Link>
  );
}

function DownloadIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden
    >
      <path d="M8 2.5v7" strokeLinecap="round" />
      <path d="M5.5 7.5 8 10l2.5-2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3.5 13.5h9" strokeLinecap="round" />
    </svg>
  );
}
