import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight, ArrowRight } from "lucide-react"
import { resourceGroups } from "@/lib/content"
import { Disclaimer } from "@/components/site/disclaimer"

export const metadata: Metadata = {
  title: "POTS & Dysautonomia Resources",
  description:
    "A curated hub of trusted organizations, care-finding tools, and community support for people living with POTS and dysautonomia.",
}

function isExternal(href: string) {
  return href.startsWith("http")
}

export default function ResourcesPage() {
  return (
    <div>
      <div className="border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <p className="text-sm font-medium text-teal">Resources</p>
          <h1 className="mt-2 font-display text-3xl font-semibold text-foreground text-balance sm:text-4xl">
            POTS &amp; dysautonomia resources
          </h1>
          <p className="mt-3 max-w-2xl text-muted-foreground text-pretty">
            A starting point for learning, finding care, and connecting with
            community. We link to trusted organizations — always bring what you
            find to your own healthcare team.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {resourceGroups.map((group) => (
            <section key={group.title}>
              <div className="max-w-2xl">
                <h2 className="font-display text-xl font-semibold text-foreground">
                  {group.title}
                </h2>
                <p className="mt-1.5 text-sm text-muted-foreground">
                  {group.description}
                </p>
              </div>
              <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {group.links.map((link) => {
                  const external = isExternal(link.href)
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noopener noreferrer" : undefined}
                      className="group flex flex-col rounded-2xl border border-border bg-card p-5 transition-colors hover:border-teal"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="font-medium text-foreground text-pretty">
                          {link.name}
                        </h3>
                        {external ? (
                          <ArrowUpRight className="size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-teal" />
                        ) : (
                          <ArrowRight className="size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-teal" />
                        )}
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {link.description}
                      </p>
                    </Link>
                  )
                })}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-12">
          <Disclaimer>
            Vanté is not a medical provider and these links are shared for
            informational purposes only. The organizations listed are
            independent and not affiliated with Vanté. Always consult a
            qualified healthcare professional about your individual needs.
          </Disclaimer>
        </div>
      </div>
    </div>
  )
}
