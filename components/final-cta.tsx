"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden border-t border-white/[0.05]" style={{ backgroundColor: "#111111" }}>
      <div className="mx-auto max-w-[1100px] px-6 py-[100px] md:px-16">
        <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(50% 50% at 50% 50%, rgba(255,225,204,0.06) 0%, transparent 100%)" }} />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          className="relative mx-auto max-w-2xl text-center"
        >
          <h2 className="text-[40px] font-semibold tracking-[-0.05em] leading-[1.2] text-white sm:text-[48px] lg:text-[52px]">
            Start building your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFE1CC] to-white">Digital Memory.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[16px] font-medium leading-[1.7] text-white/45">
            See how your tools, Spine, and Twin come together in one governed workspace.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-2.5 sm:flex-row">
            <Button
              size="lg"
              className="h-[44px] rounded-lg px-7 text-[15px] font-semibold tracking-[-0.3px] text-[#111111] hover:opacity-90"
              style={{ background: "linear-gradient(90deg, #FFE1CC 0%, #FFFFFF 100%)", border: "1px solid rgba(255,255,255,0.10)" }}
              asChild
            >
              <Link href="/contact?intent=demo">Book a demo</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
