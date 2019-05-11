import React from 'react'
import { Helmet } from 'react-helmet'
import queryString from 'query-string'

import { Header, socket } from '../components/global/Header'
import Container from '../components/global/Container'

class MainPage extends React.Component {
    constructor(props) {
        super(props)

        const query = queryString.parse(this.props.location.search)
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
        // login
        this.login()
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
                <Header />
                <Container>
                    <section className="left-section">
                        <div className="local-video">
                            <video
                                muted
                                autoPlay
                                src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                            />
                        </div>
                        <div className="remote-video">
                            <video
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
                        <div className="chat-field">
                            <div className="message-field">
                                <div className="message-left">
                                    <span>왼쪽 메세지</span>
                                </div>
                                <div className="message-right">
                                    <span>오른쪽 메세지</span>
                                </div>
                            </div>
                            <div className="submit-field">
                                <input
                                    type="text"
                                    placeholder="type a message..."
                                />
                                <div className="send-btn">Send</div>
                            </div>
                        </div>
                        {/* <div className="book-field">교재 영역</div> */}
                    </section>
                </Container>
            </div>
        )
    }
}

export default MainPage
