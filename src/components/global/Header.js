import React, { Component, PureComponent } from 'react'
import { connect } from 'react-redux'
import io from 'socket.io-client'
import {
    updatePeer,
    startLesson,
    endLesson,
    updateLocalStream,
    updateRemoteStream
} from '../../actions'

let socket
let peer
class Header extends PureComponent {
    // endpoint = 'https://knowledgetalk.co.kr:9000/SignalServer'
    endpoint = 'http://localhost:3333'
    option = {
        // secure: true,
        // reconnect: true,
        // rejectUnauthorized: false,
        // transports: ['websocket']
    }

    peer = ''
    configuration = {
        iceServers: [{ url: 'stun:stun2.1.google.com:19302' }]
    }

    componentDidMount() {
        // connect socket
        // socket = io(this.endpoint, this.option)
        // socket.on('connect', this.handleSocketConnected)
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.lesson.on === this.props.lesson.on) {
            return false
        }
        return true
    }

    renderLessonButton = () => {
        const { lesson } = this.props

        if (lesson.on) {
            return (
                <div className="call-btn" onClick={this.endLesson}>
                    강의종료
                </div>
            )
        } else {
            return (
                <div className="call-btn" onClick={this.startLesson}>
                    강의시작
                </div>
            )
        }
    }

    startLesson = () => {
        const { dispatch, localVideo, remoteVideo } = this.props
        const { socket } = this.props.socket
        const { student, teacher } = this.props.user
        try {
            socket.emit('gigagenie', {
                eventOp: 'Call',
                reqNo: '1',
                reqDate: '2',
                userId: teacher,
                targetId: [student],
                serviceType: 'multi',
                reqDeviceType: 'pc'
            })
        } catch (err) {
            console.error(err)
        }

        // connection 만들기
        peer = new RTCPeerConnection(this.configuration)

        // handle onaddstream
        peer.onaddstream = e => {
            // remoteStream = event.stream
            const remoteStream = event.stream
            dispatch(updateRemoteStream(remoteStream))
            dispatch(startLesson())
            remoteVideo.current.srcObject = remoteStream
        }

        // handle onicecandidate
        peer.onicecandidate = event => {
            const { socket } = this.props.socket
            const { teacher, room } = this.props.user
            if (event.candidate) {
                socket.emit({
                    eventOp: 'Candidate',
                    candidate: event.candidate,
                    reqDate: '20190513180621947',
                    reqNo: '201905131806249972',
                    usage: 'cam',
                    useMediaSvr: 'N',
                    roomId: room,
                    userId: teacher
                })
            }
        }

        // 스트림 만들기
        const constraint = {
            video: true,
            audio: true
        }

        navigator.mediaDevices
            .getUserMedia(constraint)
            .then(stream => {
                peer.addStream(stream)
                dispatch(updatePeer(peer))
                dispatch(updateLocalStream(stream))
                localVideo.current.srcObject = stream
            })
            .catch(err => {
                console.error('error in get usermedia', err)
            })
    }

    endLesson = () => {
        const { video, localVideo, user } = this.props
        const { socket } = this.props.socket

        try {
            video.localStream.getTracks().forEach(track => {
                track.stop()
            })

            localVideo.src = ''
        } catch (err) {
            console.error('[error in endLesson method]', err)
        }
        // 2. 종료 메세지 보내기
        socket.emit({
            signalOp: 'Presence',
            userId: user.teacher,
            action: 'exit'
        })
    }

    render() {
        const { video, user, lesson } = this.props

        return (
            <header id="header">
                <div className="header-left">
                    <div className="logo">LOGO</div>
                </div>
                <div className="header-right">{this.renderLessonButton()}</div>
            </header>
        )
    }
}

const mapStateToProps = state => {
    return {
        video: state.video,
        user: state.user,
        socket: state.socket,
        lesson: state.lesson
    }
}

// const mapDispatchToProps = dispatch => {
//     return {
//         updatePeer: () => dis
//         // startLesson: () => dispatch(actions.startLesson()),
//         // endLesson: () => dispatch(actions.endLesson())
//     }
// }

const HeaderContainer = connect(
    mapStateToProps
    // mapDispatchToProps
)(Header)

export { socket, HeaderContainer }
