import React, { useState } from 'react'

const Burger = () => {
  const [burgerClicked, setBurgerClicked] = useState('burgerNotToggled')
  const handleClickBurger = () => {
    if (burgerClicked === 'burgerToggled') {
      setBurgerClicked('burgerNotToggled')
    } else {
      setBurgerClicked('burgerToggled')
    }
  }

  return (
    <div
      className='burger'
      onClick={() => {
        handleClickBurger()
      }}
    >
      <div className={`line1 ${burgerClicked}`}></div>
      <div className={`line2 ${burgerClicked}`}></div>
      <div className={`line3 ${burgerClicked}`}></div>
    </div>
  )
}
export default Burger
