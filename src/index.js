import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import './index.css'
import TodoSwitch from './components/TodoSwitch'
import * as serviceWorker from './serviceWorker'
import history from './history'
import { createStore } from './store/store'

const store = createStore()

const renderWithHotReload = () =>
  render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <TodoSwitch />
      </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
  )

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('./components/TodoSwitch', renderWithHotReload())
}

renderWithHotReload()

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
