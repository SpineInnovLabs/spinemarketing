const defaultStats = [
  { value: 65, suffix: "+", label: "Connector configurations" },
  { value: 151, suffix: "", label: "Workbench views" },
  { value: 13, suffix: "", label: "Business domains" },
  { value: 100, suffix: "%", label: "Human approval required" },
];

export function StatsBar({
  stats = defaultStats,
}: {
  stats?: { value: number; suffix?: string; prefix?: string; label: string }[];
}) {
  return (
    <section className="relative border-y border-[#E5E5E5] bg-white">
      <div className="mx-auto max-w-[1100px] px-6">
        <div className="grid grid-cols-2 gap-px overflow-hidden sm:grid-cols-4">
          {stats.map(({ value, suffix, prefix, label }, i) => (
            <div
              key={label}
              className={`flex flex-col items-center justify-center gap-1.5 px-4 py-12 ${
                i < stats.length - 1 ? "border-r border-[#E5E5E5]" : ""
              }`}
            >
              <span className="text-[length:min(36px,var(--marketing-heading-size))] font-bold tracking-[-0.04em] text-[#032D60]">
                {prefix || ""}{value}{suffix || ""}
              </span>
              <span className="text-center text-[11px] font-semibold uppercase tracking-[0.1em] text-[#706E6B]">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
