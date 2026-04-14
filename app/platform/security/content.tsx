"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Lock, Users, FileText, Globe, AlertTriangle, ArrowRight } from "lucide-react";
import { Header } from "@/components/header-client";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { SecurityGather } from "./sticky-sections";

const dataProtection = [
  {
    icon: Lock,
    accent: "#3b82f6",
    bg: "rgba(59,130,246,0.12)",
    title: "AES-256 Encryption at Rest",
    desc: "Per-tenant keys, rotated on configurable schedule.",
  },
  {
    icon: ShieldCheck,
    accent: "#10b981",
    bg: "rgba(16,185,129,0.12)",
    title: "TLS 1.3 in Transit",
    desc: "No unencrypted data paths in the platform.",
  },
  {
    icon: FileText,
    accent: "#8b5cf6",
    bg: "rgba(139,92,246,0.12)",
    title: "Field-Level Encryption",
    desc: "PII and financial data encrypted separately.",
  },
  {
    icon: Globe,
    accent: "#f59e0b",
    bg: "rgba(245,158,11,0.12)",
    title: "Regional Data Residency",
    desc: "Data stays in your selected region — no cross-border transfer.",
  },
];

const accessControl = [
  {
    icon: Users,
    accent: "#3b82f6",
    bg: "rgba(59,130,246,0.12)",
    title: "RBAC",
    desc: "Field-level permissions per user role.",
  },
  {
    icon: Globe,
    accent: "#8b5cf6",
    bg: "rgba(139,92,246,0.12)",
    title: "SSO / SAML",
    desc: "Okta, Azure AD, or Google Workspace integration.",
  },
  {
    icon: ShieldCheck,
    accent: "#a855f7",
    bg: "rgba(168,85,247,0.12)",
    title: "Contextual Firewalling",
    desc: "Department filters prevent unauthorized data access.",
  },
];

const truthBoundary = [
  {
    icon: Lock,
    accent: "#f59e0b",
    bg: "rgba(245,158,11,0.12)",
    title: "Hard-Coded Architectural Constraint",
    desc: "AI cannot write without human approval. No override exists.",
  },
  {
    icon: AlertTriangle,
    accent: "#f43f5e",
    bg: "rgba(244,63,94,0.12)",
    title: "Emergency Override Audit",
    desc: "Force-executions require justification with immutable logs.",
  },
  {
    icon: FileText,
    accent: "#06b6d4",
    bg: "rgba(6,182,212,0.12)",
    title: "Session Isolation",
    desc: "AI contexts sandboxed from production data.",
  },
];

export function PlatformSecurityContent() {
  return (
    <div className="relative min-h-screen text-white overflow-hidden" style={{ background: "#05070A" }}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 right-1/3 w-[700px] h-[700px] rounded-full blur-[220px]" style={{ background: "rgba(245,158,11,0.05)" }} />
        <div className="absolute top-[50%] left-1/4 w-[500px] h-[500px] rounded-full blur-[180px]" style={{ background: "rgba(27,167,132,0.05)" }} />
      </div>

      <Header />

      <section className="relative pt-36 pb-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm text-white/50 mb-8">
              <ShieldCheck className="w-3.5 h-3.5 text-primary" />
              <span>Security</span>
            </div>
            <h1 className="text-[52px] md:text-[68px] font-bold leading-[1.05] tracking-tight mb-6">
              <span className="bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">AI acts only</span>
              <br />
              <span className="text-primary">when you say so.</span>
            </h1>
            <p className="text-xl text-white/55 max-w-2xl mx-auto leading-relaxed mb-10">
              Encryption everywhere, RBAC, SOC 2 alignment, and an architectural mandate for human approval.
            </p>
            <Link
              href="/contact?intent=demo"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[15px] font-semibold text-white"
              style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-button)" }}
            >
              Review the security model <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="relative pb-16 px-6">
        <div className="max-w-5xl mx-auto space-y-16">

          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "rgba(59,130,246,0.12)" }}>
                <Lock className="w-5 h-5" style={{ color: "#3b82f6" }} />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Data Protection</h2>
                <p className="text-white/40 text-sm">Encryption, transit security, regional sovereignty</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {dataProtection.map((d, i) => (
                <motion.div
                  key={d.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="group rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-8 hover:border-white/[0.15] transition-colors"
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                    style={{ background: d.bg, boxShadow: `0 0 30px ${d.bg}` }}
                  >
                    <d.icon className="w-6 h-6" style={{ color: d.accent }} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{d.title}</h3>
                  <p className="text-white/55 leading-relaxed text-sm">{d.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "rgba(27,167,132,0.12)" }}>
                <Users className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Access Control</h2>
                <p className="text-white/40 text-sm">RBAC, SSO, and department-level firewalling</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {accessControl.map((a, i) => (
                <motion.div
                  key={a.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="group rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-8 hover:border-white/[0.15] transition-colors"
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                    style={{ background: a.bg, boxShadow: `0 0 30px ${a.bg}` }}
                  >
                    <a.icon className="w-6 h-6" style={{ color: a.accent }} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{a.title}</h3>
                  <p className="text-white/55 leading-relaxed text-sm">{a.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border p-10"
            style={{ borderColor: "rgba(245,158,11,0.25)", background: "rgba(245,158,11,0.03)" }}
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "rgba(245,158,11,0.12)" }}>
                <ShieldCheck className="w-5 h-5" style={{ color: "#f59e0b" }} />
              </div>
              <h2 className="text-2xl font-bold">Governance Enforcement</h2>
            </div>
            <p className="text-white/50 mb-8 ml-[52px] text-sm leading-relaxed">
              An architectural constraint — AI cannot modify systems without human approval.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {truthBoundary.map((t, i) => (
                <motion.div
                  key={t.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="group rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.05] to-white/[0.01] p-7 hover:border-yellow-500/20 transition-colors"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{ background: t.bg, boxShadow: `0 0 20px ${t.bg}` }}
                  >
                    <t.icon className="w-5 h-5" style={{ color: t.accent }} />
                  </div>
                  <h4 className="font-bold mb-2">{t.title}</h4>
                  <p className="text-white/50 text-sm leading-relaxed">{t.desc}</p>
                </motion.div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Enterprise-grade from day one.</h2>
            <p className="text-white/50 text-lg mb-10 max-w-lg mx-auto">Walk through the security model in a 30-minute session.</p>
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

      <SecurityGather />
      <Footer />
    </div>
  );
}
