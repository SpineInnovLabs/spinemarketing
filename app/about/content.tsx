"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 } as const,
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true, margin: "-80px" },
  transition: { type: "spring" as const, damping: 18, stiffness: 70, delay },
});

const timeline = [
  {
    year: "2014",
    title: "Soft Dev",
    desc: "Started in software development. Learning the craft of building systems from scratch.",
  },
  {
    year: "2018",
    title: "Integration Dev",
    desc: "Moved into enterprise integration. Wiring systems across five industries.",
  },
  {
    year: "Expert",
    title: "MuleSoft Architect",
    desc: "India's leading MuleSoft architect. API-led connectivity. 13+ years wiring enterprise systems.",
  },
  {
    year: "CSM Era",
    title: "Customer Success at Salesforce",
    desc: "MuleSoft enterprise CSM. Saw plumbing failures at the human layer.",
  },
  {
    year: "The Crisis",
    title: "The Red Account",
    desc: "$8M account at 100% attrition risk. Zero handover.",
  },
  {
    year: "The Discovery",
    title: "Two Hidden Signals",
    desc: "Unsigned contract. Hidden conflicts. Invisible to every dashboard.",
  },
  {
    year: "The Save",
    title: "$8M Renewed",
    desc: "Both signals resolved. Full renewal. Account saved.",
  },
  {
    year: "2025",
    title: "Founded IntegrateWise LLP",
    desc: "Built in Bengaluru. Automates what was done manually.",
  },
  {
    year: "2026",
    title: "Knowledge Workspace over the Spine",
    desc: "Workspace + Twin. Three data ecosystems. You stay in control.",
  },
];

