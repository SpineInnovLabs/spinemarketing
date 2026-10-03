"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PUBLIC_SOLUTIONS, marketingPathForSolution } from "@/lib/solution-taxonomy";
import { proofCards } from "@/lib/site-copy";
import { PageHero } from "./page-hero";
import { ExampleWork, RenewalReviewPanel, RenewalWorkflowNarrative, SharedWorkPanel } from "./hero-subjects";
import { IntegrationLogoStrip } from "./integration-logo-strip";
import { EnterpriseButton } from "./enterprise";

const rise = {
  initial: { opacity: 1, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.4, ease: "easeOut" as const },
};

const steps = [
  ["See the work", "The record and the evidence for this task sit with the goal. They stay distinct.", "/business-context"],
  ["Ask Twin", "Twin prepares a proposal only when someone asks. The proposal is not the record.", "/twin"],
  ["A person decides", "An authorized person accepts, edits, or rejects it.", "/governance"],
  ["The tools catch up", "An accepted change is written back to the tool that owns the record. The workspace shows the result.", "/platform/how-it-works"],
];

const productModel = [
  {
    name: "Workspace",
    body: "Brings together authoritative business truth from connected systems, and governed context from evidence, documents, messages, and recent work.",
    href: "/spineworkspace",
  },
  {
    name: "Twin",
    body: "Opens when someone asks. It reads the record, the evidence for this task, and earlier decisions, then prepares a proposal. The proposal is not the record.",
    href: "/twin",
  },
  {
    name: "Coworker",
    body: "Gathers only the record and the evidence this person is allowed to use for this task.",
    href: "/twin#coworker",
  },
];

const truthContext = [
  {
    name: "Truth",
    body: "What the business has already confirmed: customer records, contracts, ticket state, billing status, approvals, and other governed facts in the tools that keep the record.",
  },
  {
    name: "Context",
    body: "What helps someone act wisely right now: the latest email, an open escalation, a meeting note, a document, a usage trend, or a recent decision connected to the work.",
  },
  {
    name: "Proposal",
    body: "What Twin prepares from that truth and context. It stays a proposal until an authorized person accepts or rejects it.",
  },
];

const governanceChecks = [
  "AI sees only the truth and context the current user or approved workflow can access.",
  "Every proposal can be traced to source evidence and the authoritative records behind it.",
  "Source systems keep the record. SpineWorkspace assembles context, governs proposals, and records decisions.",
  "Meaningful actions stay pending until an authorized person approves them.",
  "Personal, session, work, and organizational memory remain separate.",
];

