import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Printer, Maximize2, FileText, ArrowRight, Box } from "lucide-react";
import {
  AboutSection,
  HeroSection,
  ServicesSection,
} from "@/components/landingPageSecitons";
import TestimonialsSection from "@/components/landingPageSecitons/TestimonialsSection";
import ProcessSection from "@/components/landingPageSecitons/ProcessSection";
import CTASection from "@/components/landingPageSecitons/CTASection";

export default function GraphixForgeLandingPage() {
  return (
    <div className="flex flex-col min-h-screen ">
      <header className="px-4 lg:px-6 h-14 flex items-center ">
        <Link className="flex items-center justify-center " href="#">
          <Image
            src="/placeholder.svg"
            alt="GraphixForge Logo"
            width={32}
            height={32}
          />
          <span className="ml-2 text-2xl font-bold">GraphixForge</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Services
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Portfolio
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            About
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1 ">
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <TestimonialsSection />

        <ProcessSection />
        <CTASection />
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">
          © 2024 GraphixForge. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
