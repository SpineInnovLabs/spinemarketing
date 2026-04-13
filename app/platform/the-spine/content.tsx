"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Database, Shield, Zap, GitBranch, RefreshCw } from "lucide-react";

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

const coreFunctions = [
  {
    icon: Zap,
    title: "Unified Adaptive Connectivity",
    body: "Integrates every internal and external tool into a single execution layer. Treats every input as a connector — SaaS tools, AI services, MCP (Model Context Protocol), and webhooks all feed into one adaptive normalization layer.",
  },
  {
    icon: Shield,
    title: "Contextual Firewalling",
    body: "Filters data by industry and department before it reaches the user. A Sales Twin does not ingest Engineering context unless specifically authorized. Data is industry-filtered and department-relevant before surfacing in any Workspace view.",
  },
  {
    icon: RefreshCw,
    title: "Data Normalization",
    body: "Converts raw tool outputs into the universal schema required by Workspace views. Handles schema drift automatically — when Salesforce changes its API, the Spine schema remains constant; only the connector mapping updates.",
  },
  {
    icon: GitBranch,
    title: "Entity 360 Assembly",
    body: "The de-siloed master record. Queryable in sub-100ms, the Spine assembles CRM + Billing + Support + Product + Communication data into living operational graphs: Account → Contacts → Deals → Tickets → Invoices.",
  },
];

const pipelineStages = [
  { num: "1", stage: "Ingest", fn: "API polling, webhooks, streaming events, file drops" },
  { num: "2", stage: "Validate", fn: "Schema checking, auth verification, payload integrity" },
  { num: "3", stage: "Parse", fn: "Extract entities from vendor-specific formats" },
  { num: "4", stage: "Normalize", fn: "Map to canonical Spine schema — Account, Contact, Deal, Ticket, Invoice, Project" },
  { num: "5", stage: "Deduplicate", fn: "Merge logic, conflict resolution, golden record creation" },
  { num: "6", stage: "Enrich", fn: "Add metadata, relationships, temporal markers" },
  { num: "7", stage: "Persist", fn: "Write to SpineVault with full versioning — point-in-time reconstruction" },
  { num: "8", stage: "Emit", fn: "Trigger downstream events, update Workspace views, notify Cognitive Layer" },
];

export function TheSpineContent() {
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
            Platform · The Spine
          </motion.div>
          <motion.h1
            {...heroFade(0.22)}
            className="text-[44px] font-semibold leading-[1.08] tracking-[-0.05em] text-white sm:text-[64px]"
          >
            SpineVault —{" "}
            <span className="text-primary">the truth layer</span>
          </motion.h1>
          <motion.p
            {...heroFade(0.38)}
            className="mx-auto mt-7 max-w-xl text-[17px] font-medium leading-[1.55] tracking-[-0.02em] text-white/50"
          >
            Unlike a data warehouse (analytics) or iPaaS (movement), the
            SpineVault is the canonical residence where organizational truth
            survives vendor changes. Knowledge Memory in a state of constant readiness.
          </motion.p>
        </div>
      </section>

      <section className="arvio-section">
        <div className="mx-auto max-w-[1100px]">
          <motion.div {...fade(0)} className="mx-auto max-w-2xl text-center mb-12">
            <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-primary mb-3">Core Architectural Functions</p>
            <h2 className="section-heading">Four things the Spine does <span className="text-primary">that nothing else does</span></h2>
          </motion.div>
          <div className="grid gap-5 sm:grid-cols-2">
            {coreFunctions.map(({ icon: Icon, title, body }, i) => (
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

      <section className="arvio-section bg-muted">
        <div className="mx-auto max-w-[1100px]">
          <motion.div {...fade(0)} className="mx-auto max-w-2xl text-center mb-10">
            <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-primary mb-3">8-Stage Normalization</p>
            <h2 className="section-heading">Raw data → <span className="text-primary">Spine truth</span></h2>
          </motion.div>
          <motion.div {...fade(0.1)} className="overflow-hidden rounded-2xl border border-border bg-background">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="px-5 py-3.5 text-left text-[11px] font-bold uppercase tracking-[0.1em] text-primary w-12">#</th>
                  <th className="px-5 py-3.5 text-left text-[11px] font-bold uppercase tracking-[0.1em] text-primary w-[22%]">Stage</th>
                  <th className="px-5 py-3.5 text-left text-[11px] font-bold uppercase tracking-[0.1em] text-primary">Function</th>
                </tr>
              </thead>
              <tbody>
                {pipelineStages.map(({ num, stage, fn }, i) => (
                  <tr key={stage} className={i < pipelineStages.length - 1 ? "border-b border-border/40" : ""}>
                    <td className="px-5 py-4 text-[12px] font-bold text-primary/50">{num}</td>
                    <td className="px-5 py-4 text-[13px] font-bold tracking-[-0.02em] text-foreground">{stage}</td>
                    <td className="px-5 py-4 text-[13px] font-medium text-muted-foreground">{fn}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
          <motion.div {...fade(0.2)} className="mt-6 text-center">
            <p className="text-[13px] font-medium text-muted-foreground">
              By stage 8, scattered tool data has become <strong className="text-foreground">queryable canonical truth</strong> — available to every Workspace view and every AI session in under 100ms.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="arvio-section" style={{ backgroundColor: "rgb(8, 7, 14)" }}>
        <div className="mx-auto max-w-[680px] px-4 text-center">
          <motion.div {...fade(0)}>
            <Database className="mx-auto mb-4 h-7 w-7 text-primary" />
            <h2 className="text-[32px] font-semibold tracking-[-0.05em] text-white">
              Not a cache. <span className="text-primary">The system of record.</span>
            </h2>
            <p className="mx-auto mt-4 text-[15px] font-medium leading-[1.6] text-white/40">
              The SpineVault survives vendor changes, API deprecations, and tool migrations. Your canonical truth is yours — not locked in any vendor schema.
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <Link href="/platform/flows" className="inline-flex h-10 items-center rounded-full border border-white/15 px-5 text-[13px] font-semibold text-white/60 hover:border-white/30 hover:text-white transition-colors">
                How data flows →
              </Link>
              <Link href="/platform/security" className="inline-flex h-10 items-center rounded-full border border-white/15 px-5 text-[13px] font-semibold text-white/60 hover:border-white/30 hover:text-white transition-colors">
                Security & governance →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
