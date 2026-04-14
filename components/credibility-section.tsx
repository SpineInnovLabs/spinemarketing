"use client";

import { motion } from "framer-motion";
import { Globe, Shield, User } from "lucide-react";

const items = [
  { icon: Globe, label: "Cloudflare Workers", desc: "Edge-first. Sub-50ms globally." },
  { icon: Shield, label: "Enterprise-ready", desc: "SOC 2 Type II. GDPR compliant." },
  { icon: User, label: "Founder-led", desc: "Every customer has a direct line." },
];

export function CredibilitySection() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32" style={{ background: "#05070A" }}>
      <div className="absolute inset-0 bg-grain" />
      <div className="relative mx-auto max-w-[1100px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ type: "spring", damping: 20, stiffness: 60 }}
          className="mx-auto max-w-4xl"
        >
          <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 md:p-12">
            <div className="grid gap-8 sm:grid-cols-3">
              {items.map(({ icon: Icon, label, desc }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", damping: 20, stiffness: 60, delay: i * 0.1 }}
                  className="text-center"
                >
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/[0.04] border border-white/[0.08]">
                    <Icon className="h-5 w-5 text-white/40" />
                  </div>
                  <p className="text-[15px] font-semibold text-white/70">{label}</p>
                  <p className="mt-1 text-[13px] font-medium text-white/30">{desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
