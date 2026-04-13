"use client";

import { motion } from "framer-motion";
import { Cpu, GitMerge, Clock, Map } from "lucide-react";
import { Header } from "@/components/header-client";
import { Footer } from "@/components/footer";

const views = [
  { view: "Executive Oversight", function: "Leadership state summaries", elements: "Monday Brief dashboard, Board Pack generator, cross-departmental health metrics" },
  { view: "Business Operations", function: "Process optimization", elements: "Pipeline/headcount/risk correlation, Flow Trace visualization, bottleneck detection" },
  { view: "Account Success", function: "Strategic account visibility", elements: "Entity 360 cards, renewal risk timeline (90/60/30-day), QBR auto-prep" },
  { view: "Customer Success", function: "Relationship health", elements: "Health score heatmaps, churn mitigation workflows, sponsor tracking" },
  { view: "Personal Ops", function: "Individual productivity", elements: "Morning Brief inbox, cross-tool task aggregation, session memory panel" },
  { view: "RevOps", function: "Pipeline governance", elements: "Quote-to-Cash velocity, SLA adherence grids, forecast accuracy tracking" },
  { view: "Finance", function: "Economic health", elements: "Cash flow cockpit, collection prioritization, revenue risk correlation" },
  { view: "Technical Integrity", function: "System health monitoring", elements: "Connector status grid, Spine data flow diagnostics, sync latency indicators" },
  { view: "Regional / SMB", function: "Localized compliance", elements: "UAE SMB/FZE views, geographically-filtered regulatory context" },
  { view: "Cross-Functional", function: "Inter-departmental alignment", elements: "Shared Entity 360 views, collaborative approval queues" },
  { view: "DevOps", function: "Infrastructure oversight", elements: "API health monitors, webhook status, normalization pipeline diagnostics" },
  { view: "Admin / Governance", function: "Truth Boundary configuration", elements: "Approval rule matrices, permission workflows, audit log viewer" },
];

const coreComponents = [
  { icon: GitMerge, color: "text-blue-400", name: "Entity 360 Navigator", desc: "Visual relation graphs — Account → Contacts → Deals → Tickets → Invoices — assembled in real time from Spine records." },
  { icon: Clock, color: "text-violet-400", name: "Temporal Slider", desc: "\"Show me this account as of [Date]\" with point-in-time reconstruction from versioned SpineVault records." },
  { icon: Map, color: "text-amber-400", name: "Conflict Resolution UI", desc: "Side-by-side comparison when systems disagree — e.g., Salesforce vs. QuickBooks revenue — with manual resolution and canonical selection." },
  { icon: Cpu, color: "text-emerald-400", name: "Schema Mapper", desc: "Visual interface showing how every tool field maps to canonical Spine entities. Inspect and audit field-level normalization." },
];

export function WorkbenchContent() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <Header />

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-white/60 mb-8">
              <Cpu className="w-4 h-4" />
              Workbench
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
              12 domain-specific views.<br />One schema-driven workspace.
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
              The Workbench auto-reconstructs as you connect new tools. Every domain view maps to the canonical Spine schema — no custom builds, no code changes.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-20 px-6">
        <div className="max-w-5xl mx-auto space-y-10">

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden">
            <div className="px-8 py-6 border-b border-white/10">
              <h2 className="text-lg font-bold">Domain-Specific Views</h2>
            </div>
            <div className="hidden md:grid grid-cols-3 gap-0 px-8 py-3 border-b border-white/5">
              <div className="text-xs font-semibold text-white/30 uppercase tracking-widest">View</div>
              <div className="text-xs font-semibold text-white/30 uppercase tracking-widest">Primary Function</div>
              <div className="text-xs font-semibold text-white/30 uppercase tracking-widest">Key Interface Elements</div>
            </div>
            <div className="divide-y divide-white/5">
              {views.map((v, i) => (
                <motion.div key={v.view} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.03 }}
                  className="grid grid-cols-1 md:grid-cols-3 gap-2 px-8 py-4 hover:bg-white/[0.02] transition-colors">
                  <div className="font-semibold text-sm text-white">{v.view}</div>
                  <div className="text-sm text-white/50">{v.function}</div>
                  <div className="text-sm text-white/35">{v.elements}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div>
            <h2 className="text-sm font-bold mb-5 text-white/50 uppercase tracking-widest">Core Interface Components</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {coreComponents.map((c, i) => (
                <motion.div key={c.name} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mt-0.5">
                    <c.icon className={`w-5 h-5 ${c.color}`} />
                  </div>
                  <div>
                    <div className="font-semibold mb-1.5">{c.name}</div>
                    <p className="text-white/50 text-sm leading-relaxed">{c.desc}</p>
                  </div>
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
