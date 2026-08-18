"use client"

import { useEffect, useState } from "react"
import { Menu, Moon, Sun, X } from "lucide-react"
import { useTheme } from "next-themes"

const navItems = [
  { name: "Work", href: "projects" },
  { name: "About", href: "about" },
  { name: "Skills", href: "skills" },
  { name: "Experience", href: "experience" },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)

    const onScroll = () => {
      setScrolled(window.scrollY > 24)
      const sections = ["home", "about", "skills", "projects", "experience", "contact"]
      const pos = window.scrollY + 140
      for (const id of sections) {
        const el = document.getElementById(id)
        if (!el) continue
        if (pos >= el.offsetTop && pos < el.offsetTop + el.offsetHeight) {
          setActiveSection(id)
          break
        }
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    setIsOpen(false)
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  if (!mounted) return null

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center p-4">
      <nav
        className={`pointer-events-auto flex w-full max-w-5xl items-center justify-between rounded-full border px-3 py-2 transition-all duration-500 ${
          scrolled
            ? "border-border/80 bg-background/70 shadow-lg shadow-black/20 backdrop-blur-2xl"
            : "border-transparent bg-transparent"
        }`}
      >
        <button
          onClick={() => scrollTo("home")}
          className="flex items-center gap-2 rounded-full px-3 py-1.5 font-display text-lg font-bold tracking-tight"
        >
          <span className="grid h-8 w-8 place-items-center rounded-full bg-primary text-xs text-primary-foreground">
            UH
          </span>
          <span className="hidden sm:inline">Usama</span>
        </button>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollTo(item.href)}
              className={`rounded-full px-4 py-2 text-sm transition-colors ${
                activeSection === item.href
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="grid h-10 w-10 place-items-center rounded-full border border-border text-foreground"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="hidden rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background md:inline-flex"
          >
            Let’s talk
          </button>
          <button
            className="grid h-10 w-10 place-items-center rounded-full border border-border md:hidden"
            onClick={() => setIsOpen((v) => !v)}
            aria-label="Menu"
          >
            {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="pointer-events-auto absolute left-4 right-4 top-20 overflow-hidden rounded-3xl border border-border bg-background/95 p-4 shadow-2xl backdrop-blur-xl md:hidden">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollTo(item.href)}
              className="block w-full rounded-2xl px-4 py-3 text-left text-lg hover:bg-muted"
            >
              {item.name}
            </button>
          ))}
          <button
            onClick={() => scrollTo("contact")}
            className="mt-2 w-full rounded-2xl bg-primary py-3 font-medium text-primary-foreground"
          >
            Let’s talk
          </button>
        </div>
      )}
    </header>
  )
}
