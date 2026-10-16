import Link from "next/link";
import { ArrowRight, Check, ShieldCheck, Sparkles, Workflow } from "lucide-react";
import { STARTER_PRICING } from "@/lib/pricing";
import { WorkbenchHeroPreview } from "./workbench-hero-preview";
import { WorkspaceBenefits, WorkspaceSolutions } from "./workspace-benefits";
import { WorkspaceSubscriptionValue } from "./workspace-subscription-value";
import { WorkbenchViewExplorer } from "./workbench-view-explorer";

const container = "mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12";
const heading = "text-[length:min(clamp(2rem,4vw,3.8rem),var(--marketing-heading-size))] font-semibold leading-[1.08] tracking-[-.045em]";
const body = "text-[length:min(17px,var(--marketing-body-size))] leading-[1.85] text-[#4E607A]";
const button = "inline-flex min-h-12 items-center gap-3 rounded-xl bg-[#006FE8] px-6 text-[14px] font-semibold text-white transition-colors hover:bg-[#0055B8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#006FE8]";

const pillars = [
  ["Day-one ready", "13 operational domains are already modeled from Spine Fabric. Connect your systems and start working without months of ETL, dashboards, or custom engineering."],
  ["Unified Account Gravity", "Every deal, ticket, incident, invoice, contract, and decision stays anchored to the Account for one complete operational story."],
  ["One Auth", "A single governed identity and permission model spans people, workspaces, platform controls, and approved AI hosts."],
  ["Connect once", "Authorized AI hosts use governed context through Spine Network MCP instead of asking you to recreate every connector and credential."],
] as const;

const workflow = [
  ["Connect", "Bring Salesforce, HubSpot, GitHub, Linear, Slack, Gmail, Stripe, NetSuite, and the systems you already rely on into one governed workspace."],
  ["Anchor", "Map connected records to the Universal Account Anchor while retaining source system, source record ID, lineage, and trust."],
  ["Signal", "Monitor 71 enterprise KPIs across 13 families. When a KPI moves outside its expected range, Spine explains what changed and why it matters."],
  ["Work", "Turn signals into durable work with owners, deadlines, linked context, status, and history that survive handoffs and closed conversations."],
  ["Approve", "AI prepares the next step. A human reviews it, Spine issues a time-limited approval token, and Hermes executes only what was authorized."],
] as const;

const outcomes = ["One complete account view", "Role-specific projections from one Spine Fabric", "Adaptive KPIs, Signals, and durable Work", "AI assistance with human authority", "No rip-and-replace migration"];

