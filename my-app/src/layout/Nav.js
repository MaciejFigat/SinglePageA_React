import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/nav.scss";
import Hello from "../components/Hello";
import Batex from "../components/Batex";
const Nav = () => {
  return (
    <nav className="nav_container">
      <ul className="nav_list">
        <Batex />
        <li>
          {" "}
          <NavLink
            exact
            to="/"
            className="nav_link"
            activeClassName="nav_link_active"
          >
            Home
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink
            exact
            to="/login"
            className="nav_link"
            activeClassName="nav_link_active"
          >
            Login
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink
            exact
            to="/about"
            className="nav_link"
            activeClassName="nav_link_active"
          >
            About
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink
            exact
            to="/contact"
            className="nav_link"
            activeClassName="nav_link_active"
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
