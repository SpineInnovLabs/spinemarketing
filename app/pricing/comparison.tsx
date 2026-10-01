"use client";

import { motion } from "framer-motion";
import { Check, X, Minus } from "lucide-react";
import Link from "next/link";

const planFeatures = [
  {
    category: "Core Platform",
    features: [
      { name: "Spine Fabric data unification", starter: true, growth: true, command: true },
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
    category: "Twin",
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
      { name: "Governance", starter: false, growth: true, command: true },
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
      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#0176D3]/10">
        <Check className="h-3 w-3 text-[#0176D3]" />
      </div>
    );
  }
  if (value === false) {
    return (
      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#F3F6F9]">
        <X className="h-3 w-3 text-[#C9C9C9]" />
      </div>
    );
  }
  return (
    <span className="text-[12px] font-semibold text-[#444]">{value}</span>
  );
}

export function PricingComparison() {
  return (
    <section className="relative overflow-hidden border-t border-[#E5E5E5] bg-white py-20 md:py-28">
      <div className="relative mx-auto max-w-[1000px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ type: "spring", damping: 18, stiffness: 70 }}
          className="mx-auto mb-12 max-w-2xl text-center"
        >
          <p className="mb-3 text-[12px] font-bold uppercase tracking-[0.08em] text-[#0176D3]">
            Compare Plans
          </p>
          <h2 className="text-[32px] font-semibold leading-[1.15] tracking-[-0.03em] text-[#032D60] sm:text-[40px]">
            See how each plan stacks up.
          </h2>
          <p className="mt-4 text-[15px] leading-[1.6] text-[#444]">
            Compare features side by side to find the right fit.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ type: "spring", damping: 18, stiffness: 70, delay: 0.1 }}
          className="overflow-hidden rounded-md border border-[#E5E5E5] bg-white shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
        >
          <div className="grid grid-cols-[1fr_90px_90px_90px] items-center border-b border-[#E5E5E5] bg-[#F3F6F9] px-5 py-4">
            <span className="text-[13px] font-bold text-[#706E6B]" />
            <span className="text-center text-[12px] font-bold text-[#444]">Starter</span>
            <span className="text-center text-[12px] font-bold text-[#0176D3]">Growth</span>
            <span className="text-center text-[12px] font-bold text-[#444]">Command</span>
          </div>

          {planFeatures.map((category) => (
            <div key={category.category}>
              <div className="border-b border-[#E5E5E5] bg-[#F3F6F9] px-5 py-3">
                <span className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#032D60]">
                  {category.category}
                </span>
              </div>
              {category.features.map((feature, fi) => (
                <div
                  key={feature.name}
                  className={`grid grid-cols-[1fr_90px_90px_90px] items-center px-5 py-3 ${
                    fi % 2 === 0 ? "bg-white" : "bg-[#FAFBFC]"
                  } border-b border-[#E5E5E5]`}
                >
                  <span className="text-[13px] font-medium text-[#444] pr-4">{feature.name}</span>
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
          className="mt-10 rounded-md border border-[#E5E5E5] bg-[#F3F6F9] p-6 text-center"
        >
          <h3 className="text-[18px] font-semibold text-[#032D60]">Still deciding?</h3>
          <p className="mt-2 text-[14px] text-[#444]">
            Book a demo and we&apos;ll help you find the right tier.
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact?intent=demo"
              className="inline-flex h-10 items-center rounded-md bg-[#0176D3] px-5 text-[13px] font-semibold text-white transition-colors hover:bg-[#0B5CAB]"
            >
              Book a demo
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
