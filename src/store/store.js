import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { createLogger } from 'redux-logger'
import rootReducer from './reducers'
import { createPersistedStore } from './persist'

const middleware = [...getDefaultMiddleware(), createLogger()]

export const store = configureStore({
  middleware,
  reducer: rootReducer
})

export const persistor = createPersistedStore(
  configureStore({
    middleware,
    reducer: rootReducer
  })
)
