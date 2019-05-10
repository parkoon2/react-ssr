import React, { Component } from 'react'
import io from 'socket.io-client'

let socket

class Header extends Component {
    // endpoint = 'https://knowledgetalk.co.kr:9000/SignalServer'
    // option = {
    //     secure: true,
    //     reconnect: true,
    //     rejectUnauthorized: false,
    //     transports: ['websocket']
    // }

    componentDidMount() {
        console.log('!!!')
        // connect socket
        socket = io('https://knowledgetalk.co.kr:9000/SignalServer', {
            secure: true,
            reconnect: true,
            rejectUnauthorized: false,
            transports: ['websocket']
        })
        socket.on('connect', function() {
            console.log('connect')
        })
        socket.on('event', function(data) {})
        socket.on('disconnect', function() {
            console.log('disconnect')
        })
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

export default Header
