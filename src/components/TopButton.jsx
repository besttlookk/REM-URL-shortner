import React, { useState } from "react";
import UpIcon from "../images/angle-up-solid.svg";

const TopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  let rootElement;

  if (typeof window !== "undefined") {
    rootElement = document.documentElement;
    document.addEventListener("scroll", handleScroll);
  }

  const handleClick = () => {
    rootElement.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  function handleScroll() {
    const scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;

    if (rootElement.scrollTop / scrollTotal > 0.3) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }

  return (
    <div
      href="#"
      className={`fixed z-50 flex items-center justify-center w-12 h-12 transition duration-500 rounded-full cursor-pointer bottom-8 right-8 bg-primary hover:scale-105 active:scale-95 ${
        isVisible ? "opacity-100" : " opacity-0"
      }`}
      onClick={handleClick}
    >
      <UpIcon className="transform scale-50 fill-white " />
    </div>
  );
};

export default TopButton;
