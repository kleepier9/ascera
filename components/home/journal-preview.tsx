import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { journalPosts } from "@/lib/content"

export function JournalPreview() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-20 lg:pb-28 sm:px-6 lg:px-8">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="section-heading text-foreground">
            From the Journal
          </h2>
          <p className="mt-1.5 max-w-md text-sm text-muted-foreground text-pretty">
            Plain-language guidance on compression, fit, and living well.
          </p>
        </div>
        <Link
          href="/learn"
          className="hidden shrink-0 items-center gap-1.5 text-sm font-medium text-teal transition-colors hover:text-teal/80 sm:inline-flex"
        >
          All articles
          <ArrowRight className="size-4" />
        </Link>
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {journalPosts.map((post) => (
          <Link key={post.slug} href={`/learn/${post.slug}`} className="group flex flex-col">
            <div className="relative aspect-[16/10] overflow-hidden rounded-none bg-muted">
              <Image
                src={post.image || "/placeholder.svg"}
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <p className="mt-4 text-xs font-medium text-teal">{post.category}</p>
            <h3 className="mt-1.5 font-display text-lg font-semibold leading-snug text-foreground text-pretty transition-colors group-hover:text-teal">
              {post.title}
            </h3>
            <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
              {post.excerpt}
            </p>
            <p className="mt-3 text-xs text-muted-foreground">
              {post.date} · {post.readingTime}
            </p>
          </Link>
        ))}
      </div>
    </section>
  )
}
