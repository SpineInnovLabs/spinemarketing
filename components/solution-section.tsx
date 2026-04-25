"use client";

import { ArrowRight, CheckCircle2, Play, Sparkles, UserCheck } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const keyPoints = [
  "One workspace for accounts, tasks, tickets, and signals.",
  "Every card is backed by Digital Memory — truth + context + AI session history.",
  "The Twin surfaces “FinanceFlow renewal at risk” with evidence from Salesforce, Zendesk, and Stripe in one view.",
  "You approve what happens next: updates to HubSpot, Jira, Slack, Salesforce, and more.",
];

function WorkspaceMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ type: "spring", damping: 20, stiffness: 70, delay: 0.12 }}
      whileHover={{ y: -5 }}
      className="overflow-hidden rounded-[24px] border border-white/10 bg-[#1d1d1d] shadow-[0_24px_80px_-50px_rgba(255,225,204,0.35)]"
    >
      <div className="flex h-12 items-center gap-2 border-b border-white/[0.06] bg-[#151515] px-5">
        <span className="h-3 w-3 rounded-full bg-white/10" />
        <span className="h-3 w-3 rounded-full bg-white/10" />
        <span className="h-3 w-3 rounded-full bg-white/10" />
        <span className="mx-auto text-[11px] font-medium tracking-[-0.02em] text-white/30">
          IntegrateWise / Workspace
        </span>
      </div>

      <div className="grid lg:grid-cols-[250px_1fr]">
        <aside className="hidden border-r border-white/[0.06] bg-[#181818] p-5 lg:block">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/30">
            Workspace
          </p>
          <div className="mt-4 space-y-2">
            {[
              "Overview",
              "Accounts",
              "Tickets",
              "Revenue",
            ].map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", damping: 18, stiffness: 90, delay: 0.18 + i * 0.07 }}
                className={`rounded-lg px-3 py-2 text-[13px] font-medium ${
                  i === 0
                    ? "border-l-2 border-[#FFE1CC] bg-[#FFE1CC]/10 text-white"
                    : "text-white/35"
                }`}
              >
                {item}
              </motion.div>
            ))}
          </div>

          <div className="mt-8 rounded-xl border border-[#FFE1CC]/20 bg-[#FFE1CC]/10 p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FFE1CC] text-[11px] font-bold text-[#111111]">
                AI
              </div>
              <span className="text-[13px] font-semibold text-white">Twin Status</span>
            </div>
            <p className="mt-3 text-[12px] font-medium leading-[1.6] text-white/45">
              I found a renewal risk tied to usage, support, and billing signals.
            </p>
          </div>
        </aside>

        <div className="p-5 md:p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div>
              <h3 className="text-[24px] font-semibold tracking-[-0.04em] text-white">
                Acme Corp - Renewal Strategy
              </h3>
              <p className="mt-1 text-[13px] font-medium text-white/35">
                Last updated 12 mins ago
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 rounded-lg border border-[#FFE1CC]/20 bg-[#FFE1CC] px-4 py-2 text-[12px] font-semibold text-[#111111]"
            >
              <Play className="h-3.5 w-3.5 fill-[#111111]" />
              Start Loop
            </motion.button>
          </div>

          <div className="mt-7 grid gap-4 sm:grid-cols-3">
            {[
              { label: "Health Score", value: "92/100", tone: "text-[#FFE1CC]" },
              { label: "Next Renewal", value: "14 days", tone: "text-white" },
              { label: "Open Tickets", value: "3", tone: "text-white" },
            ].map((metric, i) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", damping: 18, stiffness: 90, delay: 0.28 + i * 0.07 }}
                className="rounded-xl border border-white/10 bg-[#151515] p-4"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-white/30">
                  {metric.label}
                </p>
                <p className={`mt-2 text-[28px] font-semibold tracking-[-0.04em] ${metric.tone}`}>
                  {metric.value}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-5 rounded-xl border border-white/10 bg-[#151515] p-5">
            <div className="flex items-center gap-2 border-b border-white/[0.06] pb-4 text-[13px] font-semibold text-white">
              <Sparkles className="h-4 w-4 text-[#FFE1CC]" />
              AI Generated Brief
            </div>
            <p className="mt-4 text-[14px] font-medium leading-[1.8] text-white/50">
              Based on the last 5 interactions in Slack and the recent Zendesk ticket #402, the client is satisfied but concerned about API latency.
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {[
                "Slack #general · 2h ago",
                "Jira OPS-291 · linked",
                "Zendesk #402 · evidence",
              ].map((source, i) => (
                <motion.div
                  key={source}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: 0.42 + i * 0.07 }}
                  className="rounded-lg border border-white/[0.06] bg-white/[0.02] px-3 py-2 text-[11px] font-medium text-white/35"
                >
                  {source}
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", damping: 18, stiffness: 90, delay: 0.58 }}
            className="mt-5 flex flex-col gap-4 rounded-xl border border-[#FFE1CC]/20 bg-[#FFE1CC]/10 p-4 sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FFE1CC] text-[#111111]">
                <UserCheck className="h-4 w-4" />
              </div>
              <div>
                <div className="text-[14px] font-semibold text-[#FFE1CC]">Approval Required</div>
                <div className="text-[12px] font-medium text-white/40">Review the generated email draft before sending.</div>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="rounded-lg border border-white/10 bg-[#151515] px-4 py-2 text-[12px] font-semibold text-white/60 transition-colors hover:text-white">Edit</button>
              <button className="rounded-lg bg-[#FFE1CC] px-4 py-2 text-[12px] font-semibold text-[#111111] transition-opacity hover:opacity-90">Approve</button>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export function SolutionSection() {
  return (
    <section id="product-section" className="relative overflow-hidden border-t border-white/[0.05] py-24 md:py-32" style={{ background: "#111111" }}>
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-[10%] top-[20%] h-[420px] w-[520px] rounded-full opacity-[0.05] blur-[120px]" style={{ background: "radial-gradient(circle, #FFE1CC, transparent 70%)" }} />
      </div>
      <motion.div
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        className="absolute left-1/2 top-0 hidden h-16 origin-top border-l border-dashed border-white/10 md:block"
      />
      <div className="relative mx-auto max-w-[1120px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", damping: 20, stiffness: 70 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-[40px] font-semibold leading-[1.15] tracking-[-0.04em] text-white sm:text-[52px] lg:text-[56px]">
            What IntegrateWise can{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFE1CC] to-white">do for you.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-[17px] font-medium leading-[1.7] tracking-[-0.02em] text-white/50">
            A governed knowledge workspace where your AI Twin watches, suggests, and waits for your approval.
          </p>
        </motion.div>

        <div className="mt-14">
          <WorkspaceMockup />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ type: "spring", damping: 20, stiffness: 70, delay: 0.16 }}
          className="mx-auto mt-12 max-w-3xl rounded-[24px] border border-white/10 bg-[#1d1d1d] p-7 md:p-9"
        >
          <p className="text-[16px] font-medium leading-[1.8] text-white/55">
            The Workspace shows your accounts, revenue, and workflows in one place. Your Twin continuously reads from the Spine, detects risks and opportunities across tools, and proposes next actions — but nothing happens without your approval.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ type: "spring", damping: 20, stiffness: 70, delay: 0.22 }}
          className="mx-auto mt-8 grid max-w-5xl gap-4 md:grid-cols-2"
        >
          {keyPoints.map((point) => (
            <div key={point} className="flex gap-3 rounded-[18px] border border-white/10 bg-[#1d1d1d] p-5">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#FFE1CC]" />
              <p className="text-[14px] font-medium leading-[1.7] text-white/50">
                {point}
              </p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", damping: 20, stiffness: 70, delay: 0.28 }}
          className="mx-auto mt-12 max-w-2xl text-center"
        >
          <Link
            href="/product"
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#FFE1CC] to-white px-6 py-3 text-[14px] font-semibold text-[#111111] transition-opacity hover:opacity-90"
          >
            See how the Spine and Twin change your Monday morning
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
