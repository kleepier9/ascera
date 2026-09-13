import { Star } from "lucide-react"
import { cn } from "@/lib/utils"

export function StarRating({
  rating,
  size = 14,
  className,
}: {
  rating: number
  size?: number
  className?: string
}) {
  return (
    <div
      className={cn("inline-flex items-center", className)}
      role="img"
      aria-label={`Rated ${rating} out of 5 stars`}
    >
      {[0, 1, 2, 3, 4].map((i) => {
        const fill = Math.max(0, Math.min(1, rating - i))
        return (
          <span key={i} className="relative" style={{ width: size, height: size }}>
            <Star
              className="absolute inset-0 text-muted-foreground/30"
              style={{ width: size, height: size }}
              strokeWidth={1.5}
            />
            <span
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${fill * 100}%` }}
            >
              <Star
                className="text-coral"
                fill="currentColor"
                style={{ width: size, height: size }}
                strokeWidth={1.5}
              />
            </span>
          </span>
        )
      })}
    </div>
  )
}
