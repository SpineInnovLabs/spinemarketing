"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { DataFlowAnimation } from "@/components/data-flow-animation";
import { CheckCircle2, Clock, Database, Link2, ShieldCheck, TrendingUp } from "lucide-react";

const spineLogos = ["Salesforce", "HubSpot", "Zendesk", "Stripe", "Jira", "Slack"];

const pillars = [
  {
    title: "Apps flow in",
    desc: "Connect tools via OAuth. No CSV exports, no manual sync. Data streams in continuously.",
  },
  {
    title: "Truth emerges",
    desc: "Duplicates merge. Conflicts resolve. Every field has a clear source of truth.",
  },
  {
    title: "Tools can change",
    desc: "Swap any app in your stack. The Spine adapts — your memory and history stay intact.",
  },
];

const steps = [
  {
    label: "Step 01",
    icon: Link2,
    title: "Apps connect once.",
    body: "Salesforce, HubSpot, Zendesk, Stripe, Jira, and Slack stream into the Spine through governed connectors instead of manual exports.",
    points: ["OAuth-first setup", "Continuous data flow", "No CSV handoffs"],
  },
  {
    label: "Step 02",
    icon: Database,
    title: "The Spine turns data into memory.",
    body: "Records normalize around real entities. Duplicates merge, conflicts resolve, and relationships stay intact as tools change.",
    points: ["Entity resolution", "Source-backed fields", "Persistent history"],
  },
  {
    label: "Step 03",
    icon: ShieldCheck,
    title: "Your Twin recommends governed action.",
    body: "The Twin reads Digital Memory, explains what changed, and proposes next steps while the Approval Gate keeps you in control.",
    points: ["Evidence-backed signals", "Human approval", "Write-back only after review"],
  },
];

function StepVisual({ index, title }: { index: number; title: string }) {
  if (index === 1) {
    return <DataFlowAnimation />;
  }

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", damping: 16, stiffness: 160 }}
      className="relative min-h-[320px] overflow-hidden rounded-[24px] border border-white/10 bg-[#1d1d1d] p-6"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,225,204,0.06),transparent_55%)]" />
      <div className="relative flex h-full min-h-[268px] flex-col justify-between">
        <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
          <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/30">
            {title}
          </span>
          <span className="rounded-full border border-white/10 px-2.5 py-1 text-[10px] font-semibold text-[#FFE1CC]">
            Live
          </span>
        </div>

        {index === 0 ? (
          <div className="grid grid-cols-2 gap-3 py-8 sm:grid-cols-3">
            {spineLogos.map((logo, i) => (
              <motion.div
                key={logo}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", damping: 18, stiffness: 90, delay: 0.12 + i * 0.05 }}
                className="rounded-xl border border-white/10 bg-[#151515] px-3 py-4 text-center text-[12px] font-semibold text-white/45"
              >
                {logo}
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="space-y-3 py-8">
            {[
              "FinanceFlow renewal risk detected",
              "Evidence from Salesforce, Zendesk, Stripe",
              "Draft Slack + CRM update waiting for approval",
            ].map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", damping: 18, stiffness: 90, delay: 0.12 + i * 0.08 }}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#151515] px-4 py-3"
              >
                <CheckCircle2 className="h-4 w-4 shrink-0 text-[#FFE1CC]" />
                <span className="text-[13px] font-medium text-white/50">{item}</span>
              </motion.div>
            ))}
          </div>
        )}

        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
    </motion.div>
  );
}

