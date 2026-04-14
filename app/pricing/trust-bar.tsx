"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Lock, Eye, Zap } from "lucide-react";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { type: "spring" as const, damping: 18, stiffness: 70, delay },
});

export function PricingTrustBar() {
  return (
    <section className="relative overflow-hidden bg-dark-section py-20 px-6">
      <div className="mx-auto max-w-[1100px]">
        <motion.div {...fade(0)} className="mx-auto max-w-lg text-center mb-12">
          <h2 className="text-[28px] font-semibold tracking-[-0.04em] text-white">
            Every plan includes{" "}
            <span className="text-primary">governance by design.</span>
          </h2>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: ShieldCheck, label: "SOC 2 Type II", desc: "Enterprise-grade compliance" },
            { icon: Lock, label: "AES-256 encryption", desc: "Data encrypted at rest" },
            { icon: Eye, label: "Full audit trail", desc: "Every action logged" },
            { icon: Zap, label: "Sub-100ms sync", desc: "Real-time data flow" },
          ].map(({ icon: Icon, label, desc }, i) => (
            <motion.div
              key={label}
              {...fade(i * 0.06)}
              className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 transition-all hover:border-white/[0.12]"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <Icon className="h-4 w-4 text-primary" />
              </div>
              <div>
                <div className="text-[13px] font-semibold text-white">{label}</div>
                <div className="text-[11px] text-white/35">{desc}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
