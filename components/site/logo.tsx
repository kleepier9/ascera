import Image from "next/image"
import { cn } from "@/lib/utils"

export function Logo({
  className,
  variant = "compact",
}: {
  className?: string
  variant?: "compact" | "full"
}) {
  return (
    <Image
      src={variant === "full" ? "/brand/ascera-logo-with-icon.png" : "/brand/ascera-logo.png"}
      alt="Ascera"
      width={2172}
      height={724}
      priority={variant === "compact"}
      className={cn(
        "block shrink-0 object-cover object-center",
        variant === "full" ? "h-12 w-[216px]" : "h-8 w-32 sm:w-[160px]",
        className,
      )}
    />
  )
}
