"use client";

import { motion } from "framer-motion";
import { Plug, RefreshCw, Globe, Zap, FileText, Shield, ArrowRight } from "lucide-react";
import { Header } from "@/components/header-client";
import { Footer } from "@/components/footer";
import Link from "next/link";

const protocols = [
  {
    icon: Globe, accent: "#3b82f6", bg: "rgba(59,130,246,0.12)",
    name: "SaaS APIs",
    desc: "RESTful connections to Salesforce, HubSpot, Stripe, Zendesk, and 60+ SaaS tools with field-level schema registry. Every field maps to a canonical Spine entity.",
    tags: ["60+ integrations", "Field-level schema", "Auto-mapping"],
  },
  {
    icon: Zap, accent: "#8b5cf6", bg: "rgba(139,92,246,0.12)",
    name: "MCP Protocol",
    desc: "Model Context Protocol — a standardized bridge for AI-native communication, giving models controlled access to local and remote data without custom integration work.",
    tags: ["AI-native bridge", "Controlled data access", "Standardized"],
  },
  {
    icon: RefreshCw, accent: "#a855f7", bg: "rgba(168,85,247,0.12)",
    name: "Webhooks",
    desc: "Event-driven real-time ingestion. Payloads arrive, validate, and enter the normalization feed with idempotency keys — guaranteeing no duplicate records even on retries.",
    tags: ["Real-time events", "Idempotency keys", "Retry-safe"],
  },
  {
    icon: FileText, accent: "#f59e0b", bg: "rgba(245,158,11,0.12)",
    name: "File Ingestion",
    desc: "CSV, PDF, and XLSX drops processed through the same parsing and normalization pipeline as live API data — no separate workflow, no manual mapping.",
    tags: ["CSV / PDF / XLSX", "Same pipeline", "Automatic normalization"],
  },
];

const services = [
  {
    icon: Plug, accent: "#06b6d4", bg: "rgba(6,182,212,0.12)",
    name: "Loader Service",
    desc: "High-velocity ingestion engine with Dead Letter Queue management — failed records are held, retried, and surfaced for review without losing a single event.",
  },
  {
    icon: Globe, accent: "#10b981", bg: "rgba(16,185,129,0.12)",
    name: "Adapter Pattern",
    desc: "Standardized interface per connector category (CRM, Billing, Support) ensures consistent normalization regardless of which vendor you swap in or out.",
  },
  {
    icon: Shield, accent: "#f43f5e", bg: "rgba(244,63,94,0.12)",
    name: "Schema Registry",
    desc: "Versioned field mappings per connector. Every field-to-canonical mapping is tracked, auditable, and rollback-ready when upstream APIs change.",
  },
];

export function ConnectorsEcosystemContent() {
  return (
    <div className="relative min-h-screen bg-[#08070e] text-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 right-1/4 w-[600px] h-[600px] rounded-full blur-[200px]" style={{ background: "rgba(27,167,132,0.06)" }} />
        <div className="absolute top-[50%] left-1/5 w-[500px] h-[500px] rounded-full blur-[180px]" style={{ background: "rgba(99,102,241,0.05)" }} />
      </div>

      <Header />

      <section className="relative pt-36 pb-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm text-white/50 mb-8">
              <Plug className="w-3.5 h-3.5 text-primary" />
              <span>Connectors EcoSystem</span>
            </div>
            <h1 className="text-[52px] md:text-[68px] font-bold leading-[1.05] tracking-tight mb-6">
              <span className="bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">Every source.</span>
              <br />
              <span className="text-primary">One normalized feed.</span>
            </h1>
            <p className="text-xl text-white/55 max-w-2xl mx-auto leading-relaxed mb-10">
              SaaS APIs, AI models, webhooks, and file drops — all treated as sensory inputs to the Spine. Automatically upgraded when upstream APIs change. Zero manual intervention.
            </p>
            <Link
              href="/contact?intent=demo"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[15px] font-semibold text-white"
              style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-button)" }}
            >
              See your stack connected <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="relative pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-3 gap-6 mb-16 text-center">
            {[
              { value: "60+", label: "SaaS integrations" },
              { value: "4", label: "Protocol types" },
              { value: "Zero", label: "Downtime on upgrades" },
            ].map((s) => (
              <div key={s.label} className="rounded-2xl border border-white/8 bg-white/[0.03] py-8">
                <div className="text-3xl font-bold text-primary mb-1">{s.value}</div>
                <div className="text-sm text-white/45">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {protocols.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-8 hover:border-white/[0.15] transition-colors"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                  style={{ background: p.bg, boxShadow: `0 0 30px ${p.bg}` }}
                >
                  <p.icon className="w-6 h-6" style={{ color: p.accent }} />
                </div>
                <h3 className="text-xl font-bold mb-3">{p.name}</h3>
                <p className="text-white/55 leading-relaxed mb-5">{p.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-full text-xs border border-white/[0.08] text-white/40 bg-white/[0.03]">{t}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-8 hover:border-white/[0.15] transition-colors"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                  style={{ background: s.bg, boxShadow: `0 0 30px ${s.bg}` }}
                >
                  <s.icon className="w-6 h-6" style={{ color: s.accent }} />
                </div>
                <h3 className="text-xl font-bold mb-3">{s.name}</h3>
                <p className="text-white/55 leading-relaxed text-sm">{s.desc}</p>
              </motion.div>
            ))}
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Connect everything in minutes.</h2>
            <p className="text-white/50 text-lg mb-10 max-w-lg mx-auto">See how the Connectors EcoSystem turns your fragmented SaaS stack into a single normalized data feed.</p>
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
