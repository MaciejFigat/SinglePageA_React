import React, { useEffect } from 'react'
import '../styles/svgButton.scss'
import { useDispatch, useSelector } from 'react-redux'
import {
  setColorModeDark,
  setColorModeLight,
} from '../actions/colorModeActions'

const SvgThemeButton = () => {
  const dispatch = useDispatch()

  const colorMode = useSelector((state) => state.colorMode)
  const { colorScheme } = colorMode

  const handleClickColor = () => {
    if (colorScheme === 'dark') {
      dispatch(setColorModeLight())
    } else {
      dispatch(setColorModeDark())
    }
  }

  const isDark = window.matchMedia('(prefers-color-scheme: dark)')
  const useDarkMode = isDark.matches
  useEffect(() => {
    if (useDarkMode === true) {
      dispatch(setColorModeDark())
    }
  }, [useDarkMode, dispatch])

  if (colorScheme === 'light') {
    return (
      <button className='buttonThemes' onClick={handleClickColor}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          height='18'
          viewBox='0 0 18 24'
          width='18'
        >
          <path d='M0 0h24v24H0V0z' fill='none' />
          <path
            className='svg-icon'
            d='M16.12 11.5c.39-.67-.09-1.5-.86-1.5h-1.87l2.28 2.28.45-.78zm.16-8.05c.33-.67-.15-1.45-.9-1.45H8c-.55 0-1 .45-1 1v.61l6.13 6.13 3.15-6.29zm2.16 14.43L4.12 3.56c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L7 9.27V12c0 .55.45 1 1 1h2v7.15c0 .51.67.69.93.25l2.65-4.55 3.44 3.44c.39.39 1.02.39 1.41 0 .4-.39.4-1.02.01-1.41z'
          />
        </svg>
      </button>
    )
  } else {
    return (
      <button className='buttonThemes' onClick={handleClickColor}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          height='18'
          viewBox='0 0 18 24'
          width='18'
        >
          <path d='M0 0h24v24H0V0z' fill='none' />
          <path
            className='svg-icon'
            d='M7 3v9c0 .55.45 1 1 1h2v7.15c0 .51.67.69.93.25l5.19-8.9c.39-.67-.09-1.5-.86-1.5H13l2.49-6.65c.25-.65-.23-1.35-.93-1.35H8c-.55 0-1 .45-1 1z'
          />
        </svg>
      </button>
    )
  }
}

export default SvgThemeButton
