import type React from "react"
import type { Metadata } from "next"
import { Inter, Merriweather } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "../styles/globals.css"

const _inter = Inter({ subsets: ["latin"] })
const _merriweather = Merriweather({ weight: ["300", "400", "700", "900"], subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AreGreats Ventures",
  description: "Modern Agriculture That Feeds Communities",
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
