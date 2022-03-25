import React from "react";
import Card from "../components/Card";
import Form from "../components/Form";
import data from "../data/data.json";
import Results from "./Results";

const Statictics = () => {
  return (
    <div className="relative wrapper" style={{ top: "-70px" }}>
      <Form />

      <Results />

      <div className="mt-24 text-center ">
        <h2 className="text-3xl font-bold text-head md:text-4xl">
          Advanced Statistics
        </h2>
        <p className="mt-5 text-lg leading-7 text-para md:max-w-xl md:mx-auto">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>

      {/* Card-section */}
      <div className="relative flex flex-col gap-20 mt-28 md:flex-row md:gap-8 ">
        {data.map((item) => (
          <Card key={item.heading} item={item} />
        ))}

        {/* line */}
        <div className="absolute top-0 bottom-0 z-10 w-2 -translate-x-1/2 left-1/2 bg-primary md:hidden"></div>

        <div className="absolute left-0 right-0 z-10 h-2 translate-y-10 top-1/2 bg-primary md:block"></div>
      </div>
    </div>
  );
};

export default Statictics;
