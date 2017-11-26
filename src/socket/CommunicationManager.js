import * as MessageTypes from './MessageTypes';
import io from 'socket.io-client';

class CommunicationManager {

    static connect() {
        CommunicationManager.withSocket(socket => {});
        window.addEventListener('unload', function () {
            CommunicationManager.withSocket(socket => {
                socket.emit(MessageTypes.DISCONNECT);
            });
        });
    }

    static withSocket(caller) {
        if (CommunicationManager.socket === undefined) {
            console.log("Creating a new socket");
            CommunicationManager.socket = io();
        }
        console.log("invoking via socket " + CommunicationManager.socket.id);
        caller.call(this, CommunicationManager.socket);
    }

    static sendMessage(message) {
        CommunicationManager.withSocket(socket => {
            socket.emit(MessageTypes.CHAT, message);
        })
    }

    static sendData(data) {
        CommunicationManager.withSocket(socket => {
            socket.emit(MessageTypes.DATA, data);
        });
    }
}

export default CommunicationManager;