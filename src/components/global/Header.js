import React, { Component } from 'react'
import io from 'socket.io-client'

let socket

class Header extends Component {
    endpoint = 'https://knowledgetalk.co.kr:9000/SignalServer'
    option = {
        secure: true,
        reconnect: true,
        rejectUnauthorized: false,
        transports: ['websocket']
    }

    componentDidMount() {
        // connect socket
        socket = io(this.endpoint, this.option)
        socket.on('connect', this.handleSocketConnected)
        socket.on('disconnect', this.handleSocketDisconnected)
        socket.on('gigagenie', this.handleSocketResponse)
    }

    handleSocketConnected = () => {
        console.log(`socket connected!!`)
    }
    handleSocketDisconnected = () => {
        console.log(`socket disconnected!!`)
    }

    handleSocketResponse = message => {
        switch (message.eventOp) {
            case 'Login': {
                console.log('[Login response]', message)
                break
            }
            default: {
                console.warn('Event op error')
            }
        }
    }

    render() {
        return (
            <header id="header">
                <div className="header-left">
                    <div className="logo">LOGO</div>
                </div>
                <div className="header-right">
                    <div className="call-end">강의종료</div>
                </div>
            </header>
        )
    }
}

export { socket, Header }
