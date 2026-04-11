"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function AboutContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ backgroundColor: "rgb(8, 7, 14)" }}>
        <div className="mx-auto max-w-[1200px] px-6 pt-[160px] pb-[100px] md:px-16">
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", damping: 16, mass: 1, stiffness: 52, delay: 0.2 }}
              className="mb-6 inline-flex items-center gap-2.5 rounded-[40px] bg-white px-4 py-1.5"
              style={{ boxShadow: "0px 0px 0px 3px rgb(248 248 250)" }}
            >
              <span className="h-2 w-2 rounded-full" style={{ background: "var(--gradient-primary-icon)" }} />
              <span className="text-[14px] font-semibold tracking-[-0.03em] text-[#0a0b10]">Company</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", damping: 16, mass: 1, stiffness: 52, delay: 0.4 }}
              className="text-[48px] font-semibold leading-[1em] tracking-[-0.05em] text-white sm:text-[54px] lg:text-[64px]"
            >
              We believe tools should{" "}
              <span className="text-primary">work for you.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", damping: 16, mass: 1, stiffness: 52, delay: 0.6 }}
              className="mx-auto mt-8 max-w-2xl text-[17px] font-medium leading-[1.5] tracking-[-0.02em] text-white/55"
            >
              Not the other way around.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="arvio-section">
        <div className="mx-auto max-w-[1100px]">
          <div className="mx-auto max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            >
              <h2 className="section-heading">The story</h2>
              <div className="mt-8 space-y-6 text-[17px] font-medium leading-[1.7] tracking-[-0.02em] text-muted-foreground">
                <p>
                  IntegrateWise was born from a simple frustration: the tools meant to help teams work better
                  were actually making work harder.
                </p>
                <p>
                  Every team we worked with was drowning in the same problem. Customer data lived in the CRM.
                  Support context lived in Zendesk. Billing lived in Stripe. Product usage lived in analytics.
                  And the actual relationships — the nuance, the history, the signals — lived in email threads
                  and Slack messages that nobody could find.
                </p>
                <p>
                  People were spending hours every day being the human API between their tools. Copy-pasting
                  context from one tab to another. Restarting every conversation because nobody had the full picture.
                  Missing risks because the signals were scattered across systems that didn&apos;t talk to each other.
                </p>
                <p>
                  Then AI arrived, and it made things worse. AI tools that answered questions without full context.
                  AI that hallucinated because it only saw fragments. AI that could take actions with no oversight,
                  no audit trail, no human approval.
                </p>
                <p>
                  We decided to build what should have existed from the start: a single workspace
                  that connects every tool into one source of truth, gives you a complete view of every
                  customer and account, and lets AI help with full context — but never act without your approval.
                </p>
                <p className="text-foreground font-semibold">
                  That&apos;s IntegrateWise. Connect your tools. Trust your AI.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="arvio-section bg-muted">
        <div className="mx-auto max-w-[1100px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="section-heading">
              What we{" "}
              <span className="text-primary">stand for</span>
            </h2>
          </motion.div>

          <div className="mx-auto mt-16 grid max-w-4xl gap-6 sm:grid-cols-2">
            {[
              { title: "Truth over convenience", desc: "We'd rather show you an uncomfortable truth than a comfortable hallucination. One source of truth means real honesty." },
              { title: "Control is non-negotiable", desc: "The approval layer exists because AI without oversight is AI without trust. There's no admin override. Period." },
              { title: "Context is everything", desc: "An AI with partial context is worse than no AI at all. Your connected workspace gives AI the full picture before it speaks." },
              { title: "You stay in the loop, always", desc: "We believe AI should augment human judgment, not replace it. The approval step isn't a speed bump — it's the whole point." },
            ].map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", bounce: 0.2, duration: 0.6, delay: i * 0.1 }}
                className="arvio-card p-8"
              >
                <h3 className="text-[18px] font-semibold tracking-[-0.03em]">{v.title}</h3>
                <p className="mt-3 text-[15px] font-medium leading-[1.5] tracking-[-0.02em] text-muted-foreground">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
