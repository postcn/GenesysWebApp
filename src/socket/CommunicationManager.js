import * as MessageTypes from './MessageTypes';
import io from 'socket.io-client';
import shortid from 'shortid';

import store from '../store';
import * as messageActions from '../actions/messageActions';

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
        //TODO: implement what happens when we receive one of these messages.
        socket.on(MessageTypes.CHAT, function (message) {
            store.dispatch(messageActions.sendMessageLocal(message));
            console.log(message);
        });
        socket.on(MessageTypes.DATA, function (data) {
            store.dispatch(messageActions.sendDataLocal(data));
            console.log(data);
        })

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
        const decoratedMessage = {
            type: MessageTypes.CHAT,
            text: message,
            id: shortid.generate()
        };
        return CommunicationManager.withSocket((socket, ack) => {
            socket.emit(MessageTypes.CHAT, decoratedMessage, ack);
        });
    }

    static sendData(data) {
        let decoratedData = data;
        if (!decoratedData.id) {
            decoratedData = {...data, id: shortid.generate()};
        }
        return CommunicationManager.withSocket((socket, ack) => {
            socket.emit(MessageTypes.DATA, decoratedData, ack);
        });
    }
}

export default CommunicationManager;