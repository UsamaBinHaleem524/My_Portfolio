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
            <div className="relative">
              <div className="w-80 h-80 mx-auto rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <Image
                  src={pic}
                  alt="Usama Bin Haleem"
                  className="rounded-xl object-cover !w-[300px] !h-[300px]"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary rounded-full flex items-center justify-center">
                <span className="text-2xl">👨‍💻</span>
              </div>
            </div>
          </div>

          {/* About Content */}
          <div className="animate-on-scroll opacity-0 translate-y-8">
            <h2 className="text-3xl font-bold mb-6">MERN Stack Developer</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a proficient MERN stack developer with nearly two years of
                hands-on experience building web applications and APIs using
                modern technologies. My journey in software development has been
                driven by a passion for creating robust and scalable solutions.
              </p>
              <p>
                Currently working as a Software Engineer at A3Techverse, I
                integrate AI agents into applications, implement advanced animations,
                and develop interactive and highly responsive user interfaces. I also
                work on projects involving various payment gateways, webhook processing,
                and scheduled background tasks using cron jobs.
              </p>
              <p>
                My experience spans across various domains including real estate
                platforms, healthcare applications, and business formation
                services. I believe in writing clean, maintainable code and
                following best practices to deliver exceptional user
                experiences.
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
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <GraduationCap className="h-6 w-6 text-primary mr-3" />
                <h3 className="text-xl font-semibold">Education</h3>
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

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Calendar className="h-6 w-6 text-primary mr-3" />
                <h3 className="text-xl font-semibold">Current Role</h3>
              </div>
              <div>
                <h4 className="font-medium">Software Engineer</h4>
                <p className="text-sm text-muted-foreground">
                  A3Techverse, Remote, United States
                </p>
                <p className="text-sm text-muted-foreground">
                  August 2025 - Present
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Integrating AI agents into applications, implementing advanced animations,
                  and developing interactive and highly responsive user interfaces.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
