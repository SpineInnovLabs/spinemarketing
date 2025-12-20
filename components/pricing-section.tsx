import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Starter",
    price: "$2,999",
    period: "/month",
    description: "Perfect for small teams getting started with integration",
    features: [
      "Up to 5 integrations",
      "Email support",
      "Basic MuleSoft setup",
      "Monthly strategy calls",
      "Documentation access",
    ],
    cta: "Start Free Trial",
    highlighted: false,
  },
  {
    name: "Professional",
    price: "$7,999",
    period: "/month",
    description: "For growing businesses that need advanced capabilities",
    features: [
      "Unlimited integrations",
      "Priority support 24/7",
      "Advanced MuleSoft solutions",
      "Weekly advisory sessions",
      "Custom workshop included",
      "Dedicated account manager",
      "Salesforce automation",
    ],
    cta: "Get Started",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Tailored solutions for large-scale organizations",
    features: [
      "Everything in Professional",
      "Custom SLA agreements",
      "On-site training available",
      "Certification programs",
      "Dedicated team assigned",
      "Architecture review",
      "White-glove onboarding",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="container mx-auto px-4 py-24 md:py-32">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-balance text-3xl font-bold tracking-tight md:text-5xl">Pricing that scales with you</h2>
        <p className="mt-4 text-pretty text-lg text-muted-foreground">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>

      <div className="mx-auto mt-16 grid max-w-6xl gap-8 lg:grid-cols-3">
        {plans.map((plan, index) => (
          <Card
            key={index}
            className={`relative flex flex-col ${plan.highlighted ? "border-primary shadow-lg" : "border-border/50"}`}
          >
            {plan.highlighted && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                Most Popular
              </div>
            )}
            <CardHeader>
              <CardTitle className="text-2xl">{plan.name}</CardTitle>
              <CardDescription>{plan.description}</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-muted-foreground">{plan.period}</span>
              </div>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="h-5 w-5 shrink-0 text-primary" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant={plan.highlighted ? "default" : "outline"}>
                {plan.cta}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}
