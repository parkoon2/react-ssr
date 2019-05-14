import { combineReducers } from 'redux'
import videoReducer from './video'
import userReducer from './user'
import chatReducer from './chat'
import socketReducer from './socket'
import lessonReducer from './lesson'
const rootReducer = combineReducers({
    video: videoReducer,
    user: userReducer,
    chat: chatReducer,
    socket: socketReducer,
    lesson: lessonReducer
})
export default rootReducer
