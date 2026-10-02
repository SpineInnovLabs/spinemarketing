"use client";

import { motion } from "framer-motion";
import { PageHero } from "@/components/marketing/page-hero";
import { AppCluster } from "@/components/marketing/hero-subjects";
import { AppLogo } from "@/components/marketing/app-logo";
import { EnterpriseButton } from "@/components/marketing/enterprise";
import { INTEGRATION_KIND_MARKS } from "@/lib/integration-nav";
import { INTEGRATION_CATALOG, TOTAL_CONNECTORS } from "@/lib/integration-logos";

const fade = (delay = 0) => ({
  initial: { y: 10 },
  whileInView: { y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.4, delay },
});

export function IntegrationsContent() {
  return (
    <>
      <PageHero
        badge="Integrations"
        headline="Your tools. Shared context."
        subhead="Connect the systems your team already uses. Source systems stay authoritative. SpineWorkspace assembles governed business context for people and their Twin."
        primaryCta={{ label: "Book a demo", href: "/contact?intent=demo" }}
        secondaryCta={{ label: "Read the docs", href: "https://docs.spineworkspace.com/" }}
        art={<AppCluster />}
      />

      <section className="border-y border-[#D9E4EF] bg-[#F3F6F9] py-20 md:py-24">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-[28px] font-semibold tracking-[-0.03em] text-[#032D60]">One context-assembly example</h2>
            <p className="mt-4 text-[16px] leading-[1.65] text-[#33465B]">
              A customer onboarding note in mail, a ticket, and a CRM record can be read together. Twin proposes the next step. A person reviews it. Nothing here is a live install count.
            </p>
          </div>
          <div className="mx-auto mt-8 max-w-3xl rounded-xl border border-[#D9E4EF] bg-white p-5">
            <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#526479]">Example workspace · demonstration data</p>
            <p className="mt-2 text-[15px] font-semibold text-[#032D60]">Customer onboarding · Awaiting review</p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
          <motion.div {...fade(0)} className="mx-auto max-w-2xl text-center">
            <h2 id="full-catalog" className="text-[28px] font-semibold tracking-[-0.03em] text-[#032D60]">Full catalog</h2>
            <p className="mt-4 text-[15px] text-[#33465B]">
              {TOTAL_CONNECTORS} connectors across {INTEGRATION_CATALOG.length} categories, plus the connection kinds below. Marks only. Nothing here is an install count.
            </p>
          </motion.div>

          <div className="mt-12 space-y-10">
            <div>
              <h3 className="mb-4 text-[13px] font-bold uppercase tracking-[0.08em] text-[#0176D3]">Connection kinds</h3>
              <ul className="flex flex-wrap gap-2" aria-label="Connection kinds">
                {INTEGRATION_KIND_MARKS.map((kind) => {
                  const Icon = kind.icon;
                  return (
                    <li key={kind.name}>
                      <span className="inline-flex items-center gap-2 rounded-xl border border-[#D9E4EF] bg-[#F3F6F9] px-3 py-2 text-[13px] font-medium text-[#032D60]">
                        <Icon className="h-5 w-5 shrink-0 text-[#0176D3]" strokeWidth={1.75} aria-hidden />
                        {kind.name}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
            {INTEGRATION_CATALOG.map(({ category, connectors }, catIndex) => (
              <motion.div key={category} {...fade(catIndex * 0.04)}>
                <div className="mb-4 flex items-center gap-3">
                  <h3 className="text-[13px] font-bold uppercase tracking-[0.08em] text-[#0176D3]">{category}</h3>
                  <span className="text-[12px] font-semibold text-[#706E6B]">{connectors.length}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {connectors.map((name) => (
                    <span
                      key={name}
                      className="inline-flex items-center gap-2 rounded-md border border-[#E5E5E5] bg-white px-3 py-2 text-[13px] font-medium text-[#032D60] shadow-[0_1px_2px_rgba(0,0,0,0.03)] transition-colors hover:border-[#0176D3]"
                    >
                      <AppLogo name={name} size="sm" bare showLabel />
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            {...fade(0.1)}
            className="mt-12 rounded-md border border-[#E5E5E5] bg-[#F3F6F9] p-6"
          >
            <h3 className="text-[13px] font-bold uppercase tracking-[0.08em] text-[#032D60]">
              India & UAE connectors — coming soon
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {["Tally", "Razorpay", "PhonePe", "Vyapar", "Khatabook", "Shiprocket", "Zoho Books", "PayTabs", "Network International", "Noon Seller", "Aramex"].map(
                (name) => (
                  <span
                    key={name}
                    className="inline-flex items-center gap-2 rounded-md border border-dashed border-[#C9C9C9] bg-white/60 px-3 py-2 text-[13px] font-medium text-[#706E6B]"
                  >
                    <AppLogo name={name} size="sm" bare showLabel />
                  </span>
                )
              )}
            </div>
          </motion.div>

          <motion.div {...fade(0.15)} className="mt-12 text-center">
            <div className="mx-auto max-w-2xl rounded-md border border-[#E5E5E5] bg-white p-8 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
              <h3 className="text-[20px] font-semibold tracking-[-0.02em] text-[#032D60]">Connect your stack in minutes</h3>
              <p className="mt-2 text-[15px] leading-[1.5] text-[#444]">
                OAuth setup per app. No engineering needed. Custom connectors available.
              </p>
              <div className="mt-6">
                <EnterpriseButton href="/contact?intent=demo">See all integrations in a demo</EnterpriseButton>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
