import React from 'react'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import history from './history'
import { createStore, createStoreWithState } from './store/store'

const Providers = ({ children }) => (
  <Provider store={createStore()}>
    <ConnectedRouter history={history}>{children}</ConnectedRouter>
  </Provider>
)

const ProvidersWithCustomState = state => ({ children }) => (
  <Provider store={createStoreWithState(state)}>
    <ConnectedRouter history={history}>{children}</ConnectedRouter>
  </Provider>
)

const customRender = (ui, options, state) =>
  render(ui, {
    wrapper: state ? ProvidersWithCustomState(state) : Providers,
    ...options
  })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }
