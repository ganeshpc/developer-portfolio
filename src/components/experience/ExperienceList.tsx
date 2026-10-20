import { publicPath } from "@/lib/site";
import type { Role } from "@/types/content";

export function ExperienceList({
  roles,
  detailed = false,
}: {
  roles: Role[];
  detailed?: boolean;
}) {
  return (
    <ol className="relative space-y-8">
      <span
        className="absolute top-5 bottom-5 left-5 w-px bg-border"
        aria-hidden
      />
      {roles.map((role) => (
        <li key={`${role.company}-${role.start}`} className="relative pl-14">
          <span className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-white p-1.5">
            <img
              src={publicPath(role.logo)}
              alt=""
              width={32}
              height={32}
              className="max-h-full max-w-full object-contain"
            />
          </span>
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
          <p className="mt-2 max-w-2xl text-sm leading-6 text-secondary">
            {role.summary}
          </p>
          {detailed ? (
            <>
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
