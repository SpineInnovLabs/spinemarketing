"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Lock, FileText, Users } from "lucide-react";

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

const trustPillars = [
  {
    icon: ShieldCheck,
    title: "Zero Cross-Contamination",
    body: "AI operations restricted to validated SpineVault data. Contextual Firewalling prevents unauthorized data mixing across departments. A Sales Twin cannot access Engineering context unless explicitly authorized.",
  },
  {
    icon: FileText,
    title: "Immutable Audit Trail",
    body: "Append-only logs of every Spine write, Flow C decision, and Twin activation. Every Approve, Act, and Adjust is traceable back through the 8-stage pipeline to the original ingestion source.",
  },
  {
    icon: Lock,
    title: "State Verification",
    body: "Flow Trace ensures every technical execution is traceable to specific business outcomes. Stakeholders can verify that every backend data movement drives a documented functional purpose.",
  },
  {
    icon: Users,
    title: "Data Sovereignty",
    body: '"Your data, your rules." Organizations define the precise parameters of AI interaction. Total organizational ownership of ontological models — no vendor lock-in to truth schemas.',
  },
];

const compliance = [
  { label: "Encryption at rest", value: "AES-256" },
  { label: "Encryption in transit", value: "TLS 1.3" },
  { label: "Compliance alignment", value: "SOC 2 Type II" },
  { label: "PII protection", value: "Field-level encryption" },
  { label: "Data residency", value: "Regional options available" },
  { label: "Access control", value: "SSO/SAML + RBAC" },
];

export function PlatformSecurityContent() {
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
            Platform · Security
          </motion.div>
          <motion.h1
            {...heroFade(0.22)}
            className="text-[44px] font-semibold leading-[1.08] tracking-[-0.05em] text-white sm:text-[64px]"
          >
            The Truth Boundary is{" "}
            <span className="text-primary">architectural law</span>
          </motion.h1>
          <motion.p
            {...heroFade(0.38)}
            className="mx-auto mt-7 max-w-xl text-[17px] font-medium leading-[1.55] tracking-[-0.02em] text-white/50"
          >
            Not a policy. Not a configuration option. A hard-coded constraint
            that mandates every AI action touching organizational data requires
            explicit human authorization before execution.
          </motion.p>
        </div>
      </section>

      {/* Truth Boundary */}
      <section className="arvio-section">
        <div className="mx-auto max-w-[1100px]">
          <motion.div {...fade(0)} className="mx-auto max-w-2xl text-center mb-12">
            <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-primary mb-3">The Truth Boundary</p>
            <h2 className="section-heading">Hard-coded. <span className="text-primary">Non-bypassable.</span></h2>
          </motion.div>
          <div className="grid gap-5 sm:grid-cols-3 max-w-3xl mx-auto">
            {[
              { label: "Mandatory HITL", desc: "Every AI action that touches or moves organizational data requires explicit human 'OK' before execution." },
              { label: "Approval-Driven Execution", desc: "AI identifies triggers. Humans authorize execution via the TruthLayer governance membrane." },
              { label: "Data Sovereignty", desc: "Organizations define the precise parameters of AI interaction. Your rules. Your ontological models." },
            ].map(({ label, desc }, i) => (
              <motion.div key={label} {...fade(i * 0.07)} className="arvio-card p-6 text-center">
                <ShieldCheck className="mx-auto mb-3 h-6 w-6 text-primary" />
                <h3 className="text-[14px] font-bold tracking-[-0.03em] text-foreground mb-2">{label}</h3>
                <p className="text-[12px] font-medium leading-[1.6] text-muted-foreground">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Architecture */}
      <section className="arvio-section bg-muted">
        <div className="mx-auto max-w-[1100px]">
          <motion.div {...fade(0)} className="mx-auto max-w-2xl text-center mb-12">
            <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-primary mb-3">Trust Architecture</p>
            <h2 className="section-heading">Four layers of <span className="text-primary">trust infrastructure</span></h2>
          </motion.div>
          <div className="grid gap-5 sm:grid-cols-2">
            {trustPillars.map(({ icon: Icon, title, body }, i) => (
              <motion.div key={title} {...fade(i * 0.07)} className="arvio-card p-7">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl" style={{ background: "var(--gradient-primary-icon)" }}>
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-[16px] font-semibold tracking-[-0.03em] text-foreground">{title}</h3>
                <p className="mt-2 text-[13px] font-medium leading-[1.65] text-muted-foreground">{body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="arvio-section" style={{ backgroundColor: "rgb(8, 7, 14)" }}>
        <div className="mx-auto max-w-[1100px]">
          <motion.div {...fade(0)} className="mx-auto max-w-2xl text-center mb-10">
            <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-primary mb-3">Compliance Foundation</p>
            <h2 className="text-[36px] font-semibold leading-[1.12] tracking-[-0.05em] text-white sm:text-[44px]">
              Enterprise-grade <span className="text-primary">from day one</span>
            </h2>
          </motion.div>
          <motion.div {...fade(0.1)} className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 max-w-3xl mx-auto">
            {compliance.map(({ label, value }, i) => (
              <motion.div key={label} {...fade(i * 0.05)} className="rounded-xl border border-white/[0.06] bg-white/[0.03] p-5">
                <div className="text-[11px] font-bold uppercase tracking-[0.1em] text-primary/70 mb-1">{label}</div>
                <div className="text-[14px] font-semibold text-white">{value}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
