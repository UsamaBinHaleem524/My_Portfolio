"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import afaf from "../assets/afafmed.png";
import vodocs from "../assets/vodocs.png"

const projects = [
  {
    title: "MyHomes – Real Estate Platform",
    description:
      "A comprehensive real estate platform enabling customers and property owners to book and manage properties online with short, medium, and long lease options. Features dynamic booking, calendar availability, and price negotiation across nine user roles.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "PostgreSQL",
      "TypeScript",
    ],
    features: [
      "Dynamic booking system",
      "Calendar availability",
      "Price negotiation",
      "Multi-role user management",
      "Property management",
    ],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "LSP Homes – Short-Term Rental Platform",
    description:
      "A full-stack MERN application for short-let rental platform providing admin and customer dashboards for managing properties and bookings. Includes protected routing, RESTful APIs, and calendar synchronization.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
    ],
    features: [
      "Admin & customer dashboards",
      "Multi-step property forms",
      "iCalendar integration",
      "Chat system",
      "Booking management",
    ],
    liveUrl: "#",
  },
  {
    title: "Afaf Medical Care – Healthcare RCM",
    description:
      "Modern single-page React frontend for a healthcare billing services company focused on Revenue Cycle Management. Features engaging UI with 97.02% claim acceptance rate highlights and interactive components.",
    image: afaf,
    technologies: ["React.js", "AOS", "React Bits", "Tailwind CSS"],
    features: [
      "Revenue cycle management",
      "Interactive UI components",
      "Responsive design",
      "Performance optimization",
      "Healthcare billing focus",
    ],
    liveUrl: "https://afafmedicalcare.netlify.app/",
  },
  {
    title: "Vodocs – Business Formation Platform",
    description:
      "MERN-based platform for business formation, S-Corp filing, EIN applications, and compliance services. Features responsive UI with pricing comparisons and step-by-step LLC formation process.",
    image: vodocs,
    technologies: ["React.js", "Tailwind CSS", "AOS"],
    features: [
      "Business formation services",
      "S-Corp filing system",
      "EIN applications",
      "Pricing comparisons",
      "Step-by-step processes",
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
        <div className="space-y-12">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className={`animate-on-scroll opacity-0 translate-y-8 overflow-hidden ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="lg:flex">
                <div className="lg:w-[70%]">
                  <div className="relative h-64 lg:h-full">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="lg:w-1/2 p-6 lg:p-8">
                  <CardHeader className="p-0 mb-4">
                    <CardTitle className="text-2xl mb-2">
                      {project.title}
                    </CardTitle>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </CardHeader>
                  <CardContent className="p-0 space-y-6">
                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Key Features */}
                    <div>
                      <h4 className="font-semibold mb-3">Key Features</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {project.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4 pt-4">
                      <Button asChild>
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
