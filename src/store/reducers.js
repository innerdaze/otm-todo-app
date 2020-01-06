import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import * as reducers from '../features'

import history from '../history'

export default combineReducers({
  router: connectRouter(history),
  ...reducers,
  todos: reducers.todos
})
