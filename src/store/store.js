import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { createLogger } from 'redux-logger'
import rootReducer from './reducers'
import { mergeDeepRight } from 'ramda'
import { setupTodoSync } from '../features/todos'
// import { createPersistedStore } from './persist'

const middleware = getDefaultMiddleware()

if (process.env.NODE_ENV !== 'test') {
  middleware.push(createLogger())
}

export const createStore = initialState => {
  const opts = {
    middleware,
    reducer: rootReducer
  }

  if (initialState) {
    opts.preloadedState = initialState
  }

  const store = configureStore(opts)

  setupTodoSync(store)

  return store
}

export const createStoreWithState = customState => {
  const root = rootReducer({}, { type: '@@INIT' })

  const state = mergeDeepRight(root, customState)

  return createStore(state)
}

// export const persistor = createPersistedStore(
//   configureStore({
//     middleware,
//     reducer: rootReducer
//   })
// )
