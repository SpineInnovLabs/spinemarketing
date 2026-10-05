"use client";

import { motion } from "framer-motion";
import { Zap, Shield, Brain } from "lucide-react";
import { PageHero } from "@/components/marketing/page-hero";

const heroFade = (delay = 0) => ({
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { type: "spring" as const, damping: 16, mass: 1, stiffness: 52, delay },
});

export function PricingHero() {
  return (
    <>
      <PageHero
        buyerPath="/pricing"
        badge="For renewal workflow sponsors"
        headline="Start with one governed renewal workflow."
        subhead="Pricing follows connectors and governance scope for renewals—not seat-based mystery. Most teams begin with a scoped pilot, then expand."
        primaryCta={{ label: "Book a workflow review", href: "/contact?intent=workflow-review" }}
        secondaryCta={{ label: "See a renewal decision packet", href: "/#renewal-decision-packet" }}
      />
      <section className="border-b border-[#E5E5E5] bg-white pb-16">
      <div className="relative mx-auto max-w-[900px] px-6">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            {...heroFade(0.1)}
            className="mb-6 inline-flex items-center gap-2 rounded-md border border-[#E5E5E5] bg-[#F3F6F9] px-3 py-1 text-[12px] font-semibold uppercase tracking-[0.06em] text-[#032D60]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#0176D3]" />
            Evaluation & pricing
          </motion.div>

          <motion.h1
            {...heroFade(0.2)}
            className="text-[40px] font-semibold leading-[1.1] tracking-[-0.03em] text-[#032D60] sm:text-[48px]"
          >
            Start with one governed workflow.{" "}
            <span className="text-[#0176D3]">Scale from there.</span>
          </motion.h1>
          <motion.p
            {...heroFade(0.35)}
            className="mx-auto mt-5 max-w-2xl text-[17px] leading-[1.6] text-[#444]"
          >
            Illustrative tiers below show how teams typically grow into SpineWorkspace. Commercial terms follow your integration scope and governance needs.
          </motion.p>

          <motion.div
            {...heroFade(0.5)}
            className="mt-10 flex flex-wrap items-center justify-center gap-3"
          >
            {[
              { icon: Zap, label: "See unified", tier: "Starter" },
              { icon: Brain, label: "AI suggests", tier: "Growth" },
              { icon: Shield, label: "Full governance", tier: "Command" },
            ].map((item, i) => (
              <div
                key={item.tier}
                className={`flex items-center gap-2.5 rounded-md border px-4 py-2.5 ${
                  i === 1
                    ? "border-[#0176D3]/30 bg-[#F3F6F9]"
                    : "border-[#E5E5E5] bg-white"
                }`}
              >
                <item.icon className={`h-4 w-4 ${i === 1 ? "text-[#0176D3]" : "text-[#706E6B]"}`} />
                <div className="text-left">
                  <div className="text-[12px] font-bold text-[#032D60]">{item.tier}</div>
                  <div className="text-[10px] text-[#706E6B]">{item.label}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
    </>
  );
}
