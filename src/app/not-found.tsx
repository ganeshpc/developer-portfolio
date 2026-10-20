import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="page-wrap">
        <p className="eyebrow">404</p>
        <h1 className="page-title mt-3 text-text">This page is not here.</h1>
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
