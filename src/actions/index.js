import {
    START_CLASS,
    END_CLASS,
    OPEN_WEBSOCKET,
    UPDATE_SOCKET_OBJECT,
    CONNECT_SOCKET_ERROR,
    DISCONNECT_WEBSOCKET,
    SEND_MESSAGE,
    ADD_MESSAGE,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    UPDATE_PEER_OBJECT,
    UPDATE_ROOM_INFO,
    UPDATE_LOCAL_STREAM,
    UPDATE_REMOTE_STREAM
} from './actionTypes'

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

export const startLesson = () => ({ type: START_CLASS })
export const endLesson = () => ({ type: END_CLASS })

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

export const updatePeer = peer => ({ type: UPDATE_PEER_OBJECT, payload: peer })
export const updateLocalStream = stream => ({
    type: UPDATE_LOCAL_STREAM,
    payload: stream
})
export const updateRemoteStream = stream => ({
    type: UPDATE_REMOTE_STREAM,
    payload: stream
})

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
