"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { GitBranch, Zap, ArrowRight, Brain } from "lucide-react";

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

export function PlatformFlowsContent() {
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
            Platform · Flows
          </motion.div>
          <motion.h1
            {...heroFade(0.22)}
            className="text-[44px] font-semibold leading-[1.08] tracking-[-0.05em] text-white sm:text-[64px]"
          >
            Processing loops and{" "}
            <span className="text-primary">system dynamics</span>
          </motion.h1>
          <motion.p
            {...heroFade(0.38)}
            className="mx-auto mt-7 max-w-xl text-[17px] font-medium leading-[1.55] tracking-[-0.02em] text-white/50"
          >
            How data moves through the Platform. Two operational loops,
            one triage mechanism, and Twin Trigger Scoring that transforms
            the system from reactive to predictive.
          </motion.p>
        </div>
      </section>

      {/* Flow C */}
      <section className="arvio-section">
        <div className="mx-auto max-w-[1100px]">
          <motion.div {...fade(0)} className="mx-auto max-w-2xl text-center mb-12">
            <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-primary mb-3">Flow C</p>
            <h2 className="section-heading">The Triage Mechanism</h2>
            <p className="mt-4 text-[16px] font-medium leading-[1.55] text-muted-foreground">
              The gatekeeper determining whether incoming data should update Knowledge Memory passively — or trigger immediate Twin Activation.
              Flow C prevents unnecessary AI interruptions while ensuring critical signals reach the Digital Twin.
            </p>
          </motion.div>
          <motion.div {...fade(0.1)} className="grid gap-5 sm:grid-cols-2 max-w-2xl mx-auto">
            {[
              {
                icon: GitBranch,
                outcome: "Update Knowledge Memory",
                label: "Passive learning",
                desc: "Low-significance data — field updates, routine status changes, background sync events — flow silently into the Spine to enrich Knowledge Memory without interrupting the user.",
              },
              {
                icon: Zap,
                outcome: "Trigger Twin Activation",
                label: "Immediate action",
                desc: "High-significance signals — champion departure, usage cliff, overdue invoice + open renewal — cross the Twin Trigger Score threshold and surface as a Proposed Action for human approval.",
              },
            ].map(({ icon: Icon, outcome, label, desc }) => (
              <div key={outcome} className="arvio-card p-7">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl" style={{ background: "var(--gradient-primary-icon)" }}>
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <div className="text-[11px] font-bold uppercase tracking-[0.1em] text-primary mb-1">{label}</div>
                <h3 className="text-[16px] font-semibold tracking-[-0.03em] text-foreground">{outcome}</h3>
                <p className="mt-2 text-[13px] font-medium leading-[1.65] text-muted-foreground">{desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Flow A + B */}
      <section className="arvio-section bg-muted">
        <div className="mx-auto max-w-[1100px]">
          <motion.div {...fade(0)} className="mx-auto max-w-2xl text-center mb-12">
            <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-primary mb-3">System Data Flows</p>
            <h2 className="section-heading">Two loops. <span className="text-primary">One Spine.</span></h2>
          </motion.div>
          <div className="grid gap-6 lg:grid-cols-2">
            {[
              {
                id: "A",
                name: "Flow A: Tool → Truth",
                chain: "SaaS data → Connectors → SpineVault → Entity 360 → Twin monitoring",
                desc: "The fast loop. Raw tool data ingested via the 8-stage normalization pipeline, stored as canonical entities in the SpineVault, assembled into Entity 360 objects, and monitored continuously by the Digital Twin.",
                governed: "System-governed",
              },
              {
                id: "B",
                name: "Flow B: Context → Truth",
                chain: "AI Session Summaries → Flow C Triage → Knowledge UI validation → SpineVault update → Refined Twin reasoning",
                desc: "The slow loop. Human interactions — calls, emails, decisions — summarized by AI, triaged by Flow C, validated in the Knowledge UI, and stored as structured knowledge that refines future Twin reasoning.",
                governed: "Human-governed",
              },
            ].map(({ id, name, chain, desc, governed }) => (
              <motion.div key={id} {...fade(id === "A" ? 0.06 : 0.12)} className="arvio-card p-7">
                <div className="mb-3 flex items-center justify-between">
                  <div className="text-[11px] font-bold uppercase tracking-[0.1em] text-primary">{name}</div>
                  <span className="rounded-full border border-border/60 bg-muted px-2.5 py-0.5 text-[10px] font-semibold text-muted-foreground">{governed}</span>
                </div>
                <div className="mb-4 rounded-xl border border-border/50 bg-muted p-3">
                  <p className="text-[11px] font-mono leading-[1.7] text-muted-foreground">{chain}</p>
                </div>
                <p className="text-[13px] font-medium leading-[1.65] text-muted-foreground">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Twin Trigger Scoring */}
      <section className="arvio-section" style={{ backgroundColor: "rgb(8, 7, 14)" }}>
        <div className="mx-auto max-w-[1100px]">
          <motion.div {...fade(0)} className="mx-auto max-w-2xl text-center">
            <Brain className="mx-auto mb-4 h-7 w-7 text-primary" />
            <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-primary mb-3">Twin Trigger Scoring</p>
            <h2 className="text-[36px] font-semibold leading-[1.12] tracking-[-0.05em] text-white sm:text-[44px]">
              From reactive to <span className="text-primary">predictive</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-[16px] font-medium leading-[1.6] text-white/45">
              Algorithmic threshold that evaluates Entity 360 changes and determines when a Signal has reached sufficient significance to propose a Proposed Action. Not a notification system — a prediction engine.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link href="/product/intelligence-layer" className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-primary hover:opacity-80">
                See the Intelligence Layer <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
