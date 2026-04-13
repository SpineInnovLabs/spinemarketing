"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import {
  LayoutDashboard,
  Brain,
  ShieldCheck,
  TrendingUp,
  Clock,
  CheckCircle2,
  Zap,
  ArrowRight,
  Eye,
} from "lucide-react";

function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting && !started) setStarted(true); },
      { threshold: 0.3 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let frame: number;
    const duration = 1800;
    const start = performance.now();
    const step = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - t, 3);
      setCount(Math.round(ease * value));
      if (t < 1) frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [started, value]);

  return <span ref={ref}>{count}{suffix}</span>;
}

function seededRandom(seed: number) {
  const x = Math.sin(seed * 9301 + 49297) * 49297;
  return x - Math.floor(x);
}

function FloatingParticles({ count = 20 }: { count?: number }) {
  const particles = Array.from({ length: count }, (_, i) => ({
    id: i,
    x: seededRandom(i * 3 + 1) * 100,
    y: seededRandom(i * 3 + 2) * 100,
    size: 1 + seededRandom(i * 3 + 3) * 2,
    duration: 15 + seededRandom(i * 7) * 20,
    delay: seededRandom(i * 11) * 10,
  }));

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-primary/20"
          style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size }}
          animate={{
            y: [0, -30, 0, 20, 0],
            x: [0, 15, -10, 5, 0],
            opacity: [0.2, 0.6, 0.3, 0.5, 0.2],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { type: "spring", damping: 18, stiffness: 70 } },
};

const heroFade = (delay = 0) => ({
  initial: { opacity: 0, y: 14 } as const,
  animate: { opacity: 1, y: 0 } as const,
  transition: { type: "spring" as const, damping: 16, mass: 1, stiffness: 52, delay },
});

const layers = [
  {
    tag: "Workbench",
    icon: LayoutDashboard,
    title: "Where your team works every day",
    color: { bg: "rgba(45,212,191,0.12)", glow: "rgba(45,212,191,0.25)", text: "#2dd4bf" },
    items: [
      { name: "Account Command Center", desc: "Every email, ticket, invoice, and meeting — unified in one timeline. AI surfaces risk signals and drafts follow-ups for your approval." },
      { name: "Portfolio Views", desc: "Health heatmaps, renewal calendars, and expansion pipelines. Revenue risk waterfalls and project exception lists — all live." },
      { name: "Knowledge Memory", desc: "Approved insights compound. Rejected actions teach the system. Your workspace grows sharper over time." },
    ],
  },
  {
    tag: "Intelligence Layer",
    icon: Brain,
    title: "AI that understands your business context",
    color: { bg: "rgba(139,92,246,0.12)", glow: "rgba(139,92,246,0.25)", text: "#8b5cf6" },
    items: [
      { name: "Morning Brief", desc: "AI-generated digest of what changed overnight — exceptions ranked by revenue impact, not notification volume." },
      { name: "Proactive Signals", desc: "\"Payment failed + Champion left + 3 P1 tickets\" — linked, scored, and surfaced before you ask." },
      { name: "Session Continuity", desc: "Ask \"What happened with TechServe last week?\" AI answers from the unified timeline — grounded in real data." },
    ],
  },
  {
    tag: "Spine Foundation",
    icon: ShieldCheck,
    title: "Invisible infrastructure you can trust",
    color: { bg: "rgba(251,191,36,0.12)", glow: "rgba(251,191,36,0.25)", text: "#fbbf24" },
    items: [
      { name: "Evidence-First Governance", desc: "Every suggestion shows its source data and confidence score before proceeding." },
      { name: "Configurable Approval Flows", desc: "Route suggestions to CSM, Manager, or Finance based on impact thresholds you define." },
      { name: "Write-Back Safety", desc: "Approved actions execute via idempotent APIs with automatic retry and rollback." },
    ],
  },
];

const modules = [
  { title: "Account Intelligence", desc: "Health scoring across CRM, billing, and support with a 90-day renewal risk lookahead.", icon: Eye },
  { title: "Revenue & Collections", desc: "AI drafts payment reminders with the right tone based on relationship status.", icon: TrendingUp },
  { title: "Escalation & Risk", desc: "Pattern detection across tickets — surface product risk before it becomes churn.", icon: Zap },
  { title: "Executive Console", desc: "Board-ready briefs from live data. \"$2.1M at risk, 4 expansions identified.\"", icon: Brain },
];

const governancePrinciples = [
  { icon: CheckCircle2, title: "Approval Required", desc: "No auto-approve for critical actions. The human gate is mandatory." },
  { icon: Eye, title: "Evidence Visibility", desc: "Every suggestion links back to source data — never a black-box recommendation." },
  { icon: Clock, title: "Full Audit Log", desc: "Who approved what, when, and based on which data. Immutable and append-only." },
  { icon: ArrowRight, title: "Reversibility", desc: "Approved actions can be rolled back within 24 hours if an error is detected." },
];

