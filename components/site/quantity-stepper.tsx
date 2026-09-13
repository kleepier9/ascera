"use client"

import { Minus, Plus } from "lucide-react"
import { cn } from "@/lib/utils"

export function QuantityStepper({
  value,
  onChange,
  min = 1,
  max = 10,
  className,
  size = "default",
}: {
  value: number
  onChange: (value: number) => void
  min?: number
  max?: number
  className?: string
  size?: "default" | "sm"
}) {
  const btn =
    "grid place-items-center text-foreground transition-colors hover:bg-muted disabled:opacity-40 disabled:hover:bg-transparent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
  const dim = size === "sm" ? "size-8" : "size-10"

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border border-border bg-card",
        className,
      )}
    >
      <button
        type="button"
        aria-label="Decrease quantity"
        className={cn(btn, dim, "rounded-l-full")}
        onClick={() => onChange(Math.max(min, value - 1))}
        disabled={value <= min}
      >
        <Minus className="size-4" />
      </button>
      <span
        className={cn(
          "min-w-8 text-center text-sm font-medium tabular-nums",
          size === "sm" && "min-w-6",
        )}
        aria-live="polite"
      >
        {value}
      </span>
      <button
        type="button"
        aria-label="Increase quantity"
        className={cn(btn, dim, "rounded-r-full")}
        onClick={() => onChange(Math.min(max, value + 1))}
        disabled={value >= max}
      >
        <Plus className="size-4" />
      </button>
    </div>
  )
}
