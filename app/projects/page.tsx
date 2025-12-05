"use client";

import { useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "MyHomes – Real Estate Platform",
    description:
      "Contributed as a Full Stack Developer to MyHomes, a real estate platform enabling customers and property owners to book and manage properties online with short, medium, and long lease options. Implemented dynamic booking, calendar availability, and price negotiation features across nine user roles including Admin, Agent, Landlord, and Customer. Deployed the backend and PostgreSQL database on Render.",
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
      "Nine user roles (Admin, Agent, Landlord, Customer, etc.)",
      "Property management",
      "Deployed on Render",
    ],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "LSP Homes – Short-Term Rental Platform",
    description:
      "Built a full-stack MERN application for LSP Homes, a short-let rental platform providing admin and customer dashboards for managing properties and bookings. Implemented protected routing, RESTful APIs, dynamic property forms, and calendar synchronization with iCalendar integration. Developed responsive UI with multi-step property addition, booking management, chat system, and admin features for amenities, features, and settings.",
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
      "Protected routing",
      "RESTful APIs",
    ],
    liveUrl: "#",
  },
  {
    title: "Afaf Medical Care – Healthcare Revenue Optimization Application",
    description:
      "Developed a modern, single-page React frontend for Afaf Medical Care, a healthcare billing services company focused on Revenue Cycle Management (RCM) and practice optimization. Highlighted key specialties such as claim handling (97.02% acceptance rate), revenue consistency strategies, and enhanced patient care support through engaging and responsive UI. Integrated AOS and React Bits for interactive UI components and animations.",
    technologies: ["React.js", "AOS", "React Bits", "Tailwind CSS"],
    features: [
      "Revenue Cycle Management (RCM)",
      "97.02% claim acceptance rate highlights",
      "Interactive UI components with AOS and React Bits",
      "Responsive design",
      "Practice optimization features",
      "Enhanced patient care support",
    ],
    liveUrl: "https://afafmedicalcare.netlify.app/",
  },
  {
    title: "Vodocs – Business Formation and S-Corp Filing Platform",
    description:
      "Contributed to the MERN-based Vodocs platform focused on business formation, S-Corp filing, EIN applications, and compliance services. Designed and implemented responsive, accessible UI components for pricing comparisons, service features, and step-by-step LLC formation process. Integrated scroll-based animations using AOS for enhanced user experience across all sections and interactive pricing tables.",
    technologies: ["React.js", "Tailwind CSS", "AOS"],
    features: [
      "Business formation services",
      "S-Corp filing system",
      "EIN applications",
      "Compliance services",
      "Pricing comparisons",
      "Step-by-step LLC formation process",
      "Scroll-based animations with AOS",
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
              className="animate-on-scroll opacity-0 translate-y-8"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <CardTitle className="text-2xl mb-2">
                  {project.title}
                </CardTitle>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
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
                {project.liveUrl && project.liveUrl !== "#" && (
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
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
