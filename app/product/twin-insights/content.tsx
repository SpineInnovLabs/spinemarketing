"use client";

import { motion } from "framer-motion";
import { TrendingUp, BarChart3, Zap, AlertTriangle, Clock, Eye } from "lucide-react";
import Header from "@/components/header";
import { Footer } from "@/components/footer";

const insights = [
  {
    icon: Zap,
    title: "Twin Trigger Score",
    desc: "Each entity carries a composite trigger score — built from engagement recency, data freshness, open risk signals, and AI session outcomes. Surfaces what needs attention without manual triage.",
    tags: ["Composite scoring", "Live updates", "Attention ranking", "Risk weighting"],
  },
  {
    icon: AlertTriangle,
    title: "Risk Signal Detection",
    desc: "Patterns that indicate churn, escalation, missed milestones, or data conflicts are flagged automatically as risk signals — linked to the specific twin records that carry them.",
    tags: ["Churn signals", "Escalation detection", "Conflict flags", "Entity-linked alerts"],
  },
  {
    icon: TrendingUp,
    title: "Engagement Trends",
    desc: "Visualise how interaction frequency, response times, and activity levels have shifted across accounts and contacts over any time window — straight from twin history.",
    tags: ["Interaction frequency", "Response time trends", "Activity delta", "Time-window views"],
  },
  {
    icon: Clock,
    title: "Freshness Heatmap",
    desc: "See across your entire entity graph which records are current, stale, or overdue for a sync — with per-field freshness indicators that show exactly where data age is concentrated.",
    tags: ["Field-level freshness", "Staleness map", "Sync overdue alerts", "Data age distribution"],
  },
  {
    icon: Eye,
    title: "Relationship Insight",
    desc: "Insights aren't isolated to single entities. The relationship graph surfaces patterns across connected entities — account health affecting contact engagement, deal delays tied to billing issues.",
    tags: ["Cross-entity patterns", "Graph-derived insights", "Dependency signals", "Cascade detection"],
  },
  {
    icon: BarChart3,
    title: "Portfolio Snapshot",
    desc: "A rollup view across all twins in a segment — accounts, deals, or projects — ranked by trigger score, risk level, and last meaningful activity. Prioritise your entire book at a glance.",
    tags: ["Segment rollup", "Priority ranking", "Last activity", "Score distribution"],
  },
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
              Know what matters,<br />before it becomes urgent.
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Twin Insights turns your entity graph into an early-warning system — surfacing trigger scores, risk signals, engagement trends, and freshness gaps without any manual analysis.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {insights.map((ins, i) => (
            <motion.div
              key={ins.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 hover:border-white/20 transition-colors"
            >
              <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-5">
                <ins.icon className="w-5 h-5 text-emerald-400" />
              </div>
              <h3 className="text-lg font-semibold mb-3">{ins.title}</h3>
              <p className="text-white/55 text-sm leading-relaxed mb-5">{ins.desc}</p>
              <div className="flex flex-wrap gap-2">
                {ins.tags.map((t) => (
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
