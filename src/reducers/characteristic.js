import * as types from '../types';

const defaultState = {
    characteristics: []
};

export default function characteristic(state = defaultState, action) {
    switch (action.type) {
        case types.ADD_CHARACTERISTIC:
            return {...state, characteristics: state.characteristics.concat(action.characteristic)};
        case types.DELETE_CHARACTERISTIC:
            return {...state, characteristics: state.characteristics.filter(function (characteristic) {
                return characteristic.name !== action.characteristic.name;
            })}
        default:
            return state;
    }
};