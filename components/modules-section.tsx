import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Webhook, Settings, Activity } from "lucide-react"

const modules = [
  {
    icon: Webhook,
    title: "Webhook Ingress",
    description: "Accept events from any source with automatic schema detection and validation.",
  },
  {
    icon: Settings,
    title: "Universal Controller",
    description: "Centralized orchestration engine that normalizes data and routes actions intelligently.",
  },
  {
    icon: Activity,
    title: "CSM Pulse & Churn Radar",
    description: "AI-powered health scoring and proactive churn detection with real-time alerts.",
  },
]

export function ModulesSection() {
  return (
    <section id="modules" className="container mx-auto px-4 py-32 md:py-40">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-balance text-5xl font-bold leading-tight tracking-tighter md:text-7xl">Deep Modules</h2>
        <p className="mt-6 text-pretty text-2xl leading-relaxed text-muted-foreground">
          Enterprise-grade components for every need
        </p>
      </div>

      <div className="mx-auto mt-24 grid max-w-7xl gap-8 md:grid-cols-3">
        {modules.map((module, index) => {
          const Icon = module.icon
          return (
            <Card key={index} className="border-border/20 bg-card/30 backdrop-blur">
              <CardHeader>
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl font-bold tracking-tight">{module.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg leading-relaxed">{module.description}</CardDescription>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
