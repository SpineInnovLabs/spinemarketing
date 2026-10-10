export type HeroBannerItem = {
  label: string;
  title: string;
  detail?: string;
};

export function SolutionHeroBanner({
  kicker,
  variant,
  items,
}: {
  kicker: string;
  variant: "timeline" | "dashboard" | "steps" | "signals";
  items: HeroBannerItem[];
}) {
  const shown = items.filter((item) => item.title).slice(0, 4);

  return (
    <div className="overflow-hidden rounded-[18px] border border-[#D5E3F2] bg-white text-left shadow-[0_18px_40px_rgba(8,43,94,0.08)]">
      <div className="flex items-center justify-between gap-3 border-b border-[#E5EEF7] bg-[#F4F8FD] px-4 py-3">
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#1E4E8C]">{kicker}</p>
        <p className="text-[11px] font-medium text-[#6A819C]">Illustrative</p>
      </div>
      {variant === "dashboard" ? (
        <div className="grid gap-px bg-[#E5EEF7] sm:grid-cols-2">
          {shown.map((item) => (
            <div key={`${item.label}-${item.title}`} className="bg-white px-4 py-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#5C7A9A]">{item.label}</p>
              <p className="mt-1.5 text-[15px] font-semibold leading-snug text-[#0E2F5C]">{item.title}</p>
              {item.detail ? <p className="mt-1.5 line-clamp-3 text-[13px] leading-relaxed text-[#4E607A]">{item.detail}</p> : null}
            </div>
          ))}
        </div>
      ) : variant === "timeline" ? (
        <ol className="px-4 py-2">
          {shown.map((item) => (
            <li key={`${item.label}-${item.title}`} className="grid grid-cols-[3.4rem_1fr] gap-3 border-l border-[#C9DBF0] py-2.5 pl-4">
              <p className="text-[12px] font-semibold text-[#1E4E8C]">{item.label}</p>
              <div>
                <p className="text-[14px] font-semibold leading-snug text-[#0E2F5C]">{item.title}</p>
                {item.detail ? <p className="mt-1 line-clamp-2 text-[13px] leading-relaxed text-[#4E607A]">{item.detail}</p> : null}
              </div>
            </li>
          ))}
        </ol>
      ) : (
        <ol className="divide-y divide-[#E8F0F8]">
          {shown.map((item, index) => (
            <li key={`${item.label}-${item.title}`} className="flex gap-3 px-4 py-3.5">
              <span className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[11px] font-semibold ${
                variant === "signals" ? "bg-[#E5F6EC] text-[#0E6A42]" : "bg-[#E7F0FB] text-[#1E4E8C]"
              }`}>
                {variant === "signals" ? index + 1 : index + 1}
              </span>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#5C7A9A]">{item.label}</p>
                <p className="mt-1 text-[14px] font-semibold leading-snug text-[#0E2F5C]">{item.title}</p>
                {item.detail ? <p className="mt-1 line-clamp-2 text-[13px] leading-relaxed text-[#4E607A]">{item.detail}</p> : null}
              </div>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}
