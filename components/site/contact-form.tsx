"use client"

import { useState } from "react"
import { CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ContactForm() {
  const [sent, setSent] = useState(false)

  if (sent) {
    return (
      <div className="flex flex-col items-center py-8 text-center">
        <div className="grid size-14 place-items-center rounded-full bg-teal/12 text-teal">
          <CheckCircle2 className="size-7" />
        </div>
        <h2 className="mt-4 font-display text-xl font-semibold text-foreground">
          Message sent
        </h2>
        <p className="mt-2 text-sm text-muted-foreground text-pretty">
          Thanks for reaching out — we&apos;ll be in touch within one business
          day.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        setSent(true)
      }}
      className="space-y-4"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-foreground">
            Name
          </label>
          <input
            id="name"
            required
            autoComplete="name"
            className="mt-1.5 h-11 w-full rounded-lg border border-border bg-background px-3.5 text-sm text-foreground outline-none transition-colors focus-visible:border-teal focus-visible:ring-2 focus-visible:ring-teal/25"
          />
        </div>
        <div>
          <label htmlFor="cemail" className="block text-sm font-medium text-foreground">
            Email
          </label>
          <input
            id="cemail"
            type="email"
            required
            autoComplete="email"
            className="mt-1.5 h-11 w-full rounded-lg border border-border bg-background px-3.5 text-sm text-foreground outline-none transition-colors focus-visible:border-teal focus-visible:ring-2 focus-visible:ring-teal/25"
          />
        </div>
      </div>
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-foreground">
          Subject
        </label>
        <input
          id="subject"
          required
          className="mt-1.5 h-11 w-full rounded-lg border border-border bg-background px-3.5 text-sm text-foreground outline-none transition-colors focus-visible:border-teal focus-visible:ring-2 focus-visible:ring-teal/25"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-foreground">
          Message
        </label>
        <textarea
          id="message"
          required
          rows={5}
          className="mt-1.5 w-full resize-none rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors focus-visible:border-teal focus-visible:ring-2 focus-visible:ring-teal/25"
        />
      </div>
      <Button type="submit" size="lg" className="w-full rounded-full">
        Send message
      </Button>
    </form>
  )
}
