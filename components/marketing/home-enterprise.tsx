"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PUBLIC_SOLUTIONS, marketingPathForSolution } from "@/lib/solution-taxonomy";
import { proofCards } from "@/lib/site-copy";
import { PageHero } from "./page-hero";
import { ExampleWork, RenewalReviewPanel, RenewalWorkflowNarrative } from "./hero-subjects";
import { IntegrationLogoStrip } from "./integration-logo-strip";
import { EnterpriseButton } from "./enterprise";

const rise = {
  initial: { opacity: 1, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.4, ease: "easeOut" as const },
};

const productModel = [
  {
    name: "Workspace",
    body: "Shows this role the Northstar Labs renewal: the records, the evidence for the decision, and the proposal waiting for a person.",
    href: "/spineworkspace",
  },
  {
    name: "Twin",
    body: "Opens when someone asks. Coworker gathers the records and evidence this person may use. Twin then prepares the proposal. Coworker is how Twin gets its evidence. It is not a separate place you open.",
    href: "/twin#coworker",
  },
];

const operatingModel = [
  {
    name: "Truth",
    body: "Authoritative facts and state, with their source, scope, and verification status.",
  },
  {
    name: "Context",
    body: "The relevant records, evidence, commitments, signals, and prior decisions assembled for this task.",
  },
  {
    name: "Proposal",
    body: "An AI-prepared interpretation or next step, linked to evidence and awaiting the required review.",
  },
  {
    name: "Decision",
    body: "An authorized person’s acceptance, modification, or rejection of a proposal.",
  },
];

const proposalFields = [
  ["Proposed action", "Create a renewal follow-up task"],
  ["Destination", "Connected CRM"],
  ["Owner", "Account owner"],
  ["Evidence", "Contract, support ticket, latest customer email"],
  ["Approval", "Required"],
  ["Execution", "Not started"],
];

