import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { STARTER_PRICING } from "@/lib/pricing";
import { ResponsiveWorkbenchScreenshot } from "./responsive-workbench-screenshot";
import { WorkspaceAuthActions } from "./workspace-auth-actions";
import { WorkspaceBenefits, WorkspaceSolutions } from "./workspace-benefits";
import { WorkspaceSubscriptionValue } from "./workspace-subscription-value";
import { WorkbenchViewExplorer } from "./workbench-view-explorer";

const workflow = [
  {
    title: "Gather the context",
    body: "Start with a customer, goal or task. Bring its related records and source evidence into the review.",
  },
  {
    title: "Prepare with your Twin",
    body: "Ask your AI Twin to summarize the situation, investigate the evidence and propose a useful next step.",
  },
  {
    title: "Review with authority",
    body: "People review the proposal. Consequential actions require authorization, and their outcomes must be checked.",
  },
] as const;

export function SpineWorkspaceDetails() {
  return (
    <div className="innovtech-page">
      <section className="innovtech-product innovtech-product-overview" aria-labelledby="product-title">
        <div className="innovtech-product-copy">
          <p className="innovtech-eyebrow">SPINEWORKSPACE · YOUR TEAM AND AI, IN CONTEXT</p>
          <h1 id="product-title">A workspace for connected business work.</h1>
          <p className="innovtech-hero-description">
            Bring customer records, priorities and evidence into one place.
            Use editable dashboards for day-to-day operations and Canvas views for documents, tables and graphs.
            Your AI Twin helps prepare the next step; your team keeps control.
          </p>
          <p className="mt-5 text-sm font-semibold text-[#245EA9]">From {STARTER_PRICING.displayPrice}/{STARTER_PRICING.unit}/{STARTER_PRICING.interval} · {STARTER_PRICING.billing.toLowerCase()}</p>
          <WorkspaceAuthActions />
          <div className="innovtech-actions">
            <Link href="#workbench-views" className="innovtech-text-link">See the workspace <ArrowRight size={18} aria-hidden /></Link>
            <Link href="/pricing" className="innovtech-text-link">See pricing <ArrowRight size={18} aria-hidden /></Link>
          </div>
        </div>
        <figure className="innovtech-product-illustration">
          <div className="overflow-hidden rounded-2xl border border-[#CCE3F5] bg-white shadow-[0_20px_60px_rgba(15,70,130,.12)]">
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
          <figcaption>Workbench shell with the FounderOps projection. Captured QA records; figures are not live customer telemetry.</figcaption>
        </figure>
      </section>

      <WorkspaceBenefits detailed />
      <WorkbenchViewExplorer initialDomain="founderops" />

      <section id="how-it-works" aria-labelledby="product-workflow-title" className="innovtech-section innovtech-white-section scroll-mt-24">
        <p className="innovtech-eyebrow">How the workspace works</p>
        <h2 id="product-workflow-title">Understand the situation. Prepare the next step.</h2>
        <p className="innovtech-section-intro">For a renewal review, relate the customer’s contract, invoice and service incident. Account Success, Finance and Engineering see the permitted evidence through their own views of the same Fabric.</p>
        <div className="innovtech-feature-grid">
          {workflow.map(({ title, body }, index) => (
            <article key={title}>
              <p className="innovtech-eyebrow">STEP 0{index + 1}</p>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
        <p className="mx-auto mt-7 max-w-[850px] text-sm leading-7 text-[#4E607A]">Spine Network is designed to carry context and work checkpoints across compatible AI hosts. Each host independently verifies identity, tool access and authority before continuing.</p>
        <div className="mt-5 flex flex-wrap justify-center gap-x-7 gap-y-3">
          <Link href="/platform/how-it-works" className="innovtech-text-link">See the underlying workflow <ArrowRight size={18} aria-hidden /></Link>
          <Link href="/host-connected-environment" className="innovtech-text-link">Explore host connections and continuity <ArrowRight size={18} aria-hidden /></Link>
          <Link href="/security" className="innovtech-text-link">Security and governance <ArrowRight size={18} aria-hidden /></Link>
        </div>
      </section>

      <WorkspaceSolutions />
      <WorkspaceSubscriptionValue />
    </div>
  );
}
