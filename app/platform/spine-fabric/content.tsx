"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Database, Shield, Zap, GitBranch, RefreshCw, Clock, GitMerge, Layers, ArrowRight } from "lucide-react";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { type: "spring" as const, damping: 18, stiffness: 70, delay },
});

const heroFade = (delay = 0) => ({
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { type: "spring" as const, damping: 16, mass: 1, stiffness: 52, delay },
});

const coreFunctions = [
  {
    icon: Zap,
    title: "One connection",
    body: "The tools, files, and conversations you already use stay themselves. SpineWorkspace does not become a new home for the record.",
  },
  {
    icon: Shield,
    title: "The evidence stays evidence",
    body: "Email, notes, files, and conversations are for this person and this task. They are not written into the record.",
  },
  {
    icon: RefreshCw,
    title: "The view follows the role",
    body: "Sales, operations, and leadership open the same work and see what they need.",
  },
  {
    icon: GitBranch,
    title: "A person decides",
    body: "Twin prepares a draft. It is not the record until a person accepts, edits, or rejects it.",
  },
];

const capabilities = [
  {
    icon: Database,
    title: "The record stays put",
    desc: "Customers, tickets, billing, contracts, and approvals stay in the tools that own them.",
    stat: "The tools",
  },
  {
    icon: GitMerge,
    title: "The evidence is for this task",
    desc: "Only what this person may use for this task is brought into the workspace.",
    stat: "This task",
  },
  {
    icon: Clock,
    title: "Earlier decisions stay available",
    desc: "What a person already accepted can be read again. It is not mixed into a new record.",
    stat: "Decisions",
  },
  {
    icon: Shield,
    title: "Open is not allowed",
    desc: "A tool being available is not permission to use it. The person's role decides.",
    stat: "Permission",
  },
];

const pipeline = [
  { step: "01", name: "Connect", desc: "The tools you already run" },
  { step: "02", name: "Separate", desc: "Record, evidence, draft, and person" },
  { step: "03", name: "Show", desc: "The view this role needs" },
  { step: "04", name: "Ask", desc: "Twin opens only when asked" },
  { step: "05", name: "Decide", desc: "A person allows, changes, or stops it" },
  { step: "06", name: "Write back", desc: "The original tool is updated" },
];

