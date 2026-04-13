"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Database, Brain, Zap, RotateCcw, RefreshCw, BarChart3 } from "lucide-react";
import Header from "@/components/header";
import { Footer } from "@/components/footer";

const steps = [
  {
    id: "01",
    name: "Load",
    icon: Download,
    color: "from-blue-500/20 to-blue-600/10 border-blue-500/30",
    accent: "text-blue-400",
    desc: "All structured records, unstructured documents, and AI chat sessions are ingested from every connected source — CRM, ERP, email, Slack, uploaded files, and live webhooks.",
    details: ["Batch ingestion from SaaS APIs", "Real-time webhook streams", "File uploads and document parsing", "AI session transcripts"],
  },
  {
    id: "02",
    name: "Store",
    icon: Database,
    color: "from-violet-500/20 to-violet-600/10 border-violet-500/30",
    accent: "text-violet-400",
    desc: "Raw inputs land in SpineVault — a versioned, schema-aware store that preserves the original source alongside a normalized canonical representation for every record.",
    details: ["Versioned record history", "Source attribution per field", "Schema normalization layer", "Conflict detection on write"],
  },
  {
    id: "03",
    name: "Think",
    icon: Brain,
    color: "from-purple-500/20 to-purple-600/10 border-purple-500/30",
    accent: "text-purple-400",
    desc: "The Intelligence Layer processes stored entities — enriching context, resolving conflicts across sources, generating twin scoring signals, and surfacing triage recommendations.",
    details: ["Entity enrichment & deduplication", "Cross-source conflict resolution", "Twin Trigger Scoring", "Context graph construction"],
  },
  {
    id: "04",
    name: "Act",
    icon: Zap,
    color: "from-amber-500/20 to-amber-600/10 border-amber-500/30",
    accent: "text-amber-400",
    desc: "Proposed actions — updates, alerts, automations — are surfaced in the Human-in-the-Loop queue. Approved actions execute against connected systems through the Connectors layer.",
    details: ["HITL approval queue", "Multi-system write-back", "Automated playbook triggers", "Audit trail on every action"],
  },
  {
    id: "05",
    name: "Adjust",
    icon: RotateCcw,
    color: "from-emerald-500/20 to-emerald-600/10 border-emerald-500/30",
    accent: "text-emerald-400",
    desc: "Post-execution outcomes feed back into the spine. Approval patterns, edit signals, and downstream data changes refine twin scores and adjust future triage confidence.",
    details: ["Outcome feedback loops", "Approval signal learning", "Confidence score recalibration", "Data freshness reassessment"],
  },
  {
    id: "06",
    name: "Repeat",
    icon: RefreshCw,
    color: "from-cyan-500/20 to-cyan-600/10 border-cyan-500/30",
    accent: "text-cyan-400",
    desc: "The loop restarts continuously. Every new event, message, or record triggers a fresh Load cycle — keeping every entity, twin, and insight current without manual refresh.",
    details: ["Continuous event-driven cycles", "No manual sync required", "Always-on freshness", "Compounding context over time"],
  },
];

export function ExecutionPathContent() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <Header />

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-white/60 mb-8">
              <BarChart3 className="w-4 h-4" />
              Execution Path
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
              Load. Store. Think.<br />Act. Adjust. Repeat.
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Six stages. One continuous loop. Every entity in your workspace moves through this path from raw input to confident action — and back again.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/40 via-purple-500/40 to-cyan-500/40 hidden md:block" />

            <div className="space-y-6">
              {steps.map((step, i) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className={`relative md:pl-20 rounded-2xl border bg-gradient-to-r p-8 ${step.color}`}
                >
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#0a0a0f] border border-white/20 items-center justify-center hidden md:flex">
                    <div className={`w-3 h-3 rounded-full bg-current ${step.accent}`} />
                  </div>

                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex items-center gap-4 md:w-48 shrink-0">
                      <div className={`w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center`}>
                        <step.icon className={`w-6 h-6 ${step.accent}`} />
                      </div>
                      <div>
                        <div className="text-xs text-white/30 font-mono">{step.id}</div>
                        <div className={`text-2xl font-bold ${step.accent}`}>{step.name}</div>
                      </div>
                    </div>

                    <div className="flex-1">
                      <p className="text-white/70 mb-4 leading-relaxed">{step.desc}</p>
                      <div className="flex flex-wrap gap-2">
                        {step.details.map((d) => (
                          <span key={d} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-white/50">
                            {d}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {i < steps.length - 1 && (
                    <div className="md:hidden flex justify-center mt-4">
                      <ArrowRight className="w-5 h-5 text-white/20 rotate-90" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
