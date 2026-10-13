"use client";

import { useId, useMemo, useState, useEffect } from "react";
import Link from "next/link";
import { ResponsiveWorkbenchScreenshot } from "@/components/marketing/responsive-workbench-screenshot";
import {
  ArrowRight,
  LayoutDashboard,
  ShieldCheck,
  Layers3,
  Monitor,
  Smartphone,
  Eye,
  CheckCircle2,
  AlertCircle,
  Maximize2,
  X,
} from "lucide-react";
import { SHARED_WORKBENCH_SHELL, WORKBENCH_SOURCE_DOMAINS } from "@/lib/workbench-source-views";
import {
  getDomainScreenshotNarrative,
  type WorkbenchScreenshotItem,
} from "@/lib/workbench-screenshots";

const DEFAULT_DOMAIN = "founderops";

// Only expose public, customer-facing operational domains with verified visual runtime captures
const PUBLIC_WORKBENCH_DOMAINS = WORKBENCH_SOURCE_DOMAINS.filter(
  (item) => item.audience !== "internal" && item.id !== "brandstore" && item.id !== "ops"
);

const DOMAIN_TO_SOLUTION_PATH: Record<string, string> = {
  founderops: "/solutions/founders",
  founder: "/solutions/founders",
  sales: "/solutions/sales",
  marketing: "/solutions/marketing",
  content: "/solutions/content",
  finance: "/solutions/finance",
  "account-success": "/solutions/customer-success",
  "technical-account-success": "/solutions/customer-success",
  operations: "/solutions/operations",
  bizops: "/solutions/operations",
  revops: "/solutions/revops",
  productengineering: "/solutions/product-engineering",
  product: "/solutions/product-engineering",
  service: "/solutions/services",
  support: "/solutions/customer-support",
  humanresources: "/solutions/human-resources",
  legal: "/solutions/legal",
  "knowledge-management": "/solutions/memoryandknowledge",
  personal: "/solutions/individual",
  common: "/solutions/individual",
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
    PUBLIC_WORKBENCH_DOMAINS.some((domain) => domain.id === initialDomain)
      ? initialDomain
      : DEFAULT_DOMAIN
  );
  const [activeTab, setActiveTab] = useState<"screenshot" | "inventory">("screenshot");
  const [selectedViewKey, setSelectedViewKey] = useState<string>("primary");
  const [isMobileView, setIsMobileView] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (!isExpanded) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsExpanded(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isExpanded]);

  const domain = useMemo(
    () => PUBLIC_WORKBENCH_DOMAINS.find((item) => item.id === selected) ?? PUBLIC_WORKBENCH_DOMAINS[0],
    [selected]
  );

  const narrative = useMemo(
    () => getDomainScreenshotNarrative(selected),
    [selected]
  );

  const screenshotOptions = useMemo(() => {
    if (!narrative) return [];
    const options: { key: string; label: string; item: WorkbenchScreenshotItem }[] = [
      { key: "primary", label: narrative.screenshots.primary.title, item: narrative.screenshots.primary },
    ];
    if (narrative.screenshots.dashboard) {
      options.push({ key: "dashboard", label: narrative.screenshots.dashboard.title, item: narrative.screenshots.dashboard });
    }
    if (narrative.screenshots.secondary) {
      options.push({ key: "secondary", label: narrative.screenshots.secondary.title, item: narrative.screenshots.secondary });
    }
    if (narrative.screenshots.twinAction) {
      options.push({ key: "twinAction", label: narrative.screenshots.twinAction.title, item: narrative.screenshots.twinAction });
    }
    return options;
  }, [narrative]);

  const currentScreenshot = useMemo(() => {
    if (!narrative) return undefined;
    const match = screenshotOptions.find((opt) => opt.key === selectedViewKey);
    return match ? match.item : narrative.screenshots.primary;
  }, [screenshotOptions, selectedViewKey, narrative]);

  const hasMobile = Boolean(currentScreenshot?.mobile);

  const sortedViews = useMemo(() => {
    const featured = new Set(domain.featured);
    return [
      ...domain.views.filter((view) => featured.has(view.id)),
      ...domain.views.filter((view) => !featured.has(view.id)),
    ];
  }, [domain]);

  const visibleViews = compact && !showAll ? sortedViews.slice(0, 6) : sortedViews;

  return (
    <section
      id="workbench-views"
      aria-labelledby={`${id}-title`}
      className="scroll-mt-24 border-y border-[#D6E8F8] bg-[#F0F8FF] px-5 py-16 text-[#082B5E] sm:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-[1280px]">
        {/* Header Block */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#BBDDF8] bg-white px-3.5 py-1 text-xs font-semibold text-[#006FE8]">
            <span className="h-2 w-2 rounded-full bg-[#006FE8]" />
            Authentic Workbench Runtime · Deterministic Demonstration State
          </div>
          <span className="text-xs font-medium text-[#577592]">
            Captured from local Next.js 16 Workbench with deterministic QA state
          </span>
        </div>

        <div className="mt-5 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <h2
              id={`${id}-title`}
              className="text-[length:min(clamp(2rem,4vw,3.2rem),var(--marketing-heading-size))] font-semibold leading-[1.13] tracking-[-.04em]"
            >
              One familiar Workbench. Authentic views for every role.
            </h2>
            <p className="mt-4 text-[16px] leading-7 text-[#4E607A]">
              Explore the real Workbench application. Every screenshot below is captured
              directly from the authentic codebase—preserving the canonical left navigation shell,
              role-specific Work projections, demonstration telemetry cards, and context-aware Spine Twin controls.
            </p>
          </div>

          <div className="w-full max-w-sm">
            <label htmlFor={`${id}-select`} className="mb-2 block text-xs font-semibold uppercase tracking-wider text-[#082B5E]">
              Select a Workbench domain
            </label>
            <select
              id={`${id}-select`}
              value={selected}
              onChange={(event) => {
                setSelected(event.target.value);
                setSelectedViewKey("primary");
                setIsMobileView(false);
                setShowAll(false);
              }}
              className="min-h-12 w-full rounded-xl border border-[#A7C7E9] bg-white px-4 text-sm font-semibold text-[#082B5E] shadow-sm transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#006FE8]"
            >
              {PUBLIC_WORKBENCH_DOMAINS.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.title}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Quick Domain Selector Chips (Touch & Keyboard accessible) */}
        <div className="mt-5 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none" role="navigation" aria-label="Workbench Domain Quick Selection">
          {PUBLIC_WORKBENCH_DOMAINS.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => {
                setSelected(item.id);
                setSelectedViewKey("primary");
                setIsMobileView(false);
                setShowAll(false);
              }}
              className={`whitespace-nowrap rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-all ${
                selected === item.id
                  ? "bg-[#006FE8] text-white shadow-sm"
                  : "border border-[#CCE3F5] bg-white text-[#335377] hover:bg-[#EBF5FF] hover:text-[#082B5E]"
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>

        {/* View Switcher: Interactive Screenshots vs Extracted Inventory */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-b border-[#D6E8F8] pb-4">
          <div className="flex items-center gap-2" role="tablist" aria-label="Workbench Explorer Tabs">
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === "screenshot"}
              onClick={() => setActiveTab("screenshot")}
              className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-all ${
                activeTab === "screenshot"
                  ? "bg-[#006FE8] text-white shadow-sm"
                  : "bg-white text-[#3C577A] hover:bg-[#E2F0FD] hover:text-[#082B5E]"
              }`}
            >
              <Eye className="h-4 w-4" aria-hidden="true" />
              Authentic Workbench Screenshots
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === "inventory"}
              onClick={() => setActiveTab("inventory")}
              className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-all ${
                activeTab === "inventory"
                  ? "bg-[#006FE8] text-white shadow-sm"
                  : "bg-white text-[#3C577A] hover:bg-[#E2F0FD] hover:text-[#082B5E]"
              }`}
            >
              <Layers3 className="h-4 w-4" aria-hidden="true" />
              Declared View Catalog ({domain.views.length})
            </button>
          </div>

          {activeTab === "screenshot" && narrative && screenshotOptions.length > 0 && (
            <div className="flex flex-wrap items-center gap-2">
              {screenshotOptions.map((opt) => (
                <button
                  key={opt.key}
                  type="button"
                  onClick={() => {
                    setSelectedViewKey(opt.key);
                    setIsMobileView(false);
                  }}
                  className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
                    selectedViewKey === opt.key
                      ? "border border-[#006FE8] bg-[#EAF4FF] text-[#0055B8]"
                      : "border border-[#D1E5F8] bg-white text-[#4A6382] hover:bg-[#F3F9FF]"
                  }`}
                >
                  {opt.label}
                </button>
              ))}

              {hasMobile && (
                <div className="ml-2 flex items-center rounded-lg border border-[#D1E5F8] bg-white p-0.5">
                  <button
                    type="button"
                    aria-label="Desktop Viewport (1440x900)"
                    onClick={() => setIsMobileView(false)}
                    className={`rounded-md p-1.5 text-xs transition-colors ${
                      !isMobileView ? "bg-[#006FE8] text-white" : "text-[#587391] hover:text-[#082B5E]"
                    }`}
                  >
                    <Monitor className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    aria-label="Mobile Viewport (390x844)"
                    onClick={() => setIsMobileView(true)}
                    className={`rounded-md p-1.5 text-xs transition-colors ${
                      isMobileView ? "bg-[#006FE8] text-white" : "text-[#587391] hover:text-[#082B5E]"
                    }`}
                  >
                    <Smartphone className="h-4 w-4" />
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* TAB 1: AUTHENTIC SCREENSHOT & 4-PART VALUE NARRATIVE */}
        {activeTab === "screenshot" && (
          <div className="mt-8 space-y-10">
            {!narrative || !currentScreenshot ? (
              <div className="rounded-2xl border border-[#CCE3F5] bg-white p-8 text-center shadow-sm">
                <AlertCircle className="mx-auto h-8 w-8 text-[#577292]" />
                <h3 className="mt-3 text-lg font-semibold text-[#082B5E]">
                  Authentic Screenshot Not Published
                </h3>
                <p className="mx-auto mt-2 max-w-md text-sm text-[#4E607A]">
                  The projection <code>{domain.title}</code> is an internal or infrastructure-specific capability without an approved public marketing screenshot.
                </p>
                <button
                  type="button"
                  onClick={() => setActiveTab("inventory")}
                  className="mt-4 inline-flex items-center gap-2 rounded-xl bg-[#006FE8] px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#0055B8]"
                >
                  View Declared Component Catalog <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            ) : (
              <>
                {/* Section Header: Domain Tagline & Deep Dive CTA */}
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[.18em] text-[#006FE8]">
                      Value Architecture · {domain.title} Workbench
                    </p>
                    <h3 className="mt-1 text-xl sm:text-2xl font-semibold text-[#082B5E]">
                      {narrative.tagline}
                    </h3>
                  </div>
                  <Link
                    href={DOMAIN_TO_SOLUTION_PATH[domain.id] ?? "/solutions"}
                    className="inline-flex items-center gap-1.5 rounded-xl border border-[#CCE3F5] bg-white px-4 py-2 text-xs font-semibold text-[#006FE8] shadow-xs transition-colors hover:bg-[#EBF5FF]"
                  >
                    Explore {domain.title} Solution <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>

                {/* BENTO GRID: Workbench Showcase & 4-Part Architecture */}
                <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
                  {/* BENTO CELL 1: Hero Authentic Workbench Screenshot (Spans 2 cols on lg) */}
                  <div className="flex flex-col overflow-hidden rounded-2xl border border-[#CCE3F5] bg-white shadow-[0_18px_55px_rgba(15,70,130,.08)] lg:col-span-2">
                    {/* Window Header Bar */}
                    <div className="flex flex-wrap items-center justify-between border-b border-[#E2EEF8] bg-[#F7FAFD] px-4 py-2.5 text-xs sm:px-5 sm:py-3">
                      <div className="flex items-center gap-2">
                        <span className="h-3 w-3 rounded-full bg-[#FF5F56]" />
                        <span className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
                        <span className="h-3 w-3 rounded-full bg-[#27C93F]" />
                        <span className="ml-3 font-mono text-[11px] font-semibold text-[#5A7391]">
                          {currentScreenshot.route}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 sm:gap-3">
                        {currentScreenshot.badge && (
                          <span className="rounded-full border border-[#CCE3F5] bg-[#EBF5FF] px-2.5 py-0.5 font-semibold text-[#006FE8]">
                            {currentScreenshot.badge}
                          </span>
                        )}
                        <span className="hidden font-mono text-[11px] text-[#7189A6] sm:inline">
                          {isMobileView ? "390 × 844 px (Mobile)" : "1440 × 900 px (Desktop)"}
                        </span>
                        <button
                          type="button"
                          onClick={() => setIsExpanded(true)}
                          className="inline-flex items-center gap-1.5 rounded-lg border border-[#CCE3F5] bg-white px-2.5 py-1 text-[11px] font-semibold text-[#3A5678] shadow-2xs transition-colors hover:bg-[#EAF4FF] hover:text-[#006FE8]"
                          title="Expand screenshot in full size view"
                        >
                          <Maximize2 className="h-3.5 w-3.5 text-[#006FE8]" />
                          <span className="hidden sm:inline">Expand</span>
                        </button>
                      </div>
                    </div>

                    {/* Image Container */}
                    <div className="relative flex flex-1 items-center justify-center bg-white p-2 sm:p-4">
                      <ResponsiveWorkbenchScreenshot
                        src={isMobileView && currentScreenshot.mobile ? currentScreenshot.mobile : currentScreenshot.desktop}
                        alt={currentScreenshot.alt}
                        isMobile={isMobileView && Boolean(currentScreenshot.mobile)}
                        priority
                        onClick={() => setIsExpanded(true)}
                      />
                    </div>

                    {/* Image Footer with Real Route Provenance */}
                    <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[#E2EEF8] bg-white px-4 py-2.5 text-xs text-[#577292] sm:px-5">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-[#006FE8]" />
                        <span>
                          <strong>Authentic capture:</strong> {currentScreenshot.title} in{" "}
                          <code>{domain.title}</code> projection.
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="hidden text-[11px] text-[#839BB7] sm:inline">
                          Click image to expand
                        </span>
                        <div className="flex items-center gap-1.5">
                          <ShieldCheck className="h-4 w-4 text-[#208050]" />
                          <span>Deterministic Demo State</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* BENTO RIGHT STACK: 01 & 02 alongside Hero Screenshot */}
                  <div className="flex flex-col gap-5">
                    {/* BENTO CELL 2: What users see */}
                    <article className="flex flex-1 flex-col justify-between rounded-2xl border border-[#CCE3F5] bg-white p-5 shadow-sm transition-all hover:border-[#96C7F2] hover:shadow-md">
                      <div>
                        <div className="flex items-center justify-between">
                          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#EBF5FF] text-xs font-bold text-[#006FE8]">
                            01
                          </span>
                          <span className="text-[11px] font-semibold uppercase tracking-wider text-[#006FE8]">
                            Visual Projection
                          </span>
                        </div>
                        <h4 className="mt-3.5 text-base font-bold text-[#082B5E]">
                          What users see
                        </h4>
                        <p className="mt-2 text-xs leading-6 text-[#4E607A]">
                          {narrative.valueNarrative.whatUsersSee}
                        </p>
                      </div>
                      <div className="mt-4 flex items-center gap-1.5 border-t border-[#EDF4FA] pt-3 text-[11px] font-semibold text-[#006FE8]">
                        <Eye className="h-3.5 w-3.5" />
                        <span>Canonical Shell Navigation Active</span>
                      </div>
                    </article>

                    {/* BENTO CELL 3: What they can do */}
                    <article className="flex flex-1 flex-col justify-between rounded-2xl border border-[#CCE3F5] bg-white p-5 shadow-sm transition-all hover:border-[#96C7F2] hover:shadow-md">
                      <div>
                        <div className="flex items-center justify-between">
                          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#EBF5FF] text-xs font-bold text-[#006FE8]">
                            02
                          </span>
                          <span className="text-[11px] font-semibold uppercase tracking-wider text-[#006FE8]">
                            Operator Action
                          </span>
                        </div>
                        <h4 className="mt-3.5 text-base font-bold text-[#082B5E]">
                          What they can do
                        </h4>
                        <p className="mt-2 text-xs leading-6 text-[#4E607A]">
                          {narrative.valueNarrative.whatTheyCanDo}
                        </p>
                      </div>
                      <div className="mt-4 flex items-center gap-1.5 border-t border-[#EDF4FA] pt-3 text-[11px] font-semibold text-[#006FE8]">
                        <CheckCircle2 className="h-3.5 w-3.5" />
                        <span>Governed Action Gateways</span>
                      </div>
                    </article>
                  </div>

                  {/* BENTO ROW 2: Three equal cards across the 3 columns */}
                  {/* BENTO CELL 4: Manual work reduced */}
                  <article className="flex flex-col justify-between rounded-2xl border border-[#CCE3F5] bg-white p-5 shadow-sm transition-all hover:border-[#96C7F2] hover:shadow-md">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#EBF5FF] text-xs font-bold text-[#006FE8]">
                          03
                        </span>
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-[#006FE8]">
                          Efficiency
                        </span>
                      </div>
                      <h4 className="mt-3.5 text-base font-bold text-[#082B5E]">
                        Manual work reduced
                      </h4>
                      <p className="mt-2 text-xs leading-6 text-[#4E607A]">
                        {narrative.valueNarrative.whatManualWorkItReduces}
                      </p>
                    </div>
                    <div className="mt-4 flex items-center gap-1.5 border-t border-[#EDF4FA] pt-3 text-[11px] font-semibold text-[#5A7391]">
                      <LayoutDashboard className="h-3.5 w-3.5 text-[#006FE8]" />
                      <span>Zero Cross-App Context Hunting</span>
                    </div>
                  </article>

                  {/* BENTO CELL 5: Why it matters */}
                  <article className="flex flex-col justify-between rounded-2xl border border-[#CCE3F5] bg-white p-5 shadow-sm transition-all hover:border-[#96C7F2] hover:shadow-md">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#EBF5FF] text-xs font-bold text-[#208050]">
                          04
                        </span>
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-[#208050]">
                          Governance
                        </span>
                      </div>
                      <h4 className="mt-3.5 text-base font-bold text-[#082B5E]">
                        Why it matters
                      </h4>
                      <p className="mt-2 text-xs leading-6 text-[#4E607A]">
                        {narrative.valueNarrative.whyItMatters}
                      </p>
                    </div>
                    <div className="mt-4 flex items-center gap-1.5 border-t border-[#EDF4FA] pt-3 text-[11px] font-semibold text-[#208050]">
                      <ShieldCheck className="h-3.5 w-3.5" />
                      <span>Auditable Decision Continuity</span>
                    </div>
                  </article>

                  {/* BENTO CELL 6: Domain Solution Gateway */}
                  <div className="flex flex-col justify-between rounded-2xl border border-[#CCE3F5] bg-gradient-to-br from-[#082B5E] to-[#0E3D7D] p-5 text-white shadow-sm">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="rounded-full bg-white/10 px-2.5 py-0.5 text-[10px] font-semibold tracking-wider text-[#A4D0FF] uppercase">
                          Domain Catalog
                        </span>
                        <span className="font-mono text-xs text-[#CCE3F5]">
                          {domain.views.length} Views
                        </span>
                      </div>
                      <h4 className="mt-3 text-lg font-bold text-white">
                        {domain.title} Solution
                      </h4>
                      <p className="mt-2 text-xs leading-6 text-[#D6E8F8]">
                        Explore the complete declared view registry, connector bindings, and governed automation workflows for {domain.title}.
                      </p>
                    </div>
                    <Link
                      href={DOMAIN_TO_SOLUTION_PATH[domain.id] ?? "/solutions"}
                      className="mt-4 inline-flex items-center justify-center gap-2 rounded-xl bg-[#006FE8] px-4 py-2.5 text-xs font-semibold text-white shadow-sm transition-colors hover:bg-[#2B8BF4]"
                    >
                      Open {domain.title} Deep-Dive <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>

                {/* Full-Size Interactive Lightbox Modal */}
                {isExpanded && (
                  <div
                    role="dialog"
                    aria-modal="true"
                    aria-label="Full size authentic Workbench screenshot"
                    className="fixed inset-0 z-50 flex items-center justify-center bg-[#082B5E]/85 p-3 backdrop-blur-sm sm:p-6 lg:p-10"
                    onClick={() => setIsExpanded(false)}
                  >
                    <div
                      className="relative flex max-h-[94vh] w-full max-w-7xl flex-col overflow-hidden rounded-2xl border border-[#CCE3F5] bg-white shadow-2xl"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="flex items-center justify-between border-b border-[#E2EEF8] bg-[#F7FAFD] px-5 py-3 text-xs">
                        <div className="flex items-center gap-2">
                          <span className="h-3 w-3 rounded-full bg-[#FF5F56]" />
                          <span className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
                          <span className="h-3 w-3 rounded-full bg-[#27C93F]" />
                          <span className="ml-3 font-mono text-xs font-semibold text-[#5A7391]">
                            {currentScreenshot.route}
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="rounded-full border border-[#CCE3F5] bg-[#EBF5FF] px-2.5 py-0.5 font-semibold text-[#006FE8]">
                            {currentScreenshot.badge ?? "Authentic Capture"}
                          </span>
                          <span className="hidden font-mono text-xs text-[#7189A6] sm:inline">
                            1440 × 900 px (Full Scale)
                          </span>
                          <button
                            type="button"
                            onClick={() => setIsExpanded(false)}
                            className="rounded-lg p-1.5 text-[#5A7391] transition-colors hover:bg-[#E2EEF8] hover:text-[#082B5E]"
                            aria-label="Close full size view"
                          >
                            <X className="h-5 w-5" />
                          </button>
                        </div>
                      </div>
                      <div className="flex flex-1 items-center justify-center overflow-auto bg-[#0C1E38] p-2 sm:p-4">
                        <img
                          src={isMobileView && currentScreenshot.mobile ? currentScreenshot.mobile : currentScreenshot.desktop}
                          alt={currentScreenshot.alt}
                          className="h-auto max-h-[82vh] w-auto max-w-full rounded-lg object-contain shadow-lg"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        )}

        {/* TAB 2: DECLARED VIEW INVENTORY */}
        {activeTab === "inventory" && (
          <div className="mt-8 grid overflow-hidden rounded-2xl border border-[#CBE1F5] bg-white shadow-[0_18px_65px_rgba(25,80,140,.07)] lg:grid-cols-[275px_minmax(0,1fr)]">
            <aside
              aria-label="Common Workbench navigation structure"
              className="border-b border-[#D6E8F8] bg-[#F8FBFF] p-5 lg:border-b-0 lg:border-r"
            >
              <div className="flex items-center gap-2 border-b border-[#D6E8F8] pb-4 text-sm font-semibold">
                <LayoutDashboard className="h-5 w-5 text-[#006FE8]" aria-hidden="true" />
                Spine Workspace
              </div>
              <p className="mt-5 text-[11px] font-semibold uppercase tracking-[.14em] text-[#577592]">
                Shared navigation
              </p>
              <nav className="mt-3 space-y-3" aria-label="Workbench navigation groups">
                {SHARED_WORKBENCH_SHELL.map((group) => (
                  <div key={group.title}>
                    <p
                      className={`rounded-lg px-3 py-2 text-sm font-semibold ${
                        group.title === "Work"
                          ? "bg-[#E1F0FF] text-[#0055B8]"
                          : "text-[#123A68]"
                      }`}
                    >
                      {group.title}
                    </p>
                    {group.items.length > 0 && (
                      <p className="px-3 py-1 text-xs leading-5 text-[#5B728E]">
                        {group.title === "Work"
                          ? domain.title + " views"
                          : group.items.join(" · ")}
                      </p>
                    )}
                  </div>
                ))}
              </nav>
            </aside>

            <div className="min-w-0 p-5 sm:p-8">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="max-w-2xl">
                  <p className="text-xs font-semibold uppercase tracking-[.15em] text-[#2461AE]">
                    Work / {domain.title}
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold tracking-tight text-[#082B5E]">
                    {domain.title} Workbench
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#4E607A]">{domain.benefit}</p>
                </div>
                <span className="rounded-full border border-[#CCE3F5] bg-[#F0F8FF] px-3 py-1.5 text-xs font-semibold text-[#285687]">
                  {domain.views.length} defined views
                </span>
              </div>

              <div
                className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-3"
                aria-label={`${domain.title} view definitions`}
              >
                {visibleViews.map((view) => (
                  <div
                    key={view.id}
                    className="rounded-xl border border-[#D7E7F6] bg-[#FBFDFF] p-4 transition-colors hover:border-[#B5D5F5]"
                  >
                    <div className="flex items-start gap-3">
                      <Layers3
                        className="mt-0.5 h-4 w-4 shrink-0 text-[#006FE8]"
                        aria-hidden="true"
                      />
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-[#10355E]">{view.label}</p>
                        <p className="mt-1 text-xs capitalize text-[#6A7E96]">
                          {view.kind === "runtime"
                            ? "L1 runtime binding"
                            : `${view.kind} view`}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {compact && sortedViews.length > 6 && (
                <button
                  type="button"
                  onClick={() => setShowAll((value) => !value)}
                  className="mt-5 rounded-lg px-1 py-2 text-sm font-semibold text-[#006FE8] hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#006FE8]"
                >
                  {showAll
                    ? "Show fewer views"
                    : `Show all ${sortedViews.length} defined views`}
                </button>
              )}
            </div>
          </div>
        )}

        {/* Compliance and Provenance Disclaimer */}
        <div className="mt-10 flex flex-col gap-4 border-t border-[#D6E8F8] pt-6 sm:flex-row sm:items-start sm:justify-between">
          <p className="max-w-2xl text-xs leading-6 text-[#596F89]">
            <ShieldCheck className="mr-1 inline h-4 w-4 align-[-3px] text-[#006FE8]" aria-hidden="true" />
            Every visual asset is captured from the genuine local Spine Workspace Workbench application
            running real React components with deterministic demo state. Metrics and figures reflect
            demonstration fixtures, not audited production data. Projections adapt based on connected
            sources, credentials, and organizational permissions.
          </p>
          <Link
            href="/product/the-adaptive-workspace"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-[#0055B8] hover:underline"
          >
            Explore the adaptive architecture <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
