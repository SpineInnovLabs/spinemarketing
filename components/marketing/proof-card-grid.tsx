"use client";

import { ProofCard } from "./proof-card";
import type { ProofCardCopy } from "@/lib/site-copy";

export function ProofCardGrid({ cards }: { cards: ProofCardCopy[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {cards.map((card, i) => (
        <ProofCard key={card.title} card={card} index={i} />
      ))}
    </div>
  );
}
