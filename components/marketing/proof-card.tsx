"use client";

import type { ProofCardCopy } from "@/lib/site-copy";
import { MagicCard } from "@/components/ui/magic-card";
import { BlurFade } from "@/components/ui/blur-fade";

export function ProofCard({ card, index }: { card: ProofCardCopy; index: number }) {
  return (
    <BlurFade delay={index * 0.05} inView className="h-full">
      <MagicCard className="h-full" innerClassName="p-6">
        <p className="inline-flex w-fit items-center rounded-full border border-[#D5E5F5] bg-[#F4F9FE] px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-[0.08em] text-[#006FE8]">
          Demonstration
        </p>
        {card.metric && (
          <div className="mb-2 mt-3 text-[length:min(28px,var(--marketing-heading-size))] font-bold tracking-[-0.04em] text-[#006FE8]">
            {card.metric}
          </div>
        )}
        <h3 className="mt-2 text-[17px] font-semibold tracking-[-0.03em] text-[#032D60]">
          {card.title}
        </h3>
        <p className="mt-2 text-[14px] font-medium leading-[1.65] text-[#33465B]">
          {card.description}
        </p>
      </MagicCard>
    </BlurFade>
  );
}
