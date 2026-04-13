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

export function DayOneSection() {
  return (
    <section className="arvio-section">
      <div className="mx-auto max-w-[1100px]">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            >
              <h2 className="section-heading-sm">
                What changes <span className="text-primary">on day one</span>
              </h2>
              <p className="mt-6 text-[17px] font-medium leading-[1.5] tracking-[-0.02em] text-muted-foreground">
                Value from day one. Not months.
              </p>
            </motion.div>
            <ul className="space-y-3">
              {outcomes.map((outcome, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    type: "spring",
                    bounce: 0.2,
                    duration: 0.6,
                    delay: i * 0.08,
                  }}
                  className="arvio-card flex items-start gap-3 p-4"
                >
                  <div
                    className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                    style={{ background: "var(--gradient-primary-icon)" }}
                  >
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-[15px] font-medium leading-[1.5] tracking-[-0.02em] text-foreground">
                    {outcome}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
