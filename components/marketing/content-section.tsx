"use client";

import { Section, SectionHeader } from "./section";
import { FeatureGrid } from "./feature-grid";
import type { ContentSectionCopy } from "@/lib/site-copy";

export function ContentSection({ section, index }: { section: ContentSectionCopy; index: number }) {
  const variant = index % 2 === 1 ? "muted" : "dark";

  return (
    <Section variant={variant}>
      <SectionHeader label={section.label} headline={section.headline} body={section.body} align={section.comparison ? "left" : "center"} />

      {section.items && section.items.length > 0 && (
        <div className="flex flex-wrap justify-center gap-3">
          {section.items.map((item) => (
            <span
              key={item}
              className="rounded-md border border-[#E5E5E5] bg-white px-3 py-1.5 text-[13px] font-medium text-[#032D60]"
            >
              {item}
            </span>
          ))}
        </div>
      )}

      {section.cards && <FeatureGrid cards={section.cards} columns={section.cards.length === 5 ? 3 : section.cards.length === 4 ? 2 : 3} />}

      {section.comparison && (
        <div className="grid gap-6 md:grid-cols-2">
          {[section.comparison.left, section.comparison.right].map((col) => (
            <div
              key={col.title}
              className="rounded-md border border-[#E5E5E5] bg-white p-6"
            >
              <h3 className="text-[18px] font-semibold text-[#032D60]">{col.title}</h3>
              <ul className="mt-5 space-y-3">
                {col.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[14px] text-[#444]">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </Section>
  );
}
