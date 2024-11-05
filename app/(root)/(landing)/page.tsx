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
      <Footer />
    </div>
  );
}
