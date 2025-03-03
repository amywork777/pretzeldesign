import type React from "react"
import "./globals.css"
import { DM_Sans } from "next/font/google"

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
})

export const metadata = {
  title: "pretzel",
  description: "My development playground",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${dmSans.className} min-h-screen bg-white antialiased`}>{children}</body>
    </html>
  )
}



import './globals.css'