export function EnterpriseHome() {
  const accountSuccess = PUBLIC_SOLUTIONS.find((s) => s.id === "customer-success");
  const otherSolutions = PUBLIC_SOLUTIONS.filter((s) => s.id !== "customer-success").slice(0, 5);

  return (
    <div className="bg-white text-[#181818]">
      <PageHero
        tone="ice"
        badge="Governed AI workspace for operational work"
        headline={"Your tools hold the records.\nBring the context together. Decide the next step."}
        subhead="SpineWorkspace brings authorized records, messages, documents, and recent decisions into one workspace. People and AI work from the same evidence, review proposals, and approve changes to the systems that own the record."
        principle="SpineWorkspace does not replace your systems of record."
        primaryCta={{ label: "See the renewal workflow", href: "#renewal-workflow" }}
        secondaryCta={{ label: "Book a tailored demo", href: "/contact?intent=demo" }}
        art={<RenewalReviewPanel />}
        work={<ExampleWork variant="strip" />}
      />

      <section className="bg-[#F3F6F9] py-20 md:py-24">
        <div className="mx-auto grid max-w-[1280px] items-start gap-10 px-5 sm:px-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:px-12">
          <motion.div {...rise}>
            <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#0176D3]">The work</p>
            <h2 className="mt-3 text-[32px] font-semibold tracking-[-0.03em] text-[#032D60] sm:text-[36px]">
              A renewal is already split across the tools.
            </h2>
            <p className="mt-4 text-[16px] leading-[1.7] text-[#33465B]">
              Northstar Labs has a renewal date, contract terms, an account owner, and an open ticket. The latest commitment, a usage change, and the escalation notes live somewhere else. Someone has to rebuild that before anyone can decide.
            </p>
          </motion.div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[20px] border border-[#D9E4EF] bg-white p-6 shadow-[0_24px_50px_rgba(3,45,96,0.08)]">
              <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#0176D3]">Records the tools already hold</p>
              <ul className="mt-4 space-y-2 text-[15px] font-semibold text-[#032D60]">
                {["Renewal date", "Contract terms", "Account owner", "Open ticket state"].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-[20px] border border-[#D9E4EF] bg-white p-6 shadow-[0_24px_50px_rgba(3,45,96,0.08)]">
              <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#0176D3]">Assembled for this decision</p>
              <ul className="mt-4 space-y-2 text-[15px] font-semibold text-[#032D60]">
                {["Latest commitment", "Usage change", "Escalation notes"].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
          <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#0176D3]">How the work is held</p>
          <h2 className="mt-3 max-w-xl text-[32px] font-semibold tracking-[-0.03em] text-[#032D60] sm:text-[36px]">Truth, context, proposal, decision</h2>
          <p className="mt-4 max-w-2xl text-[16px] leading-[1.7] text-[#33465B]">
            Authority comes from the record and its governance—not whether the information lives in a database, document, or message.
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {operatingModel.map(({ name, body }) => (
              <li key={name} className="rounded-[20px] border border-[#D9E4EF] bg-[#F3F6F9] p-6">
                <p className="text-[18px] font-semibold text-[#032D60]">{name}</p>
                <p className="mt-2 text-[14px] leading-[1.6] text-[#33465B]">{body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="renewal-workflow" className="scroll-mt-24 py-20 md:py-24">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#0176D3]">One workflow, end to end</p>
            <h2 className="mt-3 text-[32px] font-semibold tracking-[-0.03em] text-[#032D60] sm:text-[36px]">
              Prepare the Northstar Labs renewal decision
            </h2>
            <p className="mt-4 text-[16px] leading-[1.7] text-[#33465B]">
              Evidence, a specific proposed action, a person’s edit, then the result in the CRM. Approval and completion stay separate.
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
            Workspace and Twin
          </h2>
          <p className="mt-4 max-w-2xl text-[16px] leading-[1.7] text-[#33465B]">
            Two places a person opens. The workspace shows the renewal. Twin prepares the proposal when asked.
          </p>
          <ul className="mt-8 grid gap-4 lg:grid-cols-2">
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
            <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#0176D3]">In the workspace</p>
            <h2 className="mt-3 text-[32px] font-semibold tracking-[-0.03em] text-[#032D60] sm:text-[36px]">A proposal you can inspect</h2>
            <p className="mt-4 text-[16px] leading-[1.7] text-[#33465B]">
              Approval is required. Execution has not started. Those are different states, and the workspace shows both.
            </p>
            <Link href="/governance" className="mt-5 inline-block text-[14px] font-semibold text-[#0176D3] hover:underline">
              See governance
            </Link>
          </div>
          <dl className="overflow-hidden rounded-[20px] border border-[#D9E4EF] bg-white shadow-[0_18px_48px_rgba(3,45,96,0.08)]">
            {proposalFields.map(([term, detail]) => (
              <div key={term} className="grid gap-1 border-b border-[#D9E4EF] px-6 py-4 last:border-b-0 sm:grid-cols-[11rem_1fr] sm:gap-6">
                <dt className="text-[13px] font-semibold text-[#526479]">{term}</dt>
                <dd className={`text-[15px] font-semibold ${detail === "Not started" ? "text-[#0176D3]" : "text-[#032D60]"}`}>{detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <IntegrationLogoStrip
        title="Connectors"
        subtitle="These names are in the catalog. A published status — available, beta, or planned — is not attached to each one."
      />
      <div className="-mt-px border-b border-[#E5E5E5] bg-white pb-10">
        <p className="mx-auto max-w-[720px] px-6 text-center text-[14px] leading-[1.6] text-[#526479]">
          India and UAE connectors are the ones marked coming soon.{" "}
          <Link href="/integrations" className="font-semibold text-[#0176D3] hover:underline">
            See the catalog
          </Link>
        </p>
      </div>

      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
          <h2 className="text-[13px] font-bold uppercase tracking-[0.08em] text-[#032D60]">Start with Account Success</h2>
          <p className="mt-3 max-w-2xl text-[16px] leading-[1.65] text-[#33465B]">
            Renewal readiness is the first workflow to evaluate. Other solution paths use the same model.
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
              Start with the Northstar Labs renewal: the records, the proposal, the decision, and the result in the CRM.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <EnterpriseButton href="#renewal-workflow">See the renewal workflow</EnterpriseButton>
            <EnterpriseButton href="/contact?intent=demo" variant="secondary">Book a tailored demo</EnterpriseButton>
          </div>
        </div>
      </section>
    </div>
  );
}
