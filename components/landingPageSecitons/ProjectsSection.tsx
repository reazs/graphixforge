import React from 'react'
import { Card, CardContent } from '../ui/card';
import Image from 'next/image';
import { Button } from '../ui/button';

const ProjectsSection = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
          Our Recent Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((project) => (
            <Card key={project}>
              <Image
                src=""
                width={300}
                height={200}
                alt={"project"}
                className="w-full object-cover"
              />
              <CardContent className="p-4">
                <h3 className="text-lg font-bold">Project {project}</h3>
                <p className="text-sm text-gray-500">
                  Brief description of the project and its impact.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button>View Full Portfolio</Button>
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection