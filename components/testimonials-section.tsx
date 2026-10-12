"use client";

import { motion } from "framer-motion";

const defaultTestimonials = [
  {
    quote: "A delivery team carries dependencies and prior decisions into an operational handoff.",
    name: "Illustrative scenario",
    role: "Operations team",
    company: "Not a customer quote",
    avatar: "Ex",
  },
  {
    quote: "A finance lead compares an invoice exception with its commitments and supporting evidence.",
    name: "Illustrative scenario",
    role: "Finance team",
    company: "Not a customer quote",
    avatar: "Ex",
  },
  {
    quote: "An operator sees the evidence behind a suggestion and decides whether it stands.",
    name: "Illustrative scenario",
    role: "Operator",
    company: "Not a customer quote",
    avatar: "Ex",
  },
  {
    quote: "A leader checks that consequential work still waits for a person.",
    name: "Illustrative scenario",
    role: "Leader",
    company: "Not a customer quote",
    avatar: "Ex",
  },
];

export function TestimonialsSection({
  testimonials = defaultTestimonials,
  heading = "Illustrative scenarios",
  tag = "Demonstration, not customer quotes",
}: {
  testimonials?: typeof defaultTestimonials;
  heading?: string;
  tag?: string;
}) {
  return (
    <section className="relative overflow-hidden border-t border-[#E5E5E5] bg-white py-20 md:py-28">
      <div className="relative mx-auto max-w-[1100px] px-6">
        <motion.div
          initial={{ y: 10 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ type: "spring", damping: 18, stiffness: 70 }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <p className="mb-3 text-[12px] font-bold uppercase tracking-[0.08em] text-[#0176D3]">
            {tag}
          </p>
          <h2 className="text-[length:min(32px,var(--marketing-heading-size))] font-semibold leading-[1.15] tracking-[-0.03em] text-[#032D60] sm:text-[length:min(40px,var(--marketing-heading-size))]">
            {heading}
          </h2>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ y: 10 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ type: "spring", damping: 18, stiffness: 70, delay: i * 0.08 }}
              className="rounded-md border border-[#E5E5E5] bg-white p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
            >
              <p className="text-[12px] font-bold uppercase tracking-[0.06em] text-[#526479]">Illustrative scenario</p>

              <p className="text-[15px] font-medium leading-[1.7] text-[#444]">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="mt-6 flex items-center gap-3 border-t border-[#E5E5E5] pt-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F3F6F9] text-[13px] font-bold text-[#032D60]">
                  {t.avatar}
                </div>
                <div>
                  <div className="text-[14px] font-semibold text-[#032D60]">{t.name}</div>
                  <div className="text-[12px] font-medium text-[#706E6B]">
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
