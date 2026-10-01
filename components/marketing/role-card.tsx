"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function RoleCard({
  title,
  description,
  href,
  index = 0,
}: {
  title: string;
  description: string;
  href: string;
  index?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ type: "spring", damping: 20, stiffness: 60, delay: index * 0.06 }}
    >
      <Link
        href={href}
        className="group flex h-full flex-col rounded-2xl border border-white/[0.08] p-6 transition-colors hover:border-primary/25 hover:bg-white/[0.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
        style={{ background: "rgba(255,255,255,0.02)" }}
      >
        <h3 className="text-[20px] font-semibold tracking-[-0.03em] text-white group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="mt-2 flex-1 text-[14px] font-medium leading-[1.65] text-white/40">{description}</p>
        <span className="mt-4 inline-flex items-center gap-1 text-[13px] font-semibold text-primary">
          Explore <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
        </span>
      </Link>
    </motion.div>
  );
}
