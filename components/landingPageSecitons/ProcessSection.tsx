import React from "react";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

const ProcessSection = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
          Our Process
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              step: 1,
              title: "Consultation",
              description: "Discuss your vision with our team.",
            },
            {
              step: 2,
              title: "Design & Planning",
              description: "We develop a solution tailored to your needs.",
            },
            {
              step: 3,
              title: "Production & Delivery",
              description: "Your high-quality product is ready on time.",
            },
          ].map((step) => (
            <Card key={step.step}>
              <CardHeader>
                <CardTitle>{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{step.description}</p>
              </CardContent>
              <CardFooter>
                <p className="text-2xl font-bold text-gray-300">
                  Step {step.step}
                </p>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="mt-8 text-center">
          <button className="btn btn-outline">Get Started Today</button>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
