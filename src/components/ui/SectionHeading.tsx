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
          <p className="eyebrow">{eyebrow}</p>
        ) : null}
        <Title
          className={`font-semibold tracking-[-0.045em] text-balance text-text ${
            as === "h1"
              ? "page-title"
              : "text-[clamp(1.85rem,2.4vw,2.25rem)] leading-tight"
          } ${eyebrow ? "mt-3" : ""}`}
        >
          {title}
        </Title>
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
