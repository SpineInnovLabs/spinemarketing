"use client";

import { Section, SectionHeader } from "./section";
import { MagicCard } from "@/components/ui/magic-card";
import { BlurFade } from "@/components/ui/blur-fade";

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
        <div className="mx-auto max-w-3xl">
          <ol className="space-y-4">
            {steps.map((step, i) => (
              <BlurFade key={step} delay={i * 0.06} inView>
                <li>
                  <MagicCard innerClassName="flex-row items-start gap-4 p-4 sm:p-5">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-[#CCE3F5] bg-[#EAF5FC] font-mono text-[13px] font-bold text-[#006FE8]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="pt-1 text-[15px] font-medium leading-[1.65] text-[#33465B]">
                      {step}
                    </span>
                  </MagicCard>
                </li>
              </BlurFade>
            ))}
          </ol>
        </div>
      )}
    </Section>
  );
}
