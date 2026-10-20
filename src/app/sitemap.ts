import type { MetadataRoute } from "next";
import { posts } from "@/data/posts";
import { projects } from "@/data/projects";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const origin = siteUrl ?? "https://ganeshpc.github.io";
  const paths = [
    "",
    "/about",
    "/projects",
    "/experience",
    "/blog",
    ...projects.map((project) => `/projects/${project.slug}`),
    ...posts.map((post) => `/blog/${post.slug}`),
  ];

  return paths.map((path) => ({
    url: `${origin}${path}`,
  }));
}
