import { SEND_MESSAGE, ADD_MESSAGE } from '../actions/actionTypes'

const initialState = {
    messages: []
}

function chatReducer(state = initialState, action) {
    switch (action.type) {
        case SEND_MESSAGE:
            return {
                ...state
            }
        case ADD_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, action.payload]
            }
        default:
            return state
    }
}

export default chatReducer
