import * as types from '../types';

const defaultState = {
    player: 0,
    gm: 0
};

export default function destiny(state=defaultState, action) {
    switch (action.type) {
        case types.SET_DESTINY_POOL: {
            return {...state, player: action.destinyPool.player, gm: action.destinyPool.gm};
        }
        default: {
            return state;
        }
    }
}