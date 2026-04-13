"use client";

import { motion } from "framer-motion";
import { Server, Zap, Database, Globe, BarChart3, Layers, ArrowRight } from "lucide-react";
import { Header } from "@/components/header-client";
import { Footer } from "@/components/footer";
import Link from "next/link";

const firebaseCards = [
  {
    title: "Realtime Database",
    desc: "High-velocity synchronization for live Workbench views. Entity state updates propagate to every connected client within sub-100ms from normalization to UI update.",
  },
  {
    title: "State Persistence",
    desc: "Current state of every entity, signal, and Twin activation maintained across sessions — survives browser refreshes, timeouts, and device switches without data loss.",
  },
  {
    title: "Cloud Functions Eventing",
    desc: "Cloud Functions trigger on SpineVault updates, driving downstream view assembly, signal detection, and notification routing automatically — no polling, pure event-driven.",
  },
];

const services = [
  {
    icon: Database,
    accent: "#3b82f6",
    bg: "rgba(59,130,246,0.12)",
    name: "Spine Service",
    desc: "Core SSOT, entity resolution, schema governance. The authoritative source for all canonical data — every read and write flows through here.",
  },
  {
    icon: Layers,
    accent: "#8b5cf6",
    bg: "rgba(139,92,246,0.12)",
    name: "Context Service",
    desc: "Real-time view assembly and conflict detection. Composes domain-specific views from raw Spine data on demand — no pre-computed aggregates to go stale.",
  },
  {
    icon: Zap,
    accent: "#a855f7",
    bg: "rgba(168,85,247,0.12)",
    name: "Twin Service",
    desc: "AI reasoning engine and signal detection. Evaluates Entity 360 changes and generates trigger scoring — the cognitive layer of the platform.",
  },
  {
    icon: Globe,
    accent: "#f59e0b",
    bg: "rgba(245,158,11,0.12)",
    name: "Approval Service",
    desc: "TruthLayer governance and routing logic. Manages the HITL queue and approval topology — ensuring every proposed action reaches the right human.",
  },
  {
    icon: BarChart3,
    accent: "#10b981",
    bg: "rgba(16,185,129,0.12)",
    name: "Action Service",
    desc: "Write-back execution with idempotency and rollback. Executes approved actions against connected systems — with a 24-hour revert window on every write.",
  },
  {
    icon: Server,
    accent: "#06b6d4",
    bg: "rgba(6,182,212,0.12)",
    name: "Notification Service",
    desc: "Alert routing and digest generation. Delivers signals, Morning Briefs, and exception alerts to the right people at the right time — no notification spam.",
  },
];

const scalabilityCards = [
  {
    title: "Cloudflare Edge",
    desc: "Workers deployed at the edge for low-latency global access. Requests route to the nearest point of presence automatically.",
  },
  {
    title: "D1 / R2 Storage",
    desc: "Distributed storage for SpineVault (D1) and blob data (R2) — durable, globally replicated, and cost-efficient at scale.",
  },
  {
    title: "Queue Management",
    desc: "Cloudflare Queues handle async processing and Dead Letter Queue management — no data lost during ingestion spikes.",
  },
];

export function InfrastructureContent() {
  return (
    <div className="relative min-h-screen bg-[#08070e] text-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 left-1/3 w-[700px] h-[700px] rounded-full blur-[220px]" style={{ background: "rgba(6,182,212,0.05)" }} />
        <div className="absolute top-[50%] right-1/4 w-[500px] h-[500px] rounded-full blur-[180px]" style={{ background: "rgba(27,167,132,0.05)" }} />
      </div>

      <Header />

      <section className="relative pt-36 pb-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm text-white/50 mb-8">
              <Server className="w-3.5 h-3.5 text-primary" />
              <span>Infrastructure</span>
            </div>
            <h1 className="text-[52px] md:text-[68px] font-bold leading-[1.05] tracking-tight mb-6">
              <span className="bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">Six services.</span>
              <br />
              <span className="text-primary">Global edge. Sub-100ms.</span>
            </h1>
            <p className="text-xl text-white/55 max-w-2xl mx-auto leading-relaxed mb-10">
              Firebase Realtime Database, Cloudflare Workers at the edge, versioned D1 storage, and six purpose-built microservices — the engine behind every sync, signal, and approved action.
            </p>
            <Link
              href="/contact?intent=demo"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[15px] font-semibold text-white"
              style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-button)" }}
            >
              See the architecture <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="relative pb-16 px-6">
        <div className="max-w-5xl mx-auto space-y-16">

          <div className="grid grid-cols-3 gap-6 text-center">
            {[
              { value: "<100ms", label: "Normalization to UI" },
              { value: "6", label: "Purpose-built services" },
              { value: "Global", label: "Cloudflare edge distribution" },
            ].map((s) => (
              <div key={s.label} className="rounded-2xl border border-white/8 bg-white/[0.03] py-8">
                <div className="text-3xl font-bold text-primary mb-1">{s.value}</div>
                <div className="text-sm text-white/45">{s.label}</div>
              </div>
            ))}
          </div>

          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "rgba(245,158,11,0.12)" }}>
                <Zap className="w-5 h-5" style={{ color: "#f59e0b" }} />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Firebase Architecture</h2>
                <p className="text-white/40 text-sm">Real-time sync, event-driven state, cross-session persistence</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {firebaseCards.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-7 hover:border-white/[0.15] transition-colors"
                >
                  <h3 className="text-lg font-bold mb-3">{f.title}</h3>
                  <p className="text-white/55 leading-relaxed text-sm">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "rgba(27,167,132,0.12)" }}>
                <Layers className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Service Architecture</h2>
                <p className="text-white/40 text-sm">Six microservices, each with a single clear responsibility</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s, i) => (
                <motion.div
                  key={s.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
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

          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "rgba(6,182,212,0.12)" }}>
                <Globe className="w-5 h-5" style={{ color: "#06b6d4" }} />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Cloudflare Edge & Scale</h2>
                <p className="text-white/40 text-sm">Edge distribution, distributed storage, async queue management</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {scalabilityCards.map((s, i) => (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-7 hover:border-white/[0.15] transition-colors"
                >
                  <h3 className="text-lg font-bold mb-3">{s.title}</h3>
                  <p className="text-white/55 leading-relaxed text-sm">{s.desc}</p>
                </motion.div>
              ))}
            </div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Built for scale from day one.</h2>
            <p className="text-white/50 text-lg mb-10 max-w-lg mx-auto">Walk through the full infrastructure architecture and see how it handles your data volumes and growth.</p>
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
