"use client";

import { motion } from "framer-motion";
import { UserCheck, CheckCircle, Eye, Edit3, ShieldCheck, AlertTriangle } from "lucide-react";
import Header from "@/components/header";
import { Footer } from "@/components/footer";

const controls = [
  {
    icon: AlertTriangle,
    title: "Proposed Action Queue",
    desc: "Every action the system wants to take — update a record, send a message, trigger a workflow — enters a review queue before executing. Nothing runs without a human decision.",
    tags: ["Pre-execution review", "Action queue", "Batch approval", "Priority ordering"],
  },
  {
    icon: Eye,
    title: "Impact Preview",
    desc: "Before approving any action, see exactly what will change — which fields, which systems, which downstream records. Full impact visibility before a single write occurs.",
    tags: ["Field-level diff", "System impact", "Downstream preview", "Before/after view"],
  },
  {
    icon: CheckCircle,
    title: "Confidence Scoring",
    desc: "Each proposed action carries a confidence score built from data quality, source agreement, and historical approval patterns. High-confidence actions can be auto-approved on your terms.",
    tags: ["Confidence signals", "Auto-approve thresholds", "Source agreement", "Approval history"],
  },
  {
    icon: Edit3,
    title: "Edit Before Execute",
    desc: "Approve isn't a binary choice. Any proposed action can be edited — adjust field values, change target records, or narrow scope — before it executes against connected systems.",
    tags: ["Inline editing", "Partial approval", "Scope adjustment", "Safe execution"],
  },
  {
    icon: ShieldCheck,
    title: "Truth Boundary",
    desc: "Certain entities and fields are designated as Truth Boundary — requiring explicit human confirmation on every change, regardless of confidence level. Your canonical source is protected.",
    tags: ["Canonical protection", "Mandatory review", "Field-level locks", "Override audit"],
  },
  {
    icon: UserCheck,
    title: "Approval Audit Trail",
    desc: "Every approval, rejection, and edit is logged against the acting user, the proposed action, and the resulting system state — giving you a complete governance record.",
    tags: ["Full audit log", "User attribution", "Decision capture", "Compliance export"],
  },
];

export function HumanInTheLoopContent() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <Header />

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-white/60 mb-8">
              <UserCheck className="w-4 h-4" />
              Human in the Loop
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
              AI proposes.<br />You decide.
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Every system action passes through a human review gate. See what will change, why it was proposed, and decide before anything executes — with a full audit trail of every decision.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {controls.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 hover:border-white/20 transition-colors"
            >
              <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-5">
                <c.icon className="w-5 h-5 text-amber-400" />
              </div>
              <h3 className="text-lg font-semibold mb-3">{c.title}</h3>
              <p className="text-white/55 text-sm leading-relaxed mb-5">{c.desc}</p>
              <div className="flex flex-wrap gap-2">
                {c.tags.map((t) => (
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
