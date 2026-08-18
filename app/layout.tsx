import type React from "react"
import type { Metadata } from "next"
import { Syne, Outfit, IBM_Plex_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navigation from "@/components/navigation"

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700", "800"],
})

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
})

const plex = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
})

export const metadata: Metadata = {
  title: "Usama Bin Haleem — Full-Stack & AI Engineer",
  description:
    "Full-stack software engineer with 3 years of experience building MERN products, AI agents, RAG pipelines, and workflow automations.",
  keywords:
    "Full Stack Developer, AI Engineer, React, Next.js, Node.js, RAG, LangChain, NestJS, Usama Bin Haleem",
  authors: [{ name: "Usama Bin Haleem" }],
  openGraph: {
    title: "Usama Bin Haleem — Full-Stack & AI Engineer",
    description: "Building MERN products, AI agents, and automations.",
    type: "website",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${syne.variable} ${outfit.variable} ${plex.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange={false}>
          <Navigation />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
