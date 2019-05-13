import React, { Component } from 'react'
import { connect } from 'react-redux'
import io from 'socket.io-client'
import { updatePeer } from '../../actions'

let socket
let peer
class Header extends Component {
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

    startClass = () => {
        const { dispatch, localVideo, remoteVideo } = this.props
        const { socket } = this.props.socket
        const { student, teacher } = this.props.user
        try {
            console.log({
                eventOp: 'Call',
                reqNo: '1',
                reqDate: '2',
                userId: teacher,
                targetId: [student],
                serviceType: 'multi',
                reqDeviceType: 'pc'
            })
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
        peer.onaddstream = event => {
            // remoteStream = event.stream
            console.log('========= LOG START event.stream =======')
            console.log(event.stream)
            console.log('========= LOG END =========')

            remoteVideo.current.srcObject = event.stream
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
                localVideo.current.srcObject = stream
            })
            .catch(err => {
                console.error('error in get usermedia', err)
            })
    }

    stopClass = () => {
        this.props.stopClass()
    }

    render() {
        const { video, user } = this.props

        return (
            <header id="header">
                <div className="header-left">
                    <div className="logo">LOGO</div>
                </div>
                <div className="header-right">
                    {(() => {
                        // 학생의 경우 강의시작 버튼 없음
                        if (user.type === 'caller') return null

                        // 선생님의 경우
                        if (video.inClass)
                            return (
                                <div
                                    className="call-btn"
                                    onClick={this.stopClass}
                                >
                                    강의종료
                                </div>
                            )

                        return (
                            <div className="call-btn" onClick={this.startClass}>
                                강의시작
                            </div>
                        )
                    })()}
                </div>
            </header>
        )
    }
}

const mapStateToProps = state => {
    return {
        video: state.video,
        user: state.user,
        socket: state.socket
    }
}

// const mapDispatchToProps = dispatch => {
//     return {
//         updatePeer: () => dis
//         // startClass: () => dispatch(actions.startClass()),
//         // stopClass: () => dispatch(actions.stopClass())
//     }
// }

const HeaderContainer = connect(
    mapStateToProps
    // mapDispatchToProps
)(Header)

export { socket, HeaderContainer }
