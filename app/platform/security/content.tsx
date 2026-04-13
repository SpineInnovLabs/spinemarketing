"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Lock, Users, FileText, Globe, AlertTriangle } from "lucide-react";
import Header from "@/components/header";
import { Footer } from "@/components/footer";

const dataProtection = [
  { title: "AES-256 Encryption at Rest", desc: "SpineVault, D1, and R2 storage all encrypted at rest with AES-256. Encryption keys managed per-tenant and rotated on a configurable schedule." },
  { title: "TLS 1.3 in Transit", desc: "All data in transit — API calls, webhook payloads, connector traffic — secured with TLS 1.3. No unencrypted data paths." },
  { title: "Field-Level Encryption", desc: "PII and sensitive financial data encrypted separately at the field level within SpineVault. Even internal queries respect field-level access boundaries." },
  { title: "Regional Residency", desc: "Data sovereignty options across India, EU, and US regions. Your data stays in your selected region — no cross-border transfer without explicit configuration." },
];

const accessControl = [
  { icon: Users, color: "text-blue-400", title: "RBAC", desc: "Role-based access control with field-level permissions. Each user sees only the Entity 360 attributes their role is authorized to access." },
  { icon: Globe, color: "text-violet-400", title: "SSO / SAML", desc: "Enterprise identity provider integration. Connect your existing IdP — Okta, Azure AD, Google Workspace — for centralized authentication." },
  { icon: ShieldCheck, color: "text-purple-400", title: "Contextual Firewalling", desc: "Department and industry filters preventing unauthorized data access. Sales knowledge does not leak to Engineering contexts unless explicitly authorized." },
];

const compliance = [
  { title: "SOC 2 Type II", desc: "Security and availability controls aligned to SOC 2 Type II. Control monitoring dashboard with evidence collection for audits." },
  { title: "GDPR Alignment", desc: "Right to erasure, data portability, and consent management. Full GDPR compliance with exportable request logs." },
  { title: "Immutable Audit Logs", desc: "Every Spine write, Entity 360 access, and Twin recommendation logged with evidence hashes. Cannot be altered or deleted." },
  { title: "Data Sovereignty", desc: "\"Your data, your rules\" — total organizational ownership of ontological models. IntegrateWise holds no claim to your canonical data." },
];

const truthBoundary = [
  { icon: Lock, color: "text-amber-400", title: "Hard-Coded Architectural Constraint", desc: "Not a policy setting. The Truth Boundary is an architectural mandate — AI cannot write to any system without explicit human approval. There is no configuration that removes this." },
  { icon: AlertTriangle, color: "text-red-400", title: "Emergency Overrides", desc: "Traceable exception handling with mandatory audit trails. Force-executions require justification entry and create an immutable override log." },
  { icon: FileText, color: "text-cyan-400", title: "Session Isolation", desc: "AI chat contexts are sandboxed from production data unless explicitly approved. Sessions cannot access or modify canonical records outside the HITL gate." },
];

export function PlatformSecurityContent() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <Header />

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-white/60 mb-8">
              <ShieldCheck className="w-4 h-4" />
              Security
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
              Governance foundation<br />and Truth Boundary.
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
              Encryption, RBAC, SOC 2 alignment, and an architectural mandate that AI cannot write to your systems without human approval.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-24 px-6">
        <div className="max-w-5xl mx-auto space-y-8">

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
            <h2 className="text-lg font-bold mb-6 flex items-center gap-3"><Lock className="w-5 h-5 text-blue-400" />Data Protection</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {dataProtection.map((d) => (
                <div key={d.title} className="rounded-xl border border-white/8 bg-white/[0.02] p-5">
                  <div className="font-semibold mb-2 text-sm">{d.title}</div>
                  <p className="text-white/50 text-sm leading-relaxed">{d.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <div>
            <h2 className="text-sm font-bold mb-5 text-white/50 uppercase tracking-widest">Access Control</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {accessControl.map((a, i) => (
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
            <h2 className="text-lg font-bold mb-6 flex items-center gap-3"><FileText className="w-5 h-5 text-emerald-400" />Compliance & Audit</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {compliance.map((c) => (
                <div key={c.title} className="rounded-xl border border-white/8 bg-white/[0.02] p-5">
                  <div className="font-semibold mb-2 text-sm">{c.title}</div>
                  <p className="text-white/50 text-sm leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="rounded-2xl border border-amber-500/20 bg-amber-500/[0.03] p-8">
            <h2 className="text-lg font-bold mb-2 flex items-center gap-3"><ShieldCheck className="w-5 h-5 text-amber-400" />Truth Boundary Enforcement</h2>
            <p className="text-white/50 text-sm mb-6 leading-relaxed">The Truth Boundary is not a feature — it is an architectural constraint baked into the platform. AI cannot modify your systems without human approval under any circumstances.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {truthBoundary.map((t, i) => (
                <div key={t.title} className="rounded-xl border border-white/8 bg-white/[0.02] p-5">
                  <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4">
                    <t.icon className={`w-4 h-4 ${t.color}`} />
                  </div>
                  <div className="font-semibold mb-2 text-sm">{t.title}</div>
                  <p className="text-white/50 text-sm leading-relaxed">{t.desc}</p>
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
