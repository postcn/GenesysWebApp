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