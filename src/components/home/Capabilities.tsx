import { Cloud, Layers, Server, Workflow } from "lucide-react";
import { capabilities } from "@/data/profile";

const icons = {
  server: Server,
  layers: Layers,
  cloud: Cloud,
  workflow: Workflow,
} as const;

export function Capabilities() {
  return (
    <section aria-label="Engineering capabilities">
      <ul className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {capabilities.map((item) => {
          const Icon = icons[item.icon];
          return (
            <li key={item.title} className="flex gap-3">
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-subtle text-accent">
                <Icon className="h-[18px] w-[18px]" strokeWidth={1.75} aria-hidden />
              </span>
              <div>
                <h2 className="text-sm font-medium text-text">{item.title}</h2>
                <p className="mt-1 text-[13px] leading-5 text-secondary">
                  {item.description}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
