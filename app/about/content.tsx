"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const timeline = [
  { year: "2011", title: "Integration Architect", desc: "Began building enterprise integrations across telecom, finance, healthcare, retail, and insurance. 13+ years wiring the systems that power industries." },
  { year: "13 Years", title: "MuleSoft Expert", desc: "Became one of India's leading MuleSoft Integration Architects. Deep expertise in API-led connectivity, canonical data models, and enterprise-grade integration patterns." },
  { year: "CSM Era", title: "Customer Success at Salesforce", desc: "Joined as a Customer Success Manager managing MuleSoft enterprise accounts. Saw the same plumbing failures playing out at the human layer." },
  { year: "The Crisis", title: "The Red Account", desc: "Inherited an $8M enterprise account marked 100% attrition risk with zero handover context. Spent weeks doing manually what no tool could do." },
  { year: "The Discovery", title: "Two Hidden Signals", desc: "Found an unsigned contract nobody knew about. Found interpersonal conflicts buried in fragmented records. Two signals invisible to every dashboard." },
  { year: "The Save", title: "$8M Renewed", desc: "Resolved both signals. Rebuilt the relationship from scratch. Full renewal. An account written off as lost — brought back." },
  { year: "2025", title: "Founded IntegrateWise LLP", desc: "Stopped waiting for someone else to build it. Founded IntegrateWise in Bengaluru to automate everything done manually." },
]

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
              <span className="text-[14px] font-semibold tracking-[-0.03em] text-[#0a0b10]">The Founder Story</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", damping: 16, mass: 1, stiffness: 52, delay: 0.4 }}
              className="text-[40px] font-semibold leading-[1.1em] tracking-[-0.05em] text-white sm:text-[48px] lg:text-[56px]"
            >
              How a red account, a missing signature, and 13 years of plumbing work led to{" "}
              <span className="text-primary">a new category of software.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", damping: 16, mass: 1, stiffness: 52, delay: 0.6 }}
              className="mx-auto mt-8 max-w-xl text-[15px] font-medium leading-[1.5] tracking-[-0.02em] text-white/40"
            >
              Nirmal Prince J · Founder &amp; CEO, IntegrateWise LLP · Bengaluru, India
            </motion.p>
          </div>
        </div>
      </section>

      {/* Chapter 1 */}
      <section className="arvio-section">
        <div className="mx-auto max-w-[800px]">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}>
            <div className="text-[12px] font-bold uppercase tracking-[0.2em] text-primary">Chapter 1</div>
            <h2 className="mt-3 text-[32px] font-semibold tracking-[-0.04em] leading-[1.2] sm:text-[38px]">The man who built the plumbing</h2>
            <div className="mt-8 space-y-6 text-[16px] font-medium leading-[1.8] tracking-[-0.01em] text-foreground/75">
              <blockquote className="border-l-2 border-primary pl-6 text-[17px] italic text-foreground">
                &ldquo;I spent 13 years connecting enterprise systems — telecom, finance, healthcare, retail, insurance.
                I saw every kind of integration failure there is. But the one that kept me up at night wasn&apos;t a broken API.
                It was watching smart people make the wrong decisions because their tools couldn&apos;t talk to each other.&rdquo;
              </blockquote>
              <p>
                Nirmal Prince J&apos;s career began where most software problems are invisible — in the wiring behind enterprise systems.
                As a MuleSoft Integration Architect for over 13 years, he worked across some of the most complex data environments
                on the planet: telecom networks, financial institutions, hospital systems, retail supply chains, insurance platforms.
              </p>
              <p>
                His job was to make disconnected systems speak the same language. To build the invisible infrastructure that carries
                data from one place to another without loss, without duplication, and without ambiguity.
              </p>
              <p>
                But the more systems he connected, the more clearly he saw a deeper problem — one that no integration project could solve.
                The tools were connected. The data was flowing. And yet, the people using those tools still couldn&apos;t see the full picture.
                The CRM knew one thing. The support tool knew another. The project tracker knew a third. And nobody — not the software,
                not the dashboards, not the reports — could put it all together in a way that was actually useful for the human making a decision.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Chapter 2 */}
      <section className="arvio-section bg-muted">
        <div className="mx-auto max-w-[800px]">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}>
            <div className="text-[12px] font-bold uppercase tracking-[0.2em] text-primary">Chapter 2</div>
            <h2 className="mt-3 text-[32px] font-semibold tracking-[-0.04em] leading-[1.2] sm:text-[38px]">The red account — when everything went dark</h2>

            <div className="mt-8 flex flex-wrap gap-4">
              {[
                { label: "Status", value: "RED" },
                { label: "Attrition risk", value: "100%" },
                { label: "Contract value", value: "~$8,000,000" },
              ].map(({ label, value }) => (
                <div key={label} className="rounded-lg border border-destructive/20 bg-destructive/5 px-4 py-2">
                  <div className="text-[11px] font-bold uppercase tracking-widest text-destructive/60">{label}</div>
                  <div className="text-[16px] font-bold text-destructive">{value}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 space-y-6 text-[16px] font-medium leading-[1.8] tracking-[-0.01em] text-foreground/75">
              <p>
                After more than a decade building enterprise integrations, Nirmal joined Salesforce as a Customer Success Manager
                managing MuleSoft accounts. A fellow CSM left the company. Their biggest account — worth approximately $8 million —
                landed on his desk with no warning, no handover, and no context.
              </p>
              <p>
                There was no transition document. No relationship history. No notes on stakeholder dynamics. No record of what had been
                promised, what had been delivered, or what was currently in dispute. The account had been marked Red — 100% attrition risk.
                But nobody could explain why.
              </p>
              <blockquote className="border-l-2 border-primary pl-6 text-[17px] italic text-foreground">
                &ldquo;The data existed. It was all there — in seven different places, in seven different formats, owned by seven different teams.
                But nobody could see across all of it at once. And without that view, the account was invisible.&rdquo;
              </blockquote>
              <p>
                Nirmal did what he had spent 13 years training himself to do. He became the integration layer. For weeks, he manually
                cross-referenced everything. Every support ticket against every CRM note. Every email thread against every project milestone.
                Every Slack message against every contract term.
              </p>
            </div>

            <h3 className="mt-10 text-[20px] font-semibold tracking-[-0.03em]">The two hidden signals</h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-border bg-background p-6">
                <div className="text-[12px] font-bold uppercase tracking-widest text-primary">Signal 1</div>
                <h4 className="mt-2 text-[16px] font-semibold">The unsigned contract</h4>
                <p className="mt-3 text-[14px] font-medium leading-[1.6] text-muted-foreground">
                  The $8 million contract had never actually been signed. Not by the client. Not by the vendor.
                  An untold mystery that had quietly stalled every conversation and blocked every milestone.
                  This wasn&apos;t in the CRM. It wasn&apos;t in the support tool. It lived in the gap between systems.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-background p-6">
                <div className="text-[12px] font-bold uppercase tracking-widest text-primary">Signal 2</div>
                <h4 className="mt-2 text-[16px] font-semibold">The hidden conflict</h4>
                <p className="mt-3 text-[14px] font-medium leading-[1.6] text-muted-foreground">
                  Buried deep in the records — fragments of notes, email tones, stakeholder interaction patterns —
                  was evidence of significant interpersonal conflict between key decision-makers. The kind of tension
                  that derails renewals not because the product fails, but because the relationship fractures.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Chapter 3 */}
      <section className="arvio-section">
        <div className="mx-auto max-w-[800px]">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}>
            <div className="text-[12px] font-bold uppercase tracking-[0.2em] text-primary">Chapter 3</div>
            <h2 className="mt-3 text-[32px] font-semibold tracking-[-0.04em] leading-[1.2] sm:text-[38px]">The save — $8 million back from the edge</h2>
            <div className="mt-8 space-y-6 text-[16px] font-medium leading-[1.8] tracking-[-0.01em] text-foreground/75">
              <p>
                With both signals identified, Nirmal had what he needed. He resolved the unsigned contract, navigating the
                bureaucratic and legal complexity that had quietly frozen the relationship. He addressed the interpersonal dynamics
                with the care and precision that only someone who had already mapped the full context could manage.
              </p>
              <p>
                He rebuilt the relationship from zero. Meeting by meeting. Conversation by conversation. System by system.
              </p>
              <p className="text-[18px] text-foreground font-semibold">
                When renewal time came — they renewed. The full $8 million.
              </p>
              <p>
                An account that had been written off as 100% attrition — saved. Not because a better tool surfaced the right alert.
                Because one person was willing to manually connect every piece of data across every system, find the signals that
                no single tool could see, and act on them with the full weight of human judgment.
              </p>
              <blockquote className="border-l-2 border-primary pl-6 text-[17px] italic text-foreground">
                &ldquo;I saved it. But it nearly killed me to do it by hand. And in that moment, I knew two things with absolute certainty:
                this should never require one human being to do alone. And I was the only person in a position to build the system
                that would make sure it never did again.&rdquo;
              </blockquote>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Chapter 4 */}
      <section className="arvio-section bg-muted">
        <div className="mx-auto max-w-[800px]">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}>
            <div className="text-[12px] font-bold uppercase tracking-[0.2em] text-primary">Chapter 4</div>
            <h2 className="mt-3 text-[32px] font-semibold tracking-[-0.04em] leading-[1.2] sm:text-[38px]">The birth of IntegrateWise</h2>
            <div className="mt-8 space-y-6 text-[16px] font-medium leading-[1.8] tracking-[-0.01em] text-foreground/75">
              <p>
                The Red Account recovery wasn&apos;t a whiteboard exercise or a market research report. It was a lived experience —
                a specific account, a specific crisis, a specific set of hidden signals that only became visible through weeks
                of manual integration work.
              </p>
              <p>
                Nirmal didn&apos;t set out to build another CRM, another analytics tool, or another workflow automation platform.
                He set out to automate everything he had done by hand: the cross-referencing, the signal discovery, the context building,
                the pattern recognition across disconnected systems, and the surfacing of insights that no individual tool could produce alone.
              </p>
              <p className="text-foreground font-semibold">
                He had spent 13 years building the plumbing. Now he was going to build the brain.
              </p>
            </div>

            <h3 className="mt-10 text-[20px] font-semibold tracking-[-0.03em]">What IntegrateWise actually solves</h3>
            <div className="mt-6 space-y-3">
              {[
                "Connect every data source into a single truth store — so nothing lives in a silo where it can't be seen.",
                "Normalize and enrich every data point — so signals from seven different tools can be read against each other.",
                "Surface hidden context automatically — the unsigned contract, the buried conflict, the pattern nobody noticed.",
                "Recommend action in full context — vendor goals and client goals simultaneously, never in isolation.",
                "Wait for human approval — because the highest-stakes decisions require human judgment, not automation alone.",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6, delay: i * 0.06 }}
                  className="flex items-start gap-3 rounded-xl border border-border bg-background p-4"
                >
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[12px] font-bold text-white" style={{ background: "var(--gradient-primary-icon)" }}>{i + 1}</span>
                  <span className="text-[15px] font-medium leading-[1.6] text-foreground/80">{item}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-10 rounded-xl p-6" style={{ background: "var(--gradient-primary)" }}>
              <p className="text-[17px] font-semibold leading-[1.5] text-white">
                AI that thinks in context. Actions that wait for humans.
              </p>
              <p className="mt-1 text-[15px] font-medium text-white/70">This is IntegrateWise.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="arvio-section">
        <div className="mx-auto max-w-[800px]">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}>
            <h2 className="text-[32px] font-semibold tracking-[-0.04em] leading-[1.2] sm:text-[38px]">The journey</h2>
          </motion.div>
          <div className="mt-12 space-y-0">
            {timeline.map(({ year, title, desc }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", bounce: 0.2, duration: 0.6, delay: i * 0.05 }}
                className="relative pl-8 pb-10 last:pb-0 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-border last:before:hidden"
              >
                <div className="absolute left-0 top-1 h-2.5 w-2.5 -translate-x-[calc(50%-0.5px)] rounded-full bg-primary" />
                <div className="text-[13px] font-bold tracking-[-0.02em] text-primary">{year}</div>
                <h3 className="mt-1 text-[16px] font-semibold tracking-[-0.03em]">{title}</h3>
                <p className="mt-2 text-[14px] font-medium leading-[1.6] text-muted-foreground">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing quote + CTA */}
      <section className="arvio-section" style={{ backgroundColor: "rgb(8, 7, 14)" }}>
        <div className="mx-auto max-w-[800px] text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}>
            <blockquote className="text-[28px] font-semibold leading-[1.3] tracking-[-0.04em] text-white sm:text-[36px]">
              &ldquo;We built it to save ourselves.{" "}
              <span className="text-primary">Now it saves you.</span>&rdquo;
            </blockquote>
            <p className="mt-6 text-[15px] font-medium text-white/40">
              Nirmal Prince J · Founder &amp; CEO · IntegrateWise LLP · Bengaluru, India
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-2.5 sm:flex-row">
              <Button size="lg" className="h-[42px] rounded-xl px-6 text-[15px] font-semibold" style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-button)" }} asChild>
                <Link href="/contact?intent=demo">Book a demo</Link>
              </Button>
              <Button size="lg" variant="outline" className="h-[42px] rounded-xl border-2 border-white/15 bg-transparent px-6 text-[15px] font-semibold text-white hover:bg-white/10" asChild>
                <Link href="/platform">See how it works</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
