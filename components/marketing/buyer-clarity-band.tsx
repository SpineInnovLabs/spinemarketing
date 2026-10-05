"use client"

import type { BuyerLens } from "@/lib/buyer-clarity"

export function BuyerClarityBand({ lens }: { lens: BuyerLens }) {
  const items = [
    { label: "Built for", value: lens.audience },
    { label: "Pain removed", value: lens.pain },
    { label: "First workflow", value: lens.firstWorkflow },
    { label: "Your stack", value: lens.stack },
    { label: "Control", value: lens.control },
  ]

  return (
    <section className="border-b border-[#D9E4EF] bg-[#F3F6F9]" aria-label="Buyer clarity">
      <div className="mx-auto max-w-[1280px] px-5 py-8 sm:px-8 lg:px-12">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {items.map(({ label, value }) => (
            <li key={label} className="min-w-0">
              <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-[#526479]">{label}</p>
              <p className="mt-1.5 text-[13px] font-semibold leading-snug text-[#032D60]">{value}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
