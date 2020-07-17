import React from "react";
import { NavLink } from "react-router-dom";
const Nav = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow ">
      <ul className="flex space-x-4 justify-end">
        <li>
          {" "}
          <NavLink to="/home" activeClassName="border-b-2 border-white">
            Home
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink to="/about" activeClassName="border-b-2 border-white">
            About
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink to="/contact" activeClassName="border-b-2 border-white">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
