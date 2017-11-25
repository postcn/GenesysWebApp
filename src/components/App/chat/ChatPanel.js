import React from 'react';
import {connect} from 'react-redux';

import {sendMessage} from '../../../actions/messageActions';
import CommunicationManager from '../../../socket/CommunicationManager';

class ChatPanel extends React.Component {

    componentDidMount() {
        CommunicationManager.connect();
    }

    render() {
        return (
            <div>
                <button onClick={() => {this.props.sendMessage("Banana")}} />
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
    sendMessage
};

export default connect(mapStateToProps, functionObject)(ChatPanel);