import React from 'react'
import { useSelector } from 'react-redux'
const Burger = () => {
  const menuState = useSelector((state) => state.menuState)
  const { menuOpen } = menuState

  return (
    <div className='burger'>
      <div className={`line1 ${menuOpen}`}></div>
      <div className={`line2 ${menuOpen}`}></div>
      <div className={`line3 ${menuOpen}`}></div>
    </div>
  )
}
export default Burger
