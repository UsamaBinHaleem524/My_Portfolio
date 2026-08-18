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
      { name: "Next.js", level: 85, icon: "▲" },
      { name: "Redux Toolkit", level: 85, icon: "🔄" },
      { name: "Tailwind CSS", level: 90, icon: "🎨" },
      { name: "React Bits", level: 80, icon: "🧩" },
      { name: "AOS", level: 85, icon: "✨" },
      { name: "HTML/CSS", level: 95, icon: "🌐" },
    ],
  },
  {
    title: "Backend Development",
    icon: "⚙️",
    skills: [
      { name: "Node.js", level: 90, icon: "🟢" },
      { name: "Express.js", level: 88, icon: "🚀" },
      { name: "Nest.js", level: 82, icon: "🪺" },
      { name: "REST APIs", level: 90, icon: "🔗" },
      { name: "JWT", level: 85, icon: "🔐" },
      { name: "Socket.IO", level: 78, icon: "🔌" },
      { name: "Swagger", level: 80, icon: "📚" },
    ],
  },
  {
    title: "AI & LLM",
    icon: "🤖",
    skills: [
      { name: "RAG", level: 85, icon: "🧠" },
      { name: "Google Gemini API", level: 85, icon: "✨" },
      { name: "Vector Embeddings", level: 82, icon: "🔢" },
      { name: "Semantic Search", level: 80, icon: "🔍" },
      { name: "Prompt Engineering", level: 88, icon: "💬" },
      { name: "LangChain", level: 83, icon: "⛓️" },
      { name: "LangGraph", level: 80, icon: "📊" },
    ],
  },
  {
    title: "Database & Storage",
    icon: "🗄️",
    skills: [
      { name: "MongoDB", level: 85, icon: "🍃" },
      { name: "PostgreSQL", level: 82, icon: "🐘" },
      { name: "Qdrant (Vector DB)", level: 80, icon: "🔮" },
      { name: "Cloudinary", level: 85, icon: "☁️" },
    ],
  },
  {
    title: "DevOps & Tools",
    icon: "🛠️",
    skills: [
      { name: "Git", level: 90, icon: "📝" },
      { name: "GitHub", level: 90, icon: "🐙" },
      { name: "Docker", level: 78, icon: "🐳" },
      { name: "CI/CD", level: 75, icon: "🔄" },
      { name: "Postman", level: 85, icon: "📮" },
      { name: "Render", level: 80, icon: "🚀" },
      { name: "Netlify", level: 80, icon: "🌐" },
      { name: "Jira", level: 80, icon: "🎯" },
      { name: "n8n", level: 82, icon: "🔗" },
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
              className="animate-on-scroll opacity-0 translate-y-8 group hover:shadow-2xl transition-all duration-500 hover:scale-105 border-2 hover:border-primary/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <span className="text-3xl group-hover:scale-125 transition-transform duration-300">{category.icon}</span>
                  <span className="group-hover:text-primary transition-colors duration-300">{category.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, idx) => (
                  <div 
                    key={skill.name} 
                    className="space-y-2 group/skill hover:translate-x-2 transition-transform duration-300"
                    style={{ animationDelay: `${idx * 0.05}s` }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-lg group-hover/skill:scale-125 transition-transform duration-300">{skill.icon}</span>
                        <span className="font-medium group-hover/skill:text-primary transition-colors duration-300">{skill.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground group-hover/skill:text-primary transition-colors duration-300 font-semibold">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2 group-hover/skill:h-3 transition-all duration-300" />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Soft Skills */}
        <div className="animate-on-scroll opacity-0 translate-y-8">
          <Card className="hover:shadow-2xl transition-all duration-500 border-2 hover:border-primary/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <span className="text-3xl">🧠</span>
                <span>Soft Skills</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                {softSkills.map((skill, index) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="px-4 py-2 text-sm hover:bg-gradient-to-r hover:from-primary hover:to-blue-500 hover:text-primary-foreground transition-all duration-300 cursor-default hover:scale-110 hover:shadow-lg animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.05}s` }}
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
