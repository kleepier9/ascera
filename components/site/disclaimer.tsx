import { Info } from "lucide-react"
import { cn } from "@/lib/utils"

export const MEDICAL_DISCLAIMER =
  "These products are not intended to diagnose, treat, cure, or prevent any disease. Compression may not be appropriate for everyone. Speak with a qualified healthcare professional about your individual needs."

export function Disclaimer({
  children = MEDICAL_DISCLAIMER,
  className,
  variant = "card",
}: {
  children?: React.ReactNode
  className?: string
  variant?: "card" | "inline"
}) {
  if (variant === "inline") {
    return (
      <p className={cn("text-xs leading-relaxed text-muted-foreground", className)}>
        {children}
      </p>
    )
  }
  return (
    <div
      className={cn(
        "flex gap-3 rounded-xl border border-border bg-muted/50 p-4",
        className,
      )}
    >
      <Info className="mt-0.5 size-4 shrink-0 text-teal" />
      <p className="text-xs leading-relaxed text-muted-foreground">{children}</p>
    </div>
  )
}
