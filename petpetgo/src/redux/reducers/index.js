import { combineReducers } from 'redux'
import view from './viewReducer'
import auth from './authReducer'

const rootReducer = combineReducers({
  view,
  auth
})

export default rootReducer
