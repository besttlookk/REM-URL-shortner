import React, { useState } from "react";
import NavLink from "../components/NavLink";
import Logo from "../images/logo.svg";
// import Bars from "../images/bars-solid.svg";

import Button from "../components/Button";
import Image from "next/image";
import Navigation from "../components/Navigation";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <header id="top">
      <div className="flex items-center justify-between py-6 wrapper">
        {/* Navigation fro mobile */}
        <Navigation isNavOpen={isNavOpen} />
        {/* header-section-left */}
        <div className="flex items-center gap-10">
          {/* LOGO */}
          <div>
            <Logo />
          </div>
          <nav className="hidden md:block">
            <ul className="flex items-center gap-6">
              <NavLink>Features</NavLink>
              <NavLink>Pricing</NavLink>
              <NavLink>Resources</NavLink>
            </ul>
          </nav>
        </div>

        {/* header-section-right */}
        <div className="flex items-center ">
          <div className="items-center hidden gap-6 md:flex">
            <NavLink>Login</NavLink>
            <Button rounded>
              <span className="text-sm">Sign Up</span>
            </Button>
          </div>

          {/* menu icon */}
          <div className="md:hidden">
            {/* <Bars /> */}
            <Image
              alt="menu"
              src="/bars-solid.svg"
              width="24px"
              height="24px"
              className="transition transform cursor-pointer hover:rotate-180 active:scale-75"
              onClick={() => setIsNavOpen((prev) => !prev)}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
