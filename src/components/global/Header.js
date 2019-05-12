import React, { Component } from 'react'
import { connect } from 'react-redux'
import io from 'socket.io-client'

import * as actions from '../../actions'

let socket

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
        // socket.on('disconnect', this.handleSocketDisconnected)
        // socket.on('gigagenie', this.handleSocketResponse)
    }

    handleSocketConnected = () => {
        console.log(`socket connected!!`)
        const { user } = this.props
        if (user.type == 'caller') {
            socket.emit('gigagenie', {
                eventOp: 'Join',
                userId: user.student,
                roomId: user.room
            })

            // connection 만들기
            this.peer = new RTCPeerConnection(this.configuration)

            // handle onaddstream
            this.peer.onaddstream = event => {
                alert('event.stream')
                // remoteStream = event.stream
                // document.querySelector('video#remote').srcObject = event.stream
            }

            // handle onicecandidate
            this.peer.onicecandidate = event => {
                if (event.candidate) {
                    console.log('otherUsername', otherUsername)
                    socket.emit({
                        eventOp: 'Candidate',
                        candidate: event.candidate
                    })
                }
            }

            // 스트림 만들기
            const constraint = {
                video: false,
                audio: true
            }

            navigator.mediaDevices
                .getUserMedia(constraint)
                .then(stream => {
                    console.log('stream', stream)
                    this.peer.addStream(stream)
                    document.querySelector('video#local').srcObject = stream
                })
                .catch(err => {
                    console.error('error in get usermedia', err)
                })
            // this.peer.addStream(localStream)
        }
    }
    handleSocketDisconnected = () => {
        console.log(`socket disconnected!!`)
    }

    handleSocketResponse = message => {
        console.log(`[${message.eventOp} response]`, message)
        switch (message.eventOp) {
            case 'Login':
                break
            case 'Call':
                break
            case 'Join':
                // 학생이 하겠다는 메세지를 보내고
                // 선생 쪽에서는 시작을 하면 된다
                break
            default:
                console.warn('Event op error')
        }
    }

    startClass = () => {
        const { user, startClass } = this.props
        socket.emit('gigagenie', {
            eventOp: 'Call',
            test: 'test',
            userId: user.teacher,
            roomId: user.room,
            targetId: user.student
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
        user: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        startClass: () => dispatch(actions.startClass()),
        stopClass: () => dispatch(actions.stopClass())
    }
}

const HeaderContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Header)

export { socket, HeaderContainer }
