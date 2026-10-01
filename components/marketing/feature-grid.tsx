"use client";

import { FeatureCard } from "./feature-card";

export function FeatureGrid({
  cards,
  columns = 3,
}: {
  cards: { title: string; description: string; href?: string }[];
  columns?: 2 | 3 | 4 | 5;
}) {
  const colClass =
    columns === 2
      ? "sm:grid-cols-2"
      : columns === 4
        ? "sm:grid-cols-2 lg:grid-cols-4"
        : columns === 5
          ? "sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
          : "sm:grid-cols-2 lg:grid-cols-3";

  return (
    <div className={`grid gap-4 ${colClass}`}>
      {cards.map((card, i) => (
        <FeatureCard key={card.title} {...card} index={i} />
      ))}
    </div>
  );
}
