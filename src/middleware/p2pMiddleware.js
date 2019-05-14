import { START_CLASS, END_CLASS } from '../actions/actionTypes'

const p2pMiddleWare = store => next => action => {
    const state = store.getState()
    if (action.type === START_CLASS) {
        console.log('========= p2pMiddleWare LOG START =======')
        console.log(state)
        console.log('========= LOG END =========')
    }

    if (action.type === END_CLASS) {
    }
    next(action)
}

export default p2pMiddleWare
