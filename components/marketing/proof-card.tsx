"use client";

import { motion } from "framer-motion";
import type { ProofCardCopy } from "@/lib/site-copy";

export function ProofCard({ card, index }: { card: ProofCardCopy; index: number }) {
  return (
    <motion.div
      initial={{ y: 16 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ type: "spring", damping: 20, stiffness: 60, delay: index * 0.06 }}
      className="rounded-2xl border border-[#D9E4EF] bg-white p-6"
    >
      <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-[#526479]">Demonstration</p>
      {card.metric && (
        <div className="mb-3 mt-2 text-[28px] font-semibold tracking-[-0.04em] text-[#0176D3]">{card.metric}</div>
      )}
      <h3 className="mt-2 text-[17px] font-semibold tracking-[-0.03em] text-[#032D60]">{card.title}</h3>
      <p className="mt-2 text-[14px] font-medium leading-[1.65] text-[#33465B]">{card.description}</p>
    </motion.div>
  );
}
