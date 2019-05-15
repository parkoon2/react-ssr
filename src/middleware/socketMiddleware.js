import {
    OPEN_WEBSOCKET,
    CONNECT_SOCKET_ERROR,
    UPDATE_SOCKET_OBJECT
} from '../actions/actionTypes'
import {
    updateWebSocket,
    connectSocketError,
    disconnectWebSocket,
    addMessage,
    loginSuccess,
    loginFailure,
    updateRoomInfo,
    endLesson
} from '../actions'
import io from 'socket.io-client'

// const endpoint = 'http://localhost:3333'
const endpoint = 'https://knowledgetalk.co.kr:9000/SignalServer'
const option = {
    secure: true,
    reconnect: true,
    rejectUnauthorized: false,
    transports: ['websocket']
}

let socket

const handleSocketResponse = (data, store, cliendId) => {
    console.log('[socket response]', data)
    const { eventOp, signalOp } = data

    switch (eventOp || signalOp) {
        case 'Login':
            if (data.code === 200) {
                return store.dispatch(loginSuccess())
            }
            return store.dispatch(loginFailure(data.message))
        case 'Chat':
            return store.dispatch(
                addMessage({ user: data.userId, message: data.message })
            )
        case 'Call':
            if (data.code * 1 === 200) {
                // 여기서 룸 아이디 저장할 것
                console.log('통화 가능한 상태입니다.')
                store.dispatch(updateRoomInfo(data.roomId))
                return
            }
            return console.log('통화 불가능한 상태입니다.')
        case 'Presence':
            if (data.action === 'join') {
                return console.log('상대방이 참석했습니다.')
            } else {
                store.dispatch(endLesson())
                console.log('상대방이 방을 나갔습니다.')
            }

        case 'SDP':
            if (data.sdp && data.sdp.type === 'offer') {
                const state = store.getState()
                const { teacher, room } = state.user
                const { peer } = state.video
                const offer = data.sdp

                peer.setRemoteDescription(new RTCSessionDescription(offer))
                peer.createAnswer()
                    .then(answer => {
                        peer.setLocalDescription(
                            new RTCSessionDescription(answer)
                        )
                        socket.emit('gigagenie', {
                            eventOp: 'SDP',
                            reqDate: '11',
                            reqNo: '11',
                            roomId: room, // 별도로 스토어에 저장할 것
                            sdp: answer,
                            usage: 'cam',
                            useMediaSvr: 'N',
                            userId: teacher
                        })
                    })
                    .catch(err => {
                        console.error(err)
                    })
            }
            break
        case 'Candidate':
            if (data.candidate) {
                const state = store.getState()
                const { peer } = state.video
                peer.addIceCandidate(new RTCIceCandidate(data.candidate))
            }
            break

        default:
            console.warn('[event op warnning]', eventOp || signalOp)
    }
}

const socketMiddleware = store => next => action => {
    if (action.type === OPEN_WEBSOCKET) {
        // 소켓 연결

        socket = io(endpoint, option)
        socket.on('connect', () => {
            console.log('[connected to server]', socket)
            store.dispatch(updateWebSocket(socket))

            const { user } = store.getState()
            if (user.type === 'caller') {
                alert('콜러!')
                socket.emit('gigagenie', {
                    eventOp: 'Login',
                    reqNo: '1',
                    reqDate: '1',
                    userId: user.student,
                    type: 'kakao',
                    deviceType: 'pc'
                })
            }

            if (user.type === 'callee') {
                socket.emit('gigagenie', {
                    eventOp: 'Login',
                    reqNo: '1',
                    reqDate: '1',
                    userId: user.teacher,
                    type: 'kakao',
                    deviceType: 'pc'
                })
            }
        })

        socket.on('error', err => {
            console.log('[connect socket error]', err)
            store.dispatch(connectSocketError())
        })
        socket.on('disconnect', () => {
            console.log('[disconnected to server]', socket)
            store.dispatch(disconnectWebSocket())
        })

        socket.on('gigagenie', data =>
            handleSocketResponse(data, store, socket.id)
        )
    }

    next(action)
}

export default socketMiddleware
