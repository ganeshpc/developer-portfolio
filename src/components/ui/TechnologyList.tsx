export function TechnologyList({
  items,
  tone = "light",
}: {
  items: string[];
  tone?: "light" | "onDark";
}) {
  return (
    <ul className="flex flex-wrap gap-1.5">
      {items.map((item) => (
        <li
          key={item}
          className={`rounded-full px-2.5 py-1 text-[11px] whitespace-nowrap ${
            tone === "onDark"
              ? "bg-white/10 text-white/85"
              : "bg-surface-secondary text-secondary"
          }`}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
