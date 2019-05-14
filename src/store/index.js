import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'
import { composeWithDevTools } from 'redux-devtools-extension'

// Custom middleware
import socketMiddleware from '../middleware/socketMiddleware'
import chatMiddleware from '../middleware/chatMiddleware'
import p2pMiddleware from '../middleware/p2pMiddleware'

const middlewares = [socketMiddleware, p2pMiddleware, chatMiddleware, thunk]

const preloadedState = window.__PRELOADED_STATE__

delete window.__PRELOADED_STATE__

const store = createStore(
    rootReducer,
    {
        user: { ...preloadedState, logined: false }
    },
    composeWithDevTools(applyMiddleware(...middlewares))
)

console.log('[Initail state]', store.getState())

export default store
