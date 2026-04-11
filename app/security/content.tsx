"use client"

import { motion } from "framer-motion"
import { ShieldCheck, Lock, Eye, FileCheck, Server, KeyRound, Users, ClipboardCheck } from "lucide-react"

const securityFeatures = [
  {
    icon: Lock,
    title: "Encryption everywhere",
    desc: "AES-256 encryption at rest, TLS 1.3 in transit. Your data is encrypted at every stage of the pipeline.",
  },
  {
    icon: ShieldCheck,
    title: "SOC 2 aligned",
    desc: "Our infrastructure and processes are aligned with SOC 2 Type II requirements for security, availability, and confidentiality.",
  },
  {
    icon: Eye,
    title: "Complete audit trails",
    desc: "Every data access, AI recommendation, approval decision, and executed action is logged with full context.",
  },
  {
    icon: KeyRound,
    title: "Role-based access control",
    desc: "Granular RBAC ensures team members only see and act on the data relevant to their role.",
  },
  {
    icon: Users,
    title: "SSO & identity management",
    desc: "Enterprise SSO via SAML 2.0 and OIDC. Integrate with Okta, Azure AD, Google Workspace, and more.",
  },
  {
    icon: Server,
    title: "Data residency options",
    desc: "Choose where your data lives. Multi-region deployment options for compliance with local data regulations.",
  },
  {
    icon: FileCheck,
    title: "You approve every action",
    desc: "Nothing happens without your OK. No AI action runs without your explicit approval — no exceptions.",
  },
  {
    icon: ClipboardCheck,
    title: "Compliance packages",
    desc: "Pre-built compliance configurations for GDPR, HIPAA, and industry-specific regulatory requirements.",
  },
]

const principles = [
  {
    title: "Read-first architecture",
    desc: "IntegrateWise reads from your systems to bring everything together. We don't require data migration or take ownership of your data.",
  },
  {
    title: "Minimal data footprint",
    desc: "We organize and connect the signals we need. Raw data stays in your source systems. You control what flows into your workspace.",
  },
  {
    title: "Zero-trust by default",
    desc: "Every API call, every data access, every AI action goes through authentication and authorization. No implicit trust.",
  },
  {
    title: "You stay in control, always",
    desc: "The approval layer can't be bypassed. There is no admin override, no API backdoor, no way to skip approval.",
  },
]

export function SecurityContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ backgroundColor: "rgb(8, 7, 14)" }}>
        <div className="mx-auto max-w-[1200px] px-6 pt-[160px] pb-[100px] md:px-16">
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", damping: 16, mass: 1, stiffness: 52, delay: 0.2 }}
              className="mb-6 inline-flex items-center gap-2.5 rounded-[40px] bg-white px-4 py-1.5"
              style={{ boxShadow: "0px 0px 0px 3px rgb(248 248 250)" }}
            >
              <span className="h-2 w-2 rounded-full" style={{ background: "var(--gradient-primary-icon)" }} />
              <span className="text-[14px] font-semibold tracking-[-0.03em] text-[#0a0b10]">Platform</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", damping: 16, mass: 1, stiffness: 52, delay: 0.4 }}
              className="text-[48px] font-semibold leading-[1em] tracking-[-0.05em] text-white sm:text-[54px] lg:text-[64px]"
            >
              Security isn&apos;t a feature.{" "}
              <span className="text-primary">It&apos;s the architecture.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", damping: 16, mass: 1, stiffness: 52, delay: 0.6 }}
              className="mx-auto mt-8 max-w-2xl text-[17px] font-medium leading-[1.5] tracking-[-0.02em] text-white/55"
            >
              Controls, encryption, audit trails, and human approval are built into every layer
              of IntegrateWise. Not bolted on. Not optional.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Security Features Grid */}
      <section className="arvio-section">
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
                transition={{ type: "spring", bounce: 0.2, duration: 0.6, delay: i * 0.06 }}
                className="arvio-card flex flex-col items-start p-6"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg" style={{ background: "var(--gradient-primary-icon)" }}>
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="mt-4 text-[16px] font-semibold tracking-[-0.03em] leading-[1.3]">{title}</h3>
                <p className="mt-2 text-[14px] font-medium leading-[1.5] tracking-[-0.02em] text-muted-foreground">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Principles */}
      <section className="arvio-section bg-muted">
        <div className="mx-auto max-w-[1100px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="section-heading">
              Our security{" "}
              <span className="text-primary">principles</span>
            </h2>
          </motion.div>

          <div className="mx-auto mt-16 grid max-w-4xl gap-6 sm:grid-cols-2">
            {principles.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", bounce: 0.2, duration: 0.6, delay: i * 0.1 }}
                className="arvio-card p-8"
              >
                <h3 className="text-[18px] font-semibold tracking-[-0.03em]">{p.title}</h3>
                <p className="mt-3 text-[15px] font-medium leading-[1.5] tracking-[-0.02em] text-muted-foreground">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
