import type { Metadata } from "next"
import { PolicyPage } from "@/components/site/policy-page"

export const metadata: Metadata = {
  title: "Shipping & Returns",
  description:
    "Vanté shipping options, delivery times, and our 60-day fit guarantee with easy exchanges.",
}

export default function ShippingReturnsPage() {
  return (
    <PolicyPage
      title="Shipping & returns"
      intro="Because fit is personal, we make it easy to get it right — including free shipping over $100 and a 60-day fit guarantee."
      sections={[
        {
          heading: "Shipping",
          paragraphs: [
            "We offer free standard shipping on all orders over $100. Orders under $100 ship for a flat $8.",
            "Standard orders are processed within one to two business days and typically arrive within three to seven business days. You'll receive tracking as soon as your order ships.",
          ],
        },
        {
          heading: "60-day fit guarantee",
          paragraphs: [
            "Compression is personal, and dialing in the right size can take a try. That's why we accept returns and exchanges on unworn items in original condition for 60 days from delivery.",
            "Need a different size or support level? Reach out and we'll help you exchange for the right fit.",
          ],
        },
        {
          heading: "How to start a return",
          paragraphs: [
            "Contact our team with your order number and we'll send a prepaid return label along with instructions. Refunds are issued to the original payment method once we receive your return.",
          ],
        },
      ]}
    />
  )
}
