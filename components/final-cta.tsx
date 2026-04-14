"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-dark-section">
      <div className="mx-auto max-w-[1100px] px-6 py-28 md:py-40 md:px-16">
        <div
          className="pointer-events-none absolute inset-0 rounded-[50px]"
          style={{
            background:
              "radial-gradient(50% 50% at 50% 50%, rgba(27,167,132,0.08) 0%, transparent 100%)",
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          className="relative mx-auto max-w-2xl text-center"
        >
          <h2 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-[52px]">
            Ready to see everything{" "}
            <span className="text-primary">in one place?</span>
          </h2>
          <p className="mt-6 text-base font-medium leading-relaxed text-white/55">
            Bring your existing apps into a Knowledge Workspace over the Spine
            and see how AI can think in context while you stay in control.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-2.5 sm:flex-row">
            <Button
              size="lg"
              className="h-11 rounded-xl px-6 text-sm font-semibold"
              style={{
                background: "var(--gradient-primary)",
                border: "2px solid rgba(248,248,250,0.12)",
                boxShadow: "var(--shadow-button)",
              }}
              asChild
            >
              <Link href="/contact?intent=demo">Book a demo</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-11 rounded-xl border-2 border-white/15 bg-transparent px-6 text-sm font-semibold text-white hover:bg-white/10 hover:text-white"
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
