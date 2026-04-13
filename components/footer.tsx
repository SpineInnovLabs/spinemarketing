import Link from "next/link";
import { Linkedin, Twitter } from "lucide-react";
import { SpineLogo } from "@/components/spine-logo";

const footerColumns: {
  heading: string;
  links: { name: string; href: string; external?: boolean }[];
}[] = [
  {
    heading: "Solutions",
    links: [
      { name: "Account Success", href: "/account-success" },
      { name: "Business Ops", href: "/business-ops" },
      { name: "Personal Ops", href: "/personal-ops" },
      { name: "View all solutions →", href: "/solutions" },
    ],
  },
  {
    heading: "By Industry",
    links: [
      { name: "SaaS", href: "/solutions/saas" },
      { name: "Services & Agencies", href: "/solutions/services" },
      { name: "Manufacturing & Trade", href: "/solutions/manufacturing" },
      { name: "Retail & Ecommerce", href: "/solutions/retail" },
      { name: "Professional Services", href: "/solutions/professional-services" },
      { name: "Finance", href: "/solutions/finance" },
    ],
  },
  {
    heading: "By Role",
    links: [
      { name: "Customer Success & TAMs", href: "/solutions/customer-success" },
      { name: "Founders & CXOs", href: "/solutions/founders" },
      { name: "Rev / Business Ops", href: "/solutions/revops" },
      { name: "Operations & Delivery", href: "/solutions/operations" },
      { name: "Finance Leaders", href: "/solutions/finance-leaders" },
      { name: "Individual Professionals", href: "/solutions/individual" },
    ],
  },
  {
    heading: "Product",
    links: [
      { name: "How It Works", href: "/platform" },
      { name: "Spine & Intelligence", href: "/spine" },
      { name: "The Twin", href: "/ai" },
      { name: "Integrations", href: "/integrations" },
      { name: "Security", href: "/security" },
      { name: "Pricing", href: "/pricing" },
    ],
  },
  {
    heading: "Company",
    links: [
      { name: "Why IntegrateWise", href: "/why" },
      { name: "About", href: "/about" },
      { name: "Resources", href: "/resources" },
      { name: "Blog", href: "/blog" },
      { name: "Contact", href: "/contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(8, 7, 14)" }}>
      <div className="mx-auto max-w-[1200px] px-6 pt-16 pb-10 md:px-10">

        {/* Top row: brand + columns */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[260px_repeat(5,1fr)]">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              href="/"
              className="flex items-center gap-2.5 rounded-lg focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-white/40"
            >
              <SpineLogo className="h-8 w-8 shrink-0" variant="on-dark" />
              <span className="text-[17px] font-semibold tracking-[-0.04em] text-white">
                Integrate<span className="text-primary">Wise</span>
              </span>
            </Link>
            <p className="mt-5 max-w-[220px] text-[13px] font-medium leading-[1.6] text-white/40">
              The Knowledge Workspace over the Spine and empowered by AI.
              <br /><br /><br />
              AI Think in Context and Waits for your Approval.
            </p>
            <a
              href="mailto:connect@integratewise.ai"
              className="mt-4 block text-[13px] font-medium text-white/40 transition-colors hover:text-white"
            >
              connect@integratewise.ai
            </a>
            <div className="mt-5 flex items-center gap-4">
              <Link
                href="https://twitter.com/integratewise"
                className="text-white/30 transition-colors hover:text-white"
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="h-4 w-4" />
              </Link>
              <Link
                href="https://linkedin.com/company/integratewise"
                className="text-white/30 transition-colors hover:text-white"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Link columns */}
          {footerColumns.map(({ heading, links }) => (
            <div key={heading}>
              <h3 className="text-[12px] font-bold uppercase tracking-[0.1em] text-white/40 mb-4">
                {heading}
              </h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.name}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[13px] font-medium text-white/50 transition-colors hover:text-white"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className={`text-[13px] font-medium transition-colors hover:text-white ${
                          link.name.includes("→")
                            ? "text-primary/70 hover:text-primary"
                            : "text-white/50"
                        }`}
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

        {/* Newsletter */}
        <div className="mt-14 rounded-xl border border-white/[0.07] bg-white/[0.03] p-6 sm:flex sm:items-center sm:justify-between sm:gap-8">
          <div>
            <p className="text-[14px] font-semibold text-white">
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
              className="h-10 w-full rounded-lg border border-white/10 bg-white/5 px-3 text-[13px] font-medium text-white placeholder:text-white/25 outline-none focus:border-primary sm:w-56"
            />
            <button
              type="submit"
              className="h-10 shrink-0 rounded-lg px-4 text-[13px] font-semibold text-white"
              style={{ background: "var(--gradient-primary)" }}
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/[0.07] pt-8 sm:flex-row">
          <p className="text-[13px] font-medium text-white/30">
            &copy; 2026 IntegrateWise LLP. All rights reserved.
          </p>
          <div className="flex gap-6 text-[13px] font-medium text-white/30">
            <Link href="/privacy" className="transition-colors hover:text-white">
              Privacy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-white">
              Terms
            </Link>
            <Link href="/security" className="transition-colors hover:text-white">
              Security
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
