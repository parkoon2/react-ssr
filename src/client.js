import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import store from './store'
import { Provider } from 'react-redux'

import App from './app'

ReactDOM.hydrate(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#root')
)
