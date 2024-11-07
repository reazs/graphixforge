"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";

// Sample portfolio data
const portfolioItems = [
  {
    id: 1,
    title: "Neon Dreams",
    category: "Digital Art",
    image: "/placeholder.svg?height=400&width=600",
    description:
      "A vibrant exploration of color and light in the digital realm.",
  },
  {
    id: 2,
    title: "Corporate Rebrand",
    category: "Branding",
    image: "/placeholder.svg?height=400&width=600",
    description: "A complete visual overhaul for a Fortune 500 company.",
  },
  {
    id: 3,
    title: "Eco Warrior",
    category: "Illustration",
    image: "/placeholder.svg?height=400&width=600",
    description: "Character design for an environmental awareness campaign.",
  },
  {
    id: 4,
    title: "Tech Innovate UI",
    category: "UI/UX",
    image: "/placeholder.svg?height=400&width=600",
    description: "User interface design for a cutting-edge tech startup.",
  },
  {
    id: 5,
    title: "Retro Revival",
    category: "Digital Art",
    image: "/placeholder.svg?height=400&width=600",
    description:
      "A series of artworks celebrating the aesthetic of past decades.",
  },
  {
    id: 6,
    title: "Green Earth Logo",
    category: "Branding",
    image: "/placeholder.svg?height=400&width=600",
    description: "Logo design for an eco-friendly product line.",
  },
];

const categories = ["All", "Digital Art", "Branding", "Illustration", "UI/UX"];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems =
    activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center bg-muted">
        <h1 className="text-4xl font-bold mb-4">Our Portfolio</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Explore our diverse range of projects showcasing creativity and
          innovation in graphic design and digital art.
        </p>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          {/* Category Tabs */}
          <Tabs defaultValue="All" className="mb-12">
            <TabsList className="justify-center">
              {categories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <Card key={item.id} className="overflow-hidden">
                <CardContent className="p-0">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={600}
                    height={400}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {item.category}
                    </p>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline">View Details</Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                          <DialogTitle>{item.title}</DialogTitle>
                          <DialogDescription>{item.category}</DialogDescription>
                        </DialogHeader>
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={600}
                          height={400}
                          className="w-full h-48 object-cover mb-4"
                        />
                        <p>{item.description}</p>
                      </DialogContent>
                    </Dialog>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-center bg-muted">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Bring Your Vision to Life?
        </h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Let's collaborate on your next project and create something
          extraordinary together.
        </p>
        <Button size="lg" className="text-lg px-8">
          Start a Project
        </Button>
      </section>
    </div>
  );
}
