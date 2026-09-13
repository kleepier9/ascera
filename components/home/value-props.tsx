import { Users, Gauge, Repeat, ShieldCheck } from "lucide-react"
import { valueProps } from "@/lib/content"

const icons = [Users, Gauge, Repeat, ShieldCheck]

export function ValueProps() {
  return (
    <section className="border-y border-border bg-card">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-6 gap-y-8 px-4 py-10 sm:px-6 lg:grid-cols-4 lg:px-8">
        {valueProps.map((prop, i) => {
          const Icon = icons[i]
          return (
            <div key={prop.title} className="flex flex-col gap-2">
              <span className="grid size-10 place-items-center rounded-full bg-teal/12 text-teal">
                <Icon className="size-5" />
              </span>
              <h3 className="mt-1 text-sm font-semibold text-foreground">
                {prop.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {prop.body}
              </p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
