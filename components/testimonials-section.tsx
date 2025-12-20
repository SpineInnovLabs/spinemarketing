import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    quote:
      "IntegrateWise transformed our entire integration landscape. Their MuleSoft expertise saved us months of development time and delivered a solution that scales beautifully.",
    author: "Sarah Chen",
    role: "CTO",
    company: "TechFlow Inc.",
    avatar: "/professional-woman-diverse.png",
  },
  {
    quote:
      "The advisory retainer has been invaluable. Having on-demand access to their experts means we can move fast with confidence. Best decision we made this year.",
    author: "Michael Torres",
    role: "VP of Engineering",
    company: "CloudScale",
    avatar: "/professional-man.jpg",
  },
  {
    quote:
      "Their Salesforce automation work cut our manual processes by 70%. The team is professional, responsive, and truly understands enterprise needs.",
    author: "Emily Watson",
    role: "Director of Customer Success",
    company: "DataVision",
    avatar: "/confident-business-woman.png",
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="border-y border-border/40 bg-muted/30 py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight md:text-5xl">Trusted by industry leaders</h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            See what our clients have to say about working with us
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border/50 bg-card">
              <CardContent className="pt-6">
                <blockquote className="text-base leading-relaxed">"{testimonial.quote}"</blockquote>
                <div className="mt-6 flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.author} />
                    <AvatarFallback>
                      {testimonial.author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
