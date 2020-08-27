import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/nav.scss";

import Batex from "../components/Batex";

import Burger from "./Burger";

const Nav = () => {
  const [showMenu, setShowMenu] = useState("");
  const handleClick = () => {
    if (showMenu === "visible") {
      setShowMenu("hidden");
    } else {
      setShowMenu("visible");
    }
  };
  return (
    <nav className="nav_container">
      <Batex />
      <ul className={`nav_list ${showMenu}`}>
        <li className="testLi1">
          {" "}
          <NavLink
            exact
            to="/"
            className="nav_link"
            activeClassName="nav_link_active"
          >
            Oferta
          </NavLink>
        </li>
        <li className="testLi2">
          {" "}
          <NavLink
            exact
            to="/login"
            className="nav_link"
            activeClassName="nav_link_active"
          >
            Partnerzy
          </NavLink>
        </li>
        <li className="testLi3">
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
        <li className="testLi4">
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
        <li className="testLi5">
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
      <div onClick={handleClick}>
        <Burger />
      </div>
    </nav>
  );
};

export default Nav;

// const [burgerClicked, setBurgerClicked] = useState("burgerNotToggled");
//   const handleClickBurger = () => {
//     if (burgerClicked === "burgerToggled") {
//       setBurgerClicked("burgerNotToggled");
//     } else {
//       setBurgerClicked("burgerToggled");
//     }
//     console.log(burgerClicked);
//   };
//   const [showMenu, setShowMenu] = useState("");
//   const handleClick = () => {
//     if (showMenu === "visible") {
//       setShowMenu("hidden");
//     } else {
//       setShowMenu("visible");
//     }
//   };

//  <div
//         className="burger"
//         onClick={() => {
//           handleClick();
//           handleClickBurger();
//         }}
//       >
//         <div className={`line1 ${burgerClicked}`}></div>
//         <div className={`line2 ${burgerClicked}`}></div>
//         <div className={`line3 ${burgerClicked}`}></div>
//       </div>
