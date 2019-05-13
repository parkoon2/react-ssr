import {
    START_CLASS,
    STOP_CLASS,
    OPEN_WEBSOCKET,
    UPDATE_SOCKET_OBJECT,
    CONNECT_SOCKET_ERROR,
    DISCONNECT_WEBSOCKET,
    SEND_MESSAGE,
    ADD_MESSAGE,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    UPDATE_PEER_OBJECT,
    UPDATE_ROOM_INFO
} from './actionTypes'

import { socket } from '../components/global/Header'

export const loginFailure = message => {
    return {
        type: LOGIN_FAILURE,
        payload: message
    }
}
export const loginSuccess = () => {
    return {
        type: LOGIN_SUCCESS
    }
}

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

export const updatePeer = peer => {
    return {
        type: UPDATE_PEER_OBJECT,
        payload: peer
    }
}

export const updateRoomInfo = room => {
    return {
        type: UPDATE_ROOM_INFO,
        payload: room
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
