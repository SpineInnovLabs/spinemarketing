"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { EnterpriseButton } from "@/components/marketing/enterprise"

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
            Ready to bring truth and context into{" "}
            <span className="text-[#0176D3]">one workspace?</span>
          </h2>
          <p className="mt-5 text-[16px] leading-[1.6] text-[#33465B]">
            Spine InnovLabs builds SpineWorkspace — where people and AI work from truth and context together. Source systems stay authoritative.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/contact?intent=demo"
              className="inline-flex h-10 items-center justify-center rounded-md bg-[#0176D3] px-5 text-[14px] font-semibold text-white hover:bg-[#0B5CAB]"
            >
              Book a demo
            </Link>
            <EnterpriseButton href="/spineworkspace" variant="secondary">
              Explore SpineWorkspace
            </EnterpriseButton>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
