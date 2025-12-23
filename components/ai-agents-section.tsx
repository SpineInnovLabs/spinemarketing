import { Bot, Shield, FileCode, Lock, Brain, Layers } from "lucide-react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const aiAgents = [
  {
    icon: Bot,
    name: "SuccessPilot",
    tagline: "Health Score Engine",
    description:
      "AI-powered customer health scoring that predicts churn before it happens. Integrates with your CRM to surface at-risk accounts.",
    href: "https://integratewise.co/agents#successpilot",
    featured: true,
  },
  {
    icon: Shield,
    name: "ChurnShield",
    tagline: "Churn Risk Alerts",
    description:
      "Proactive alerts and automated playbooks triggered by early warning signals. Reduce churn by catching issues early.",
    href: "https://integratewise.co/agents#churnshield",
    featured: true,
  },
  {
    icon: FileCode,
    name: "TemplateForge",
    tagline: "Documentation Generator",
    description: "Auto-generate technical documentation from your codebase and APIs.",
    href: "https://integratewise.co/agents#templateforge",
    featured: false,
  },
  {
    icon: Lock,
    name: "VaultGuard",
    tagline: "Secrets Validator",
    description: "Continuous validation of secrets, keys, and credentials across your stack.",
    href: "https://integratewise.co/agents#vaultguard",
    featured: false,
  },
  {
    icon: Brain,
    name: "ArchitectIQ",
    tagline: "Architecture Review Agent",
    description: "Automated architecture reviews with best practice recommendations.",
    href: "https://integratewise.co/agents#architectiq",
    featured: false,
  },
  {
    icon: Layers,
    name: "AI Loader",
    tagline: "Unified Deployment Coordinator",
    description: "Orchestrate and deploy all your AI agents from a single interface.",
    href: "https://integratewise.co/agents#ailoader",
    featured: false,
  },
]

export function AIAgentsSection() {
  return (
    <section id="ai-agents" className="border-y border-border/60 bg-muted/30 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-baseline gap-4">
          <span className="text-sm font-medium text-primary">[04]</span>
          <span className="text-sm font-medium text-muted-foreground">Product Suite</span>
        </div>

        <h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
          AI agents that <span className="text-primary">deliver.</span>
        </h2>

        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          Purpose-built AI agents for customer success, documentation, security, and architecture review. Each agent is
          designed to solve a specific operational challenge.
        </p>

        {/* Featured agents */}
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {aiAgents
            .filter((agent) => agent.featured)
            .map((agent, index) => {
              const Icon = agent.icon
              return (
                <Link
                  key={index}
                  href={agent.href}
                  className="group relative overflow-hidden rounded-2xl border border-border bg-background p-8 transition-all hover:border-primary/30 hover:shadow-lg"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold">{agent.name}</h3>
                      <p className="mt-1 text-sm font-medium text-primary">{agent.tagline}</p>
                      <p className="mt-3 text-muted-foreground">{agent.description}</p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>
                </Link>
              )
            })}
        </div>

        {/* Other agents grid */}
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {aiAgents
            .filter((agent) => !agent.featured)
            .map((agent, index) => {
              const Icon = agent.icon
              return (
                <Link
                  key={index}
                  href={agent.href}
                  className="group rounded-xl border border-border bg-background p-5 transition-all hover:border-primary/30 hover:shadow-md"
                >
                  <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-4 w-4 text-primary" />
                  </div>
                  <h3 className="text-sm font-semibold">{agent.name}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{agent.tagline}</p>
                </Link>
              )
            })}
        </div>

        <div className="mt-10 text-center">
          <Link href="https://integratewise.co/agents" className="text-sm font-medium text-primary hover:underline">
            View all AI agents →
          </Link>
        </div>
      </div>
    </section>
  )
}
