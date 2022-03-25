import React from "react";

const NavLink = ({ children }) => {
  return (
    <li className="list-none">
      <a className="cursor-pointer text-para hover:text-head">{children}</a>
    </li>
  );
};

export default NavLink;
