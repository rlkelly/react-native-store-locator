import { combineReducers } from 'redux'
import location from './location'
import account from './account'
import store from './store'

export default combineReducers({
  location,
  account,
  store,
});