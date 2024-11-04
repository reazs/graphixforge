import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Printer, Maximize2, FileText, ArrowRight, Box } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Printing Solutions",
    icon: Printer,
    description: "From small to large scale, we handle all your print needs.",
  },
  {
    title: "Large Format Graphics",
    icon: Maximize2,
    description: "Bold, beautiful graphics for any space.",
  },
  {
    title: "3D Printing",
    icon: Box,
    description: "Precise prototypes and custom parts, made to order.",
  },
  {
    title: "Document Scanning & Archiving",
    icon: FileText,
    description: "Secure, organized digital document management.",
  },
];

export default function ServicesSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          Our Key Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index}>
              <CardHeader>
                <service.icon className="w-10 h-10 mb-2" />
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{service.description}</p>
              </CardContent>
              <CardFooter>
                <Button variant="link">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
