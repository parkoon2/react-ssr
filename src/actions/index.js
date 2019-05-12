import {
    START_CLASS,
    STOP_CLASS,
    OPEN_WEBSOCKET,
    UPDATE_SOCKET_OBJECT,
    CONNECT_SOCKET_ERROR,
    DISCONNECT_WEBSOCKET,
    SEND_MESSAGE,
    ADD_MESSAGE
} from './actionTypes'
import { socket } from '../components/global/Header'

export const startClass = () => {
    return {
        type: START_CLASS
    }
}

// export const startClassAsync = () => dispatch => {
//     socket.emit('gigagenie', {
//         eventOp: 'Call',
//         reqNo: '1',
//         userId: '2',
//         reqDate: '3',
//         reqDeviceType: 'pc',
//         targetId: 't2',
//         roomId: 'room#1',
//     })
//     dispatch()
// }

export const stopClass = () => {
    return {
        type: STOP_CLASS
    }
}

export const sendMessage = payload => {
    return {
        type: SEND_MESSAGE,
        payload
    }
}

export const addMessage = payload => {
    return {
        type: ADD_MESSAGE,
        payload
    }
}

export const openWebSocket = () => {
    return {
        type: OPEN_WEBSOCKET
    }
}

export const updateWebSocket = socket => {
    return {
        type: UPDATE_SOCKET_OBJECT,
        payload: socket
    }
}

export const connectSocketError = () => {
    return {
        type: CONNECT_SOCKET_ERROR
    }
}

export const disconnectWebSocket = () => {
    return {
        type: DISCONNECT_WEBSOCKET
    }
}
