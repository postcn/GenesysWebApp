import React from 'react';

import ChatPanel from './Chat/ChatPanel';
import DicePanel from './Dice/DicePanel';
import DestinyPanel from './Destiny/DestinyPanel';

class CommunicationBar extends React.Component {
    render() {
        return (
            <div>
                <div className="row">
                    <DestinyPanel/>
                </div>
                <div className="row">
                    <DicePanel/>
                    <ChatPanel/>
                </div>
            </div>
        );
    }
}

export default CommunicationBar;