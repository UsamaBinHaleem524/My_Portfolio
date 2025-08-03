"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

const skillCategories = [
  {
    title: "Frontend Development",
    icon: "🎨",
    skills: [
      { name: "React.js", level: 90, icon: "⚛️" },
      { name: "Redux Toolkit", level: 85, icon: "🔄" },
      { name: "HTML5", level: 95, icon: "🌐" },
      { name: "Tailwind CSS", level: 90, icon: "🎨" },
      { name: "JavaScript", level: 88, icon: "📜" },
      { name: "TypeScript", level: 80, icon: "📘" },
    ],
  },
  {
    title: "Backend Development",
    icon: "⚙️",
    skills: [
      { name: "Node.js", level: 88, icon: "🟢" },
      { name: "Express.js", level: 85, icon: "🚀" },
      { name: "REST APIs", level: 90, icon: "🔗" },
      { name: "JWT", level: 85, icon: "🔐" },
      { name: "Socket.IO", level: 75, icon: "🔌" },
    ],
  },
  {
    title: "Database & Storage",
    icon: "🗄️",
    skills: [
      { name: "MongoDB", level: 85, icon: "🍃" },
      { name: "PostgreSQL", level: 80, icon: "🐘" },
      { name: "Cloudinary", level: 85, icon: "☁️" },
    ],
  },
  {
    title: "Tools & Deployment",
    icon: "🛠️",
    skills: [
      { name: "Git", level: 90, icon: "📝" },
      { name: "GitHub", level: 90, icon: "🐙" },
      { name: "Postman", level: 85, icon: "📮" },
      { name: "Netlify", level: 80, icon: "🌐" },
      { name: "Render", level: 80, icon: "🚀" },
    ],
  },
]

const softSkills = [
  "Problem Solving",
  "Team Collaboration",
  "Communication",
  "Time Management",
  "Adaptability",
  "Critical Thinking",
  "Leadership",
  "Attention to Detail",
]

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen py-20">
      <div ref={sectionRef} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll opacity-0 translate-y-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            My <span className="text-primary">Skills</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Technical Skills */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card
              key={category.title}
              className="animate-on-scroll opacity-0 translate-y-8"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <span className="text-2xl">{category.icon}</span>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{skill.icon}</span>
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Soft Skills */}
        <div className="animate-on-scroll opacity-0 translate-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <span className="text-2xl">🧠</span>
                Soft Skills
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                {softSkills.map((skill, index) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
