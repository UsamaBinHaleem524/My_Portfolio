"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, MapPin, Calendar, GraduationCap } from "lucide-react";
import pic from "../assets/portfolio.jpg";

export default function About() {
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
            About <span className="text-primary">Me</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my journey, skills, and passion for
            development
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Profile Image */}
          <div className="animate-on-scroll opacity-0 translate-y-8">
            <div className="relative group/profile">
              <div className="w-80 h-80 mx-auto rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center group-hover/profile:scale-105 transition-transform duration-500 group-hover/profile:shadow-2xl group-hover/profile:shadow-primary/50">
                <Image
                  src={pic}
                  alt="Usama Bin Haleem"
                  className="rounded-xl object-cover !w-[300px] !h-[300px] group-hover/profile:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-r from-primary to-blue-500 rounded-full flex items-center justify-center shadow-lg group-hover/profile:scale-125 transition-transform duration-500 animate-pulse-glow">
                <span className="text-3xl">👨‍💻</span>
              </div>
            </div>
          </div>

          {/* About Content */}
          <div className="animate-on-scroll opacity-0 translate-y-8">
            <h2 className="text-3xl font-bold mb-6">Full-Stack Software Engineer</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a Full-stack Software Engineer with 3 years of experience building MERN and AI-powered applications. 
                Skilled in developing full-stack products, AI agents, workflow automations, and third-party integrations. 
                My journey in software development has been driven by a passion for creating robust and scalable solutions 
                that solve real-world problems.
              </p>
              <p>
                Currently working as a Senior Software Engineer at Ignite Dev, I build AI-powered solutions and full-stack 
                applications for different client projects using Node.js, React.js, PostgreSQL, and automation tools. I've 
                developed voice AI agents, integrated n8n workflows for automated data extraction, and worked on complex 
                integrations with platforms like GoHighLevel.
              </p>
              <p>
                Previously at A3Techverse, I integrated AI agents into production apps using LangChain and LangGraph, 
                built Slack-based AI assistants, and implemented Stripe payment integrations. My experience spans across 
                various domains including AI/ML, real estate platforms, healthcare applications, cargo booking systems, 
                and business formation services. I believe in writing clean, maintainable code and following best 
                practices to deliver exceptional user experiences.
              </p>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="https://drive.google.com/file/d/1ekigZFbS3M9AMPw6IHLAapykY6DlVPcJ/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="group">
                  <Download className="mr-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
                  Download Resume
                </Button>
              </a>
              <div className="flex items-center text-muted-foreground">
                <MapPin className="mr-2 h-4 w-4" />
                Lahore, Pakistan
              </div>
            </div>
          </div>
        </div>

        {/* Quick Facts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-on-scroll opacity-0 translate-y-8">
          <Card className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 border-2 hover:border-primary/50 bg-gradient-to-br from-background to-primary/5">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <GraduationCap className="h-6 w-6 text-primary mr-3 group-hover:scale-125 transition-transform duration-300" />
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">Education</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium">
                    Bachelor in Computer Engineering
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    COMSATS University Islamabad, Lahore Campus
                  </p>
                  <p className="text-sm text-muted-foreground">2020 - 2024</p>
                </div>
                <div>
                  <h4 className="font-medium">FSc Pre-Engineering</h4>
                  <p className="text-sm text-muted-foreground">
                    Punjab College of Science, Gujranwala
                  </p>
                  <p className="text-sm text-muted-foreground">2018 - 2020</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 border-2 hover:border-primary/50 bg-gradient-to-br from-background to-primary/5">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Calendar className="h-6 w-6 text-primary mr-3 group-hover:scale-125 transition-transform duration-300" />
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">Current Role</h3>
              </div>
              <div>
                <h4 className="font-medium">Senior Software Engineer</h4>
                <p className="text-sm text-muted-foreground">
                  Ignite Dev, Remote, Lahore
                </p>
                <p className="text-sm text-muted-foreground">
                  Sept 2025 - Present
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Building AI-powered solutions and full-stack applications using Node.js, React.js, 
                  PostgreSQL, and automation tools. Developing voice AI agents and workflow automations.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
