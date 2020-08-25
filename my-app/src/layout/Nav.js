import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/nav.scss";
import Hello from "../components/Hello";
import Batex from "../components/Batex";
import Offer from "../components/svg/Offer";
import Partners from "../components/svg/Partners";
import Contractors from "../components/svg/Contractors";
import Contact from "../components/svg/Contact";
import Tech from "../components/svg/Tech";

const Nav = () => {
  return (
    <nav className="nav_container">
      <Batex />
      <ul className="nav_list">
        <li>
          {" "}
          <NavLink
            exact
            to="/"
            className="nav_link"
            activeClassName="nav_link_active"
          >
            Partnerzy
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
            Oferta
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
            Kontrahenci
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink
            exact
            to="/technology"
            className="nav_link"
            activeClassName="nav_link_active"
          >
            Technologie
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
            Kontakt
          </NavLink>
        </li>
      </ul>
      <div className="burger">
        <div className="line1"></div>
        <div className="line1"></div>
        <div className="line1"></div>
      </div>
    </nav>
  );
};

export default Nav;
