export function TechnologyList({
  items,
  onMuted = false,
}: {
  items: string[];
  onMuted?: boolean;
}) {
  return (
    <ul className="flex flex-wrap gap-1.5">
      {items.map((item) => (
        <li
          key={item}
          className={`rounded-full px-2.5 py-1 text-[11px] text-secondary ${
            onMuted ? "bg-surface" : "border border-border bg-surface-secondary"
          }`}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
