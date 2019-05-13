import React, { createRef } from 'react'
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

        this.localVideoRef = createRef()
        this.remoteVideoRef = createRef()
    }

    exampleMethod() {
        console.log('JS is running')
    }

    componentDidMount() {
        // connect web socket
        this.props.openWebSocket()
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
                <HeaderContainer
                    localVideo={this.localVideoRef}
                    remoteVideo={this.remoteVideoRef}
                />
                <Container>
                    <section className="left-section">
                        <div className="local-video">
                            <video
                                ref={this.localVideoRef}
                                id="local"
                                muted
                                autoPlay
                            />
                        </div>
                        <div className="remote-video">
                            <video
                                ref={this.remoteVideoRef}
                                id="remote"
                                muted
                                autoPlay
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
