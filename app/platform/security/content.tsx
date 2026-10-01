"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Lock, Users, FileText, Globe, AlertTriangle, ArrowRight } from "lucide-react";
import { Header } from "@/components/header-client";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { PageHero } from "@/components/marketing/page-hero";
import { Section, SectionHeader } from "@/components/marketing/section";
import { FinalCTA } from "@/components/final-cta";
import { SecurityGather } from "./sticky-sections";

const dataProtection = [
  { icon: Lock, title: "AES-256 Encryption at Rest", desc: "Per-tenant keys, rotated on configurable schedule." },
  { icon: ShieldCheck, title: "TLS 1.3 in Transit", desc: "No unencrypted data paths in the platform." },
  { icon: FileText, title: "Field-Level Encryption", desc: "PII and financial data encrypted separately." },
  { icon: Globe, title: "Regional Data Residency", desc: "Data stays in your selected region — no cross-border transfer." },
];

const accessControl = [
  { icon: Users, title: "RBAC", desc: "Field-level permissions per user role." },
  { icon: Globe, title: "SSO / SAML", desc: "Okta, Azure AD, or Google Workspace integration." },
  { icon: ShieldCheck, title: "Contextual Firewalling", desc: "Department filters prevent unauthorized data access." },
];

const truthBoundary = [
  { icon: Lock, title: "Hard-Coded Architectural Constraint", desc: "AI cannot write without human approval. No override exists." },
  { icon: AlertTriangle, title: "Emergency Override Audit", desc: "Force-executions require justification with immutable logs." },
  { icon: FileText, title: "Session Isolation", desc: "AI contexts sandboxed from production data." },
];

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 16 } as const,
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true, margin: "-60px" },
  transition: { type: "spring" as const, damping: 18, stiffness: 70, delay },
});

export function PlatformSecurityContent() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main id="main">
        <PageHero
          badge="Platform Security"
          headline="AI acts only when you say so."
          subhead="Encryption everywhere, RBAC, SOC 2 alignment, and an architectural mandate for human approval."
          primaryCta={{ label: "Review the security model", href: "/contact?intent=security" }}
        />

        <Section variant="muted">
          <SectionHeader label="Data Protection" headline="Encryption, transit security, regional sovereignty" />
          <div className="grid gap-4 md:grid-cols-2">
            {dataProtection.map((d, i) => (
              <motion.div key={d.title} {...fade(i * 0.06)} className="rounded-md border border-[#E5E5E5] bg-white p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-[#F3F6F9]">
                  <d.icon className="h-6 w-6 text-[#0176D3]" />
                </div>
                <h3 className="text-[17px] font-semibold text-[#032D60]">{d.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-[#444]">{d.desc}</p>
              </motion.div>
            ))}
          </div>
        </Section>

        <Section>
          <SectionHeader label="Access Control" headline="RBAC, SSO, and department-level firewalling" />
          <div className="grid gap-4 md:grid-cols-3">
            {accessControl.map((a, i) => (
              <motion.div key={a.title} {...fade(i * 0.06)} className="rounded-md border border-[#E5E5E5] bg-white p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-[#F3F6F9]">
                  <a.icon className="h-6 w-6 text-[#0176D3]" />
                </div>
                <h3 className="text-[17px] font-semibold text-[#032D60]">{a.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-[#444]">{a.desc}</p>
              </motion.div>
            ))}
          </div>
        </Section>

        <Section variant="muted">
          <div className="rounded-md border border-amber-200 bg-amber-50/50 p-6 md:p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-white">
                <ShieldCheck className="h-5 w-5 text-[#0176D3]" />
              </div>
              <h2 className="text-[20px] font-semibold text-[#032D60]">Governance Enforcement</h2>
            </div>
            <p className="mb-6 text-[14px] text-[#444]">
              An architectural constraint — AI cannot modify systems without human approval.
            </p>
            <div className="grid gap-4 md:grid-cols-3">
              {truthBoundary.map((t, i) => (
                <motion.div key={t.title} {...fade(i * 0.06)} className="rounded-md border border-[#E5E5E5] bg-white p-5">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-md bg-[#F3F6F9]">
                    <t.icon className="h-5 w-5 text-[#0176D3]" />
                  </div>
                  <h4 className="font-semibold text-[#032D60]">{t.title}</h4>
                  <p className="mt-2 text-[13px] leading-relaxed text-[#444]">{t.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>

        <section className="border-t border-[#E5E5E5] bg-white py-16">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="text-[28px] font-semibold text-[#032D60]">Enterprise-grade from day one.</h2>
            <p className="mt-3 text-[16px] text-[#444]">Walk through the security model in a 30-minute session.</p>
            <Link
              href="/contact?intent=demo"
              className="mt-8 inline-flex h-10 items-center gap-2 rounded-md bg-[#0176D3] px-5 text-[14px] font-semibold text-white hover:bg-[#0B5CAB]"
            >
              Book a demo <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        <SecurityGather />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
