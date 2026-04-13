"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ShieldCheck, Eye, Edit3, FileText, AlertTriangle } from "lucide-react";

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

const governanceFeatures = [
  {
    icon: Eye,
    title: "Proposed Action Queue",
    desc: "All AI suggestions await your approval with full Entity 360 context attached. You see why the Twin proposed the action, which Spine entities triggered it, and what the downstream impact will be.",
  },
  {
    icon: AlertTriangle,
    title: "Impact Preview",
    desc: 'Visual confirmation showing exactly which systems will be affected before you approve. "This will update Salesforce, send a Slack notification, and create an Asana task." No surprises.',
  },
  {
    icon: ShieldCheck,
    title: "Confidence Scoring",
    desc: "Twin Trigger Score visualization showing the confidence threshold at the moment of proposal. Low-confidence signals are quarantined before reaching the queue — you only see what the system is sure about.",
  },
  {
    icon: Edit3,
    title: "Edit Before Execute",
    desc: "Modify AI-drafted content before the Truth Boundary allows passage to execution. Change the email copy, adjust the field value, reschedule the task — then approve the edited version.",
  },
];

const safetyMechanisms = [
  { label: "Cross-Contamination Prevention", desc: "AI cannot access unauthorized departments or contexts. Contextual Firewalling enforced at the Spine level — not a UI restriction." },
  { label: "Immutable Audit Trail", desc: "Append-only log of every approval decision and resulting action. Every 'yes', 'no', and edit is timestamped, signed, and traceable." },
  { label: "Emergency Override", desc: "Traceable exception handling with mandatory governance logging. Even override actions create a full audit record — no silent bypasses." },
];

export function TruthBoundaryContent() {
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
            Product · Truth Boundary
          </motion.div>
          <motion.h1
            {...heroFade(0.22)}
            className="text-[44px] font-semibold leading-[1.08] tracking-[-0.05em] text-white sm:text-[64px]"
          >
            AI identifies.{" "}
            <span className="text-primary">Humans authorize.</span>
          </motion.h1>
          <motion.p
            {...heroFade(0.38)}
            className="mx-auto mt-7 max-w-xl text-[17px] font-medium leading-[1.55] tracking-[-0.02em] text-white/50"
          >
            The strategic utility layer ensuring AI identifies triggers but
            humans authorize execution. The primary architectural constraint
            preventing black-box AI implementations — built into the system,
            not bolted on.
          </motion.p>
          <motion.div {...heroFade(0.5)} className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Link href="/contact?intent=demo" className="inline-flex h-11 items-center rounded-full bg-primary px-6 text-[14px] font-semibold tracking-[-0.02em] text-white transition-opacity hover:opacity-90">
              See the approval interface →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Core Mandate */}
      <section className="arvio-section dark-section">
        <div className="mx-auto max-w-[1100px]">
          <motion.div {...fade(0)} className="mx-auto max-w-2xl text-center mb-12">
            <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-primary mb-3">Approval-Driven Execution</p>
            <h2 className="section-heading">Three mandates. <span className="text-primary">All architectural.</span></h2>
          </motion.div>
          <div className="grid gap-5 sm:grid-cols-3 max-w-3xl mx-auto">
            {[
              { title: "Mandatory Human Verification", desc: "Every AI-initiated action that modifies data or initiates external communication requires explicit human 'OK'. No exceptions, no auto-approvals, no bypass." },
              { title: "Absolute Truth Boundary", desc: "AI operations restricted to validated SpineVault data. The Twin cannot reason on data that hasn't passed the 8-stage normalization pipeline." },
              { title: "Data Sovereignty", desc: '"Your data, your rules." Total organizational ownership of ontological models. You define what the AI can and cannot access — not the platform.' },
            ].map(({ title, desc }, i) => (
              <motion.div key={title} {...fade(i * 0.07)} className="arvio-card p-6">
                <ShieldCheck className="mb-3 h-5 w-5 text-primary" />
                <h3 className="text-[14px] font-bold tracking-[-0.03em] text-foreground mb-2">{title}</h3>
                <p className="text-[13px] font-medium leading-[1.65] text-muted-foreground">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Governance Interface */}
      <section className="arvio-section dark-section">
        <div className="mx-auto max-w-[1100px]">
          <motion.div {...fade(0)} className="mx-auto max-w-2xl text-center mb-12">
            <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-primary mb-3">Governance Interface</p>
            <h2 className="section-heading">The approval queue, <span className="text-primary">in full context</span></h2>
          </motion.div>
          <div className="grid gap-5 sm:grid-cols-2">
            {governanceFeatures.map(({ icon: Icon, title, desc }, i) => (
              <motion.div key={title} {...fade(i * 0.07)} className="arvio-card p-7">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl" style={{ background: "var(--gradient-primary-icon)" }}>
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-[16px] font-semibold tracking-[-0.03em] text-foreground">{title}</h3>
                <p className="mt-2 text-[13px] font-medium leading-[1.65] text-muted-foreground">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Mechanisms */}
      <section className="arvio-section dark-section" style={{ backgroundColor: "rgb(8, 7, 14)" }}>
        <div className="mx-auto max-w-[1100px]">
          <motion.div {...fade(0)} className="mx-auto max-w-2xl text-center mb-12">
            <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-primary mb-3">Safety Mechanisms</p>
            <h2 className="text-[36px] font-semibold leading-[1.12] tracking-[-0.05em] text-white sm:text-[44px]">
              Every guardrail is <span className="text-primary">structural</span>
            </h2>
          </motion.div>
          <div className="space-y-4 max-w-2xl mx-auto">
            {safetyMechanisms.map(({ label, desc }, i) => (
              <motion.div key={label} {...fade(i * 0.07)} className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-6">
                <div className="flex items-start gap-4">
                  <FileText className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <h3 className="text-[15px] font-semibold tracking-[-0.03em] text-white">{label}</h3>
                    <p className="mt-1.5 text-[13px] font-medium leading-[1.6] text-white/45">{desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div {...fade(0.2)} className="mt-8 text-center">
            <Link href="/platform/security" className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-primary hover:opacity-80">
              Platform security architecture →
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
