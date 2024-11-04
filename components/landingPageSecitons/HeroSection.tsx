import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black text-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Transforming Ideas into Impactful Visuals
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
              High-quality printing, digital solutions, and 3D prototyping for
              all your business needs.
            </p>
          </div>
          <div className="space-x-4">
            <Button
              variant="outline"
              className="bg-white text-black hover:bg-gray-200"
            >
              Get a Quote
            </Button>
            <Button variant="secondary">Explore Our Services</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
