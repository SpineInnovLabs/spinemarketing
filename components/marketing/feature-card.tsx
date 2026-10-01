"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function FeatureCard({
  title,
  description,
  href,
  index = 0,
}: {
  title: string;
  description: string;
  href?: string;
  index?: number;
}) {
  const inner = (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ type: "spring", damping: 20, stiffness: 60, delay: index * 0.06 }}
      className={`group rounded-md border border-[#E5E5E5] bg-white p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] ${
        href ? "hover:border-[#0176D3]" : ""
      }`}
    >
      <h3 className="text-[16px] font-semibold text-[#032D60]">{title}</h3>
      <p className="mt-2 text-[14px] leading-[1.6] text-[#444]">{description}</p>
      {href && (
        <span className="mt-4 inline-flex items-center gap-1 text-[13px] font-semibold text-primary opacity-0 transition-opacity group-hover:opacity-100">
          Learn more <ArrowRight className="h-3.5 w-3.5" />
        </span>
      )}
    </motion.div>
  );

  if (href) {
    return (
      <Link href={href} className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded-2xl">
        {inner}
      </Link>
    );
  }

  return inner;
}
