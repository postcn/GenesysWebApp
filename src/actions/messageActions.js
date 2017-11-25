import * as types from '../types';
import CommunicationManager from '../socket/CommunicationManager';

export const sendMessage = (message) => {
    CommunicationManager.sendMessage(message);
};