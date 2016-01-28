import { combineReducers } from 'redux'
import { routeReducer as routing } from 'redux-simple-router'

import main from './main'

export default combineReducers({
  routing,
  main
})
