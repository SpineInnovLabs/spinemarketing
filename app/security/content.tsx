"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ShieldCheck,
  Lock,
  Eye,
  FileCheck,
  Server,
  KeyRound,
  Users,
  ClipboardCheck,
} from "lucide-react";

const securityFeatures = [
  {
    icon: Lock,
    title: "Encryption everywhere",
    desc: "AES-256 at rest, TLS 1.3 in transit.",
  },
  {
    icon: ShieldCheck,
    title: "SOC 2 aligned",
    desc: "Security, availability, and confidentiality standards.",
  },
  {
    icon: Eye,
    title: "Complete audit trails",
    desc: "Every access, approval, and action logged.",
  },
  {
    icon: KeyRound,
    title: "Role-based access control",
    desc: "Granular RBAC scoped to each user role.",
  },
  {
    icon: Users,
    title: "SSO & identity management",
    desc: "SAML 2.0 and OIDC with major providers.",
  },
  {
    icon: Server,
    title: "Data residency",
    desc: "Multi-region deployment options coming soon.",
  },
  {
    icon: FileCheck,
    title: "Govern Gate on every Twin action",
    desc: "Nothing changes without your approval.",
  },
  {
    icon: ClipboardCheck,
    title: "Compliance packages",
    desc: "Pre-built GDPR and industry configurations.",
  },
];

const principles = [
  {
    title: "Read-first architecture",
    desc: "No data migration or ownership transfer.",
  },
  {
    title: "Minimal data footprint",
    desc: "Raw data stays in your source systems.",
  },
  {
    title: "Zero-trust by default",
    desc: "Every call authenticated and authorized.",
  },
  {
    title: "You stay in control, always",
    desc: "Your data, your approval, your control.",
  },
];

export function SecurityContent() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative overflow-hidden bg-dark-section"
      >
        <div className="mx-auto max-w-[1200px] px-6 pt-[160px] pb-[100px] md:px-16">
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                damping: 16,
                mass: 1,
                stiffness: 52,
                delay: 0.2,
              }}
              className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-white/10 px-4 py-1.5"
              style={{ background: "rgba(255,255,255,0.03)", backdropFilter: "blur(12px)" }}
            >
              <span
                className="h-2 w-2 rounded-full"
                style={{ background: "var(--gradient-primary-icon)" }}
              />
              <span className="text-[14px] font-semibold tracking-[-0.03em] text-white/60">
                Security
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                damping: 16,
                mass: 1,
                stiffness: 52,
                delay: 0.4,
              }}
              className="text-[48px] font-semibold leading-[1em] tracking-[-0.05em] text-white sm:text-[54px] lg:text-[64px]"
            >
              Security isn&apos;t a feature.{" "}
              <span className="text-primary">It&apos;s the architecture.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                damping: 16,
                mass: 1,
                stiffness: 52,
                delay: 0.6,
              }}
              className="mx-auto mt-8 max-w-2xl text-[17px] font-medium leading-[1.5] tracking-[-0.02em] text-white/55"
            >
              AI never acts without approval, data never moves without encryption, every action has an audit trail.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Security Features Grid */}
      <section className="arvio-section dark-section">
        <div className="mx-auto max-w-[1100px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="section-heading">
              Enterprise-grade{" "}
              <span className="text-primary">security & compliance</span>
            </h2>
          </motion.div>

          <div className="mx-auto mt-16 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {securityFeatures.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  bounce: 0.2,
                  duration: 0.6,
                  delay: i * 0.06,
                }}
                className="arvio-card flex flex-col items-start p-6"
              >
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-lg"
                  style={{ background: "var(--gradient-primary-icon)" }}
                >
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="mt-4 text-[16px] font-semibold tracking-[-0.03em] leading-[1.3]">
                  {title}
                </h3>
                <p className="mt-2 text-[14px] font-medium leading-[1.5] tracking-[-0.02em] text-muted-foreground">
                  {desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Principles */}
      <section className="arvio-section dark-section">
        <div className="mx-auto max-w-[1100px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="section-heading">
              Our security <span className="text-primary">principles</span>
            </h2>
          </motion.div>

          <div className="mx-auto mt-16 grid max-w-4xl gap-6 sm:grid-cols-2">
            {principles.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  bounce: 0.2,
                  duration: 0.6,
                  delay: i * 0.1,
                }}
                className="arvio-card p-8"
              >
                <h3 className="text-[18px] font-semibold tracking-[-0.03em]">
                  {p.title}
                </h3>
                <p className="mt-3 text-[15px] font-medium leading-[1.5] tracking-[-0.02em] text-muted-foreground">
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security CTA */}
      <section
        className="arvio-section dark-section bg-dark-section"
      >
        <div className="mx-auto max-w-[800px] text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          >
            <h2 className="text-[32px] font-semibold tracking-[-0.04em] leading-[1.2] text-white sm:text-[40px]">
              Security that doesn&apos;t require trust —{" "}
              <span className="text-primary">it proves itself.</span>
            </h2>
            <p className="mt-6 text-[17px] font-medium leading-[1.5] text-white/40">
              Every action logged. Every proposal governed. Every approval traceable.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-2.5 sm:flex-row">
              <Button
                size="lg"
                className="h-[42px] rounded-xl px-6 text-[15px] font-semibold"
                style={{
                  background: "var(--gradient-primary)",
                  boxShadow: "var(--shadow-button)",
                }}
                asChild
              >
                <Link href="/contact?intent=demo">
                  Book a demo
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-[42px] rounded-xl border-2 border-white/15 bg-transparent px-6 text-[15px] font-semibold text-white hover:bg-white/10"
                asChild
              >
                <Link href="/platform/security">Security details</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
