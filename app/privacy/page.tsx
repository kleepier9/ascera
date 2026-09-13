import type { Metadata } from "next"
import { PolicyPage } from "@/components/site/policy-page"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Vanté collects, uses, and protects your personal information.",
}

export default function PrivacyPage() {
  return (
    <PolicyPage
      title="Privacy policy"
      intro="We respect your privacy and collect only what we need to serve you well. This is a summary of how we handle your information."
      sections={[
        {
          heading: "Information we collect",
          paragraphs: [
            "We collect information you provide when you place an order, create an account, or contact us — such as your name, shipping address, email, and order details.",
            "We also collect limited analytics data to understand how our site is used and to improve it.",
          ],
        },
        {
          heading: "How we use it",
          paragraphs: [
            "We use your information to process orders, provide support, send updates you've opted into, and improve our products and experience.",
            "We never sell your personal information.",
          ],
        },
        {
          heading: "Your choices",
          paragraphs: [
            "You can unsubscribe from marketing emails at any time and request access to or deletion of your data by contacting us.",
          ],
        },
      ]}
    />
  )
}
