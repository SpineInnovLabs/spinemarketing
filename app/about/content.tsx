"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { KpiBlock } from "@/components/marketing/enterprise";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 } as const,
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true, margin: "-80px" },
  transition: { type: "spring" as const, damping: 18, stiffness: 70, delay },
});

const timeline = [
  { year: "2014", title: "Soft Dev", desc: "Started in software development. Learning the craft of building systems from scratch." },
  { year: "2018", title: "Integration Dev", desc: "Moved into enterprise integration. Wiring systems across five industries." },
  { year: "Expert", title: "MuleSoft Architect", desc: "India's leading MuleSoft architect. API-led connectivity. 13+ years wiring enterprise systems." },
  { year: "CSM Era", title: "Customer Success at Salesforce", desc: "MuleSoft enterprise CSM. Saw integration failures at the human layer." },
  { year: "The Crisis", title: "The Red Account", desc: "$8M account at 100% attrition risk. Zero handover." },
  { year: "The Discovery", title: "Two Hidden Signals", desc: "Unsigned contract. Hidden conflicts. Invisible to every dashboard." },
  { year: "The Save", title: "$8M Renewed", desc: "Both signals resolved. Full renewal. Account saved." },
  { year: "2025", title: "Founded Spine InnovLabs", desc: "Built in Bengaluru. Automates what was done manually." },
  { year: "2026", title: "Knowledge Workspace over Spine Fabric", desc: "Workspace + Twin. Three data ecosystems. You stay in control." },
];

function SectionBlock({
  label,
  title,
  children,
  variant = "white",
}: {
  label?: string;
  title: string;
  children: React.ReactNode;
  variant?: "white" | "muted";
}) {
  const bg = variant === "muted" ? "bg-[#F3F6F9]" : "bg-white";
  return (
    <section className={`border-t border-[#E5E5E5] py-20 md:py-28 ${bg}`}>
      <div className="mx-auto max-w-[800px] px-6">
        <motion.div {...fade(0)}>
          {label && (
            <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#0176D3]">{label}</p>
          )}
          <h2 className="mt-3 text-[32px] font-semibold tracking-[-0.03em] leading-[1.15] text-[#032D60] sm:text-[36px]">
            {title}
          </h2>
          <div className="mt-6">{children}</div>
        </motion.div>
      </div>
    </section>
  );
}

