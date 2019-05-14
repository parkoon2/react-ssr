import { SEND_MESSAGE, ADD_MESSAGE } from '../actions/actionTypes'
import { addMessage } from '../actions'

const chatMiddleware = store => next => action => {
    const state = store.getState()
    const { socket } = state.socket
    const { teacher } = state.user

    if (action.type === SEND_MESSAGE) {
        let message = {
            message: action.payload.message,
            user: action.payload.user
        }

        socket.emit('gigagenie', {
            signalOp: 'Chat',
            userId: teacher,
            message: action.payload.message
        })

        store.dispatch(addMessage(message))
    }

    if (action.type === ADD_MESSAGE) {
    }

    next(action)
}

export default chatMiddleware
