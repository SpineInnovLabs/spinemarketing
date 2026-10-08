"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, ChevronRight, MoveUpRight } from "lucide-react";

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
  return <p className={`text-[11px] font-semibold uppercase tracking-[0.24em] ${light ? "text-[#AFC7FF]" : "text-[#235FCE]"}`}>{children}</p>;
}

function ContextConstellation() {
  return (
    <div className="relative mx-auto w-full max-w-[560px] overflow-hidden rounded-[28px] border border-white/15 bg-[#101F43] p-5 shadow-[0_38px_90px_-38px_rgba(0,0,0,0.72)] sm:p-7" aria-label="Illustrative relationship graph connecting business context to work and outcomes">
      <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-4">
        <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-[#8DE5D7] shadow-[0_0_16px_#8DE5D7]" /><span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#D7E5FF]">Business context / connected view</span></div>
        <span className="rounded-full border border-[#93B5FF]/30 px-2.5 py-1 text-[10px] font-medium text-[#B5C9F8]">Concept illustration</span>
      </div>
      <svg viewBox="0 0 520 390" className="mt-3 h-auto w-full" role="img" aria-label="Sources connect to shared business context, which connects to work, governed actions and verified outcomes">
        <defs>
          <linearGradient id="context-lines" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#518AFF" stopOpacity=".8"/><stop offset="100%" stopColor="#75DCCE" stopOpacity=".75"/></linearGradient>
          <radialGradient id="context-glow"><stop stopColor="#4B84FF" stopOpacity=".27"/><stop offset="100%" stopColor="#4B84FF" stopOpacity="0"/></radialGradient>
        </defs>
        <circle cx="259" cy="192" r="155" fill="url(#context-glow)"/>
        <g fill="none" stroke="url(#context-lines)" strokeWidth="1.5" strokeOpacity=".76">
          <path d="M95 78 C148 78 172 156 255 190"/><path d="M80 190 C154 178 187 190 255 190"/><path d="M96 300 C154 305 192 225 255 190"/>
          <path d="M255 190 C324 141 340 85 426 78"/><path d="M255 190 C327 190 360 190 436 190"/><path d="M255 190 C323 245 357 305 427 305"/>
          <path d="M95 78 C197 6 342 4 426 78" strokeDasharray="3 8" strokeOpacity=".2"/>
          <path d="M96 300 C200 367 325 368 427 305" strokeDasharray="3 8" strokeOpacity=".2"/>
        </g>
        {[
          {x:80,y:78,title:"SYSTEMS",detail:"Source records"},
          {x:80,y:190,title:"PEOPLE",detail:"Knowledge & goals"},
          {x:80,y:300,title:"SIGNALS",detail:"Events & KPIs"},
          {x:430,y:78,title:"WORK",detail:"Responsibilities"},
          {x:440,y:190,title:"AUTHORITY",detail:"Governed actions"},
          {x:430,y:305,title:"OUTCOMES",detail:"Verified evidence"}
        ].map((n) => <g key={n.title}>
          <circle cx={n.x} cy={n.y} r="5.5" fill="#95C5FF" stroke="#17325D" strokeWidth="3"/>
          <text x={n.x < 200 ? n.x + 13 : n.x - 13} y={n.y-11} fill="#F3F7FF" fontSize="11" fontWeight="700" letterSpacing="1" textAnchor={n.x < 200 ? "start" : "end"}>{n.title}</text>
          <text x={n.x < 200 ? n.x + 13 : n.x - 13} y={n.y+19} fill="#8DA5CF" fontSize="10" textAnchor={n.x < 200 ? "start" : "end"}>{n.detail}</text>
        </g>)}
        <circle cx="255" cy="190" r="62" fill="#152E63" stroke="#7EA8FF" strokeWidth="1.5"/>
        <circle cx="255" cy="190" r="54" fill="#1C3975" stroke="#B5D1FF" strokeOpacity=".3"/>
        <text x="255" y="182" textAnchor="middle" fill="#FFFFFF" fontSize="16" fontWeight="700">Shared</text>
        <text x="255" y="201" textAnchor="middle" fill="#FFFFFF" fontSize="16" fontWeight="700">Context</text>
        <text x="255" y="221" textAnchor="middle" fill="#B8D5FF" fontSize="9" letterSpacing="1.8">SPINE FABRIC</text>
      </svg>
      <div className="grid grid-cols-3 gap-2 border-t border-white/10 pt-4 text-center">
        {[["Understand", "What matters"], ["Govern", "Who may act"], ["Continue", "What happened"]].map(([a,b]) => <div key={a}><p className="text-[12px] font-semibold text-white">{a}</p><p className="mt-1 text-[10px] text-[#9EB3D9]">{b}</p></div>)}
      </div>
    </div>
  );
}

export function InnovLabsHome() {
  return (
    <div className="overflow-hidden bg-[#F7F9FC] text-[#111B30]">
      <section className="relative isolate overflow-hidden bg-[#08152F] text-white">
        <div className="pointer-events-none absolute -right-40 -top-64 h-[680px] w-[680px] rounded-full bg-[#204FBB]/25 blur-[95px]" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-[460px] w-[460px] rounded-full bg-[#146D8D]/15 blur-[120px]" />
        <div className="relative mx-auto grid max-w-[1320px] items-center gap-14 px-5 pb-24 pt-24 sm:px-8 lg:grid-cols-[1fr_1fr] lg:gap-10 lg:px-12 lg:pb-32 lg:pt-32">
          <div>
            <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-[#91B6FF]/25 bg-white/[0.05] px-4 py-2 text-[12px] font-medium text-[#C4D6FF]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#8DE5D7]" /> SPINE INNOVLABS / TECHNOLOGY & AI
            </div>
            <h1 className="max-w-[720px] text-[clamp(3.4rem,6.2vw,6.5rem)] font-semibold leading-[1.02] tracking-[-0.064em]">
              Building the intelligence behind <span className="text-[#8FB3FF]">connected business.</span>
            </h1>
            <p className="mt-8 max-w-[585px] text-[18px] leading-[1.8] text-[#C4D0E6]">
              Business runs across people, applications, decisions, and AI. We build the contextual technology that helps them understand what matters, collaborate with confidence, and move work forward.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link href="https://spineworkspace.com" className="group inline-flex min-h-12 items-center gap-3 rounded-full bg-[#9CC2FF] px-6 text-[14px] font-semibold text-[#071A37] transition hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
                Explore Spine Workspace <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link href="#what-we-build" className="inline-flex min-h-12 items-center gap-2 rounded-full border border-white/30 px-6 text-[14px] font-semibold text-white transition hover:border-white hover:bg-white/10">Discover our technology <ArrowRight className="h-4 w-4" /></Link>
            </div>
            <p className="mt-10 text-[11px] font-medium uppercase tracking-[0.22em] text-[#7899C9]">Connected systems. Shared context. Governed intelligence.</p>
          </div>
          <ContextConstellation />
        </div>
        <div className="relative mx-auto grid max-w-[1320px] gap-5 border-t border-white/10 px-5 py-7 text-[12px] font-medium text-[#99AFD2] sm:grid-cols-3 sm:px-8 lg:px-12">
          <span><span className="mr-2 text-[#8DE5D7]">01 /</span> Enterprise integration perspective</span>
          <span><span className="mr-2 text-[#8DE5D7]">02 /</span> AI with operational context</span>
          <span><span className="mr-2 text-[#8DE5D7]">03 /</span> Governance designed into the flow</span>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1320px] gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24 lg:px-12 lg:py-32">
        <div><SectionLabel>THE PROBLEM WE SEE</SectionLabel><p className="mt-5 text-[13px] leading-7 text-[#61718A]">More software has not automatically created more understanding.</p></div>
        <div>
          <h2 className="max-w-[850px] text-[clamp(2.4rem,4.3vw,4.5rem)] font-semibold leading-[1.12] tracking-[-0.055em]">The information exists.<br /><span className="text-[#5278B4]">The full picture rarely does.</span></h2>
          <p className="mt-8 max-w-[710px] text-[17px] leading-[1.9] text-[#4D5D74]">A customer relationship lives in CRM. A problem appears in support. A commitment sits in email. A decision happens in a meeting. Another piece of the story is known only to a person or an AI session. Every system holds something useful; few hold the whole context of the work.</p>
          <p className="mt-5 max-w-[710px] text-[17px] leading-[1.9] text-[#4D5D74]">Spine InnovLabs is focused on that gap: helping organizations connect the meaning of information without replacing the systems that own it.</p>
          <Link href="/company" className="mt-9 inline-flex items-center gap-2 border-b border-[#245EC9] pb-2 text-sm font-semibold text-[#245EC9]">Why we build this <ArrowUpRight className="h-4 w-4" /></Link>
        </div>
      </section>

      <section className="bg-white py-24 lg:py-32" id="spine-workspace">
        <div className="mx-auto grid max-w-[1320px] items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:px-12">
          <div className="rounded-[30px] border border-[#DCE6F4] bg-[#EAF1FC] p-6 sm:p-10">
            <div className="rounded-[22px] border border-[#CADBF5] bg-white p-5 shadow-[0_30px_70px_-45px_#2D528D] sm:p-7">
              <div className="flex items-center justify-between border-b border-[#E3EAF5] pb-5">
                <div><p className="text-[10px] font-bold tracking-[.2em] text-[#57759F]">SPINE WORKSPACE</p><p className="mt-2 text-lg font-semibold tracking-[-.03em]">A context-aware work surface</p></div>
                <span className="rounded-full bg-[#E6F0FF] px-3 py-1 text-[11px] font-medium text-[#2856A1]">Illustrative view</span>
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-[1fr_1.1fr]">
                <div className="space-y-3">
                  {["My Work", "Goals & KPIs", "Signals", "Approvals", "Knowledge"].map((x,i)=><div key={x} className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm ${i===0 ? "bg-[#17396F] font-semibold text-white" : "bg-[#F5F8FD] text-[#36506D]"}`}><span className={`h-1.5 w-1.5 rounded-full ${i===0?"bg-[#8DE5D7]":"bg-[#8DADD5]"}`}/>{x}</div>)}
                </div>
                <div className="rounded-2xl bg-[#F4F7FC] p-5">
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
            <h2 className="mt-5 text-[clamp(2.5rem,4.6vw,4.7rem)] font-semibold leading-[1.1] tracking-[-0.06em]">Meet <span className="text-[#346DD6]">Spine Workspace.</span></h2>
            <p className="mt-7 text-xl font-medium leading-[1.6] text-[#273D5A]">One workspace for humans and AI to understand the business, share the work, and achieve goals together.</p>
            <p className="mt-5 text-[16px] leading-[1.85] text-[#52637A]">Spine Workspace is the business-context workspace. It is designed to bring people, goals, priorities, knowledge, business signals, connected capabilities, and a context-aware AI counterpart into a shared working environment.</p>
            <p className="mt-4 text-[16px] leading-[1.85] text-[#52637A]">The workspace is the product. The intelligence underneath it makes work more informed, accountable, and continuous.</p>
            <Link href="https://spineworkspace.com" className="mt-8 inline-flex min-h-12 items-center gap-3 rounded-full bg-[#0C2A58] px-6 text-sm font-semibold text-white transition hover:bg-[#234E98]">Visit Spine Workspace <ArrowUpRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      <section className="bg-[#EBF1F9] py-24 lg:py-32" id="how-it-works">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
          <SectionLabel>THE OPERATING IDEA</SectionLabel>
          <div className="mt-5 flex flex-wrap items-end justify-between gap-8"><h2 className="max-w-[850px] text-[clamp(2.6rem,4.4vw,4.5rem)] font-semibold leading-[1.1] tracking-[-0.055em]">From fragmented information<br />to coordinated work.</h2><p className="max-w-[300px] text-[15px] leading-7 text-[#576A84]">Five connected responsibilities. One coherent business story.</p></div>
          <div className="mt-12 grid gap-3 md:grid-cols-2 xl:grid-cols-5">
            {foundation.map((step)=><article key={step.id} className="group flex min-h-[306px] flex-col rounded-[23px] border border-[#CFDDED] bg-white px-6 py-7 transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-24px_#4B70B3]">
              <div className="flex items-center justify-between"><span className="font-mono text-xs text-[#6A87AA]">{step.id}</span><ChevronRight className="h-4 w-4 text-[#86A3C7] transition group-hover:translate-x-1"/></div>
              <p className="mt-8 text-[11px] font-bold uppercase tracking-[.18em] text-[#3269BE]">{step.label}</p>
              <h3 className="mt-3 text-[21px] font-semibold leading-snug tracking-[-.035em]">{step.title}</h3>
              <p className="mt-4 text-[13px] leading-[1.75] text-[#556A83]">{step.description}</p>
            </article>)}
          </div>
        </div>
      </section>

      <section className="bg-[#08152F] py-24 text-white lg:py-32" id="what-we-build">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
          <SectionLabel light>THE TECHNOLOGY</SectionLabel>
          <div className="mt-5 flex flex-wrap items-end justify-between gap-8">
            <h2 className="max-w-[850px] text-[clamp(2.6rem,4.4vw,4.5rem)] font-semibold leading-[1.1] tracking-[-0.055em]">An intelligent workspace.<br /><span className="text-[#9AB9FF]">A governed foundation.</span></h2>
            <p className="max-w-[310px] text-[15px] leading-7 text-[#B0C1DC]">Spine is a data and context fabric — not a biological spine or a collection of disconnected bots.</p>
          </div>
          <div className="mt-14 grid gap-px overflow-hidden rounded-[24px] border border-white/15 bg-white/10 lg:grid-cols-2">
            {technology.map((part,index)=><Link key={part.name} href={part.href} className={`group flex min-h-[225px] flex-col justify-between bg-[#102142] p-7 transition-colors hover:bg-[#19335F] sm:p-9 ${index===4 ? "lg:col-span-2" : ""}`}>
              <div className="flex items-start justify-between gap-4"><div><p className="text-[10px] font-bold uppercase tracking-[.2em] text-[#9ABEFF]">{part.eyebrow}</p><h3 className="mt-3 text-[26px] font-semibold tracking-[-.04em]">{part.name}</h3></div><ArrowUpRight className="h-5 w-5 text-[#8EAADB] transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"/></div>
              <p className="mt-6 max-w-[510px] text-[14px] leading-[1.8] text-[#B7C5DA]">{part.description}</p>
            </Link>)}
          </div>
          <p className="mt-6 text-[12px] leading-6 text-[#9FB4D2]">These are complementary layers of the Spine Workspace architecture, not a list of separate products or standalone availability commitments.</p>
        </div>
      </section>

      <section className="bg-white py-24 lg:py-32" id="solutions">
        <div className="mx-auto grid max-w-[1320px] gap-12 px-5 sm:px-8 lg:grid-cols-[.8fr_1.2fr] lg:gap-20 lg:px-12">
          <div><SectionLabel>WHERE CONTEXT MATTERS</SectionLabel><h2 className="mt-5 text-[clamp(2.6rem,4.4vw,4.5rem)] font-semibold leading-[1.12] tracking-[-.055em]">Different teams.<br />One connected reality.</h2><p className="mt-6 max-w-[410px] text-[16px] leading-[1.85] text-[#546781]">Each function has its own priorities, permissions, and way of working. Context should adapt to the work without splitting the business into isolated versions of the truth.</p><Link href="/solutions" className="mt-7 inline-flex items-center gap-2 border-b border-[#245EC9] pb-2 text-sm font-semibold text-[#245EC9]">Explore business solutions <ArrowUpRight className="h-4 w-4" /></Link></div>
          <div className="border-t border-[#CBD9EB]">{teams.map((team,i)=><Link key={team.label} href={team.href} className="group flex gap-4 border-b border-[#CBD9EB] py-7 transition hover:pl-2"><span className="mt-1 font-mono text-xs text-[#6183B1]">0{i+1}</span><div className="flex-1"><h3 className="text-[21px] font-semibold tracking-[-.035em]">{team.label}</h3><p className="mt-2 max-w-[500px] text-[14px] leading-7 text-[#5B6D84]">{team.detail}</p></div><ArrowUpRight className="h-5 w-5 shrink-0 text-[#2A64C0] transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"/></Link>)}</div>
        </div>
      </section>

      <section className="bg-[#F0F5FC] py-24 lg:py-32" id="principles">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
          <SectionLabel>OUR ENGINEERING PRINCIPLES</SectionLabel>
          <h2 className="mt-5 max-w-[800px] text-[clamp(2.6rem,4.4vw,4.5rem)] font-semibold leading-[1.12] tracking-[-.055em]">Intelligence should support judgment, not replace accountability.</h2>
          <div className="mt-12 grid gap-4 md:grid-cols-2">{principles.map(([title,body],i)=><div key={title} className="rounded-[22px] border border-[#D4E0EF] bg-white p-7 sm:p-9"><p className="font-mono text-xs text-[#6687B3]">0{i+1} / PRINCIPLE</p><h3 className="mt-6 text-[24px] font-semibold tracking-[-.04em]">{title}</h3><p className="mt-3 max-w-[490px] text-[15px] leading-[1.8] text-[#576B83]">{body}</p></div>)}</div>
        </div>
      </section>

      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto grid max-w-[1320px] items-center gap-12 px-5 sm:px-8 lg:grid-cols-[.8fr_1.2fr] lg:gap-20 lg:px-12"><div><SectionLabel>OUR PERSPECTIVE</SectionLabel><h2 className="mt-5 text-[clamp(2.6rem,4.4vw,4.5rem)] font-semibold leading-[1.1] tracking-[-.055em]">Built from a real integration problem.</h2></div><div><p className="text-[19px] leading-[1.85] text-[#354C6B]">Spine InnovLabs grew from a first-hand view of enterprise systems and customer-facing work: the repeated effort required to trace one business situation across many tools, teams, records, and decisions.</p><p className="mt-5 text-[16px] leading-[1.85] text-[#556981]">Our direction is grounded in enterprise integration, AI engineering, and the belief that a business should not have to reconstruct its context every time work changes hands.</p><Link href="/company" className="mt-8 inline-flex items-center gap-2 border-b border-[#245EC9] pb-2 text-sm font-semibold text-[#245EC9]">Meet Spine InnovLabs <ArrowUpRight className="h-4 w-4" /></Link></div></div>
      </section>

      <section className="bg-[#102C59] py-24 text-white lg:py-32"><div className="mx-auto flex max-w-[1320px] flex-wrap items-end justify-between gap-10 px-5 sm:px-8 lg:px-12"><div><SectionLabel light>BUILDING WHAT COMES NEXT</SectionLabel><h2 className="mt-5 max-w-[850px] text-[clamp(2.8rem,5.1vw,5.4rem)] font-semibold leading-[1.05] tracking-[-.06em]">The next era of work needs a shared understanding of business.</h2><p className="mt-7 max-w-[650px] text-[16px] leading-[1.8] text-[#BFD0E9]">Explore the workspace being built around that idea, or speak with the people behind it.</p></div><div className="flex flex-wrap gap-3"><Link href="https://spineworkspace.com" className="inline-flex min-h-12 items-center gap-3 rounded-full bg-white px-6 text-sm font-semibold text-[#0D2A55] transition hover:bg-[#DBE8FF]">Explore Spine Workspace <MoveUpRight className="h-4 w-4"/></Link><Link href="/contact" className="inline-flex min-h-12 items-center gap-3 rounded-full border border-white/40 px-6 text-sm font-semibold text-white transition hover:bg-white/10">Contact Spine InnovLabs <ArrowRight className="h-4 w-4"/></Link></div></div></section>
    </div>
  );
}
