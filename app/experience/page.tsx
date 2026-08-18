"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Building, GraduationCap } from "lucide-react"

const experiences = [
  {
    title: "Senior Software Engineer",
    company: "Ignite Dev",
    location: "Remote, Lahore",
    period: "Sept 2025 – Present",
    type: "Full-time",
    description:
      "Built AI-powered solutions and full-stack applications for different client projects using Node.js, React.js, PostgreSQL, and automation tools. Developed a voice AI agent using Retell AI with a custom knowledge base that extracts car inventory data from Excel sheets and responds to client queries dynamically. Integrated n8n workflows for automated data extraction, processing, and synchronization between systems.",
    technologies: ["Node.js", "React.js", "PostgreSQL", "Retell AI", "n8n", "GoHighLevel", "AI Agents"],
    achievements: [
      "Developed a voice AI agent using Retell AI with custom knowledge base",
      "Integrated n8n workflows for automated data extraction and processing",
      "Mapped and synced customer and inventory data to GoHighLevel using custom fields and API endpoints",
      "Worked on multiple full-stack features including frontend interfaces, backend APIs, database integration, and workflow automation",
    ],
  },
  {
    title: "Software Engineer",
    company: "A3Techverse",
    location: "Remote, United States",
    period: "Aug 2025 – Aug 2026",
    type: "Full-time",
    description:
      "Integrated AI agents into production apps to automate user workflows and cut down on manual work. Built a Slack-based AI agent using LangChain and LangGraph that classifies user intents, retrieves context from conversations, and triggers actions like meeting creation and summaries. Built advanced animations and responsive interfaces that work smoothly across desktop, tablet, and mobile.",
    technologies: ["React.js", "Next.js", "Node.js", "Express.js", "LangChain", "LangGraph", "Stripe", "OpenAI"],
    achievements: [
      "Built a Slack-based AI agent using LangChain and LangGraph for workflow automation",
      "Integrated AI agents into production apps to automate user workflows",
      "Implemented Stripe payment integrations, webhook handling, and cron-based background jobs",
      "Awarded Employee Recognition for strong contributions across multiple projects",
    ],
  },
  {
    title: "Associate Software Engineer",
    company: "IIFA Tech",
    location: "Lahore, Pakistan",
    period: "June 2024 – July 2025",
    type: "Full-time",
    description:
      "Delivered full-stack MERN projects end-to-end, building UI components, integrating APIs, and optimizing performance. Worked on multiple client projects involving real-time features, payment integrations, and complex data management systems.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "PostgreSQL", "TypeScript"],
    achievements: [
      "Delivered full-stack MERN projects end-to-end",
      "Built UI components, integrated APIs, and optimized application performance",
      "Named Employee of the Month for consistently delivering on time and supporting the team's goals",
      "Collaborated with cross-functional teams on project delivery",
    ],
  },
  {
    title: "ReactJs Intern",
    company: "PiRails",
    location: "Lahore, Pakistan",
    period: "March 2024 – May 2024",
    type: "Internship",
    description:
      "Built responsive web pages in React using JSX, props, hooks, and reusable components. Practiced API integration, client-side routing, and state management while strengthening HTML, CSS, and JavaScript fundamentals.",
    technologies: ["HTML", "CSS", "JavaScript", "React.js"],
    achievements: [
      "Built responsive web pages using React.js fundamentals",
      "Practiced API integration and client-side routing",
      "Strengthened HTML, CSS, and JavaScript fundamentals",
      "Developed reusable component libraries",
    ],
  },
]

const education = [
  {
    degree: "Bachelor in Computer Engineering",
    institution: "COMSATS University Islamabad, Lahore Campus",
    location: "Lahore, Pakistan",
    period: "2020 – 2024",
    description:
      "Comprehensive study of computer engineering principles, software development, and modern technologies. Focused on web development, database systems, and software engineering practices.",
    achievements: [
      "Completed coursework in Data Structures and Algorithms",
      "Studied Database Management Systems",
      "Learned Software Engineering principles",
      "Participated in various coding competitions",
    ],
  },
  {
    degree: "FSc Pre-Engineering",
    institution: "Punjab College of Science, Gujranwala",
    location: "Gujranwala, Pakistan",
    period: "2018 – 2020",
    description:
      "Foundation studies in Mathematics, Physics, and Chemistry, providing strong analytical and problem-solving skills essential for engineering and technology fields.",
    achievements: [
      "Strong foundation in Mathematics and Physics",
      "Developed analytical thinking skills",
      "Excellent academic performance",
      "Prepared for engineering studies",
    ],
  },
]

export default function Experience() {
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
            Experience & <span className="text-primary">Education</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My professional journey and educational background
          </p>
        </div>

        {/* Experience Section */}
        <div className="mb-20">
          <div className="flex items-center mb-8 animate-on-scroll opacity-0 translate-y-8">
            <Building className="h-6 w-6 text-primary mr-3" />
            <h2 className="text-3xl font-bold">Professional Experience</h2>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="animate-on-scroll opacity-0 translate-y-8 group hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] border-2 hover:border-primary/50 bg-gradient-to-br from-background to-primary/5"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader>
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <CardTitle className="text-2xl mb-2 group-hover:text-primary transition-colors duration-300">{exp.title}</CardTitle>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                        <div className="flex items-center">
                          <Building className="h-4 w-4 mr-1" />
                          {exp.company}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start lg:items-end gap-2 mt-4 lg:mt-0">
                      <div className="flex items-center text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-1" />
                        {exp.period}
                      </div>
                      <Badge variant="secondary">{exp.type}</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">{exp.description}</p>

                  <div>
                    <h4 className="font-semibold mb-3 group-hover:text-primary transition-colors duration-300">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 group-hover:text-primary transition-colors duration-300">Key Achievements</h4>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start hover:translate-x-2 transition-transform duration-300 group/item">
                          <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0 group-hover/item:scale-150 transition-transform duration-300"></span>
                          <span className="group-hover/item:text-foreground transition-colors duration-300">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div>
          <div className="flex items-center mb-8 animate-on-scroll opacity-0 translate-y-8">
            <GraduationCap className="h-6 w-6 text-primary mr-3" />
            <h2 className="text-3xl font-bold">Education</h2>
          </div>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <Card
                key={index}
                className="animate-on-scroll opacity-0 translate-y-8 group hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] border-2 hover:border-primary/50 bg-gradient-to-br from-background to-primary/5"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader>
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <CardTitle className="text-2xl mb-2 group-hover:text-primary transition-colors duration-300">{edu.degree}</CardTitle>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-muted-foreground">
                        <div className="flex items-center">
                          <Building className="h-4 w-4 mr-1" />
                          {edu.institution}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {edu.location}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center text-muted-foreground mt-4 lg:mt-0">
                      <Calendar className="h-4 w-4 mr-1" />
                      {edu.period}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">{edu.description}</p>

                  <div>
                    <h4 className="font-semibold mb-3 group-hover:text-primary transition-colors duration-300">Key Highlights</h4>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      {edu.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start hover:translate-x-2 transition-transform duration-300 group/item">
                          <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0 group-hover/item:scale-150 transition-transform duration-300"></span>
                          <span className="group-hover/item:text-foreground transition-colors duration-300">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
