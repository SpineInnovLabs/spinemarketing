"use client";

import { motion } from "framer-motion";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  variant?: "dark" | "muted";
};

export function Section({ children, className = "", id, variant = "dark" }: SectionProps) {
  const bg = variant === "muted" ? "#F3F6F9" : "#FFFFFF";

  return (
    <section id={id} className={`relative border-t border-[#E5E5E5] py-16 md:py-20 ${className}`} style={{ background: bg }}>
      <div className="relative mx-auto max-w-[1100px] px-6 md:px-10">{children}</div>
    </section>
  );
}

export function SectionHeader({
  label,
  headline,
  body,
  align = "center",
}: {
  label?: string;
  headline: string;
  body?: string;
  align?: "center" | "left";
}) {
  const alignClass = align === "center" ? "text-center mx-auto max-w-3xl" : "max-w-3xl";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ type: "spring", damping: 20, stiffness: 60 }}
      className={`mb-14 ${alignClass}`}
    >
      {label && (
        <div className="mb-3 text-[12px] font-bold uppercase tracking-[0.08em] text-[#0176D3]">{label}</div>
      )}
      <h2 className="text-[28px] font-semibold leading-[1.15] tracking-[-0.03em] text-[#032D60] sm:text-[34px]">
        {headline}
      </h2>
      {body && <p className="mt-4 text-[16px] leading-[1.65] text-[#444]">{body}</p>}
    </motion.div>
  );
}
