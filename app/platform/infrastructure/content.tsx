"use client";

import { motion } from "framer-motion";
import { Server, Globe, ShieldCheck, Zap, BarChart3, RefreshCw } from "lucide-react";
import Header from "@/components/header";
import { Footer } from "@/components/footer";

const specs = [
  {
    icon: Server,
    title: "Multi-Region Deployment",
    desc: "IntegrateWise runs across distributed cloud regions with automatic failover, ensuring your workspace stays online regardless of provider-level incidents.",
    tags: ["Auto failover", "Multi-region", "99.9% SLA", "Zero-downtime deploys"],
  },
  {
    icon: ShieldCheck,
    title: "Encryption at Rest & In Transit",
    desc: "All data is encrypted at rest using AES-256 and in transit using TLS 1.3. Encryption keys are managed per-tenant and rotated on a configurable schedule.",
    tags: ["AES-256 at rest", "TLS 1.3 in transit", "Per-tenant keys", "Key rotation"],
  },
  {
    icon: Globe,
    title: "Connector Gateway",
    desc: "All outbound API calls to your SaaS tools flow through a managed Connector Gateway — rate-limited, retried, logged, and firewalled per integration.",
    tags: ["Rate limiting", "Retry logic", "Per-connector firewall", "Full request logs"],
  },
  {
    icon: Zap,
    title: "Event Bus",
    desc: "An internal event bus routes every data change, AI trigger, and user action as a typed event — enabling real-time reactions across the Execution Path without polling.",
    tags: ["Typed events", "Real-time routing", "No polling", "Fan-out delivery"],
  },
  {
    icon: BarChart3,
    title: "Observability",
    desc: "Full telemetry across sync pipelines, AI sessions, and connector calls. Latency, error rates, queue depth, and data freshness are monitored continuously.",
    tags: ["Pipeline telemetry", "Error rate tracking", "Queue monitoring", "Freshness dashboards"],
  },
  {
    icon: RefreshCw,
    title: "Background Sync Engine",
    desc: "A persistent sync engine manages incremental updates from every connected source — batching, deduplicating, and scheduling refreshes based on data criticality.",
    tags: ["Incremental sync", "Deduplication", "Priority scheduling", "Criticality-aware refresh"],
  },
];

export function InfrastructureContent() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <Header />

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-white/60 mb-8">
              <Server className="w-4 h-4" />
              Infrastructure
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
              Built for reliability,<br />security, and scale.
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              The infrastructure layer handles encryption, regional redundancy, real-time event routing, and full observability — so your workspace never has a single point of failure.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specs.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 hover:border-white/20 transition-colors"
            >
              <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-5">
                <s.icon className="w-5 h-5 text-cyan-400" />
              </div>
              <h3 className="text-lg font-semibold mb-3">{s.title}</h3>
              <p className="text-white/55 text-sm leading-relaxed mb-5">{s.desc}</p>
              <div className="flex flex-wrap gap-2">
                {s.tags.map((t) => (
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
