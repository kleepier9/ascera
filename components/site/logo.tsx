import { cn } from "@/lib/utils"

export function Logo({
  className,
  showMark = true,
}: {
  className?: string
  showMark?: boolean
}) {
  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      {showMark ? (
        <span
          aria-hidden="true"
          className="grid size-7 place-items-center rounded-md bg-navy"
        >
          <span className="block h-3.5 w-1.5 rounded-full bg-teal" />
        </span>
      ) : null}
      <span className="font-display text-xl font-semibold tracking-tight text-foreground">
        Vant&eacute;
      </span>
    </span>
  )
}
