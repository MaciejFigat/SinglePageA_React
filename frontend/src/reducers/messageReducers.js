import { MESSAGE_CHANGE, MESSAGE_RESET } from '../constants/messageConstants'

export const messageReducer = (state = {}, action) => {
  switch (action.type) {
    case MESSAGE_CHANGE:
      return { loading: false, success: true, message: action.payload }

    case MESSAGE_RESET:
      return {}
    default:
      return state
  }
}