export function AboutContent() {
  return (
    <>
      <section className="relative overflow-hidden pt-[160px] pb-28" style={{ background: "#05070A" }}>
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-[25%] h-[600px] w-[800px] -translate-x-1/2 rounded-full opacity-[0.07] blur-[140px]" style={{ background: "radial-gradient(circle, rgba(139,92,246,0.4), transparent 70%)" }} />
        </div>
        <div className="relative mx-auto max-w-[900px] px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", damping: 16, stiffness: 52, delay: 0.2 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/[0.08] px-4 py-1.5 text-[13px] font-semibold text-white/50"
            style={{ background: "rgba(255,255,255,0.03)", backdropFilter: "blur(12px)" }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            The Founder Story
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", damping: 16, stiffness: 52, delay: 0.4 }}
            className="text-[44px] font-semibold leading-[1.05] tracking-[-0.05em] text-white sm:text-[56px] lg:text-[64px]"
          >
            How a red account and 13 years of plumbing led to{" "}
            <span className="text-primary">a new category of software.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", damping: 16, stiffness: 52, delay: 0.6 }}
            className="mx-auto mt-7 max-w-xl text-[15px] font-medium leading-[1.6] text-white/35"
          >
            Nirmal Prince J &middot; Founder &amp; CEO, IntegrateWise LLP &middot; Bengaluru, India
          </motion.p>
        </div>
      </section>

      <section className="py-28 md:py-36 border-t border-white/[0.04]" style={{ background: "#05070A" }}>
        <div className="mx-auto max-w-[800px] px-6">
          <motion.div {...fade(0)}>
            <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-primary">
              Chapter 1
            </p>
            <h2 className="mt-3 text-[36px] font-semibold tracking-[-0.04em] leading-[1.1] text-white sm:text-[44px]">
              The man who built the plumbing
            </h2>
            <div className="mt-8 space-y-6 text-[16px] font-medium leading-[1.8] tracking-[-0.01em] text-white/55">
              <blockquote className="border-l-2 border-primary pl-6 text-[17px] italic text-white/70">
                &ldquo;The thing that kept me up at night wasn&apos;t a broken
                API. It was watching smart people make the wrong decisions
                because their tools couldn&apos;t talk to each other.&rdquo;
              </blockquote>
              <p>
                13 years wiring enterprise systems. His job: make disconnected
                tools speak the same language.
              </p>
              <p>
                The tools were connected. The data flowed. But nobody could
                assemble it for the human making the decision.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-28 md:py-36 border-t border-white/[0.04]" style={{ background: "#05070A" }}>
        <div className="mx-auto max-w-[800px] px-6">
          <motion.div {...fade(0)}>
            <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-primary">
              Chapter 2
            </p>
            <h2 className="mt-3 text-[36px] font-semibold tracking-[-0.04em] leading-[1.1] text-white sm:text-[44px]">
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
                  className="rounded-xl border border-red-500/20 px-4 py-3"
                  style={{ background: "rgba(239,68,68,0.06)" }}
                >
                  <div className="text-[11px] font-bold uppercase tracking-widest text-red-400/60">
                    {label}
                  </div>
                  <div className="text-[16px] font-bold text-red-400">
                    {value}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 space-y-6 text-[16px] font-medium leading-[1.8] tracking-[-0.01em] text-white/55">
              <p>
                A fellow CSM left. Their biggest account — ~$8M — landed on
                his desk. No handover. No context.
              </p>
              <p>
                Marked Red. 100% attrition risk. Nobody could explain why.
              </p>
              <blockquote className="border-l-2 border-primary pl-6 text-[17px] italic text-white/70">
                &ldquo;The data existed — in seven different places, seven
                formats, owned by seven teams. Nobody could see across all of it
                at once.&rdquo;
              </blockquote>
              <p>
                He became the integration layer. Weeks of cross-referencing
                tickets, CRM notes, emails, and Slack against contract terms.
              </p>
            </div>

            <h3 className="mt-10 text-[22px] font-semibold tracking-[-0.03em] text-white">
              The two hidden signals
            </h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                {
                  signal: "Signal 1",
                  title: "The unsigned contract",
                  desc: "The $8M contract was never signed. It stalled everything — invisible to any single system.",
                },
                {
                  signal: "Signal 2",
                  title: "The hidden conflict",
                  desc: "Interpersonal conflict between decision-makers. Buried in fragments. The kind of tension that derails renewals.",
                },
              ].map(({ signal, title, desc }) => (
                <div
                  key={signal}
                  className="rounded-xl border border-white/[0.06] p-6"
                  style={{ background: "rgba(255,255,255,0.02)", backdropFilter: "blur(12px)" }}
                >
                  <p className="text-[12px] font-bold uppercase tracking-widest text-primary">
                    {signal}
                  </p>
                  <h4 className="mt-2 text-[16px] font-semibold text-white">
                    {title}
                  </h4>
                  <p className="mt-3 text-[14px] font-medium leading-[1.6] text-white/40">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-28 md:py-36 border-t border-white/[0.04]" style={{ background: "#05070A" }}>
        <div className="mx-auto max-w-[800px] px-6">
          <motion.div {...fade(0)}>
            <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-primary">
              Chapter 3
            </p>
            <h2 className="mt-3 text-[36px] font-semibold tracking-[-0.04em] leading-[1.1] text-white sm:text-[44px]">
              The save — $8 million back from the edge
            </h2>
            <div className="mt-8 space-y-6 text-[16px] font-medium leading-[1.8] tracking-[-0.01em] text-white/55">
              <p>
                Both signals identified. Contract resolved. Relationship rebuilt from zero.
              </p>
              <p className="text-[18px] text-white font-semibold">
                When renewal time came — they renewed. The full $8 million.
              </p>
              <p>
                Written off as lost. Saved — because one person manually connected every signal.
              </p>
              <blockquote className="border-l-2 border-primary pl-6 text-[17px] italic text-white/70">
                &ldquo;I saved it. But it nearly killed me to do it by hand.
                That&apos;s when I knew: this should never require one person to
                do alone. And I was going to build the system that made sure it
                didn&apos;t.&rdquo;
              </blockquote>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-28 md:py-36 border-t border-white/[0.04]" style={{ background: "#05070A" }}>
        <div className="mx-auto max-w-[800px] px-6">
          <motion.div {...fade(0)}>
            <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-primary">
              Chapter 4
            </p>
            <h2 className="mt-3 text-[36px] font-semibold tracking-[-0.04em] leading-[1.1] text-white sm:text-[44px]">
              The birth of IntegrateWise
            </h2>
            <div className="mt-8 space-y-6 text-[16px] font-medium leading-[1.8] tracking-[-0.01em] text-white/55">
              <p>
                Not a whiteboard exercise. A lived experience — signals visible only through manual integration.
              </p>
              <p>
                He set out to automate what he did by hand: cross-referencing, signal discovery, context building.
              </p>
              <p className="text-white font-semibold">
                He had spent 13 years building the plumbing. Now he was going to
                build the intelligence layer.
              </p>
            </div>

            <h3 className="mt-10 text-[22px] font-semibold tracking-[-0.03em] text-white">
              What IntegrateWise actually solves
            </h3>
            <div className="mt-6 space-y-3">
              {[
                "Connect every app into the Spine — one source of truth.",
                "Three data ecosystems — Truth, Context, AI Sessions — merge into Entity 360.",
                "The cognitive loop: Think. Act. Govern. Repeat. Adjust.",
                "AI thinks. You approve or deny. AI works. Knowledge compounds.",
                "Human approval required before anything executes.",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  {...fade(i * 0.06)}
                  className="flex items-start gap-3 rounded-xl border border-white/[0.06] p-4"
                  style={{ background: "rgba(255,255,255,0.02)" }}
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/15 text-[12px] font-bold text-primary">
                    {i + 1}
                  </span>
                  <span className="text-[15px] font-medium leading-[1.6] text-white/60">
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
                A Knowledge Workspace over the Spine — the Workspace is where you work, the Twin is where AI serves you.
              </p>
              <p className="mt-1 text-[15px] font-medium text-white/70">
                This is IntegrateWise.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-28 md:py-36 border-t border-white/[0.04]" style={{ background: "#05070A" }}>
        <div className="mx-auto max-w-[800px] px-6">
          <motion.div {...fade(0)}>
            <h2 className="text-[36px] font-semibold tracking-[-0.04em] leading-[1.1] text-white sm:text-[44px]">
              The journey
            </h2>
          </motion.div>
          <div className="mt-12 space-y-0">
            {timeline.map(({ year, title, desc }, i) => (
              <motion.div
                key={i}
                {...fade(i * 0.05)}
                className="relative pl-8 pb-10 last:pb-0 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-white/[0.08] last:before:hidden"
              >
                <div className="absolute left-0 top-1 h-2.5 w-2.5 -translate-x-[calc(50%-0.5px)] rounded-full bg-primary" />
                <div className="text-[13px] font-bold tracking-[-0.02em] text-primary">
                  {year}
                </div>
                <h3 className="mt-1 text-[16px] font-semibold tracking-[-0.03em] text-white">
                  {title}
                </h3>
                <p className="mt-2 text-[14px] font-medium leading-[1.6] text-white/40">
                  {desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-white/[0.04]" style={{ background: "#05070A" }}>
        <div className="mx-auto max-w-[800px] px-6">
          <motion.div {...fade(0)}>
            <blockquote className="border-l-2 border-primary pl-6 text-[18px] italic font-medium text-white/60 leading-[1.7]">
              &ldquo;The Spine connected support, product usage, billing, and relationship data across 12 systems. The team intervened early and saved an $8M customer.&rdquo;
            </blockquote>
            <div className="mt-10 grid grid-cols-3 gap-5 text-center">
              {[
                { stat: "$8M", label: "Customer protected" },
                { stat: "70+", label: "Systems connected" },
                { stat: "3", label: "Data ecosystems" },
              ].map(({ stat, label }) => (
                <div
                  key={label}
                  className="rounded-2xl border border-white/[0.06] p-6"
                  style={{ background: "rgba(255,255,255,0.02)" }}
                >
                  <div className="text-[28px] font-bold tracking-[-0.04em] text-primary">{stat}</div>
                  <div className="mt-1 text-[12px] font-medium text-white/35">{label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden py-28 border-t border-white/[0.04]" style={{ background: "#05070A" }}>
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.06] blur-[120px]" style={{ background: "radial-gradient(circle, rgba(52,211,153,0.4), transparent 70%)" }} />
        </div>
        <div className="relative mx-auto max-w-[800px] px-6 text-center">
          <motion.div {...fade(0)}>
            <blockquote className="text-[32px] font-semibold leading-[1.15] tracking-[-0.04em] text-white sm:text-[40px]">
              &ldquo;We built it to save ourselves.{" "}
              <span className="text-primary">Now it saves you.</span>&rdquo;
            </blockquote>
            <p className="mt-6 text-[15px] font-medium text-white/35">
              Nirmal Prince J &middot; Founder &amp; CEO &middot; IntegrateWise LLP &middot; Bengaluru, India
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/contact?intent=demo"
                className="inline-flex h-12 items-center gap-2 rounded-full px-7 text-[14px] font-semibold text-white transition-all hover:opacity-90"
                style={{ background: "var(--gradient-primary)", boxShadow: "0 0 30px rgba(27,167,132,0.15)" }}
              >
                Book a demo <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/platform"
                className="inline-flex h-12 items-center rounded-full border border-white/[0.1] px-6 text-[14px] font-semibold text-white/60 transition-colors hover:border-white/20 hover:text-white"
              >
                See how it works
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
