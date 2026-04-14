"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden" style={{ background: "#05070A" }}>
      <div className="absolute inset-0 bg-grain" />
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-[200px]" style={{ background: "radial-gradient(circle, rgba(52,211,153,0.25), transparent 60%)" }} />
      </div>

      <div className="relative mx-auto max-w-[1100px] px-6 py-40 md:py-52">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", damping: 20, stiffness: 60 }}
          className="relative mx-auto max-w-3xl text-center"
        >
          <h2 className="text-[48px] sm:text-[64px] lg:text-[72px] font-semibold leading-[0.95] tracking-[-0.04em] text-white">
            Move from integration{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-300 to-emerald-400 text-glow-emerald">
              to intelligence.
            </span>
          </h2>
          <p className="mt-8 text-[17px] sm:text-[19px] font-medium leading-relaxed text-white/35">
            Your apps. One Spine. AI that thinks in context.
          </p>
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="h-[56px] rounded-full px-10 text-[16px] font-semibold shadow-[0_0_50px_rgba(52,211,153,0.25)] transition-shadow hover:shadow-[0_0_80px_rgba(52,211,153,0.4)]"
              style={{
                background: "var(--gradient-primary)",
                border: "2px solid rgba(52,211,153,0.2)",
              }}
              asChild
            >
              <Link href="/contact?intent=demo">Book a demo</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-[56px] rounded-full border-white/10 bg-transparent px-10 text-[16px] font-semibold text-white/50 hover:border-white/25 hover:bg-white/[0.04] hover:text-white"
              asChild
            >
              <Link href="/platform/how-it-works">See how it works</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
