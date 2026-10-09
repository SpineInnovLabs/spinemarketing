import Link from "next/link";
import { ArrowRight, ArrowUpRight, Network, ShieldCheck, Waypoints, Workflow } from "lucide-react";

const capabilities = [
  {
    icon: Network,
    number: "01",
    title: "Connected systems",
    description: "Understand the applications, APIs, data sources and capability boundaries relevant to a specific business workflow.",
    activities: ["Integration discovery", "Source and schema assessment", "Connector strategy", "Technical architecture"],
  },
  {
    icon: Waypoints,
    number: "02",
    title: "Business-context design",
    description: "Map the relationships between customers, goals, responsibilities, decisions, work, signals and evidence.",
    activities: ["Entity and relationship modelling", "Goals and KPI context", "Relevant work surfaces", "Context provenance"],
  },
  {
    icon: ShieldCheck,
    number: "03",
    title: "Governed AI workflows",
    description: "Explore how AI can gather context, prepare proposals and act only through authorized capabilities and approvals.",
    activities: ["Capability and authority mapping", "Human approval design", "Execution boundaries", "Verification and reconciliation"],
  },
  {
    icon: Workflow,
    number: "04",
    title: "Implementation planning",
    description: "Translate an architecture into a practical, bounded proof of concept with observable outcomes and clear responsibilities.",
    activities: ["Readiness assessment", "Pilot planning", "Integration sequencing", "Review and handover"],
  },
];

export function ServicesContent() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#F0F8FF] px-5 pb-24 pt-40 text-[#052858] sm:px-8 lg:pb-32 innovtech-reference-surface">
        <div className="pointer-events-none absolute -right-20 -top-48 h-[620px] w-[620px] rounded-full bg-[#346CD0]/25 blur-[110px]" aria-hidden />
        <div className="relative mx-auto max-w-[1220px]">
          <p className="text-xs font-semibold uppercase tracking-[.23em] text-[#4C5C73]">Spine InnovTech / Capabilities</p>
          <h1 className="mt-7 max-w-[1050px] text-[clamp(3.2rem,6vw,6.1rem)] font-semibold leading-[1.08] tracking-[-.065em]">
            Technology strategy grounded in <span className="text-[#0072E5]">business context.</span>
          </h1>
          <p className="mt-8 max-w-[770px] text-[18px] leading-[1.9] text-[#4C5C73]">
            We work at the intersection of enterprise connectivity, context-aware workspaces and responsible AI. Every engagement starts by understanding the existing systems, business goal and authority boundaries.
          </p>
          <Link href="/contact?intent=partnership" className="mt-9 inline-flex min-h-12 items-center gap-2 rounded-full bg-[#B1CFFF] px-6 text-sm font-semibold text-[#0D2B54] transition hover:bg-white">
            Discuss a project <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </section>
      <section className="bg-[#F7F9FC] px-5 py-24 sm:px-8 lg:py-32">
        <div className="mx-auto max-w-[1220px]">
          <p className="text-xs font-semibold uppercase tracking-[.21em] text-[#2360BC]">What we focus on</p>
          <h2 className="mt-6 max-w-[850px] text-[clamp(2.5rem,4.7vw,4.6rem)] font-semibold leading-[1.13] tracking-[-.055em] text-[#10294D]">Architecture, collaboration and governed execution.</h2>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {capabilities.map(({ icon: Icon, number, title, description, activities }) => (
              <article key={number} className="rounded-[26px] border border-[#D9E5F3] bg-white p-8 sm:p-10">
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E9F2FF] text-[#1C58AB]"><Icon className="h-6 w-6" aria-hidden /></span>
                  <span className="font-mono text-xs text-[#7394C2]">{number}</span>
                </div>
                <h3 className="mt-8 text-[29px] font-semibold tracking-[-.045em] text-[#122F58]">{title}</h3>
                <p className="mt-4 max-w-xl text-[16px] leading-[1.8] text-[#566D88]">{description}</p>
                <ul className="mt-7 grid gap-3 border-t border-[#E3EAF4] pt-6 sm:grid-cols-2">
                  {activities.map((activity) => <li key={activity} className="flex items-start gap-2 text-[14px] leading-6 text-[#29466D]"><span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#447CCC]" aria-hidden />{activity}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#E9F1FC] px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-[1220px] items-center gap-10 lg:grid-cols-[1.2fr_.8fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[.21em] text-[#2360BC]">Scope first</p>
            <h2 className="mt-5 text-[clamp(2.2rem,4vw,4rem)] font-semibold leading-[1.12] tracking-[-.05em] text-[#10294D]">An engagement should be defined by evidence, not an arbitrary timeline.</h2>
            <p className="mt-6 text-[16px] leading-[1.85] text-[#526A85]">Implementation scope and timing depend on the systems, data access, security controls and business outcome. We assess those constraints before making delivery commitments.</p>
          </div>
          <div className="flex flex-col gap-3">
            <Link href="/contact" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#112E59] px-6 text-sm font-semibold text-white transition hover:bg-[#2659A0]">Contact Spine InnovTech <ArrowRight className="h-4 w-4" aria-hidden /></Link>
            <a href="/product" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#BDD0EA] bg-white px-6 text-sm font-semibold text-[#112E59] transition hover:border-[#2659A0]">Explore Spine Workspace <ArrowUpRight className="h-4 w-4" aria-hidden /></a>
          </div>
        </div>
      </section>
    </>
  );
}
