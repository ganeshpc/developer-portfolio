export function SectionHeading({
  eyebrow,
  title,
  action,
  as = "h2",
}: {
  eyebrow?: string;
  title: string;
  action?: React.ReactNode;
  as?: "h1" | "h2";
}) {
  const Title = as;

  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div className="max-w-3xl">
        {eyebrow ? (
          <p className="text-xs font-medium tracking-[0.14em] text-secondary uppercase">
            {eyebrow}
          </p>
        ) : null}
        <Title
          className={`font-serif font-medium tracking-[-0.03em] text-balance text-text ${
            as === "h1"
              ? "text-[clamp(2.4rem,4.5vw,3.75rem)] leading-[1.08]"
              : "text-[clamp(2rem,3.5vw,3rem)] leading-[1.12]"
          } ${eyebrow ? "mt-3" : ""}`}
        >
          {title}
        </Title>
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
