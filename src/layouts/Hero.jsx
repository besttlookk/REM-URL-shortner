import Image from "next/image";
import React from "react";
import Button from "../components/Button";
// import Illustration from "/illustration-working.svg";

const Hero = () => {
  return (
    <div className="text-center md:flex md:wrapper md:text-left md:gap-8">
      <div className="relative order-2 h-64 pl-12 overflow-hidden md:h-auto md:flex-1">
        <Image
          src="/illustration-working.svg"
          alt="illustration"
          layout="fill"
        />
      </div>
      <div className="order-1 px-6 mx-auto max-w-7xl md:mx-0">
        <h1 className="mt-8 text-4xl font-bold font-primary md:text-5xl lg:text-7xl">
          More than just <span className="block">shorter links</span>
        </h1>
        <p className="mt-4 text-lg leading-7 text-para md:max-w-lg">
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </p>
        <div className="mt-7">
          <Button size="large" rounded>
            <span className="text-lg">Get Started</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
