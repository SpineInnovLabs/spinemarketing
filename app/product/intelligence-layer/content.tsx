"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Brain, Database, Zap, ArrowRight } from "lucide-react";

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

export function IntelligenceLayerContent() {
  return (
    <>
      <section
        className="relative overflow-hidden pb-28 pt-40 bg-dark-section"
      >
        <div className="mx-auto max-w-[820px] px-4 text-center">
          <motion.div
            {...heroFade(0.1)}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[13px] font-semibold text-white/60"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Product · Intelligence Layer
          </motion.div>
          <motion.h1
            {...heroFade(0.22)}
            className="text-[44px] font-semibold leading-[1.08] tracking-[-0.05em] text-white sm:text-[64px]"
          >
            Layer 2: The{" "}
            <span className="text-primary">Cognitive Overlay</span>
          </motion.h1>
          <motion.p
            {...heroFade(0.38)}
            className="mx-auto mt-7 max-w-xl text-[17px] font-medium leading-[1.55] tracking-[-0.02em] text-white/50"
          >
            Non-intrusive augmentation that manages organizational memory and
            surfaces proposed actions — without replacing human agency.
            The Digital Twin monitors continuously. You decide what executes.
          </motion.p>
          <motion.div {...heroFade(0.5)} className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Link href="/contact?intent=demo" className="inline-flex h-11 items-center rounded-full bg-primary px-6 text-[14px] font-semibold tracking-[-0.02em] text-white transition-opacity hover:opacity-90">
              See the Twin in action →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Digital Twin */}
      <section className="arvio-section dark-section">
        <div className="mx-auto max-w-[1100px]">
          <motion.div {...fade(0)} className="mx-auto max-w-2xl text-center mb-12">
            <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-primary mb-3">The Digital Twin</p>
            <h2 className="section-heading">Your AI counterpart, <span className="text-primary">always in context</span></h2>
            <p className="mt-4 text-[16px] font-medium leading-[1.55] text-muted-foreground">
              A virtual state-machine mirroring your Entity 360 data model. Represents your entire work context across all connected tools, synchronized in real-time with Workbench activity.
            </p>
          </motion.div>
          <div className="grid gap-5 sm:grid-cols-3 max-w-3xl mx-auto">
            {[
              { icon: Brain, title: "Proactive Signals", desc: "Real-time alerts when Twin Trigger Scoring thresholds are met. Not reactive search — the Twin surfaces what matters before you ask." },
              { icon: Zap, title: "Proposed Actions", desc: "Drafted emails, field updates, and escalations queued for your approval. AI writes the action. You decide if it executes." },
              { icon: Database, title: "Session Continuity", desc: "Context persists across sessions. The Twin remembers prior interactions without retraining latency — growing sharper with every approved action." },
            ].map(({ icon: Icon, title, desc }, i) => (
              <motion.div key={title} {...fade(i * 0.07)} className="arvio-card p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl" style={{ background: "var(--gradient-primary-icon)" }}>
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-[15px] font-semibold tracking-[-0.03em] text-foreground mb-2">{title}</h3>
                <p className="text-[13px] font-medium leading-[1.65] text-muted-foreground">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Knowledge Memory */}
      <section className="arvio-section dark-section">
        <div className="mx-auto max-w-[1100px]">
          <motion.div {...fade(0)} className="mx-auto max-w-2xl text-center mb-12">
            <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-primary mb-3">Knowledge Memory</p>
            <h2 className="section-heading">Intelligence that <span className="text-primary">compounds daily</span></h2>
          </motion.div>
          <div className="grid gap-5 sm:grid-cols-2 max-w-2xl mx-auto">
            {[
              { title: "Zero-Shot Context", desc: "Persistent intelligence growing daily without model retraining. The system maintains evolving organizational truth incrementally — not limited to what was in the training cut." },
              { title: "No-Retraining Advantage", desc: "Unlike standard LLMs with stale context windows, Knowledge Memory remembers evolving organizational truth in real time. Every approved session enriches future reasoning." },
              { title: "Accumulated Intelligence", desc: "A repository refining over time, not resetting between sessions. Cross-account patterns emerge as the Twin accumulates approved actions across your entire book of business." },
              { title: "Entity 360 Representation", desc: "Unified data object showing client, project, and process state across all tools — the live canvas the Twin reasons on and proposes actions against." },
            ].map(({ title, desc }, i) => (
              <motion.div key={title} {...fade(i * 0.07)} className="arvio-card p-6">
                <h3 className="text-[15px] font-semibold tracking-[-0.03em] text-foreground mb-2">{title}</h3>
                <p className="text-[13px] font-medium leading-[1.65] text-muted-foreground">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Twin Trigger Scoring */}
      <section className="arvio-section dark-section bg-dark-section">
        <div className="mx-auto max-w-[1100px]">
          <motion.div {...fade(0)} className="mx-auto max-w-2xl text-center">
            <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-primary mb-3">Twin Trigger Scoring</p>
            <h2 className="text-[36px] font-semibold leading-[1.12] tracking-[-0.05em] text-white sm:text-[44px]">
              Signals surface when <span className="text-primary">they matter</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-[15px] font-medium leading-[1.6] text-white/45">
              Visual threshold indicators showing when data changes reach significance to propose a Proposed Action. Not a notification feed — a scoring system that ensures only high-confidence, multi-signal patterns reach your approval queue.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link href="/product/truth-boundary" className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-primary hover:opacity-80">
                How approval works <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
