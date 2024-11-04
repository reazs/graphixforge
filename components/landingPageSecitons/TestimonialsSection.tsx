import React from 'react'
import { Card, CardContent } from '../ui/card';

const TestimonialsSection = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              name: "John Doe",
              company: "Tech Co",
              quote:
                "GraphixForge delivered beyond our expectations. Their attention to detail is unmatched.",
            },
            {
              name: "Jane Smith",
              company: "Design Inc",
              quote:
                "The team at GraphixForge brought our vision to life with their innovative solutions.",
            },
            {
              name: "Alex Johnson",
              company: "Marketing Pro",
              quote:
                "Working with GraphixForge has been a game-changer for our marketing materials.",
            },
          ].map((testimonial, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <p className="text-gray-500 mb-4">"{testimonial.quote}"</p>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.company}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection