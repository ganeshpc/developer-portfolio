function Frame({ children }: { children: React.ReactNode }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-[#F7F8FB] p-4">
      {children}
    </div>
  );
}

function Node({
  label,
  tone,
}: {
  label: string;
  tone: "blue" | "green" | "amber" | "slate";
}) {
  const tones = {
    blue: "bg-[#E8F1FF] text-[#1D4ED8]",
    green: "bg-[#E7F6EE] text-[#047857]",
    amber: "bg-[#FFF4E5] text-[#C2410C]",
    slate: "bg-white text-[#334155]",
  };

  return (
    <span
      className={`rounded-lg px-2.5 py-1.5 text-[11px] font-medium shadow-[0_1px_0_rgba(15,23,42,0.04)] ${tones[tone]}`}
    >
      {label}
    </span>
  );
}

export function ProjectArt({ slug }: { slug: string }) {
  if (slug === "price-tracker") {
    return (
      <Frame>
        <svg viewBox="0 0 280 140" className="h-full w-full" aria-hidden>
          <rect x="8" y="8" width="264" height="124" rx="12" fill="white" />
          <path
            d="M28 100 C 60 100, 70 70, 100 72 S 140 40, 168 48 210 86 250 36"
            fill="none"
            stroke="#60A5FA"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M28 108 C 70 108, 90 90, 120 92 S 170 70, 250 64"
            fill="none"
            stroke="#34D399"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </Frame>
    );
  }

  if (slug === "planning-with-poker") {
    return (
      <Frame>
        <div className="grid w-full max-w-[240px] grid-cols-3 gap-2">
          {["5", "8", "?"].map((card) => (
            <div
              key={card}
              className="flex aspect-[3/4] items-center justify-center rounded-xl border border-[#E2E8F0] bg-white text-lg font-medium text-[#1E3A5F]"
            >
              {card}
            </div>
          ))}
        </div>
      </Frame>
    );
  }

  if (slug === "key-value-store") {
    return (
      <Frame>
        <div className="flex items-center gap-2">
          <Node label="CLI" tone="slate" />
          <span className="text-[#94A3B8]" aria-hidden>
            →
          </span>
          <Node label="Memory" tone="blue" />
          <span className="text-[#94A3B8]" aria-hidden>
            →
          </span>
          <Node label="SQLite" tone="green" />
        </div>
      </Frame>
    );
  }

  if (slug === "deployer") {
    return (
      <Frame>
        <div className="grid w-full max-w-[280px] grid-cols-2 gap-2">
          <Node label="Web app" tone="slate" />
          <Node label="API" tone="blue" />
          <Node label="Kafka" tone="amber" />
          <Node label="Build" tone="green" />
        </div>
      </Frame>
    );
  }

  return (
    <Frame>
      <svg viewBox="0 0 300 150" className="h-full w-full" aria-hidden>
        <rect x="18" y="48" width="72" height="36" rx="8" fill="#E8F1FF" />
        <rect x="114" y="18" width="72" height="36" rx="8" fill="#E7F6EE" />
        <rect x="114" y="78" width="72" height="36" rx="8" fill="#FFF4E5" />
        <rect x="210" y="48" width="72" height="36" rx="8" fill="#EEF2FF" />
        <path
          d="M90 66 H114 M186 36 H198 V66 H210 M186 96 H198 V66"
          stroke="#94A3B8"
          strokeWidth="1.5"
          fill="none"
        />
        <text x="54" y="70" textAnchor="middle" fontSize="11" fill="#1D4ED8" fontFamily="ui-sans-serif, system-ui">
          Engine
        </text>
        <text x="150" y="40" textAnchor="middle" fontSize="11" fill="#047857" fontFamily="ui-sans-serif, system-ui">
          Postgres
        </text>
        <text x="150" y="100" textAnchor="middle" fontSize="11" fill="#C2410C" fontFamily="ui-sans-serif, system-ui">
          Kafka
        </text>
        <text x="246" y="70" textAnchor="middle" fontSize="11" fill="#3730A3" fontFamily="ui-sans-serif, system-ui">
          Worker
        </text>
      </svg>
    </Frame>
  );
}
