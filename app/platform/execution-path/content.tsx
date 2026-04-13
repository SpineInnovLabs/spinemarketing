"use client";

import { motion } from "framer-motion";
import { Download, Database, Brain, Zap, RotateCcw, RefreshCw, Layers, ArrowRight } from "lucide-react";
import { Header } from "@/components/header-client";
import { Footer } from "@/components/footer";
import Link from "next/link";

const steps = [
  {
    id: "01", name: "Load", icon: Download, accent: "#3b82f6", bg: "rgba(59,130,246,0.12)",
    desc: "Data ingestion from every connector — APIs, webhooks, MCP, and files. Idempotency keys prevent duplicate records. Dead Letter Queue holds failed ingestion for review.",
    tags: ["Connector abstraction", "Event-driven", "DLQ management"],
  },
  {
    id: "02", name: "Store", icon: Database, accent: "#8b5cf6", bg: "rgba(139,92,246,0.12)",
    desc: "Persistence in SpineVault. The 8-stage normalization pipeline validates, parses, normalizes, deduplicates, enriches, and persists every record with full temporal versioning.",
    tags: ["8-stage normalization", "Conflict resolution", "Golden records"],
  },
  {
    id: "03", name: "Think", icon: Brain, accent: "#a855f7", bg: "rgba(168,85,247,0.12)",
    desc: "Cognitive processing layer. Twin Trigger Scoring evaluates Entity 360 changes. Evidence generation produces chain-of-thought reasoning hyperlinked to Spine records.",
    tags: ["Trigger scoring", "Signal detection", "Evidence with goal_refs"],
  },
  {
    id: "04", name: "Act", icon: Zap, accent: "#f59e0b", bg: "rgba(245,158,11,0.12)",
    desc: "Write-back execution — governed. Proposed actions enter the Human-in-the-Loop queue before any system is touched. Approved actions execute as idempotent API operations with rollback capability.",
    tags: ["HITL approval gate", "Idempotent writes", "24h rollback window"],
  },
  {
    id: "05", name: "Adjust", icon: RotateCcw, accent: "#10b981", bg: "rgba(16,185,129,0.12)",
    desc: "Feedback integration. Outcome validation confirms success or failure. Preference learning refines suggestions. Confidence thresholds tune automatically based on historical accuracy.",
    tags: ["Outcome validation", "Preference learning", "Auto-tuning"],
  },
  {
    id: "06", name: "Repeat", icon: RefreshCw, accent: "#06b6d4", bg: "rgba(6,182,212,0.12)",
    desc: "Continuous, self-improving cycle. New data triggers a fresh Load cycle — enriched by prior approved Knowledge Memory. The loop improves without model retraining.",
    tags: ["Event-driven loops", "Knowledge Memory enrichment", "Self-improving"],
  },
];

export function ExecutionPathContent() {
  return (
    <div className="relative min-h-screen bg-[#08070e] text-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 left-1/3 w-[700px] h-[700px] rounded-full blur-[220px]" style={{ background: "rgba(27,167,132,0.06)" }} />
        <div className="absolute top-[60%] right-1/4 w-[500px] h-[500px] rounded-full blur-[200px]" style={{ background: "rgba(99,102,241,0.05)" }} />
      </div>

      <Header />

      <section className="relative pt-36 pb-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm text-white/50 mb-8">
              <Layers className="w-3.5 h-3.5 text-primary" />
              <span>Execution Path</span>
            </div>
            <h1 className="text-[52px] md:text-[68px] font-bold leading-[1.05] tracking-tight mb-6">
              <span className="bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">Six stages.</span>
              <br />
              <span className="text-primary">One continuous loop.</span>
            </h1>
            <p className="text-xl text-white/55 max-w-2xl mx-auto leading-relaxed mb-10">
              Load, Store, Think, Act, Adjust, Repeat — a self-improving operational cycle governed at every stage, driven by real entity data, never by hallucination.
            </p>
            <Link
              href="/contact?intent=demo"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[15px] font-semibold text-white"
              style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-button)" }}
            >
              See the loop in action <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="relative pb-20 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-8 hover:border-white/[0.15] transition-colors"
            >
              <div className="flex items-start justify-between mb-6">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center"
                  style={{ background: step.bg, boxShadow: `0 0 30px ${step.bg}` }}
                >
                  <step.icon className="w-6 h-6" style={{ color: step.accent }} />
                </div>
                <span className="text-4xl font-bold" style={{ color: `${step.accent}20` }}>{step.id}</span>
              </div>
              <h3 className="text-2xl font-bold mb-3" style={{ color: step.accent }}>{step.name}</h3>
              <p className="text-white/55 leading-relaxed mb-5 text-sm">{step.desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {step.tags.map((t) => (
                  <span key={t} className="px-2.5 py-1 rounded-full text-xs border border-white/[0.08] text-white/40 bg-white/[0.03]">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="relative py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent p-14"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The loop that runs your operations.</h2>
            <p className="text-white/50 text-lg mb-10 max-w-lg mx-auto">See how the Execution Path turns raw SaaS data into governed, self-improving business actions.</p>
            <Link
              href="/contact?intent=demo"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-[15px] font-semibold text-white"
              style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-button)" }}
            >
              Book a demo <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
