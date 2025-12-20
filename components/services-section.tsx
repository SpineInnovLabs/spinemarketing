import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Lightbulb, Workflow, Zap, Users, GraduationCap, Award } from "lucide-react"

const services = [
  {
    icon: Lightbulb,
    title: "Advisory Retainers",
    description:
      "Continuous expert guidance and strategic support for your integration initiatives. Get on-demand access to seasoned professionals who understand your business.",
  },
  {
    icon: Workflow,
    title: "MuleSoft Projects",
    description:
      "End-to-end enterprise integration solutions built on MuleSoft Anypoint Platform. From design to deployment, we deliver scalable, maintainable integrations.",
  },
  {
    icon: Zap,
    title: "CS Automation",
    description:
      "Salesforce automation and optimization services that streamline your customer success operations. Boost productivity and enhance customer experiences.",
  },
  {
    icon: Users,
    title: "Coaching",
    description:
      "Personalized professional development programs designed to elevate your team's integration and automation capabilities to the next level.",
  },
  {
    icon: GraduationCap,
    title: "Workshops",
    description:
      "Interactive, hands-on training sessions that empower your team with practical skills. Learn best practices directly from industry experts.",
  },
  {
    icon: Award,
    title: "Certification",
    description:
      "Official training programs and certification paths that validate expertise and accelerate career growth in integration technologies.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="container mx-auto px-4 py-24 md:py-32">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-balance text-3xl font-bold tracking-tight md:text-5xl">Services built for scale</h2>
        <p className="mt-4 text-pretty text-lg text-muted-foreground">
          Comprehensive solutions to power your digital transformation journey
        </p>
      </div>

      <div className="mx-auto mt-16 grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => {
          const Icon = service.icon
          return (
            <Card key={index} className="border-border/50 transition-colors hover:border-border">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
