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
              <span className="text-[14px] font-semibold tracking-[-0.03em] text-[#0a0b10]">Our Story</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", damping: 16, mass: 1, stiffness: 52, delay: 0.4 }}
              className="text-[48px] font-semibold leading-[1em] tracking-[-0.05em] text-white sm:text-[54px] lg:text-[64px]"
            >
              The story of{" "}
              <span className="text-primary">effortless work.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", damping: 16, mass: 1, stiffness: 52, delay: 0.6 }}
              className="mx-auto mt-8 max-w-2xl text-[17px] font-medium leading-[1.5] tracking-[-0.02em] text-white/55"
            >
              Modern work isn&apos;t hard because people lack capability. It&apos;s hard because they&apos;re constantly fighting their tools.
            </motion.p>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="arvio-section">
        <div className="mx-auto max-w-[1100px]">
          <div className="mx-auto max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            >
              <h2 className="section-heading">We became the{" "}<span className="text-primary">human APIs</span></h2>
              <div className="mt-8 space-y-6 text-[17px] font-medium leading-[1.7] tracking-[-0.02em] text-muted-foreground">
                <p>
                  We&apos;ve become &quot;human APIs,&quot; copying context between productivity apps, communication tools,
                  and AI chats every 30 minutes — only to start from zero again in the 31st minute.
                </p>
                <p>
                  Work now lives across Notion, Coda, Slack, email, CRMs, calendars, billing tools, and AI apps
                  like ChatGPT, Claude, Gemini, Grok, and Perplexity — just to move one task forward.
                </p>
                <p>
                  Information is trapped in different tabs and histories. Tasks fall between tools. AI brainstorms
                  vanish when chats end. Data exports break formulas and relationships.
                </p>
                <p>
                  The result: copy–paste–export–import, again and again. It&apos;s exhausting, destroys momentum,
                  and quietly slows down even the best teams.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Turning Point */}
      <section className="arvio-section bg-muted">
        <div className="mx-auto max-w-[1100px]">
          <div className="mx-auto max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            >
              <h2 className="section-heading">The turning{" "}<span className="text-primary">point</span></h2>
              <div className="mt-8 space-y-6 text-[17px] font-medium leading-[1.7] tracking-[-0.02em] text-muted-foreground">
                <p>
                  As a Customer Success Manager, I tried everything: Slack workflows, manual exports, new project
                  tools, and every &quot;smart&quot; AI assistant I could find.
                </p>
                <p>
                  I talked to multiple AIs to get the best thinking and wording, then realised those conversations
                  were scattered everywhere with no way to pull them together when it mattered.
                </p>
                <p>
                  No matter which tool I tried, the same problems came back: data silos, broken relationships,
                  lost context, and no single place where my work and my thinking truly lived.
                </p>
                <p className="text-foreground font-semibold">
                  That&apos;s when it became clear: the world doesn&apos;t need yet another tool. It needs a way to
                  bring all of its tools — and all of its AI conversations — together, intelligently and effortlessly.
                </p>
                <p className="text-foreground font-semibold">
                  That&apos;s how IntegrateWise was born.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="arvio-section">
        <div className="mx-auto max-w-[1100px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            className="mx-auto max-w-3xl"
          >
            <h2 className="section-heading">Who IntegrateWise{" "}<span className="text-primary">is for</span></h2>
            <p className="mt-6 text-[17px] font-medium leading-[1.7] tracking-[-0.02em] text-muted-foreground">
              IntegrateWise is for everyone who feels like a human connector — a &quot;Human API&quot; — in their day-to-day work:
            </p>
          </motion.div>

          <div className="mx-auto mt-10 max-w-3xl divide-y divide-border/60">
            {[
              { who: "Founders & leaders", what: "A single, truthful view of how the business is actually running." },
              { who: "Sales, success & support", what: "The full story in one place — not scattered across CRMs, help desks, and inboxes." },
              { who: "Finance & ops", what: "Billing, invoices, and reports connected across tools — no more juggling." },
              { who: "Product & project teams", what: "Tickets, documents, and chats coordinated in one workspace." },
              { who: "Analysts & RevOps", what: "Trustworthy, connected data to diagnose issues and surface opportunities." },
              { who: "Students & freelancers", what: "A personal workspace where your knowledge grows and follows you across AI tools." },
            ].map(({ who, what }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", bounce: 0.2, duration: 0.6, delay: i * 0.06 }}
                className="flex flex-col gap-1 py-5 sm:flex-row sm:items-start sm:gap-8"
              >
                <div className="w-48 shrink-0 text-[15px] font-semibold text-foreground">{who}</div>
                <div className="text-[15px] font-medium leading-[1.5] text-muted-foreground">{what}</div>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", bounce: 0.2, duration: 0.6, delay: 0.3 }}
            className="mx-auto mt-10 max-w-3xl text-[17px] font-semibold leading-[1.7] tracking-[-0.02em] text-foreground"
          >
            If your work depends on data spread across tools — and you want AI that truly understands your
            context while respecting your control — IntegrateWise is built for you.
          </motion.p>
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

      {/* CTA */}
      <section className="arvio-section">
        <div className="mx-auto max-w-[1100px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="section-heading">
              Ready to stop being the{" "}
              <span className="text-primary">human API?</span>
            </h2>
            <div className="mt-10 flex flex-col items-center justify-center gap-2.5 sm:flex-row">
              <Button
                size="lg"
                className="h-[42px] rounded-xl px-6 text-[15px] font-semibold tracking-[-0.3px]"
                style={{ background: "var(--gradient-primary)", border: "2px solid rgba(248,248,250,0.12)", boxShadow: "var(--shadow-button)" }}
                asChild
              >
                <Link href="/contact?intent=demo">Book a demo</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-[42px] rounded-xl border-2 border-border/75 bg-white px-6 text-[15px] font-semibold tracking-[-0.3px] text-foreground"
                asChild
              >
                <Link href="/platform">See how it works</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
