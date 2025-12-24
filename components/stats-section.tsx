import { TrendingUp, Users, Globe } from "lucide-react"

const stats = [
  {
    icon: TrendingUp,
    value: "95%",
    label: "Retention",
    description: "Customer retention rate",
  },
  {
    icon: Users,
    value: "50%",
    label: "Productivity Lift",
    description: "Average team efficiency gain",
  },
  {
    icon: Globe,
    value: "APAC",
    label: "Ready",
    description: "Global deployment support",
  },
]

export function StatsSection() {
  return (
    <section id="stats" aria-labelledby="stats-title" className="border-y border-border/10 bg-card/5 py-32 md:py-40">
      <h2 id="stats-title" className="sr-only">
        Outcomes
      </h2>
      <div className="container mx-auto px-4">
        <div className="grid gap-16 md:grid-cols-3 md:gap-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="text-7xl font-bold tracking-tighter text-foreground md:text-8xl lg:text-9xl">
                  {stat.value}
                </div>
                <div className="mt-6 text-2xl font-semibold tracking-tight text-foreground">{stat.label}</div>
                <p className="mt-3 text-lg text-muted-foreground">{stat.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
