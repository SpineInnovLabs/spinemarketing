"use client";

import { Plug, Layers, Database } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const cards = [
  {
    icon: Plug,
    title: "Loader Service",
    description: "Connect any SaaS tool via OAuth or API key. Data flows in automatically — no CSV exports, no manual sync, no code.",
    detail: "70+ connectors available",
    color: { text: "#ffb22c", bg: "rgba(255,178,44,0.06)", border: "rgba(52,211,153,0.10)", glow: "rgba(255,178,44,0.15)" },
  },
  {
    icon: Layers,
    title: "Adapter Pattern",
    description: "Every tool speaks a different language. The Adapter normalizes everything into one canonical schema — your single source of truth.",
    detail: "Schema-aware transformation",
    color: { text: "#8b5cf6", bg: "rgba(139,92,246,0.06)", border: "rgba(139,92,246,0.10)", glow: "rgba(139,92,246,0.15)" },
  },
  {
    icon: Database,
    title: "Schema Registry",
    description: "Tracks every data shape from every connector. Detects drift, resolves conflicts, and keeps your truth layer clean — automatically.",
    detail: "Auto-healing data contracts",
    color: { text: "#3b82f6", bg: "rgba(59,130,246,0.06)", border: "rgba(59,130,246,0.10)", glow: "rgba(59,130,246,0.15)" },
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { type: "spring", damping: 20, stiffness: 60 } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

export function IntegrationArchSection() {
  return (
    <section className="relative overflow-hidden py-40 md:py-52" style={{ background: "#05070A" }}>
      <div className="absolute inset-0 bg-grain" />
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[15%] top-[30%] h-[500px] w-[500px] rounded-full opacity-10 blur-[180px]" style={{ background: "radial-gradient(circle, rgba(255,178,44,0.2), transparent 70%)" }} />
        <div className="absolute right-[15%] bottom-[20%] h-[400px] w-[400px] rounded-full opacity-10 blur-[150px]" style={{ background: "radial-gradient(circle, rgba(139,92,246,0.15), transparent 70%)" }} />
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
            Integration Architecture
          </Badge>
          <h2 className="section-heading text-white">
            Built to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffb22c] to-[#FFE1CC]">
              absorb any tool.
            </span>
          </h2>
          <p className="mt-6 text-[17px] font-medium leading-relaxed text-white/35">
            Three services work together to make every connector a first-class citizen.
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mx-auto mt-20 md:mt-28 grid gap-6 sm:grid-cols-3 max-w-5xl"
        >
          {cards.map(({ icon: Icon, title, description, detail, color }) => (
            <motion.div key={title} variants={fadeUp}>
              <div className="glass-card group h-full p-7 md:p-8" style={{ borderColor: color.border }}>
                <div
                  className="pointer-events-none absolute -top-12 -right-12 h-32 w-32 rounded-full opacity-0 blur-[60px] transition-opacity duration-700 group-hover:opacity-100"
                  style={{ background: color.glow }}
                />
                <div className="relative">
                  <div
                    className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl"
                    style={{
                      background: color.bg,
                      border: `1px solid ${color.border}`,
                      boxShadow: `0 0 20px ${color.glow}`,
                    }}
                  >
                    <Icon className="h-5 w-5" style={{ color: color.text }} />
                  </div>

                  <h3 className="text-[18px] font-semibold tracking-[-0.02em] text-white mb-3">
                    {title}
                  </h3>

                  <p className="text-[14px] font-medium leading-[1.7] text-white/40 mb-5">
                    {description}
                  </p>

                  <div
                    className="inline-flex items-center rounded-full px-3 py-1.5 text-[11px] font-semibold"
                    style={{ background: color.bg, color: color.text, border: `1px solid ${color.border}` }}
                  >
                    {detail}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
