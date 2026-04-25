"use client";

import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
    <section className="relative overflow-hidden bg-dark-section py-32 md:py-40">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-[15%] top-[25%] h-[400px] w-[500px] rounded-full opacity-15 blur-[120px]" style={{ background: "radial-gradient(circle, rgba(255,178,44,0.25), transparent 70%)" }} />
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
              <Badge variant="outline" className="mb-4 rounded-full border-primary/30 px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary">
                Day one value
              </Badge>
              <h2 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
                What changes <span className="text-primary">on day one</span>
              </h2>
              <p className="mt-6 text-base font-medium leading-relaxed text-white/45">
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
                <motion.li key={i} variants={fadeRight}>
                  <Card className="flex items-start gap-4 border-border bg-white/[0.03] p-5 transition-colors hover:border-primary/20">
                    <CardContent className="flex items-start gap-4 p-0">
                      <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/15">
                        <Check className="h-3.5 w-3.5 text-primary" />
                      </div>
                      <span className="text-sm font-medium leading-relaxed text-white/60">
                        {outcome}
                      </span>
                    </CardContent>
                  </Card>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </div>
    </section>
  );
}
