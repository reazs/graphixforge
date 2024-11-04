import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function AboutSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <Image
            src="/placeholder.svg?height=400&width=600"
            width={600}
            height={400}
            alt="About GraphixForge"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
          />
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                About GraphixForge
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                At GraphixForge, we're committed to delivering innovative visual
                solutions that bring your ideas to life. Our core values of
                Innovation, Precision, and Customer Success drive everything we
                do.
              </p>
            </div>
            <ul className="grid gap-2 py-4">
              {["Innovation", "Precision", "Customer Success"].map(
                (value, index) => (
                  <li key={index} className="flex items-center">
                    <svg
                      className=" mr-2 h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {value}
                  </li>
                )
              )}
            </ul>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button>Learn More About Us</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