export function InnovLabsHome() {
  return (
    <div className="bg-white text-[#082B5E]">
      <section aria-labelledby="company-title" className="relative overflow-hidden border-b border-[#D6E8F8] bg-gradient-to-b from-[#EBF5FE] via-[#F4FAFF] to-white">
        <div className={container + " grid items-center gap-10 py-16 sm:py-20 lg:min-h-[700px] lg:grid-cols-[.9fr_1.1fr] lg:gap-x-12"}>
          <div className="min-w-0">
            <p className="text-[11px] font-semibold uppercase tracking-[.2em] text-[#0055B8]">SPINEWORKSPACE · OPERATIONAL CONTINUITY</p>
            <h1 id="company-title" className="mt-6 max-w-[700px] text-[length:min(clamp(2.75rem,5.2vw,4.85rem),var(--marketing-title-size))] font-bold leading-[1.02] tracking-[-.055em] text-[#032D60]">The operational workspace that is ready on day one.</h1>
            <p className="mt-7 max-w-[620px] text-xl font-medium leading-8 text-[#082B5E]">Context you own. AI you rent. Approval in between.</p>
            <p className={body + " mt-4 max-w-[620px]"}><p>SpineWorkspace connects the tools you already use, anchors every account to one shared truth, and turns operational data into clear priorities, accountable work, and governed AI-assisted action.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="#how-it-works" className={button}>See how it works <ArrowRight className="h-4 w-4" aria-hidden /></Link>
              <Link href="#why-spine" className="inline-flex min-h-12 items-center gap-2 rounded-xl border border-[#A7C7E9] px-5 text-[14px] font-semibold text-[#082B5E] hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#006FE8]">Why SpineWorkspace</Link>
            </div>
            <p className="mt-5 text-sm text-[#4E607A]">Connect once. See the complete account. Work from day one.</p>
          </div>
          <WorkbenchHeroPreview />
        </div>
      </section>

      <section id="why-spine" aria-labelledby="why-title" className="scroll-mt-24 bg-white py-20 sm:py-28">
        <div className={container}>
          <div className="max-w-[850px]"><p className="text-[11px] font-semibold uppercase tracking-[.2em] text-[#0055B8]">Why SpineWorkspace exists</p><h2 id="why-title" className={heading + " mt-5"}>Your company already has the data. What it lacks is connected, trustworthy context.</h2><p className={body + " mt-6 max-w-[760px]"}>A customer account can span Salesforce, Zendesk, GitHub, Linear, Slack, Stripe, and finance systems. Each team sees one fragment. Leaders assemble the rest manually. AI tools inherit the fragmentation. SpineWorkspace solves the problem at its foundation: one governed operational context that humans and AI can both use.</p></div>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">{pillars.map(([title, description], index) => <article key={title} className="rounded-2xl border border-[#CBE5FA] bg-[#F4FAFF] p-6"><p className="text-xs font-semibold text-[#006FE8]">0{index + 1}</p><h3 className="mt-5 text-xl font-semibold leading-tight">{title}</h3><p className="mt-3 text-sm leading-7 text-[#4E607A]">{description}</p></article>)}</div>
        </div>
      </section>

      <WorkspaceBenefits />
      <WorkbenchViewExplorer initialDomain="founderops" compact />

      <section id="how-it-works" aria-labelledby="workflow-title" className="scroll-mt-24 bg-[#F4FAFF] py-20 sm:py-28">
        <div className={container}><div className="max-w-[850px]"><p className="text-[11px] font-semibold uppercase tracking-[.2em] text-[#0055B8]">How SpineWorkspace works</p><h2 id="workflow-title" className={heading + " mt-5"}>From scattered records to accountable, governed action.</h2><p className={body + " mt-6 max-w-[760px]"}>The workflow preserves source authority while adding the context, signals, work, and approval layer your teams need to move together.</p></div><div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-5">{workflow.map(([title, description], index) => <article key={title} className="relative rounded-2xl border border-[#CBE5FA] bg-white p-6"><div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E5F3FF] text-sm font-bold text-[#0055B8]">0{index + 1}</div><h3 className="mt-5 text-lg font-semibold">{title}</h3><p className="mt-3 text-sm leading-7 text-[#4E607A]">{description}</p></article>)}</div></div>
      </section>

      <section aria-labelledby="adaptive-title" className="bg-[#032D60] py-20 text-white sm:py-28"><div className={container + " grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:items-center"}><div><p className="text-[11px] font-semibold uppercase tracking-[.2em] text-[#8CC4F2]">The adaptive Spine</p><h2 id="adaptive-title" className="mt-5 text-[length:min(clamp(2rem,4vw,3.6rem),var(--marketing-heading-size))] font-semibold leading-[1.08] tracking-[-.045em]">KPIs that improve with use, not alerts that disappear.</h2><p className="mt-6 max-w-[560px] text-base leading-8 text-[#C9D9E8]">SpineWorkspace is honest on day one. Missing inputs cap confidence instead of creating false certainty. As teams resolve relationships and connect sources, KPIs mature from visibility to diagnosis and proactive guidance.</p></div><div className="grid gap-3 sm:grid-cols-2">{["Progressive data maturation", "Evidence-based resolution", "Calibrated thresholds", "Closed-loop learning"].map((item) => <div key={item} className="flex items-center gap-3 rounded-xl border border-white/15 bg-white/10 p-5 text-sm font-semibold"><Check className="h-4 w-4 text-[#8CC4F2]" aria-hidden />{item}</div>)}</div></div></section>

      <WorkspaceSolutions />
      <section aria-labelledby="promise-title" className="bg-white py-20 sm:py-28"><div className={container + " grid gap-12 lg:grid-cols-[1fr_.9fr] lg:items-center"}><div><p className="text-[11px] font-semibold uppercase tracking-[.2em] text-[#0055B8]">The SpineWorkspace promise</p><h2 id="promise-title" className={heading + " mt-5 max-w-[700px]"}>The continuity layer beneath the tools you already use.</h2><p className={body + " mt-6 max-w-[660px]"}>Not another CRM, project tracker, chat client, or AI wrapper. SpineWorkspace gives your organization a shared operational context and a safe path from insight to action.</p><Link href="/pricing" className={button + " mt-8"}>Start with SpineWorkspace <ArrowRight className="h-4 w-4" aria-hidden /></Link><p className="mt-4 text-sm text-[#4E607A]">From {STARTER_PRICING.displayPrice}/{STARTER_PRICING.unit}/{STARTER_PRICING.interval} · {STARTER_PRICING.billing.toLowerCase()}</p></div><div className="rounded-3xl border border-[#CBE5FA] bg-[#F4FAFF] p-7"><div className="flex items-center gap-3"><ShieldCheck className="h-5 w-5 text-[#006FE8]" aria-hidden /><p className="font-semibold">Built for governed execution</p></div><ul className="mt-6 space-y-4">{outcomes.map((outcome) => <li key={outcome} className="flex items-start gap-3 text-sm leading-6 text-[#4E607A]"><Check className="mt-1 h-4 w-4 shrink-0 text-[#006FE8]" aria-hidden />{outcome}</li>)}</ul><div className="mt-7 border-t border-[#CBE5FA] pt-6 text-sm font-semibold text-[#082B5E]">Context you own. AI you rent. Approval in between.</div></div></div></section>

      <WorkspaceSubscriptionValue />
    </div>
  );
}

void Sparkles;
void Workflow;
void ShieldCheck;
void Check;
void ArrowRight;
void STARTER_PRICING;
void container;
void heading;
void body;
void button;
void Link;
void WorkbenchHeroPreview;
void WorkspaceBenefits;
void WorkspaceSolutions;
void WorkspaceSubscriptionValue;
void WorkbenchViewExplorer;
void pillars;
void workflow;
void outcomes;

// Keep the page composition explicit so each narrative layer can evolve independently.
export const workspaceNarrative = { pillars, workflow, outcomes };

export default InnovLabsHome;
