import type { Metadata } from "next"
import { PolicyPage } from "@/components/site/policy-page"

export const metadata: Metadata = {
  title: "Accessibility",
  description:
    "Ascera's commitment to building an accessible, inclusive shopping experience for everyone.",
}

export default function AccessibilityPage() {
  return (
    <PolicyPage
      title="Accessibility"
      intro="Accessibility is core to who we are. We're committed to making our site usable for everyone, including people using assistive technology."
      sections={[
        {
          heading: "Our commitment",
          paragraphs: [
            "We aim to meet WCAG 2.1 AA standards across our site, with keyboard-navigable interfaces, meaningful alternative text, sufficient color contrast, and respect for reduced-motion preferences.",
          ],
        },
        {
          heading: "Ongoing work",
          paragraphs: [
            "Accessibility is never finished. We regularly review and improve our experience, and we welcome feedback from our community.",
          ],
        },
        {
          heading: "Contact us",
          paragraphs: [
            "If you encounter any barrier using our site, please let us know so we can fix it. Your feedback directly shapes how we improve.",
          ],
        },
      ]}
    />
  )
}
