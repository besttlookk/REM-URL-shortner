import React from "react";
import BrandIcon from "../images/icon-brand-recognition.svg";
import DeatailIcon from "../images/icon-detailed-records.svg";
import CustomizeIcon from "../images/icon-fully-customizable.svg";

const Card = ({ item }) => {
  return (
    <div
      className={`relative z-20 px-6 pt-16 pb-8 md:px-8 md:pb-10 md:pt-18 text-center bg-white rounded-md md:text-start ${
        item.logo === "2" ? "md:top-12" : ""
      } ${item.logo === "3" ? "md:top-24" : ""}`}
    >
      <div className="absolute top-0 flex items-center justify-center w-16 h-16 -translate-x-1/2 -translate-y-1/2 border-2 rounded-full left-1/2 bg-voiletDark md:w-20 md:h-20 md:left-16">
        {/*  */}
        {item.logo === "1" && (
          <BrandIcon className="transform scale-75 md:scale-90" />
        )}
        {item.logo === "2" && (
          <DeatailIcon className="transform scale-75 md:scale-90" />
        )}
        {item.logo === "3" && (
          <CustomizeIcon className="transform scale-75 md:scale-90" />
        )}
      </div>
      <div className="md:text-left">
        <h3 className="text-xl font-bold text-head md:text-2xl">
          {item.heading}
        </h3>
        <p className="px-6 mt-4 text-sm text-para md:px-0 md:text-base">
          {item.content}
        </p>
      </div>
    </div>
  );
};

export default Card;
