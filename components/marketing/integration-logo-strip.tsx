"use client";

import { motion } from "framer-motion";
import { Marquee } from "@/components/ui/marquee";
import { AppLogo } from "./app-logo";
import type { IntegrationLogo } from "@/lib/integration-logos";
import { FEATURED_INTEGRATION_LOGOS } from "@/lib/integration-logos";

type IntegrationLogoStripProps = {
  logos?: IntegrationLogo[];
  title?: string;
  subtitle?: string;
  className?: string;
  variant?: "default" | "muted";
};

export function IntegrationLogoStrip({
  logos = FEATURED_INTEGRATION_LOGOS,
  title = "Works with the tools you already run",
  subtitle,
  className = "",
  variant = "default",
}: IntegrationLogoStripProps) {
  const bg = variant === "muted" ? "bg-[#F3F6F9]" : "bg-white";

  return (
    <section className={`border-y border-[#E5E5E5] py-10 ${bg} ${className}`}>
      <div className="mx-auto max-w-[1120px] px-6 md:px-8">
        {(title || subtitle) && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ type: "spring", damping: 20, stiffness: 60 }}
            className="mb-6 text-center"
          >
            {title && <p className="text-[13px] font-bold uppercase tracking-[0.08em] text-[#032D60]">{title}</p>}
            {subtitle && <p className="mt-1 text-[14px] text-[#444]">{subtitle}</p>}
          </motion.div>
        )}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          <Marquee pauseOnHover className="[--duration:42s] [--gap:1rem]">
            {logos.map((logo) => (
              <AppLogo key={logo.id} name={logo.name} src={logo.src} size="md" showLabel animate />
            ))}
          </Marquee>
        </motion.div>
      </div>
    </section>
  );
}
