import { Search, Database, Workflow, Zap, Bot, FileText, Layers, Settings } from "lucide-react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const services = [
  {
    number: "01",
    category: "Integration Architecture",
    title: "Architecture that scales.",
    description: "From audits to implementation—we design integrations that don't become technical debt.",
    items: [
      {
        icon: Search,
        title: "Integration Architecture Audits",
        description: "Comprehensive assessment of your integration landscape with actionable recommendations.",
        href: "https://integratewise.co/services#audits",
      },
      {
        icon: Database,
        title: "Canonical Data Modeling",
        description: "Atlas Spine methodology for unified data structures across your entire stack.",
        href: "https://integratewise.co/services#data-modeling",
      },
      {
        icon: Layers,
        title: "API Governance & Lifecycle",
        description: "Design and implement robust API governance policies and lifecycle management.",
        href: "https://integratewise.co/services#api-governance",
      },
      {
        icon: Settings,
        title: "MuleSoft Advisory & COE Setup",
        description: "Expert MuleSoft consulting and Center of Excellence establishment.",
        href: "https://integratewise.co/services#mulesoft",
      },
    ],
  },
  {
    number: "02",
    category: "Workflow Automation",
    title: "Automate everything.",
    description: "n8n, Slack, and HubSpot integrations for seamless workflow automation.",
    items: [
      {
        icon: Zap,
        title: "No-code Workflow Automation",
        description: "n8n-powered workflows that connect your entire tech stack without code.",
        href: "https://integratewise.co/services#n8n",
      },
      {
        icon: Workflow,
        title: "Event-Driven Architecture",
        description: "Cloudflare Workers and event-driven patterns for real-time processing.",
        href: "https://integratewise.co/services#event-driven",
      },
      {
        icon: FileText,
        title: "Success Playbook Automation",
        description: "CS Ops playbooks that automate your customer success workflows.",
        href: "https://integratewise.co/services#cs-automation",
      },
    ],
  },
  {
    number: "03",
    category: "AI Agent Deployment",
    title: "AI agents that deliver.",
    description: "Purpose-built AI agents for customer success, churn prevention, and operations.",
    items: [
      {
        icon: Bot,
        title: "SuccessPilot AI",
        description: "AI-powered customer success insights and recommendations.",
        href: "https://integratewise.co/agents#successpilot",
      },
      {
        icon: Bot,
        title: "ChurnShield AI",
        description: "Predictive churn detection and automated intervention workflows.",
        href: "https://integratewise.co/agents#churnshield",
      },
      {
        icon: Bot,
        title: "Custom Agent Development",
        description: "Bespoke AI agents tailored to your specific operational needs.",
        href: "https://integratewise.co/agents#custom",
      },
    ],
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {services.map((service, serviceIndex) => (
          <div key={serviceIndex} className={serviceIndex > 0 ? "mt-24" : ""}>
            {/* Section header */}
            <div className="flex items-baseline gap-4">
              <span className="text-sm font-medium text-primary">[{service.number}]</span>
              <span className="text-sm font-medium text-muted-foreground">{service.category}</span>
            </div>

            <h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
              {service.title.split(" ").slice(0, -1).join(" ")}{" "}
              <span className="text-primary">{service.title.split(" ").slice(-1)}</span>
            </h2>

            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{service.description}</p>

            {/* Service cards */}
            <div
              className={`mt-12 grid gap-6 sm:grid-cols-2 ${service.items.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}
            >
              {service.items.map((item, index) => {
                const Icon = item.icon
                return (
                  <Link
                    key={index}
                    href={item.href}
                    className="group relative rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg"
                  >
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-base font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                    <div className="mt-4 flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                      Learn more <ArrowRight className="h-3.5 w-3.5" />
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
