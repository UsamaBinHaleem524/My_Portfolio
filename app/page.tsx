"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-primary/5">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="opacity-0 translate-y-8 transition-all duration-1000 ease-out animate-fade-in-up">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
              <span className="text-foreground">Hi, I'm </span>
              <span className="text-primary font-mono">Usama Bin Haleem</span>
            </h1>
            <h2 className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-4 font-mono">
              MERN Stack Developer
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Proficient in MERN stack development with nearly two years of hands-on experience building web applications and
              APIs, using modern technologies to deliver robust and scalable solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link href="/projects">
                <Button size="lg" className="group">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg">
                  Hire Me
                </Button>
              </Link>
            </div>

            <div className="flex justify-center space-x-6">
              <a
                href="mailto:usama.binhaleem524@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com/in/usama-bin-haleem"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://github.com/UsamaBinHaleem524"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-16 pb-[8rem] bg-gradient-to-b from-background to-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">My Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-transparent rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 border border-gray-700/50">
              <div className="text-4xl font-bold text-primary mb-3">2+</div>
              <div className="text-lg text-gray-300 font-medium">Years Experience</div>
              <div className="text-sm text-gray-400 mt-2">Building robust MERN stack solutions</div>
            </div>
            <div className="p-6 bg-transparent rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 border border-gray-700/50">
              <div className="text-4xl font-bold text-primary mb-3">20+</div>
              <div className="text-lg text-gray-300 font-medium">Projects Completed</div>
              <div className="text-sm text-gray-400 mt-2">Delivering scalable web applications</div>
            </div>
            <div className="p-6 bg-transparent rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 border border-gray-700/50">
              <div className="text-4xl font-bold text-primary mb-3">100%</div>
              <div className="text-lg text-gray-300 font-medium">Client Satisfaction</div>
              <div className="text-sm text-gray-400 mt-2">Committed to exceeding expectations</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}