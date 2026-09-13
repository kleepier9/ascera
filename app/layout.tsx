import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { CartProvider } from '@/lib/cart-context'
import { AnnouncementBar } from '@/components/site/announcement-bar'
import { Header } from '@/components/site/header'
import { Footer } from '@/components/site/footer'
import { CartDrawer } from '@/components/site/cart-drawer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Ascera — Compression Wear & Awareness Apparel for POTS & Dysautonomia',
    template: '%s · Ascera',
  },
  description:
    'Ascera designs compression wear and awareness apparel with and for the dysautonomia and POTS community. Firm, moderate, and light support to help you stay upright.',
  generator: 'v0.app',
  icons: {
    icon: { url: '/brand/ascera-icon.png', type: 'image/png' },
    apple: '/brand/ascera-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#18272c',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`bg-background ${inter.variable}`}
    >
      <body className="font-sans antialiased">
        <CartProvider>
          <AnnouncementBar />
          <Header />
          <main id="main">{children}</main>
          <Footer />
          <CartDrawer />
        </CartProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
