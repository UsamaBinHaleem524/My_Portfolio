"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Building, GraduationCap } from "lucide-react"

const experiences = [
  {
    title: "Software Engineer",
    company: "A3Techverse",
    location: "Remote, United States",
    period: "August 2025 – Present",
    type: "Full-time",
    description:
      "Integrating AI agents into applications, implementing advanced animations, and developing interactive and highly responsive user interfaces. Working on projects involving various payment gateways, webhook processing, and scheduled background tasks using cron jobs.",
    technologies: ["React.js", "Next.js", "Node.js", "Express.js", "AI Integration", "Payment Gateways"],
    achievements: [
      "Integrated AI agents into applications for enhanced functionality",
      "Implemented advanced animations and interactive user interfaces",
      "Developed payment gateway integrations and webhook processing systems",
      "Recognized with Employee Recognition for outstanding performance and impactful contribution across multiple projects",
    ],
  },
  {
    title: "Associate Software Engineer",
    company: "IIFA Tech",
    location: "Lahore, Pakistan",
    period: "June 2024 – August 2025",
    type: "Full-time",
    description:
      "Worked on multiple full-stack projects using the MERN stack, contributing to both the frontend and backend — handling API integrations, building user interfaces, and developing scalable, high-performance web applications.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "PostgreSQL", "TypeScript"],
    achievements: [
      "Developed and maintained multiple full-stack web applications",
      "Implemented RESTful APIs and database integrations",
      "Collaborated with cross-functional teams on project delivery",
      "Honored as the Employee of the Month for consistently exceeding project milestones and contributing to the team's overall success",
    ],
  },
  {
    title: "ReactJs Intern",
    company: "PiRails",
    location: "Lahore, Pakistan",
    period: "March 2024 – May 2024",
    type: "Internship",
    description:
      "Learned core web technologies including HTML, CSS, and JavaScript, along with React.js fundamentals. Built responsive UIs using JSX, Props, Hooks, and reusable components. Practiced API integration, routing, and state management through hands-on project development.",
    technologies: ["HTML", "CSS", "JavaScript", "React.js"],
    achievements: [
      "Mastered React.js fundamentals and modern development practices",
      "Built responsive and interactive user interfaces",
      "Implemented state management and API integrations",
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
                className="animate-on-scroll opacity-0 translate-y-8"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader>
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <CardTitle className="text-2xl mb-2">{exp.title}</CardTitle>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-muted-foreground">
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
                    <h4 className="font-semibold mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Key Achievements</h4>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          {achievement}
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
                className="animate-on-scroll opacity-0 translate-y-8"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader>
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <CardTitle className="text-2xl mb-2">{edu.degree}</CardTitle>
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
                    <h4 className="font-semibold mb-3">Key Highlights</h4>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      {edu.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          {achievement}
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
