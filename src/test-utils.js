import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'theme-ui'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import history from './history'
import { store } from './store/store'
import theme from '@rebass/preset'

const Providers = ({ children }) => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        {/* <ThemeProvider theme={theme}> */}
        {children}
        {/* </ThemeProvider> */}
      </ConnectedRouter>
    </Provider>
  )
}

const customRender = (ui, options) =>
  render(ui, { wrapper: Providers, ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }
