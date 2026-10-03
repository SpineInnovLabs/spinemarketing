import { PageHero } from "@/components/marketing/page-hero";
import { Section, SectionHeader } from "@/components/marketing/section";

const steps = [
  {
    n: "01",
    title: "Truth stays in the tools you already run.",
    body: "CRM, tickets, billing, contracts, and approvals remain the system of record. SpineWorkspace reads what this person is allowed to see. It does not become the record.",
  },
  {
    n: "02",
    title: "Context is gathered only for this person and this task.",
    body: "Email, notes, escalations, usage, and recent decisions are assembled for the work in front of them. Context is evidence for this task. It is not a second system of record.",
  },
  {
    n: "03",
    title: "Twin prepares a proposal, with each claim linked to its source.",
    body: "The proposal is built from that truth and that context. Every claim points back to the system it came from. The proposal is not the system of record.",
  },
  {
    n: "04",
    title: "A person accepts, edits, or rejects.",
    body: "An authorized person decides. If they accept a change, it is written back through the source system. That system stays authoritative.",
  },
];

export function PlatformHowItWorksContent() {
  return (
    <>
      <PageHero
        badge="How it works"
        tone="ice"
        headline={"Truth stays in your tools.\nContext is assembled for the task."}
        subhead="Twin prepares a proposal from that truth and context. A person accepts, edits, or rejects it."
        principle="SpineWorkspace does not replace truth. Source systems stay authoritative."
        primaryCta={{ label: "See a workflow", href: "/#renewal-workflow" }}
        secondaryCta={{ label: "Book a tailored demo", href: "/contact?intent=demo" }}
      />
      <Section>
        <SectionHeader
          align="left"
          label="The sequence"
          headline="Four steps. The record does not move."
          body="SpineWorkspace brings the confirmed record and the evidence for this task together, then waits for a person."
        />
        <ol className="grid gap-4 md:grid-cols-2">
          {steps.map((step) => (
            <li key={step.n} className="rounded-2xl border border-[#D9E4EF] bg-[#F3F6F9] p-6">
              <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#0176D3]">{step.n}</p>
              <h3 className="mt-3 text-[20px] font-semibold leading-[1.3] tracking-[-0.02em] text-[#032D60]">{step.title}</h3>
              <p className="mt-3 text-[15px] leading-[1.65] text-[#33465B]">{step.body}</p>
            </li>
          ))}
        </ol>
      </Section>
    </>
  );
}
