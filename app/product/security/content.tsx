"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Eye, Users, FileText, AlertTriangle, RotateCcw } from "lucide-react";
import { Header } from "@/components/header-client";
import { Footer } from "@/components/footer";
import { ProductSecurityStickyScroll } from "./sticky-sections";

const trustDashboard = [
  { zone: "Green Zone", color: "text-emerald-400", border: "border-emerald-500/20", desc: "AI reasoning, scoring, and evidence compilation. Twin operates freely here." },
  { zone: "Red Zone", color: "text-red-400", border: "border-red-500/20", desc: "System writes and communications. Requires explicit human approval." },
];

const sovereigntyControls = [
  { title: "Your Data, Your Rules", desc: "Complete ownership of ontological models and canonical data." },
  { title: "Regional Data Residency", desc: "Select India, EU, or US. No cross-border transfer." },
  { title: "Retention Policies", desc: "Per-entity-type retention settings for records and logs." },
];

const auditFeatures = [
  { icon: FileText, color: "text-blue-400", title: "Immutable Decision Log", desc: "Complete history of who approved what and when." },
  { icon: Eye, color: "text-violet-400", title: "Session Replay", desc: "Reconstruct exact Entity 360 state at any approval time." },
  { icon: RotateCcw, color: "text-amber-400", title: "Reversal Tracking", desc: "Full log of rolled-back actions with reason codes." },
];

const rbacItems = [
  { title: "RBAC Visualization", desc: "Field-level permission grid across all roles." },
  { title: "Contextual Firewalling UI", desc: "Department isolation settings per team and data domain." },
  { title: "API Key Management", desc: "Scoped, audited, and time-bounded credentials." },
];

const emergencyItems = [
  { icon: AlertTriangle, color: "text-red-400", title: "Kill Switch", desc: "Immediate halt of all Twin operations. One click." },
  { icon: Eye, color: "text-violet-400", title: "Breach Response", desc: "Automated access logs for forensic analysis." },
  { icon: RotateCcw, color: "text-cyan-400", title: "Recovery Interface", desc: "Point-in-time Spine restoration from backups." },
];

export function ProductSecurityContent() {
  return (
    <div className="min-h-screen text-white" style={{ background: "#05070A" }}>
      <Header />

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-white/60 mb-8">
              <ShieldCheck className="w-4 h-4" />
              Security
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
              Governance UI.<br />Audit logs. Compliance.
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
              Visualize where AI ends and human control begins — with full forensic context.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-24 px-6">
        <div className="max-w-5xl mx-auto space-y-8">

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
            <h2 className="text-lg font-bold mb-2">Trust & Governance Dashboard</h2>
            <p className="text-white/50 text-sm mb-6 leading-relaxed">Every operation is categorised into one of two zones.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
              {trustDashboard.map((t) => (
                <div key={t.zone} className={`rounded-xl border ${t.border} bg-white/[0.02] p-6`}>
                  <div className={`font-semibold text-sm mb-2 ${t.color}`}>{t.zone}</div>
                  <p className="text-white/50 text-sm leading-relaxed">{t.desc}</p>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {sovereigntyControls.map((s) => (
                <div key={s.title} className="rounded-xl border border-white/8 bg-white/[0.02] p-5">
                  <div className="font-semibold mb-2 text-sm">{s.title}</div>
                  <p className="text-white/50 text-sm leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <div>
            <h2 className="text-sm font-bold mb-5 text-white/50 uppercase tracking-widest">Approval Audit Center</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {auditFeatures.map((a, i) => (
                <motion.div key={a.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4">
                    <a.icon className={`w-5 h-5 ${a.color}`} />
                  </div>
                  <div className="font-semibold mb-2">{a.title}</div>
                  <p className="text-white/50 text-sm leading-relaxed">{a.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
            <h2 className="text-lg font-bold mb-6 flex items-center gap-3"><Users className="w-5 h-5 text-blue-400" />Access Control Matrix</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {rbacItems.map((r) => (
                <div key={r.title} className="rounded-xl border border-white/8 bg-white/[0.02] p-5">
                  <div className="font-semibold mb-2 text-sm">{r.title}</div>
                  <p className="text-white/50 text-sm leading-relaxed">{r.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <div>
            <h2 className="text-sm font-bold mb-5 text-white/50 uppercase tracking-widest">Emergency Protocols</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {emergencyItems.map((e, i) => (
                <motion.div key={e.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4">
                    <e.icon className={`w-5 h-5 ${e.color}`} />
                  </div>
                  <div className="font-semibold mb-2">{e.title}</div>
                  <p className="text-white/50 text-sm leading-relaxed">{e.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </section>

      <ProductSecurityStickyScroll />
      <Footer />
    </div>
  );
}
