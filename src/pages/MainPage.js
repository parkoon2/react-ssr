import React from 'react'
import { Helmet } from 'react-helmet'
import queryString from 'query-string'

import Header from '../components/global/Header'
import Container from '../components/global/Container'

class MainPage extends React.Component {
    constructor(props) {
        super(props)

        const query = queryString.parse(this.props.location.search)

        // Initialize information from query parameter
        this.type = query.type || 'callee'
        this.room = query.room
        this.student = query.student
        this.room = query.room
    }

    exampleMethod() {
        console.log('JS is running')
    }

    componentDidMount() {
        console.log(queryString.parse(this.props.location.search))
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
                                autoPlay
                                src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                            />
                        </div>
                        <div className="remote-video">
                            <video
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