export function EnterpriseHome() {
  const accountSuccess = PUBLIC_SOLUTIONS.find((s) => s.id === "customer-success");
  const otherSolutions = PUBLIC_SOLUTIONS.filter((s) => s.id !== "customer-success").slice(0, 5);

  return (
    <div className="bg-white text-[#181818]">
      <PageHero
        tone="ice"
        badge="Governed AI workspace for operational work"
        headline={"Your business already has the truth.\nThe context is trapped across tools."}
        subhead="SpineWorkspace connects authorized evidence from the systems you already use, so people and AI can work from the same truth and the context for this task. Source systems remain authoritative."
        principle="SpineWorkspace does not replace truth. It brings truth and context together for work."
        primaryCta={{ label: "See a workflow", href: "#renewal-workflow" }}
        secondaryCta={{ label: "Book a tailored demo", href: "/contact?intent=demo" }}
        art={<RenewalReviewPanel />}
        work={<ExampleWork variant="strip" />}
      />

      <section className="border-b border-[#D9E4EF] bg-white py-10">
        <div className="mx-auto max-w-[720px] px-5 text-center sm:px-8">
          <p className="text-[17px] leading-[1.65] text-[#33465B]">
            <span className="font-semibold text-[#032D60]">SpineWorkspace</span> does not replace truth. It is the governed place where truth, context, proposals, and decisions meet. Your systems remain authoritative. Your people remain accountable.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
          <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#0176D3]">How SpineWorkspace thinks about work</p>
          <h2 className="mt-3 max-w-xl text-[32px] font-semibold tracking-[-0.03em] text-[#032D60] sm:text-[36px]">Truth and Context</h2>
          <p className="mt-4 max-w-2xl text-[16px] leading-[1.7] text-[#33465B]">
            SpineWorkspace does not replace truth. It brings truth and context together so a person can review what Twin proposes.
          </p>
          <ul className="mt-8 grid gap-4 lg:grid-cols-3">
            {truthContext.map(({ name, body }) => (
              <li key={name} className="rounded-[20px] border border-[#D9E4EF] bg-[#F3F6F9] p-6">
                <p className="text-[18px] font-semibold text-[#032D60]">{name}</p>
                <p className="mt-2 text-[14px] leading-[1.6] text-[#33465B]">{body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-[#F3F6F9] py-20 md:py-24">
        <div className="mx-auto grid max-w-[1280px] items-start gap-10 px-5 sm:px-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:px-12">
          <motion.div {...rise}>
            <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#0176D3]">Truth and context, apart</p>
            <h2 className="mt-3 text-[32px] font-semibold tracking-[-0.03em] text-[#032D60] sm:text-[36px]">
              Turn scattered signals into reviewed next steps.
            </h2>
            <p className="mt-4 text-[16px] leading-[1.7] text-[#33465B]">
              The account record, the last commitment, and the open ticket live in different tools. Each handoff asks someone to rebuild the story. SpineWorkspace gives people and their Twin the same governed truth and context, so renewal and follow-through do not depend on memory.
            </p>
          </motion.div>
          <div className="relative lg:-mr-8 lg:translate-y-6">
            <div className="rounded-[20px] border border-[#D9E4EF] bg-white p-6 shadow-[0_24px_50px_rgba(3,45,96,0.12)] lg:-mb-8">
              <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#00A2DF]">CRM · Truth</p>
              <p className="mt-2 text-[22px] font-semibold text-[#032D60]">The account record</p>
              <ul className="mt-5 divide-y divide-[#D9E4EF] border-t border-[#D9E4EF]">
                {[
                  ["Mail", "Context", "The last commitment"],
                  ["Tickets", "Truth", "What is still open"],
                  ["Documents", "Context", "The evidence"],
                ].map(([tool, kind, detail]) => (
                  <li key={tool} className="flex items-baseline justify-between gap-4 py-3">
                    <span className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#526479]">{tool} · {kind}</span>
                    <span className="text-right text-[15px] font-semibold text-[#032D60]">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="renewal-workflow" className="scroll-mt-24 py-20 md:py-24">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#0176D3]">One workflow, end to end</p>
            <h2 className="mt-3 text-[32px] font-semibold tracking-[-0.03em] text-[#032D60] sm:text-[36px]">
              From fragmented systems to a reviewed decision
            </h2>
            <p className="mt-4 text-[16px] leading-[1.7] text-[#33465B]">
              Account Success is the clearest place to see the model: renewal readiness, escalation briefs, and handoffs where truth and context get split.
            </p>
          </div>
          <div className="mt-10">
            <RenewalWorkflowNarrative />
          </div>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <EnterpriseButton href="/proof">See the demonstration</EnterpriseButton>
            <EnterpriseButton href="/solutions/customer-success" variant="secondary">
              Explore Account Success
            </EnterpriseButton>
          </div>
        </div>
      </section>

      <section className="bg-[#F3F6F9] py-20 md:py-24">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
          <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#0176D3]">The product</p>
          <h2 className="mt-3 max-w-xl text-[32px] font-semibold tracking-[-0.03em] text-[#032D60] sm:text-[36px]">
            Workspace and Twin — explained plainly
          </h2>
          <p className="mt-4 max-w-2xl text-[16px] leading-[1.7] text-[#33465B]">
            Humans govern the business. AI helps the business work. You start from the workspace and Twin, not from a stack of platform pieces.
          </p>
          <ul className="mt-8 grid gap-4 lg:grid-cols-3">
            {productModel.map(({ name, body, href }) => (
              <li key={name}>
                <Link
                  href={href}
                  className="flex h-full flex-col rounded-[20px] border border-[#D9E4EF] bg-white p-6 shadow-[0_8px_24px_rgba(3,45,96,0.06)] transition-colors hover:border-[#0176D3] hover:bg-[#EAF5FC]"
                >
                  <p className="text-[18px] font-semibold text-[#032D60]">{name}</p>
                  <p className="mt-2 flex-1 text-[14px] leading-[1.6] text-[#33465B]">{body}</p>
                  <span className="mt-4 text-[13px] font-semibold text-[#0176D3]">Learn more →</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="mx-auto grid max-w-[1280px] items-center gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:px-12">
          <div>
            <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#0176D3]">Shared Work</p>
            <h2 className="mt-3 text-[32px] font-semibold tracking-[-0.03em] text-[#032D60] sm:text-[36px]">Humans and Twin share the work</h2>
            <p className="mt-4 text-[16px] leading-[1.7] text-[#33465B]">
              Twin prepares a proposal from governed truth and context. Each proposal stays a proposal until someone with authority accepts or rejects it.
            </p>
          </div>
          <SharedWorkPanel />
        </div>
      </section>

      <section className="bg-[#F3F6F9] py-20 md:py-24">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
          <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#0176D3]">How it works</p>
          <h2 className="mt-3 max-w-xl text-[32px] font-semibold tracking-[-0.03em] text-[#032D60] sm:text-[36px]">The work, then a decision, then the tools.</h2>
          <p className="mt-4 max-w-2xl text-[16px] leading-[1.7] text-[#33465B]">Source systems stay authoritative. People stay in charge.</p>
          <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(([title, body, href], index) => (
              <li key={title} className="rounded-[20px] border border-[#D9E4EF] bg-white shadow-[0_8px_24px_rgba(3,45,96,0.06)]">
                <Link href={href} className="flex h-full flex-col p-6 transition-colors hover:bg-[#EAF5FC]">
                  <span className="text-[13px] font-semibold tabular-nums text-[#0176D3]">{String(index + 1).padStart(2, "0")}</span>
                  <span className="mt-3 text-[18px] font-semibold text-[#032D60]">{title}</span>
                  <span className="mt-2 text-[14px] leading-[1.6] text-[#33465B]">{body}</span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <IntegrationLogoStrip
        title="Bring your systems together — without replacing them"
        subtitle="Connectors bring truth and context in. Source systems stay authoritative."
      />

      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
          <h2 className="text-[13px] font-bold uppercase tracking-[0.08em] text-[#032D60]">Start with Account Success</h2>
          <p className="mt-3 max-w-2xl text-[16px] leading-[1.65] text-[#33465B]">
            Renewal readiness, escalations, and handoffs — where truth and context are split. Other solution paths follow the same governed model.
          </p>
          <ul className="mt-8 overflow-hidden rounded-[20px] border border-[#D9E4EF]">
            {accountSuccess && (
              <li>
                <Link
                  href={marketingPathForSolution(accountSuccess.slug)}
                  className="block bg-[#EAF5FC] px-6 py-8 hover:bg-[#E3F2FA]"
                >
                  <div className="text-[24px] font-semibold tracking-[-0.02em] text-[#032D60]">{accountSuccess.name}</div>
                  <p className="mt-2 max-w-2xl text-[16px] leading-[1.6] text-[#33465B]">{accountSuccess.headline}</p>
                  <p className="mt-2 text-[14px] text-[#526479]">{accountSuccess.buyerSummary}</p>
                </Link>
              </li>
            )}
            {otherSolutions.map((solution) => (
              <li key={solution.id} className="border-t border-[#D9E4EF]">
                <Link
                  href={marketingPathForSolution(solution.slug)}
                  className="block bg-white px-6 py-4 hover:bg-[#F3F6F9]"
                >
                  <div className="text-[16px] font-semibold text-[#032D60]">{solution.name}</div>
                  <p className="mt-1 text-[14px] leading-[1.5] text-[#526479]">{solution.headline}</p>
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/solutions" className="mt-5 inline-block text-[14px] font-semibold text-[#0176D3] hover:underline">
            View all solutions
          </Link>
        </div>
      </section>

      <section className="bg-[#F3F6F9] py-20 md:py-24">
        <div className="mx-auto grid max-w-[1280px] gap-8 px-5 sm:px-8 lg:grid-cols-2 lg:px-12">
          <div>
            <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#0176D3]">Governance you can evaluate</p>
            <h2 className="mt-3 text-[32px] font-semibold tracking-[-0.03em] text-[#032D60]">People stay in charge</h2>
            <p className="mt-4 text-[16px] leading-[1.7] text-[#33465B]">
              Governance is not a slogan — it is how consequential work is allowed to move. Use this checklist when you evaluate SpineWorkspace.
            </p>
            <Link href="/governance" className="mt-5 inline-block text-[14px] font-semibold text-[#0176D3] hover:underline">
              See governance
            </Link>
          </div>
          <ul className="space-y-3">
            {governanceChecks.map((item) => (
              <li
                key={item}
                className="rounded-2xl border border-[#D9E4EF] bg-white px-5 py-4 text-[14px] leading-[1.55] text-[#33465B] shadow-[0_4px_16px_rgba(3,45,96,0.04)]"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
          <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#526479]">Illustrative proof · demonstration, not customer results</p>
          <h2 className="mt-3 text-[32px] font-semibold tracking-[-0.03em] text-[#032D60]">What the product is built to do</h2>
          <p className="mt-3 max-w-2xl text-[15px] leading-[1.6] text-[#526479]">
            Demonstrations show how the product operates. They are not claims of customer outcomes.
          </p>
          <ol className="mt-8 grid overflow-hidden rounded-[20px] border border-[#D9E4EF] bg-white shadow-[0_18px_48px_rgba(3,45,96,0.08)] lg:grid-cols-3">
            {proofCards.slice(0, 3).map((card, i) => (
              <li key={card.title} className={i === 0 ? "" : "border-t border-[#D9E4EF] lg:border-l lg:border-t-0"}>
                <div className="flex h-full flex-col p-6">
                  <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-[#526479]">Demonstration</p>
                  <h3 className="mt-2 text-[16px] font-semibold text-[#032D60]">{card.title}</h3>
                  <p className="mt-2 text-[14px] leading-[1.6] text-[#33465B]">{card.description}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="mt-5 flex flex-wrap gap-4">
            <Link href="/proof" className="text-[14px] font-semibold text-[#0176D3] hover:underline">
              See the product map
            </Link>
            <Link href="#renewal-workflow" className="text-[14px] font-semibold text-[#0176D3] hover:underline">
              Replay the renewal workflow
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-[#D9E4EF] bg-white py-20 md:py-24">
        <div className="mx-auto flex max-w-[1280px] flex-col items-start justify-between gap-6 px-5 sm:px-8 lg:flex-row lg:items-center lg:px-12">
          <div>
            <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#0176D3]">Evaluation</p>
            <h2 className="mt-3 text-[28px] font-semibold tracking-[-0.02em] text-[#032D60]">Start with one governed workflow.</h2>
            <p className="mt-2 max-w-xl text-[15px] leading-[1.6] text-[#33465B]">
              Pricing follows scope and integration needs. Proof shows product behavior — not invented customer results.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <EnterpriseButton href="/proof">See a demonstration</EnterpriseButton>
            <EnterpriseButton href="/pricing" variant="secondary">See pricing</EnterpriseButton>
            <EnterpriseButton href="/contact?intent=demo" variant="secondary">Book a demo</EnterpriseButton>
          </div>
        </div>
      </section>

      <section className="bg-[#032D60] py-20 md:py-24">
        <div className="mx-auto flex max-w-[1280px] flex-col items-start justify-between gap-4 px-5 sm:px-8 lg:flex-row lg:items-center lg:px-12">
          <div>
            <h2 className="text-[24px] font-semibold tracking-[-0.02em] text-white">See SpineWorkspace on your work.</h2>
            <p className="mt-1 max-w-xl text-[15px] text-white/80">
              One workspace where truth, context, proposals, and decisions meet. Source systems stay authoritative.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <EnterpriseButton href="#renewal-workflow">See a workflow</EnterpriseButton>
            <EnterpriseButton href="/contact?intent=demo" variant="secondary">Book a tailored demo</EnterpriseButton>
          </div>
        </div>
      </section>
    </div>
  );
}
