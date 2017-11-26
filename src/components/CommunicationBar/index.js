import React from 'react';

import ChatPanel from './Chat/ChatPanel';

class CommunicationBar extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-6">
                    This would contain the die options. Not yet implemented.
                </div>
                <ChatPanel/>
            </div>
        );
    }
}

export default CommunicationBar;