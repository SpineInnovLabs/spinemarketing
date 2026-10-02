"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PUBLIC_SOLUTIONS, marketingPathForSolution } from "@/lib/solution-taxonomy";
import { proofCards } from "@/lib/site-copy";
import { PageHero } from "./page-hero";
import { ExampleWork, RenewalReviewPanel, SharedWorkPanel } from "./hero-subjects";
import { IntegrationLogoStrip } from "./integration-logo-strip";
import { EnterpriseButton } from "./enterprise";

const rise = {
  initial: { opacity: 1, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.4, ease: "easeOut" as const },
};

const steps = [
  ["See the work", "Goals and evidence sit in one workspace, drawn from the tools you already use.", "/business-context"],
  ["Work with Twin", "Your Twin proposes a next step. A person reviews it.", "/twin"],
  ["Keep going", "The same work resumes later, without rebuilding the story.", "/continuity"],
];

export function EnterpriseHome() {
  return (
    <div className="bg-white text-[#181818]">
      <PageHero
        tone="ice"
        badge="SpineWorkspace by Spine InnovLabs"
        headline="Bring people, AI, and business context into the same workspace."
        subhead="Connect the tools you already use, so humans and AI can understand what matters, coordinate work, and move business goals forward."
        principle="Humans govern the business. AI helps the business work."
        primaryCta={{ label: "Book a demo", href: "/contact?intent=demo" }}
        secondaryCta={{ label: "See how it works", href: "/adaptive-workspace" }}
        art={<RenewalReviewPanel />}
        work={<ExampleWork variant="strip" />}
      />

      <section className="bg-[#F3F6F9] py-20 md:py-24">
        <div className="mx-auto grid max-w-[1280px] items-start gap-10 px-5 sm:px-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:px-12">
          <motion.div {...rise}>
            <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#0176D3]">Fragmented context</p>
            <h2 className="mt-3 text-[32px] font-semibold tracking-[-0.03em] text-[#032D60] sm:text-[36px]">Work is scattered. The goal is not.</h2>
            <p className="mt-4 text-[16px] leading-[1.7] text-[#33465B]">
              Customer history, commitments, and next steps live in different tools. Each handoff asks someone to rebuild the story. SpineWorkspace gives people and their Twin the same governed context so the work can move.
            </p>
          </motion.div>
          <div className="relative lg:-mr-8 lg:translate-y-6">
            <div className="rounded-[20px] border border-[#D9E4EF] bg-white p-6 shadow-[0_24px_50px_rgba(3,45,96,0.12)] lg:-mb-8">
              <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#00A2DF]">CRM</p>
              <p className="mt-2 text-[22px] font-semibold text-[#032D60]">The account record</p>
              <ul className="mt-5 divide-y divide-[#D9E4EF] border-t border-[#D9E4EF]">
                {[
                  ["Mail", "The last commitment"],
                  ["Tickets", "What is still open"],
                  ["Documents", "The evidence"],
                ].map(([tool, detail]) => (
                  <li key={tool} className="flex items-baseline justify-between gap-4 py-3">
                    <span className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#526479]">{tool}</span>
                    <span className="text-right text-[15px] font-semibold text-[#032D60]">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="mx-auto grid max-w-[1280px] items-center gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:px-12">
          <div>
            <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#0176D3]">Shared Work</p>
            <h2 className="mt-3 text-[32px] font-semibold tracking-[-0.03em] text-[#032D60] sm:text-[36px]">Humans and Twin share the work</h2>
            <p className="mt-4 text-[16px] leading-[1.7] text-[#33465B]">
              Twin is the person&apos;s AI counterpart. Coworker gathers authorized context. Proposals stay proposals until someone with authority reviews them.
            </p>
          </div>
          <SharedWorkPanel />
        </div>
      </section>

      <section className="bg-[#F3F6F9] py-20 md:py-24">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
          <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#0176D3]">How it works</p>
          <h2 className="mt-3 max-w-xl text-[32px] font-semibold tracking-[-0.03em] text-[#032D60] sm:text-[36px]">Three moves. Then a person decides.</h2>
          <p className="mt-4 max-w-2xl text-[16px] leading-[1.7] text-[#33465B]">Each step stays a proposal until someone with authority accepts it.</p>
          <ol className="mt-8 grid overflow-hidden rounded-[20px] border border-[#D9E4EF] bg-white shadow-[0_18px_48px_rgba(3,45,96,0.08)] lg:grid-cols-3">
            {steps.map(([title, body, href], index) => (
              <li key={title} className={index === 0 ? "" : "border-t border-[#D9E4EF] lg:border-l lg:border-t-0"}>
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
        title="Tools you already use"
        subtitle="Connectors bring context in. Source systems stay authoritative."
      />

      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
          <h2 className="text-[13px] font-bold uppercase tracking-[0.08em] text-[#032D60]">Start from the work you do</h2>
          <p className="mt-3 max-w-2xl text-[16px] leading-[1.65] text-[#33465B]">
            Each solution is a practical job: a goal, the evidence already in your tools, a next action, and a person who decides.
          </p>
          <ul className="mt-8 overflow-hidden rounded-[20px] border border-[#D9E4EF]">
            {PUBLIC_SOLUTIONS.slice(0, 6).map((solution, i) => (
              <li key={solution.id} className={i === 0 ? "" : "border-t border-[#D9E4EF]"}>
                <Link
                  href={marketingPathForSolution(solution.slug)}
                  className={i === 0 ? "block bg-[#EAF5FC] px-6 py-8 hover:bg-[#E3F2FA]" : "block bg-white px-6 py-4 hover:bg-[#F3F6F9]"}
                >
                  <div className={i === 0 ? "text-[24px] font-semibold tracking-[-0.02em] text-[#032D60]" : "text-[16px] font-semibold text-[#032D60]"}>{solution.name}</div>
                  <p className={i === 0 ? "mt-2 max-w-2xl text-[16px] leading-[1.6] text-[#33465B]" : "mt-1 text-[14px] leading-[1.5] text-[#526479]"}>{solution.headline}</p>
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
            <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#0176D3]">Authority and evidence</p>
            <h2 className="mt-3 text-[32px] font-semibold tracking-[-0.03em] text-[#032D60]">People stay in charge</h2>
            <p className="mt-4 text-[16px] leading-[1.7] text-[#33465B]">
              Availability is not authority. Evidence stays linked to the source system. Consequential steps wait for a person.
            </p>
            <Link href="/governance" className="mt-5 inline-block text-[14px] font-semibold text-[#0176D3] hover:underline">
              See governance
            </Link>
          </div>
          <div className="relative pb-2">
            {[
              ["Evidence", "Notes from the tools this team already uses.", "z-0 ml-6 bg-white shadow-[0_8px_24px_rgba(3,45,96,0.06)] sm:ml-10"],
              ["Boundary", "Personal, session, and organizational memory stay separate.", "z-20 -mt-4 mr-4 bg-[#EAF5FC] shadow-[0_16px_36px_rgba(1,118,211,0.12)] sm:mr-8"],
              ["Decision", "Awaiting review until someone with authority accepts it.", "z-10 -mt-3 ml-8 bg-[#F3F6F9] shadow-[0_8px_24px_rgba(3,45,96,0.05)] sm:ml-14"],
            ].map(([title, body, surface]) => (
              <div key={title} className={`relative rounded-2xl border border-[#D9E4EF] p-5 ${surface}`}>
                <p className="text-[14px] font-semibold text-[#032D60]">{title}</p>
                <p className="mt-1 text-[14px] leading-[1.55] text-[#33465B]">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
          <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#526479]">Illustrative proof · demonstration, not customer results</p>
          <h2 className="mt-3 text-[32px] font-semibold tracking-[-0.03em] text-[#032D60]">What the product is built to do</h2>
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
          <Link href="/proof" className="mt-5 inline-block text-[14px] font-semibold text-[#0176D3] hover:underline">
            See the product map
          </Link>
        </div>
      </section>

      <section className="border-y border-[#D9E4EF] bg-white py-20 md:py-24">
        <div className="mx-auto flex max-w-[1280px] flex-col items-start justify-between gap-6 px-5 sm:px-8 lg:flex-row lg:items-center lg:px-12">
          <div>
            <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#0176D3]">Evaluation</p>
            <h2 className="mt-3 text-[28px] font-semibold tracking-[-0.02em] text-[#032D60]">Pricing is a conversation about the work.</h2>
            <p className="mt-2 max-w-xl text-[15px] leading-[1.6] text-[#33465B]">
              Published tiers are on the pricing page. Proof shows the product shape, not invented results.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <EnterpriseButton href="/pricing">See pricing</EnterpriseButton>
            <EnterpriseButton href="/contact?intent=demo" variant="secondary">Book a demo</EnterpriseButton>
          </div>
        </div>
      </section>

      <section className="bg-[#032D60] py-20 md:py-24">
        <div className="mx-auto flex max-w-[1280px] flex-col items-start justify-between gap-4 px-5 sm:px-8 lg:flex-row lg:items-center lg:px-12">
          <div>
            <h2 className="text-[24px] font-semibold tracking-[-0.02em] text-white">See SpineWorkspace on your work.</h2>
            <p className="mt-1 max-w-xl text-[15px] text-white/80">
              Spine InnovLabs builds SpineWorkspace, the business-context workspace where humans and AI work together.
            </p>
          </div>
          <EnterpriseButton href="/contact?intent=demo">Book a demo</EnterpriseButton>
        </div>
      </section>
    </div>
  );
}
