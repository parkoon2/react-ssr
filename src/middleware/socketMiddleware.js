import { OPEN_WEBSOCKET, CONNECT_SOCKET_ERROR } from '../actions/actionTypes'
import {
    updateWebSocket,
    connectSocketError,
    disconnectWebSocket,
    addMessage
} from '../actions'
import io from 'socket.io-client'

const endpoint = 'http://localhost:3333'
//const endpoint = 'https://knowledgetalk.co.kr:9000/SignalServer',
const option = {
    secure: true,
    reconnect: true,
    rejectUnauthorized: false,
    transports: ['websocket']
}

let socket

const handleSocketResponse = (data, store, cliendId) => {
    console.log('[socket response]', data)
    const { eventOp } = data

    switch (eventOp) {
        case 'Chat': {
            store.dispatch(
                addMessage({ user: cliendId, message: data.message })
            )
        }

        default:
            console.warn('[event op warnning]')
    }
}

const socketMiddleware = store => next => action => {
    console.log('socketMiddleware', action)
    if (action.type === OPEN_WEBSOCKET) {
        // 소켓 연결

        socket = io(endpoint)
        socket.on('connect', () => {
            console.log('[connected to server]', socket)
            store.dispatch(updateWebSocket(socket))
        })

        socket.on('error', err => {
            console.log('[connect socket error]', err)
            store.dispatch(connectSocketError())
        })
        socket.on('disconnect', () => {
            console.log('[disconnected to server]', socket)
            store.dispatch(disconnectWebSocket())
        })

        socket.on('gigagenie', data =>
            handleSocketResponse(data, store, socket.id)
        )
    }

    next(action)
}

export default socketMiddleware
