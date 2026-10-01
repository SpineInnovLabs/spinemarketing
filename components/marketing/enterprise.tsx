"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function KpiBlock({
  label,
  value,
  detail,
}: {
  label: string;
  value: string;
  detail: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ type: "spring", stiffness: 400, damping: 28 }}
      className="rounded-md border border-[#E5E5E5] bg-white px-4 py-3 shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-shadow duration-200 hover:shadow-[0_4px_12px_rgba(1,118,211,0.08)]"
    >
      <div className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#706E6B]">{label}</div>
      <div className="mt-1 text-[22px] font-semibold tracking-[-0.03em] text-[#032D60]">{value}</div>
      <div className="mt-1 text-[13px] leading-snug text-[#444]">{detail}</div>
    </motion.div>
  );
}

export function EvidencePanel({
  title,
  items,
}: {
  title: string;
  items: { label: string; value: string }[];
}) {
  return (
    <aside className="rounded-md border border-[#E5E5E5] bg-[#F3F6F9] p-4">
      <h3 className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#032D60]">{title}</h3>
      <dl className="mt-3 space-y-3">
        {items.map((item) => (
          <div key={item.label} className="border-b border-[#E5E5E5] pb-3 last:border-0 last:pb-0">
            <dt className="text-[12px] font-medium text-[#706E6B]">{item.label}</dt>
            <dd className="mt-0.5 text-[14px] font-medium text-[#181818]">{item.value}</dd>
          </div>
        ))}
      </dl>
    </aside>
  );
}

export function EnterpriseButton({
  href,
  children,
  variant = "primary",
  external,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  external?: boolean;
}) {
  const className =
    variant === "primary"
      ? "inline-flex h-10 items-center justify-center rounded-md bg-[#0176D3] px-4 text-[14px] font-semibold text-white hover:bg-[#0B5CAB]"
      : "inline-flex h-10 items-center justify-center rounded-md border border-[#C9C9C9] bg-white px-4 text-[14px] font-semibold text-[#032D60] hover:bg-[#F3F3F3]";

  if (external) {
    return (
      <a href={href} className={className} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
