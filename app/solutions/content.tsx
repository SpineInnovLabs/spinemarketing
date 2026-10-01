"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { PUBLIC_SOLUTIONS, PLATFORM_SURFACES, marketingPathForSolution, workspaceUrl, getPrimaryWorkspaceHost } from "@/lib/solution-taxonomy";
const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 16 } as const,
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true, margin: "-80px" },
  transition: { type: "spring" as const, damping: 18, stiffness: 70, delay },
});

export function SolutionsContent() {
  return (
    <>
      <section className="border-b border-[#E5E5E5] bg-white pt-[120px] pb-16">
        <div className="pointer-events-none absolute inset-0">
          <div
            className="absolute left-1/2 top-[20%] h-[500px] w-[700px] -translate-x-1/2 rounded-full opacity-[0.08] blur-[120px]"
            style={{ background: "radial-gradient(circle, rgba(52,211,153,0.5), transparent 70%)" }}
          />
        </div>
        <div className="relative mx-auto max-w-[900px] px-6 text-center">
          <motion.div {...fade(0.1)} className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/[0.08] px-4 py-1.5 text-[13px] font-semibold text-white/50" style={{ background: "rgba(255,255,255,0.03)" }}>
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Solutions
          </motion.div>
          <motion.h1 {...fade(0.2)} className="text-[40px] font-semibold leading-[1.1] tracking-[-0.03em] text-[#032D60] sm:text-[48px]">
            Functional workbenches for every team.
          </motion.h1>
          <motion.p {...fade(0.3)} className="mx-auto mt-4 max-w-2xl text-[16px] leading-[1.65] text-[#444]">
            These pages explain how SpineWorkspace applies to your function. Each solution maps to authenticated
            workbench projections on <span className="text-white/60">*.spineworkspace.com</span>—marketing
            routes are not the workspace itself.
          </motion.p>
        </div>
      </section>

      <section className="bg-white pb-16">
        <div className="mx-auto max-w-[1100px] px-6">
          <motion.h2 {...fade(0)} className="mb-10 text-center text-[12px] font-bold uppercase tracking-[0.14em] text-primary">
            Public functional solutions
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
            Auth, onboarding, marketplace, and MCP are platform projections—not functional solution catalogue entries.
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
