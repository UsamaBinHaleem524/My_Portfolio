"use client";

import { useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Female Travelers Network – AI Travel Assistant with RAG",
    description:
      "Built a production-ready RAG (Retrieval-Augmented Generation) pipeline that grounds an AI travel assistant in the company's travel documents, preventing hallucinated package details. Implemented PDF extraction, semantic chunking, and Google Gemini vector embeddings stored in Qdrant, with top-5 similarity search feeding retrieved context into the LLM prompt. Developed a session-based conversation flow with natural multi-turn lead collection, and integrated the WhatsApp Cloud API so customers chat with the assistant directly on WhatsApp.",
    technologies: [
      "Node.js",
      "Google Gemini API",
      "Qdrant (Vector DB)",
      "Next.js",
      "Tailwind CSS",
      "Google Sheets API",
      "WhatsApp API",
    ],
    features: [
      "Production-ready RAG pipeline",
      "PDF extraction and semantic chunking",
      "Google Gemini vector embeddings in Qdrant",
      "Top-5 similarity search with context retrieval",
      "Session-based conversation flow",
      "Multi-turn lead collection",
      "WhatsApp Cloud API integration",
      "Next.js frontend with Vercel serverless form",
    ],
    liveUrl: "#",
  },
  {
    title: "Butler AI – Slack-based AI Assistant",
    description:
      "Built Butler AI, an internal Slack bot for A3Techverse that helps teams track tasks, generate summaries, create meetings, and draft proposals directly from Slack messages. Designed multi-step agent workflows using LangChain and LangGraph, with intent classification, natural-language date parsing, and Slack conversation context retrieval. Integrated Google Meet to create instant meeting links from Slack, plus HMAC-verified webhook handling, Prisma-based persistence, and structured logging.",
    technologies: [
      "Node.js",
      "Express.js",
      "TypeScript",
      "LangChain",
      "LangGraph",
      "OpenAI",
      "PostgreSQL",
      "Prisma",
      "Slack API",
      "Google Meet",
    ],
    features: [
      "Multi-step agent workflows using LangChain and LangGraph",
      "Intent classification and natural-language date parsing",
      "Slack conversation context retrieval",
      "Task tracking and summary generation",
      "Meeting creation with Google Meet integration",
      "HMAC-verified webhook handling",
      "Prisma-based persistence",
      "Structured logging",
    ],
    liveUrl: "#",
  },
  {
    title: "CantonCarib – International Cargo Booking Platform",
    description:
      "Built CantonCarib, a full-stack platform for international cargo booking covering shipment containers, payments, document processing, and live shipment tracking. Developed REST APIs in NestJS with JWT-based auth via HTTP-only cookies, multi-domain routing (public site + app subdomain), and automatic audit logging for data changes. Built the Next.js frontend using Tailwind CSS, shadcn/ui components, and react-hook-form + Zod, including an in-app AI chatbot for customer support. Deployed via Docker on Fly.io with production and staging environments.",
    technologies: [
      "NestJS",
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Tailwind CSS",
      "shadcn/ui",
      "Docker",
      "Fly.io",
    ],
    features: [
      "International cargo booking system",
      "Shipment container management",
      "Payment processing and document handling",
      "Live shipment tracking",
      "JWT-based auth via HTTP-only cookies",
      "Multi-domain routing (public site + app subdomain)",
      "Automatic audit logging",
      "In-app AI chatbot for customer support",
      "Docker deployment on Fly.io",
    ],
    liveUrl: "https://cantoncarib.com",
  },
  {
    title: "Afaf Medical Care – Healthcare Revenue Optimization Application",
    description:
      "Built a modern single-page React frontend for Afaf Medical Care, a healthcare billing company focused on Revenue Cycle Management (RCM) and practice optimization. Highlighted key services (including their 97.02% claim acceptance rate) with a clean, responsive layout. Integrated AOS and React Bits for interactive components and scroll-based animations.",
    technologies: ["React.js", "AOS", "React Bits", "Tailwind CSS"],
    features: [
      "Revenue Cycle Management (RCM) showcase",
      "97.02% claim acceptance rate highlights",
      "Clean and responsive layout",
      "Interactive components with AOS and React Bits",
      "Scroll-based animations",
      "Practice optimization features",
    ],
    liveUrl: "https://afafmedicalcare.netlify.app/",
  },
  {
    title: "Vodocs – Business Formation and S-Corp Filing Platform",
    description:
      "Contributed to Vodocs, a MERN-based platform for business formation, S-Corp filing, EIN applications, and compliance services. Designed and built responsive UI components for pricing comparisons, service features, and a step-by-step LLC formation flow. Integrated AOS-based scroll animations for a smoother, more polished user experience.",
    technologies: ["React.js", "Tailwind CSS", "AOS"],
    features: [
      "Business formation and S-Corp filing",
      "EIN applications and compliance services",
      "Responsive UI components",
      "Pricing comparisons",
      "Step-by-step LLC formation flow",
      "AOS-based scroll animations",
    ],
    liveUrl: "https://www.vodocs.com/",
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen py-20">
      <div ref={sectionRef} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll opacity-0 translate-y-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            My <span className="text-primary">Projects</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and contributions to various web
            applications
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="animate-on-scroll opacity-0 translate-y-8 group hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] border-2 hover:border-primary/50 bg-gradient-to-br from-background to-primary/5"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <CardTitle className="text-2xl mb-2 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </CardTitle>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Technologies */}
                <div>
                  <h4 className="font-semibold mb-3 group-hover:text-primary transition-colors duration-300">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="text-xs hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div>
                  <h4 className="font-semibold mb-3 group-hover:text-primary transition-colors duration-300">Key Features</h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center hover:translate-x-2 transition-transform duration-300 group/item">
                        <span className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0 group-hover/item:scale-150 transition-transform duration-300"></span>
                        <span className="group-hover/item:text-foreground transition-colors duration-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                {project.liveUrl && project.liveUrl !== "#" && (
                  <div className="flex gap-4 pt-4">
                    <Button asChild className="group/btn hover:shadow-lg hover:shadow-primary/50 transition-all duration-300">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4 group-hover/btn:rotate-45 transition-transform duration-300" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
