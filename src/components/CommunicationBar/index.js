import React from 'react';

import ChatPanel from './Chat/ChatPanel';
import DicePanel from './Dice/DicePanel';

class CommunicationBar extends React.Component {
    render() {
        return (
            <div className="row">
                <DicePanel/>
                <ChatPanel/>
            </div>
        );
    }
}

export default CommunicationBar;