export function SpineSection() {
  return (
    <section id="spine-section" className="relative overflow-hidden border-t border-white/[0.05] py-24 md:py-32" style={{ background: "#111111" }}>
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[10%] h-[520px] w-[780px] -translate-x-1/2 rounded-full opacity-[0.06] blur-[140px]" style={{ background: "radial-gradient(circle, #FFE1CC, transparent 70%)" }} />
      </div>
      <motion.div
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        className="absolute left-1/2 top-0 hidden h-16 origin-top border-l border-dashed border-white/10 md:block"
      />

      <div className="relative mx-auto max-w-[1120px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", damping: 20, stiffness: 70 }}
          className="mx-auto max-w-3xl text-center"
        >
          <Badge variant="outline" className="mb-6 rounded-full border-white/10 bg-[#1c1c1c] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#FFE1CC]">
            The Solution
          </Badge>
          <h2 className="text-[40px] font-semibold leading-[1.15] tracking-[-0.04em] text-white sm:text-[52px] lg:text-[56px]">
            The Adaptive Spine{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFE1CC] to-white">bridges the gap.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-[17px] font-medium leading-[1.7] text-white/50">
            We do not just move data; we build memory. IntegrateWise creates a private, persistent knowledge layer that unifies your stack into a single, intelligent source of truth.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ type: "spring", damping: 20, stiffness: 70 }}
            whileHover={{ y: -5 }}
            className="relative overflow-hidden rounded-[24px] border border-white/10 bg-[#1d1d1d] p-8 md:p-10"
          >
            <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full border border-[#FFE1CC]/10 opacity-60" />
            <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#FFE1CC]/80">
              The Proof
            </p>
            <h3 className="mt-4 text-[42px] font-semibold leading-[1.05] tracking-[-0.06em] text-white md:text-[54px]">
              $8M+ revenue protected
            </h3>
            <p className="mt-6 text-[15px] font-medium leading-[1.85] text-white/50">
              As a Customer Success Manager, our founder watched an $8M account turn red because critical context was hidden across CRM, support, and billing systems. By manually building what the Spine does today, early intervention was possible.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3 text-[13px] font-semibold">
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-[#151515] px-3 py-2 text-[#FFE1CC]">
                <TrendingUp className="h-3.5 w-3.5" />
                12% uplift in NRR
              </div>
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-[#151515] px-3 py-2 text-white/55">
                <Clock className="h-3.5 w-3.5 text-[#FFE1CC]" />
                14hrs saved/week
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ type: "spring", damping: 20, stiffness: 70, delay: 0.08 }}
            className="relative overflow-hidden rounded-[24px] border border-white/10 bg-[#1d1d1d] p-7 md:p-8"
          >
            <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-white/35">
              The IntegrateWise Loop
            </p>
            <div className="relative mt-7 space-y-4">
              <motion.div
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.18 }}
                className="absolute left-5 top-5 h-[calc(100%-2.5rem)] origin-top border-l border-dashed border-white/10"
              />
              {[
                { title: "Ingestion", body: "Bi-directional sync from your existing tools" },
                { title: "Vectorization", body: "Semantic memory built from normalized context" },
                { title: "TruthLayer", body: "Governed knowledge ready for the Twin" },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", damping: 20, stiffness: 70, delay: 0.22 + i * 0.1 }}
                  className="relative flex items-center gap-4"
                >
                  <div className="z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#FFE1CC]/15 bg-[#151515]">
                    <motion.span
                      animate={{ scale: [1, 1.7, 1], opacity: [0.8, 0.2, 0.8] }}
                      transition={{ duration: 2.6, repeat: Infinity, delay: i * 0.3 }}
                      className="h-2.5 w-2.5 rounded-full bg-[#FFE1CC]"
                    />
                  </div>
                  <div className={`flex-1 rounded-xl border px-4 py-3 ${i === 2 ? "border-[#FFE1CC]/20 bg-[#FFE1CC]/10" : "border-white/10 bg-[#151515]"}`}>
                    <div className="text-[14px] font-semibold text-white">{item.title}</div>
                    <div className="mt-1 text-[12px] font-medium text-white/35">{item.body}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ type: "spring", damping: 20, stiffness: 70, delay: 0.08 }}
          className="mx-auto mt-14 flex max-w-3xl flex-wrap items-center justify-center gap-2"
        >
          {spineLogos.map((logo) => (
            <span key={logo} className="rounded-full border border-white/10 bg-[#1c1c1c] px-3.5 py-1.5 text-[12px] font-semibold text-white/45">
              {logo}
            </span>
          ))}
        </motion.div>

        <div className="relative mx-auto mt-16 max-w-6xl">
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-none absolute left-1/2 top-0 hidden h-full origin-top -translate-x-1/2 border-l border-dashed border-white/10 lg:block"
          />
          <div className="space-y-14 md:space-y-20">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const visual = <StepVisual index={i} title={step.title} />;
              const copy = (
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", damping: 16, stiffness: 160 }}
                  className="rounded-[24px] border border-white/10 bg-[#1d1d1d] p-7 md:p-8"
                >
                  <div className="mb-6 flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#FFE1CC]/15 bg-[#FFE1CC]/10">
                      <Icon className="h-5 w-5 text-[#FFE1CC]" />
                    </div>
                    <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#FFE1CC]/70">
                      {step.label}
                    </span>
                  </div>
                  <h3 className="text-[26px] font-semibold leading-[1.15] tracking-[-0.04em] text-white md:text-[32px]">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-[15px] font-medium leading-[1.8] text-white/50">
                    {step.body}
                  </p>
                  <div className="mt-6 space-y-2.5">
                    {step.points.map((point) => (
                      <div key={point} className="flex items-center gap-2.5 text-[13px] font-medium text-white/45">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#FFE1CC]/70" />
                        {point}
                      </div>
                    ))}
                  </div>
                </motion.div>
              );

              return (
                <motion.div
                  key={step.label}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ type: "spring", damping: 20, stiffness: 70, delay: i * 0.08 }}
                  className="relative grid gap-6 lg:grid-cols-2 lg:items-center"
                >
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", damping: 15, stiffness: 180, delay: 0.25 + i * 0.08 }}
                    className="absolute left-1/2 top-1/2 z-10 hidden h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-[#111111] lg:block"
                  >
                    <motion.span
                      animate={{ scale: [1, 1.9, 1], opacity: [0.7, 0.18, 0.7] }}
                      transition={{ duration: 2.8, repeat: Infinity, delay: i * 0.35 }}
                      className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FFE1CC]/70"
                    />
                  </motion.div>
                  {i % 2 === 0 ? (
                    <>
                      {visual}
                      {copy}
                    </>
                  ) : (
                    <>
                      <div className="lg:order-2">{visual}</div>
                      <div className="lg:order-1">{copy}</div>
                    </>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ type: "spring", damping: 20, stiffness: 70, delay: 0.18 }}
          className="mx-auto mt-20 max-w-3xl rounded-[24px] border border-white/10 bg-[#1d1d1d] p-7 text-center md:p-9"
        >
          <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#FFE1CC]/80">
            What is the Adaptive Spine?
          </p>
          <p className="mt-4 text-[16px] font-medium leading-[1.8] text-white/55">
            The Spine is a governed memory layer that sits beneath your tools. It ingests data from every system, links it into entities like &ldquo;Acme Corp&rdquo; or &ldquo;FinanceFlow&rdquo;, and keeps the full history and relationships intact — even when tools change.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", damping: 20, stiffness: 70, delay: 0.24 }}
          className="mx-auto mt-8 grid max-w-5xl gap-5 md:grid-cols-3"
        >
          {pillars.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", damping: 20, stiffness: 70, delay: 0.3 + i * 0.08 }}
              className="rounded-[22px] border border-white/10 bg-[#1d1d1d] p-7"
            >
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-[#FFE1CC]/10">
                <span className="h-2.5 w-2.5 rounded-full bg-[#FFE1CC]" />
              </div>
              <div className="text-[17px] font-semibold tracking-[-0.02em] text-white">{item.title}</div>
              <p className="mt-3 text-[14px] font-medium leading-[1.7] text-white/45">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
