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
      initial={{ y: 16 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ type: "spring", damping: 20, stiffness: 60, delay: index * 0.06 }}
    >
      <Link
        href={href}
        className="group flex h-full flex-col rounded-2xl border border-[#D9E4EF] bg-white p-6 transition-colors hover:border-[#0176D3] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0176D3]/40"
      >
        <h3 className="text-[20px] font-semibold tracking-[-0.03em] text-[#032D60]">
          {title}
        </h3>
        <p className="mt-2 flex-1 text-[14px] font-medium leading-[1.65] text-[#33465B]">{description}</p>
        <span className="mt-4 inline-flex items-center gap-1 text-[13px] font-semibold text-[#0176D3]">
          Explore <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
        </span>
      </Link>
    </motion.div>
  );
}
