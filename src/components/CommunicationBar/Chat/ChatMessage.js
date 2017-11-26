import React from 'react';

class ChatMessage extends React.Component {
    render() {
        const message = this.props.message;
        return (
            <div class="chat-message list-group-item">
                {message}
            </div>
        );
    }
}

export default ChatMessage;