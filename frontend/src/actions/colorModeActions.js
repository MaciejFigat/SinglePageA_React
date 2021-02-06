import {
  SET_CURRENT_THEME_DARK,
  SET_CURRENT_THEME_LIGHT,
} from '../constants/colorModeConstants.js'

export const setColorModeDark = () => {
  return {
    type: SET_CURRENT_THEME_DARK,
  }
}

export const setColorModeLight = () => {
  return {
    type: SET_CURRENT_THEME_LIGHT,
  }
}
