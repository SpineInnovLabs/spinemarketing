"use client";

import { motion } from "framer-motion";
import { TrendingUp, Zap, Clock, BarChart3, Brain, GitMerge } from "lucide-react";
import { Header } from "@/components/header-client";
import { Footer } from "@/components/footer";

const signalPatterns = [
  { signal: "Churn Risk", inputs: "Usage dropped 30% AND champion left AND ticket spike", score: "87", color: "text-red-400", border: "border-red-500/20" },
  { signal: "Expansion Opportunity", inputs: "Invoice paid early + Usage up + New stakeholders added", score: "74", color: "text-emerald-400", border: "border-emerald-500/20" },
];

const briefComponents = [
  { title: "Portfolio Health Changes", desc: "Accounts that moved from Healthy → At-Risk overnight, with entity links and driving signals." },
  { title: "Pending Approvals", desc: "Actions requiring attention today, ranked by impact and urgency." },
  { title: "Follow-Up Reminders", desc: "Promises made in prior AI sessions surfaced as actionable reminders." },
  { title: "Competitive Mentions", desc: "Competitor names detected in email threads, meeting transcripts, and support tickets." },
];

const exceptionItems = [
  { icon: BarChart3, color: "text-blue-400", title: "Anomaly Surfacing", desc: "Statistical outliers in billing, usage, and communication patterns flagged with supporting evidence from SpineVault." },
  { icon: TrendingUp, color: "text-violet-400", title: "Trend Analysis", desc: "Week-over-week entity health trajectories with velocity indicators — accelerating, stabilising, or degrading." },
  { icon: Clock, color: "text-amber-400", title: "Predictive Alerts", desc: "90/60/30-day renewal risk countdowns. Collection probability scores. Project deadline risk from milestone velocity." },
];

const evidenceItems = [
  { icon: Brain, color: "text-purple-400", title: "Chain-of-Thought Visualization", desc: "Step-by-step explanation of AI reasoning with goal_refs — every insight traces back to the Spine records that produced it." },
  { icon: GitMerge, color: "text-cyan-400", title: "Dual Context Mapping", desc: "System impact (\"Updates Salesforce field Last_Contact_Date\") alongside business impact (\"Reduces churn probability by 15%\")." },
  { icon: Zap, color: "text-emerald-400", title: "Source Attribution", desc: "Every insight links back to originating SpineVault records. No floating conclusions — everything is anchored to canonical data." },
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
              Signals surface automatically based on Entity 360 changes — cross-system pattern detection, Morning Brief, exception alerts, and evidence-backed reasoning in one place.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-24 px-6">
        <div className="max-w-5xl mx-auto space-y-8">

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
            <h2 className="text-lg font-bold mb-2">Signal Inbox</h2>
            <p className="text-white/50 text-sm mb-6 leading-relaxed">Cross-system pattern detection. Signals surface proactively — not from search. Low-confidence or stale signals are quarantined by Flow C triage before reaching you.</p>
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
            <p className="text-white/50 text-sm mb-6 leading-relaxed">AI-generated digest of overnight changes across your portfolio. Flow C algorithm surfaces only high-signal items — suppressing routine updates so you see only what matters.</p>
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
