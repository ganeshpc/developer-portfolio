import Image from "next/image";
import Link from "next/link";
import { profile } from "@/data/profile";
import { publicPath } from "@/lib/site";

export function AboutPreview() {
  return (
    <section className="rounded-[28px] border border-border bg-surface p-6 sm:p-7">
      <div className="grid gap-5 sm:grid-cols-[1fr_148px] sm:items-start">
        <div>
          <p className="text-[11px] font-medium tracking-[0.16em] text-secondary uppercase">
            About
          </p>
          <h2 className="mt-3 font-serif text-[1.7rem] leading-tight font-medium tracking-[-0.03em] text-text">
            A bit more about me.
          </h2>
          <p className="mt-3 text-sm leading-6 text-secondary">
            I&apos;m a software engineer based in {profile.location}. I build
            backend services and the products in front of them. The public
            projects are where the design can be read directly.
          </p>
          <Link
            href="/about"
            className="mt-5 inline-flex h-10 items-center rounded-full border border-border px-4 text-sm text-text transition-colors duration-200 hover:bg-surface-secondary"
          >
            Read more
          </Link>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl sm:aspect-[3/4]">
          <Image
            src={publicPath("/images/portrait.jpg")}
            alt="Portrait of Ganesh Chincholkar."
            fill
            sizes="180px"
            className="object-cover object-[center_20%]"
          />
        </div>
      </div>
    </section>
  );
}
