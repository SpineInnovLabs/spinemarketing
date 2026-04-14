"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { DataFlowAnimation } from "@/components/data-flow-animation";

export function SpineSection() {
  return (
    <section className="relative overflow-hidden bg-dark-section py-32 md:py-40">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[30%] h-[600px] w-[800px] -translate-x-1/2 rounded-full opacity-20 blur-[180px]" style={{ background: "radial-gradient(circle, rgba(27,167,132,0.30), transparent 60%)" }} />
      </div>

      <div className="relative mx-auto max-w-[1100px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", damping: 18, stiffness: 70 }}
          className="mx-auto max-w-2xl text-center"
        >
          <Badge variant="outline" className="mb-4 rounded-full border-primary/30 bg-primary/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary backdrop-blur-sm">
            The Spine
          </Badge>
          <h2 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
            One layer{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-300">connects everything.</span>
          </h2>
          <p className="mt-6 text-base font-medium leading-relaxed text-white/50">
            Every app you use plugs into the Spine. Data flows in, gets normalized into one common language, and comes out as a single, unified truth. No migration. No engineering team. The Spine adapts when your tools change — your truth stays intact.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ type: "spring", damping: 18, stiffness: 60, delay: 0.15 }}
          className="mx-auto mt-16 md:mt-20 max-w-5xl"
        >
          <DataFlowAnimation />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", damping: 18, stiffness: 70, delay: 0.3 }}
          className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-3"
        >
          {[
            {
              title: "Apps flow in",
              desc: "CRM, billing, support, chat, docs — all connected via OAuth. No code, no CSV exports.",
            },
            {
              title: "Truth emerges",
              desc: "The Spine normalizes records into one language. Duplicates merge. Conflicts resolve. One truth per entity.",
            },
            {
              title: "Tools can change",
              desc: "Switch from Salesforce to HubSpot? The Spine adapts. Your unified truth survives any migration.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", damping: 18, stiffness: 70, delay: 0.35 + i * 0.08 }}
              className="text-center"
            >
              <div className="text-[15px] font-semibold tracking-tight text-white">{item.title}</div>
              <p className="mt-2 text-sm font-medium leading-relaxed text-white/40">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
