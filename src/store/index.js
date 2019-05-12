import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'
import { composeWithDevTools } from 'redux-devtools-extension'
import socketMiddleware from '../middleware/socketMiddleware'
import chatMiddleware from '../middleware/chatMiddleware'

const middlewares = [socketMiddleware, chatMiddleware, thunk]
console.log('window.__PRELOADED_STATE__', window.__PRELOADED_STATE__)

const preloadedState = window.__PRELOADED_STATE__

delete window.__PRELOADED_STATE__

const store = createStore(
    rootReducer,
    {
        user: { ...preloadedState }
    },
    composeWithDevTools(applyMiddleware(...middlewares))
)

console.log('[Initail state]', store.getState())

export default store
