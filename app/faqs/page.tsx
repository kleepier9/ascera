import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { faqs } from "@/lib/content"
import { Accordion } from "@/components/site/accordion"
import { Disclaimer } from "@/components/site/disclaimer"

export const metadata: Metadata = {
  title: "FAQs",
  description:
    "Answers to common questions about Ascera compression wear, support levels, sizing, care, shipping, and returns.",
}

export default function FaqsPage() {
  return (
    <div>
      <div className="border-b border-border bg-card">
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
          <h1 className="font-display text-3xl font-semibold text-foreground text-balance sm:text-4xl">
            Frequently asked questions
          </h1>
          <p className="mt-3 text-muted-foreground text-pretty">
            Everything you need to know about support levels, fit, care, and
            ordering. Can&apos;t find your answer?{" "}
            <Link href="/contact" className="font-medium text-teal hover:text-teal/80">
              Get in touch
            </Link>
            .
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
        <Accordion items={faqs.map((f) => ({ title: f.question, content: f.answer }))} defaultOpen={[0]} />

        <div className="mt-8">
          <Disclaimer />
        </div>

        <div className="mt-10 flex flex-col items-center gap-4 rounded-3xl bg-navy px-6 py-10 text-center text-navy-foreground">
          <h2 className="font-display text-xl font-semibold text-balance">
            Still have questions?
          </h2>
          <p className="max-w-sm text-sm text-navy-foreground/80 text-pretty">
            Our team is happy to help you find the right fit and support level.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 rounded-full bg-teal px-5 py-2.5 text-sm font-medium text-teal-foreground transition-colors hover:bg-teal/90"
          >
            Contact us
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
