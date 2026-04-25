"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  AlertCircle,
  Eye,
  ShieldOff,
  Layers,
  Bot,
  LayoutDashboard,
  Workflow,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 } as const,
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true, margin: "-80px" },
  transition: { type: "spring" as const, damping: 18, stiffness: 70, delay },
});

const problems = [
  {
    icon: AlertCircle,
    title: "Apps and data are fragmented",
    desc: "Each app holds a slice. Nobody holds the whole picture.",
  },
  {
    icon: Bot,
    title: "AI acts without full context",
    desc: "Single-app copilots miss cross-system signals. They act before you approve.",
  },
  {
    icon: ShieldOff,
    title: "No governance on automation",
    desc: "Actions execute without evidence or audit trail. No record of why.",
  },
];

const breaks = [
  {
    title: "Missed signals",
    desc: "Usage dropped, champion left, tickets unresolved — no app flagged the combined risk.",
  },
  {
    title: "Shadow automation",
    desc: "Records changed overnight. Nobody approved it. The audit shows nothing.",
  },
  {
    title: "Audit and trust risk",
    desc: "Board asks why a deal was marked won. No evidence chain. No session record.",
  },
];

const existingFails = [
  {
    icon: LayoutDashboard,
    title: "CRM-centric views",
    desc: "CRMs show the sales record. Not support, billing, or usage — in one place.",
  },
  {
    icon: Eye,
    title: "Dashboards only",
    desc: "Beautiful charts. No next action. No workflow. No governance.",
  },
  {
    icon: Workflow,
    title: "Isolated copilots",
    desc: "Each copilot reasons on one tool. Blind to every other app.",
  },
];

const answer = [
  {
    title: "One Spine",
    desc: "Every app connected. Three data ecosystems — Truth, Context, AI Sessions — merge into Entity 360.",
  },
  {
    title: "One workspace",
    desc: "The Workspace is where you work. The Cognitive Layer is where AI serves you. Both powered by the Spine.",
  },
  {
    title: "Governed AI",
    desc: "AI thinks. You approve or deny. AI works. Knowledge compounds. Nothing executes without you.",
  },
];

