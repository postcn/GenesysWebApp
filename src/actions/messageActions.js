import * as types from '../types';
import CommunicationManager from '../socket/CommunicationManager';

export const sendDataLocal = (data) => ({
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
        })
    }
}