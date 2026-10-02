"use client";

import { motion } from "framer-motion";
import { Zap, Shield, Clock, type LucideIcon } from "lucide-react";

type Badge = {
  icon: LucideIcon;
  label: string;
  sublabel: string;
};

const defaultBadges: Badge[] = [
  { icon: Zap, label: "Built for Speed", sublabel: "Continuous sync" },
  { icon: Shield, label: "Enterprise Governed", sublabel: "Every action audited" },
  { icon: Clock, label: "Zero Retraining", sublabel: "Operates immediately" },
];

export function HeroBadges({
  badges = defaultBadges,
}: {
  badges?: Badge[];
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.5 }}
      className="mt-10 flex flex-wrap justify-center gap-4"
    >
      {badges.map((b) => (
        <div
          key={b.label}
          className="flex items-center gap-3 rounded-full border border-white/[0.08] bg-white/[0.04] px-5 py-2.5"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/15">
            <b.icon className="h-4 w-4 text-primary" />
          </div>
          <div>
            <p className="text-[13px] font-semibold text-white leading-tight">{b.label}</p>
            <p className="text-[11px] font-medium text-white/40">{b.sublabel}</p>
          </div>
        </div>
      ))}
    </motion.div>
  );
}
