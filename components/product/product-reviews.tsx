import { BadgeCheck } from "lucide-react"
import { reviews as allReviews } from "@/lib/content"
import { StarRating } from "@/components/site/star-rating"

export function ProductReviews({
  rating,
  reviewCount,
}: {
  rating: number
  reviewCount: number
}) {
  const featured = allReviews.slice(0, 4)
  const distribution = [
    { stars: 5, pct: 82 },
    { stars: 4, pct: 13 },
    { stars: 3, pct: 3 },
    { stars: 2, pct: 1 },
    { stars: 1, pct: 1 },
  ]

  return (
    <section className="border-t border-border py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-2xl font-semibold text-foreground">
          Reviews
        </h2>
        <div className="mt-8 grid gap-10 lg:grid-cols-[280px_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="font-display text-4xl font-semibold text-foreground">
                {rating}
              </span>
              <div>
                <StarRating rating={rating} size={16} />
                <p className="mt-1 text-sm text-muted-foreground">
                  {reviewCount} reviews
                </p>
              </div>
            </div>
            <ul className="mt-5 space-y-2">
              {distribution.map((row) => (
                <li key={row.stars} className="flex items-center gap-2 text-sm">
                  <span className="w-3 text-muted-foreground">{row.stars}</span>
                  <div className="h-2 flex-1 overflow-hidden rounded-full bg-muted">
                    <div
                      className="h-full rounded-full bg-coral"
                      style={{ width: `${row.pct}%` }}
                    />
                  </div>
                  <span className="w-9 text-right text-xs text-muted-foreground">
                    {row.pct}%
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <ul className="divide-y divide-border">
            {featured.map((review) => (
              <li key={review.name} className="py-5 first:pt-0">
                <div className="flex items-center justify-between gap-4">
                  <StarRating rating={review.rating} />
                  <span className="text-xs text-muted-foreground">
                    {review.location}
                  </span>
                </div>
                <p className="mt-2 text-sm font-semibold text-foreground">
                  {review.title}
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {review.body}
                </p>
                <p className="mt-2.5 flex items-center gap-1 text-xs text-muted-foreground">
                  <span className="font-medium text-foreground">{review.name}</span>
                  {review.verified ? (
                    <>
                      <span aria-hidden="true">·</span>
                      <BadgeCheck className="size-3.5 text-teal" />
                      Verified buyer
                    </>
                  ) : null}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
