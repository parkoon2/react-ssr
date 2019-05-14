import { START_CLASS, END_CLASS } from '../actions/actionTypes'

const initialState = {
    on: false
}

function userReducer(state = initialState, action) {
    switch (action.type) {
        case START_CLASS:
            return {
                ...state,
                on: true
            }
        case END_CLASS:
            return {
                ...state,
                on: false
            }
        default:
            return state
    }
}

export default userReducer
