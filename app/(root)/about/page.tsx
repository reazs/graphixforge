import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Brush, Code, Zap, Users } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">About GraphixForge</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Empowering creativity through cutting-edge design tools and innovation
        </p>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Mission</h2>
          <p className="text-lg text-center max-w-3xl mx-auto">
            At GraphixForge, we're on a mission to revolutionize the world of
            digital design. We believe in empowering creators with intuitive
            tools that bring their visions to life, pushing the boundaries of
            what's possible in graphic design and digital art.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            What Sets Us Apart
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Brush,
                title: "Intuitive Design",
                description: "User-friendly interface for seamless creativity",
              },
              {
                icon: Code,
                title: "Powerful Engine",
                description: "State-of-the-art rendering for stunning visuals",
              },
              {
                icon: Zap,
                title: "Lightning Fast",
                description: "Optimized performance for efficient workflows",
              },
              {
                icon: Users,
                title: "Collaborative",
                description: "Real-time collaboration tools for team projects",
              },
            ].map((feature, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <feature.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Alex Johnson",
                role: "Founder & CEO",
                image: "/placeholder.svg?height=200&width=200",
              },
              {
                name: "Sam Lee",
                role: "Lead Designer",
                image: "/placeholder.svg?height=200&width=200",
              },
              {
                name: "Taylor Swift",
                role: "Head of Engineering",
                image: "/placeholder.svg?height=200&width=200",
              },
            ].map((member, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={100}
                    height={100}
                    className="rounded-full mx-auto mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-muted-foreground">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Forge Your Vision?</h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Join the GraphixForge community and take your designs to the next
          level.
        </p>
        <Button size="lg" className="text-lg px-8">
          Get Started
        </Button>
      </section>
    </div>
  );
}
