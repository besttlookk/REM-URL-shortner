import React from "react";
import Logo from "../images/logo.svg";
import FbIcon from "../images/icon-facebook.svg";
import TwIcon from "../images/icon-twitter.svg";
import PinIcon from "../images/icon-pinterest.svg";
import InstaIcon from "../images/icon-instagram.svg";
import SocialIcon from "../components/SocialIcon";

const Footer = () => {
  return (
    <footer className="pb-12 text-center bg-voiletDark lg:text-left">
      {/*  */}
      <div className="py-12 wrapper lg:grid md:grid-cols-6 lg:py-16 lg:pr-24">
        <a
          href="#top"
          className="flex justify-center lg:col-span-2 lg:text-left"
        >
          <Logo className="transform logo-white lg:scale-110" />
        </a>
        <div className="mt-8 nav-list lg:mt-0">
          <h5 className="">Features</h5>
          <ul>
            <li>Link Shortning</li>
            <li>Branded Links</li>
            <li>Analytics</li>
          </ul>
        </div>

        <div className="nav-list">
          <h5 className="">Resources</h5>
          <ul>
            <li>Blog</li>
            <li>Developers</li>
            <li>Support</li>
          </ul>
        </div>

        <div className="nav-list">
          <h5 className="">Company</h5>
          <ul>
            <li>About</li>
            <li>Our Team</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="flex items-center justify-center gap-6 mt-6 lg:items-start lg:mt-0">
          <SocialIcon>
            <FbIcon className="transition duration-500 transform cursor-pointer hover:rotate-180" />
          </SocialIcon>
          <SocialIcon>
            <TwIcon className="transition duration-500 transform cursor-pointer hover:rotate-180" />
          </SocialIcon>{" "}
          <SocialIcon>
            <PinIcon className="transition duration-500 transform cursor-pointer hover:rotate-180" />
          </SocialIcon>{" "}
          <SocialIcon>
            <InstaIcon className="transition duration-500 transform cursor-pointer hover:rotate-180" />
          </SocialIcon>
        </div>
      </div>

      <div class="mt-2 text-center text-white">
        Challenge by
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          className="ml-1 text-primary"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          href="https://www.frontendmentor.io/profile/besttlookk"
          target="_blank"
          className="text-primary"
        >
          {" "}
          Prabhash Ranjan
        </a>
        .
      </div>
    </footer>
  );
};

export default Footer;
