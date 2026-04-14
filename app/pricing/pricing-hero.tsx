"use client";

import { motion } from "framer-motion";
import { Zap, Shield, Brain } from "lucide-react";

const heroFade = (delay = 0) => ({
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { type: "spring" as const, damping: 16, mass: 1, stiffness: 52, delay },
});

export function PricingHero() {
  return (
    <section className="relative overflow-hidden bg-dark-section">
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute left-1/2 top-[15%] h-[500px] w-[600px] -translate-x-1/2 rounded-full opacity-15 blur-[120px]"
          style={{ background: "radial-gradient(circle, rgba(27,167,132,0.2), transparent 70%)" }}
        />
      </div>

      <div className="relative mx-auto max-w-[1200px] px-6 pt-40 pb-16 md:px-16">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            {...heroFade(0.1)}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[13px] font-semibold text-white/60"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Transparent Pricing
          </motion.div>

          <motion.h1
            {...heroFade(0.2)}
            className="text-[48px] font-semibold leading-[1.05] tracking-[-0.055em] text-white sm:text-[60px] lg:text-[68px]"
          >
            One Spine.{" "}
            <span className="text-primary">Two layers. Three tiers.</span>
          </motion.h1>
          <motion.p
            {...heroFade(0.35)}
            className="mx-auto mt-6 max-w-2xl text-[17px] font-medium leading-relaxed text-white/50"
          >
            Start with the Workbench — all your accounts in one view. Add the Intelligence Layer when you&apos;re ready.
          </motion.p>

          <motion.div
            {...heroFade(0.5)}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            {[
              { icon: Zap, label: "See unified", tier: "Starter" },
              { icon: Brain, label: "AI suggests", tier: "Growth" },
              { icon: Shield, label: "Full governance", tier: "Command" },
            ].map((item, i) => (
              <div
                key={item.tier}
                className={`flex items-center gap-2.5 rounded-xl px-4 py-2 ${
                  i === 1
                    ? "border border-primary/30 bg-primary/[0.08]"
                    : "border border-white/[0.08] bg-white/[0.03]"
                }`}
              >
                <item.icon className={`h-4 w-4 ${i === 1 ? "text-primary" : "text-white/40"}`} />
                <div className="text-left">
                  <div className="text-[12px] font-bold text-white">{item.tier}</div>
                  <div className="text-[10px] text-white/35">{item.label}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="section-divider" />
    </section>
  );
}
