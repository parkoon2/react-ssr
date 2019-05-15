import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import ChatInputBar from './ChatInputBar'
import ChatMessage from './ChatMessage'

class Chat extends React.Component {
    componentDidMount() {
        console.log(this.props)
    }
    render() {
        const { chat, sendMessage } = this.props
        const { teacher } = this.props.user

        return (
            <div className="chat-field">
                <div className="message-field">
                    {chat.messages.map(({ user, message }, idx) => (
                        <ChatMessage
                            key={idx}
                            you={user === teacher}
                            message={message}
                            username={user}
                        />
                    ))}
                    {/* <div className="message-left">
                        <span>왼쪽 메세지</span>
                    </div>
                    <div className="message-right">
                        <span>오른쪽 메세지</span>
                    </div> */}
                </div>
                <ChatInputBar sendMessage={sendMessage} />
            </div>
        )
    }
}

Chat.propTypes = {}

Chat.defaultProps = {}

const mapStateToProps = state => ({ user: state.user })

export default connect(mapStateToProps)(Chat)
