import {
    START_CLASS,
    STOP_CLASS,
    UPDATE_PEER_OBJECT
} from '../actions/actionTypes'

const initialState = {
    inClass: false,
    peer: ''
}

function videoReducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_PEER_OBJECT:
            return {
                ...state,
                peer: action.payload
            }
        case START_CLASS:
            return {
                ...state,
                inClass: true
            }

        case STOP_CLASS:
            return {
                ...state,
                inClass: false
            }

        default:
            return state
    }
}

export default videoReducer
