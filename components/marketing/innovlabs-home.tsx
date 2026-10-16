import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { STARTER_PRICING } from "@/lib/pricing";
import { ResponsiveWorkbenchScreenshot } from "./responsive-workbench-screenshot";
import { WorkspaceBenefits, WorkspaceSolutions } from "./workspace-benefits";
import { WorkspaceSubscriptionValue } from "./workspace-subscription-value";
import { WorkbenchViewExplorer } from "./workbench-view-explorer";

const approach = [
  ["Connect", "Bring together the records your team is authorized to use."],
  ["Prepare", "Review the context. Ask your AI Twin to summarize the situation and prepare a next step."],
  ["Review", "Check the evidence, authorize consequential actions and retain the outcome."],
] as const;
const container = "mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12";
const heading = "text-[length:min(clamp(2rem,4vw,3.8rem),var(--marketing-heading-size))] font-semibold leading-[1.12] tracking-[-.045em]";
const body = "text-[length:min(17px,var(--marketing-body-size))] leading-[1.85] text-[#4E607A]";
const button = "inline-flex min-h-12 items-center gap-3 rounded-xl bg-[#006FE8] px-6 text-[14px] font-semibold text-white transition-colors hover:bg-[#0055B8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#006FE8]";
const secondary = "inline-flex min-h-12 items-center gap-3 rounded-xl border border-[#006FE8] bg-white px-6 text-[14px] font-semibold text-[#082B5E] transition-colors hover:bg-[#EBF7FF] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#006FE8]";

export function InnovLabsHome() {
  return (
    <div className="bg-white text-[#082B5E]">
      <section aria-labelledby="company-title" className="relative overflow-hidden border-b border-[#D6E8F8] bg-gradient-to-b from-[#EBF5FE] via-[#F4FAFF] to-white">
        <div className={container + " grid items-center gap-12 py-16 sm:py-24 lg:min-h-[760px] lg:grid-cols-[1.04fr_.96fr] lg:gap-12"}>
          <div className="min-w-0">
            <p className="text-[11px] font-semibold uppercase tracking-[.2em] text-[#006FE8]">SPINE INNOVTECH · SPINEWORKSPACE</p>
            <h1 id="company-title" className="mt-6 max-w-[700px] text-[length:min(clamp(2.75rem,5.2vw,4.85rem),var(--marketing-title-size))] font-bold leading-[1.06] tracking-[-.05em] text-[#032D60]">
              SpineWorkspace connects your tools, context and team.
            </h1>
            <p className={body + " mt-7 max-w-[590px]"}>
              One place to review customer records, team priorities and source evidence.
              Work in editable dashboards or Canvas views, then ask your AI Twin to prepare the next step.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="#workbench-views" className={button}>See the workspace <ArrowRight className="h-4 w-4" aria-hidden /></Link>
              <Link href="/pricing" className={secondary}>See pricing</Link>
            </div>
            <p className="mt-6 text-sm font-semibold text-[#082B5E]">
              From {STARTER_PRICING.displayPrice}/{STARTER_PRICING.unit}/{STARTER_PRICING.interval} · {STARTER_PRICING.billing.toLowerCase()}
            </p>
          </div>
          <figure className="mx-auto min-w-0 w-full max-w-[680px]">
            <div className="overflow-hidden rounded-2xl border border-[#CCE3F5] bg-white shadow-[0_22px_70px_rgba(15,70,130,.14)]">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#E2EEF8] bg-[#F7FAFD] px-4 py-2.5 text-xs">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F56]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#27C93F]" />
                  <span className="ml-2 hidden font-mono text-[11px] font-semibold text-[#5A7391] sm:inline">/workspace/work/founderops/founder-ops</span>
                </div>
                <span className="rounded-full border border-[#CCE3F5] bg-[#EBF5FF] px-2 py-0.5 text-[10px] font-semibold text-[#006FE8]">Live Workbench Views</span>
              </div>
              <ResponsiveWorkbenchScreenshot src="/images/workbench/founderops/cockpit-20261014.webp" alt="Authentic Workbench shell and FounderOps cockpit showing captured QA revenue, deals and customer summaries." priority />
            </div>
            <figcaption className="mt-3 text-[12px] leading-6 text-[#4E607A]">Workbench shell and FounderOps cockpit. Captured QA records; figures are not live customer telemetry.</figcaption>
          </figure>
        </div>
      </section>

      <WorkspaceBenefits />
      <WorkbenchViewExplorer initialDomain="founderops" compact />

      <section id="how-it-works" aria-labelledby="home-workflow-title" className="scroll-mt-24 bg-white py-16 sm:py-20">
        <div className={container}>
          <p className="text-[11px] font-semibold uppercase tracking-[.2em] text-[#006FE8]">How it works</p>
          <h2 id="home-workflow-title" className={heading + " mt-5 max-w-[820px]"}>From scattered records to a reviewed next step.</h2>
          <div className="mt-9 grid gap-4 md:grid-cols-3">
            {approach.map(([title, description], index) => (
              <article key={title} className="rounded-2xl border border-[#CBE5FA] bg-[#F0F8FF] p-6">
                <p className="text-xs font-semibold text-[#006FE8]">0{index + 1}</p>
                <h3 className="mt-4 text-[length:var(--marketing-card-size)] font-semibold leading-snug">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#4E607A]">{description}</p>
              </article>
            ))}
          </div>
          <p className="mt-6 max-w-[860px] text-sm leading-7 text-[#4E607A]">
            Spine Network is designed to continue context and work checkpoints across compatible AI hosts.
            Each host independently verifies identity, tool access and authority.
          </p>
          <div className="mt-3 flex flex-wrap gap-x-7 gap-y-1">
            <Link href="/platform/how-it-works" className="inline-flex min-h-11 items-center gap-2 rounded-sm text-sm font-semibold text-[#006FE8] hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#006FE8]">See the workflow <ArrowRight className="h-4 w-4" aria-hidden /></Link>
            <Link href="/host-connected-environment" className="inline-flex min-h-11 items-center gap-2 rounded-sm text-sm font-semibold text-[#006FE8] hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#006FE8]">Explore host connections and continuity <ArrowRight className="h-4 w-4" aria-hidden /></Link>
          </div>
        </div>
      </section>

      <WorkspaceSolutions />
      <WorkspaceSubscriptionValue />
    </div>
  );
}
