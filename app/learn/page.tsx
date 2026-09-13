import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { journalPosts } from "@/lib/content"

export const metadata: Metadata = {
  title: "Learn",
  description:
    "Plain-language guidance on compression, fit, and living well with POTS and dysautonomia, from the Vanté Journal.",
}

export default function LearnPage() {
  const [featured, ...rest] = journalPosts
  return (
    <div>
      <div className="border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <p className="text-sm font-medium text-teal">The Journal</p>
          <h1 className="mt-2 font-display text-3xl font-semibold text-foreground text-balance sm:text-4xl">
            Understanding compression, fit, and living well
          </h1>
          <p className="mt-3 max-w-2xl text-muted-foreground text-pretty">
            No jargon and no fear-mongering — just clear, community-informed
            guidance to help you make confident choices.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <Link
          href={`/learn/${featured.slug}`}
          className="group grid overflow-hidden rounded-3xl border border-border bg-card lg:grid-cols-2"
        >
          <div className="relative aspect-[16/10] lg:aspect-auto">
            <Image
              src={featured.image || "/placeholder.svg"}
              alt=""
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="flex flex-col justify-center p-8 sm:p-10">
            <p className="text-xs font-medium text-teal">{featured.category}</p>
            <h2 className="mt-2 font-display text-2xl font-semibold text-foreground text-balance sm:text-3xl">
              {featured.title}
            </h2>
            <p className="mt-3 leading-relaxed text-muted-foreground text-pretty">
              {featured.excerpt}
            </p>
            <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-teal">
              Read article
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </span>
          </div>
        </Link>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {rest.map((post) => (
            <Link
              key={post.slug}
              href={`/learn/${post.slug}`}
              className="group flex gap-5 rounded-2xl border border-border bg-card p-4"
            >
              <div className="relative size-28 shrink-0 overflow-hidden rounded-xl bg-muted">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt=""
                  fill
                  sizes="112px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-xs font-medium text-teal">{post.category}</p>
                <h3 className="mt-1 font-display text-lg font-semibold leading-snug text-foreground text-pretty group-hover:text-teal">
                  {post.title}
                </h3>
                <p className="mt-1.5 text-xs text-muted-foreground">
                  {post.date} · {post.readingTime}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
