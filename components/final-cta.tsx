"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { EnterpriseButton } from "@/components/marketing/enterprise"

export function FinalCTA() {
  return (
    <section className="border-t border-[#E5E5E5] bg-[#032D60]">
      <div className="mx-auto max-w-[1100px] px-6 py-20 md:px-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-[32px] font-semibold tracking-[-0.03em] leading-[1.2] text-white sm:text-[40px]">
            Ready to bring context into{" "}
            <span className="text-[#7EC3F0]">one workspace?</span>
          </h2>
          <p className="mt-5 text-[16px] leading-[1.6] text-white/70">
            Spine InnovLabs builds SpineWorkspace — where humans and AI work from the same business context.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/contact?intent=demo"
              className="inline-flex h-10 items-center justify-center rounded-md bg-white px-5 text-[14px] font-semibold text-[#032D60] hover:bg-[#F3F6F9]"
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
