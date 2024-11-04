import React from "react";
import { Button } from "../ui/button";

const CTASection = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center space-y-4 text-center ">
          <div className="space-y-2 ">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Ready to bring your ideas to life?
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
              Let's start transforming your vision into reality today.
            </p>
          </div>
          <div className="w-full max-w-sm space-y-2">
            <Button className="w-full" variant="outline">
              Request a Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
