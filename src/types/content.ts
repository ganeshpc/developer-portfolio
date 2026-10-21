export type ProjectCategory = "backend" | "full-stack" | "systems";

export type ProjectLink = {
  label: string;
  href: string;
};

export type FlowNode = {
  title: string;
  detail: string;
};

export type Decision = {
  title: string;
  body: string;
};

export type ProjectSection = {
  heading: string;
  paragraphs: string[];
  decisions?: Decision[];
};

export type Project = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  period: string;
  role: string;
  categories: ProjectCategory[];
  featured: boolean;
  technologies: string[];
  links: ProjectLink[];
  flow: FlowNode[];
  diagramCaption: string;
  sections: ProjectSection[];
};

export type Role = {
  company: string;
  title: string;
  start: string;
  /** Omitted when the résumé prints a start and no end month. */
  end?: string;
  location?: string;
  logo: string;
  summary: string;
  contributions: string[];
};

export type Post = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  readingMinutes: number;
  paragraphs: string[];
};
