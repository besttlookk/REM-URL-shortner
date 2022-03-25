import React from "react";
import Button from "./Button";

const Navigation = ({ isNavOpen }) => {
  return (
    <div
      className={`absolute z-50 py-4 px-10 transition-all duration-500 text-center text-white rounded-lg  bg-primaryDark left-12 right-12 ${
        isNavOpen ? " top-28" : " -top-full"
      }`}
      // style={{ width: "85vw" }}
    >
      <ul className="py-4 border-b border-fade">
        <li className="py-4 text-lg font-bold transition-all cursor-pointer hover:bg-primary">
          Features
        </li>
        <li className="py-4 text-lg font-bold transition-all cursor-pointer hover:bg-primary">
          Pricing
        </li>
        <li className="py-4 text-lg font-bold transition-all cursor-pointer hover:bg-primary">
          Resources
        </li>
      </ul>
      <div className="py-4">
        <p className="py-4 mb-3 text-xl font-bold cursor-pointer hover:text-primary">
          Login
        </p>
        <Button full rounded>
          <span className="text-lg">Sign Up</span>
        </Button>
      </div>
    </div>
  );
};

export default Navigation;
