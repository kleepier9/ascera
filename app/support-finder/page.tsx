import type { Metadata } from "next"
import { SupportFinder } from "@/components/support-finder/finder"

export const metadata: Metadata = {
  title: "Support Finder",
  description:
    "Answer a few quick questions and we'll point you to the Ascera compression level and pieces that fit how you move.",
}

export default function SupportFinderPage() {
  return (
    <div>
      <div className="border-b border-border bg-card">
        <div className="mx-auto max-w-2xl px-4 py-10 text-center sm:px-6">
          <p className="text-sm font-medium text-teal">Support Finder</p>
          <h1 className="mt-2 font-display text-3xl font-semibold text-foreground text-balance sm:text-4xl">
            Let&apos;s find your right support
          </h1>
          <p className="mt-3 text-muted-foreground text-pretty">
            A few quick questions to help you choose — never a substitute for
            your healthcare provider&apos;s guidance.
          </p>
        </div>
      </div>
      <SupportFinder />
    </div>
  )
}
