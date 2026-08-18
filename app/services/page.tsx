"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Globe, Smartphone, Settings, Zap, ArrowRight, CheckCircle, Brain, Workflow } from "lucide-react"

const services = [
  {
    icon: <Brain className="h-8 w-8" />,
    title: "AI & LLM Integration",
    description:
      "Integrate cutting-edge AI capabilities into your applications using RAG, vector embeddings, and LLM APIs to create intelligent, context-aware solutions.",
    features: [
      "RAG (Retrieval-Augmented Generation) implementation",
      "Vector embeddings and semantic search",
      "Google Gemini and OpenAI API integration",
      "AI chatbots and virtual assistants",
      "Prompt engineering and optimization",
    ],
    technologies: ["Google Gemini API", "LangChain", "LangGraph", "Qdrant", "OpenAI", "RAG"],
  },
  {
    icon: <Workflow className="h-8 w-8" />,
    title: "Workflow Automation",
    description:
      "Automate repetitive tasks and build intelligent workflows using n8n and custom automation scripts to improve efficiency and reduce manual work.",
    features: [
      "n8n workflow automation",
      "Third-party API integrations",
      "Data extraction and processing",
      "Automated synchronization between systems",
      "Custom automation scripts",
    ],
    technologies: ["n8n", "Node.js", "REST APIs", "Webhooks", "Cron Jobs"],
  },
  {
    icon: <Globe className="h-8 w-8" />,
    title: "Custom Web Applications",
    description:
      "Full-stack web applications built with MERN stack technologies, tailored to your specific business needs and requirements.",
    features: [
      "Responsive design for all devices",
      "Modern UI/UX with React.js",
      "Scalable backend with Node.js",
      "Database design and optimization",
      "RESTful API development",
    ],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "PostgreSQL"],
  },
  {
    icon: <Code className="h-8 w-8" />,
    title: "API Development & Integration",
    description:
      "Robust RESTful APIs and third-party integrations to connect your applications with external services and databases.",
    features: [
      "RESTful API design and development",
      "Third-party API integrations",
      "Authentication and authorization",
      "API documentation",
      "Performance optimization",
    ],
    technologies: ["Node.js", "Express.js", "JWT", "Postman", "MongoDB"],
  },
  {
    icon: <Database className="h-8 w-8" />,
    title: "Database Design & Optimization",
    description:
      "Efficient database architecture and optimization services to ensure your application performs at its best.",
    features: [
      "Database schema design",
      "Query optimization",
      "Data migration services",
      "Performance monitoring",
      "Backup and recovery solutions",
    ],
    technologies: ["MongoDB", "PostgreSQL", "Database Indexing", "Query Optimization"],
  },
  {
    icon: <Smartphone className="h-8 w-8" />,
    title: "Responsive Web Development",
    description:
      "Mobile-first responsive websites that provide excellent user experience across all devices and screen sizes.",
    features: [
      "Mobile-first design approach",
      "Cross-browser compatibility",
      "Performance optimization",
      "SEO-friendly structure",
      "Progressive Web App features",
    ],
    technologies: ["React.js", "Tailwind CSS", "HTML5", "CSS3", "JavaScript"],
  },
  {
    icon: <Settings className="h-8 w-8" />,
    title: "Bug Fixing & Maintenance",
    description:
      "Comprehensive debugging, maintenance, and support services to keep your applications running smoothly.",
    features: [
      "Bug identification and fixing",
      "Performance improvements",
      "Security updates",
      "Code refactoring",
      "Ongoing maintenance support",
    ],
    technologies: ["Debugging Tools", "Performance Monitoring", "Security Auditing"],
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: "Performance Optimization",
    description:
      "Speed up your web applications with advanced optimization techniques and best practices implementation.",
    features: [
      "Code splitting and lazy loading",
      "Image and asset optimization",
      "Caching strategies",
      "Bundle size reduction",
      "Core Web Vitals improvement",
    ],
    technologies: ["Webpack", "Performance Tools", "CDN Integration", "Caching"],
  },
]

export default function Services() {
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
            My <span className="text-primary">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive web development solutions to bring your ideas to life
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="animate-on-scroll opacity-0 translate-y-8 group hover:shadow-2xl transition-all duration-500 hover:scale-105 border-2 hover:border-primary/50 bg-gradient-to-br from-background to-primary/5"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">{service.icon}</div>
                  <div>
                    <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors duration-300">{service.title}</CardTitle>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Features */}
                <div>
                  <h4 className="font-semibold mb-3 group-hover:text-primary transition-colors duration-300">What's Included</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm group/item hover:translate-x-2 transition-transform duration-300">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300" />
                        <span className="group-hover/item:text-foreground transition-colors duration-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="font-semibold mb-3 group-hover:text-primary transition-colors duration-300">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <Button className="w-full group/btn hover:shadow-lg hover:shadow-primary/50 transition-all duration-300">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center animate-on-scroll opacity-0 translate-y-8">
          <Card className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border-primary/20 hover:shadow-2xl transition-all duration-500 hover:scale-105">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Let's discuss your requirements and create something amazing together. I'm here to help you bring your
                ideas to life with modern web technologies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild className="group hover:shadow-lg hover:shadow-primary/50 transition-all duration-300">
                  <a href="/contact">
                    Get Free Consultation
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-2" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild className="hover:shadow-lg transition-all duration-300">
                  <a href="mailto:usama.binhaleem524@gmail.com">Email Me Directly</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
