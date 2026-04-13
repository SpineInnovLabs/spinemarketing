"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Layers, CheckCircle2 } from "lucide-react";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { type: "spring" as const, damping: 18, stiffness: 70, delay },
});

const heroFade = (delay = 0) => ({
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { type: "spring" as const, damping: 16, mass: 1, stiffness: 52, delay },
});

const domainViews = [
  { view: "Executive Oversight", fn: "High-level state summaries, cross-departmental alignment", user: "Leadership, CXOs" },
  { view: "Business Operations", fn: "Workflow optimization, bottleneck detection, process health", user: "COOs, Operations Leaders" },
  { view: "Customer Success", fn: "Relationship-mapped health scores, retention signals", user: "CSMs, Account Managers" },
  { view: "Account Success", fn: "Full tech stack visibility per account, proactive churn mitigation", user: "Strategic Account Managers" },
  { view: "Technical Integrity & DevOps", fn: "Spine health monitoring, connector stability, data flow diagnostics", user: "Engineering, DevOps" },
  { view: "Regional & SMB-Specific", fn: "Geographically-filtered views, local regulatory context", user: "Regional Managers, Local Operators" },
  { view: "Revenue Operations", fn: "Pipeline governance, forecasting, quote-to-cash velocity", user: "RevOps, Sales Leaders" },
  { view: "Finance & Collections", fn: "Cash flow, runway, revenue risk correlation", user: "CFOs, Finance Teams" },
  { view: "Professional Services", fn: "Project delivery, utilization, margin protection", user: "Project Managers, Services Leaders" },
  { view: "Personal Ops", fn: "Individual context management, cross-tool task aggregation", user: "Individual Contributors, Managers" },
  { view: "Cross-Functional Alignment", fn: "Inter-departmental shared views, collaborative approval queues", user: "Cross-functional Teams" },
  { view: "Admin & Governance", fn: "Truth Boundary configuration, permission matrices, audit oversight", user: "Admins, Compliance Officers" },
];

export function WorkbenchContent() {
  return (
    <>
      <section
        className="relative overflow-hidden pb-28 pt-40"
        style={{ backgroundColor: "rgb(8, 7, 14)" }}
      >
        <div className="mx-auto max-w-[820px] px-4 text-center">
          <motion.div
            {...heroFade(0.1)}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[13px] font-semibold text-white/60"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Product · Workbench
          </motion.div>
          <motion.h1
            {...heroFade(0.22)}
            className="text-[44px] font-semibold leading-[1.08] tracking-[-0.05em] text-white sm:text-[64px]"
          >
            Layer 1: The{" "}
            <span className="text-primary">Domain-Specific Workspace</span>
          </motion.h1>
          <motion.p
            {...heroFade(0.38)}
            className="mx-auto mt-7 max-w-xl text-[17px] font-medium leading-[1.55] tracking-[-0.02em] text-white/50"
          >
            Schema-driven architecture meets human operational flow. Twelve role-aware views
            that auto-reconstruct when new tools are connected — no code changes required.
            Enforces data integrity before information reaches the Intelligence Layer.
          </motion.p>
          <motion.div {...heroFade(0.5)} className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Link href="/contact?intent=demo" className="inline-flex h-11 items-center rounded-full bg-primary px-6 text-[14px] font-semibold tracking-[-0.02em] text-white transition-opacity hover:opacity-90">
              See the Workbench →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Key Characteristics */}
      <section className="arvio-section">
        <div className="mx-auto max-w-[1100px]">
          <motion.div {...fade(0)} className="mx-auto max-w-2xl text-center mb-12">
            <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-primary mb-3">Key Characteristics</p>
            <h2 className="section-heading">Not a dashboard. <span className="text-primary">An operating environment.</span></h2>
          </motion.div>
          <div className="grid gap-5 sm:grid-cols-3 max-w-3xl mx-auto">
            {[
              {
                title: "Schema-Driven",
                desc: "Backend ingests new SaaS tools and auto-reconstructs the UI to map data to existing views. No code changes when you add a new connector.",
              },
              {
                title: "Validation Layer",
                desc: "Every data point conforms to organizational schema before AI processing. Garbage data cannot reach the Intelligence Layer — it is flagged and quarantined first.",
              },
              {
                title: "'So What?' Elimination",
                desc: "Automated reconciliation of disparate records. Users focus on decisions, not data cleaning. Conflict resolution surfaces automatically with resolution options.",
              },
            ].map(({ title, desc }, i) => (
              <motion.div key={title} {...fade(i * 0.07)} className="arvio-card p-6">
                <CheckCircle2 className="mb-3 h-5 w-5 text-primary" />
                <h3 className="text-[15px] font-semibold tracking-[-0.03em] text-foreground mb-2">{title}</h3>
                <p className="text-[13px] font-medium leading-[1.65] text-muted-foreground">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 12 Domain Views */}
      <section className="arvio-section bg-muted">
        <div className="mx-auto max-w-[1100px]">
          <motion.div {...fade(0)} className="mx-auto max-w-2xl text-center mb-10">
            <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-primary mb-3">Twelve Domain-Specific Views</p>
            <h2 className="section-heading">Every role. <span className="text-primary">Its own view.</span></h2>
          </motion.div>
          <motion.div {...fade(0.1)} className="overflow-hidden rounded-2xl border border-border bg-background">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="px-5 py-3.5 text-left text-[11px] font-bold uppercase tracking-[0.1em] text-primary w-[32%]">View</th>
                  <th className="px-5 py-3.5 text-left text-[11px] font-bold uppercase tracking-[0.1em] text-primary">Function</th>
                  <th className="px-5 py-3.5 text-left text-[11px] font-bold uppercase tracking-[0.1em] text-primary hidden lg:table-cell">Primary User</th>
                </tr>
              </thead>
              <tbody>
                {domainViews.map(({ view, fn, user }, i) => (
                  <tr key={view} className={i < domainViews.length - 1 ? "border-b border-border/40" : ""}>
                    <td className="px-5 py-3.5 text-[13px] font-semibold tracking-[-0.02em] text-foreground">{view}</td>
                    <td className="px-5 py-3.5 text-[13px] font-medium text-muted-foreground">{fn}</td>
                    <td className="px-5 py-3.5 text-[12px] font-medium text-muted-foreground/70 hidden lg:table-cell">{user}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      <section className="arvio-section" style={{ backgroundColor: "rgb(8, 7, 14)" }}>
        <div className="mx-auto max-w-[680px] px-4 text-center">
          <motion.div {...fade(0)}>
            <Layers className="mx-auto mb-4 h-7 w-7 text-primary" />
            <h2 className="text-[32px] font-semibold tracking-[-0.05em] text-white sm:text-[40px]">
              Layer 1 feeds <span className="text-primary">Layer 2</span>
            </h2>
            <p className="mx-auto mt-4 text-[15px] font-medium leading-[1.6] text-white/40">
              Every data point validated in the Workbench becomes available to the Intelligence Layer — the Digital Twin monitors the Spine continuously and surfaces signals only when confidence thresholds are met.
            </p>
            <Link href="/product/intelligence-layer" className="mt-6 inline-flex h-10 items-center rounded-full bg-primary px-5 text-[13px] font-semibold text-white transition-opacity hover:opacity-90">
              Explore the Intelligence Layer →
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
