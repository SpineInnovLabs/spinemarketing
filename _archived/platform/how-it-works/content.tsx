"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  GitBranch, Zap, ArrowRight, Database, FileText,
  MessageSquare, GitMerge, BookOpen, Shield, CheckCircle, Eye
} from "lucide-react";

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

const dataTypes = [
  {
    icon: Database,
    accent: "rgba(59,130,246,0.12)",
    iconColor: "#3b82f6",
    label: "Structured",
    title: "Entity 360 — CRM, billing, support, usage",
    desc: "Every record normalized into one canonical object.",
    items: ["Account → Contacts → Deals → Tickets → Invoices", "Cross-tool canonical schema", "Automatic relation graphs"],
  },
  {
    icon: FileText,
    accent: "rgba(139,92,246,0.12)",
    iconColor: "#8b5cf6",
    label: "Unstructured",
    title: "Documents, threads, transcripts",
    desc: "PDFs, emails, and conversations parsed as identity data.",
    items: ["MCP document ingestion", "Semantic NLP extraction", "Communication thread linking"],
  },
  {
    icon: MessageSquare,
    accent: "rgba(168,85,247,0.12)",
    iconColor: "#a855f7",
    label: "AI Chat",
    title: "Sessions grounded in Entity 360",
    desc: "Every session links to real canonical records.",
    items: ["Session-to-entity grounding", "Knowledge extraction pipeline", "Flow C Triage routing"],
  },
  {
    icon: GitMerge,
    accent: "rgba(245,158,11,0.12)",
    iconColor: "#f59e0b",
    label: "Resolution",
    title: "Cross-tool entity matching and dedup",
    desc: "Automatic matching with confidence scoring and human review.",
    items: ["Multi-signal match scoring", "0–100 confidence index", "Manual resolution UI"],
  },
];

const memoryCards = [
  {
    icon: Zap,
    accent: "#8b5cf6",
    bg: "rgba(139,92,246,0.12)",
    title: "Zero-Shot Context",
    desc: "Grows daily without model retraining. Operates immediately.",
  },
  {
    icon: BookOpen,
    accent: "#3b82f6",
    bg: "rgba(59,130,246,0.12)",
    title: "Beyond RAG",
    desc: "Persistent, evolving narrative — not stale snippets.",
  },
  {
    icon: GitMerge,
    accent: "#10b981",
    bg: "rgba(16,185,129,0.12)",
    title: "Entity-Anchored",
    desc: "All knowledge linked to canonical Spine entities.",
  },
];

const truthLayerCards = [
  {
    title: "Approval Topology",
    desc: "Configurable routing for human verification by role.",
  },
  {
    title: "Audit Immutability",
    desc: "Append-only logs — every write is traceable.",
  },
  {
    title: "Confidence Scoring",
    desc: "0–100 scoring before human presentation.",
  },
  {
    title: "Governance Enforcement",
    desc: "AI cannot write without human approval. Architectural mandate.",
  },
];

