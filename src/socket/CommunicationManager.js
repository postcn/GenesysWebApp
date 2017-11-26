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

    static connected() {
        return CommunicationManager.socket && CommunicationManager.socket.connected;
    }

    static createNewSocket() {
        console.log("Creating a new socket");
        const socket = io();
        socket.on(MessageTypes.CHAT, function (message) {
            console.log(message);
        });

        CommunicationManager.socket = socket;
    }

    static withSocket(caller) {
        return new Promise((resolve, reject) => {
            if (CommunicationManager.socket === undefined) {
                CommunicationManager.createNewSocket();
            }
            console.log("invoking via socket " + CommunicationManager.socket.id);
            caller.call(this, CommunicationManager.socket, ack => {
                console.log('acked here baby' + ack);
                resolve(ack)
            });
        });
    }

    static sendMessage(message) {
        return CommunicationManager.withSocket((socket, ack) => {
            socket.emit(MessageTypes.CHAT, message, ack);
        });
    }

    static sendData(data) {
        return CommunicationManager.withSocket((socket, ack) => {
            socket.emit(MessageTypes.DATA, data, ack);
        });
    }
}

export default CommunicationManager;