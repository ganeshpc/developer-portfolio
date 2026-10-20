import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "@/data/posts";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Notes",
  description: "Technical notes by Ganesh Chincholkar. Nothing is published yet.",
  ...(siteUrl ? { alternates: { canonical: "/blog" } } : {}),
};

export default function BlogPage() {
  return (
    <section className="section">
      <div className="page-wrap">
        <p className="text-xs font-medium tracking-[0.14em] text-secondary uppercase">
          Notes
        </p>
        <h1 className="mt-3 font-serif text-[clamp(2.4rem,4.5vw,3.75rem)] leading-[1.05] font-medium tracking-[-0.03em] text-text">
          Writing, when it is ready.
        </h1>
        {posts.length === 0 ? (
          <div className="mt-8 max-w-xl">
            <p className="text-base leading-7 text-secondary sm:text-lg">
              Essays will be published here. There are none yet, and this page
              will not pretend otherwise.
            </p>
            <p className="mt-4 text-sm leading-6 text-secondary">
              A post is an entry in{" "}
              <span className="font-mono text-xs">src/data/posts.ts</span>. Add
              one when the writing exists.
            </p>
            <Link
              href="/projects"
              className="mt-6 inline-flex h-11 items-center text-sm font-medium text-accent"
            >
              Read the projects instead
            </Link>
          </div>
        ) : (
          <div className="mt-12 space-y-16">
            {posts.map((post) => (
              <article key={post.slug} id={post.slug} className="scroll-mt-24">
                <p className="text-sm text-secondary">
                  <time dateTime={post.publishedAt}>{post.publishedAt}</time>
                  <span aria-hidden> · </span>
                  {post.readingMinutes} min read
                </p>
                <h2 className="mt-2 text-2xl font-medium tracking-[-0.02em] text-text">
                  {post.title}
                </h2>
                <p className="mt-3 max-w-2xl text-base leading-7 text-secondary">
                  {post.description}
                </p>
                <div className="mt-6 max-w-[68ch] space-y-4">
                  {post.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="text-base leading-7 text-secondary">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
