"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const timeline = [
  {
    year: "2011",
    title: "Integration Architect",
    desc: "13+ years wiring enterprise systems across telecom, finance, healthcare, retail, and insurance.",
  },
  {
    year: "Expert",
    title: "MuleSoft Architect",
    desc: "One of India's leading MuleSoft Integration Architects. API-led connectivity and canonical data models.",
  },
  {
    year: "CSM Era",
    title: "Customer Success at Salesforce",
    desc: "Managed MuleSoft enterprise accounts. Saw the same plumbing failures at the human layer.",
  },
  {
    year: "The Crisis",
    title: "The Red Account",
    desc: "Inherited an $8M account at 100% attrition risk. Zero handover. Weeks of manual cross-referencing.",
  },
  {
    year: "The Discovery",
    title: "Two Hidden Signals",
    desc: "An unsigned contract. Interpersonal conflicts buried across fragmented records. Both invisible to every dashboard.",
  },
  {
    year: "The Save",
    title: "$8M Renewed",
    desc: "Resolved both signals. Full renewal. An account written off as lost — brought back.",
  },
  {
    year: "2025",
    title: "Founded IntegrateWise LLP",
    desc: "Built in Bengaluru to automate everything done manually during that save.",
  },
  {
    year: "2026",
    title: "Knowledge Workspace over the Spine",
    desc: "The architecture evolves: Truth + Context + Session Summaries. L1 (Daily Workbench) and L2 (Intelligence Layer). Three data flows. One Canonical Loop. The Twin proposes. You stay in control.",
  },
];

