"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeader } from "./section";
import { AppLogo } from "./app-logo";

export function EcosystemGrid({
  label,
  headline,
  body,
  chips,
  cta,
}: {
  label: string;
  headline: string;
  body: string;
  chips: string[];
  cta?: { label: string; href: string };
}) {
  return (
    <Section variant="muted">
      <SectionHeader label={label} headline={headline} body={body} />
      <motion.div
        initial={{ y: 16 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        className="flex flex-wrap justify-center gap-3"
      >
        {chips.map((chip, i) => (
          <motion.span
            key={chip}
            initial={{ scale: 0.95 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.04, type: "spring", stiffness: 300, damping: 24 }}
            whileHover={{ y: -2 }}
            className="inline-flex items-center gap-2 rounded-md border border-[#E5E5E5] bg-white px-4 py-2.5 text-[13px] font-semibold text-[#032D60] shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
          >
            <AppLogo name={chip} size="sm" bare />
            {chip}
          </motion.span>
        ))}
      </motion.div>
      {cta && (
        <div className="mt-10 text-center">
          <Button
            variant="outline"
            className="h-10 rounded-md border-[#C9C9C9] bg-white px-5 text-[14px] font-semibold text-[#032D60] hover:bg-[#F3F3F3]"
            asChild
          >
            <Link href={cta.href}>
              {cta.label}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      )}
    </Section>
  );
}
