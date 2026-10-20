"use client";

import { useState } from "react";
import { ProjectCard } from "@/components/projects/ProjectCard";
import {
  filterProjects,
  projectFilters,
  type ProjectFilter,
} from "@/data/projects";

export function ProjectGrid() {
  const [filter, setFilter] = useState<ProjectFilter>("all");
  const visible = filterProjects(filter);

  return (
    <div>
      <div
        role="radiogroup"
        aria-label="Filter projects"
        className="flex flex-wrap gap-2"
      >
        {projectFilters.map((item) => {
          const selected = filter === item.id;
          return (
            <button
              key={item.id}
              type="button"
              role="radio"
              aria-checked={selected}
              className={`h-11 rounded-full px-4 text-sm transition-colors duration-200 ${
                selected
                  ? "bg-accent-subtle text-accent"
                  : "text-secondary hover:bg-surface-secondary hover:text-text"
              }`}
              onClick={() => setFilter(item.id)}
            >
              {item.label}
            </button>
          );
        })}
      </div>
      {visible.length === 0 ? (
        <p className="mt-10 text-secondary">No projects in this group.</p>
      ) : (
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((project) => (
            <li key={project.slug}>
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
