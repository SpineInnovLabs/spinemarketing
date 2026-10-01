"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PUBLIC_SOLUTIONS, marketingPathForSolution } from "@/lib/solution-taxonomy";
import { EvidencePanel, EnterpriseButton, KpiBlock } from "./enterprise";
import { IntegrationLogoStrip } from "./integration-logo-strip";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { type: "spring" as const, damping: 20, stiffness: 60, delay },
});

const fadeInView = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { type: "spring" as const, damping: 20, stiffness: 60, delay },
});

export function EnterpriseHome() {
  return (
    <div className="bg-white text-[#181818]">
      <section className="border-b border-[#E5E5E5] pt-[108px]">
        <div className="mx-auto grid max-w-[1120px] gap-10 px-6 py-14 md:grid-cols-[1.2fr_0.8fr] md:px-8">
          <div>
            <motion.p {...fadeUp(0.05)} className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#0176D3]">
              SpineWorkspace by Spine InnovLabs
            </motion.p>
            <motion.h1
              {...fadeUp(0.15)}
              className="mt-3 max-w-[16ch] text-[40px] font-semibold leading-[1.08] tracking-[-0.03em] text-[#032D60] sm:text-[48px]"
            >
              Bring people, AI, and business context into the same workspace.
            </motion.h1>
            <motion.p {...fadeUp(0.25)} className="mt-4 max-w-xl text-[17px] leading-[1.6] text-[#444]">
              SpineWorkspace is the business-context workspace where humans and AI work together—on goals, work, evidence, and continuity—using the tools and hosts you already run.
            </motion.p>
            <motion.div {...fadeUp(0.35)} className="mt-8 flex flex-wrap gap-3">
              <EnterpriseButton href="/contact?intent=demo">Book a demo</EnterpriseButton>
              <EnterpriseButton href="/solutions" variant="secondary">
                Enter by function
              </EnterpriseButton>
            </motion.div>
            <motion.div {...fadeUp(0.45)} className="mt-8 grid gap-3 sm:grid-cols-3">
              <KpiBlock label="Context" value="Shared" detail="Goals, work, and evidence in one governed layer." />
              <KpiBlock label="AI role" value="Coworker" detail="The Twin starts from context, not a blank prompt." />
              <KpiBlock label="Control" value="Human" detail="Proposals stay proposals until someone with authority acts." />
            </motion.div>
          </div>
          <motion.div {...fadeUp(0.3)}>
            <EvidencePanel
              title="What the workspace holds"
              items={[
                { label: "Business context", value: "Goals, KPIs, customers, decisions, and history" },
                { label: "Work", value: "Queues, handoffs, and next actions by role" },
                { label: "Evidence", value: "Linked to source systems—not model confidence" },
                { label: "Host entry", value: "Land on your function, then see the full platform" },
              ]}
            />
          </motion.div>
        </div>
      </section>

      <IntegrationLogoStrip subtitle="70+ connectors flow into Spine Fabric — no migration required." />

      <section className="bg-[#F3F6F9] py-14">
        <div className="mx-auto max-w-[1120px] px-6 md:px-8">
          <motion.div {...fadeInView(0)}>
            <h2 className="text-[13px] font-bold uppercase tracking-[0.08em] text-[#032D60]">Start from your host</h2>
            <p className="mt-2 max-w-2xl text-[15px] leading-[1.6] text-[#444]">
              Marketplace and host entry is the front door. Each page explains the function in buyer language and points to the matching SpineWorkspace projection.
            </p>
          </motion.div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {PUBLIC_SOLUTIONS.slice(0, 6).map((solution, i) => (
              <motion.div key={solution.id} {...fadeInView(i * 0.06)}>
                <Link
                  href={marketingPathForSolution(solution.slug)}
                  className="group block rounded-md border border-[#E5E5E5] bg-white p-4 shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#0176D3] hover:shadow-[0_4px_12px_rgba(1,118,211,0.08)]"
                >
                  <div className="text-[15px] font-semibold text-[#032D60] transition-colors group-hover:text-[#0176D3]">
                    {solution.name}
                  </div>
                  <p className="mt-1 text-[13px] leading-[1.5] text-[#444]">{solution.headline}</p>
                </Link>
              </motion.div>
            ))}
          </div>
          <motion.div {...fadeInView(0.2)}>
            <Link href="/solutions" className="mt-5 inline-block text-[14px] font-semibold text-[#0176D3] hover:underline">
              View all functional solutions
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto grid max-w-[1120px] gap-8 px-6 md:grid-cols-2 md:px-8">
          <motion.div {...fadeInView(0)}>
            <h2 className="text-[28px] font-semibold tracking-[-0.03em] text-[#032D60]">Work is fragmented. Chat is not the fix.</h2>
            <p className="mt-3 text-[16px] leading-[1.65] text-[#444]">
              Teams already jump across CRM, mail, tickets, and documents. A new chat window does not share that context. SpineWorkspace puts humans and AI on the same business picture, then resolves the right capability for the task.
            </p>
          </motion.div>
          <div className="grid gap-3">
            {[
              ["Workbench", "Role-aware views of goals, KPIs, and work.", "/adaptive-workspace"],
              ["Twin", "A coworker that gathers context before it helps.", "/twin"],
              ["Governance", "Availability is not authority. Humans stay accountable.", "/governance"],
            ].map(([title, body, href], i) => (
              <motion.div key={title} {...fadeInView(i * 0.08)}>
                <Link
                  href={href}
                  className="group block rounded-md border border-[#E5E5E5] p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#0176D3] hover:shadow-[0_4px_12px_rgba(1,118,211,0.06)]"
                >
                  <div className="text-[15px] font-semibold text-[#032D60] transition-colors group-hover:text-[#0176D3]">{title}</div>
                  <p className="mt-1 text-[14px] text-[#444]">{body}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[#E5E5E5] bg-[#032D60] py-12 text-white">
        <motion.div
          {...fadeInView(0)}
          className="mx-auto flex max-w-[1120px] flex-col items-start justify-between gap-4 px-6 md:flex-row md:items-center md:px-8"
        >
          <div>
            <h2 className="text-[24px] font-semibold tracking-[-0.02em]">See SpineWorkspace on your work.</h2>
            <p className="mt-1 text-[15px] text-white/75">A short demo on your function, your hosts, and your approval boundaries.</p>
          </div>
          <EnterpriseButton href="/contact?intent=demo">Book a demo</EnterpriseButton>
        </motion.div>
      </section>
    </div>
  );
}
