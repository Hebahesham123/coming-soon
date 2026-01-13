import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Naguib Selim - Coming Soon",
  description: "Premium fabrics and luxury textiles. Coming soon to you.",
  icons: {
    icon: [
      {
        url: "https://cdn.shopify.com/s/files/1/0949/0949/7707/files/logo_ns-03_1.png?v=1768291739",
      },
    ],
    apple: "https://cdn.shopify.com/s/files/1/0949/0949/7707/files/logo_ns-03_1.png?v=1768291739",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
