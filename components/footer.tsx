"use client";

import Link from "next/link";
import { Linkedin, Twitter, Mail, ArrowRight } from "lucide-react";
import { SpineLogo } from "@/components/spine-logo";

const footerColumns: {
  heading: string;
  links: { name: string; href: string; external?: boolean }[];
}[] = [
  {
    heading: "Platform",
    links: [
      { name: "The Adaptive Spine", href: "/platform/the-adaptive-spine" },
      { name: "How it Works", href: "/platform/how-it-works" },
      { name: "Integrations", href: "/platform/integrations" },
      { name: "Security", href: "/platform/security" },
      { name: "Infrastructure", href: "/platform/infrastructure" },
    ],
  },
  {
    heading: "Product",
    links: [
      { name: "The Workspace", href: "/product/the-adaptive-workspace" },
      { name: "Cognitive Layer", href: "/product/how-it-works" },
      { name: "The Twin", href: "/ai" },
      { name: "Approval Gate", href: "/product/approval-gate-twin" },
      { name: "Pricing", href: "/pricing" },
    ],
  },
  {
    heading: "Solutions",
    links: [
      { name: "Account Success", href: "/account-success" },
      { name: "Business Ops", href: "/business-ops" },
      { name: "Personal Ops", href: "/personal-ops" },
      { name: "By Industry", href: "/solutions" },
      { name: "By Role", href: "/solutions" },
    ],
  },
  {
    heading: "Company",
    links: [
      { name: "Why IntegrateWise", href: "/why" },
      { name: "About", href: "/about" },
      { name: "Blog", href: "/blog" },
      { name: "Resources", href: "/resources" },
      { name: "Campaign Gallery", href: "/resources/campaign" },
      { name: "Contact", href: "/contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer style={{ background: "#05070A" }}>
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">

        <div className="border-t border-white/[0.06] pt-16 pb-12">
          <div className="grid gap-12 lg:grid-cols-[320px_1fr]">

            <div>
              <Link
                href="/"
                className="inline-flex items-center gap-2.5 rounded-lg focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-white/40"
              >
                <SpineLogo className="h-8 w-8 shrink-0" variant="on-dark" />
                <span className="text-[18px] font-semibold tracking-[-0.04em] text-white">
                  Integrate<span className="text-primary">Wise</span>
                </span>
              </Link>
              <p className="mt-5 max-w-[280px] text-[14px] font-medium leading-[1.7] text-white/40">
                A Knowledge Workspace empowered by AI and the Spine. Your tools connected. Your data unified. You decide what happens.
              </p>

              <div className="mt-6 flex items-center gap-3">
                <Link
                  href="https://twitter.com/integratewise"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08] text-white/40 transition-all hover:border-white/20 hover:text-white"
                  style={{ background: "rgba(255,255,255,0.03)" }}
                  aria-label="Twitter"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter className="h-4 w-4" />
                </Link>
                <Link
                  href="https://linkedin.com/company/integratewise"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08] text-white/40 transition-all hover:border-white/20 hover:text-white"
                  style={{ background: "rgba(255,255,255,0.03)" }}
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-4 w-4" />
                </Link>
                <a
                  href="mailto:connect@integratewise.ai"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08] text-white/40 transition-all hover:border-white/20 hover:text-white"
                  style={{ background: "rgba(255,255,255,0.03)" }}
                  aria-label="Email"
                >
                  <Mail className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
              {footerColumns.map(({ heading, links }) => (
                <div key={heading}>
                  <h3 className="mb-5 text-[12px] font-bold uppercase tracking-[0.12em] text-white/50">
                    {heading}
                  </h3>
                  <ul className="space-y-3">
                    {links.map((link) => (
                      <li key={link.name}>
                        {link.external ? (
                          <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[13px] font-medium text-white/40 transition-colors hover:text-white"
                          >
                            {link.name}
                          </a>
                        ) : (
                          <Link
                            href={link.href}
                            className="text-[13px] font-medium text-white/40 transition-colors hover:text-white"
                          >
                            {link.name}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          className="rounded-xl border border-white/[0.06] p-6 sm:flex sm:items-center sm:justify-between sm:gap-8"
          style={{
            background: "rgba(255,255,255,0.02)",
            backdropFilter: "blur(12px)",
          }}
        >
          <div>
            <p className="text-[15px] font-semibold text-white">
              Stay in the loop
            </p>
            <p className="mt-1 text-[13px] font-medium text-white/35">
              Product updates, new connectors, and insights. No spam.
            </p>
          </div>
          <form
            action="https://formsubmit.co/connect@integratewise.ai"
            method="POST"
            className="mt-4 flex gap-2 sm:mt-0 sm:shrink-0"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value="Newsletter subscription" />
            <input
              type="email"
              name="email"
              placeholder="you@company.com"
              required
              className="h-10 w-full rounded-lg border border-white/[0.08] bg-white/[0.04] px-3.5 text-[13px] font-medium text-white placeholder:text-white/25 outline-none focus:border-primary/50 transition-colors sm:w-56"
            />
            <button
              type="submit"
              className="h-10 shrink-0 rounded-lg px-5 text-[13px] font-semibold text-white transition-all hover:opacity-90"
              style={{ background: "var(--gradient-primary)" }}
            >
              Subscribe
            </button>
          </form>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] py-8 sm:flex-row">
          <p className="text-[12px] font-medium text-white/25">
            &copy; 2026 IntegrateWise LLP. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-[12px] font-medium text-white/25 transition-colors hover:text-white/60">
              Privacy
            </Link>
            <Link href="/terms" className="text-[12px] font-medium text-white/25 transition-colors hover:text-white/60">
              Terms
            </Link>
            <Link href="/security" className="text-[12px] font-medium text-white/25 transition-colors hover:text-white/60">
              Security
            </Link>
            <a
              href="https://docs.integratewise.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[12px] font-medium text-white/25 transition-colors hover:text-white/60"
            >
              Docs
            </a>
            <a
              href="https://changelog.integratewise.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[12px] font-medium text-white/25 transition-colors hover:text-white/60"
            >
              Changelog
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
