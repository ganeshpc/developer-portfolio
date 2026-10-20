import type { FlowNode } from "@/types/content";

export function FlowDiagram({
  nodes,
  tone = "light",
}: {
  nodes: FlowNode[];
  tone?: "light" | "onDark";
}) {
  if (tone === "onDark") {
    return (
      <ol className="flex flex-col gap-3 lg:flex-row lg:items-stretch">
        {nodes.map((node, index) => (
          <li key={node.title} className="flex min-w-0 flex-1 flex-col gap-3 lg:flex-row lg:items-stretch">
            <div className="flex-1 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4">
              <h3 className="text-sm font-medium text-white">{node.title}</h3>
              <p className="mt-1.5 text-xs leading-5 text-white/65">{node.detail}</p>
            </div>
            {index < nodes.length - 1 ? (
              <span
                className="self-center text-sm text-white/40"
                aria-hidden
              >
                →
              </span>
            ) : null}
          </li>
        ))}
      </ol>
    );
  }

  return (
    <ol className="grid gap-3 sm:grid-cols-2">
      {nodes.map((node, index) => (
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
