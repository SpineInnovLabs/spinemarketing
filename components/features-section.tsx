import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Layers, RefreshCw, Grid3x3 } from "lucide-react"

const features = [
  {
    icon: Layers,
    title: "One-click Templates",
    description: "Pre-built workflows for onboarding, renewals, and health monitoring. Deploy in minutes, not months.",
    proof: "6 ready-to-use templates",
  },
  {
    icon: RefreshCw,
    title: "Normalize Once",
    description: "Schema-first ingestion from any source. Transform messy data into clean, actionable insights.",
    proof: "Universal data model",
  },
  {
    icon: Grid3x3,
    title: "Render Anywhere",
    description: "Push orchestrated actions to Slack, email, Salesforce, or custom channels without rebuilding logic.",
    proof: "Multi-channel delivery",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" aria-labelledby="features-title" className="container mx-auto px-4 py-40 md:py-48">
      <div className="mx-auto max-w-4xl text-center">
        <h2
          id="features-title"
          className="text-balance text-5xl font-bold leading-tight tracking-tighter md:text-7xl lg:text-8xl"
        >
          Feature Pillars
        </h2>
        <p className="mt-8 text-pretty text-2xl leading-relaxed text-muted-foreground md:text-3xl">
          Build once. Scale everywhere.
        </p>
      </div>

      <div className="mx-auto mt-24 grid max-w-7xl gap-8 md:grid-cols-3">
        {features.map((feature, index) => {
          const Icon = feature.icon
          return (
            <Card
              key={index}
              className="border-border/20 bg-card/30 backdrop-blur transition-all hover:border-primary/30 hover:bg-card/50"
            >
              <CardHeader className="space-y-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-3xl font-bold leading-tight tracking-tight">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
                <CardDescription className="text-lg leading-relaxed">{feature.description}</CardDescription>
                <p className="text-base font-semibold text-accent">{feature.proof}</p>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
