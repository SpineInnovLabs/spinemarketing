"use client";

import { motion } from "framer-motion";
import { Settings2, Zap, RefreshCw, GitBranch, Lock, BarChart3 } from "lucide-react";
import Header from "@/components/header";
import { Footer } from "@/components/footer";

const ops = [
  {
    icon: Zap,
    title: "Action Execution",
    desc: "Trigger system actions directly from a twin — update a field in Salesforce, create a task in Asana, send a Slack message — through the Connectors layer with full write-back confirmation.",
    tags: ["Multi-system write-back", "Connector-routed", "Confirmation receipt", "Rollback support"],
  },
  {
    icon: GitBranch,
    title: "Playbook Triggers",
    desc: "Bind named playbooks to twin trigger score thresholds. When a score crosses a threshold, the playbook fires — proposing a defined sequence of actions for human review.",
    tags: ["Score-based triggers", "Named playbooks", "Sequence proposals", "HITL handoff"],
  },
  {
    icon: RefreshCw,
    title: "Manual Sync Override",
    desc: "Force an immediate resync of any twin from its source systems — bypassing scheduled cycles when you know data has changed and can't wait for the next refresh window.",
    tags: ["On-demand sync", "Source refresh", "Bypass schedule", "Immediate update"],
  },
  {
    icon: Settings2,
    title: "Twin Configuration",
    desc: "Control which fields are tracked, which sources take precedence, and which changes require HITL review on a per-entity or per-entity-type basis.",
    tags: ["Field selection", "Source priority", "HITL thresholds", "Entity-type config"],
  },
  {
    icon: Lock,
    title: "Field Locking",
    desc: "Lock individual fields on a twin to prevent automated overwrites. Locked fields can only change via explicit human approval — protecting your most critical canonical values.",
    tags: ["Field-level locks", "Overwrite protection", "Approval-gated writes", "Canonical safety"],
  },
  {
    icon: BarChart3,
    title: "Operations Log",
    desc: "Every action taken on a twin — automated or manual, approved or rejected — is recorded in a structured operations log. Full traceability from trigger to outcome.",
    tags: ["Structured log", "Action traceability", "Outcome recording", "Compliance export"],
  },
];

export function TwinOperationsContent() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <Header />

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-white/60 mb-8">
              <Settings2 className="w-4 h-4" />
              Twin Operations
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
              Configure, trigger, and<br />act from the twin.
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Twin Operations is the control plane for your entity graph — execute actions, fire playbooks, lock critical fields, and maintain a complete operations log across every twin.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ops.map((op, i) => (
            <motion.div
              key={op.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 hover:border-white/20 transition-colors"
            >
              <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-5">
                <op.icon className="w-5 h-5 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold mb-3">{op.title}</h3>
              <p className="text-white/55 text-sm leading-relaxed mb-5">{op.desc}</p>
              <div className="flex flex-wrap gap-2">
                {op.tags.map((t) => (
                  <span key={t} className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-white/40">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
