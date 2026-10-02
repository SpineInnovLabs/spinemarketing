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
                initial={{ x: -12 }}
                whileInView={{ x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-start gap-4 rounded-xl border border-[#D9E4EF] bg-[#F3F6F9] p-4"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#EAF5FC] text-[13px] font-bold text-[#0176D3]">
                  {i + 1}
                </span>
                <span className="pt-1 text-[15px] font-medium leading-[1.6] text-[#33465B]">{step}</span>
              </motion.li>
            ))}
          </ol>
        </div>
      )}
    </Section>
  );
}
