import {
    OPEN_WEBSOCKET,
    UPDATE_SOCKET_OBJECT,
    CONNECT_SOCKET_ERROR,
    DISCONNECT_WEBSOCKET
} from '../actions/actionTypes'
const initialState = {
    socket: '',
    connected: false
}

function socketReducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_SOCKET_OBJECT:
            return {
                socket: action.payload,
                connected: true
            }

        case CONNECT_SOCKET_ERROR:
        case DISCONNECT_WEBSOCKET:
            return {
                socket: '',
                connected: false
            }
        default:
            return state
    }
}

export default socketReducer
