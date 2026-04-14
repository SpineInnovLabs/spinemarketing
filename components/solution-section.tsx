"use client";

import { Database, Brain, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { DashboardMockup } from "@/components/dashboard-mockup";

const pillars = [
  {
    num: "01",
    icon: Database,
    title: "Unifies",
    description:
      "One truth from many sources, so you stop reconciling.",
  },
  {
    num: "02",
    icon: Brain,
    title: "Adapts",
    description:
      "Survives tool changes, so your history never resets.",
  },
  {
    num: "03",
    icon: ShieldCheck,
    title: "Remembers",
    description:
      "Compounds knowledge daily, so tomorrow starts smarter than today.",
  },
];

export function SolutionSection() {
  return (
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
            The Spine{" "}
            <span className="text-primary">connects.</span>
          </h2>
          <p className="mt-6 text-[17px] font-medium leading-[1.5] tracking-[-0.02em] text-muted-foreground">
            Manage accounts, track tasks, run workflows. The Twin watches
            everything and proposes what&apos;s next.
          </p>
        </motion.div>

        {/* Dashboard Mockup — L1 workspace + L2 intelligence drawer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            type: "spring",
            bounce: 0.2,
            duration: 0.8,
            delay: 0.15,
          }}
          className="mx-auto mt-12 max-w-[900px]"
        >
          <DashboardMockup />
        </motion.div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-6 sm:grid-cols-3">
          {pillars.map(({ num, icon: Icon, title, description }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                type: "spring",
                bounce: 0.2,
                duration: 0.6,
                delay: i * 0.1,
              }}
              className="arvio-card flex flex-col items-start p-8"
            >
              <div className="flex items-center gap-3">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-lg"
                  style={{ background: "var(--gradient-primary-icon)" }}
                >
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <span className="text-[12px] font-bold uppercase tracking-[0.15em] text-primary">
                  {num}
                </span>
              </div>
              <h3 className="mt-5 text-[18px] font-semibold tracking-[-0.03em] leading-[1.3]">
                {title}
              </h3>
              <p className="mt-3 text-[15px] font-medium leading-[1.5] tracking-[-0.02em] text-muted-foreground">
                {description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Equation */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            bounce: 0.2,
            duration: 0.6,
            delay: 0.3,
          }}
          className="mx-auto mt-10 max-w-2xl text-center"
        >
          <p className="text-[15px] font-semibold tracking-[-0.02em] text-foreground">
            One nervous system.{" "}
            <span className="text-primary">Every tool connected. Every action approved.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
