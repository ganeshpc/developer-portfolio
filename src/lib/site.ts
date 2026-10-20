export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export function absoluteUrl(path: string) {
  if (!siteUrl) return path;
  return new URL(path, siteUrl).toString();
}