export function PlatformHowItWorksContent() {
  return (
    <>
      <section className="relative overflow-hidden pb-28 pt-40 bg-dark-section">
        <div className="mx-auto max-w-[820px] px-4 text-center">
          <motion.div
            {...heroFade(0.1)}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[13px] font-semibold text-white/60"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Platform · How it Works
          </motion.div>
          <motion.h1
            {...heroFade(0.22)}
            className="text-[44px] font-semibold leading-[1.08] tracking-[-0.05em] text-white sm:text-[64px]"
          >
            Data flows, identity, and{" "}
            <span className="text-primary">knowledge</span>
          </motion.h1>
          <motion.p
            {...heroFade(0.38)}
            className="mx-auto mt-7 max-w-xl text-[17px] font-medium leading-[1.55] tracking-[-0.02em] text-white/50"
          >
            Two loops, one triage mechanism, and a knowledge base that grows every day.
          </motion.p>
        </div>
      </section>

      <section className="arvio-section dark-section">
        <div className="mx-auto max-w-[1100px]">
          <motion.div {...fade(0)} className="mx-auto max-w-2xl text-center mb-12">
            <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-primary mb-3">Flow C</p>
            <h2 className="section-heading">The Triage Mechanism</h2>
            <p className="mt-4 text-[16px] font-medium leading-[1.55] text-muted-foreground">
              Decides whether data updates memory passively or triggers Twin Activation.
            </p>
          </motion.div>
          <motion.div {...fade(0.1)} className="grid gap-5 sm:grid-cols-2 max-w-2xl mx-auto">
            {[
              {
                icon: GitBranch,
                outcome: "Update Knowledge Memory",
                label: "Passive learning",
                desc: "Low-significance data enriches memory silently.",
              },
              {
                icon: Zap,
                outcome: "Trigger Twin Activation",
                label: "Immediate action",
                desc: "High-significance signals surface as Proposed Actions.",
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

      <section className="arvio-section dark-section">
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
                chain: "SaaS data → Connectors → Spine → Entity 360 → Twin monitoring",
                desc: "Raw tool data normalized and stored as canonical entities.",
                governed: "System-governed",
              },
              {
                id: "B",
                name: "Flow B: Context → Truth",
                chain: "AI Session Summaries → Flow C Triage → Knowledge UI validation → Spine update → Refined Twin reasoning",
                desc: "Human interactions validated and stored as structured knowledge.",
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

      <section className="arvio-section dark-section">
        <div className="mx-auto max-w-[1100px]">
          <motion.div {...fade(0)} className="mx-auto max-w-2xl text-center mb-12">
            <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-primary mb-3">Three Data Paths</p>
            <h2 className="section-heading">Structured. Unstructured. <span className="text-primary">AI Sessions.</span></h2>
            <p className="mt-4 text-[16px] font-medium leading-[1.55] text-muted-foreground">
              All data becomes unified operational context.
            </p>
          </motion.div>
          <div className="grid gap-6 sm:grid-cols-2">
            {dataTypes.map((d, i) => (
              <motion.div
                key={d.label}
                {...fade(i * 0.07)}
                className="rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-7"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: d.accent }}>
                  <d.icon className="w-5 h-5" style={{ color: d.iconColor }} />
                </div>
                <div className="text-[11px] font-bold uppercase tracking-[0.1em] mb-2" style={{ color: d.iconColor }}>{d.label}</div>
                <h3 className="text-[17px] font-semibold tracking-[-0.03em] text-white mb-2">{d.title}</h3>
                <p className="text-[13px] font-medium leading-[1.65] text-white/50 mb-4">{d.desc}</p>
                <ul className="space-y-1.5">
                  {d.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-[12px] text-white/40">
                      <CheckCircle className="w-3 h-3 mt-0.5 text-primary/60 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="arvio-section dark-section">
        <div className="mx-auto max-w-[1100px]">
          <motion.div {...fade(0)} className="mx-auto max-w-2xl text-center mb-12">
            <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-primary mb-3">Knowledge Base</p>
            <h2 className="section-heading">Persistent memory. <span className="text-primary">Not stale retrieval.</span></h2>
          </motion.div>
          <div className="grid gap-5 sm:grid-cols-3">
            {memoryCards.map((m, i) => (
              <motion.div key={m.title} {...fade(i * 0.07)} className="arvio-card p-7 text-center">
                <div className="mx-auto w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: m.bg }}>
                  <m.icon className="w-5 h-5" style={{ color: m.accent }} />
                </div>
                <h3 className="text-[16px] font-semibold tracking-[-0.03em] text-foreground">{m.title}</h3>
                <p className="mt-2 text-[13px] font-medium leading-[1.65] text-muted-foreground">{m.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="arvio-section dark-section">
        <div className="mx-auto max-w-[900px]">
          <motion.div {...fade(0)} className="mx-auto max-w-2xl text-center mb-10">
            <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-primary mb-3">Truth Layer</p>
            <h2 className="section-heading">Governance <span className="text-primary">by design</span></h2>
          </motion.div>
          <div className="grid gap-4 sm:grid-cols-2">
            {truthLayerCards.map((c, i) => (
              <motion.div key={c.title} {...fade(i * 0.06)} className="arvio-card p-6">
                <div className="flex items-start gap-3">
                  <Shield className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                  <div>
                    <h3 className="text-[15px] font-semibold tracking-[-0.02em] text-foreground">{c.title}</h3>
                    <p className="mt-1 text-[13px] font-medium leading-[1.6] text-muted-foreground">{c.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="arvio-section dark-section bg-dark-section">
        <div className="mx-auto max-w-[680px] px-4 text-center">
          <motion.div {...fade(0)}>
            <Zap className="mx-auto mb-4 h-7 w-7 text-primary" />
            <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-primary mb-3">Twin Trigger Scoring</p>
            <h2 className="text-[36px] font-semibold leading-[1.12] tracking-[-0.05em] text-white sm:text-[44px]">
              From reactive to <span className="text-primary">predictive</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-[16px] font-medium leading-[1.6] text-white/45">
              Algorithmic threshold that determines when signals warrant action.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link href="/product/how-it-works" className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-primary hover:opacity-80">
                See the Cognitive Layer <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
