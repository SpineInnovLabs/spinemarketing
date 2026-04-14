"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-dark-section">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-25 blur-[180px]" style={{ background: "radial-gradient(circle, rgba(52,211,153,0.30), transparent 60%)" }} />
        <div className="absolute left-[20%] top-[30%] h-[300px] w-[300px] rounded-full opacity-10 blur-[100px]" style={{ background: "radial-gradient(circle, rgba(139,92,246,0.20), transparent 70%)" }} />
        <div className="absolute right-[20%] bottom-[20%] h-[250px] w-[250px] rounded-full opacity-10 blur-[80px]" style={{ background: "radial-gradient(circle, rgba(251,191,36,0.15), transparent 70%)" }} />
      </div>

      <div className="mx-auto max-w-[1100px] px-6 py-28 md:py-40 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          className="relative mx-auto max-w-2xl text-center"
        >
          <h2 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-[52px]">
            Ready to see everything{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-emerald-300 to-primary">in one place?</span>
          </h2>
          <p className="mt-6 text-base font-medium leading-relaxed text-white/55">
            Your apps. One Spine. AI that thinks in context.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              size="lg"
              className="h-12 rounded-full px-8 text-sm font-semibold shadow-[0_0_40px_rgba(52,211,153,0.25)] transition-shadow hover:shadow-[0_0_60px_rgba(52,211,153,0.35)]"
              asChild
            >
              <Link href="/contact?intent=demo">Book a demo</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 rounded-full border-white/15 bg-transparent px-8 text-sm font-semibold text-white/70 hover:border-white/30 hover:bg-white/[0.04] hover:text-white"
              asChild
            >
              <Link href="/contact">Talk to us</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
