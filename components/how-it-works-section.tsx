import { ArrowRight } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Connect",
    description: "Webhook ingress accepts events from any source—CRM, support desk, payment processor.",
  },
  {
    number: "02",
    title: "Normalize",
    description: "Universal controller maps disparate schemas into a single data spine.",
  },
  {
    number: "03",
    title: "Render",
    description: "AI agents orchestrate personalized actions across Slack, email, and Salesforce.",
  },
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-muted/20 py-32 md:py-40">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-5xl font-bold leading-tight tracking-tighter md:text-7xl">How It Works</h2>
          <p className="mt-6 text-pretty text-2xl leading-relaxed text-muted-foreground">
            Three steps to automation excellence
          </p>
        </div>

        <div className="mx-auto mt-24 grid max-w-7xl gap-12 md:grid-cols-3">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col items-start">
                <div className="mb-6 text-8xl font-bold text-primary/15">{step.number}</div>
                <h3 className="text-3xl font-bold tracking-tight text-foreground">{step.title}</h3>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <ArrowRight className="absolute -right-6 top-16 hidden h-10 w-10 text-primary/20 md:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
