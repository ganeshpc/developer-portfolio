import type { Role } from "@/types/content";

export function ExperienceList({
  roles,
  detailed = false,
}: {
  roles: Role[];
  detailed?: boolean;
}) {
  return (
    <ol className="relative space-y-7">
      <span
        className="absolute top-2 bottom-2 left-[7px] w-px bg-border"
        aria-hidden
      />
      {roles.map((role) => (
        <li key={`${role.company}-${role.start}`} className="relative pl-8">
          <span
            className="absolute top-1.5 left-0 h-3.5 w-3.5 rounded-full border-2 border-accent bg-surface"
            aria-hidden
          />
          <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h3 className="text-sm font-medium text-text">{role.company}</h3>
              <p className="text-[13px] text-secondary">{role.title}</p>
            </div>
            <p className="text-[13px] text-secondary sm:text-right">
              {role.start} – {role.end}
              {role.location ? (
                <>
                  <span aria-hidden> · </span>
                  {role.location}
                </>
              ) : null}
            </p>
          </div>
          {detailed ? (
            <>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-secondary">
                {role.summary}
              </p>
              <ul className="mt-3 max-w-2xl list-disc space-y-1.5 pl-5">
                {role.contributions.map((item) => (
                  <li key={item} className="text-sm leading-6 text-secondary">
                    {item}
                  </li>
                ))}
              </ul>
            </>
          ) : null}
        </li>
      ))}
    </ol>
  );
}
