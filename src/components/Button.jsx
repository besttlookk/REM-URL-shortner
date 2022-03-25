import React from "react";

const Button = ({ children, size, rounded, full, type = "button" }) => {
  return (
    <button
      className={`font-bold text-white rounded-full outline-none h-full cursor-pointer bg-primary hover:brightness-110 ${
        size === "large" ? "px-12 py-4" : "px-5 py-2 "
      } ${rounded ? "rounded-full" : "rounded-md"} ${full ? "w-full" : ""}`}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