export function SpineFabricContent() {
  return (
    <>
      <section className="relative overflow-hidden pb-28 pt-40 bg-white">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 left-1/4 w-[700px] h-[700px] rounded-full blur-[220px]" style={{ background: "rgba(27,167,132,0.07)" }} />
        </div>
        <div className="mx-auto max-w-[820px] px-4 text-center">
          <motion.div
            {...heroFade(0.1)}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[13px] font-semibold text-white/60"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Platform · One connection
          </motion.div>
          <motion.h1
            {...heroFade(0.22)}
            className="text-[44px] font-semibold leading-[1.08] tracking-[-0.05em] text-white sm:text-[64px]"
          >
            The tools keep the record.{" "}
            <span className="text-primary">The workspace shows the work.</span>
          </motion.h1>
          <motion.p
            {...heroFade(0.38)}
            className="mx-auto mt-7 max-w-xl text-[17px] font-medium leading-[1.55] tracking-[-0.02em] text-white/50"
          >
            SpineWorkspace connects the tools, files, and conversations you already use. It does not become a new home for the record. Twin proposes only when asked. A person decides.
          </motion.p>
          <motion.div {...heroFade(0.5)} className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Link href="/contact?intent=demo" className="inline-flex h-11 items-center rounded-full bg-primary px-6 text-[14px] font-semibold tracking-[-0.02em] text-white transition-opacity hover:opacity-90">
              Book a tailored demo →
            </Link>
            <Link href="/platform/how-it-works" className="inline-flex h-11 items-center rounded-full border border-white/15 px-6 text-[14px] font-semibold tracking-[-0.02em] text-white/60 transition-colors hover:border-white/30 hover:text-white">
              How it works →
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-8 bg-white">
        <div className="mx-auto max-w-[1000px] px-4">
          <div className="grid grid-cols-3 gap-6 text-center">
            {[
              { value: "Record", label: "Stays in the original tool" },
              { value: "Evidence", label: "For this person and this task" },
              { value: "Draft", label: "Not the record until a person decides" },
            ].map((s) => (
              <motion.div key={s.label} {...fade(0)} className="rounded-2xl border border-white/8 bg-white/[0.03] py-8">
                <div className="text-3xl font-bold text-primary mb-1">{s.value}</div>
                <div className="text-sm text-white/45">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="arvio-section dark-section">
        <div className="mx-auto max-w-[1100px]">
          <motion.div {...fade(0)} className="mx-auto max-w-2xl text-center mb-12">
            <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-primary mb-3">Core Functions</p>
            <h2 className="section-heading">Four things that stay <span className="text-primary">in their place</span></h2>
          </motion.div>
          <div className="grid gap-5 sm:grid-cols-2">
            {coreFunctions.map(({ icon: Icon, title, body }, i) => (
              <motion.div key={title} {...fade(i * 0.07)} className="arvio-card p-7">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl" style={{ background: "var(--gradient-primary-icon)" }}>
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-[16px] font-semibold tracking-[-0.03em] text-foreground">{title}</h3>
                <p className="mt-2 text-[13px] font-medium leading-[1.65] text-muted-foreground">{body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="arvio-section dark-section">
        <div className="mx-auto max-w-[1100px]">
          <motion.div {...fade(0)} className="mx-auto max-w-2xl text-center mb-12">
            <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-primary mb-3">What stays separate</p>
            <h2 className="section-heading">The work stays <span className="text-primary">understandable</span></h2>
          </motion.div>
          <div className="grid gap-5 sm:grid-cols-2">
            {capabilities.map((c, i) => (
              <motion.div
                key={c.title}
                {...fade(i * 0.07)}
                className="group rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-8 hover:border-white/[0.15] transition-colors"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                  style={{ background: "rgba(27,167,132,0.12)", boxShadow: "0 0 30px rgba(27,167,132,0.12)" }}
                >
                  <c.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-white">{c.title}</h3>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">{c.stat}</span>
                </div>
                <p className="text-white/55 leading-relaxed">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="arvio-section dark-section">
        <div className="mx-auto max-w-[1100px]">
          <motion.div {...fade(0)} className="mx-auto max-w-2xl text-center mb-10">
            <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-primary mb-3">The loop</p>
            <h2 className="section-heading">From the tools you have to <span className="text-primary">a decision you can stand behind</span></h2>
          </motion.div>
          <motion.div
            {...fade(0.1)}
            className="rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.05] to-transparent p-10"
          >
            <div className="flex items-center gap-3 mb-10">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "rgba(27,167,132,0.12)" }}>
                <Layers className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">The same path every time</h3>
                <p className="text-white/45 text-sm">Connect, keep each kind of information apart, then let a person decide.</p>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {pipeline.map((p, i) => (
                <div key={p.step} className="relative rounded-xl border border-white/[0.08] bg-white/[0.03] p-5 hover:border-primary/30 hover:bg-primary/[0.03] transition-colors">
                  <div className="text-2xl font-bold text-white/10 mb-2">{p.step}</div>
                  <div className="font-semibold text-white mb-1">{p.name}</div>
                  <div className="text-xs text-white/40 leading-relaxed">{p.desc}</div>
                  {i < pipeline.length - 1 && i % 4 !== 3 && (
                    <ArrowRight className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary/40 z-10" />
                  )}
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div {...fade(0.2)} className="mt-6 text-center">
            <p className="text-[13px] font-medium text-muted-foreground">
              An accepted change is written back through the tool that owns the record. The workspace then shows the result.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="arvio-section dark-section bg-white">
        <div className="mx-auto max-w-[680px] px-4 text-center">
          <motion.div {...fade(0)}>
            <Database className="mx-auto mb-4 h-7 w-7 text-primary" />
            <h2 className="text-[32px] font-semibold tracking-[-0.05em] text-white">
              Not a new home for the record. <span className="text-primary">The tools stay in charge.</span>
            </h2>
            <p className="mx-auto mt-4 text-[15px] font-medium leading-[1.6] text-white/40">
              SpineWorkspace shows the work. It does not replace the record.
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <Link href="/platform/how-it-works" className="inline-flex h-10 items-center rounded-full border border-white/15 px-5 text-[13px] font-semibold text-white/60 hover:border-white/30 hover:text-white transition-colors">
                How data flows →
              </Link>
              <Link href="/platform/security" className="inline-flex h-10 items-center rounded-full border border-white/15 px-5 text-[13px] font-semibold text-white/60 hover:border-white/30 hover:text-white transition-colors">
                Security & governance →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
