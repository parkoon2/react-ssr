import * as types from '../actions/actionTypes'

const initialState = {
    inClass: false
}

function videoReducer(state = initialState, action) {
    switch (action.type) {
        case types.START_CLASS:
            return {
                ...state,
                inClass: true
            }

        case types.STOP_CLASS:
            return {
                ...state,
                inClass: false
            }

        default:
            return state
    }
}

export default videoReducer
