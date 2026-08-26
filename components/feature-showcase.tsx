"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

type ShowcaseItem = {
  tag: string;
  title: string;
  description: string;
  features: string[];
  cta?: { label: string; href: string };
  visual: "spine" | "workbench" | "intelligence" | "governance";
};

const visualMap: Record<string, { color: string; items: { label: string; value: string }[] }> = {
  spine: {
    color: "rgba(52,211,153,0.15)",
    items: [
      { label: "Truth Flow", value: "Canonical records" },
      { label: "Context Flow", value: "Signals & patterns" },
      { label: "Session Flow", value: "AI summaries" },
    ],
  },
  workbench: {
    color: "rgba(45,212,191,0.15)",
    items: [
      { label: "Accounts", value: "Entity 360 view" },
      { label: "Tasks", value: "Prioritized queue" },
      { label: "Workflows", value: "Automated actions" },
    ],
  },
  intelligence: {
    color: "rgba(139,92,246,0.15)",
    items: [
      { label: "Twin Chat", value: "Context-aware AI" },
      { label: "Morning Brief", value: "Daily intelligence" },
      { label: "Proposals", value: "Evidence-backed" },
    ],
  },
  governance: {
    color: "rgba(251,191,36,0.15)",
    items: [
      { label: "Audit Trail", value: "Immutable log" },
      { label: "Governance", value: "Human required" },
      { label: "Confidence", value: "Scored insights" },
    ],
  },
};

function VisualCard({ type }: { type: string }) {
  const v = visualMap[type] || visualMap.spine;
  return (
    <div
      className="relative overflow-hidden rounded-2xl border border-white/[0.06] p-6"
      style={{
        background: "rgba(255,255,255,0.015)",
        backdropFilter: "blur(12px)",
        boxShadow: `0 0 60px ${v.color}, inset 0 1px 0 rgba(255,255,255,0.04), inset 0 0 30px ${v.color.replace("0.15", "0.02")}`,
      }}
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:20px_20px]" />
      <div className="relative space-y-3">
        {v.items.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + i * 0.1, type: "spring", damping: 18 }}
            className="flex items-center justify-between rounded-xl border border-white/[0.06] bg-white/[0.03] px-4 py-3"
          >
            <div>
              <div className="text-[12px] font-bold text-white/50">{item.label}</div>
              <div className="text-[11px] text-white/25">{item.value}</div>
            </div>
            <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
          </motion.div>
        ))}
      </div>
      <motion.div
        className="absolute inset-x-0 bottom-0 h-[2px] rounded-full"
        style={{ background: `linear-gradient(90deg, transparent, ${v.color.replace("0.15", "0.6")}, transparent)` }}
        animate={{ opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

const defaultShowcases: ShowcaseItem[] = [
  {
    tag: "The Spine",
    title: "One source of truth for every tool.",
    description: "Connect your apps once. The Spine normalizes, deduplicates, and versions everything into three data flows.",
    features: [
      "Normalized canonical records",
      "Auto-detected behavioral signals",
      "AI sessions linked to entities",
    ],
    visual: "spine",
    cta: { label: "Explore the Spine", href: "/platform/the-adaptive-spine" },
  },
  {
    tag: "Workspace",
    title: "Where your team works every day.",
    description: "Accounts, tasks, workflows, and calendar — unified in one workspace powered by the Spine.",
    features: [
      "Entity 360 for every account",
      "AI-prioritized task queue",
      "Workflow automation engine",
    ],
    visual: "workbench",
    cta: { label: "See the Workspace", href: "/product/the-adaptive-workspace" },
  },
  {
    tag: "Twin",
    title: "AI that shows its work.",
    description: "The Twin analyzes patterns, proposes actions with evidence, and waits for your approval before anything executes.",
    features: [
      "Evidence chains on every insight",
      "Confidence scores for trust",
      "Session memory that compounds",
    ],
    visual: "intelligence",
    cta: { label: "Meet the Twin", href: "/product/how-it-works" },
  },
];

export function FeatureShowcase({
  showcases = defaultShowcases,
}: {
  showcases?: ShowcaseItem[];
}) {
  return (
    <>
      {showcases.map((item, i) => {
        const isReversed = i % 2 === 1;
        return (
          <section
            key={item.tag}
            className="relative overflow-hidden py-28 md:py-36"
            style={{ background: "#05070A" }}
          >
            <div className="relative mx-auto max-w-[1100px] px-6">
              <div className={`grid gap-12 lg:gap-16 lg:grid-cols-2 items-center ${isReversed ? "lg:[direction:rtl]" : ""}`}>
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ type: "spring", damping: 18, stiffness: 70 }}
                  className={isReversed ? "lg:[direction:ltr]" : ""}
                >
                  <p className="mb-3 text-[12px] font-bold uppercase tracking-[0.14em] text-primary">
                    {item.tag}
                  </p>
                  <h2 className="text-[36px] font-semibold leading-[1.1] tracking-[-0.04em] text-white sm:text-[48px]">
                    {item.title}
                  </h2>
                  <p className="mt-5 text-[16px] font-medium leading-[1.7] text-white/45">
                    {item.description}
                  </p>
                  <ul className="mt-7 space-y-3">
                    {item.features.map((f, fi) => (
                      <motion.li
                        key={fi}
                        initial={{ opacity: 0, x: -12 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + fi * 0.08 }}
                        className="flex items-center gap-3"
                      >
                        <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15">
                          <CheckCircle2 className="h-3 w-3 text-primary" />
                        </div>
                        <span className="text-[14px] font-medium text-white/55">{f}</span>
                      </motion.li>
                    ))}
                  </ul>
                  {item.cta && (
                    <Link
                      href={item.cta.href}
                      className="mt-8 inline-flex items-center gap-2 text-[14px] font-semibold text-primary transition-opacity hover:opacity-80"
                    >
                      {item.cta.label} →
                    </Link>
                  )}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ type: "spring", damping: 18, stiffness: 70, delay: 0.15 }}
                  className={isReversed ? "lg:[direction:ltr]" : ""}
                >
                  <VisualCard type={item.visual} />
                </motion.div>
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}
