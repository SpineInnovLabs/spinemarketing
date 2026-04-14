"use client";

import { motion } from "framer-motion";
import { UserCheck, Eye, Edit3, ShieldCheck, AlertTriangle, RotateCcw } from "lucide-react";
import { Header } from "@/components/header-client";
import { Footer } from "@/components/footer";

const queueFeatures = [
  { title: "Proposed Action Queue", desc: "Central inbox of AI-suggested actions awaiting approval. Sortable by urgency and impact." },
  { title: "Impact Preview Panel", desc: "See exact system effects before you approve any action." },
  { title: "Evidence Inspector", desc: "Side-by-side proof with confidence scores and entity links." },
];

const approvalTiers = [
  { tier: "Tier 1", who: "CSM", what: "Routine updates, standard emails", impact: "< $1K impact" },
  { tier: "Tier 2", who: "Manager", what: "Escalations, contract changes", impact: "$1K – $10K impact" },
  { tier: "Tier 3", who: "VP / Executive", what: "Strategic actions, pricing changes", impact: "> $10K impact" },
];

const govControls = [
  { icon: Edit3, color: "text-blue-400", title: "Edit Before Approve", desc: "Modify AI drafts before any system is touched." },
  { icon: UserCheck, color: "text-emerald-400", title: "Delegation Settings", desc: "Transfer approval authority with full audit trail." },
  { icon: ShieldCheck, color: "text-amber-400", title: "Bulk Approval Safety", desc: "Max 10 actions per batch with mandatory rollback." },
];

const emergency = [
  { icon: AlertTriangle, color: "text-red-400", title: "Pause Twin", desc: "Instant suspension of all proactive suggestions." },
  { icon: Eye, color: "text-violet-400", title: "Override with Audit", desc: "Force-execute with mandatory justification entry." },
  { icon: RotateCcw, color: "text-cyan-400", title: "Rollback Interface", desc: "24-hour window to reverse any approved action." },
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
              The Truth Boundary<br />Control Center.
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
              Every AI action enters a governed approval queue with tiered routing and 24-hour rollback.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-24 px-6">
        <div className="max-w-5xl mx-auto space-y-8">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {queueFeatures.map((q, i) => (
              <motion.div key={q.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.07 }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <div className="font-semibold mb-3">{q.title}</div>
                <p className="text-white/50 text-sm leading-relaxed">{q.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="rounded-2xl border border-amber-500/20 bg-amber-500/[0.03] p-8">
            <h2 className="text-lg font-bold mb-6">Approval Rules Engine</h2>
            <div className="space-y-3">
              {approvalTiers.map((t) => (
                <div key={t.tier} className="rounded-xl border border-white/8 bg-white/[0.02] p-5 grid grid-cols-1 md:grid-cols-4 gap-2 items-center">
                  <span className="font-semibold text-amber-400 text-sm">{t.tier}</span>
                  <span className="text-sm text-white/70">{t.who}</span>
                  <span className="text-sm text-white/50">{t.what}</span>
                  <span className="text-xs text-white/35 font-mono">{t.impact}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <div>
            <h2 className="text-sm font-bold mb-5 text-white/50 uppercase tracking-widest">Governance Controls</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {govControls.map((g, i) => (
                <motion.div key={g.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4">
                    <g.icon className={`w-5 h-5 ${g.color}`} />
                  </div>
                  <div className="font-semibold mb-2">{g.title}</div>
                  <p className="text-white/50 text-sm leading-relaxed">{g.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-sm font-bold mb-5 text-white/50 uppercase tracking-widest">Emergency Controls</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {emergency.map((e, i) => (
                <motion.div key={e.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4">
                    <e.icon className={`w-5 h-5 ${e.color}`} />
                  </div>
                  <div className="font-semibold mb-2">{e.title}</div>
                  <p className="text-white/50 text-sm leading-relaxed">{e.desc}</p>
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
