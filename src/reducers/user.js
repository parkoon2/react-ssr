import {
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    UPDATE_ROOM_INFO
} from '../actions/actionTypes'

const initialState = {
    room: '', // room id
    teacher: '', // teacher name
    student: '', // student name
    type: '', // caller or callee
    logined: '', // 로그인 여부
    message: '' // 실패 했을 경우 메세지
}

function userReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                logined: true
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                logined: false,
                message: action.payload
            }
        case UPDATE_ROOM_INFO:
            return {
                ...state,
                room: action.payload
            }
        default:
            return state
    }
}

export default userReducer
