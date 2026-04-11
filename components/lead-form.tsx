"use client"

import { useCallback, useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

export type LeadIntent = "contact" | "demo" | "pricing"

const MAIL = "connect@integratewise.ai"

function intentLabel(intent: LeadIntent): string {
  if (intent === "demo") return "Book a demo"
  if (intent === "pricing") return "Pricing / plan question"
  return "General contact"
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
    const subject = encodeURIComponent(`[${intentLabel(intent)}] ${company || "IntegrateWise"}`)
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
          _subject: `[IntegrateWise] ${intentLabel(intent)} — ${name.trim()}`,
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
    <div className="arvio-card-elevated mx-auto max-w-lg p-8">
      <h2 className="text-[22px] font-semibold tracking-[-0.04em]">Send a message</h2>
      <p className="mt-2 text-[15px] font-medium leading-[1.5] tracking-[-0.02em] text-muted-foreground">
        Tell us what you need — we&apos;ll get back within one business day.
      </p>

      {status === "success" && (
        <p className="mt-4 rounded-xl border border-primary/30 bg-primary/5 px-4 py-3 text-[14px] font-medium text-foreground">
          {endpoint ? "Thanks — we received your message." : "Your email client should open with your message ready to send."}
        </p>
      )}

      {status === "error" && errorMessage && (
        <p className="mt-4 rounded-xl border border-destructive/30 bg-destructive/5 px-4 py-3 text-[14px] font-medium text-destructive">
          {errorMessage}
        </p>
      )}

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <div className="space-y-2">
          <label htmlFor="lead-intent" className="text-[13px] font-semibold tracking-[-0.02em]">
            I&apos;m interested in
          </label>
          <select
            id="lead-intent"
            value={intent}
            onChange={(e) => setIntent(e.target.value as LeadIntent)}
            className="h-11 w-full rounded-xl border border-border bg-white px-3 text-[15px] font-medium outline-none ring-ring/50 focus-visible:ring-[3px]"
          >
            <option value="contact">General contact</option>
            <option value="demo">Book a demo</option>
            <option value="pricing">Pricing / plans</option>
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="lead-name" className="text-[13px] font-semibold tracking-[-0.02em]">
            Name
          </label>
          <input
            id="lead-name"
            name="name"
            required
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="h-11 w-full rounded-xl border border-border bg-white px-3 text-[15px] font-medium outline-none ring-ring/50 focus-visible:ring-[3px]"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="lead-email" className="text-[13px] font-semibold tracking-[-0.02em]">
            Work email
          </label>
          <input
            id="lead-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-11 w-full rounded-xl border border-border bg-white px-3 text-[15px] font-medium outline-none ring-ring/50 focus-visible:ring-[3px]"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="lead-company" className="text-[13px] font-semibold tracking-[-0.02em]">
            Company <span className="font-normal text-muted-foreground">(optional)</span>
          </label>
          <input
            id="lead-company"
            name="company"
            autoComplete="organization"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="h-11 w-full rounded-xl border border-border bg-white px-3 text-[15px] font-medium outline-none ring-ring/50 focus-visible:ring-[3px]"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="lead-message" className="text-[13px] font-semibold tracking-[-0.02em]">
            Message
          </label>
          <textarea
            id="lead-message"
            name="message"
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full resize-y rounded-xl border border-border bg-white px-3 py-2.5 text-[15px] font-medium outline-none ring-ring/50 focus-visible:ring-[3px]"
          />
        </div>

        {/* Honeypot */}
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
          className="h-11 w-full rounded-xl text-[15px] font-semibold"
          style={{
            background: "var(--gradient-primary)",
            border: "2px solid rgba(248,248,250,0.12)",
            boxShadow: "var(--shadow-button)",
          }}
        >
          {status === "sending" ? "Sending…" : "Send message"}
        </Button>
      </form>
    </div>
  )
}
