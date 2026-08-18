"use client"

import { FormEvent, useEffect, useState } from "react"
import Image from "next/image"
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Sparkles,
} from "lucide-react"
import pic from "./assets/portfolio.jpg"

const roles = ["Full-Stack Engineer", "AI Agent Builder", "RAG Specialist", "Automation Architect"]

const marqueeA = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "NestJS",
  "PostgreSQL",
  "MongoDB",
  "LangChain",
  "LangGraph",
  "Gemini",
  "Qdrant",
  "n8n",
]

const marqueeB = [
  "RAG",
  "Socket.IO",
  "Prisma",
  "Docker",
  "Stripe",
  "Slack API",
  "WhatsApp API",
  "Retell AI",
  "Tailwind",
  "Redux",
  "JWT",
  "CI/CD",
]

const projects = [
  {
    n: "01",
    title: "Female Travelers Network",
    tag: "AI / RAG",
    desc: "Production RAG pipeline grounded in travel documents. Gemini embeddings in Qdrant, multi-turn lead collection, WhatsApp Cloud API.",
    tech: ["Node.js", "Gemini", "Qdrant", "Next.js", "WhatsApp"],
  },
  {
    n: "02",
    title: "Butler AI",
    tag: "Agents",
    desc: "Slack-native assistant for tasks, summaries, meetings, and proposals. LangGraph workflows with intent classification and Google Meet links.",
    tech: ["LangChain", "LangGraph", "OpenAI", "Prisma", "Slack"],
  },
  {
    n: "03",
    title: "CantonCarib",
    tag: "Platform",
    desc: "International cargo booking: containers, payments, documents, live tracking. NestJS APIs, JWT cookies, in-app AI support chatbot.",
    tech: ["NestJS", "Next.js", "PostgreSQL", "Docker"],
    href: "https://cantoncarib.com",
  },
  {
    n: "04",
    title: "Afaf Medical Care",
    tag: "Frontend",
    desc: "Healthcare RCM site highlighting a 97.02% claim acceptance rate, with scroll motion and interactive UI.",
    tech: ["React", "AOS", "Tailwind"],
    href: "https://afafmedicalcare.netlify.app/",
  },
  {
    n: "05",
    title: "Vodocs",
    tag: "Product",
    desc: "Business formation and S-Corp filing flows — pricing, features, and a step-by-step LLC experience.",
    tech: ["React", "Tailwind", "AOS"],
    href: "https://www.vodocs.com/",
  },
]

const jobs = [
  {
    role: "Senior Software Engineer",
    company: "Ignite Dev",
    when: "Sept 2025 — Present",
    where: "Remote, Lahore",
    points: [
      "Voice AI agent on Retell with Excel-driven car inventory knowledge.",
      "n8n automations for extraction, processing, and GoHighLevel sync.",
    ],
  },
  {
    role: "Software Engineer",
    company: "A3Techverse",
    when: "Aug 2025 — Aug 2026",
    where: "Remote, United States",
    points: [
      "Slack AI agent with LangChain / LangGraph for meetings and summaries.",
      "Stripe, webhooks, cron jobs. Employee Recognition award.",
    ],
  },
  {
    role: "Associate Software Engineer",
    company: "IIFA Tech",
    when: "June 2024 — July 2025",
    where: "Lahore, Pakistan",
    points: [
      "Shipped full-stack MERN products end-to-end.",
      "Employee of the Month for on-time delivery.",
    ],
  },
  {
    role: "React.js Intern",
    company: "PiRails",
    when: "Mar 2024 — May 2024",
    where: "Lahore, Pakistan",
    points: ["Responsive UIs, routing, API integration, and component systems."],
  },
]

