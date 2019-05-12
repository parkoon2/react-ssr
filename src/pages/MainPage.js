import React from 'react'
import { Helmet } from 'react-helmet'
import queryString from 'query-string'
import { connect } from 'react-redux'

import { HeaderContainer, socket } from '../components/global/Header'
import Container from '../components/global/Container'
import ChatContainer from '../container/ChatContainer'

import { startClass, openWebSocket } from '../actions'

class MainPage extends React.Component {
    constructor(props) {
        super(props)

        const query = {}
        console.log(`[Query parameter]`, query)
        // Initialize information from query parameter
        this.userType = query.userType || 'callee'
        this.room = query.room
        this.student = query.student
        this.room = query.room
    }

    exampleMethod() {
        console.log('JS is running')
    }

    componentDidMount() {
        // connect web socket
        this.props.openWebSocket()

        // login
        // this.login()
    }

    login = () => {
        // sample
        // caller --> t1 (학생)
        // callee --> t2 (선생님)
        if (this.userType === 'caller') {
            socket.emit('gigagenie', {
                eventOp: 'Login',
                reqNo: '1',
                reqDate: '1',
                userId: 't1',
                userPw:
                    'e3b98a4da31a127d4bde6e43033f66ba274cab0eb7eb1c70ec41402bf6273dd8',
                deviceType: 'pc'
            })
        }

        if (this.userType === 'callee') {
            socket.emit('gigagenie', {
                eventOp: 'Login',
                reqNo: '1',
                reqDate: '1',
                userId: 't2',
                userPw:
                    'e3b98a4da31a127d4bde6e43033f66ba274cab0eb7eb1c70ec41402bf6273dd8',
                deviceType: 'pc'
            })
        }
    }

    // head() {
    //     return (
    //         <Helmet>
    //             <title>My page title</title>
    //         </Helmet>
    //     )
    // }

    render() {
        return (
            <div>
                {/* {this.head()} */}
                <HeaderContainer />
                <Container>
                    <section className="left-section">
                        <div className="local-video">
                            <video
                                id="local"
                                muted
                                autoPlay
                                src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                            />
                        </div>
                        <div className="remote-video">
                            <video
                                id="remote"
                                muted
                                autoPlay
                                src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
                            />
                        </div>
                    </section>
                    <section className="right-section">
                        <nav>
                            <div className="chat-btn">채팅하기</div>
                            <div className="book-btn">교재보기</div>
                        </nav>
                        <ChatContainer />
                        {/* <div className="book-field">교재 영역</div> */}
                    </section>
                </Container>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        video: state.video,
        socket: state.socket
    }
}

const mapDispatchToProps = dispatch => {
    return {
        startClass: () => dispatch(startClass()),
        openWebSocket: () => dispatch(openWebSocket())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainPage)
// export default MainPage
