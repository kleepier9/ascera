"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, RotateCcw, Check } from "lucide-react"
import { cn } from "@/lib/utils"
import { products, type CompressionLevel, type BodyArea } from "@/lib/products"
import { Button } from "@/components/ui/button"
import { ProductCard } from "@/components/site/product-card"
import { Disclaimer } from "@/components/site/disclaimer"

type Question = {
  id: string
  prompt: string
  helper?: string
  options: { label: string; description?: string; value: string }[]
}

const questions: Question[] = [
  {
    id: "day",
    prompt: "How do you spend most of your day?",
    helper: "This helps us gauge how much support you may want.",
    options: [
      { label: "Mostly seated", description: "Desk work, resting, low activity", value: "seated" },
      { label: "A mix of sitting and standing", description: "Some time upright", value: "mixed" },
      { label: "On my feet a lot", description: "Long stretches upright, travel, activity", value: "active" },
    ],
  },
  {
    id: "area",
    prompt: "Where do you most want support?",
    options: [
      { label: "Full legs", description: "Ankles to waist", value: "Full Leg" },
      { label: "Abdomen & hips", description: "Midsection focus", value: "Abdominal" },
      { label: "Lower legs", description: "Calves", value: "Calf" },
      { label: "Not sure yet", description: "Show me a range", value: "any" },
    ],
  },
  {
    id: "experience",
    prompt: "How much compression are you used to?",
    options: [
      { label: "I'm new to it", description: "Start gentle", value: "new" },
      { label: "I've worn it before", description: "Comfortable with support", value: "some" },
      { label: "I want maximum support", description: "The firmest option", value: "firm" },
    ],
  },
]

function recommendLevel(day: string, experience: string): CompressionLevel {
  if (experience === "new") return "Light Support"
  if (experience === "firm" || day === "active") return "Firm: 20–30 mmHg"
  return "Moderate: 15–20 mmHg"
}

export function SupportFinder() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [done, setDone] = useState(false)

  const current = questions[step]
  const progress = ((step + (done ? 1 : 0)) / questions.length) * 100

  const select = (value: string) => {
    const next = { ...answers, [current.id]: value }
    setAnswers(next)
    if (step < questions.length - 1) {
      setStep(step + 1)
    } else {
      setDone(true)
    }
  }

  const reset = () => {
    setAnswers({})
    setStep(0)
    setDone(false)
  }

  if (done) {
    const level = recommendLevel(answers.day, answers.experience)
    const area = answers.area as BodyArea | "any"
    let matches = products.filter((p) => p.category === "Compression")
    if (area !== "any") {
      const byArea = matches.filter((p) => p.bodyArea === area)
      if (byArea.length) matches = byArea
    }
    const byLevel = matches.filter((p) => p.compression === level)
    const recommended = (byLevel.length ? byLevel : matches).slice(0, 3)

    return (
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-border bg-card p-8 text-center sm:p-10">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-teal/12 px-3 py-1 text-xs font-medium text-teal">
            <Check className="size-3.5" />
            Your match
          </span>
          <h1 className="mt-4 font-display text-3xl font-semibold text-foreground text-balance">
            We&apos;d suggest {level.split(":")[0]} support
          </h1>
          <p className="mx-auto mt-3 max-w-md text-muted-foreground text-pretty">
            Based on your answers, here are pieces that fit how you move. This is
            a starting point, not medical advice.
          </p>
          <Button variant="outline" className="mt-5 rounded-full" onClick={reset}>
            <RotateCcw className="size-4" />
            Start over
          </Button>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-3">
          {recommended.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>

        <div className="mt-10">
          <Disclaimer />
        </div>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6">
      <div className="mb-8">
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>
            Question {step + 1} of {questions.length}
          </span>
          <Link href="/collections/compression" className="font-medium text-teal hover:text-teal/80">
            Skip to shop
          </Link>
        </div>
        <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-muted">
          <div
            className="h-full rounded-full bg-teal transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div>
        <h1 className="font-display text-2xl font-semibold text-foreground text-balance sm:text-3xl">
          {current.prompt}
        </h1>
        {current.helper ? (
          <p className="mt-2 text-muted-foreground text-pretty">{current.helper}</p>
        ) : null}

        <div className="mt-6 space-y-3">
          {current.options.map((option) => {
            const active = answers[current.id] === option.value
            return (
              <button
                key={option.value}
                type="button"
                onClick={() => select(option.value)}
                className={cn(
                  "flex w-full items-center justify-between gap-4 rounded-2xl border p-4 text-left transition-colors",
                  active
                    ? "border-teal bg-teal/5"
                    : "border-border bg-card hover:border-navy",
                )}
              >
                <span>
                  <span className="block font-medium text-foreground">
                    {option.label}
                  </span>
                  {option.description ? (
                    <span className="mt-0.5 block text-sm text-muted-foreground">
                      {option.description}
                    </span>
                  ) : null}
                </span>
                <span
                  className={cn(
                    "grid size-5 shrink-0 place-items-center rounded-full border transition-colors",
                    active ? "border-teal bg-teal text-teal-foreground" : "border-border",
                  )}
                >
                  {active ? <Check className="size-3" /> : null}
                </span>
              </button>
            )
          })}
        </div>

        {step > 0 ? (
          <button
            type="button"
            onClick={() => setStep(step - 1)}
            className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" />
            Back
          </button>
        ) : null}
      </div>
    </div>
  )
}
