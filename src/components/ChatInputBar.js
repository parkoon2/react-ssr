import React from 'react'

class ChatInputBar extends React.Component {
    state = {
        value: ''
    }

    onChange = e => {
        this.setState({
            input: e.target.value
        })
    }

    onSubmit = e => {
        e.preventDefault()

        const { input } = this.state
        if (!input) return alert('enter a message before send')

        this.props.sendMessage({
            user: 'teacher',
            message: input
        })

        this.setState({
            input: ''
        })
    }

    render() {
        const { input } = this.state

        return (
            <form className="submit-field" onSubmit={this.onSubmit}>
                <input
                    type="text"
                    placeholder="type a message..."
                    onChange={this.onChange}
                    value={input}
                />
                <button type="submit" className="send-btn">
                    Send
                </button>
            </form>
        )
    }
}

export default ChatInputBar
