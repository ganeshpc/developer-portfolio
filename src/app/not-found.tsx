import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="page-wrap">
        <p className="text-xs font-medium tracking-[0.14em] text-secondary uppercase">
          404
        </p>
        <h1 className="mt-3 font-serif text-[clamp(2.4rem,4.5vw,3.75rem)] leading-[1.05] font-medium tracking-[-0.03em] text-text">
          This page is not here.
        </h1>
        <p className="mt-5 max-w-md text-base leading-7 text-secondary">
          The link may be old, or the address may be mistyped.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex h-11 items-center rounded-full bg-button px-5 text-sm font-medium text-button-text"
        >
          Back home
        </Link>
      </div>
    </section>
  );
}
