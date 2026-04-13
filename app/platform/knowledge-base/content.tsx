"use client";

import { motion } from "framer-motion";
import { BookOpen, Brain, Shield, CheckCircle, GitMerge, Eye } from "lucide-react";
import Header from "@/components/header";
import { Footer } from "@/components/footer";

const memoryItems = [
  { title: "Zero-Shot Context", desc: "Accumulated organizational intelligence grows daily without model retraining. Operates immediately on current SpineVault state." },
  { title: "Beyond RAG", desc: "Unlike Retrieval-Augmented Generation (stale snippets), Knowledge Memory provides a persistent, evolving narrative of organizational state." },
  { title: "Entity-Anchored", desc: "All knowledge is linked to canonical Spine entities — Account 360, Contact 360 — not floating contexts or disconnected documents." },
];

const truthLayerItems = [
  { title: "Approval Topology", desc: "Routing logic for human verification — who approves what based on impact level, action type, and entity tier." },
  { title: "Audit Immutability", desc: "Append-only logs of every decision and data change. Nothing can be silently altered — every write is traceable with an evidence hash." },
  { title: "Confidence Scoring", desc: "0-100 scoring on every insight before human presentation. Low-confidence items are quarantined pending additional signal." },
  { title: "Governance Membrane", desc: "The TruthLayer enforces the absolute Truth Boundary — architectural mandate that AI cannot write to systems without human approval." },
];

const accumulationItems = [
  { icon: GitMerge, color: "text-blue-400", title: "Flow C Triage", desc: "The decision gate between Store and Think. Determines whether AI Session Summaries enter Knowledge Base passively or trigger Twin Activation." },
  { icon: CheckCircle, color: "text-emerald-400", title: "Human Validation", desc: "The Knowledge UI surfaces extracted insights for approval before persistence. Humans review what enters canonical memory." },
  { icon: Eye, color: "text-violet-400", title: "Cross-Contamination Prevention", desc: "Contextual firewalling prevents Sales knowledge leaking to Engineering contexts — department-scoped knowledge boundaries enforced at the persistence layer." },
];

export function KnowledgeBaseContent() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <Header />

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-white/60 mb-8">
              <BookOpen className="w-4 h-4" />
              Knowledge Base
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
              Persistent intelligence.<br />Growing daily.
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
              Knowledge Memory accumulates organizational context without retraining. TruthLayer governs every insight before it enters canonical memory.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-24 px-6">
        <div className="max-w-5xl mx-auto space-y-8">

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
            <div className="flex items-center gap-3 mb-6">
              <Brain className="w-5 h-5 text-violet-400" />
              <h2 className="text-xl font-bold">Knowledge Memory</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {memoryItems.map((m) => (
                <div key={m.title} className="rounded-xl border border-white/8 bg-white/[0.02] p-5">
                  <div className="font-semibold mb-2 text-sm">{m.title}</div>
                  <p className="text-white/50 text-sm leading-relaxed">{m.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl border border-amber-500/20 bg-amber-500/[0.03] p-8">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-5 h-5 text-amber-400" />
              <h2 className="text-xl font-bold">TruthLayer</h2>
              <span className="px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs text-amber-400">Governance membrane</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {truthLayerItems.map((t) => (
                <div key={t.title} className="rounded-xl border border-white/8 bg-white/[0.02] p-5">
                  <div className="font-semibold mb-2 text-sm">{t.title}</div>
                  <p className="text-white/50 text-sm leading-relaxed">{t.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
            <h2 className="text-lg font-bold mb-5 text-white/50 uppercase tracking-widest text-sm">Knowledge Accumulation</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {accumulationItems.map((a) => (
                <div key={a.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4">
                    <a.icon className={`w-5 h-5 ${a.color}`} />
                  </div>
                  <div className="font-semibold mb-2">{a.title}</div>
                  <p className="text-white/50 text-sm leading-relaxed">{a.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
