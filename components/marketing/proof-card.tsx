"use client";

import { motion } from "framer-motion";
import type { ProofCardCopy } from "@/lib/site-copy";

export function ProofCard({ card, index }: { card: ProofCardCopy; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ type: "spring", damping: 20, stiffness: 60, delay: index * 0.06 }}
      className="rounded-2xl border border-white/[0.08] p-6"
      style={{ background: "rgba(255,255,255,0.02)" }}
    >
      {card.metric && (
        <div className="mb-3 text-[28px] font-semibold tracking-[-0.04em] text-primary">{card.metric}</div>
      )}
      <h3 className="text-[17px] font-semibold tracking-[-0.03em] text-white">{card.title}</h3>
      <p className="mt-2 text-[14px] font-medium leading-[1.65] text-white/40">{card.description}</p>
    </motion.div>
  );
}
