import * as types from '../types';
import {sendData} from './messageActions';

export const setDestinyPool = (destinyPool) => {
    return dispatch => {
        dispatch(sendData({
            type: 'destiny',
            destinyPool: destinyPool
        }));
    };
};

export const setDestinyPoolLocal = (destinyPool) => ({
    type: types.SET_DESTINY_POOL,
    destinyPool: destinyPool
});