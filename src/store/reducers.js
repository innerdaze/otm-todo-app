import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
// import autoMergeLevel1 from 'redux-persist/lib/stateReconciler/autoMergeLevel1'
// import { persistReducer } from 'redux-persist'
import {
  persistentDocumentReducer,
  persistentCollectionReducer
} from 'redux-pouchdb'
import * as reducers from '../features'
import { storage } from './persist'
import history from '../history'

// const configDefaults = {
//   stateReconciler: autoMergeLevel1
// }

// const appPersistConfig = () => ({
//   ...configDefaults,
//   key: 'todos'
//   // whitelist: []
// })

export default combineReducers({
  router: connectRouter(history),
  ...reducers,
  todos: persistentDocumentReducer(storage, 'todos')(reducers.todos)
})
