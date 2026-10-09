"use client";

import Link from "next/link";
import { Activity, ArrowRight, ArrowUpRight, Check, ChevronRight, Database, MoveUpRight, Network, ShieldCheck, Sparkles, UsersRound, Waypoints } from "lucide-react";

const foundation = [
  { id: "01", label: "Discover", title: "See the connected environment.", description: "Understand which applications, records, tools, agents, and capabilities are available — without confusing discovery with permission." },
  { id: "02", label: "Contextualize", title: "Assemble the business story.", description: "Relate goals, KPIs, customers, people, events, decisions, work, and evidence instead of treating every record as an isolated fact." },
  { id: "03", label: "Collaborate", title: "Give people and AI shared context.", description: "Present the relevant work to each person and help AI gather the context needed to prepare useful next steps." },
  { id: "04", label: "Govern", title: "Put authority before action.", description: "Separate investigation and proposals from authorized execution, with explicit approval where consequential work requires it." },
  { id: "05", label: "Continue", title: "Carry verified outcomes forward.", description: "Observe what happened, reconcile it with source evidence, and preserve the decisions and handoffs that make the next step intelligible." },
];

const technology = [
  { number: "01", name: "Spine Fabric", eyebrow: "CONTEXT FOUNDATION", description: "The governed fabric that connects business entities, relationships, signals, decisions, evidence, and continuity.", href: "/platform/spine-fabric" },
  { number: "02", name: "Spine Workbench", eyebrow: "HUMAN WORK SURFACE", description: "An adaptive workspace that brings relevant priorities, work, and context to the person responsible.", href: "https://spineworkspace.com" },
  { number: "03", name: "Spine Twin", eyebrow: "AI COUNTERPART", description: "A context-aware AI counterpart for gathering understanding, preparing work, and proposing governed next steps.", href: "/twin" },
  { number: "04", name: "Spine Runtime", eyebrow: "EXECUTION & ASSURANCE", description: "The orchestration and governance layer for authorized execution, observation, and reconciliation.", href: "/governance" },
  { number: "05", name: "Spine Marketplace", eyebrow: "CONNECTED CAPABILITIES", description: "A governed ecosystem for tools, connectors, MCP servers, plugins, and reusable capabilities.", href: "/integrations" },
];

const teams = [
  { label: "Customer Success", detail: "Bring account relationships, health signals, commitments, and renewal work into focus.", href: "/solutions/customer-success" },
  { label: "Sales & RevOps", detail: "Connect pipeline decisions, customer conversations, and commercial follow-through.", href: "/solutions/revops" },
  { label: "Finance & Operations", detail: "See dependencies, financial signals, approvals, and work across systems.", href: "/solutions/finance" },
  { label: "Leadership", detail: "Understand progress against goals with the evidence behind priorities and decisions.", href: "/solutions/founders" },
];

const principles = [
  ["Context over fragments", "The relationships between facts matter as much as the facts themselves."],
  ["Evidence over assertion", "Important conclusions need sources, provenance, and clearly marked gaps."],
  ["Authority before action", "Access to a capability is not permission to execute it."],
  ["Humans and AI together", "AI helps people understand and act; people retain judgment and accountability."],
];

