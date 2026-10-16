import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { STARTER_PRICING } from "@/lib/pricing";
import { WorkbenchHeroPreview } from "./workbench-hero-preview";
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

export function InnovLabsHome() {
  return (
    <div className="bg-white text-[#082B5E]">
      <section aria-labelledby="company-title" className="relative overflow-hidden border-b border-[#D6E8F8] bg-gradient-to-b from-[#EBF5FE] via-[#F4FAFF] to-white">
        <div className={container + " grid items-center gap-7 py-12 sm:py-16 lg:min-h-[680px] lg:grid-cols-[.85fr_1.15fr] lg:gap-x-10"}>
          <div className="min-w-0">
            <p className="text-[11px] font-semibold uppercase tracking-[.2em] text-[#006FE8]">SPINE INNOVTECH · SPINEWORKSPACE</p>
            <h1 id="company-title" className="mt-6 max-w-[700px] text-[length:min(clamp(2.75rem,5.2vw,4.85rem),var(--marketing-title-size))] font-bold leading-[1.06] tracking-[-.05em] text-[#032D60]">
              SpineWorkspace connects your tools, context and team.
            </h1>
            <p className={body + " mt-7 max-w-[590px]"}>
              Bring records and evidence from your tools into editable dashboards and Canvas.
              Your AI Twin prepares the next step; your team stays in control.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="#workbench-views" className={button}>See the workspace <ArrowRight className="h-4 w-4" aria-hidden /></Link>
            </div>
            <Link href="/pricing" aria-label="See pricing" className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-sm text-sm font-semibold text-[#082B5E] underline decoration-[#A7C7E9] underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#006FE8]">
              From {STARTER_PRICING.displayPrice}/{STARTER_PRICING.unit}/{STARTER_PRICING.interval} · {STARTER_PRICING.billing.toLowerCase()}
            </Link>
          </div>
          <WorkbenchHeroPreview />
          <div className="flex flex-wrap items-center gap-x-7 gap-y-1 border-t border-[#D6E8F8] pt-4 text-sm font-semibold text-[#006FE8] lg:col-span-2">
            <Link href="/proof" className="inline-flex min-h-11 items-center gap-2 rounded-sm hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#006FE8]">Inspect the product evidence <ArrowRight className="h-4 w-4" aria-hidden /></Link>
            <Link href="/developers#integration-paths" className="inline-flex min-h-11 items-center gap-2 rounded-sm hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#006FE8]">Evaluate integrations and access <ArrowRight className="h-4 w-4" aria-hidden /></Link>
          </div>
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