export default function Home() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [spot, setSpot] = useState({ x: 40, y: 20 })
  const [cursor, setCursor] = useState({ x: -80, y: -80 })

  useEffect(() => {
    const t = setInterval(() => setRoleIndex((i) => (i + 1) % roles.length), 2400)
    return () => clearInterval(t)
  }, [])

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setCursor({ x: e.clientX, y: e.clientY })
      setSpot({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      })
    }
    window.addEventListener("mousemove", move)
    return () => window.removeEventListener("mousemove", move)
  }, [])

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    window.location.href = "mailto:usama.binhaleem524@gmail.com"
  }

  return (
    <div className="relative overflow-x-hidden">
      <div
        className="pointer-events-none fixed z-[70] hidden h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary mix-blend-difference lg:block"
        style={{ left: cursor.x, top: cursor.y }}
      />
      <div
        className="pointer-events-none fixed z-[69] hidden h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/30 mix-blend-difference lg:block"
        style={{ left: cursor.x, top: cursor.y, transition: "left 0.12s ease, top 0.12s ease" }}
      />

      {/* HERO */}
      <section id="home" className="relative min-h-screen overflow-hidden pt-28">
        <div
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{
            background: `radial-gradient(700px circle at ${spot.x}% ${spot.y}%, hsl(var(--primary) / 0.16), transparent 55%)`,
          }}
        />
        <div className="animate-aurora pointer-events-none absolute -left-24 top-10 h-[28rem] w-[28rem] rounded-full bg-primary/20 blur-[120px]" />
        <div className="animate-aurora pointer-events-none absolute -right-16 bottom-10 h-[24rem] w-[24rem] rounded-full bg-accent/15 blur-[110px]" style={{ animationDelay: "4s" }} />
        <div className="noise pointer-events-none absolute inset-0 opacity-[0.07] mix-blend-overlay" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 pb-16 lg:grid-cols-[1.15fr_0.85fr] lg:pt-10">
          <div>
            <div className="animate-fade-up mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.22em] text-primary">
              <span className="relative flex h-2 w-2">
                <span className="animate-pulse-ring absolute inset-0 rounded-full bg-primary" />
                <span className="relative h-2 w-2 rounded-full bg-primary" />
              </span>
              Open to work
            </div>

            <p className="animate-fade-up font-mono text-sm text-muted-foreground" style={{ animationDelay: "80ms" }}>
              Hi, I’m Usama Bin Haleem
            </p>

            <h1
              className="animate-fade-up mt-3 font-display text-[13vw] leading-[0.85] tracking-tight sm:text-7xl lg:text-[5.6rem]"
              style={{ animationDelay: "140ms" }}
            >
              I build
              <br />
              <span className="text-primary">AI products</span>
              <br />
              that ship.
            </h1>

            <p
              className="animate-fade-up mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground"
              style={{ animationDelay: "220ms" }}
            >
              Three years shipping MERN platforms, RAG assistants, voice agents, and n8n automations — from
              Slack bots to cargo booking systems.
            </p>

            <div className="animate-fade-up mt-4 h-8 overflow-hidden font-mono text-sm text-primary" style={{ animationDelay: "280ms" }}>
              <div
                className="transition-transform duration-500"
                style={{ transform: `translateY(-${roleIndex * 2}rem)` }}
              >
                {roles.map((r) => (
                  <div key={r} className="flex h-8 items-center gap-2">
                    <Sparkles className="h-3.5 w-3.5" />
                    {r}
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-fade-up mt-8 flex flex-wrap gap-3" style={{ animationDelay: "340ms" }}>
              <button
                onClick={() => scrollTo("projects")}
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[0_0_40px_hsl(var(--primary)/0.35)] transition hover:scale-[1.03]"
              >
                See selected work
                <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
              <a
                href="https://drive.google.com/file/d/1ekigZFbS3M9AMPw6IHLAapykY6DlVPcJ/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full border border-border px-7 py-3.5 text-sm font-medium hover:border-primary hover:text-primary"
              >
                Resume
              </a>
            </div>
          </div>

          <div className="animate-fade-up relative mx-auto w-full max-w-md pt-4 sm:px-6" style={{ animationDelay: "200ms" }}>
            <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-primary/30 via-transparent to-accent/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card shadow-2xl">
              <div className="absolute right-4 top-4 z-10 rounded-full bg-background/80 px-3 py-1 font-mono text-[11px] uppercase tracking-widest backdrop-blur">
                Senior SE · Ignite Dev
              </div>
              <Image src={pic} alt="Usama Bin Haleem" className="aspect-[4/5] w-full object-cover" />
              <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-background via-background/90 to-transparent px-6 pb-6 pt-20">
                <p className="font-display text-2xl">Usama Bin Haleem</p>
                <p className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5 text-primary" />
                  Lahore, Pakistan
                </p>
              </div>
            </div>
            <div className="absolute left-0 top-0 z-20 hidden rounded-2xl border border-border bg-background/95 px-4 py-3 shadow-xl backdrop-blur sm:block">
              <p className="font-display text-2xl text-primary">3+</p>
              <p className="text-xs text-muted-foreground">years shipping</p>
            </div>
            <div className="absolute right-0 top-20 z-20 hidden rounded-2xl border border-border bg-background/95 px-4 py-3 shadow-xl backdrop-blur sm:block">
              <p className="font-display text-2xl text-accent">20+</p>
              <p className="text-xs text-muted-foreground">projects</p>
            </div>
          </div>
        </div>

        <div className="relative mt-8 border-y border-border bg-foreground py-3 text-background">
          <div className="flex overflow-hidden">
            <div className="animate-marquee flex w-max shrink-0 gap-10 pr-10">
              {[...marqueeA, ...marqueeA].map((item, i) => (
                <span key={`a-${i}`} className="font-display text-xl uppercase tracking-[0.2em] opacity-90">
                  {item} <span className="text-primary">✦</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative mx-auto max-w-6xl px-6 py-28">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">01 — About</p>
        <div className="mt-4 grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <h2 className="font-display text-4xl leading-tight sm:text-6xl">
            Full-stack with an <span className="italic text-primary">AI spine.</span>
          </h2>
          <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              I design and ship products end-to-end: interfaces, APIs, databases, and the agents that sit on top of
              them. Right now I lead AI and full-stack work at Ignite Dev — voice agents, knowledge bases, and
              automated CRM sync.
            </p>
            <p>
              Previously at A3Techverse I put LangChain agents into production Slack, handled Stripe and webhooks, and
              earned Employee Recognition. Before that, I delivered MERN systems at IIFA Tech.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { k: "03+", v: "Years" },
            { k: "04", v: "Companies" },
            { k: "RAG", v: "Pipelines in prod" },
            { k: "EOTM", v: "Team awards" },
          ].map((s) => (
            <div key={s.v} className="rounded-[1.75rem] border border-border bg-card p-6">
              <p className="font-display text-4xl text-primary">{s.k}</p>
              <p className="mt-2 text-sm text-muted-foreground">{s.v}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="relative overflow-hidden py-8">
        <div className="mx-auto max-w-6xl px-6 pb-10">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">02 — Stack</p>
          <h2 className="mt-4 font-display text-4xl sm:text-6xl">Tools I actually use.</h2>
        </div>
        <div className="mb-4 overflow-hidden">
          <div className="animate-marquee flex w-max gap-3 pr-3">
            {[...marqueeA, ...marqueeA, ...marqueeA].map((s, i) => (
              <span key={`m1-${i}`} className="rounded-full border border-border bg-card px-5 py-2.5 text-sm">
                {s}
              </span>
            ))}
          </div>
        </div>
        <div className="overflow-hidden">
          <div className="animate-marquee-reverse flex w-max gap-3 pr-3">
            {[...marqueeB, ...marqueeB, ...marqueeB].map((s, i) => (
              <span key={`m2-${i}`} className="rounded-full border border-primary/30 bg-primary/10 px-5 py-2.5 text-sm text-primary">
                {s}
              </span>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl gap-4 px-6 md:grid-cols-3">
          {[
            { t: "Product", d: "Next.js, React, Tailwind, shadcn, Redux — fast, responsive interfaces." },
            { t: "Systems", d: "Node, Nest, Express, JWT, Prisma, Postgres, Mongo — APIs that hold up." },
            { t: "Intelligence", d: "RAG, Gemini, LangGraph, Qdrant, n8n, Retell — agents with real context." },
          ].map((b) => (
            <article key={b.t} className="group rounded-[2rem] border border-border bg-card p-8 transition hover:-translate-y-1 hover:border-primary/50">
              <h3 className="font-display text-2xl group-hover:text-primary">{b.t}</h3>
              <p className="mt-3 text-muted-foreground">{b.d}</p>
            </article>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="mx-auto max-w-6xl px-6 py-28">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">03 — Selected work</p>
        <h2 className="mt-4 max-w-2xl font-display text-4xl sm:text-6xl">Things I’ve shipped recently.</h2>

        <div className="mt-14 divide-y divide-border border-y border-border">
          {projects.map((p) => (
            <article key={p.title} className="group grid gap-6 py-10 transition md:grid-cols-[88px_1fr_auto] md:items-start">
              <span className="font-mono text-sm text-primary">{p.n}</span>
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="font-display text-3xl transition group-hover:text-primary">{p.title}</h3>
                  <span className="rounded-full border border-border px-3 py-1 text-xs uppercase tracking-wider text-muted-foreground">
                    {p.tag}
                  </span>
                </div>
                <p className="mt-3 max-w-2xl text-muted-foreground">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="rounded-full bg-muted px-3 py-1 text-xs">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              {p.href ? (
                <a
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-border transition group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground"
                >
                  <ArrowUpRight className="h-5 w-5" />
                </a>
              ) : (
                <div className="h-12 w-12" />
              )}
            </article>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="bg-[#12100d] py-28 text-[#f4efe6]">
        <div className="mx-auto max-w-6xl px-6">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#c8f542]">04 — Experience</p>
          <h2 className="mt-4 font-display text-4xl sm:text-6xl">Where the work happened.</h2>

          <div className="mt-14 space-y-0">
            {jobs.map((job) => (
              <div key={job.company} className="grid gap-4 border-t border-white/10 py-10 md:grid-cols-[220px_1fr]">
                <p className="font-mono text-sm text-white/45">{job.when}</p>
                <div>
                  <h3 className="font-display text-3xl text-[#f4efe6]">{job.company}</h3>
                  <p className="mt-1 text-lg font-medium text-[#c8f542]">{job.role}</p>
                  <p className="text-sm text-white/45">{job.where}</p>
                  <ul className="mt-4 space-y-2 text-white/70">
                    {job.points.map((pt) => (
                      <li key={pt} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#c8f542]" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-6 border-t border-white/10 pt-10 md:grid-cols-2">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#c8f542]">Education</p>
              <p className="mt-3 font-display text-2xl text-[#f4efe6]">COMSATS University Islamabad</p>
              <p className="text-white/55">B.S. Computer Engineering · 2020 — 2024</p>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#c8f542]">Foundation</p>
              <p className="mt-3 font-display text-2xl text-[#f4efe6]">Punjab College of Science</p>
              <p className="text-white/55">FSc Pre-Engineering · 2018 — 2020</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative overflow-hidden py-28">
        <div className="animate-aurora pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-primary/20 blur-[100px]" />
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="grid overflow-hidden rounded-[2.5rem] border border-border bg-card lg:grid-cols-2">
            <div className="bg-primary p-10 text-primary-foreground lg:p-14">
              <p className="font-mono text-xs uppercase tracking-[0.3em] opacity-80">05 — Contact</p>
              <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">Let’s make something that feels inevitable.</h2>
              <p className="mt-4 max-w-md text-primary-foreground/80">
                AI agents, full-stack products, or messy integrations — I like problems that need both product sense
                and systems thinking.
              </p>
              <div className="mt-10 space-y-4 text-sm">
                <a href="mailto:usama.binhaleem524@gmail.com" className="flex items-center gap-3 hover:underline">
                  <Mail className="h-4 w-4" /> usama.binhaleem524@gmail.com
                </a>
                <a href="tel:+923049818315" className="flex items-center gap-3 hover:underline">
                  <Phone className="h-4 w-4" /> +92 304 9818315
                </a>
                <p className="flex items-center gap-3">
                  <MapPin className="h-4 w-4" /> Lahore, Pakistan
                </p>
              </div>
              <div className="mt-8 flex gap-3">
                <a href="https://linkedin.com/in/usama-bin-haleem" target="_blank" rel="noreferrer" className="grid h-11 w-11 place-items-center rounded-full bg-primary-foreground/15">
                  <Linkedin className="h-4 w-4" />
                </a>
                <a href="https://github.com/UsamaBinHaleem524" target="_blank" rel="noreferrer" className="grid h-11 w-11 place-items-center rounded-full bg-primary-foreground/15">
                  <Github className="h-4 w-4" />
                </a>
              </div>
            </div>

            <form onSubmit={onSubmit} className="space-y-5 p-10 lg:p-14">
              <div>
                <label className="mb-2 block text-sm text-muted-foreground">Name</label>
                <input required className="h-12 w-full rounded-2xl border border-border bg-background px-4 outline-none ring-primary focus:ring-2" />
              </div>
              <div>
                <label className="mb-2 block text-sm text-muted-foreground">Email</label>
                <input required type="email" className="h-12 w-full rounded-2xl border border-border bg-background px-4 outline-none ring-primary focus:ring-2" />
              </div>
              <div>
                <label className="mb-2 block text-sm text-muted-foreground">Project</label>
                <textarea required rows={4} className="w-full rounded-2xl border border-border bg-background px-4 py-3 outline-none ring-primary focus:ring-2" />
              </div>
              <button type="submit" className="w-full rounded-full bg-foreground py-3.5 font-medium text-background transition hover:bg-primary hover:text-primary-foreground">
                Send a note
              </button>
            </form>
          </div>

          <footer className="mt-12 flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground sm:flex-row">
            <span>© {new Date().getFullYear()} Usama Bin Haleem</span>
            <span className="font-mono text-xs">Designed as a single canvas · Dark lime studio</span>
          </footer>
        </div>
      </section>
    </div>
  )
}
