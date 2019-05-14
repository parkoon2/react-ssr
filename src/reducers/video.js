import {
    UPDATE_PEER_OBJECT,
    UPDATE_REMOTE_STREAM,
    UPDATE_LOCAL_STREAM
} from '../actions/actionTypes'

const initialState = {
    localStream: '',
    remoteStream: '',
    peer: ''
}

function videoReducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_PEER_OBJECT:
            return {
                ...state,
                peer: action.payload
            }

        case UPDATE_LOCAL_STREAM:
            return {
                ...state,
                localStream: action.payload
            }
        case UPDATE_REMOTE_STREAM:
            return {
                ...state,
                remoteStream: action.payload
            }

        default:
            return state
    }
}

export default videoReducer
