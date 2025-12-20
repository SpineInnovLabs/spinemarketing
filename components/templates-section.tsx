import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"
import Link from "next/link"

const templates = [
  {
    title: "Onboarding Automation",
    description: "Automated welcome sequences, milestone tracking, and success check-ins.",
    tags: ["New Customers", "High-Touch"],
  },
  {
    title: "NPS Recovery",
    description: "Instant alerts and escalation workflows for detractors and passive respondents.",
    tags: ["Feedback", "Retention"],
  },
  {
    title: "QBR Prep",
    description: "Auto-generated quarterly reports with health scores, usage trends, and renewal risk.",
    tags: ["Strategic", "Executive"],
  },
  {
    title: "Renewal Radar",
    description: "90/60/30-day renewal campaigns with personalized touchpoints and upsell suggestions.",
    tags: ["Revenue", "Expansion"],
  },
  {
    title: "Escalation Matrix",
    description: "Priority-based routing for support tickets, feature requests, and urgent issues.",
    tags: ["Support", "Urgent"],
  },
  {
    title: "Health Score Dashboard",
    description: "Real-time customer health monitoring with predictive churn analytics.",
    tags: ["Analytics", "Proactive"],
  },
]

export function TemplatesSection() {
  return (
    <section id="templates" className="container mx-auto px-4 py-32 md:py-40">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-balance text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">Template Gallery</h2>
        <p className="mt-6 text-pretty text-xl text-muted-foreground md:text-2xl">
          Ready-to-deploy workflows that scale with your team
        </p>
      </div>

      <div className="mx-auto mt-20 grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
        {templates.map((template, index) => (
          <Card
            key={index}
            className="border-border/40 bg-card/50 backdrop-blur transition-all hover:border-primary/40 hover:bg-card/80"
          >
            <CardHeader className="space-y-3">
              <CheckCircle2 className="h-6 w-6 text-primary" />
              <CardTitle className="text-xl">{template.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-base leading-relaxed text-muted-foreground">{template.description}</p>
              <div className="flex flex-wrap gap-2">
                {template.tags.map((tag, tagIndex) => (
                  <Badge key={tagIndex} variant="secondary" className="text-xs font-medium">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-16 text-center">
        <Button size="lg" variant="outline" className="h-12 px-8 font-medium bg-transparent" asChild>
          <Link href="/templates" data-cta="view-all-templates">
            View All Templates
          </Link>
        </Button>
      </div>
    </section>
  )
}
