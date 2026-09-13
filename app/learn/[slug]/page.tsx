import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { ChevronRight, Info, ArrowRight } from "lucide-react"
import { journalPosts, getPost, type ArticleBlock } from "@/lib/content"
import { Button } from "@/components/ui/button"

export function generateStaticParams() {
  return journalPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return { title: "Article not found" }
  return { title: post.title, description: post.excerpt }
}

function Block({ block }: { block: ArticleBlock }) {
  switch (block.type) {
    case "heading":
      return (
        <h2 className="mt-10 font-display text-2xl font-semibold text-foreground text-balance">
          {block.text}
        </h2>
      )
    case "paragraph":
      return (
        <p className="mt-4 leading-relaxed text-muted-foreground text-pretty">
          {block.text}
        </p>
      )
    case "list":
      return (
        <ul className="mt-4 space-y-2">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-3 text-muted-foreground">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-teal" />
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      )
    case "callout":
      return (
        <div className="mt-8 flex gap-3 rounded-2xl border border-teal/20 bg-teal/5 p-5">
          <Info className="mt-0.5 size-5 shrink-0 text-teal" />
          <p className="text-sm leading-relaxed text-foreground">{block.text}</p>
        </div>
      )
  }
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  const more = journalPosts.filter((p) => p.slug !== slug).slice(0, 2)

  return (
    <article>
      <nav
        aria-label="Breadcrumb"
        className="mx-auto flex max-w-3xl items-center gap-1.5 px-4 py-4 text-sm text-muted-foreground sm:px-6"
      >
        <Link href="/" className="transition-colors hover:text-foreground">
          Home
        </Link>
        <ChevronRight className="size-4" />
        <Link href="/learn" className="transition-colors hover:text-foreground">
          Learn
        </Link>
      </nav>

      <header className="mx-auto max-w-3xl px-4 sm:px-6">
        <p className="text-sm font-medium text-teal">{post.category}</p>
        <h1 className="mt-2 font-display text-3xl font-semibold leading-tight text-foreground text-balance sm:text-4xl">
          {post.title}
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          {post.date} · {post.readingTime}
        </p>
      </header>

      <div className="mx-auto mt-8 max-w-3xl px-4 sm:px-6">
        <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-muted">
          <Image
            src={post.image || "/placeholder.svg"}
            alt=""
            fill
            priority
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover"
          />
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
        {post.body.map((block, i) => (
          <Block key={i} block={block} />
        ))}

        <div className="mt-12 rounded-3xl border border-border bg-card p-8 text-center">
          <h2 className="font-display text-xl font-semibold text-foreground text-balance">
            Not sure where to start?
          </h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground text-pretty">
            Our Support Finder asks a few quick questions and points you to the
            right level for your needs.
          </p>
          <Button
            size="lg"
            className="mt-5 rounded-full"
            nativeButton={false}
            render={<Link href="/support-finder" />}
          >
            Take the Support Finder
            <ArrowRight className="size-4" />
          </Button>
        </div>
      </div>

      <section className="border-t border-border py-12">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="font-display text-xl font-semibold text-foreground">
            Keep reading
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {more.map((p) => (
              <Link key={p.slug} href={`/learn/${p.slug}`} className="group">
                <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-muted">
                  <Image
                    src={p.image || "/placeholder.svg"}
                    alt=""
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-3 font-display text-base font-semibold leading-snug text-foreground text-pretty group-hover:text-teal">
                  {p.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </article>
  )
}
