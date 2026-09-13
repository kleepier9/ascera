import type { Metadata } from "next"
import { Mail, MessageCircle, Ruler } from "lucide-react"
import { ContactForm } from "@/components/site/contact-form"

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with the Ascera team for help with fit, sizing, orders, or anything else.",
}

const channels = [
  {
    icon: Mail,
    title: "Email us",
    body: "support@vante.example — we reply within one business day.",
  },
  {
    icon: Ruler,
    title: "Fit help",
    body: "Not sure about sizing? Tell us your measurements and we'll guide you.",
  },
  {
    icon: MessageCircle,
    title: "Order questions",
    body: "Include your order number and we'll get you sorted quickly.",
  },
]

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <h1 className="font-display text-3xl font-semibold text-foreground text-balance sm:text-4xl">
            We&apos;re here to help
          </h1>
          <p className="mt-3 text-muted-foreground text-pretty">
            Questions about fit, support levels, or your order? Reach out and a
            real person will get back to you.
          </p>
          <ul className="mt-8 space-y-6">
            {channels.map((channel) => (
              <li key={channel.title} className="flex gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-teal/12 text-teal">
                  <channel.icon className="size-5" />
                </span>
                <div>
                  <h2 className="font-medium text-foreground">{channel.title}</h2>
                  <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">
                    {channel.body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl border border-border bg-card p-6 sm:p-8">
          <ContactForm />
        </div>
      </div>
    </div>
  )
}
