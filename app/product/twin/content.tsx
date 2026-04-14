"use client";

import { motion } from "framer-motion";
import { Cpu, RefreshCw, Clock, Brain } from "lucide-react";
import { Header } from "@/components/header-client";
import { Footer } from "@/components/footer";

const virtualState = [
  { title: "Entity 360 Mirroring", desc: "Real-time representation of your entire work context." },
  { title: "Live Synchronization", desc: "Sub-100ms sync from normalization to UI update." },
  { title: "Context Persistence", desc: "Survives refreshes and device switches. Never starts from scratch." },
];

const scoringLevels = [
  { score: "0 – 30", badge: "🟢", label: "Informational", desc: "Background monitoring. Changes logged, no action surfaced." },
  { score: "31 – 70", badge: "🟡", label: "Watch", desc: "Surfaced in Morning Brief for awareness." },
  { score: "71 – 100", badge: "🔴", label: "Critical / Action Required", desc: "Immediate notification with Proposed Action generated." },
];

const sessionItems = [
  { icon: Brain, color: "text-violet-400", title: "Zero-Shot Operation", desc: "Operates immediately on current SpineVault state." },
  { icon: RefreshCw, color: "text-blue-400", title: "Context Grounding", desc: "All reasoning linked to specific Entity 360 objects." },
  { icon: Clock, color: "text-emerald-400", title: "Memory Continuity", desc: "Context accumulates across sessions automatically." },
];

export function TwinContent() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <Header />

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-white/60 mb-8">
              <Cpu className="w-4 h-4" />
              Twin
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
              A virtual state machine<br />for your entire work context.
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
              The Twin mirrors your Entity 360 in real time — scoring, surfacing signals, and persisting context.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-24 px-6">
        <div className="max-w-5xl mx-auto space-y-8">

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
            <h2 className="text-lg font-bold mb-6 flex items-center gap-3"><Cpu className="w-5 h-5 text-blue-400" /> Virtual State Machine</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {virtualState.map((v) => (
                <div key={v.title} className="rounded-xl border border-white/8 bg-white/[0.02] p-5">
                  <div className="font-semibold mb-2 text-sm">{v.title}</div>
                  <p className="text-white/50 text-sm leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
            <h2 className="text-lg font-bold mb-2">Twin Trigger Scoring</h2>
            <p className="text-white/50 text-sm mb-6 leading-relaxed">
              Visual 0-100 gauge. Signals surface at the right severity level.
            </p>
            <div className="space-y-3">
              {scoringLevels.map((s) => (
                <div key={s.label} className="rounded-xl border border-white/8 bg-white/[0.02] p-5 flex items-start gap-4">
                  <span className="text-2xl">{s.badge}</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="font-semibold text-sm">{s.label}</span>
                      <span className="text-xs font-mono text-white/30">{s.score}</span>
                    </div>
                    <p className="text-white/50 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-xl border border-white/8 bg-white/[0.02] p-5">
              <div className="text-xs text-white/40 mb-1 font-semibold uppercase tracking-widest">Pattern Recognition Example</div>
              <p className="text-white/60 text-sm">"Usage down 40% + Champion left + 3 P1 tickets = <span className="text-red-400 font-semibold">Churn risk score 87</span>"</p>
            </div>
          </motion.div>

          <div>
            <h2 className="text-sm font-bold mb-5 text-white/50 uppercase tracking-widest">Session Management</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {sessionItems.map((s, i) => (
                <motion.div key={s.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4">
                    <s.icon className={`w-5 h-5 ${s.color}`} />
                  </div>
                  <div className="font-semibold mb-2">{s.title}</div>
                  <p className="text-white/50 text-sm leading-relaxed">{s.desc}</p>
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
