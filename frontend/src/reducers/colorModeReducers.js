import {
  SET_CURRENT_THEME_DARK,
  SET_CURRENT_THEME_LIGHT,
} from '../constants/colorModeConstants.js'

export const colorModeReducer = (state = { colorScheme: 'light' }, action) => {
  switch (action.type) {
    case SET_CURRENT_THEME_DARK:
      return { colorScheme: 'dark' }
    case SET_CURRENT_THEME_LIGHT:
      return { colorScheme: 'light' }

    default:
      return state
  }
}