export function AboutContent() {
  return (
    <>
      <section className="border-b border-[#E5E5E5] bg-white pt-[120px] pb-16">
        <div className="mx-auto max-w-[900px] px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", damping: 16, stiffness: 52, delay: 0.1 }}
            className="mb-6 inline-flex items-center gap-2 rounded-md border border-[#E5E5E5] bg-[#F3F6F9] px-3 py-1 text-[12px] font-semibold uppercase tracking-[0.06em] text-[#032D60]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#0176D3]" />
            About
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", damping: 16, stiffness: 52, delay: 0.2 }}
            className="text-[40px] font-semibold leading-[1.1] tracking-[-0.03em] text-[#032D60] sm:text-[48px]"
          >
            We&apos;re building the workspace around{" "}
            <span className="text-[#0176D3]">the business.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", damping: 16, stiffness: 52, delay: 0.35 }}
            className="mx-auto mt-4 max-w-2xl text-[16px] leading-[1.7] text-[#444]"
          >
            Spine InnovLabs exists because modern work is fragmented across software and AI interfaces—and that fragmentation costs real outcomes.
          </motion.p>
        </div>
      </section>

      <section className="border-t border-[#E5E5E5] bg-[#F3F6F9] py-20 md:py-28">
        <div className="mx-auto max-w-[800px] px-6">
          <motion.div {...fade(0)} className="space-y-12">
            <div>
              <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#0176D3]">Origin</p>
              <h2 className="mt-3 text-[28px] font-semibold tracking-[-0.03em] text-[#032D60]">Fragmented tools. Cold AI. Lost context.</h2>
              <p className="mt-4 text-[16px] leading-[1.7] text-[#444]">
                Teams jump between systems. AI answers prompts without business memory. Every handoff rebuilds the story from scratch.
              </p>
            </div>
            <div>
              <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#0176D3]">Belief</p>
              <h2 className="mt-3 text-[28px] font-semibold tracking-[-0.03em] text-[#032D60]">AI should operate with context, boundaries, and accountability.</h2>
            </div>
            <div>
              <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#0176D3]">Mission</p>
              <h2 className="mt-3 text-[28px] font-semibold tracking-[-0.03em] text-[#032D60]">Adaptive work environments on shared business reality.</h2>
              <p className="mt-4 text-[16px] leading-[1.7] text-[#444]">
                Humans and AI should work toward the same goals using governed business context—not disconnected chat interfaces.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <SectionBlock label="Founder story" title="The architect who built the data fabric">
        <p className="mb-6 text-[12px] font-semibold uppercase tracking-[0.08em] text-[#706E6B]">
          Illustrative origin story — not a customer case study
        </p>
        <blockquote className="border-l-2 border-[#0176D3] pl-6 text-[17px] italic text-[#444]">
          &ldquo;The thing that kept me up at night wasn&apos;t a broken API. It was watching smart people make the wrong decisions because their tools couldn&apos;t talk to each other.&rdquo;
        </blockquote>
        <div className="mt-6 space-y-4 text-[16px] leading-[1.7] text-[#444]">
          <p>13 years wiring enterprise systems. His job: make disconnected tools speak the same language.</p>
          <p>The tools were connected. The data flowed. But nobody could assemble it for the human making the decision.</p>
        </div>
      </SectionBlock>

      <SectionBlock label="Chapter 2" title="The red account — when everything went dark" variant="muted">
        <div className="grid gap-4 sm:grid-cols-3">
          <KpiBlock label="Status" value="RED" detail="Account flagged at risk" />
          <KpiBlock label="Attrition risk" value="100%" detail="Renewal in jeopardy" />
          <KpiBlock label="Contract value" value="~$8M" detail="Annual contract at stake" />
        </div>
        <div className="mt-8 space-y-4 text-[16px] leading-[1.7] text-[#444]">
          <p>A fellow CSM left. Their biggest account — ~$8M — landed on his desk. No handover. No context.</p>
          <p>Marked Red. 100% attrition risk. Nobody could explain why.</p>
          <blockquote className="border-l-2 border-[#0176D3] pl-6 text-[17px] italic text-[#444]">
            &ldquo;The data existed — in seven different places, seven formats, owned by seven teams. Nobody could see across all of it at once.&rdquo;
          </blockquote>
          <p>He became the integration layer. Weeks of cross-referencing tickets, CRM notes, emails, and Slack against contract terms.</p>
        </div>
        <h3 className="mt-10 text-[20px] font-semibold text-[#032D60]">The two hidden signals</h3>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {[
            { signal: "Signal 1", title: "The unsigned contract", desc: "The $8M contract was never signed. It stalled everything — invisible to any single system." },
            { signal: "Signal 2", title: "The hidden conflict", desc: "Interpersonal conflict between decision-makers. Buried in fragments. The kind of tension that derails renewals." },
          ].map(({ signal, title, desc }) => (
            <div key={signal} className="rounded-md border border-[#E5E5E5] bg-white p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
              <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#0176D3]">{signal}</p>
              <h4 className="mt-2 text-[16px] font-semibold text-[#032D60]">{title}</h4>
              <p className="mt-2 text-[14px] leading-[1.6] text-[#444]">{desc}</p>
            </div>
          ))}
        </div>
      </SectionBlock>

      <SectionBlock label="Chapter 3" title="The save — $8 million back from the edge">
        <div className="space-y-4 text-[16px] leading-[1.7] text-[#444]">
          <p>Both signals identified. Contract resolved. Relationship rebuilt from zero.</p>
          <p className="text-[18px] font-semibold text-[#032D60]">When renewal time came — they renewed. The full $8 million.</p>
          <p>Written off as lost. Saved — because one person manually connected every signal.</p>
          <blockquote className="border-l-2 border-[#0176D3] pl-6 text-[17px] italic text-[#444]">
            &ldquo;I saved it. But it nearly killed me to do it by hand. That&apos;s when I knew: this should never require one person to do alone.&rdquo;
          </blockquote>
        </div>
      </SectionBlock>

      <SectionBlock label="Chapter 4" title="The birth of Spine InnovLabs" variant="muted">
        <div className="space-y-4 text-[16px] leading-[1.7] text-[#444]">
          <p>Not a whiteboard exercise. A lived experience — signals visible only through manual integration.</p>
          <p>He set out to automate what he did by hand: cross-referencing, signal discovery, context building.</p>
          <p className="font-semibold text-[#032D60]">He had spent 13 years building integration layers. Now he was going to build the intelligence layer on Spine Fabric.</p>
        </div>
        <h3 className="mt-10 text-[20px] font-semibold text-[#032D60]">What Spine InnovLabs actually solves</h3>
        <div className="mt-6 space-y-3">
          {[
            "Connect every app into Spine Fabric — one source of truth.",
            "Three data ecosystems — Truth, Context, AI Sessions — merge into Entity 360.",
            "The cognitive loop: Think. Act. Govern. Repeat. Adjust.",
            "AI thinks. You approve or deny. AI works. Knowledge compounds.",
            "Human approval required before anything executes.",
          ].map((item, i) => (
            <motion.div
              key={i}
              {...fade(i * 0.06)}
              className="flex items-start gap-3 rounded-md border border-[#E5E5E5] bg-white p-4"
            >
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0176D3]/10 text-[12px] font-bold text-[#0176D3]">
                {i + 1}
              </span>
              <span className="text-[15px] leading-[1.6] text-[#444]">{item}</span>
            </motion.div>
          ))}
        </div>
        <div className="mt-10 rounded-md border border-[#0176D3]/20 bg-[#032D60] p-6">
          <p className="text-[17px] font-semibold leading-[1.5] text-white">
            A Knowledge Workspace over Spine Fabric — the Workspace is where you work, the Twin is where AI serves you.
          </p>
          <p className="mt-1 text-[15px] text-white/70">This is Spine InnovLabs.</p>
        </div>
      </SectionBlock>

      <section className="border-t border-[#E5E5E5] bg-white py-20 md:py-28">
        <div className="mx-auto max-w-[800px] px-6">
          <motion.div {...fade(0)}>
            <h2 className="text-[32px] font-semibold tracking-[-0.03em] text-[#032D60] sm:text-[36px]">The journey</h2>
          </motion.div>
          <div className="mt-12 space-y-0">
            {timeline.map(({ year, title, desc }, i) => (
              <motion.div
                key={i}
                {...fade(i * 0.05)}
                className="relative pl-8 pb-10 last:pb-0 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-[#E5E5E5] last:before:hidden"
              >
                <div className="absolute left-0 top-1 h-2.5 w-2.5 -translate-x-[calc(50%-0.5px)] rounded-full bg-[#0176D3]" />
                <div className="text-[13px] font-bold text-[#0176D3]">{year}</div>
                <h3 className="mt-1 text-[16px] font-semibold text-[#032D60]">{title}</h3>
                <p className="mt-2 text-[14px] leading-[1.6] text-[#706E6B]">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[#E5E5E5] bg-[#F3F6F9] py-16">
        <div className="mx-auto max-w-[800px] px-6">
          <motion.div {...fade(0)}>
            <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.08em] text-[#706E6B]">
              Illustrative origin story — not a customer quote
            </p>
            <blockquote className="border-l-2 border-[#0176D3] pl-6 text-[18px] italic leading-[1.7] text-[#444]">
              &ldquo;The Spine connected support, product usage, billing, and relationship data across 12 systems. The team intervened early and saved an $8M customer.&rdquo;
            </blockquote>
            <div className="mt-10 grid grid-cols-3 gap-4">
              {[
                { stat: "$8M", label: "Customer protected" },
                { stat: "12", label: "Systems connected" },
                { stat: "3", label: "Data ecosystems" },
              ].map(({ stat, label }) => (
                <KpiBlock key={label} label={label} value={stat} detail="" />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-t border-[#E5E5E5] bg-white py-20">
        <div className="mx-auto max-w-[800px] px-6 text-center">
          <motion.div {...fade(0)}>
            <blockquote className="text-[28px] font-semibold leading-[1.15] tracking-[-0.03em] text-[#032D60] sm:text-[36px]">
              &ldquo;We built it to save ourselves.{" "}
              <span className="text-[#0176D3]">Now it saves you.</span>&rdquo;
            </blockquote>
            <p className="mt-6 text-[15px] text-[#706E6B]">
              Nirmal Prince J &middot; Founder &amp; CEO &middot; Spine InnovLabs &middot; Bengaluru, India
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/contact?intent=demo"
                className="inline-flex h-10 items-center gap-2 rounded-md bg-[#0176D3] px-5 text-[14px] font-semibold text-white hover:bg-[#0B5CAB]"
              >
                Book a demo <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/platform"
                className="inline-flex h-10 items-center rounded-md border border-[#C9C9C9] bg-white px-5 text-[14px] font-semibold text-[#032D60] hover:bg-[#F3F3F3]"
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
