"use client";

import { motion } from "framer-motion";
import { Check, X, Minus } from "lucide-react";
import Link from "next/link";

const planFeatures = [
  {
    category: "Core Platform",
    features: [
      { name: "Spine data unification", starter: true, growth: true, command: true },
      { name: "OAuth connectors", starter: "5", growth: "15", command: "Unlimited" },
      { name: "Entity 360 views", starter: true, growth: true, command: true },
      { name: "Truth + Context data flows", starter: true, growth: true, command: true },
      { name: "AI Session data flow", starter: false, growth: true, command: true },
    ],
  },
  {
    category: "Workspace",
    features: [
      { name: "Account management", starter: true, growth: true, command: true },
      { name: "Task queue & workflows", starter: true, growth: true, command: true },
      { name: "Calendar integration", starter: true, growth: true, command: true },
      { name: "Portfolio health views", starter: "Basic", growth: true, command: true },
    ],
  },
  {
    category: "Cognitive Layer",
    features: [
      { name: "Twin Chat", starter: false, growth: true, command: true },
      { name: "Morning Brief", starter: false, growth: true, command: true },
      { name: "Action proposals with evidence", starter: false, growth: true, command: true },
      { name: "Session summaries linked to entities", starter: false, growth: true, command: true },
      { name: "Confidence scores", starter: false, growth: true, command: true },
    ],
  },
  {
    category: "Governance",
    features: [
      { name: "Basic risk alerts", starter: true, growth: true, command: true },
      { name: "Approval Gate governance", starter: false, growth: true, command: true },
      { name: "Govern Gate (immutable log)", starter: false, growth: false, command: true },
      { name: "SSO & RBAC", starter: false, growth: false, command: true },
      { name: "Enterprise audit trail", starter: false, growth: false, command: true },
    ],
  },
  {
    category: "Support",
    features: [
      { name: "Email support", starter: true, growth: true, command: true },
      { name: "Priority support", starter: false, growth: true, command: true },
      { name: "Dedicated success team", starter: false, growth: false, command: true },
    ],
  },
];

function CellValue({ value }: { value: boolean | string }) {
  if (value === true) {
    return (
      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/20">
        <Check className="h-3 w-3 text-primary" />
      </div>
    );
  }
  if (value === false) {
    return (
      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-white/[0.06]">
        <X className="h-3 w-3 text-white/20" />
      </div>
    );
  }
  return (
    <span className="text-[12px] font-semibold text-white/60">{value}</span>
  );
}

export function PricingComparison() {
  return (
    <section className="relative overflow-hidden bg-dark-section py-28 md:py-36">
      <div className="relative mx-auto max-w-[1000px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ type: "spring", damping: 18, stiffness: 70 }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <p className="mb-3 text-[12px] font-bold uppercase tracking-[0.14em] text-primary">
            Compare Plans
          </p>
          <h2 className="text-[36px] font-semibold leading-[1.15] tracking-[-0.04em] text-white sm:text-[44px]">
            See how each plan stacks up.
          </h2>
          <p className="mt-4 text-[15px] font-medium leading-[1.6] text-white/45">
            Compare features side by side to find the right fit.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ type: "spring", damping: 18, stiffness: 70, delay: 0.1 }}
          className="overflow-hidden rounded-2xl border border-white/[0.08]"
        >
          <div className="grid grid-cols-[1fr_90px_90px_90px] items-center border-b border-white/[0.08] bg-white/[0.04] px-5 py-4">
            <span className="text-[13px] font-bold text-white/40" />
            <span className="text-center text-[12px] font-bold text-white/60">Starter</span>
            <span className="text-center text-[12px] font-bold text-primary">Growth</span>
            <span className="text-center text-[12px] font-bold text-white/60">Command</span>
          </div>

          {planFeatures.map((category) => (
            <div key={category.category}>
              <div className="border-b border-white/[0.06] bg-white/[0.03] px-5 py-3">
                <span className="text-[12px] font-bold uppercase tracking-[0.1em] text-primary/80">
                  {category.category}
                </span>
              </div>
              {category.features.map((feature, fi) => (
                <div
                  key={feature.name}
                  className={`grid grid-cols-[1fr_90px_90px_90px] items-center px-5 py-3 ${
                    fi % 2 === 0 ? "bg-white/[0.015]" : ""
                  } ${fi < category.features.length - 1 ? "border-b border-white/[0.03]" : "border-b border-white/[0.06]"}`}
                >
                  <span className="text-[13px] font-medium text-white/60 pr-4">{feature.name}</span>
                  <div className="flex justify-center"><CellValue value={feature.starter} /></div>
                  <div className="flex justify-center"><CellValue value={feature.growth} /></div>
                  <div className="flex justify-center"><CellValue value={feature.command} /></div>
                </div>
              ))}
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", damping: 18, stiffness: 70, delay: 0.2 }}
          className="mt-10 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 text-center"
        >
          <h3 className="text-[18px] font-semibold text-white">Still deciding?</h3>
          <p className="mt-2 text-[14px] font-medium text-white/45">
            Book a demo and we&apos;ll help you find the right tier.
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact?intent=demo"
              className="inline-flex h-10 items-center rounded-xl bg-primary px-5 text-[13px] font-semibold text-white transition-opacity hover:opacity-90"
            >
              Book a demo
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
