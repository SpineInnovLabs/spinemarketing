"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { NumberTicker } from "@/components/ui/number-ticker"

export function ProofSection() {
  return (
    <section className="arvio-section bg-muted">
      <div className="mx-auto max-w-[1100px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="section-heading">
            Proven in{" "}
            <span className="text-primary">real operations</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ type: "spring", bounce: 0.2, duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-16 max-w-3xl"
        >
          <div className="arvio-card p-10">
            {/* Arvio-style quote marks */}
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="mb-4">
              <path d="M18 28H10V20C10 14.48 14.48 10 20 10V14C16.69 14 14 16.69 14 20H18V28ZM34 28H26V20C26 14.48 30.48 10 36 10V14C32.69 14 30 16.69 30 20H34V28Z" fill="rgb(240,240,240)"/>
            </svg>

            <blockquote className="text-[17px] font-medium leading-[1.5] tracking-[-0.02em] text-foreground">
              &ldquo;The Spine connected support, product usage, billing, and relationship data across 12 systems.
              The team intervened early and saved an $8M customer.&rdquo;
            </blockquote>

            {/* Stats row with Number Ticker */}
            <div className="mt-8 grid grid-cols-1 gap-4 border-t border-border/60 pt-6 sm:grid-cols-3">
              <div className="text-center">
                <div className="text-[34px] font-semibold tracking-[-0.05em] leading-[1.3] text-primary">
                  $<NumberTicker value={8} className="text-[34px] font-semibold tracking-[-0.05em] leading-[1.3] text-primary" />M
                </div>
                <div className="mt-1 text-[14px] font-medium tracking-[-0.03em] text-muted-foreground">Customer protected</div>
              </div>
              <div className="text-center">
                <div className="text-[34px] font-semibold tracking-[-0.05em] leading-[1.3] text-primary">
                  <NumberTicker value={70} className="text-[34px] font-semibold tracking-[-0.05em] leading-[1.3] text-primary" />+
                </div>
                <div className="mt-1 text-[14px] font-medium tracking-[-0.03em] text-muted-foreground">Systems connected</div>
              </div>
              <div className="text-center">
                <div className="text-[34px] font-semibold tracking-[-0.05em] leading-[1.3] text-primary">
                  <NumberTicker value={3} className="text-[34px] font-semibold tracking-[-0.05em] leading-[1.3] text-primary" /> layers
                </div>
                <div className="mt-1 text-[14px] font-medium tracking-[-0.03em] text-muted-foreground">Intelligence layers</div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", bounce: 0.2, duration: 0.6, delay: 0.3 }}
          className="mt-12 flex flex-col items-center justify-center gap-2.5 sm:flex-row"
        >
          <Button
            size="lg"
            className="h-[42px] rounded-xl px-4 text-[15px] font-semibold tracking-[-0.3px]"
            style={{
              background: "var(--gradient-primary)",
              border: "2px solid rgba(248,248,250,0.12)",
              boxShadow: "var(--shadow-button)",
            }}
            asChild
          >
              <Link href="/contact?intent=demo">See it in action</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="h-[42px] rounded-xl border-2 border-border/75 bg-white px-4 text-[15px] font-semibold tracking-[-0.3px] text-foreground"
            asChild
          >
            <Link href="/contact">Talk to us</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
