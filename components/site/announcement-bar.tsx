import { Truck } from "lucide-react"

export function AnnouncementBar() {
  return (
    <div className="bg-navy text-navy-foreground">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-2 px-4 py-2 text-center text-xs font-medium sm:text-sm">
        <Truck className="size-4 shrink-0 text-teal" aria-hidden="true" />
        <p className="text-pretty">
          Free shipping on orders over $100 · Designed with the dysautonomia community
        </p>
      </div>
    </div>
  )
}
