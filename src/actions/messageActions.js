import * as types from '../types';
import CommunicationManager from '../socket/CommunicationManager';

const sendMessageLocal = (message) => ({
    type: types.ADD_MESSAGE,
    message: message
});

export const sendMessage = (message) => {
    return dispatch => {
        CommunicationManager.sendMessage(message)
        .catch(err => {
            console.error(err);
        })
        .then(acked => {
            console.log('acked');
            dispatch(sendMessageLocal(message))
        });
    }
};

const sendDataLocal = (data) => ({
    type: types.ADD_DATA,
    data: data
});

export const sendData = (data) => {
    return dispatch => {
        CommunicationManager.sendData(data)
        .catch(err => {
            console.error(err);
        })
        .then(acked => {
            console.log('acked');
            dispatch(sendDataLocal(data));
        })
    }
}