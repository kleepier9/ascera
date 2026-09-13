import { BadgeCheck } from "lucide-react"
import { reviews } from "@/lib/content"
import { StarRating } from "@/components/site/star-rating"

export function ReviewsSection() {
  const featured = reviews.slice(0, 3)
  return (
    <section className="border-y border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-20 lg:py-28 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <h2 className="section-heading text-foreground">
            Trusted by our community
          </h2>
          <div className="mt-3 flex items-center gap-2">
            <StarRating rating={4.8} size={18} />
            <span className="text-sm text-muted-foreground">
              4.8 average from 1,000+ verified reviews
            </span>
          </div>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {featured.map((review) => (
            <figure
              key={review.name}
              className="flex flex-col border-t border-border py-8 md:px-6"
            >
              <StarRating rating={review.rating} />
              <figcaption className="mt-3 text-sm font-semibold text-foreground">
                {review.title}
              </figcaption>
              <blockquote className="mt-3 flex-1 text-base leading-relaxed text-muted-foreground">
                {review.body}
              </blockquote>
              <div className="mt-4 border-t border-border pt-4">
                <p className="text-sm font-medium text-foreground">
                  {review.name}
                </p>
                <p className="mt-0.5 flex items-center gap-1 text-xs text-muted-foreground">
                  {review.verified ? (
                    <BadgeCheck className="size-3.5 text-teal" />
                  ) : null}
                  Verified buyer · {review.product}
                </p>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
