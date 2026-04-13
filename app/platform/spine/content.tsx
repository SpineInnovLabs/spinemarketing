"use client";

import { motion } from "framer-motion";
import { Database, Shield, Clock, GitMerge, ArrowRight, Layers } from "lucide-react";
import Header from "@/components/header";
import { Footer } from "@/components/footer";

const pipeline = [
  { step: "01", name: "Ingest", desc: "APIs, webhooks, streaming, files" },
  { step: "02", name: "Validate", desc: "Schema and auth checks" },
  { step: "03", name: "Parse", desc: "Extract from vendor formats" },
  { step: "04", name: "Normalize", desc: "Map to canonical schema" },
  { step: "05", name: "Deduplicate", desc: "Golden record creation" },
  { step: "06", name: "Enrich", desc: "Metadata, timestamps, relations" },
  { step: "07", name: "Persist", desc: "D1/PostgreSQL with versioning" },
  { step: "08", name: "Emit", desc: "Trigger downstream views" },
];

const capabilities = [
  {
    icon: Database,
    title: "SpineVault",
    desc: "Maintains Knowledge Memory in constant readiness — zero-shot context maintenance without retraining. Every entity state is preserved with full version history.",
  },
  {
    icon: GitMerge,
    title: "Canonical Entities",
    desc: "Account, Contact, Deal, Ticket, Invoice exist as neutral objects that survive CRM migrations. Vendor fields map to canonical schema — never the other way around.",
  },
  {
    icon: Clock,
    title: "Temporal Truth",
    desc: "Append-only versioning enables point-in-time reconstruction of any entity state. Reconstruct exactly what was known about any record at any moment in history.",
  },
  {
    icon: Shield,
    title: "Schema Drift Immunity",
    desc: "Upstream API changes are handled in the mapping layer. The Spine schema remains constant — no downstream breakage when Salesforce updates a field name or Stripe restructures an object.",
  },
];

export function SpineContent() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <Header />

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-white/60 mb-8">
              <Database className="w-4 h-4" />
              Spine
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
              The central nervous system<br />and System of Record.
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
              A vendor-neutral canonical layer that converts disparate SaaS outputs into unified, actionable context. Not a pipeline. Not a warehouse. An ontological filter that standardizes every data stream into a universal schema.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {capabilities.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-7"
              >
                <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-5">
                  <c.icon className="w-5 h-5 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold mb-3">{c.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{c.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-8"
          >
            <div className="flex items-center gap-3 mb-8">
              <Layers className="w-5 h-5 text-violet-400" />
              <h2 className="text-xl font-bold">8-Stage Normalization Feed</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {pipeline.map((p, i) => (
                <div key={p.step} className="relative">
                  <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                    <div className="text-xs font-mono text-white/30 mb-1">{p.step}</div>
                    <div className="font-semibold text-white mb-1">{p.name}</div>
                    <div className="text-xs text-white/45 leading-relaxed">{p.desc}</div>
                  </div>
                  {i < pipeline.length - 1 && i % 4 !== 3 && (
                    <ArrowRight className="hidden md:block absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 z-10" />
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
