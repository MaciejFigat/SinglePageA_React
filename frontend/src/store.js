import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { menuStateReducer, testingOneReducer } from './reducers/menuReducers'
import thunk from 'redux-thunk'

const reducer = combineReducers({
  menuState: menuStateReducer,
  testingReducer: testingOneReducer,
})

const initialState = {
  menuState: { menuOpen: false },
  testingReducer: { number: 12 },
}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
