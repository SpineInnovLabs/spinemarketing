"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { EnterpriseButton } from "@/components/marketing/enterprise"
import { BUYER_CTAS } from "@/lib/buyer-clarity"

export function FinalCTA() {
  return (
    <section className="border-t border-[#D9E4EF] bg-[#EAF5FC]">
      <div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-8 md:py-24 lg:px-12">
        <motion.div
          initial={{ y: 12 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-[32px] font-semibold tracking-[-0.03em] leading-[1.2] text-[#032D60] sm:text-[40px]">
            Deploy the{" "}
            <span className="text-[#0176D3]">Renewal Decision Workspace</span> first.
          </h2>
          <p className="mt-5 text-[16px] leading-[1.6] text-[#33465B]">
            See a sample decision packet, replay the Northstar Labs workflow, or book a review of how your team prepares
            renewal and at-risk account decisions today.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href={BUYER_CTAS.packet.href}
              className="inline-flex h-10 items-center justify-center rounded-md bg-[#0176D3] px-5 text-[14px] font-semibold text-white hover:bg-[#0B5CAB]"
            >
              {BUYER_CTAS.packet.label}
            </Link>
            <EnterpriseButton href={BUYER_CTAS.workflowReview.href} variant="secondary">
              {BUYER_CTAS.workflowReview.label}
            </EnterpriseButton>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
