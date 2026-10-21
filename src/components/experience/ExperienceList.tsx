import { publicPath } from "@/lib/site";
import type { Role } from "@/types/content";

function period(role: Role) {
  return role.end ? `${role.start} – ${role.end}` : role.start;
}

export function ExperienceList({
  roles,
  detailed = false,
}: {
  roles: Role[];
  detailed?: boolean;
}) {
  return (
    <ol>
      {roles.map((role, index) => (
        <li
          key={`${role.company}-${role.start}`}
          className="relative flex gap-4 pb-12 last:pb-0"
        >
          {index < roles.length - 1 ? (
            <span
              className="absolute top-5 bottom-0 left-[4px] w-px bg-border"
              aria-hidden
            />
          ) : null}
          <div className="relative w-16 shrink-0">
            <span className="absolute top-3.5 left-0 h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-surface" />
            <span className="ml-6 flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white p-1.5">
              <img
                src={publicPath(role.logo)}
                alt=""
                width={28}
                height={28}
                className="max-h-full max-w-full object-contain"
              />
            </span>
          </div>
          <div className="min-w-0 flex-1 pt-1">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
              <div className="min-w-0">
                <h3 className="text-sm font-semibold tracking-[-0.01em] text-text">
                  {role.company}
                </h3>
                <p className="text-[13px] leading-5 text-secondary">{role.title}</p>
              </div>
              <p className="text-[13px] leading-5 text-secondary sm:shrink-0 sm:text-right">
                {period(role)}
                {role.location ? (
                  <>
                    <br />
                    {role.location}
                  </>
                ) : null}
              </p>
            </div>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-secondary">{role.summary}</p>
            {detailed ? (
              <ul className="mt-4 max-w-2xl list-disc space-y-2 border-t border-border pt-4 pl-5">
                {role.contributions.map((item) => (
                  <li key={item} className="text-sm leading-6 text-secondary">
                    {item}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </li>
      ))}
    </ol>
  );
}
