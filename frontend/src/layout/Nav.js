import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/nav.scss'
import { useDispatch, useSelector } from 'react-redux'
import Batex from '../components/Batex'
import { openMenu, closeMenu } from '../actions/menuActions'
import Burger from './Burger'

const Nav = () => {
  const dispatch = useDispatch()

  const menuState = useSelector((state) => state.menuState)
  const { menuOpen } = menuState

  const handleClick = () => {
    if (menuOpen === true) {
      dispatch(closeMenu())
    } else if (menuOpen === false) {
      dispatch(openMenu())
    }
  }

  return (
    <nav className='nav_container'>
      <ul className={`nav_list ${menuOpen}`}>
        <li>
          <Batex />
        </li>
        <li className='testLi1'>
          {' '}
          <NavLink
            exact
            to='/'
            className='nav_link'
            activeClassName='nav_link_active'
          >
            Start
          </NavLink>
        </li>
        <li className='testLi2'>
          {' '}
          <NavLink
            exact
            to='/install'
            className='nav_link'
            activeClassName='nav_link_active'
          >
            Instalacje
          </NavLink>
        </li>
        <li className='testLi3'>
          {' '}
          <NavLink
            exact
            to='/about'
            className='nav_link'
            activeClassName='nav_link_active'
          >
            Pomiary
          </NavLink>
        </li>
        <li className='testLi4'>
          {' '}
          <NavLink
            exact
            to='/technology'
            className='nav_link'
            activeClassName='nav_link_active'
          >
            Technologie
          </NavLink>
        </li>
        <li className='testLi5'>
          {' '}
          <NavLink
            exact
            to='/contact'
            className='nav_link'
            activeClassName='nav_link_active'
          >
            Kontakt
          </NavLink>
        </li>
      </ul>

      <div onClick={handleClick}>
        <Burger />
      </div>
    </nav>
  )
}

export default Nav
