"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import {
  LayoutDashboard,
  Sparkles,
  ShieldCheck,
  Coins,
  Clock,
  CheckCircle2,
  ScanSearch,
  ArrowRight,
  Gauge,
  Fingerprint,
  UserCheck,
  Brain,
} from "lucide-react";
import { DashboardMockup } from "@/components/dashboard-mockup";

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
    tag: "Adaptive Workspace",
    icon: LayoutDashboard,
    title: "Your Command Center for Every Entity",
    color: { bg: "rgba(255,178,44,0.12)", glow: "rgba(255,178,44,0.25)", text: "#ffb22c" },
    items: [
      { name: "Unified Entity Views", desc: "See accounts, clients, or projects with complete history and context." },
      { name: "Evidence-Backed Insights", desc: "Every insight is linked to source data — emails, tickets, meetings." },
      { name: "Approval-Gated Actions", desc: "AI suggests, you approve. Nothing executes without your explicit consent." },
    ],
  },
  {
    tag: "Digital Memory",
    icon: Sparkles,
    title: "Your Digital Memory, Surfaced and Actionable",
    color: { bg: "rgba(139,92,246,0.12)", glow: "rgba(139,92,246,0.25)", text: "#8b5cf6" },
    items: [
      { name: "Unified Data", desc: "All CRM fields, billing history, product usage, support tickets, and communication threads in one view." },
      { name: "Complete History", desc: "Temporal timeline showing how the entity evolved — from first contact to current state." },
      { name: "Relationship Graph", desc: "See how this entity connects to others — related accounts, shared contacts, linked projects." },
    ],
  },
  {
    tag: "Insights Inbox",
    icon: Brain,
    title: "Your AI Twin Watches. You Decide.",
    color: { bg: "rgba(251,191,36,0.12)", glow: "rgba(251,191,36,0.25)", text: "#fbbf24" },
    items: [
      { name: "Proactive Monitoring", desc: "Your Twin watches for anomalies, risks, and opportunities — so you don't have to manually check every account." },
      { name: "Prioritized Queue", desc: "Insights ranked by urgency and impact. Critical renewal risks appear at the top." },
      { name: "Smart Filters", desc: "Filter by entity type, urgency level, source system, or team member." },
    ],
  },
  {
    tag: "Approval Gate",
    icon: ShieldCheck,
    title: "AI Suggests. You Approve.",
    color: { bg: "rgba(239,68,68,0.08)", glow: "rgba(239,68,68,0.15)", text: "#f87171" },
    items: [
      { name: "Human-in-the-Loop", desc: "Every suggested action requires your approval. No autonomous execution. You're always in control." },
      { name: "Review Before Sending", desc: "Review AI-generated drafts before sending. Edit suggestions before approval." },
      { name: "Reject with Feedback", desc: "Reject with feedback to improve your Twin over time." },
    ],
  },
];

