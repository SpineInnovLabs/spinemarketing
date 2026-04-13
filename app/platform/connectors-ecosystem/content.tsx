"use client";

import { motion } from "framer-motion";
import { Plug, RefreshCw, Globe, Zap, FileText, Shield } from "lucide-react";
import Header from "@/components/header";
import { Footer } from "@/components/footer";

const protocols = [
  { icon: Globe, color: "text-blue-400", name: "SaaS APIs", desc: "RESTful connections to Salesforce, HubSpot, Stripe, Zendesk, and 60+ SaaS tools with field-level schema registry." },
  { icon: Zap, color: "text-violet-400", name: "MCP Protocol", desc: "Model Context Protocol — a standardized bridge for AI-native communication, giving models controlled access to local and remote data." },
  { icon: RefreshCw, color: "text-purple-400", name: "Webhooks", desc: "Event-driven real-time ingestion. Payloads arrive, validate, and enter the normalization feed with idempotency keys." },
  { icon: FileText, color: "text-amber-400", name: "File Ingestion", desc: "CSV, PDF, XLSX drops processed through the same parsing and normalization pipeline as live API data." },
];

const autoUpgrade = [
  { title: "Native Protocol Adaptation", desc: "Connectors adapt automatically as external APIs evolve — no manual intervention when Salesforce or Stripe updates their schema." },
  { title: "Schema Drift Detection", desc: "Upstream field changes are detected in the mapping layer and automatically reconciled against the canonical Spine schema." },
  { title: "Zero-Downtime Updates", desc: "Connector upgrades apply with no sync interruption. Data continues flowing while the new mapping is applied in the background." },
  { title: "Version Rollback", desc: "If an upstream change breaks integration, the previous connector version is available for immediate rollback with one click." },
];

const services = [
  { icon: Plug, color: "text-cyan-400", name: "Loader Service", desc: "High-velocity ingestion engine with Dead Letter Queue management — failed records are held, retried, and surfaced for review." },
  { icon: Globe, color: "text-emerald-400", name: "Adapter Pattern", desc: "Standardized interface per connector category (CRM, Billing, Support) ensures consistent normalization regardless of vendor." },
  { icon: Shield, color: "text-rose-400", name: "Schema Registry", desc: "Versioned field mappings per connector. Every field-to-canonical mapping is tracked, auditable, and rollback-ready." },
];

export function ConnectorsEcosystemContent() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <Header />

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-white/60 mb-8">
              <Plug className="w-4 h-4" />
              Connectors EcoSystem
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
              Every input is a connector.
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
              SaaS tools, AI services, webhooks, and MCP protocols are all treated as sensory inputs to the Human API — normalized, versioned, and automatically upgraded.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-20 px-6">
        <div className="max-w-5xl mx-auto space-y-10">

          <div>
            <h2 className="text-lg font-bold mb-5 text-white/70 uppercase tracking-widest text-sm">Supported Protocols</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {protocols.map((p, i) => (
                <motion.div
                  key={p.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 flex gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mt-0.5">
                    <p.icon className={`w-5 h-5 ${p.color}`} />
                  </div>
                  <div>
                    <div className="font-semibold mb-1.5">{p.name}</div>
                    <p className="text-white/50 text-sm leading-relaxed">{p.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-8"
          >
            <h2 className="text-lg font-bold mb-6">Auto-Upgrade Capability</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {autoUpgrade.map((a) => (
                <div key={a.title} className="rounded-xl border border-white/8 bg-white/[0.02] p-5">
                  <div className="font-semibold mb-2 text-sm">{a.title}</div>
                  <p className="text-white/50 text-sm leading-relaxed">{a.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <div>
            <h2 className="text-lg font-bold mb-5 text-white/70 uppercase tracking-widest text-sm">Connector Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {services.map((s, i) => (
                <motion.div
                  key={s.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4">
                    <s.icon className={`w-5 h-5 ${s.color}`} />
                  </div>
                  <div className="font-semibold mb-2">{s.name}</div>
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