export function WhyContent() {
  return (
    <>
      <section className="relative overflow-hidden pb-28 pt-[160px]" style={{ background: "#05070A" }}>
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-[20%] h-[600px] w-[800px] -translate-x-1/2 rounded-full opacity-[0.08] blur-[140px]" style={{ background: "radial-gradient(circle, rgba(239,68,68,0.3), transparent 70%)" }} />
        </div>
        <div className="relative mx-auto max-w-[900px] px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", damping: 20, stiffness: 80 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/[0.08] px-4 py-1.5 text-[13px] font-semibold text-white/50"
            style={{ background: "rgba(255,255,255,0.03)", backdropFilter: "blur(12px)" }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Why IntegrateWise
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", damping: 18, stiffness: 70, delay: 0.15 }}
            className="text-[48px] font-semibold leading-[1.05] tracking-[-0.05em] text-white sm:text-[64px] lg:text-[72px]"
          >
            The apps problem is{" "}
            <span className="text-primary">not fragmentation.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", damping: 16, stiffness: 52, delay: 0.35 }}
            className="mx-auto mt-7 max-w-2xl text-[17px] font-medium leading-[1.6] tracking-[-0.02em] text-white/45"
          >
            Signal is scattered. AI has no context. Actions bypass governance.
          </motion.p>
        </div>
      </section>

      <section className="py-28 md:py-36" style={{ background: "#05070A" }}>
        <div className="mx-auto max-w-[1100px] px-6">
          <motion.div {...fade(0)} className="mx-auto max-w-2xl text-center">
            <h2 className="text-[40px] font-semibold leading-[1.1] tracking-[-0.04em] text-white sm:text-[52px]">
              What breaks when{" "}
              <span className="text-primary">apps don&apos;t talk</span>
            </h2>
            <p className="mt-5 text-[16px] font-medium leading-[1.6] text-white/40">
              8–15 apps. No single view shows the full picture.
            </p>
          </motion.div>
          <div className="mt-16 grid gap-5 sm:grid-cols-3">
            {problems.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={i}
                {...fade(i * 0.08)}
                className="group overflow-hidden rounded-2xl border border-white/[0.06] p-6 transition-all hover:border-white/[0.12] hover:-translate-y-0.5"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  backdropFilter: "blur(12px)",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)",
                }}
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-500/[0.10]" style={{ boxShadow: "0 0 25px rgba(239,68,68,0.12)" }}>
                  <Icon className="h-5 w-5 text-red-400" />
                </div>
                <h3 className="mt-4 text-[16px] font-semibold tracking-[-0.03em] text-white">
                  {title}
                </h3>
                <p className="mt-2 text-[14px] font-medium leading-[1.6] text-white/40">
                  {desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 md:py-36 border-t border-white/[0.04]" style={{ background: "#05070A" }}>
        <div className="mx-auto max-w-[1100px] px-6">
          <motion.div {...fade(0)} className="mx-auto max-w-2xl text-center">
            <h2 className="text-[40px] font-semibold leading-[1.1] tracking-[-0.04em] text-white sm:text-[52px]">
              Real failures from{" "}
              <span className="text-primary">fragmented systems</span>
            </h2>
          </motion.div>
          <div className="mt-16 grid gap-5 sm:grid-cols-3">
            {breaks.map(({ title, desc }, i) => (
              <motion.div
                key={i}
                {...fade(i * 0.08)}
                className="rounded-2xl border border-white/[0.06] border-l-2 border-l-primary/40 p-6"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  backdropFilter: "blur(12px)",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)",
                }}
              >
                <h3 className="text-[16px] font-semibold tracking-[-0.03em] text-white">
                  {title}
                </h3>
                <p className="mt-3 text-[14px] font-medium leading-[1.6] text-white/40">
                  {desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 md:py-36 border-t border-white/[0.04]" style={{ background: "#05070A" }}>
        <div className="mx-auto max-w-[1100px] px-6">
          <motion.div {...fade(0)} className="mx-auto max-w-2xl text-center">
            <h2 className="text-[40px] font-semibold leading-[1.1] tracking-[-0.04em] text-white sm:text-[52px]">
              Why existing products{" "}
              <span className="text-primary">can&apos;t fix this</span>
            </h2>
            <p className="mt-5 text-[16px] font-medium leading-[1.6] text-white/40">
              Built for a world where one app had the picture. That world is gone.
            </p>
          </motion.div>
          <div className="mt-16 grid gap-5 sm:grid-cols-3">
            {existingFails.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={i}
                {...fade(i * 0.08)}
                className="group overflow-hidden rounded-2xl border border-white/[0.06] p-6 transition-all hover:border-white/[0.12] hover:-translate-y-0.5"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  backdropFilter: "blur(12px)",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)",
                }}
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-500/[0.10]" style={{ boxShadow: "0 0 25px rgba(245,158,11,0.12)" }}>
                  <Icon className="h-5 w-5 text-amber-400" />
                </div>
                <h3 className="mt-4 text-[16px] font-semibold tracking-[-0.03em] text-white">
                  {title}
                </h3>
                <p className="mt-2 text-[14px] font-medium leading-[1.6] text-white/40">
                  {desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-28 md:py-36 border-t border-white/[0.04]" style={{ background: "#05070A" }}>
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-[30%] h-[500px] w-[600px] -translate-x-1/2 rounded-full opacity-[0.06] blur-[140px]" style={{ background: "radial-gradient(circle, rgba(255,178,44,0.4), transparent 70%)" }} />
        </div>
        <div className="relative mx-auto max-w-[1100px] px-6">
          <motion.div {...fade(0)} className="mx-auto max-w-2xl text-center">
            <h2 className="text-[44px] font-semibold tracking-[-0.05em] leading-[1.1] text-white sm:text-[56px]">
              One Spine. One workspace.{" "}
              <span className="text-primary">Governed AI.</span>
            </h2>
            <p className="mt-5 text-[17px] font-medium leading-[1.6] text-white/45">
              The Spine accumulates your data. The product renders insights. You approve. Knowledge compounds.
            </p>
          </motion.div>
          <div className="mt-16 grid gap-5 sm:grid-cols-3">
            {answer.map(({ title, desc }, i) => (
              <motion.div
                key={i}
                {...fade(i * 0.08)}
                className="rounded-2xl border border-white/[0.06] p-6"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  backdropFilter: "blur(12px)",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)",
                }}
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/15 text-[13px] font-bold text-primary">
                  {i + 1}
                </div>
                <h3 className="mt-4 text-[17px] font-semibold tracking-[-0.03em] text-white">
                  {title}
                </h3>
                <p className="mt-2 text-[14px] font-medium leading-[1.6] text-white/45">
                  {desc}
                </p>
              </motion.div>
            ))}
          </div>
          <motion.div {...fade(0.3)} className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/contact?intent=demo"
              className="inline-flex h-12 items-center gap-2 rounded-full px-7 text-[14px] font-semibold text-white transition-all hover:opacity-90"
              style={{ background: "var(--gradient-primary)", boxShadow: "0 0 30px rgba(255,178,44,0.15)" }}
            >
              Book a demo <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/platform"
              className="inline-flex h-12 items-center rounded-full border border-white/[0.1] px-6 text-[14px] font-semibold text-white/60 transition-colors hover:border-white/20 hover:text-white"
            >
              How the Spine works
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-20 border-t border-white/[0.04]" style={{ background: "#05070A" }}>
        <div className="mx-auto max-w-[700px] px-6 text-center">
          <motion.div {...fade(0)}>
            <div className="flex items-center justify-center gap-3 text-primary mb-4">
              <CheckCircle2 className="h-5 w-5" />
              <span className="text-[12px] font-bold uppercase tracking-[0.14em]">Proof</span>
            </div>
            <blockquote className="text-[18px] font-semibold tracking-[-0.03em] leading-[1.5] text-white/70">
              &ldquo;The Spine connected support, usage, billing, and relationship data
              across 12 apps. The team spotted the risk early. The $8M account was
              saved.&rdquo;
            </blockquote>
            <p className="mt-4 text-[14px] font-medium text-white/30">
              Account Success team — IntegrateWise early customer
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
