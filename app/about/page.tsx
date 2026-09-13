import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Heart, Users, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Newsletter } from "@/components/site/newsletter"

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "Vanté was built by and for the dysautonomia community — compression wear and awareness apparel designed around real daily life.",
}

const values = [
  {
    icon: Heart,
    title: "Community first",
    body: "Every product is developed with input from people living with POTS and dysautonomia. We build with, not just for.",
  },
  {
    icon: Sparkles,
    title: "Honest by design",
    body: "Clear support levels, straight talk about what compression can and can't do, and no medical overpromising.",
  },
  {
    icon: Users,
    title: "Giving back",
    body: "A portion of every purchase supports dysautonomia research and awareness initiatives.",
  },
]

export default function AboutPage() {
  return (
    <div>
      <section className="border-b border-border bg-card">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-lavender/40 px-3 py-1 text-xs font-medium text-lavender-foreground">
              <Heart className="size-3.5" />
              Our story
            </span>
            <h1 className="mt-5 font-display text-4xl font-semibold leading-tight text-foreground text-balance sm:text-5xl">
              Built by people who understand the daily reality.
            </h1>
            <p className="mt-5 leading-relaxed text-muted-foreground text-pretty">
              Vanté started with a simple frustration: the compression wear on
              the market was clinical, uncomfortable, or clearly not designed
              with our community in mind. We knew there had to be a better way.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-muted">
            <Image
              src="/images/lifestyle.png"
              alt="Two people wearing Vanté apparel walking together outdoors"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="space-y-5 text-lg leading-relaxed text-muted-foreground text-pretty">
          <p>
            We spent months talking with people who live with orthostatic
            intolerance — asking what worked, what didn&apos;t, and what they
            wished existed. The answers were remarkably consistent: support that
            actually helps, in clothing they&apos;d actually want to wear.
          </p>
          <p>
            So we engineered the Support-Web: a network of graduated compression
            panels mapped to key circulation zones, developed alongside the very
            people it&apos;s made for. And because representation matters, we
            created awareness apparel that starts conversations without feeling
            like a novelty.
          </p>
          <p>
            Vanté isn&apos;t here to make medical claims or promise a cure.
            We&apos;re here to make thoughtful, genuinely supportive products —
            and to show up for a community that has too often been overlooked.
          </p>
        </div>
      </section>

      <section className="border-y border-border bg-card">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-semibold text-foreground text-balance sm:text-3xl">
            What we stand for
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border border-border bg-background p-6"
              >
                <span className="grid size-11 place-items-center rounded-full bg-teal/12 text-teal">
                  <value.icon className="size-5" />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-foreground">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {value.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 rounded-3xl bg-navy px-6 py-12 text-center text-navy-foreground">
          <h2 className="max-w-xl font-display text-2xl font-semibold text-balance sm:text-3xl">
            Join a community building better support, together.
          </h2>
          <Newsletter />
          <Button
            variant="outline"
            size="lg"
            className="rounded-full border-white/20 bg-transparent text-navy-foreground hover:bg-white/10"
            nativeButton={false}
            render={<Link href="/collections/all" />}
          >
            Shop the collection
            <ArrowRight className="size-4" />
          </Button>
        </div>
      </section>
    </div>
  )
}
