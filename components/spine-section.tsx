"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { DataFlowAnimation } from "@/components/data-flow-animation";

export function SpineSection() {
  return (
    <section id="spine-section" className="relative overflow-hidden py-40 md:py-52" style={{ background: "#05070A" }}>
      <div className="absolute inset-0 bg-grain" />
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[30%] h-[600px] w-[800px] -translate-x-1/2 rounded-full opacity-15 blur-[200px]" style={{ background: "radial-gradient(circle, rgba(255,178,44,0.25), transparent 60%)" }} />
      </div>

      <div className="relative mx-auto max-w-[1100px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", damping: 20, stiffness: 60 }}
          className="mx-auto max-w-2xl text-center"
        >
          <Badge variant="outline" className="mb-6 rounded-full border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary backdrop-blur-sm">
            The Spine
          </Badge>
          <h2 className="section-heading text-white">
            One layer{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-300 text-glow-emerald">connects everything.</span>
          </h2>
          <p className="mt-6 text-[17px] font-medium leading-relaxed text-white/35">
            Apps plug in. Data normalizes. Truth stays intact — even when tools change.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ type: "spring", damping: 20, stiffness: 50, delay: 0.15 }}
          className="mx-auto mt-20 md:mt-28 max-w-5xl"
        >
          <DataFlowAnimation />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", damping: 20, stiffness: 60, delay: 0.3 }}
          className="mx-auto mt-16 grid max-w-4xl gap-8 sm:grid-cols-3"
        >
          {[
            { title: "Apps flow in", desc: "OAuth connect. No code. No CSV exports." },
            { title: "Truth emerges", desc: "Duplicates merge. Conflicts resolve. One truth." },
            { title: "Tools can change", desc: "Swap any app. The Spine adapts automatically." },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", damping: 20, stiffness: 60, delay: 0.4 + i * 0.1 }}
              className="text-center"
            >
              <div className="text-[16px] font-semibold tracking-[-0.02em] text-white">{item.title}</div>
              <p className="mt-3 text-[14px] font-medium leading-relaxed text-white/35">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