export function AboutContent() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative overflow-hidden bg-dark-section"
      >
        <div className="mx-auto max-w-[1200px] px-6 pt-[160px] pb-[100px] md:px-16">
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                damping: 16,
                mass: 1,
                stiffness: 52,
                delay: 0.2,
              }}
              className="mb-6 inline-flex items-center gap-2.5 rounded-[40px] bg-white px-4 py-1.5"
              style={{ boxShadow: "0px 0px 0px 3px rgb(248 248 250)" }}
            >
              <span
                className="h-2 w-2 rounded-full"
                style={{ background: "var(--gradient-primary-icon)" }}
              />
              <span className="text-[14px] font-semibold tracking-[-0.03em] text-[#0a0b10]">
                The Founder Story
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                damping: 16,
                mass: 1,
                stiffness: 52,
                delay: 0.4,
              }}
              className="text-[40px] font-semibold leading-[1.1em] tracking-[-0.05em] text-white sm:text-[48px] lg:text-[56px]"
            >
              How a red account, a missing signature, and 13 years of plumbing
              work led to{" "}
              <span className="text-primary">a new category of software.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                damping: 16,
                mass: 1,
                stiffness: 52,
                delay: 0.6,
              }}
              className="mx-auto mt-8 max-w-xl text-[15px] font-medium leading-[1.5] tracking-[-0.02em] text-white/40"
            >
              Nirmal Prince J · Founder &amp; CEO, IntegrateWise LLP ·
              Bengaluru, India
            </motion.p>
          </div>
        </div>
      </section>

      {/* Chapter 1 */}
      <section className="arvio-section dark-section">
        <div className="mx-auto max-w-[800px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          >
            <div className="text-[12px] font-bold uppercase tracking-[0.2em] text-primary">
              Chapter 1
            </div>
            <h2 className="mt-3 text-[32px] font-semibold tracking-[-0.04em] leading-[1.2] sm:text-[38px]">
              The man who built the plumbing
            </h2>
            <div className="mt-8 space-y-6 text-[16px] font-medium leading-[1.8] tracking-[-0.01em] text-foreground/75">
              <blockquote className="border-l-2 border-primary pl-6 text-[17px] italic text-foreground">
                &ldquo;The thing that kept me up at night wasn&apos;t a broken
                API. It was watching smart people make the wrong decisions
                because their tools couldn&apos;t talk to each other.&rdquo;
              </blockquote>
              <p>
                Nirmal Prince J spent 13 years as a MuleSoft Integration
                Architect — wiring enterprise systems across telecom, finance,
                healthcare, retail, and insurance. His job: make disconnected
                systems speak the same language.
              </p>
              <p>
                But the more systems he connected, the clearer a deeper problem
                became. The tools were connected. The data was flowing. And yet,
                nobody could put it all together in a way that was useful for
                the human making a decision.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Chapter 2 */}
      <section className="arvio-section dark-section">
        <div className="mx-auto max-w-[800px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          >
            <div className="text-[12px] font-bold uppercase tracking-[0.2em] text-primary">
              Chapter 2
            </div>
            <h2 className="mt-3 text-[32px] font-semibold tracking-[-0.04em] leading-[1.2] sm:text-[38px]">
              The red account — when everything went dark
            </h2>

            <div className="mt-8 flex flex-wrap gap-4">
              {[
                { label: "Status", value: "RED" },
                { label: "Attrition risk", value: "100%" },
                { label: "Contract value", value: "~$8,000,000" },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  className="rounded-lg border border-destructive/20 bg-destructive/5 px-4 py-2"
                >
                  <div className="text-[11px] font-bold uppercase tracking-widest text-destructive/60">
                    {label}
                  </div>
                  <div className="text-[16px] font-bold text-destructive">
                    {value}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 space-y-6 text-[16px] font-medium leading-[1.8] tracking-[-0.01em] text-foreground/75">
              <p>
                Nirmal joined Salesforce as a Customer Success Manager for
                MuleSoft accounts. A fellow CSM left. Their biggest account —
                ~$8 million — landed on his desk with no handover and no
                context.
              </p>
              <p>
                No transition document. No relationship history. No record of
                what had been promised or delivered. The account was marked Red
                — 100% attrition risk. Nobody could explain why.
              </p>
              <blockquote className="border-l-2 border-primary pl-6 text-[17px] italic text-foreground">
                &ldquo;The data existed — in seven different places, seven
                formats, owned by seven teams. Nobody could see across all of it
                at once.&rdquo;
              </blockquote>
              <p>
                He became the integration layer. For weeks, he manually
                cross-referenced support tickets against CRM notes, email
                threads against project milestones, Slack messages against
                contract terms.
              </p>
            </div>

            <h3 className="mt-10 text-[20px] font-semibold tracking-[-0.03em]">
              The two hidden signals
            </h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-border bg-background p-6">
                <div className="text-[12px] font-bold uppercase tracking-widest text-primary">
                  Signal 1
                </div>
                <h4 className="mt-2 text-[16px] font-semibold">
                  The unsigned contract
                </h4>
                <p className="mt-3 text-[14px] font-medium leading-[1.6] text-muted-foreground">
                  The $8M contract had never been signed. It had quietly stalled
                  every conversation and blocked every milestone — and it
                  wasn&apos;t in any single system.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-background p-6">
                <div className="text-[12px] font-bold uppercase tracking-widest text-primary">
                  Signal 2
                </div>
                <h4 className="mt-2 text-[16px] font-semibold">
                  The hidden conflict
                </h4>
                <p className="mt-3 text-[14px] font-medium leading-[1.6] text-muted-foreground">
                  Buried in fragments of notes and email tones — evidence of
                  interpersonal conflict between key decision-makers. The kind
                  of tension that derails renewals because the relationship
                  fractures, not the product.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Chapter 3 */}
      <section className="arvio-section dark-section">
        <div className="mx-auto max-w-[800px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          >
            <div className="text-[12px] font-bold uppercase tracking-[0.2em] text-primary">
              Chapter 3
            </div>
            <h2 className="mt-3 text-[32px] font-semibold tracking-[-0.04em] leading-[1.2] sm:text-[38px]">
              The save — $8 million back from the edge
            </h2>
            <div className="mt-8 space-y-6 text-[16px] font-medium leading-[1.8] tracking-[-0.01em] text-foreground/75">
              <p>
                With both signals identified, Nirmal resolved the unsigned
                contract and addressed the interpersonal dynamics — work that
                required the full context no single tool could provide.
              </p>
              <p>He rebuilt the relationship from zero. Meeting by meeting.</p>
              <p className="text-[18px] text-foreground font-semibold">
                When renewal time came — they renewed. The full $8 million.
              </p>
              <p>
                An account written off as 100% attrition — saved. Not because a
                better tool surfaced the right alert. Because one person
                manually connected every piece of data and found the signals no
                single tool could see.
              </p>
              <blockquote className="border-l-2 border-primary pl-6 text-[17px] italic text-foreground">
                &ldquo;I saved it. But it nearly killed me to do it by hand.
                That&apos;s when I knew: this should never require one person to
                do alone. And I was going to build the system that made sure it
                didn&apos;t.&rdquo;
              </blockquote>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Chapter 4 */}
      <section className="arvio-section dark-section">
        <div className="mx-auto max-w-[800px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          >
            <div className="text-[12px] font-bold uppercase tracking-[0.2em] text-primary">
              Chapter 4
            </div>
            <h2 className="mt-3 text-[32px] font-semibold tracking-[-0.04em] leading-[1.2] sm:text-[38px]">
              The birth of IntegrateWise
            </h2>
            <div className="mt-8 space-y-6 text-[16px] font-medium leading-[1.8] tracking-[-0.01em] text-foreground/75">
              <p>
                The Red Account recovery wasn&apos;t a whiteboard exercise. It
                was a lived experience — hidden signals that only became visible
                through weeks of manual integration work.
              </p>
              <p>
                Nirmal didn&apos;t set out to build another CRM or analytics
                tool. He set out to automate what he had done by hand: the
                cross-referencing, the signal discovery, the context building
                across disconnected apps.
              </p>
              <p className="text-foreground font-semibold">
                He had spent 13 years building the plumbing. Now he was going to
                build the brain.
              </p>
            </div>

            <h3 className="mt-10 text-[20px] font-semibold tracking-[-0.03em]">
              What IntegrateWise actually solves
            </h3>
            <div className="mt-6 space-y-3">
              {[
                "Connect every app into the Spine — one canonical source of truth.",
                "Build three data flows automatically: Truth (records), Context (conversations), Session Summaries (governed AI outputs).",
                "Surface hidden signals automatically in L2 — the unsigned contract, the buried conflict, the churn risk no dashboard shows.",
                "Let The Twin propose actions with full evidence — in the Intelligence Layer, never directly in your data.",
                "Require human approval through the Govern Gate before anything executes.",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    bounce: 0.2,
                    duration: 0.6,
                    delay: i * 0.06,
                  }}
                  className="flex items-start gap-3 rounded-xl border border-border bg-background p-4"
                >
                  <span
                    className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[12px] font-bold text-white"
                    style={{ background: "var(--gradient-primary-icon)" }}
                  >
                    {i + 1}
                  </span>
                  <span className="text-[15px] font-medium leading-[1.6] text-foreground/80">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>

            <div
              className="mt-10 rounded-xl p-6"
              style={{ background: "var(--gradient-primary)" }}
            >
              <p className="text-[17px] font-semibold leading-[1.5] text-white">
                A Knowledge Workspace over the Spine — where teams work in L1,
                AI proposes in L2, and humans stay in control.
              </p>
              <p className="mt-1 text-[15px] font-medium text-white/70">
                This is IntegrateWise.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="arvio-section dark-section">
        <div className="mx-auto max-w-[800px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          >
            <h2 className="text-[32px] font-semibold tracking-[-0.04em] leading-[1.2] sm:text-[38px]">
              The journey
            </h2>
          </motion.div>
          <div className="mt-12 space-y-0">
            {timeline.map(({ year, title, desc }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  bounce: 0.2,
                  duration: 0.6,
                  delay: i * 0.05,
                }}
                className="relative pl-8 pb-10 last:pb-0 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-border last:before:hidden"
              >
                <div className="absolute left-0 top-1 h-2.5 w-2.5 -translate-x-[calc(50%-0.5px)] rounded-full bg-primary" />
                <div className="text-[13px] font-bold tracking-[-0.02em] text-primary">
                  {year}
                </div>
                <h3 className="mt-1 text-[16px] font-semibold tracking-[-0.03em]">
                  {title}
                </h3>
                <p className="mt-2 text-[14px] font-medium leading-[1.6] text-muted-foreground">
                  {desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Proof stats */}
      <section className="arvio-section dark-section">
        <div className="mx-auto max-w-[800px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          >
            <blockquote className="border-l-2 border-primary pl-6 text-[18px] italic font-medium text-foreground leading-[1.7]">
              &ldquo;The Spine connected support, product usage, billing, and relationship data across 12 systems. The team intervened early and saved an $8M customer.&rdquo;
            </blockquote>
            <div className="mt-10 grid grid-cols-3 gap-6 text-center">
              {[
                { stat: "$8M", label: "Customer protected" },
                { stat: "70+", label: "Systems connected" },
                { stat: "3 flows", label: "Truth, Context, Session Summaries" },
              ].map(({ stat, label }) => (
                <div key={label} className="arvio-card p-6">
                  <div className="text-[28px] font-bold tracking-[-0.04em] text-primary">{stat}</div>
                  <div className="mt-1 text-[13px] font-medium text-muted-foreground">{label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Closing quote + CTA */}
      <section
        className="arvio-section dark-section bg-dark-section"
      >
        <div className="mx-auto max-w-[800px] text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          >
            <blockquote className="text-[28px] font-semibold leading-[1.3] tracking-[-0.04em] text-white sm:text-[36px]">
              &ldquo;We built it to save ourselves.{" "}
              <span className="text-primary">Now it saves you.</span>&rdquo;
            </blockquote>
            <p className="mt-6 text-[15px] font-medium text-white/40">
              Nirmal Prince J · Founder &amp; CEO · IntegrateWise LLP ·
              Bengaluru, India
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-2.5 sm:flex-row">
              <Button
                size="lg"
                className="h-[42px] rounded-xl px-6 text-[15px] font-semibold"
                style={{
                  background: "var(--gradient-primary)",
                  boxShadow: "var(--shadow-button)",
                }}
                asChild
              >
                <Link href="/contact?intent=demo">Book a demo</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-[42px] rounded-xl border-2 border-white/15 bg-transparent px-6 text-[15px] font-semibold text-white hover:bg-white/10"
                asChild
              >
                <Link href="/platform">See how it works</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
