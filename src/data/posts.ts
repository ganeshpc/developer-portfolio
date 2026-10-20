import type { Post } from "@/types/content";

/**
 * Add an entry here when an essay is ready to publish.
 * The blog renders nothing until this list has real posts.
 */
export const posts: Post[] = [];

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}
