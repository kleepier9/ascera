"use client"

import { useState } from "react"
import { ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Newsletter({ compact = false }: { compact?: boolean }) {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <p className="flex items-center gap-2 text-sm font-medium text-teal">
        <Check className="size-4" />
        Thanks for joining — check your inbox soon.
      </p>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-md gap-2">
      <label htmlFor={compact ? "news-compact" : "news"} className="sr-only">
        Email address
      </label>
      <input
        id={compact ? "news-compact" : "news"}
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className="h-12 min-w-0 flex-1 rounded-sm border border-border bg-card px-4 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-teal focus-visible:ring-2 focus-visible:ring-teal/30"
      />
      <Button type="submit" size="lg" className="h-12 shrink-0 rounded-sm px-5">
        Subscribe
        <ArrowRight className="size-4" />
      </Button>
    </form>
  )
}
