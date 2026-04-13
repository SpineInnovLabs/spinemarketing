"use client";

import { motion } from "framer-motion";
import { Download, Database, Brain, Zap, RotateCcw, RefreshCw, Layers, ArrowDown } from "lucide-react";
import Header from "@/components/header";
import { Footer } from "@/components/footer";

const steps = [
  {
    id: "01", name: "Load", icon: Download, accent: "text-blue-400", border: "border-blue-500/30",
    desc: "Data ingestion from connectors — APIs, webhooks, MCP, and files. A connector abstraction layer handles every source type, with event-driven ingestion and idempotency keys to prevent duplicate records.",
    details: ["Connector abstraction layer", "Event-driven ingestion", "Idempotency keys", "Dead Letter Queue management"],
  },
  {
    id: "02", name: "Store", icon: Database, accent: "text-violet-400", border: "border-violet-500/30",
    desc: "Persistence in SpineVault. The 8-stage normalization pipeline executes — validating, parsing, normalizing, deduplicating, enriching, and persisting every record. Conflict resolution applies when sources disagree. Temporal versioning captures full history.",
    details: ["8-stage normalization execution", "Conflict resolution", "Temporal versioning", "Golden record creation"],
  },
  {
    id: "03", name: "Think", icon: Brain, accent: "text-purple-400", border: "border-purple-500/30",
    desc: "Cognitive processing layer. Twin Trigger Scoring evaluates Entity 360 changes algorithmically. Signal detection runs pattern recognition across structured and unstructured data. Evidence generation produces chain-of-thought reasoning hyperlinked to Spine records.",
    details: ["Twin Trigger Scoring", "Cross-system signal detection", "Evidence generation with goal_refs", "Pattern recognition"],
  },
  {
    id: "04", name: "Act", icon: Zap, accent: "text-amber-400", border: "border-amber-500/30",
    desc: "Write-back execution — governed. Proposed actions enter the Human-in-the-Loop queue before any system is touched. Approved actions execute as idempotent API operations, batch or single-transaction, with rollback capability within a 24-hour window.",
    details: ["HITL approval gate", "Idempotent API operations", "Batch or single-transaction writes", "24-hour rollback window"],
  },
  {
    id: "05", name: "Adjust", icon: RotateCcw, accent: "text-emerald-400", border: "border-emerald-500/30",
    desc: "Feedback integration. Outcome validation confirms success or failure of executed actions. Preference learning refines suggestions based on approved and rejected actions. Confidence thresholds tune automatically based on historical accuracy.",
    details: ["Outcome validation", "Preference learning", "Confidence threshold tuning", "Historical accuracy feedback"],
  },
  {
    id: "06", name: "Repeat", icon: RefreshCw, accent: "text-cyan-400", border: "border-cyan-500/30",
    desc: "Continuous cycle. New data triggers a fresh Load cycle — enriched by prior approved Knowledge Memory. The loop self-improves without model retraining. Flow C Triage is the decision gate between Store and Think, determining whether updates enter Knowledge Memory passively or trigger Twin Activation for immediate action.",
    details: ["Continuous event-driven cycles", "Enriched by Knowledge Memory", "Self-improving without retraining", "Flow C Triage gate"],
  },
];

export function ExecutionPathContent() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <Header />

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-white/60 mb-8">
              <Layers className="w-4 h-4" />
              Execution Path
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
              Load. Store. Think.<br />Act. Adjust. Repeat.
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
              The operational loop that drives every entity, insight, and action in the platform — continuous, self-improving, and governed at every stage.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-24 px-6">
        <div className="max-w-3xl mx-auto space-y-4">
          {steps.map((step, i) => (
            <div key={step.id}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className={`rounded-2xl border bg-white/[0.03] p-7 ${step.border}`}
              >
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <step.icon className={`w-6 h-6 ${step.accent}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-mono text-white/30">{step.id}</span>
                      <span className={`text-2xl font-bold ${step.accent}`}>{step.name}</span>
                    </div>
                    <p className="text-white/60 text-sm leading-relaxed mb-4">{step.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {step.details.map((d) => (
                        <span key={d} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-white/45">{d}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
              {i < steps.length - 1 && (
                <div className="flex justify-center py-1">
                  <ArrowDown className="w-5 h-5 text-white/15" />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
