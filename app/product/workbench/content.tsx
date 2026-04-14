"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Cpu,
  GitMerge,
  Clock,
  Map,
  ChevronDown,
  Users,
  Briefcase,
  User,
  BarChart3,
  DollarSign,
  Server,
  Globe,
  Layers,
  Code2,
  Shield,
  Eye,
  TrendingUp,
  Brain,
  Sparkles,
  CheckCircle2,
  Activity,
} from "lucide-react";
import { Header } from "@/components/header-client";
import { Footer } from "@/components/footer";

const viewCategories = [
  {
    category: "Customer & Revenue",
    icon: Users,
    views: [
      { view: "Account Success", function: "Strategic account visibility", elements: "Entity 360 cards, renewal risk, QBR prep", icon: TrendingUp, accent: true },
      { view: "Customer Success", function: "Relationship health", elements: "Health heatmaps, churn mitigation, sponsor tracking", icon: Users },
      { view: "RevOps", function: "Pipeline governance", elements: "Quote-to-Cash velocity, SLA grids, forecasts", icon: BarChart3 },
    ],
  },
  {
    category: "Operations & Execution",
    icon: Briefcase,
    views: [
      { view: "Business Operations", function: "Process optimization", elements: "Pipeline correlation, Flow Trace, bottlenecks", icon: Activity },
      { view: "Executive Oversight", function: "Leadership summaries", elements: "Monday Brief, Board Pack, cross-dept metrics", icon: Eye },
      { view: "Finance", function: "Economic health", elements: "Cash flow cockpit, collection priority, revenue risk", icon: DollarSign },
    ],
  },
  {
    category: "Personal & Team",
    icon: User,
    views: [
      { view: "Personal Ops", function: "Individual productivity", elements: "Morning Brief, cross-tool tasks, session memory", icon: User },
      { view: "Cross-Functional", function: "Inter-departmental alignment", elements: "Shared Entity 360s, collaborative approvals", icon: Layers },
      { view: "Regional / SMB", function: "Localized compliance", elements: "Geo-filtered views, regulatory context", icon: Globe },
    ],
  },
  {
    category: "Technical & Governance",
    icon: Server,
    views: [
      { view: "Technical Integrity", function: "System health monitoring", elements: "Connector status, Spine diagnostics, sync latency", icon: Server },
      { view: "DevOps", function: "Infrastructure oversight", elements: "API monitors, webhook status, pipeline diagnostics", icon: Code2 },
      { view: "Admin / Governance", function: "Truth Boundary config", elements: "Approval matrices, permissions, audit logs", icon: Shield },
    ],
  },
];

const coreComponents = [
  {
    icon: GitMerge,
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
    borderColor: "border-blue-400/20",
    name: "Entity 360 Navigator",
    desc: "Visual relation graphs assembled in real time from Spine records.",
  },
  {
    icon: Clock,
    color: "text-violet-400",
    bgColor: "bg-violet-400/10",
    borderColor: "border-violet-400/20",
    name: "Temporal Slider",
    desc: "Point-in-time reconstruction from versioned Spine records.",
  },
  {
    icon: Map,
    color: "text-amber-400",
    bgColor: "bg-amber-400/10",
    borderColor: "border-amber-400/20",
    name: "Conflict Resolution UI",
    desc: "Side-by-side comparison when systems disagree. You pick canonical truth.",
  },
  {
    icon: Cpu,
    color: "text-emerald-400",
    bgColor: "bg-emerald-400/10",
    borderColor: "border-emerald-400/20",
    name: "Schema Mapper",
    desc: "See how every tool field maps to canonical Spine entities.",
  },
];

function WorkbenchMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ type: "spring", damping: 18, stiffness: 60 }}
      className="relative w-full max-w-[700px] mx-auto"
    >
      <div className="rounded-2xl border border-white/[0.1] overflow-hidden" style={{ boxShadow: "0 0 80px rgba(27,167,132,0.08), 0 20px 60px rgba(0,0,0,0.4)" }}>
        <div className="flex items-center gap-1.5 px-4 py-2.5 bg-[#0c1018] border-b border-white/[0.06]">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
            <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
            <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
          </div>
          <div className="flex-1 flex justify-center">
            <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-md bg-white/[0.04] border border-white/[0.06]">
              <span className="text-[9px] text-white/30">app.integratewise.co/workbench</span>
            </div>
          </div>
        </div>

        <div className="flex" style={{ background: "#0a0e14" }}>
          <div className="w-[120px] shrink-0 border-r border-white/[0.06] p-2 space-y-0.5">
            <div className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-primary/10">
              <Users className="w-2.5 h-2.5 text-primary" />
              <span className="text-[8px] text-primary font-semibold">Accounts</span>
            </div>
            {["Pipeline", "Tasks", "Calendar", "Analytics"].map((item) => (
              <div key={item} className="flex items-center gap-1.5 px-2 py-1 rounded-md">
                <div className="w-2.5 h-2.5 rounded bg-white/[0.06]" />
                <span className="text-[8px] text-white/30">{item}</span>
              </div>
            ))}
            <div className="mt-3 pt-2 border-t border-white/[0.04]">
              <div className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-primary/[0.06]">
                <Sparkles className="w-2.5 h-2.5 text-primary" />
                <span className="text-[8px] text-primary font-semibold">Twin</span>
              </div>
            </div>
          </div>

          <div className="flex-1 p-4 min-w-0">
            <div className="flex items-center justify-between mb-3">
              <div>
                <div className="text-[10px] text-white font-bold">Account Success</div>
                <div className="text-[8px] text-white/30">6 accounts · $1.75M ARR</div>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="px-2 py-0.5 rounded bg-primary text-[7px] text-white font-bold">+ Add</div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2">
              {[
                { name: "TechServe", health: 92, arr: "$420K", color: "rgb(27,167,132)" },
                { name: "CloudBridge", health: 78, arr: "$280K", color: "#f59e0b" },
                { name: "FinanceFlow", health: 54, arr: "$180K", color: "#ef4444" },
                { name: "DataVault", health: 88, arr: "$350K", color: "rgb(27,167,132)" },
                { name: "RetailNest", health: 71, arr: "$95K", color: "#f59e0b" },
                { name: "HealthTech", health: 95, arr: "$210K", color: "rgb(27,167,132)" },
              ].map((acct) => (
                <div key={acct.name} className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-2">
                  <div className="text-[8px] text-white font-semibold">{acct.name}</div>
                  <div className="text-[10px] text-white font-bold mt-0.5">{acct.arr}</div>
                  <div className="mt-1 h-1 rounded-full bg-white/[0.06] overflow-hidden">
                    <div className="h-full rounded-full" style={{ width: `${acct.health}%`, backgroundColor: acct.color }} />
                  </div>
                  <div className="text-[7px] mt-0.5 font-semibold" style={{ color: acct.color }}>{acct.health}/100</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ViewAccordion() {
  const [openCategory, setOpenCategory] = useState<string | null>("Customer & Revenue");

  return (
    <div className="space-y-3 max-w-[800px] mx-auto">
      {viewCategories.map((cat, catIdx) => {
        const isOpen = openCategory === cat.category;
        const CatIcon = cat.icon;
        return (
          <motion.div
            key={cat.category}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: catIdx * 0.08 }}
            className={`rounded-2xl border overflow-hidden transition-all ${
              isOpen ? "border-primary/20 bg-primary/[0.03]" : "border-white/[0.08] bg-white/[0.02]"
            }`}
          >
            <button
              onClick={() => setOpenCategory(isOpen ? null : cat.category)}
              className="w-full flex items-center gap-3 px-6 py-4 text-left"
            >
              <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${isOpen ? "bg-primary/15" : "bg-white/[0.06]"}`}>
                <CatIcon className={`h-4 w-4 ${isOpen ? "text-primary" : "text-white/50"}`} />
              </div>
              <div className="flex-1">
                <div className="text-[14px] font-semibold text-white">{cat.category}</div>
                <div className="text-[12px] text-white/40">{cat.views.length} views</div>
              </div>
              <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                <ChevronDown className="h-4 w-4 text-white/30" />
              </motion.div>
            </button>

            {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-5 space-y-2.5">
                    {cat.views.map((v, i) => {
                      const ViewIcon = v.icon;
                      return (
                        <motion.div
                          key={v.view}
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.06 }}
                          className={`rounded-xl border p-4 transition-all hover:-translate-y-0.5 ${
                            "accent" in v && v.accent
                              ? "border-primary/20 bg-primary/[0.06]"
                              : "border-white/[0.06] bg-white/[0.03]"
                          }`}
                        >
                          <div className="flex items-start gap-3">
                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/15">
                              <ViewIcon className="h-4 w-4 text-primary" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2">
                                <span className="text-[14px] font-semibold text-white">{v.view}</span>
                                <span className="text-[11px] text-white/30">·</span>
                                <span className="text-[12px] text-white/40">{v.function}</span>
                              </div>
                              <p className="mt-1 text-[12px] text-white/35 leading-relaxed">{v.elements}</p>
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              )}
          </motion.div>
        );
      })}
    </div>
  );
}

export function WorkbenchContent() {
  return (
    <div className="min-h-screen bg-dark-section text-white">
      <Header />

      <section className="relative overflow-hidden pt-36 pb-20 px-6">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-[20%] h-[500px] w-[600px] -translate-x-1/2 rounded-full opacity-15 blur-[120px]" style={{ background: "radial-gradient(circle, rgba(27,167,132,0.2), transparent 70%)" }} />
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-white/60 mb-6">
              <Cpu className="w-4 h-4" />
              Workbench
            </div>
            <h1 className="text-[48px] md:text-[60px] font-semibold leading-[1.05] tracking-[-0.055em] text-white mb-5">
              Feel everything.{" "}
              <span className="text-primary">Control every reflex.</span>
            </h1>
            <p className="text-[17px] text-white/50 max-w-xl mx-auto leading-relaxed font-medium">
              One workspace with full context and governed AI across 12 domain views.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-24 px-6">
        <WorkbenchMockup />
      </section>

      <div className="section-divider" />

      <section className="relative overflow-hidden bg-dark-section py-28 px-6">
        <div className="relative max-w-[1100px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", damping: 18, stiffness: 70 }}
            className="mx-auto max-w-2xl text-center mb-14"
          >
            <p className="mb-3 text-[12px] font-bold uppercase tracking-[0.12em] text-primary">
              Domain Views
            </p>
            <h2 className="text-[40px] font-semibold leading-[1.15] tracking-[-0.05em] text-white sm:text-[48px]">
              12 domain views.{" "}
              <span className="text-primary">Role-aware.</span>
            </h2>
            <p className="mt-4 text-[16px] font-medium leading-[1.6] text-white/45">
              Each view maps to the canonical Spine schema.
            </p>
          </motion.div>

          <ViewAccordion />
        </div>
      </section>

      <div className="section-divider-subtle" />

      <section className="relative overflow-hidden bg-dark-section py-28 px-6">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute right-[15%] top-[20%] h-[350px] w-[450px] rounded-full opacity-12 blur-[100px]" style={{ background: "radial-gradient(circle, rgba(139,92,246,0.12), transparent 70%)" }} />
        </div>
        <div className="relative max-w-[1100px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", damping: 18, stiffness: 70 }}
            className="mx-auto max-w-2xl text-center mb-14"
          >
            <p className="mb-3 text-[12px] font-bold uppercase tracking-[0.12em] text-primary">
              The Twin
            </p>
            <h2 className="text-[40px] font-semibold leading-[1.15] tracking-[-0.05em] text-white sm:text-[48px]">
              The brain{" "}
              <span className="text-primary">at the top.</span>
            </h2>
            <p className="mt-4 text-[16px] font-medium leading-[1.6] text-white/45">
              Reads the Spine. Suggests actions. Waits for you.
            </p>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-3 max-w-[900px] mx-auto">
            {[
              {
                icon: Brain,
                title: "Morning Brief",
                desc: "Overnight changes distilled into three priorities.",
              },
              {
                icon: Sparkles,
                title: "Execute with confidence",
                desc: "Draft, update, create — approved actions only.",
              },
              {
                icon: Shield,
                title: "Conscious control",
                desc: "Drafts wait. You edit and approve. Full audit trail.",
              },
            ].map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, type: "spring", damping: 18, stiffness: 70 }}
                className="relative rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 transition-all hover:border-white/[0.15] hover:-translate-y-0.5"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 mb-4">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-[16px] font-semibold tracking-[-0.03em] text-white">{title}</h3>
                <p className="mt-2 text-[13px] font-medium leading-[1.65] text-white/40">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      <section className="relative overflow-hidden bg-dark-section py-28 px-6 bg-dot-grid">
        <div className="relative max-w-[1100px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", damping: 18, stiffness: 70 }}
            className="mx-auto max-w-2xl text-center mb-14"
          >
            <p className="mb-3 text-[12px] font-bold uppercase tracking-[0.12em] text-primary">
              Core Components
            </p>
            <h2 className="text-[36px] font-semibold leading-[1.15] tracking-[-0.05em] text-white sm:text-[44px]">
              Governance{" "}
              <span className="text-primary">by design.</span>
            </h2>
            <p className="mt-4 text-[16px] font-medium leading-[1.6] text-white/45">
              Audit everything. Own your data.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-[900px] mx-auto">
            {coreComponents.map((c, i) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className={`relative rounded-2xl border ${c.borderColor} bg-white/[0.02] p-6 flex gap-4 transition-all hover:-translate-y-0.5 overflow-hidden`}
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
                <div className={`w-10 h-10 rounded-xl ${c.bgColor} border ${c.borderColor} flex items-center justify-center shrink-0 mt-0.5`}>
                  <c.icon className={`w-5 h-5 ${c.color}`} />
                </div>
                <div>
                  <div className="font-semibold mb-1.5 text-[15px] text-white">{c.name}</div>
                  <p className="text-white/40 text-[13px] leading-relaxed">{c.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
