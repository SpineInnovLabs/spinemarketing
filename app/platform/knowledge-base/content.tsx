"use client";

import { motion } from "framer-motion";
import { BookOpen, Brain, Shield, CheckCircle, GitMerge, Eye, ArrowRight } from "lucide-react";
import { Header } from "@/components/header-client";
import { Footer } from "@/components/footer";
import Link from "next/link";

const memoryCards = [
  {
    icon: Brain,
    accent: "#8b5cf6",
    bg: "rgba(139,92,246,0.12)",
    title: "Zero-Shot Context",
    desc: "Accumulated organizational intelligence grows daily without model retraining. The system operates immediately on current SpineVault state — no warmup, no setup period.",
  },
  {
    icon: BookOpen,
    accent: "#3b82f6",
    bg: "rgba(59,130,246,0.12)",
    title: "Beyond RAG",
    desc: "Unlike Retrieval-Augmented Generation, Knowledge Memory provides a persistent, evolving narrative of organizational state — not stale snippets stitched together at query time.",
  },
  {
    icon: GitMerge,
    accent: "#10b981",
    bg: "rgba(16,185,129,0.12)",
    title: "Entity-Anchored",
    desc: "All knowledge is linked to canonical Spine entities — Account 360, Contact 360 — not floating contexts or disconnected documents that drift from source data.",
  },
];

const truthLayerCards = [
  {
    title: "Approval Topology",
    desc: "Routing logic for human verification — who approves what based on impact level, action type, and entity tier. Configurable per team, role, and threshold.",
  },
  {
    title: "Audit Immutability",
    desc: "Append-only logs of every decision and data change. Nothing can be silently altered — every write is traceable with an evidence hash that links back to Spine records.",
  },
  {
    title: "Confidence Scoring",
    desc: "0–100 scoring on every insight before human presentation. Low-confidence items are quarantined pending additional signal — never surfaced as fact.",
  },
  {
    title: "Governance Membrane",
    desc: "The TruthLayer enforces the absolute Truth Boundary — an architectural mandate that AI cannot write to any system without human approval. Not a policy. A constraint.",
  },
];

const accumulationCards = [
  {
    icon: GitMerge,
    accent: "#3b82f6",
    bg: "rgba(59,130,246,0.12)",
    title: "Flow C Triage",
    desc: "The decision gate between Store and Think. Determines whether AI Session Summaries enter Knowledge Base passively or trigger Twin Activation for immediate action.",
  },
  {
    icon: CheckCircle,
    accent: "#10b981",
    bg: "rgba(16,185,129,0.12)",
    title: "Human Validation",
    desc: "The Knowledge UI surfaces extracted insights for approval before persistence. Humans review what enters canonical memory — maintaining accuracy at the source.",
  },
  {
    icon: Eye,
    accent: "#8b5cf6",
    bg: "rgba(139,92,246,0.12)",
    title: "Contextual Firewalling",
    desc: "Sales knowledge does not leak to Engineering contexts. Department-scoped knowledge boundaries are enforced at the persistence layer — not just at the UI level.",
  },
];

export function KnowledgeBaseContent() {
  return (
    <div className="relative min-h-screen bg-[#08070e] text-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 left-1/3 w-[700px] h-[700px] rounded-full blur-[220px]" style={{ background: "rgba(139,92,246,0.07)" }} />
        <div className="absolute top-[55%] right-1/4 w-[500px] h-[500px] rounded-full blur-[180px]" style={{ background: "rgba(27,167,132,0.05)" }} />
      </div>

      <Header />

      <section className="relative pt-36 pb-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm text-white/50 mb-8">
              <BookOpen className="w-3.5 h-3.5 text-primary" />
              <span>Knowledge Base</span>
            </div>
            <h1 className="text-[52px] md:text-[68px] font-bold leading-[1.05] tracking-tight mb-6">
              <span className="bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">Intelligence that grows</span>
              <br />
              <span className="text-primary">without retraining.</span>
            </h1>
            <p className="text-xl text-white/55 max-w-2xl mx-auto leading-relaxed mb-10">
              Knowledge Memory accumulates organizational context automatically. TruthLayer governs every insight before it enters canonical memory — so what your team sees is always anchored in fact.
            </p>
            <Link
              href="/contact?intent=demo"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[15px] font-semibold text-white"
              style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-button)" }}
            >
              See Knowledge Memory live <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="relative pb-16 px-6">
        <div className="max-w-5xl mx-auto space-y-16">

          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "rgba(139,92,246,0.12)" }}>
                <Brain className="w-5 h-5" style={{ color: "#8b5cf6" }} />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Knowledge Memory</h2>
                <p className="text-white/40 text-sm">Persistent, entity-anchored organizational intelligence</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {memoryCards.map((c, i) => (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="group rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-8 hover:border-white/[0.15] transition-colors"
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                    style={{ background: c.bg, boxShadow: `0 0 30px ${c.bg}` }}
                  >
                    <c.icon className="w-6 h-6" style={{ color: c.accent }} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{c.title}</h3>
                  <p className="text-white/55 leading-relaxed text-sm">{c.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border p-10"
            style={{ borderColor: "rgba(245,158,11,0.25)", background: "rgba(245,158,11,0.03)" }}
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "rgba(245,158,11,0.12)" }}>
                <Shield className="w-5 h-5" style={{ color: "#f59e0b" }} />
              </div>
              <h2 className="text-2xl font-bold">TruthLayer</h2>
              <span className="px-3 py-1 rounded-full text-xs font-semibold border" style={{ borderColor: "rgba(245,158,11,0.3)", color: "#f59e0b", background: "rgba(245,158,11,0.08)" }}>Governance membrane</span>
            </div>
            <p className="text-white/50 mb-8 ml-[52px] text-sm leading-relaxed">The architectural layer that ensures every insight is verified, every write is authorized, and every decision is auditable — before it ever reaches your team.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {truthLayerCards.map((t, i) => (
                <motion.div
                  key={t.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="rounded-xl border p-6 hover:border-yellow-500/30 transition-colors"
                  style={{ borderColor: "rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.02)" }}
                >
                  <h4 className="font-bold mb-2">{t.title}</h4>
                  <p className="text-white/50 text-sm leading-relaxed">{t.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "rgba(27,167,132,0.12)" }}>
                <CheckCircle className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Knowledge Accumulation</h2>
                <p className="text-white/40 text-sm">How context enters and stays accurate over time</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {accumulationCards.map((c, i) => (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="group rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-8 hover:border-white/[0.15] transition-colors"
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                    style={{ background: c.bg, boxShadow: `0 0 30px ${c.bg}` }}
                  >
                    <c.icon className="w-6 h-6" style={{ color: c.accent }} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{c.title}</h3>
                  <p className="text-white/55 leading-relaxed text-sm">{c.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Knowledge that compounds daily.</h2>
            <p className="text-white/50 text-lg mb-10 max-w-lg mx-auto">See how Knowledge Memory and TruthLayer keep your team's intelligence accurate and growing.</p>
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
