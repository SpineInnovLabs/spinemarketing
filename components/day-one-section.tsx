"use client";

import { Check } from "lucide-react";
import { motion } from "framer-motion";

const outcomes = [
  "Your workspace arrives ready, not empty.",
  "You stop searching across apps for basic context.",
  "AI has your full picture before you ask.",
  "AI conversations become useful — linked to real data, not lost in chat.",
  "Risks surface before they become crises, with proof attached.",
  "Nothing happens without your approval — that's the architecture, not an add-on.",
];

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 24 },
  show: { opacity: 1, x: 0, transition: { type: "spring", damping: 18, stiffness: 70 } },
};

export function DayOneSection() {
  return (
    <section className="relative overflow-hidden py-32 md:py-40" style={{ backgroundColor: "rgb(8, 7, 14)" }}>
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-[15%] top-[25%] h-[400px] w-[500px] rounded-full opacity-15 blur-[120px]" style={{ background: "radial-gradient(circle, rgba(45,212,191,0.25), transparent 70%)" }} />
      </div>
      <div className="relative mx-auto max-w-[1100px] px-6">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ type: "spring", damping: 18, stiffness: 70 }}
            >
              <p className="mb-3 text-[12px] font-bold uppercase tracking-[0.14em] text-primary">Day one value</p>
              <h2 className="text-[36px] font-semibold leading-[1.15] tracking-[-0.04em] text-white sm:text-[44px]">
                What changes <span className="text-primary">on day one</span>
              </h2>
              <p className="mt-6 text-[16px] font-medium leading-[1.7] text-white/45">
                Value from day one. Not months.
              </p>
            </motion.div>
            <motion.ul
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              className="space-y-4"
            >
              {outcomes.map((outcome, i) => (
                <motion.li
                  key={i}
                  variants={fadeRight}
                  className="flex items-start gap-4 rounded-xl border border-white/[0.08] bg-white/[0.03] p-5 transition-colors hover:border-primary/20"
                >
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/15">
                    <Check className="h-3.5 w-3.5 text-primary" />
                  </div>
                  <span className="text-[15px] font-medium leading-[1.55] tracking-[-0.02em] text-white/60">
                    {outcome}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </div>
    </section>
  );
}
