import { START_CLASS, END_CLASS } from '../actions/actionTypes'
import { stopStream } from '../helpers/stream'
import { updatePeer, updateLocalStream, updateRemoteStream } from '../actions'

const p2pMiddleWare = store => next => action => {
    const state = store.getState()

    if (action.type === START_CLASS) {
        // 녹화 시작
    }

    if (action.type === END_CLASS) {
        const { localStream, remoteStream, peer } = state.video
        const { room, teacher } = state.user
        const { socket } = state.socket

        socket.emit('gigagenie', {
            eventOp: 'ExitRoom',
            userName: teacher,
            reqNo: '0917',
            userId: teacher,
            reqDate: '0917',
            roomId: room
        })

        try {
            peer & peer.close()
            store.dispatch(updatePeer(''))
        } catch (err) {
            console.error(err)
        } finally {
            stopStream(localStream)
            stopStream(remoteStream)
            store.dispatch(updateLocalStream(''))
            store.dispatch(updateRemoteStream(''))
        }
    }
    next(action)
}

export default p2pMiddleWare
