"use client";

import { motion } from "framer-motion";
import { TrendingUp, Zap, Clock, BarChart3, Brain, GitMerge } from "lucide-react";
import { Header } from "@/components/header-client";
import { Footer } from "@/components/footer";

const signalPatterns = [
  { signal: "Churn Risk", inputs: "Usage dropped 30% AND champion left AND ticket spike", score: "87", color: "text-red-400", border: "border-red-500/20" },
  { signal: "Expansion Opportunity", inputs: "Invoice paid early + Usage up + New stakeholders", score: "74", color: "text-emerald-400", border: "border-emerald-500/20" },
];

const briefComponents = [
  { title: "Portfolio Health Changes", desc: "Accounts that moved from Healthy to At-Risk overnight." },
  { title: "Pending Approvals", desc: "Actions needing attention today, ranked by impact." },
  { title: "Follow-Up Reminders", desc: "Prior session promises surfaced as reminders." },
  { title: "Competitive Mentions", desc: "Competitor names detected across communications." },
];

const exceptionItems = [
  { icon: BarChart3, color: "text-blue-400", title: "Anomaly Surfacing", desc: "Statistical outliers flagged with supporting evidence." },
  { icon: TrendingUp, color: "text-violet-400", title: "Trend Analysis", desc: "Week-over-week health trajectories with velocity indicators." },
  { icon: Clock, color: "text-amber-400", title: "Predictive Alerts", desc: "Renewal risk countdowns and deadline probability scores." },
];

const evidenceItems = [
  { icon: Brain, color: "text-purple-400", title: "Chain-of-Thought Visualization", desc: "Step-by-step AI reasoning traced to Spine records." },
  { icon: GitMerge, color: "text-cyan-400", title: "Dual Context Mapping", desc: "System impact alongside business impact, side by side." },
  { icon: Zap, color: "text-emerald-400", title: "Source Attribution", desc: "Every insight links back to canonical Spine records." },
];

export function TwinInsightsContent() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <Header />

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-white/60 mb-8">
              <TrendingUp className="w-4 h-4" />
              Twin Insights
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
              Proactive intelligence.<br />Signals, not searches.
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
              Signals surface automatically from cross-system pattern detection and evidence-backed reasoning.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-24 px-6">
        <div className="max-w-5xl mx-auto space-y-8">

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
            <h2 className="text-lg font-bold mb-2">Signal Inbox</h2>
            <p className="text-white/50 text-sm mb-6 leading-relaxed">Cross-system pattern detection. Low-confidence signals quarantined before reaching you.</p>
            <div className="space-y-4">
              {signalPatterns.map((s) => (
                <div key={s.signal} className={`rounded-xl border ${s.border} bg-white/[0.02] p-5`}>
                  <div className="flex items-center justify-between mb-2">
                    <span className={`font-semibold text-sm ${s.color}`}>{s.signal}</span>
                    <span className={`text-xs font-mono ${s.color}`}>Score: {s.score}/100</span>
                  </div>
                  <p className="text-white/50 text-sm">{s.inputs}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
            <h2 className="text-lg font-bold mb-2">Morning Brief Generator</h2>
            <p className="text-white/50 text-sm mb-6 leading-relaxed">AI-generated digest of overnight changes. Only high-signal items surface.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {briefComponents.map((b) => (
                <div key={b.title} className="rounded-xl border border-white/8 bg-white/[0.02] p-5">
                  <div className="font-semibold mb-2 text-sm">{b.title}</div>
                  <p className="text-white/50 text-sm leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <div>
            <h2 className="text-sm font-bold mb-5 text-white/50 uppercase tracking-widest">Exception Detection Center</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {exceptionItems.map((e, i) => (
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

          <div>
            <h2 className="text-sm font-bold mb-5 text-white/50 uppercase tracking-widest">Evidence-Based Reasoning</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {evidenceItems.map((e, i) => (
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
