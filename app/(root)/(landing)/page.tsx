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
  CTASection,
  HeroSection,
  ProcessSection,
  ServicesSection,
  TestimonialsSection,
} from "@/components/landingPageSecitons";
import Footer from "@/components/shared/Footer";

export default function GraphixForgeLandingPage() {
  return (
    <div className="flex flex-col min-h-screen ">
      <main className="flex-1 ">
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <TestimonialsSection />

        <ProcessSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
