"use client";

import { motion } from "framer-motion";
import { Marquee } from "@/components/ui/marquee";
import { AppLogo } from "@/components/marketing/app-logo";
import { EnterpriseButton } from "@/components/marketing/enterprise";
import { INTEGRATION_CATALOG, TOTAL_CONNECTORS, FEATURED_INTEGRATION_LOGOS } from "@/lib/integration-logos";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { type: "spring" as const, damping: 20, stiffness: 60, delay },
});

export function IntegrationsContent() {
  return (
    <>
      <section className="border-b border-[#E5E5E5] bg-white pt-[120px] pb-16">
        <div className="mx-auto max-w-[880px] px-6 text-center md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", damping: 16, stiffness: 52, delay: 0.1 }}
            className="mb-5 inline-flex items-center gap-2 rounded-md border border-[#E5E5E5] bg-[#F3F6F9] px-3 py-1 text-[12px] font-semibold uppercase tracking-[0.06em] text-[#032D60]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#0176D3]" />
            Integrations
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", damping: 16, stiffness: 52, delay: 0.2 }}
            className="text-[36px] font-semibold leading-[1.1] tracking-[-0.03em] text-[#032D60] sm:text-[48px]"
          >
            {TOTAL_CONNECTORS}+ integrations. One Spine Fabric.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", damping: 16, stiffness: 52, delay: 0.35 }}
            className="mx-auto mt-4 max-w-2xl text-[17px] leading-[1.6] text-[#444]"
          >
            Connect via OAuth in minutes — no migration, no engineering team needed. Every app flows into governed business context.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mx-auto mt-12 max-w-[1120px] px-6 md:px-8"
        >
          <Marquee pauseOnHover className="[--duration:38s] [--gap:1rem]">
            {FEATURED_INTEGRATION_LOGOS.map((logo) => (
              <AppLogo key={logo.id} name={logo.name} src={logo.src} size="md" showLabel animate />
            ))}
          </Marquee>
        </motion.div>
      </section>

      <section className="border-b border-[#E5E5E5] bg-[#F3F6F9] py-16">
        <div className="mx-auto max-w-[900px] px-6 md:px-8">
          <motion.div {...fade(0)} className="mx-auto max-w-2xl text-center">
            <h2 className="text-[28px] font-semibold tracking-[-0.03em] text-[#032D60]">
              Every app becomes part of the picture
            </h2>
            <p className="mt-4 text-[16px] leading-[1.65] text-[#444]">
              Connected apps flow into Entity 360. The Twin reads it all and surfaces insights for your approval.
            </p>
          </motion.div>
          <div className="mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-3">
            {[
              { label: "Truth", desc: "Structured records sync as Spine entities." },
              { label: "Context", desc: "Emails, chats, and docs enrich each entity." },
              { label: "Session Summaries", desc: "Only approved AI outputs become knowledge." },
            ].map(({ label, desc }, i) => (
              <motion.div
                key={label}
                {...fade(i * 0.08)}
                className="rounded-md border border-[#E5E5E5] bg-white p-6 text-center shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-shadow hover:shadow-[0_4px_12px_rgba(1,118,211,0.06)]"
              >
                <h3 className="text-[13px] font-bold uppercase tracking-[0.08em] text-[#0176D3]">{label}</h3>
                <p className="mt-2 text-[14px] leading-[1.5] text-[#444]">{desc}</p>
              </motion.div>
            ))}
          </div>
          <motion.p {...fade(0.2)} className="mx-auto mt-6 max-w-xl text-center text-[14px] font-semibold text-[#032D60]">
            Connect once. Spine Fabric keeps everything aligned.
          </motion.p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-[1100px] px-6 md:px-8">
          <motion.div {...fade(0)} className="mx-auto max-w-2xl text-center">
            <h2 className="text-[28px] font-semibold tracking-[-0.03em] text-[#032D60]">Full catalog</h2>
            <p className="mt-4 text-[15px] text-[#444]">
              {TOTAL_CONNECTORS} connectors across {INTEGRATION_CATALOG.length} categories.
            </p>
          </motion.div>

          <div className="mt-12 space-y-10">
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
                      <AppLogo name={name} size="sm" bare />
                      {name}
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
                    <AppLogo name={name} size="sm" bare />
                    {name}
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
