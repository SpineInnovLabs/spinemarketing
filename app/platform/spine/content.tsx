"use client";

import { motion } from "framer-motion";
import { Database, Shield, Clock, GitMerge, Layers, ArrowRight } from "lucide-react";
import { Header } from "@/components/header-client";
import { Footer } from "@/components/footer";
import Link from "next/link";

const capabilities = [
  {
    icon: Database,
    title: "SpineVault",
    desc: "Knowledge Memory in constant readiness — zero retraining needed.",
    stat: "Zero retraining",
  },
  {
    icon: GitMerge,
    title: "Canonical Entities",
    desc: "Vendor-neutral objects that survive CRM migrations.",
    stat: "Vendor-neutral",
  },
  {
    icon: Clock,
    title: "Temporal Truth",
    desc: "Point-in-time reconstruction of any entity state.",
    stat: "Full history",
  },
  {
    icon: Shield,
    title: "Schema Drift Immunity",
    desc: "Upstream API changes handled in the mapping layer.",
    stat: "Always stable",
  },
];

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

export function SpineContent() {
  return (
    <div className="relative min-h-screen bg-[#08070e] text-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 left-1/4 w-[700px] h-[700px] rounded-full blur-[220px]" style={{ background: "rgba(27,167,132,0.07)" }} />
        <div className="absolute top-80 right-1/5 w-[500px] h-[500px] rounded-full blur-[180px]" style={{ background: "rgba(99,102,241,0.05)" }} />
      </div>

      <Header />

      <section className="relative pt-36 pb-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm text-white/50 mb-8">
              <Database className="w-3.5 h-3.5 text-primary" />
              <span>Adaptive Spine Architecture</span>
            </div>
            <h1 className="text-[52px] md:text-[68px] font-bold leading-[1.0] tracking-tight mb-6">
              <span className="bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">The canonical record</span>
              <br />
              <span className="text-primary">everything else maps to.</span>
            </h1>
            <p className="text-xl text-white/55 max-w-2xl mx-auto leading-relaxed mb-10">
              A vendor-neutral data layer converting fragmented SaaS into one versioned source of truth.
            </p>
            <Link
              href="/contact?intent=demo"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[15px] font-semibold text-white"
              style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-button)" }}
            >
              See the Spine live <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="relative pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-3 gap-6 mb-16 text-center">
            {[
              { value: "8-Stage", label: "Normalization pipeline" },
              { value: "<100ms", label: "Normalization to UI" },
              { value: "100%", label: "Schema-stable" },
            ].map((s) => (
              <div key={s.label} className="rounded-2xl border border-white/8 bg-white/[0.03] py-8">
                <div className="text-3xl font-bold text-primary mb-1">{s.value}</div>
                <div className="text-sm text-white/45">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {capabilities.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-8 hover:border-white/[0.15] transition-colors"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                  style={{ background: "rgba(27,167,132,0.12)", boxShadow: "0 0 30px rgba(27,167,132,0.12)" }}
                >
                  <c.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold">{c.title}</h3>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">{c.stat}</span>
                </div>
                <p className="text-white/55 leading-relaxed">{c.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.05] to-transparent p-10"
          >
            <div className="flex items-center gap-3 mb-10">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "rgba(27,167,132,0.12)" }}>
                <Layers className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">8-Stage Normalization Pipeline</h2>
                <p className="text-white/45 text-sm">Every record follows the same governed path.</p>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {pipeline.map((p, i) => (
                <div key={p.step} className="relative rounded-xl border border-white/[0.08] bg-white/[0.03] p-5 hover:border-primary/30 hover:bg-primary/[0.03] transition-colors">
                  <div className="text-2xl font-bold text-white/10 mb-2">{p.step}</div>
                  <div className="font-semibold text-white mb-1">{p.name}</div>
                  <div className="text-xs text-white/40 leading-relaxed">{p.desc}</div>
                  {i < pipeline.length - 1 && i % 4 !== 3 && (
                    <ArrowRight className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary/40 z-10" />
                  )}
                </div>
              ))}
            </div>
          </motion.div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Your data, perfectly organized.</h2>
            <p className="text-white/50 text-lg mb-10 max-w-lg mx-auto">See the Spine unify your SaaS stack in 30 minutes.</p>
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
