import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Play } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:py-40">
        <div className="mb-8 flex justify-center">
          <Link
            href="#ai-agents"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-1.5 text-sm font-medium transition-colors hover:bg-muted"
          >
            <span className="rounded-full bg-primary px-2 py-0.5 text-xs font-semibold text-primary-foreground">
              New
            </span>
            <span className="text-muted-foreground">Introducing SuccessPilot AI Agent</span>
            <ArrowRight className="h-3.5 w-3.5 text-muted-foreground" />
          </Link>
        </div>

        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Tool-Agnostic Integration Strategy
            <br />
            <span className="text-primary">+ AI Automation for SaaS Ops</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Advisory + Automation + AI for scaling SaaS teams. We help you build integrations that scale, automate
            workflows that last, and deploy AI agents that deliver.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="h-12 px-6 text-base font-medium" asChild>
              <Link href="mailto:connect@integratewise.co">Book a Strategy Call</Link>
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-6 text-base font-medium bg-transparent" asChild>
              <Link href="#services" className="flex items-center gap-2">
                <Play className="h-4 w-4" />
                See How It Works
              </Link>
            </Button>
          </div>
        </div>

        <div className="relative mx-auto mt-16 max-w-5xl">
          <div className="aspect-[16/10] overflow-hidden rounded-xl border border-border bg-muted/30 shadow-2xl">
            <div className="flex h-full items-center justify-center p-8">
              <div className="grid w-full max-w-4xl gap-6">
                {/* Integration Flow Visual */}
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20 text-sm font-bold text-primary">
                      SF
                    </div>
                    <span className="text-sm font-medium">Salesforce</span>
                  </div>
                  <div className="h-px flex-1 bg-gradient-to-r from-primary/50 via-primary to-primary/50" />
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-lg font-bold text-primary-foreground">
                    IW
                  </div>
                  <div className="h-px flex-1 bg-gradient-to-r from-primary/50 via-primary to-primary/50" />
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-medium">HubSpot</span>
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500/20 text-sm font-bold text-orange-600">
                      HS
                    </div>
                  </div>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-4 mt-4">
                  {[
                    { label: "Data Sources", value: "15+" },
                    { label: "Workflows Active", value: "47" },
                    { label: "Events/Day", value: "12.4K" },
                  ].map((stat, i) => (
                    <div key={i} className="rounded-lg border border-border bg-background p-4 text-center">
                      <div className="text-2xl font-semibold text-primary">{stat.value}</div>
                      <div className="mt-1 text-xs text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Active Agents */}
                <div className="flex items-center justify-center gap-3 mt-2">
                  <span className="text-xs text-muted-foreground">Active AI Agents:</span>
                  {["SuccessPilot", "ChurnShield", "TemplateForge"].map((agent, i) => (
                    <span key={i} className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      {agent}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
