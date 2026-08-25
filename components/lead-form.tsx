"use client"

import { useCallback, useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export type LeadIntent = "contact" | "demo" | "pricing"

const MAIL = "connect@integratewise.ai"

function intentLabel(intent: LeadIntent): string {
  if (intent === "demo") return "Book a demo"
  if (intent === "pricing") return "Pricing / plan question"
  return "General contact"
}

function Label({ htmlFor, children }: { htmlFor: string; children: React.ReactNode }) {
  return (
    <label htmlFor={htmlFor} className="text-sm font-semibold tracking-tight">
      {children}
    </label>
  )
}

export function LeadForm({ defaultIntent = "contact" }: { defaultIntent?: LeadIntent }) {
  const [intent, setIntent] = useState<LeadIntent>(defaultIntent)
  useEffect(() => {
    setIntent(defaultIntent)
  }, [defaultIntent])
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [company, setCompany] = useState("")
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const endpoint = process.env.NEXT_PUBLIC_CONTACT_FORM_ACTION?.trim()

  const mailtoFallback = useCallback(() => {
    const subject = encodeURIComponent(`[${intentLabel(intent)}] ${company || "SpineWorkspace"}`)
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nCompany: ${company}\nIntent: ${intentLabel(intent)}\n\n${message}`,
    )
    window.location.href = `mailto:${MAIL}?subject=${subject}&body=${body}`
    setStatus("success")
  }, [name, email, company, message, intent])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMessage("")
    if (!name.trim() || !email.trim()) {
      setErrorMessage("Please enter your name and work email.")
      return
    }

    if (!endpoint) {
      mailtoFallback()
      return
    }

    setStatus("sending")
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          company: company.trim(),
          message: message.trim(),
          intent: intentLabel(intent),
          _subject: `[SpineWorkspace] ${intentLabel(intent)} — ${name.trim()}`,
        }),
      })
      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as { error?: string } | null
        throw new Error(data?.error || `Request failed (${res.status})`)
      }
      setStatus("success")
      setName("")
      setEmail("")
      setCompany("")
      setMessage("")
    } catch (err) {
      setStatus("error")
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong. Try email instead.")
    }
  }

  return (
    <Card className="mx-auto max-w-lg border-border shadow-lg">
      <CardHeader>
        <CardTitle className="text-xl">Send a message</CardTitle>
        <CardDescription>
          Tell us what you need — we&apos;ll get back within one business day.
        </CardDescription>
      </CardHeader>

      <CardContent>
        {status === "success" && (
          <div className="mb-4 rounded-lg border border-primary/30 bg-primary/5 px-4 py-3 text-sm font-medium text-foreground">
            {endpoint ? "Thanks — we received your message." : "Your email client should open with your message ready to send."}
          </div>
        )}

        {status === "error" && errorMessage && (
          <div className="mb-4 rounded-lg border border-destructive/30 bg-destructive/5 px-4 py-3 text-sm font-medium text-destructive">
            {errorMessage}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="lead-intent">I&apos;m interested in</Label>
            <select
              id="lead-intent"
              value={intent}
              onChange={(e) => setIntent(e.target.value as LeadIntent)}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <option value="contact">General contact</option>
              <option value="demo">Book a demo</option>
              <option value="pricing">Pricing / plans</option>
            </select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="lead-name">Name</Label>
            <Input
              id="lead-name"
              name="name"
              required
              autoComplete="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="lead-email">Work email</Label>
            <Input
              id="lead-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="lead-company">
              Company <span className="font-normal text-muted-foreground">(optional)</span>
            </Label>
            <Input
              id="lead-company"
              name="company"
              autoComplete="organization"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="lead-message">Message</Label>
            <Textarea
              id="lead-message"
              name="message"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          <input
            type="text"
            name="_gotcha"
            tabIndex={-1}
            autoComplete="off"
            className="absolute h-px w-px overflow-hidden opacity-0"
            aria-hidden
          />

          <Button
            type="submit"
            disabled={status === "sending"}
            className="h-11 w-full rounded-xl text-sm font-semibold"
            style={{
              background: "var(--gradient-primary)",
              border: "2px solid rgba(248,248,250,0.12)",
              boxShadow: "var(--shadow-button)",
            }}
          >
            {status === "sending" ? "Sending…" : "Send message"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
