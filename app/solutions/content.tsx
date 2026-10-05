"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { PUBLIC_SOLUTIONS, PLATFORM_SURFACES, marketingPathForSolution, workspaceUrl, getPrimaryWorkspaceHost } from "@/lib/solution-taxonomy";
import { PageHero } from "@/components/marketing/page-hero";
const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 16 } as const,
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true, margin: "-80px" },
  transition: { type: "spring" as const, damping: 18, stiffness: 70, delay },
});

export function SolutionsContent() {
  return (
    <>
      <PageHero
        buyerPath="/solutions"
        badge="Start with renewals"
        headline="Renewal workflows, connected."
        subhead="Most teams begin with the Renewal Decision Workspace for customer-success and RevOps. Each functional solution describes the operational job, the first workflow to deploy, and how it maps to authenticated workbenches."
        primaryCta={{ label: "See a renewal decision packet", href: "/#renewal-decision-packet" }}
        secondaryCta={{ label: "Book a workflow review", href: "/contact?intent=workflow-review" }}
      />

      <section className="bg-white pb-16">
        <div className="mx-auto max-w-[1100px] px-6">
          <motion.h2 {...fade(0)} className="mb-10 text-center text-[12px] font-bold uppercase tracking-[0.14em] text-primary">
            Functional solutions for renewals
          </motion.h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PUBLIC_SOLUTIONS.map((solution, i) => {
              const primary = getPrimaryWorkspaceHost(solution);
              return (
                <motion.div key={solution.id} {...fade(i * 0.04)}>
                  <div className="flex h-full flex-col rounded-md border border-[#E5E5E5] bg-white p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
                    <h3 className="text-[16px] font-semibold text-[#032D60]">{solution.name}</h3>
                    <p className="mt-2 flex-1 text-[14px] leading-[1.6] text-[#444]">{solution.description}</p>
                    <p className="mt-4 text-[12px] text-[#706E6B]">
                      Workbench: {primary.host}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-3">
                      <Link
                        href={marketingPathForSolution(solution.slug)}
                        className="inline-flex items-center gap-1 text-[13px] font-semibold text-primary hover:text-primary/80"
                      >
                        Learn more <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                      <a
                        href={workspaceUrl(primary.host)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[13px] font-medium text-white/40 hover:text-white/70"
                      >
                        Open workbench <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-[#E5E5E5] bg-[#F3F6F9] py-16">
        <div className="mx-auto max-w-[1100px] px-6">
          <h2 className="text-center text-[12px] font-bold uppercase tracking-[0.08em] text-[#032D60]">
            Platform & entry surfaces
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-[14px] text-[#444]">
            Sign-in, setup, and the catalogue of tools support your renewal workflows.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {PLATFORM_SURFACES.map((surface) => (
              <Link
                key={surface.id}
                href={surface.marketingPath}
                className="rounded-full border border-white/[0.08] bg-white/[0.02] px-4 py-2 text-[13px] font-medium text-white/50 hover:border-primary/25 hover:text-white"
              >
                {surface.label} → {surface.host}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