const socialProofMetrics = [
  { value: 100, suffix: "+", label: "Tools connected" },
  { value: 14, suffix: "hrs", label: "Saved per week" },
  { value: 90, suffix: "s", label: "avg time to first insight", prefix: "< " },
  { value: 100, suffix: "%", label: "Human approval required" },
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
      <section ref={heroRef} className="relative overflow-hidden" style={{ background: "#05070A" }}>
        <FloatingParticles count={25} />
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-[15%] h-[600px] w-[800px] -translate-x-1/2 rounded-full opacity-30 blur-[140px]" style={{ background: "radial-gradient(circle, rgba(255,178,44,0.25), transparent 70%)" }} />
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
            Work the Way You Want
          </motion.div>

          <motion.h1
            {...heroFade(0.22)}
            className="text-[48px] font-semibold leading-[1.05] tracking-[-0.05em] text-white sm:text-[60px] lg:text-[72px]"
          >
            Your Governed
            <br />
            <span className="text-primary">Knowledge Workspace.</span>
          </motion.h1>

          <motion.p
            {...heroFade(0.4)}
            className="mx-auto mt-7 max-w-2xl text-[17px] font-medium leading-[1.6] tracking-[-0.02em] text-white/45"
          >
            The Workbench transforms scattered data into unified entity views, evidence-backed insights, and approval-gated actions — so you work with complete context, not fragmented tools. No more tab-switching. No more context loss.
          </motion.p>

          <motion.div {...heroFade(0.52)} className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact?intent=demo"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-primary px-7 text-[14px] font-semibold tracking-[-0.02em] text-white transition-opacity hover:opacity-90"
            >
              Book a demo <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="#digital-memory"
              className="inline-flex h-12 items-center rounded-full border border-white/15 px-6 text-[14px] font-semibold tracking-[-0.02em] text-white/70 transition-colors hover:border-white/30 hover:text-white"
            >
              Explore Features
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <section className="bg-dark-section border-t border-white/[0.06] pb-20">
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

      <section ref={mockupRef} className="relative overflow-hidden py-24 bg-dark-section">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[15%] top-[20%] h-[400px] w-[500px] rounded-full opacity-15 blur-[100px]" style={{ background: "radial-gradient(circle, rgba(255,178,44,0.3), transparent 70%)" }} />
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
              Connect. Detect. Propose.{" "}
              <span className="text-primary">You approve.</span>
            </h2>
            <p className="mt-4 text-[15px] font-medium leading-[1.6] text-white/50">
              The Spine cleans data. The Cognitive Layer detects patterns. The Twin proposes actions. You decide what executes.
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

            <div className="grid gap-px bg-white/[0.04] sm:grid-cols-2 lg:grid-cols-4">
              {[
                { num: "1", color: "#ffb22c", label: "Connect", title: "Your tools stay where they are", desc: "CRM, billing, support, projects — connect once via OAuth.", tags: ["CRM", "Billing", "Support", "Projects"] },
                { num: "2", color: "#8b5cf6", label: "Remember", title: "Digital Memory builds over time", desc: "Data + Context unified. The Spine transforms raw data into structured knowledge.", alerts: null },
                { num: "3", color: "#fbbf24", label: "Observe", title: "Your Twin watches everything", desc: "Surfaces insights with evidence citations. Identifies risks, opportunities, and patterns.", draft: true },
                { num: "4", color: "#ffb22c", label: "Approve", title: "Nothing happens without you", desc: "", alerts: [{ label: "Evidence linked to source data", severity: "High" }, { label: "Confidence score: 87", severity: "Critical" }, { label: "Impact preview ready", severity: "High" }] },
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
                      <p className="text-[12px] font-semibold text-primary mb-1">Twin Proposed Action</p>
                      <p className="text-[12px] font-medium leading-[1.6] text-white/45">&quot;Escalate FinanceFlow — usage dropped 30%, champion left, renewal in 45 days. Recommend exec-level outreach.&quot;</p>
                      <div className="mt-3 flex gap-2">
                        <span className="rounded-lg bg-primary px-3 py-1.5 text-[11px] font-bold text-white">Approve</span>
                        <span className="rounded-lg border border-white/[0.1] px-3 py-1.5 text-[11px] font-bold text-white/40">Edit</span>
                        <span className="rounded-lg border border-white/[0.1] px-3 py-1.5 text-[11px] font-bold text-white/40">Reject</span>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden py-28 bg-dark-section border-t border-white/[0.06]">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-[30%] h-[500px] w-[700px] -translate-x-1/2 rounded-full opacity-10 blur-[140px]" style={{ background: "radial-gradient(circle, rgba(255,178,44,0.3), transparent 70%)" }} />
        </div>
        <div className="relative mx-auto max-w-[1100px] px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ type: "spring", damping: 18, stiffness: 70 }}
            className="mx-auto mb-14 max-w-2xl text-center"
          >
            <p className="mb-3 text-[12px] font-bold uppercase tracking-[0.14em] text-primary">Live preview</p>
            <h2 className="text-[36px] font-semibold leading-[1.15] tracking-[-0.04em] text-white sm:text-[44px]">
              Watch the Workspace{" "}
              <span className="text-primary">in action.</span>
            </h2>
            <p className="mt-4 text-[15px] font-medium leading-[1.6] text-white/50">
              Open one canonical record with activity, risk, and next steps already organized. No swiveling between Salesforce, Zendesk, Stripe, and Slack.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ type: "spring", damping: 20, stiffness: 60 }}
            className="mx-auto max-w-[900px]"
          >
            <DashboardMockup />
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden py-28 bg-dark-section">
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
            <p className="mb-3 text-[12px] font-bold uppercase tracking-[0.14em] text-primary">Four components</p>
            <h2 className="text-[40px] font-semibold leading-[1.1] tracking-[-0.04em] text-white sm:text-[52px]">
              Workspace. Cognitive Layer. Twin.{" "}
              <span className="text-primary">Approval Gate.</span>
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

      <section className="relative overflow-hidden py-28 bg-dark-section">
        <div className="relative mx-auto max-w-[680px] px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ type: "spring", damping: 18, stiffness: 70 }}
          >
            <Coins className="mx-auto mb-4 h-7 w-7 text-primary" />
            <p className="mb-3 text-[12px] font-bold uppercase tracking-[0.14em] text-primary">Pricing</p>
            <h2 className="text-[32px] font-semibold leading-[1.15] tracking-[-0.04em] text-white">
              Value per connected truth,{" "}
              <span className="text-primary">not seat sprawl.</span>
            </h2>
            <p className="mt-4 text-[15px] font-medium leading-[1.6] text-white/40">
              Plans scale with entity volume and connected tools. Start by wiring a few high-leverage systems into the Spine and expand coverage over time. The same Product stack stays consistent as you grow from a single team pilot to organization-wide rollout.
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <Link href="/pricing" className="inline-flex h-10 items-center rounded-full bg-primary px-5 text-[13px] font-semibold text-white hover:opacity-90 transition-opacity">
                View pricing →
              </Link>
              <Link href="/contact?intent=demo" className="inline-flex h-10 items-center rounded-full border border-white/15 px-5 text-[13px] font-semibold text-white/60 hover:border-white/30 hover:text-white transition-colors">
                Book a demo →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
