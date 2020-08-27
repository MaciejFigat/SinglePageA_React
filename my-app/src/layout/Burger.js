import React, { useState } from "react";

const Burger = () => {
  const [burgerClicked, setBurgerClicked] = useState("burgerNotToggled");
  const handleClickBurger = () => {
    if (burgerClicked === "burgerToggled") {
      setBurgerClicked("burgerNotToggled");
    } else {
      setBurgerClicked("burgerToggled");
    }
    // console.log(burgerClicked);
  };

  const [showMenu, setShowMenu] = useState("hidden");
  const handleClick = () => {
    if (showMenu === "visible") {
      setShowMenu("hidden");
    } else {
      setShowMenu("visible");
      //   console.log(showMenu);
    }
  };
  const menu = `nav_list ${showMenu}`;
  return (
    <div
      className="burger"
      onClick={() => {
        handleClick();
        handleClickBurger();
      }}
    >
      <div className={`line1 ${burgerClicked}`}></div>
      <div className={`line2 ${burgerClicked}`}></div>
      <div className={`line3 ${burgerClicked}`}></div>
    </div>
  );
};
export default Burger;
