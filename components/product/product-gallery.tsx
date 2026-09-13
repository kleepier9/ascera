"use client"

import { useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

export function ProductGallery({
  images,
  name,
}: {
  images: string[]
  name: string
}) {
  const [active, setActive] = useState(0)

  return (
    <div className="flex flex-col-reverse gap-3 sm:flex-row">
      {images.length > 1 ? (
        <div className="flex gap-3 sm:flex-col">
          {images.map((image, i) => (
            <button
              key={image + i}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`View image ${i + 1}`}
              aria-current={active === i}
              className={cn(
                "relative size-16 shrink-0 overflow-hidden rounded-lg border-2 bg-muted transition-colors sm:size-20",
                active === i ? "border-teal" : "border-transparent hover:border-border",
              )}
            >
              <Image
                src={image || "/placeholder.svg"}
                alt=""
                fill
                sizes="80px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      ) : null}
      <div className="relative aspect-[4/5] flex-1 overflow-hidden rounded-2xl bg-muted">
        <Image
          src={images[active] || "/placeholder.svg"}
          alt={name}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
        />
      </div>
    </div>
  )
}
