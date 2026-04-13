"use client";

import { motion } from "framer-motion";
import { Cpu, RefreshCw, GitBranch, Eye, Zap, BarChart3 } from "lucide-react";
import Header from "@/components/header";
import { Footer } from "@/components/footer";

const capabilities = [
  {
    icon: GitBranch,
    title: "One Twin Per Entity",
    desc: "Every Account, Contact, Deal, and Project has its own Digital Twin — a living model that tracks current state, relationship signals, and change history across every connected source.",
    tags: ["Account twin", "Contact twin", "Deal twin", "Project twin"],
  },
  {
    icon: RefreshCw,
    title: "Continuously Updated",
    desc: "Twins update automatically as new data arrives — from CRM syncs, email threads, AI sessions, or user edits. No manual refresh. No stale snapshots.",
    tags: ["Event-driven updates", "Always current", "No manual refresh", "Multi-source sync"],
  },
  {
    icon: Eye,
    title: "Temporal State Views",
    desc: "Reconstruct any twin at any point in time. See exactly what was known about an account last quarter, before a deal closed, or at the moment a support ticket was raised.",
    tags: ["Point-in-time replay", "Change timeline", "Historical accuracy", "Audit support"],
  },
  {
    icon: Zap,
    title: "Twin Trigger Scoring",
    desc: "Each twin carries a live trigger score — a composite signal built from engagement patterns, data freshness, risk indicators, and AI session outcomes that surfaces what needs attention now.",
    tags: ["Composite scoring", "Risk signals", "Engagement patterns", "Attention ranking"],
  },
  {
    icon: BarChart3,
    title: "Relationship Graph",
    desc: "Twins are never isolated. The Relation Graph connects entities — Account → Contacts → Deals → Tickets → Invoices — so context flows across your entire data model.",
    tags: ["Entity relationships", "Graph navigation", "Cross-entity context", "Dependency mapping"],
  },
  {
    icon: Cpu,
    title: "Memory Layer",
    desc: "Twins persist context across AI sessions, preserving decisions, summaries, and extracted signals. Your AI never starts from scratch — it inherits everything the twin already knows.",
    tags: ["Persistent context", "Session memory", "Decision retention", "Knowledge carry-forward"],
  },
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
              A living model of every<br />entity in your workspace.
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              The Digital Twin is a continuously updated, relationship-aware model for every Account, Contact, Deal, and Project — carrying state, history, and AI memory in one place.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 hover:border-white/20 transition-colors"
            >
              <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-5">
                <c.icon className="w-5 h-5 text-purple-400" />
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
