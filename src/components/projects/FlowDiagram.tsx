import type { FlowNode } from "@/types/content";

export function FlowDiagram({
  nodes,
  compact = false,
}: {
  nodes: FlowNode[];
  compact?: boolean;
}) {
  const visible = compact ? nodes.slice(0, 3) : nodes;

  if (compact) {
    return (
      <ol className="flex h-full flex-col justify-center gap-3 px-6 py-6">
        {visible.map((node, index) => (
          <li key={node.title} className="flex items-baseline gap-3">
            <span className="w-6 shrink-0 font-mono text-[11px] text-secondary">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="text-lg font-medium tracking-[-0.02em] text-text">
              {node.title}
            </span>
          </li>
        ))}
      </ol>
    );
  }

  return (
    <ol className="grid gap-3 sm:grid-cols-2">
      {visible.map((node, index) => (
        <li
          key={node.title}
          className="rounded-2xl border border-border bg-surface px-4 py-4"
        >
          <p className="font-mono text-xs text-secondary">
            {String(index + 1).padStart(2, "0")}
          </p>
          <h3 className="mt-2 text-base font-medium text-text">{node.title}</h3>
          <p className="mt-1 text-sm leading-6 text-secondary">{node.detail}</p>
        </li>
      ))}
    </ol>
  );
}
