"use client";
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
const projects = [
  {
    id: 1,
    title: "Eco-Friendly Packaging Design",
    client: "Green Earth Co.",
    category: "Packaging",
    image: "/placeholder.svg?height=400&width=600&text=Eco-Friendly+Packaging",
    description:
      "Created sustainable packaging designs that reduced material usage by 30% while maintaining product integrity.",
    tools: "Adobe Illustrator, Sustainable Materials Research",
    feedback:
      "GraphixForge's innovative approach not only met our sustainability goals but also enhanced our brand image.",
  },
  {
    id: 2,
    title: "Tech Startup Branding",
    client: "InnovateTech",
    category: "Branding",
    image: "/placeholder.svg?height=400&width=600&text=Tech+Startup+Branding",
    description:
      "Developed a complete brand identity for a cutting-edge tech startup, including logo, color palette, and brand guidelines.",
    tools: "Adobe Creative Suite, Brand Strategy Workshops",
    feedback:
      "The branding perfectly captures our innovative spirit. We've received numerous compliments on our new look.",
  },
  {
    id: 3,
    title: "E-commerce Website Redesign",
    client: "FashionForward",
    category: "Web Design",
    image:
      "/placeholder.svg?height=400&width=600&text=E-commerce+Website+Redesign",
    description:
      "Revamped an outdated e-commerce platform, improving user experience and increasing conversion rates by 25%.",
    tools: "Figma, Shopify, User Testing",
    feedback:
      "The new website design has significantly boosted our online sales and customer engagement.",
  },
  {
    id: 4,
    title: "Annual Report Design",
    client: "Global Investments Inc.",
    category: "Print Media",
    image: "/placeholder.svg?height=400&width=600&text=Annual+Report+Design",
    description:
      "Designed a visually compelling annual report that effectively communicated complex financial data.",
    tools: "Adobe InDesign, Data Visualization Techniques",
    feedback:
      "GraphixForge transformed our dry financial data into an engaging and insightful report. Impressive work!",
  },
  {
    id: 5,
    title: "Mobile App UI/UX Design",
    client: "HealthTrack",
    category: "Web Design",
    image: "/placeholder.svg?height=400&width=600&text=Mobile+App+UI/UX+Design",
    description:
      "Created an intuitive and visually appealing UI/UX design for a health tracking mobile application.",
    tools: "Sketch, Prototyping, User Research",
    feedback:
      "The app's design has received overwhelmingly positive feedback from our users. It's both beautiful and functional.",
  },
  {
    id: 6,
    title: "Product Catalog Design",
    client: "LuxuryHome Furnishings",
    category: "Print Media",
    image: "/placeholder.svg?height=400&width=600&text=Product+Catalog+Design",
    description:
      "Designed a high-end product catalog showcasing luxury home furnishings with elegant layouts and typography.",
    tools: "Adobe InDesign, Professional Photography",
    feedback:
      "The catalog design elevated our products and has become a valuable sales tool for our team.",
  },
];

const WorkSections = () => {
  const categories = [
    "All",
    ...new Set(projects.map((project) => project.category)),
  ];
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-4">
          Our Work
        </h1>
        <p className="max-w-[700px] text-gray-500 md:text-xl mb-8">
          At GraphixForge, we blend creativity with precision to deliver
          stunning designs that exceed expectations. Explore our portfolio to
          see how we've helped businesses across industries bring their visions
          to life.
        </p>
        <Tabs defaultValue="All" className="w-full">
          <TabsList className="mb-4">
            {categories.map((category) => (
              <TabsTrigger key={category} value={category}>
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
          {categories.map((category) => (
            <TabsContent key={category} value={category}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects
                  .filter(
                    (project) =>
                      category === "All" || project.category === category
                  )
                  .map((project) => (
                    <Card key={project.id} className="overflow-hidden">
                      <CardHeader className="p-0">
                        <Image
                          src={project.image}
                          alt={project.title}
                          width={600}
                          height={400}
                          className="w-full h-48 object-cover transition-all hover:scale-105"
                        />
                      </CardHeader>
                      <CardContent className="p-4">
                        <CardTitle>{project.title}</CardTitle>
                        <CardDescription>{project.client}</CardDescription>
                      </CardContent>
                      <CardFooter>
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button onClick={() => setSelectedProject(project)}>
                              View Project
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-3xl">
                            <DialogHeader>
                              <DialogTitle>{project.title}</DialogTitle>
                              <DialogDescription>
                                {project.client}
                              </DialogDescription>
                            </DialogHeader>
                            <div className="grid gap-4">
                              <Image
                                src={project.image}
                                alt={project.title}
                                width={800}
                                height={600}
                                className="w-full rounded-lg"
                              />
                              <p>{project.description}</p>
                              <p>
                                <strong>Tools Used:</strong> {project.tools}
                              </p>
                              <blockquote className="border-l-4 pl-4 italic">
                                "{project.feedback}"
                              </blockquote>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </CardFooter>
                    </Card>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default WorkSections;
