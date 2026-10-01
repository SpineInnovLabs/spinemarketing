"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Eye, Users, FileText, AlertTriangle, RotateCcw } from "lucide-react";
import { Header } from "@/components/header-client";
import { Footer } from "@/components/footer";
import { PageHero } from "@/components/marketing/page-hero";
import { Section, SectionHeader } from "@/components/marketing/section";
import { FinalCTA } from "@/components/final-cta";
import { ProductSecurityStickyScroll } from "./sticky-sections";

const trustDashboard = [
  { zone: "Green Zone", tone: "text-[#0176D3]", border: "border-[#0176D3]/20", bg: "bg-[#F3F6F9]", desc: "AI reasoning, scoring, and evidence compilation. Twin operates freely here." },
  { zone: "Red Zone", tone: "text-red-600", border: "border-red-200", bg: "bg-red-50/50", desc: "System writes and communications. Requires explicit human approval." },
];

const sovereigntyControls = [
  { title: "Your Data, Your Rules", desc: "Complete ownership of ontological models and canonical data." },
  { title: "Regional Data Residency", desc: "Select India, EU, or US. No cross-border transfer." },
  { title: "Retention Policies", desc: "Per-entity-type retention settings for records and logs." },
];

const auditFeatures = [
  { icon: FileText, title: "Immutable Decision Log", desc: "Complete history of who approved what and when." },
  { icon: Eye, title: "Session Replay", desc: "Reconstruct exact Entity 360 state at any approval time." },
  { icon: RotateCcw, title: "Reversal Tracking", desc: "Full log of rolled-back actions with reason codes." },
];

const rbacItems = [
  { title: "RBAC Visualization", desc: "Field-level permission grid across all roles." },
  { title: "Contextual Firewalling UI", desc: "Department isolation settings per team and data domain." },
  { title: "API Key Management", desc: "Scoped, audited, and time-bounded credentials." },
];

const emergencyItems = [
  { icon: AlertTriangle, title: "Kill Switch", desc: "Immediate halt of all Twin operations. One click." },
  { icon: Eye, title: "Breach Response", desc: "Automated access logs for forensic analysis." },
  { icon: RotateCcw, title: "Recovery Interface", desc: "Point-in-time Spine restoration from backups." },
];

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 16 } as const,
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true, margin: "-60px" },
  transition: { type: "spring" as const, damping: 18, stiffness: 70, delay },
});

export function ProductSecurityContent() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main id="main">
        <PageHero
          badge="Product Security"
          headline="Governance UI. Audit logs. Compliance."
          subhead="Visualize where AI ends and human control begins — with full forensic context in SpineWorkspace."
          primaryCta={{ label: "Contact security team", href: "/contact?intent=security" }}
        />

        <Section variant="muted">
          <SectionHeader label="Trust & Governance Dashboard" headline="Every operation is categorised into one of two zones" />
          <div className="grid gap-4 md:grid-cols-2 mb-6">
            {trustDashboard.map((t) => (
              <div key={t.zone} className={`rounded-md border ${t.border} ${t.bg} p-6`}>
                <div className={`font-semibold text-sm mb-2 ${t.tone}`}>{t.zone}</div>
                <p className="text-[14px] leading-relaxed text-[#444]">{t.desc}</p>
              </div>
            ))}
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {sovereigntyControls.map((s, i) => (
              <motion.div key={s.title} {...fade(i * 0.05)} className="rounded-md border border-[#E5E5E5] bg-white p-5">
                <div className="font-semibold text-[#032D60] mb-2 text-sm">{s.title}</div>
                <p className="text-[14px] leading-relaxed text-[#444]">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </Section>

        <Section>
          <SectionHeader label="Approval Audit Center" headline="Full forensic context on every decision" />
          <div className="grid gap-4 md:grid-cols-3">
            {auditFeatures.map((a, i) => (
              <motion.div key={a.title} {...fade(i * 0.06)} className="rounded-md border border-[#E5E5E5] bg-white p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md bg-[#F3F6F9]">
                  <a.icon className="h-5 w-5 text-[#0176D3]" />
                </div>
                <div className="font-semibold text-[#032D60] mb-2">{a.title}</div>
                <p className="text-[14px] leading-relaxed text-[#444]">{a.desc}</p>
              </motion.div>
            ))}
          </div>
        </Section>

        <Section variant="muted">
          <SectionHeader label="Access Control Matrix" headline="Permissions scoped to role and context" />
          <div className="grid gap-4 md:grid-cols-3">
            {rbacItems.map((r, i) => (
              <motion.div key={r.title} {...fade(i * 0.05)} className="rounded-md border border-[#E5E5E5] bg-white p-5">
                <div className="font-semibold text-[#032D60] mb-2 text-sm">{r.title}</div>
                <p className="text-[14px] leading-relaxed text-[#444]">{r.desc}</p>
              </motion.div>
            ))}
          </div>
        </Section>

        <Section>
          <SectionHeader label="Emergency Protocols" headline="Controls when you need them most" />
          <div className="grid gap-4 md:grid-cols-3">
            {emergencyItems.map((e, i) => (
              <motion.div key={e.title} {...fade(i * 0.06)} className="rounded-md border border-[#E5E5E5] bg-white p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md bg-[#F3F6F9]">
                  <e.icon className="h-5 w-5 text-[#0176D3]" />
                </div>
                <div className="font-semibold text-[#032D60] mb-2">{e.title}</div>
                <p className="text-[14px] leading-relaxed text-[#444]">{e.desc}</p>
              </motion.div>
            ))}
          </div>
        </Section>

        <ProductSecurityStickyScroll />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