function SectionLabel({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <p className={`text-[11px] font-semibold uppercase tracking-[0.24em] ${light ? "text-[#006FE8]" : "text-[#006FE8]"}`}>{children}</p>;
}

function ContextConstellation() {
  return (
    <div className="relative mx-auto w-full max-w-[610px] [perspective:1000px]" aria-label="Concept illustration of connected sources, shared business context and accountable human and AI work">
      <div className="absolute -inset-8 rounded-full bg-[#55B6FF]/15 blur-[70px]" aria-hidden="true" />
      <div className="relative overflow-hidden rounded-[28px] border border-[#CBE5FA] bg-[#FFFFFF]/90 p-4 shadow-[0_42px_100px_-30px_rgba(0,85,184,.16)] backdrop-blur-xl sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#9DB8F3]/15 pb-4">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#7CA8FF]/15 text-[#006FE8]"><Network className="h-4 w-4" /></span>
            <span className="text-[11px] font-bold uppercase tracking-[.16em] text-[#082B5E]">The connected business</span>
          </div>
          <span className="inline-flex items-center gap-2 rounded-full border border-[#CBE5FA] bg-[#EBF7FF] px-2.5 py-1 text-[10px] font-medium text-[#4E607A]"><span className="h-1.5 w-1.5 rounded-full bg-[#006FE8]"/>Concept view</span>
        </div>
        <div className="relative py-6 sm:py-8">
          <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(to_right,#6483b41c_1px,transparent_1px),linear-gradient(to_bottom,#6483b41c_1px,transparent_1px)] [background-size:28px_28px]" aria-hidden="true" />
          <div className="relative grid gap-3 sm:grid-cols-[1fr_auto_1.25fr] sm:items-center">
            <div className="grid grid-cols-3 gap-2 sm:grid-cols-1">
              {[
                { name: "Applications", detail: "Systems of record", icon: Database },
                { name: "People", detail: "Teams & knowledge", icon: UsersRound },
                { name: "Signals", detail: "Goals & events", icon: Activity },
              ].map(({name,detail,icon:Icon}) => (
                <div key={name} className="flex min-w-0 items-center gap-2 rounded-xl border border-[#CBE5FA] bg-[#F0F8FF]/90 p-2.5 sm:p-3">
                  <span className="hidden h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#6C9EF4]/15 text-[#006FE8] sm:flex"><Icon className="h-4 w-4" /></span>
                  <div className="min-w-0"><p className="text-[10px] font-semibold text-[#082B5E] sm:text-[12px]">{name}</p><p className="mt-1 hidden text-[10px] text-[#4E607A] sm:block">{detail}</p></div>
                </div>
              ))}
            </div>
            <div className="relative hidden h-[200px] w-[26px] items-center justify-center sm:flex" aria-hidden="true">
              <div className="h-[1px] w-full bg-gradient-to-r from-[#86B6FF] to-[#64BFFF]" />
              <div className="absolute right-0 h-2 w-2 rotate-45 border-r border-t border-[#64BFFF]" />
            </div>
            <div className="rounded-[20px] border border-[#96BDFF]/40 bg-gradient-to-br from-[#007BEE]/95 to-[#0055B8]/95 p-4 shadow-[inset_0_1px_0_#ffffff20,0_16px_42px_-15px_#020e2d] sm:p-5">
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.13em] text-[#A6CCFF]"><span className="h-2 w-2 rounded-full bg-[#64BFFF]" />SPINE FABRIC</span>
                <Waypoints className="h-4 w-4 text-[#A6CCFF]" />
              </div>
              <p className="mt-5 text-[23px] font-semibold leading-[1.1] tracking-[-.05em] text-white sm:text-[27px]">Shared business context</p>
              <p className="mt-3 text-[12px] leading-[1.6] text-[#C4D7FA]">A connected understanding of what matters, why it matters and what comes next.</p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {["Goals", "KPIs", "Decisions", "Evidence", "Work"].map(v=><span key={v} className="rounded-md border border-white/25 bg-white/10 px-2 py-1.5 text-[10px] text-[#DCEAFF]">{v}</span>)}
              </div>
            </div>
          </div>
          <div className="relative mx-auto my-5 h-7 w-px bg-gradient-to-b from-[#89B5FF] to-[#64BFFF]" aria-hidden="true" />
          <div className="relative grid grid-cols-2 gap-3">
            <div className="rounded-xl border border-[#A9C4FF]/25 bg-[#F0F8FF] p-3 sm:p-4">
              <p className="flex items-center gap-2 text-[11px] font-semibold text-[#082B5E]"><UsersRound className="h-4 w-4 text-[#006FE8]" /> People</p>
              <p className="mt-2 text-[11px] leading-5 text-[#4E607A]">Judgment · priorities · approval</p>
            </div>
            <div className="rounded-xl border border-[#A9C4FF]/25 bg-[#F0F8FF] p-3 sm:p-4">
              <p className="flex items-center gap-2 text-[11px] font-semibold text-[#082B5E]"><Sparkles className="h-4 w-4 text-[#006FE8]" /> AI counterpart</p>
              <p className="mt-2 text-[11px] leading-5 text-[#4E607A]">Context gathering · preparation</p>
            </div>
          </div>
          <div className="relative mt-3 flex items-center justify-between gap-3 rounded-xl border border-[#8BCBFA]/25 bg-[#E0F2FF]/85 px-3 py-3 sm:px-4">
            <div className="flex items-center gap-2.5"><ShieldCheck className="h-4 w-4 shrink-0 text-[#006FE8]" /><span className="text-[11px] font-medium text-[#082B5E]">Authority → execution → verification</span></div>
            <ArrowRight className="h-4 w-4 shrink-0 text-[#006FE8]"/>
          </div>
        </div>
        <div className="border-t border-[#CBE5FA] pt-3 text-[10px] leading-5 text-[#4E607A]">Architecture illustration. Sources remain authoritative; execution requires permission.</div>
      </div>
    </div>
  );
}

export function InnovLabsHome() {
  return (
    <div className="overflow-hidden bg-[#F5FAFF] text-[#082B5E]">
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-white via-[#F0F9FF] to-[#CBEAFF] text-[#082B5E]">
        <div className="pointer-events-none absolute inset-0 opacity-45 [background-image:radial-gradient(#6F9BEA30_1px,transparent_1px)] [background-size:28px_28px] [mask-image:linear-gradient(to_right,transparent,black_60%)]" aria-hidden="true" />
        <div className="pointer-events-none absolute -right-48 -top-56 h-[780px] w-[780px] rounded-full bg-[#69C4FF]/25 blur-[110px]" aria-hidden="true" />
        <div className="pointer-events-none absolute -bottom-64 left-[-20%] h-[600px] w-[750px] rounded-full bg-[#A4DDFF]/15 blur-[130px]" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-[1320px] items-center gap-14 px-5 pb-20 pt-20 sm:px-8 sm:pt-24 lg:min-h-[760px] lg:grid-cols-[1.02fr_.98fr] lg:gap-10 lg:px-12 lg:pb-24 lg:pt-24">
          <div className="relative z-10">
            <div className="mb-7 inline-flex flex-wrap items-center gap-3 text-[11px] font-bold uppercase tracking-[.2em] text-[#006FE8]">
              <span className="h-[1px] w-7 bg-[#006FE8]" />
              SPINE INNOVLABS
              <span className="font-normal tracking-[.11em] text-[#4E607A]">/ AI & CONNECTED SYSTEMS</span>
            </div>
            <h1 className="max-w-[730px] text-[clamp(3.2rem,5.5vw,6.05rem)] font-semibold leading-[1.035] tracking-[-0.068em]">
              Building intelligence for a <span className="relative whitespace-normal text-[#006FE8]">more connected business<span className="absolute -bottom-2 left-0 h-[3px] w-[70%] bg-gradient-to-r from-[#64BFFF] to-transparent" aria-hidden="true" /></span><span className="text-[#082B5E]">.</span>
            </h1>
            <p className="mt-9 max-w-[570px] text-[clamp(1rem,1.35vw,1.15rem)] leading-[1.85] text-[#4E607A]">
              When information is scattered, people and AI lose the full picture. Spine InnovLabs builds the technology that turns disconnected systems, knowledge and work into shared business context.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link href="https://spineworkspace.com" className="group inline-flex min-h-12 items-center gap-3 rounded-full bg-[#006FE8] px-6 text-[14px] font-semibold text-white transition-colors hover:bg-[#0055B8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#006FE8]">
                Explore Spine Workspace <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link href="#what-we-build" className="inline-flex min-h-12 items-center gap-2 rounded-full border border-[#006FE8] bg-white/80 px-6 text-[14px] font-semibold text-[#082B5E] transition-colors hover:bg-[#EBF7FF]">
                What we build <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-12 grid max-w-[590px] grid-cols-3 gap-4 border-t border-[#CBE5FA] pt-6">
              {[["Systems", "Connected"],["Context", "Shared"],["Actions", "Governed"]].map(([a,b])=><div key={a}><p className="text-[11px] font-semibold uppercase tracking-[.16em] text-[#4E607A]">{a}</p><p className="mt-1.5 text-[15px] font-medium text-[#082B5E]">{b}</p></div>)}
            </div>
          </div>
          <ContextConstellation />
        </div>
      </section>

      <section className="mx-auto grid max-w-[1320px] gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24 lg:px-12 lg:py-32">
        <div><SectionLabel>THE PROBLEM WE SEE</SectionLabel><p className="mt-5 text-[13px] leading-7 text-[#61718A]">More software has not automatically created more understanding.</p></div>
        <div>
          <h2 className="max-w-[850px] text-[clamp(2.4rem,4.3vw,4.5rem)] font-semibold leading-[1.12] tracking-[-0.055em]">The information exists.<br /><span className="text-[#5278B4]">The full picture rarely does.</span></h2>
          <p className="mt-8 max-w-[710px] text-[17px] leading-[1.9] text-[#4D5D74]">A customer relationship lives in CRM. A problem appears in support. A commitment sits in email. A decision happens in a meeting. Another piece of the story is known only to a person or an AI session. Every system holds something useful; few hold the whole context of the work.</p>
          <p className="mt-5 max-w-[710px] text-[17px] leading-[1.9] text-[#4D5D74]">Spine InnovLabs is focused on that gap: helping organizations connect the meaning of information without replacing the systems that own it.</p>
          <Link href="/company" className="mt-9 inline-flex items-center gap-2 border-b border-[#006FE8] pb-2 text-sm font-semibold text-[#006FE8]">Why we build this <ArrowUpRight className="h-4 w-4" /></Link>
        </div>
      </section>

      <section className="bg-white py-24 lg:py-32" id="spine-workspace">
        <div className="mx-auto grid max-w-[1320px] items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:px-12">
          <div className="rounded-[30px] border border-[#DCE6F4] bg-[#E3F3FF] p-6 sm:p-10">
            <div className="rounded-[22px] border border-[#CADBF5] bg-white p-5 shadow-[0_30px_70px_-45px_#2D528D] sm:p-7">
              <div className="flex items-center justify-between border-b border-[#E3EAF5] pb-5">
                <div><p className="text-[10px] font-bold tracking-[.2em] text-[#57759F]">SPINE WORKSPACE</p><p className="mt-2 text-lg font-semibold tracking-[-.03em]">A context-aware work surface</p></div>
                <span className="rounded-full bg-[#E6F0FF] px-3 py-1 text-[11px] font-medium text-[#2856A1]">Illustrative view</span>
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-[1fr_1.1fr]">
                <div className="space-y-3">
                  {["My Work", "Goals & KPIs", "Signals", "Approvals", "Knowledge"].map((x,i)=><div key={x} className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm ${i===0 ? "bg-[#006FE8] font-semibold text-white" : "bg-[#F0F8FF] text-[#36506D]"}`}><span className={`h-1.5 w-1.5 rounded-full ${i===0?"bg-[#8CD7FF]":"bg-[#8DADD5]"}`}/>{x}</div>)}
                </div>
                <div className="rounded-2xl bg-[#EBF7FF] p-5">
                  <p className="text-[10px] font-bold tracking-[.15em] text-[#5E7CA7]">CONTEXT FOR THIS WORK</p>
                  <h3 className="mt-3 text-lg font-semibold leading-snug tracking-[-.03em]">A decision, with the evidence beside it.</h3>
                  <div className="mt-5 space-y-2">
                    {["Current goal", "Related records", "Open decisions", "Available actions"].map((x,i)=><div key={x} className="flex items-center gap-2 rounded-lg border border-[#E4ECF7] bg-white px-3 py-2.5 text-[12px] text-[#435873]"><Check className="h-3.5 w-3.5 text-[#2B72B3]"/>{x}</div>)}
                  </div>
                  <p className="mt-5 text-[11px] leading-5 text-[#667B96]">Missing or stale information stays visible. Proposed actions are not completed actions.</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <SectionLabel>OUR FLAGSHIP PRODUCT</SectionLabel>
            <h2 className="mt-5 text-[clamp(2.5rem,4.6vw,4.7rem)] font-semibold leading-[1.1] tracking-[-0.06em]">Meet <span className="text-[#006FE8]">Spine Workspace.</span></h2>
            <p className="mt-7 text-xl font-medium leading-[1.6] text-[#273D5A]">One workspace for humans and AI to understand the business, share the work, and achieve goals together.</p>
            <p className="mt-5 text-[16px] leading-[1.85] text-[#52637A]">Spine Workspace is the business-context workspace. It is designed to bring people, goals, priorities, knowledge, business signals, connected capabilities, and a context-aware AI counterpart into a shared working environment.</p>
            <p className="mt-4 text-[16px] leading-[1.85] text-[#52637A]">The workspace is the product. The intelligence underneath it makes work more informed, accountable, and continuous.</p>
            <Link href="https://spineworkspace.com" className="mt-8 inline-flex min-h-12 items-center gap-3 rounded-full bg-[#006FE8] px-6 text-sm font-semibold text-white transition hover:bg-[#0055B8]">Visit Spine Workspace <ArrowUpRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      <section className="bg-[#EBF7FF] py-24 lg:py-32" id="how-it-works">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
          <SectionLabel>THE OPERATING IDEA</SectionLabel>
          <div className="mt-5 flex flex-wrap items-end justify-between gap-8"><h2 className="max-w-[850px] text-[clamp(2.6rem,4.4vw,4.5rem)] font-semibold leading-[1.1] tracking-[-0.055em]">From fragmented information<br />to coordinated work.</h2><p className="max-w-[300px] text-[15px] leading-7 text-[#576A84]">Five connected responsibilities. One coherent business story.</p></div>
          <div className="mt-12 grid gap-3 md:grid-cols-2 xl:grid-cols-5">
            {foundation.map((step)=><article key={step.id} className="group flex min-h-[306px] flex-col rounded-[23px] border border-[#CFDDED] bg-white px-6 py-7 transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-24px_#4B70B3]">
              <div className="flex items-center justify-between"><span className="font-mono text-xs text-[#6A87AA]">{step.id}</span><ChevronRight className="h-4 w-4 text-[#86A3C7] transition group-hover:translate-x-1"/></div>
              <p className="mt-8 text-[11px] font-bold uppercase tracking-[.18em] text-[#006FE8]">{step.label}</p>
              <h3 className="mt-3 text-[21px] font-semibold leading-snug tracking-[-.035em]">{step.title}</h3>
              <p className="mt-4 text-[13px] leading-[1.75] text-[#556A83]">{step.description}</p>
            </article>)}
          </div>
        </div>
      </section>

      <section className="bg-[#EBF7FF] py-24 text-[#082B5E] lg:py-32" id="what-we-build">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
          <SectionLabel light>THE TECHNOLOGY</SectionLabel>
          <div className="mt-5 flex flex-wrap items-end justify-between gap-8">
            <h2 className="max-w-[850px] text-[clamp(2.6rem,4.4vw,4.5rem)] font-semibold leading-[1.1] tracking-[-0.055em]">An intelligent workspace.<br /><span className="text-[#006FE8]">A governed foundation.</span></h2>
            <p className="max-w-[310px] text-[15px] leading-7 text-[#4E607A]">Spine is a data and context fabric — not a biological spine or a collection of disconnected bots.</p>
          </div>
          <div className="mt-14 grid gap-px overflow-hidden rounded-[24px] border border-[#CBE5FA] bg-[#EBF7FF] lg:grid-cols-2">
            {technology.map((part,index)=><Link key={part.name} href={part.href} className={`group flex min-h-[225px] flex-col justify-between bg-[#FFFFFF] p-7 transition-colors hover:bg-[#F0F8FF] sm:p-9 ${index===4 ? "lg:col-span-2" : ""}`}>
              <div className="flex items-start justify-between gap-4"><div><p className="text-[10px] font-bold uppercase tracking-[.2em] text-[#006FE8]">{part.eyebrow}</p><h3 className="mt-3 text-[26px] font-semibold tracking-[-.04em]">{part.name}</h3></div><ArrowUpRight className="h-5 w-5 text-[#006FE8] transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"/></div>
              <p className="mt-6 max-w-[510px] text-[14px] leading-[1.8] text-[#4E607A]">{part.description}</p>
            </Link>)}
          </div>
          <p className="mt-6 text-[12px] leading-6 text-[#4E607A]">These are complementary layers of the Spine Workspace architecture, not a list of separate products or standalone availability commitments.</p>
        </div>
      </section>

      <section className="bg-white py-24 lg:py-32" id="solutions">
        <div className="mx-auto grid max-w-[1320px] gap-12 px-5 sm:px-8 lg:grid-cols-[.8fr_1.2fr] lg:gap-20 lg:px-12">
          <div><SectionLabel>WHERE CONTEXT MATTERS</SectionLabel><h2 className="mt-5 text-[clamp(2.6rem,4.4vw,4.5rem)] font-semibold leading-[1.12] tracking-[-.055em]">Different teams.<br />One connected reality.</h2><p className="mt-6 max-w-[410px] text-[16px] leading-[1.85] text-[#546781]">Each function has its own priorities, permissions, and way of working. Context should adapt to the work without splitting the business into isolated versions of the truth.</p><Link href="/solutions" className="mt-7 inline-flex items-center gap-2 border-b border-[#006FE8] pb-2 text-sm font-semibold text-[#006FE8]">Explore business solutions <ArrowUpRight className="h-4 w-4" /></Link></div>
          <div className="border-t border-[#CBD9EB]">{teams.map((team,i)=><Link key={team.label} href={team.href} className="group flex gap-4 border-b border-[#CBD9EB] py-7 transition hover:pl-2"><span className="mt-1 font-mono text-xs text-[#6183B1]">0{i+1}</span><div className="flex-1"><h3 className="text-[21px] font-semibold tracking-[-.035em]">{team.label}</h3><p className="mt-2 max-w-[500px] text-[14px] leading-7 text-[#5B6D84]">{team.detail}</p></div><ArrowUpRight className="h-5 w-5 shrink-0 text-[#2A64C0] transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"/></Link>)}</div>
        </div>
      </section>

      <section className="bg-[#F0F8FF] py-24 lg:py-32" id="principles">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
          <SectionLabel>OUR ENGINEERING PRINCIPLES</SectionLabel>
          <h2 className="mt-5 max-w-[800px] text-[clamp(2.6rem,4.4vw,4.5rem)] font-semibold leading-[1.12] tracking-[-.055em]">Intelligence should support judgment, not replace accountability.</h2>
          <div className="mt-12 grid gap-4 md:grid-cols-2">{principles.map(([title,body],i)=><div key={title} className="rounded-[22px] border border-[#D4E0EF] bg-white p-7 sm:p-9"><p className="font-mono text-xs text-[#6687B3]">0{i+1} / PRINCIPLE</p><h3 className="mt-6 text-[24px] font-semibold tracking-[-.04em]">{title}</h3><p className="mt-3 max-w-[490px] text-[15px] leading-[1.8] text-[#576B83]">{body}</p></div>)}</div>
        </div>
      </section>

      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto grid max-w-[1320px] items-center gap-12 px-5 sm:px-8 lg:grid-cols-[.8fr_1.2fr] lg:gap-20 lg:px-12"><div><SectionLabel>OUR PERSPECTIVE</SectionLabel><h2 className="mt-5 text-[clamp(2.6rem,4.4vw,4.5rem)] font-semibold leading-[1.1] tracking-[-.055em]">Built from a real integration problem.</h2></div><div><p className="text-[19px] leading-[1.85] text-[#354C6B]">Spine InnovLabs grew from a first-hand view of enterprise systems and customer-facing work: the repeated effort required to trace one business situation across many tools, teams, records, and decisions.</p><p className="mt-5 text-[16px] leading-[1.85] text-[#556981]">Our direction is grounded in enterprise integration, AI engineering, and the belief that a business should not have to reconstruct its context every time work changes hands.</p><Link href="/company" className="mt-8 inline-flex items-center gap-2 border-b border-[#006FE8] pb-2 text-sm font-semibold text-[#006FE8]">Meet Spine InnovLabs <ArrowUpRight className="h-4 w-4" /></Link></div></div>
      </section>

      <section className="bg-[#EBF7FF] py-24 text-[#082B5E] lg:py-32"><div className="mx-auto flex max-w-[1320px] flex-wrap items-end justify-between gap-10 px-5 sm:px-8 lg:px-12"><div><SectionLabel light>BUILDING WHAT COMES NEXT</SectionLabel><h2 className="mt-5 max-w-[850px] text-[clamp(2.8rem,5.1vw,5.4rem)] font-semibold leading-[1.05] tracking-[-.06em]">The next era of work needs a shared understanding of business.</h2><p className="mt-7 max-w-[650px] text-[16px] leading-[1.8] text-[#4E607A]">Explore the workspace being built around that idea, or speak with the people behind it.</p></div><div className="flex flex-wrap gap-3"><Link href="https://spineworkspace.com" className="inline-flex min-h-12 items-center gap-3 rounded-full bg-[#006FE8] px-6 text-sm font-semibold text-white transition hover:bg-[#0055B8]">Explore Spine Workspace <MoveUpRight className="h-4 w-4"/></Link><Link href="/contact" className="inline-flex min-h-12 items-center gap-3 rounded-full border border-[#006FE8] px-6 text-sm font-semibold text-[#082B5E] transition hover:bg-[#EBF7FF]">Contact Spine InnovLabs <ArrowRight className="h-4 w-4"/></Link></div></div></section>
    </div>
  );
}
