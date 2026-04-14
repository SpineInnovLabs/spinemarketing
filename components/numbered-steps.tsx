"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { type: "spring" as const, damping: 18, stiffness: 70, delay },
});

type Step = {
  num: string;
  title: string;
  desc: string;
};

const defaultSteps: Step[] = [
  { num: "01", title: "Connect your tools", desc: "Link SaaS, webhooks, and MCP sources in minutes. No custom code required." },
  { num: "02", title: "Spine normalizes everything", desc: "Raw data flows through 8-stage normalization into canonical Entity 360 records." },
  { num: "03", title: "Twin surfaces signals", desc: "The Intelligence Layer detects patterns and proposes actions with evidence." },
  { num: "04", title: "You approve and execute", desc: "Review AI suggestions in the approval queue. Edit, approve, or reject with full audit trail." },
];

export function NumberedSteps({
  tag = "How it Works",
  heading,
  steps = defaultSteps,
}: {
  tag?: string;
  heading?: string;
  steps?: Step[];
}) {
  const [active, setActive] = useState(0);

  return (
    <section className="arvio-section dark-section">
      <div className="mx-auto max-w-[1100px]">
        <motion.div {...fade(0)} className="mx-auto max-w-2xl text-center mb-12">
          <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-primary mb-3">{tag}</p>
          <h2 className="section-heading">
            {heading || <>Turn complexity into <span className="text-primary">simple steps.</span></>}
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {steps.map((s, i) => (
            <button
              key={s.num}
              onClick={() => setActive(i)}
              className={`flex items-center gap-2.5 rounded-full px-5 py-2.5 text-[13px] font-semibold transition-all ${
                active === i
                  ? "bg-primary text-white shadow-lg shadow-primary/20"
                  : "border border-white/10 bg-white/5 text-white/50 hover:border-white/20 hover:text-white/70"
              }`}
            >
              <span className={`flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold ${
                active === i ? "bg-white/20 text-white" : "bg-white/10 text-white/40"
              }`}>
                {s.num}
              </span>
              {s.title}
            </button>
          ))}
        </div>

        <motion.div
          key={active}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="mx-auto max-w-[680px]"
        >
          <div className="rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-10 text-center">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15 text-xl font-bold text-primary">
              {steps[active].num}
            </div>
            <h3 className="text-[22px] font-semibold tracking-[-0.04em] text-white mb-3">
              {steps[active].title}
            </h3>
            <p className="text-[15px] font-medium leading-[1.6] text-white/50">
              {steps[active].desc}
            </p>
          </div>
        </motion.div>

        <div className="mt-10 grid gap-3 sm:grid-cols-4">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              {...fade(i * 0.06)}
              onClick={() => setActive(i)}
              className={`cursor-pointer rounded-xl border p-5 transition-all ${
                active === i
                  ? "border-primary/30 bg-primary/[0.06]"
                  : "border-white/[0.06] bg-white/[0.02] hover:border-white/[0.12]"
              }`}
            >
              <div className={`text-[11px] font-bold uppercase tracking-[0.1em] mb-2 ${
                active === i ? "text-primary" : "text-white/30"
              }`}>
                Step {s.num}
              </div>
              <h4 className={`text-[14px] font-semibold tracking-[-0.02em] ${
                active === i ? "text-white" : "text-white/60"
              }`}>
                {s.title}
              </h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
