"use client";

import { motion } from "framer-motion";
import { Server, Zap, Database, Globe, BarChart3, Layers } from "lucide-react";
import Header from "@/components/header";
import { Footer } from "@/components/footer";

const firebase = [
  { title: "Realtime Database", desc: "High-velocity synchronization for live Workbench views. Entity state updates propagate to every connected client within sub-100ms." },
  { title: "State Persistence", desc: "Current state of every entity, signal, and Twin activation maintained across sessions — survives browser refreshes, timeouts, and device switches." },
  { title: "Cloud Functions Eventing", desc: "Cloud Functions trigger on SpineVault updates — driving downstream view assembly, signal detection, and notification routing automatically." },
];

const dataAccess = [
  { title: "Realtime Listeners", desc: "Domain-specific views update instantly as the Spine processes data. Sub-100ms latency from normalization to UI update." },
  { title: "Entity 360 Assembly", desc: "Graph queries join Account → Contacts → Deals → Tickets in a single request — assembled at read time from versioned Spine records." },
  { title: "Temporal Queries", desc: "Point-in-time reconstruction via versioned Spine records. Reconstruct any entity state at any historical moment." },
];

const services = [
  { icon: Database, color: "text-blue-400", name: "Spine Service", desc: "Core SSOT, entity resolution, schema governance. The authoritative source for all canonical data." },
  { icon: Layers, color: "text-violet-400", name: "Context Service", desc: "Real-time view assembly, conflict detection. Composes domain-specific views from raw Spine data on demand." },
  { icon: Zap, color: "text-purple-400", name: "Twin Service", desc: "AI reasoning engine, signal detection. Evaluates Entity 360 changes and generates trigger scoring." },
  { icon: Globe, color: "text-amber-400", name: "Approval Service", desc: "TruthLayer governance and routing logic. Manages the HITL queue and approval topology." },
  { icon: BarChart3, color: "text-emerald-400", name: "Action Service", desc: "Write-back execution, idempotency, rollback. Executes approved actions against connected systems." },
  { icon: Server, color: "text-cyan-400", name: "Notification Service", desc: "Alert routing and digest generation. Delivers signals, Morning Briefs, and exception alerts to the right people." },
];

const scalability = [
  { title: "Cloudflare Edge", desc: "Workers deployed at the edge for low-latency global access. Requests route to the nearest point of presence automatically." },
  { title: "D1 / R2 Storage", desc: "Distributed storage for SpineVault (D1) and blob data (R2) — durable, globally replicated, and cost-efficient at scale." },
  { title: "Queue Management", desc: "Cloudflare Queues handle async processing and Dead Letter Queue management — ensuring no data is lost during ingestion spikes." },
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
              Firebase. Cloudflare Edge.<br />Built to scale.
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
              Six purpose-built services, real-time listeners, edge distribution, and versioned storage — the engine behind every sync, signal, and action.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-24 px-6">
        <div className="max-w-5xl mx-auto space-y-10">

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
            <h2 className="text-lg font-bold mb-6 flex items-center gap-3"><Zap className="w-5 h-5 text-amber-400" /> Firebase Architecture</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {firebase.map((f) => (
                <div key={f.title} className="rounded-xl border border-white/8 bg-white/[0.02] p-5">
                  <div className="font-semibold mb-2 text-sm">{f.title}</div>
                  <p className="text-white/50 text-sm leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <div>
            <h2 className="text-sm font-bold mb-5 text-white/50 uppercase tracking-widest">Service Architecture</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {services.map((s, i) => (
                <motion.div key={s.name} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4">
                    <s.icon className={`w-5 h-5 ${s.color}`} />
                  </div>
                  <div className="font-semibold mb-2">{s.name}</div>
                  <p className="text-white/50 text-sm leading-relaxed">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
            <h2 className="text-lg font-bold mb-6 flex items-center gap-3"><Globe className="w-5 h-5 text-cyan-400" /> Scalability</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {scalability.map((s) => (
                <div key={s.title} className="rounded-xl border border-white/8 bg-white/[0.02] p-5">
                  <div className="font-semibold mb-2 text-sm">{s.title}</div>
                  <p className="text-white/50 text-sm leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
            <h2 className="text-lg font-bold mb-6 flex items-center gap-3"><Database className="w-5 h-5 text-blue-400" /> Data Access Patterns</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {dataAccess.map((d) => (
                <div key={d.title} className="rounded-xl border border-white/8 bg-white/[0.02] p-5">
                  <div className="font-semibold mb-2 text-sm">{d.title}</div>
                  <p className="text-white/50 text-sm leading-relaxed">{d.desc}</p>
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
