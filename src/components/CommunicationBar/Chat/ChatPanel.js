import React from 'react';
import {connect} from 'react-redux';

import {sendData} from '../../../actions/messageActions';
import CommunicationManager from '../../../socket/CommunicationManager';

import ChatMessage from './ChatMessage';
import ChatControls from './ChatControls';

class ChatPanel extends React.Component {

    constructor(props) {
        super(props);
        this.createMessage = this.createMessage.bind(this);
    }

    componentDidMount() {
        CommunicationManager.connect();
    }

    createMessage(message) {
        return <ChatMessage message={message} key={message.id}/> 
    }

    render() {
        const messages = this.props.messages.map(this.createMessage);
        return (
            <div className="col-md-6">
                <ul className="chatMessages list-group">
                    {messages}
                </ul>
                <ChatControls sendMessage={message => {this.props.sendData({
                    type: 'chat',
                    text: message
                })}}/>
            </div>
        );
    }
};

function mapStateToProps(state) {
    return {
        messages: state.messages.messages
    };
}

const functionObject = {
    sendData
};

export default connect(mapStateToProps, functionObject)(ChatPanel);