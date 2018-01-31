import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import counter from '../routes/home/modules/counter'

export default combineReducers({
  router: routerReducer,
  counter
})
