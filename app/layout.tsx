import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, DM_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
})

export const metadata: Metadata = {
  title: "Nayana Constructions - 30+ Years of Excellence in Bengaluru",
  description:
    "Leading construction company in Bengaluru with 30+ years of experience and 30+ successful projects. Specializing in residential and commercial construction.",
  generator: "v0.app",
  icons: {
    icon: "/images/nayana-logo.jpeg",
    shortcut: "/images/nayana-logo.jpeg",
    apple: "/images/nayana-logo.jpeg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body 
        className={`font-sans ${spaceGrotesk.variable} ${dmSans.variable} antialiased`}
        suppressHydrationWarning
      >
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}