import Link from "next/link"
import { Linkedin, Twitter } from "lucide-react"
import { SpineLogo } from "@/components/spine-logo"

const footerLinks = {
  Solutions: [
    { name: "Account Success", href: "/account-success" },
    { name: "Business Ops", href: "/business-ops" },
    { name: "Personal Ops", href: "/personal-ops" },
  ],
  Platform: [
    { name: "How It Works", href: "/platform" },
    { name: "Integrations", href: "/integrations" },
    { name: "AI & Approvals", href: "/ai" },
    { name: "Security", href: "/security" },
  ],
  Resources: [
    { name: "Blog", href: "/blog" },
    { name: "Documentation", href: "/docs" },
    { name: "Changelog", href: "/changelog" },
    { name: "Resources", href: "/resources" },
  ],
  Company: [
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Pricing", href: "/pricing" },
  ],
}

export function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(8, 7, 14)" }}>
      <div className="mx-auto max-w-[1200px] px-6 py-16 md:px-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-6">
          <div className="sm:col-span-2">
            <Link
              href="/"
              className="flex items-center gap-2.5 rounded-lg focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-white/40"
            >
              <SpineLogo className="h-8 w-8 shrink-0 md:h-9 md:w-9" variant="on-dark" />
              <span className="text-[17px] font-semibold tracking-[-0.04em] text-white">
                Integrate<span className="text-primary">Wise</span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-[15px] font-medium leading-[1.5] tracking-[-0.02em] text-white/50">
              The knowledge workspace that connects your tools, cleans your data, and gives AI the full picture — so nothing falls through the cracks.
            </p>
            <p className="mt-3">
              <a href="mailto:connect@integratewise.ai" className="text-[15px] font-medium text-white/50 transition-colors hover:text-white">
                connect@integratewise.ai
              </a>
            </p>
            <div className="mt-6 flex items-center gap-4">
              <Link href="https://twitter.com/integratewise" className="text-white/40 transition-colors hover:text-white" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="https://linkedin.com/company/integratewise" className="text-white/40 transition-colors hover:text-white" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h3 className="text-[14px] font-semibold tracking-[-0.03em] text-white/80">{group}</h3>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-[14px] font-medium text-white/40 transition-colors hover:text-white">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Email capture */}
        <div className="mt-12 rounded-xl border border-white/10 p-6 sm:flex sm:items-center sm:justify-between sm:gap-6">
          <div>
            <p className="text-[15px] font-semibold text-white">Stay in the loop</p>
            <p className="mt-1 text-[13px] font-medium text-white/40">Product updates, new connectors, and insights. No spam.</p>
          </div>
          <form
            action="mailto:connect@integratewise.ai"
            method="GET"
            className="mt-4 flex gap-2 sm:mt-0 sm:shrink-0"
          >
            <input
              type="email"
              name="subject"
              placeholder="you@company.com"
              required
              className="h-10 w-full rounded-lg border border-white/10 bg-white/5 px-3 text-[14px] font-medium text-white placeholder:text-white/25 outline-none focus:border-primary sm:w-56"
            />
            <button
              type="submit"
              className="h-10 shrink-0 rounded-lg px-4 text-[14px] font-semibold text-white"
              style={{ background: "var(--gradient-primary)" }}
            >
              Subscribe
            </button>
          </form>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-[14px] font-medium text-white/40">
            &copy; {new Date().getFullYear()} IntegrateWise. All rights reserved.
          </p>
          <div className="flex gap-6 text-[14px] font-medium text-white/40">
            <Link href="/privacy" className="transition-colors hover:text-white">Privacy</Link>
            <Link href="/terms" className="transition-colors hover:text-white">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
