import React from 'react';
import {connect} from 'react-redux';

import RollMessage from './RollMessage';

import styles from './chatMessage.css';

class ChatMessage extends React.Component {

    constructor(props) {
        super(props);
        this.createText = this.createText.bind(this);
    }

    createText(message) {
        return message.text;
    }

    render() {
        let message = undefined;
        switch (this.props.message.type) {
            case 'chat':
                message = this.createText(this.props.message);
                break;
            case 'roll':
                message = <RollMessage message={this.props.message} />
                break;
            default:
                message = "TK421 You aren't at your post. Unrecognized message came in";
                break;
        }
        return (
            <div class="chat-message list-group-item">
                {message}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    symbols: state.die.symbols
});

const functionObject = {};

export default connect(mapStateToProps, functionObject)(ChatMessage);