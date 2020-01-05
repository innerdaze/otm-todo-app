import 'semantic-ui-css/semantic.min.css'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { PersistGate } from 'redux-persist/integration/react'
import './index.css'
import App from './components/App'
import * as serviceWorker from './serviceWorker'
import history from './history'
import { store, persistor } from './store/store'

const renderWithHotReload = () =>
  render(
    <Provider store={store}>
      {/* <PersistGate loading={<div>Loading...</div>} persistor={persistor}> */}
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
      {/* </PersistGate> */}
    </Provider>,
    document.getElementById('root')
  )

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('./components/App', renderWithHotReload())
}

renderWithHotReload()

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
