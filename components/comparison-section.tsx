"use client";

import { motion } from "framer-motion";
import { Check, X, Minus } from "lucide-react";

type ComparisonRow = {
  feature: string;
  us: boolean | string;
  others: boolean | string;
};

const defaultRows: ComparisonRow[] = [
  { feature: "Unified data spine across all tools", us: true, others: false },
  { feature: "Human approval on every AI action", us: true, others: false },
  { feature: "Evidence chains on every insight", us: true, others: false },
  { feature: "Three data flows (Truth, Context, Sessions)", us: true, others: false },
  { feature: "AI session summaries linked to entities", us: true, others: false },
  { feature: "Immutable audit trail", us: true, others: "Partial" },
  { feature: "Knowledge compounds over time", us: true, others: false },
  { feature: "Works with your existing stack", us: true, others: true },
  { feature: "Enterprise governance (SOC 2, AES-256)", us: true, others: "Varies" },
  { feature: "No-code connector setup", us: true, others: true },
];

function CellValue({ value }: { value: boolean | string }) {
  if (value === true) {
    return (
      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/20">
        <Check className="h-3.5 w-3.5 text-primary" />
      </div>
    );
  }
  if (value === false) {
    return (
      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/[0.06]">
        <X className="h-3.5 w-3.5 text-white/25" />
      </div>
    );
  }
  return (
    <div className="flex h-6 items-center">
      <Minus className="mr-1 h-3 w-3 text-amber-400/60" />
      <span className="text-[12px] font-semibold text-amber-400/80">{value}</span>
    </div>
  );
}

export function ComparisonSection({
  rows = defaultRows,
  heading = "The better way to work.",
  subheading = "See how IntegrateWise compares to stitching tools together.",
}: {
  rows?: ComparisonRow[];
  heading?: string;
  subheading?: string;
}) {
  return (
    <section className="relative overflow-hidden py-32 md:py-40" style={{ background: "#05070A" }}>
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute left-1/2 top-[10%] h-[500px] w-[600px] -translate-x-1/2 rounded-full opacity-[0.06] blur-[140px]"
          style={{ background: "radial-gradient(circle, rgba(255,178,44,0.4), transparent 70%)" }}
        />
      </div>
      <div className="relative mx-auto max-w-[900px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ type: "spring", damping: 18, stiffness: 70 }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <p className="mb-4 text-[12px] font-bold uppercase tracking-[0.14em] text-primary">
            Why IntegrateWise
          </p>
          <h2 className="text-[40px] font-semibold leading-[1.1] tracking-[-0.04em] text-white sm:text-[52px]">
            {heading}
          </h2>
          <p className="mt-5 text-[16px] font-medium leading-[1.6] text-white/40">
            {subheading}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ type: "spring", damping: 18, stiffness: 70, delay: 0.1 }}
          className="overflow-hidden rounded-2xl border border-white/[0.06]"
          style={{
            background: "rgba(255,255,255,0.015)",
            backdropFilter: "blur(12px)",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)",
          }}
        >
          <div className="grid grid-cols-[1fr_auto_auto] items-center border-b border-white/[0.06] bg-white/[0.03] px-6 py-4">
            <span className="text-[13px] font-bold uppercase tracking-[0.1em] text-white/35">
              Feature
            </span>
            <span className="w-[100px] text-center text-[13px] font-bold text-primary">
              IntegrateWise
            </span>
            <span className="w-[100px] text-center text-[13px] font-bold text-white/35">
              Others
            </span>
          </div>

          {rows.map((row, i) => (
            <motion.div
              key={row.feature}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              className={`grid grid-cols-[1fr_auto_auto] items-center px-6 py-3.5 ${
                i % 2 === 0 ? "bg-white/[0.015]" : "bg-transparent"
              } ${i < rows.length - 1 ? "border-b border-white/[0.04]" : ""}`}
            >
              <span className="text-[14px] font-medium text-white/60 pr-4">
                {row.feature}
              </span>
              <div className="flex w-[100px] justify-center">
                <CellValue value={row.us} />
              </div>
              <div className="flex w-[100px] justify-center">
                <CellValue value={row.others} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
