"use client";

import { motion } from "framer-motion";
import { Section, SectionHeader } from "./section";

export function ScenarioBlock({
  headline,
  body,
  steps,
}: {
  headline: string;
  body: string;
  steps?: string[];
}) {
  return (
    <Section>
      <SectionHeader headline={headline} body={body} />
      {steps && steps.length > 0 && (
        <div className="mx-auto max-w-2xl">
          <ol className="space-y-4">
            {steps.map((step, i) => (
              <motion.li
                key={step}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-start gap-4 rounded-xl border border-white/[0.08] bg-white/[0.02] p-4"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-[13px] font-bold text-primary">
                  {i + 1}
                </span>
                <span className="pt-1 text-[15px] font-medium leading-[1.6] text-white/70">{step}</span>
              </motion.li>
            ))}
          </ol>
        </div>
      )}
    </Section>
  );
}
