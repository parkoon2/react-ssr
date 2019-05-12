import React from 'react'
import { connect } from 'react-redux'
import Chat from '../components/Chat'
import { sendMessage } from '../actions'
class ChatContainer extends React.Component {
    render() {
        return <Chat {...this.props} />
    }
}

const mapStateToProps = state => {
    return {
        chat: state.chat
    }
}

const mapDispatchToProps = dispatch => {
    return {
        sendMessage: ({ user, message }) =>
            dispatch(sendMessage({ user, message }))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ChatContainer)
