"use client";

import { useId, useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, LayoutDashboard, ShieldCheck, Layers3 } from "lucide-react";
import { SHARED_WORKBENCH_SHELL, WORKBENCH_SOURCE_DOMAINS } from "@/lib/workbench-source-views";

const DEFAULT_DOMAIN = "founderops";

export const SOLUTION_TO_WORKBENCH: Record<string, string> = {
  "customer-success": "account-success",
  "account-success": "account-success",
  "technical-account-success": "technical-account-success",
  "founders": "founderops",
  "founder-ops": "founderops",
  "sales": "sales",
  "marketing": "marketing",
  "content": "content",
  "finance": "finance",
  "finance-leaders": "finance",
  "revops": "revops",
  "operations": "operations",
  "business-ops": "operations",
  "services": "service",
  "support": "support",
  "product-engineering": "productengineering",
  "individual": "personal",
  "human-resources": "humanresources",
  "legal": "legal",
};

export function WorkbenchViewExplorer({
  initialDomain = DEFAULT_DOMAIN,
  compact = false,
}: {
  initialDomain?: string;
  compact?: boolean;
}) {
  const id = useId();
  const [selected, setSelected] = useState(
    WORKBENCH_SOURCE_DOMAINS.some((domain) => domain.id === initialDomain)
      ? initialDomain
      : DEFAULT_DOMAIN
  );
  const [showAll, setShowAll] = useState(false);
  const domain = useMemo(
    () => WORKBENCH_SOURCE_DOMAINS.find((item) => item.id === selected) ?? WORKBENCH_SOURCE_DOMAINS[0],
    [selected]
  );
  const sorted = useMemo(() => {
    const featured = new Set(domain.featured);
    return [
      ...domain.views.filter((view) => featured.has(view.id)),
      ...domain.views.filter((view) => !featured.has(view.id)),
    ];
  }, [domain]);
  const visible = compact && !showAll ? sorted.slice(0, 6) : sorted;

  return (
    <section id="workbench-views" aria-labelledby={id + "-title"} className="scroll-mt-24 border-y border-[#D6E8F8] bg-[#F0F8FF] px-5 py-16 text-[#082B5E] sm:px-8 lg:py-20">
      <div className="mx-auto max-w-[1220px]">
        <p className="text-xs font-semibold uppercase tracking-[.18em] text-[#2461AE]">
          Inside Spine Workspace · Source-defined views
        </p>
        <div className="mt-4 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <h2 id={id + "-title"} className="text-[length:min(clamp(2rem,4vw,3.2rem),var(--marketing-heading-size))] font-semibold leading-[1.13] tracking-[-.04em]">
              One familiar Workbench. Different work for every role.
            </h2>
            <p className="mt-5 text-[16px] leading-7 text-[#4E607A]">
              Browse the actual domain and L1 view definitions from the Workbench codebase.
              Your common navigation stays familiar; the Work area adapts to your domain,
              responsibility, connected systems and permissions.
            </p>
          </div>
          <div className="w-full max-w-sm">
            <label htmlFor={id + "-select"} className="mb-2 block text-sm font-semibold text-[#082B5E]">
              Choose a Workbench domain
            </label>
            <select
              id={id + "-select"}
              value={selected}
              onChange={(event) => { setSelected(event.target.value); setShowAll(false); }}
              className="min-h-12 w-full rounded-xl border border-[#A7C7E9] bg-white px-4 text-sm font-semibold text-[#082B5E] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#006FE8]"
            >
              {WORKBENCH_SOURCE_DOMAINS.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.title}{item.audience === "internal" ? " (internal)" : ""}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-10 grid overflow-hidden rounded-2xl border border-[#CBE1F5] bg-white shadow-[0_18px_65px_rgba(25,80,140,.07)] lg:grid-cols-[275px_minmax(0,1fr)]">
          <aside aria-label="Common Workbench navigation structure" className="border-b border-[#D6E8F8] bg-[#F8FBFF] p-5 lg:border-b-0 lg:border-r">
            <div className="flex items-center gap-2 border-b border-[#D6E8F8] pb-4 text-sm font-semibold">
              <LayoutDashboard className="h-5 w-5 text-[#006FE8]" aria-hidden="true" />
              Spine Workspace
            </div>
            <p className="mt-5 text-[11px] font-semibold uppercase tracking-[.14em] text-[#577592]">Shared navigation</p>
            <nav className="mt-3 space-y-3" aria-label="Workbench navigation groups (reference)">
              {SHARED_WORKBENCH_SHELL.map((group) => (
                <div key={group.title}>
                  <p className={`rounded-lg px-3 py-2 text-sm font-semibold ${group.title === "Work" ? "bg-[#E1F0FF] text-[#0055B8]" : "text-[#123A68]"}`}>
                    {group.title}
                  </p>
                  {group.items.length > 0 && (
                    <p className="px-3 py-1 text-xs leading-5 text-[#5B728E]">
                      {group.title === "Work" ? domain.title + " views" : group.items.join(" · ")}
                    </p>
                  )}
                </div>
              ))}
            </nav>
          </aside>

          <div className="min-w-0 p-5 sm:p-8">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[.15em] text-[#2461AE]">Work / {domain.title}</p>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight text-[#082B5E]">{domain.title} Workbench</h3>
                <p className="mt-3 text-sm leading-7 text-[#4E607A]">{domain.benefit}</p>
              </div>
              <span className="rounded-full border border-[#CCE3F5] bg-[#F0F8FF] px-3 py-1.5 text-xs font-semibold text-[#285687]">
                {domain.views.length} defined views
              </span>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-3" aria-label={domain.title + " view definitions"}>
              {visible.map((view) => (
                <div key={view.id} className="rounded-xl border border-[#D7E7F6] bg-[#FBFDFF] p-4">
                  <div className="flex items-start gap-3">
                    <Layers3 className="mt-0.5 h-4 w-4 shrink-0 text-[#006FE8]" aria-hidden="true" />
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-[#10355E]">{view.label}</p>
                      <p className="mt-1 text-xs capitalize text-[#6A7E96]">
                        {view.kind === "runtime" ? "L1 runtime binding" : view.kind + " view"}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {compact && sorted.length > 6 && (
              <button type="button" onClick={() => setShowAll((value) => !value)} className="mt-5 rounded-lg px-1 py-2 text-sm font-semibold text-[#006FE8] hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#006FE8]">
                {showAll ? "Show fewer views" : `Show all ${sorted.length} defined views`}
              </button>
            )}

            <div className="mt-8 flex flex-col gap-4 border-t border-[#D6E8F8] pt-6 sm:flex-row sm:items-start sm:justify-between">
              <p className="max-w-2xl text-xs leading-6 text-[#596F89]">
                <ShieldCheck className="mr-1 inline h-4 w-4 align-[-3px]" aria-hidden="true" />
                This is a view inventory extracted from product source, not a fabricated application screenshot or a claim of live availability. Views may require permissions, connections or further implementation.
              </p>
              <Link href="/product" className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-[#0055B8] hover:underline">
                Explore the product <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
