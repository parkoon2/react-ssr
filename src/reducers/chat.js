import { SEND_MESSAGE, ADD_MESSAGE } from '../actions/actionTypes'

const initialState = {
    messages: [
        {
            user: 'teacher',
            message: 'hello'
        },
        {
            user: 'student',
            message: 'hi'
        },
        {
            user: 'teacher',
            message: 'how are u'
        },
        {
            user: 'student',
            message: 'so far so good you'
        },
        {
            user: 'teacher',
            message: 'me too, thx'
        }
    ]
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
