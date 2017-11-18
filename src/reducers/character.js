import * as types from '../types';

const defaultState = {
    characters: []
};

export default function character(state = defaultState, action) {
    switch (action.type) {
        case types.CREATE_NEW_CHARACTER:
            return {...state, characters: state.characters.concat('foo')}
        default:
            return state;
    }
};