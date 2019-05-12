import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const ChatMessage = ({ you, message, username }) => {
    return (
        <Fragment>
            {you ? (
                <div className="message-left">
                    <span>
                        {message} - ({username})
                    </span>
                </div>
            ) : (
                <div className="message-right">
                    <span>
                        {message} - ({username})
                    </span>
                </div>
            )}
        </Fragment>
    )
}

ChatMessage.propTypes = {
    you: PropTypes.bool.isRequired,
    message: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired
}

export default ChatMessage
