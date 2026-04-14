"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const defaultTestimonials = [
  {
    quote: "We went from 7 dashboards to one screen. The Spine connected everything our team needed.",
    name: "Priya Sharma",
    role: "VP Customer Success",
    company: "TechScale India",
    avatar: "PS",
  },
  {
    quote: "The Twin caught a renewal risk 45 days before we would have seen it. That's real intelligence.",
    name: "David Chen",
    role: "Head of RevOps",
    company: "CloudFirst",
    avatar: "DC",
  },
  {
    quote: "Finally — AI that shows its evidence and waits for my approval. No black-box magic.",
    name: "Sarah Mitchell",
    role: "COO",
    company: "ServicePro",
    avatar: "SM",
  },
  {
    quote: "The governance layer alone justified the investment. Every action is auditable.",
    name: "Arjun Patel",
    role: "CTO",
    company: "FinanceFlow",
    avatar: "AP",
  },
];

export function TestimonialsSection({
  testimonials = defaultTestimonials,
  heading = "What teams are saying.",
  tag = "Testimonials",
}: {
  testimonials?: typeof defaultTestimonials;
  heading?: string;
  tag?: string;
}) {
  return (
    <section className="relative overflow-hidden py-32 md:py-40" style={{ background: "#05070A" }}>
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute right-[15%] top-[20%] h-[500px] w-[600px] rounded-full opacity-[0.07] blur-[140px]"
          style={{ background: "radial-gradient(circle, rgba(139,92,246,0.4), transparent 70%)" }}
        />
      </div>
      <div className="relative mx-auto max-w-[1100px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ type: "spring", damping: 18, stiffness: 70 }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <p className="mb-4 text-[12px] font-bold uppercase tracking-[0.14em] text-primary">
            {tag}
          </p>
          <h2 className="text-[40px] font-semibold leading-[1.1] tracking-[-0.04em] text-white sm:text-[52px]">
            {heading}
          </h2>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ type: "spring", damping: 18, stiffness: 70, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.06] p-6 transition-all hover:border-white/[0.12] hover:-translate-y-0.5"
              style={{
                background: "rgba(255,255,255,0.02)",
                backdropFilter: "blur(12px)",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)",
              }}
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

              <div className="mb-4 flex gap-0.5">
                {[...Array(5)].map((_, si) => (
                  <Star key={si} className="h-3.5 w-3.5 fill-primary/80 text-primary/80" />
                ))}
              </div>

              <p className="text-[15px] font-medium leading-[1.7] text-white/60">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="mt-6 flex items-center gap-3 border-t border-white/[0.06] pt-5">
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-[13px] font-bold text-white"
                  style={{ background: "linear-gradient(135deg, rgba(52,211,153,0.3), rgba(139,92,246,0.3))" }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="text-[14px] font-semibold text-white">{t.name}</div>
                  <div className="text-[12px] font-medium text-white/35">
                    {t.role} · {t.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
