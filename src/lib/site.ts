export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export function absoluteUrl(path: string) {
  if (!siteUrl) return path;
  return new URL(path, siteUrl).toString();
}

/** Prefix a public-folder path when the Pages build sets a base path. */
export function publicPath(path: string) {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  if (!path.startsWith("/") || path.startsWith("//")) return path;
  if (base && (path === base || path.startsWith(`${base}/`))) return path;
  return `${base}${path}`;
}