const socialProofMetrics = [
  { value: 500, suffix: "+", label: "B2B accounts managed" },
  { value: 40, suffix: "+", label: "system connectors" },
  { value: 90, suffix: "s", label: "avg time to first insight", prefix: "< " },
  { value: 100, suffix: "%", label: "human approval required" },
];

export function ProductContent() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(heroProgress, [0, 1], [0, 80]);
  const heroOpacity = useTransform(heroProgress, [0, 0.6], [1, 0]);

  const mockupRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: mockupProgress } = useScroll({
    target: mockupRef,
    offset: ["start end", "center center"],
  });
  const mockupScale = useTransform(mockupProgress, [0, 1], [0.88, 1]);
  const mockupOpacity = useTransform(mockupProgress, [0, 0.5], [0, 1]);

  return (
    <>
      <section ref={heroRef} className="relative overflow-hidden" style={{ backgroundColor: "rgb(8, 7, 14)" }}>
        <FloatingParticles count={25} />
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-[15%] h-[600px] w-[800px] -translate-x-1/2 rounded-full opacity-30 blur-[140px]" style={{ background: "radial-gradient(circle, rgba(45,212,191,0.25), transparent 70%)" }} />
          <div className="absolute right-[5%] top-[55%] h-[400px] w-[500px] rounded-full opacity-20 blur-[120px]" style={{ background: "radial-gradient(circle, rgba(139,92,246,0.2), transparent 70%)" }} />
        </div>

        <motion.div
          className="relative mx-auto max-w-[900px] px-6 pb-28 pt-[160px] text-center md:px-16"
          style={{ y: heroY, opacity: heroOpacity }}
        >
          <motion.div
            {...heroFade(0.08)}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-1.5 text-[13px] font-semibold text-white/60"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Product overview
          </motion.div>

          <motion.h1
            {...heroFade(0.22)}
            className="text-[44px] font-semibold leading-[1.08] tracking-[-0.05em] text-white sm:text-[56px] lg:text-[64px]"
          >
            Stop switching tabs.
            <br />
            <span className="text-primary">Start seeing the full picture.</span>
          </motion.h1>

          <motion.div {...heroFade(0.32)} className="mx-auto mt-4 h-[3px] w-12 rounded-full bg-primary" />

          <motion.p
            {...heroFade(0.4)}
            className="mx-auto mt-7 max-w-2xl text-[17px] font-medium leading-[1.6] tracking-[-0.02em] text-white/55"
          >
            IntegrateWise connects your CRM, billing, support, and project tools into one live workspace. AI surfaces what needs attention, drafts the next action, and waits for your approval — before touching anything.
          </motion.p>

          <motion.div {...heroFade(0.52)} className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact?intent=demo"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-primary px-7 text-[14px] font-semibold tracking-[-0.02em] text-white transition-opacity hover:opacity-90"
            >
              Book a live demo <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-12 items-center rounded-full border border-white/15 px-6 text-[14px] font-semibold tracking-[-0.02em] text-white/70 transition-colors hover:border-white/30 hover:text-white"
            >
              Book a walkthrough
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <section style={{ backgroundColor: "rgb(8, 7, 14)" }} className="border-t border-white/[0.06] pb-20">
        <div className="mx-auto max-w-[1100px] px-6">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.04] sm:grid-cols-4"
          >
            {socialProofMetrics.map(({ value, suffix, label, prefix }) => (
              <motion.div
                key={label}
                variants={fadeUp}
                className="flex flex-col items-center justify-center gap-1.5 bg-white/[0.02] px-4 py-8"
              >
                <span className="text-[32px] font-bold tracking-[-0.04em] text-white">
                  {prefix || ""}<AnimatedCounter value={value} suffix={suffix} />
                </span>
                <span className="text-center text-[11px] font-semibold uppercase tracking-[0.1em] text-white/40">
                  {label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section ref={mockupRef} className="relative overflow-hidden py-24" style={{ backgroundColor: "rgb(8, 7, 14)" }}>
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[15%] top-[20%] h-[400px] w-[500px] rounded-full opacity-15 blur-[100px]" style={{ background: "radial-gradient(circle, rgba(45,212,191,0.3), transparent 70%)" }} />
        </div>
        <div className="relative mx-auto max-w-[1100px] px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ type: "spring", damping: 18, stiffness: 70 }}
            className="mx-auto mb-14 max-w-2xl text-center"
          >
            <p className="mb-3 text-[12px] font-bold uppercase tracking-[0.14em] text-primary">How it works</p>
            <h2 className="text-[36px] font-semibold leading-[1.15] tracking-[-0.04em] text-white sm:text-[44px]">
              From scattered data to{" "}
              <span className="text-primary">one clear action</span>
            </h2>
            <p className="mt-4 text-[15px] font-medium leading-[1.6] text-white/50">
              IntegrateWise reads your tools, reasons across all of them, and presents the next move — ready for your approval.
            </p>
          </motion.div>

          <motion.div
            style={{ scale: mockupScale, opacity: mockupOpacity }}
            className="overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03]"
          >
            <div className="flex items-center gap-2 border-b border-white/[0.06] bg-white/[0.04] px-5 py-3">
              <span className="h-3 w-3 rounded-full bg-red-400/40" />
              <span className="h-3 w-3 rounded-full bg-amber-400/40" />
              <span className="h-3 w-3 rounded-full bg-green-400/40" />
              <span className="ml-3 text-[12px] font-semibold text-white/40">Account Command Center</span>
            </div>

            <div className="grid gap-px bg-white/[0.04] sm:grid-cols-3">
              {[
                { num: "1", color: "#2dd4bf", label: "Connect", title: "Your tools stay where they are", desc: "Salesforce, HubSpot, Jira, Stripe, Zendesk — connect once, IntegrateWise reads everything in real time.", tags: ["CRM", "Billing", "Support", "Projects"] },
                { num: "2", color: "#8b5cf6", label: "Surface", title: "AI reasons across every signal", desc: "", alerts: [{ label: "Payment failed", severity: "High" }, { label: "Champion left", severity: "Critical" }, { label: "3 open P1 tickets", severity: "High" }] },
                { num: "3", color: "#2dd4bf", label: "Act", title: "You approve, IntegrateWise executes", desc: "", draft: true },
              ].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, type: "spring", damping: 18, stiffness: 70 }}
                  className="flex flex-col gap-3 bg-white/[0.02] p-6"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl" style={{ backgroundColor: `${step.color}15` }}>
                    <span className="text-[13px] font-bold" style={{ color: step.color }}>{step.num}</span>
                  </div>
                  <p className="text-[12px] font-bold uppercase tracking-[0.1em] text-white/40">{step.label}</p>
                  <p className="text-[14px] font-semibold tracking-[-0.02em] text-white">{step.title}</p>
                  {step.desc && <p className="text-[13px] font-medium leading-[1.6] text-white/45">{step.desc}</p>}
                  {step.tags && (
                    <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
                      {step.tags.map((tag) => (
                        <span key={tag} className="rounded-md border border-white/[0.08] bg-white/[0.04] px-2.5 py-1 text-[11px] font-semibold text-white/40">{tag}</span>
                      ))}
                    </div>
                  )}
                  {step.alerts && (
                    <div className="mt-1 space-y-2">
                      {step.alerts.map(({ label, severity }) => (
                        <div key={label} className="flex items-center justify-between rounded-lg border border-white/[0.06] bg-white/[0.03] px-3 py-2">
                          <span className="text-[12px] font-medium text-white/60">{label}</span>
                          <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold uppercase ${severity === "Critical" ? "bg-red-500/15 text-red-400" : "bg-amber-500/15 text-amber-400"}`}>{severity}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  {step.draft && (
                    <div className="mt-1 rounded-xl border border-primary/20 bg-primary/[0.06] p-4">
                      <p className="text-[12px] font-semibold text-primary mb-1">AI Draft Ready</p>
                      <p className="text-[12px] font-medium leading-[1.6] text-white/45">&quot;Hi Sarah — wanted to check in given recent activity on FinanceFlow&apos;s account. Would tomorrow work for a quick call?&quot;</p>
                      <div className="mt-3 flex gap-2">
                        <span className="rounded-lg bg-primary px-3 py-1.5 text-[11px] font-bold text-white">Approve & Send</span>
                        <span className="rounded-lg border border-white/[0.1] px-3 py-1.5 text-[11px] font-bold text-white/40">Edit</span>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden py-28" style={{ backgroundColor: "rgb(8, 7, 14)" }}>
        <FloatingParticles count={15} />
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute right-[20%] top-[40%] h-[500px] w-[600px] rounded-full opacity-15 blur-[120px]" style={{ background: "radial-gradient(circle, rgba(139,92,246,0.2), transparent 70%)" }} />
        </div>
        <div className="relative mx-auto max-w-[1100px] px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ type: "spring", damping: 18, stiffness: 70 }}
            className="mx-auto mb-16 max-w-2xl text-center"
          >
            <p className="mb-3 text-[12px] font-bold uppercase tracking-[0.14em] text-primary">Three layers of product</p>
            <h2 className="text-[36px] font-semibold leading-[1.15] tracking-[-0.04em] text-white sm:text-[44px]">
              One surface.{" "}
              <span className="text-primary">Three layers of intelligence.</span>
            </h2>
          </motion.div>

          <div className="space-y-6">
            {layers.map(({ tag, icon: Icon, title, color, items }, li) => (
              <motion.div
                key={tag}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ type: "spring", damping: 18, stiffness: 60, delay: li * 0.1 }}
                className="overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 sm:p-8"
              >
                <div className="mb-6 flex flex-wrap items-center gap-3">
                  <div
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl"
                    style={{ background: color.bg, boxShadow: `0 0 30px ${color.glow}` }}
                  >
                    <Icon className="h-5 w-5" style={{ color: color.text }} />
                  </div>
                  <div>
                    <span className="block text-[11px] font-bold uppercase tracking-[0.12em] text-white/40">{tag}</span>
                    <h3 className="text-[17px] font-semibold tracking-[-0.03em] text-white">{title}</h3>
                  </div>
                </div>
                <motion.div
                  variants={stagger}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
                >
                  {items.map(({ name, desc }, ii) => (
                    <motion.div
                      key={ii}
                      variants={fadeUp}
                      className="rounded-xl border border-white/[0.06] bg-white/[0.03] p-5 transition-colors hover:border-white/[0.12]"
                    >
                      <div className="text-[14px] font-semibold tracking-[-0.02em] text-white mb-2">{name}</div>
                      <p className="text-[13px] font-medium leading-[1.65] text-white/45">{desc}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-28" style={{ backgroundColor: "rgb(8, 7, 14)" }}>
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[25%] top-[30%] h-[400px] w-[500px] rounded-full opacity-15 blur-[100px]" style={{ background: "radial-gradient(circle, rgba(45,212,191,0.25), transparent 70%)" }} />
        </div>
        <div className="relative mx-auto max-w-[1100px] px-6">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ type: "spring", damping: 18, stiffness: 70 }}
              >
                <p className="mb-3 text-[12px] font-bold uppercase tracking-[0.14em] text-primary">Core modules</p>
                <h2 className="text-[32px] font-semibold leading-[1.15] tracking-[-0.04em] text-white">
                  Built for every{" "}
                  <span className="text-primary">operating context</span>
                </h2>
              </motion.div>
              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="mt-8 space-y-3"
              >
                {modules.map(({ title, desc, icon: ModIcon }, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    className="flex items-start gap-4 rounded-xl border border-white/[0.08] bg-white/[0.03] p-5 transition-colors hover:border-primary/30 hover:bg-primary/[0.04]"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/[0.12]" style={{ boxShadow: "0 0 20px rgba(45,212,191,0.15)" }}>
                      <ModIcon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-[15px] font-semibold tracking-[-0.02em] text-white">{title}</span>
                      <p className="mt-1 text-[13px] font-medium leading-[1.6] text-white/45">{desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ type: "spring", damping: 18, stiffness: 70, delay: 0.05 }}
              >
                <p className="mb-3 text-[12px] font-bold uppercase tracking-[0.14em] text-primary">Governance by design</p>
                <h2 className="text-[32px] font-semibold leading-[1.15] tracking-[-0.04em] text-white">
                  Control is not{" "}
                  <span className="text-primary">optional</span>
                </h2>
              </motion.div>
              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="mt-8 space-y-3"
              >
                {governancePrinciples.map(({ icon: GovIcon, title, desc }, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    className="flex items-start gap-4 rounded-xl border border-white/[0.08] bg-white/[0.03] p-5"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/[0.12]" style={{ boxShadow: "0 0 20px rgba(45,212,191,0.15)" }}>
                      <GovIcon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-[15px] font-semibold tracking-[-0.02em] text-white mb-1">{title}</div>
                      <p className="text-[13px] font-medium leading-[1.6] text-white/45">{desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-24" style={{ backgroundColor: "rgb(8, 7, 14)" }}>
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-[100px]" style={{ background: "radial-gradient(circle, rgba(45,212,191,0.3), transparent 70%)" }} />
        </div>
        <div className="relative mx-auto max-w-[700px] px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", damping: 18, stiffness: 70 }}
            className="text-[32px] font-semibold leading-[1.15] tracking-[-0.04em] text-white sm:text-[40px]"
          >
            See it working{" "}
            <span className="text-primary">in 20 minutes</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", damping: 18, stiffness: 70, delay: 0.08 }}
            className="mx-auto mt-5 max-w-lg text-[16px] font-medium leading-[1.6] text-white/50"
          >
            Book a walkthrough and we&apos;ll show you the workspace with your own tools connected.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", damping: 18, stiffness: 70, delay: 0.16 }}
            className="mt-8"
          >
            <Link
              href="/contact?intent=demo"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-primary px-8 text-[15px] font-semibold text-white transition-opacity hover:opacity-90"
            >
              Book a demo <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
