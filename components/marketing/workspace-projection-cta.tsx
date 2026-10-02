"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import type { PublicSolution } from "@/lib/solution-taxonomy";
import { getPrimaryWorkspaceHost, workspaceUrl } from "@/lib/solution-taxonomy";

export function WorkspaceProjectionCta({
  solution,
  className = "",
}: {
  solution: PublicSolution;
  className?: string;
}) {
  const primary = getPrimaryWorkspaceHost(solution);
  const others = solution.workspaceAssociations.filter((w) => w.host !== primary.host);

  return (
    <motion.section
      initial={{ y: 10 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true }}
      className={`border-t border-[#E5E5E5] bg-[#F3F6F9] py-14 ${className}`}
    >
      <div className="mx-auto max-w-[900px] px-6">
        <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#0176D3]">
          Workbench
        </p>
        <h2 className="mt-3 text-[26px] font-semibold tracking-[-0.03em] text-[#032D60]">
          This page explains the work. The workspace itself runs on SpineWorkspace.
        </h2>
        <p className="mt-4 max-w-2xl text-[15px] leading-[1.7] text-[#444]">
          {solution.buyerSummary} Open the matching workbench when you&apos;re ready—authentication
          and product context stay on{" "}
          <span className="font-medium text-[#032D60]">{primary.host}</span>, not this marketing site.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
          <a
            href={workspaceUrl(primary.host)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-[10px] bg-[#0176D3] px-7 text-[15px] font-semibold text-white hover:bg-[#0B5CAB]"
          >
            Open {primary.label}
            <ExternalLink className="h-4 w-4" />
          </a>
          <Link
            href="/contact?intent=demo"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-[10px] border border-[#D9E4EF] bg-white px-7 text-[15px] font-semibold text-[#032D60] hover:bg-white"
          >
            Book a demo
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {others.length > 0 && (
          <div className="mt-8">
            <p className="mb-3 text-[12px] font-bold uppercase tracking-[0.1em] text-[#526479]">
              Related workbenches
            </p>
            <div className="flex flex-wrap gap-2">
              {others.map((ws) => (
                <a
                  key={ws.host}
                  href={workspaceUrl(ws.host)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-[#D9E4EF] bg-white px-4 py-2 text-[13px] font-medium text-[#032D60] hover:border-[#0176D3]"
                >
                  {ws.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.section>
  );
}
