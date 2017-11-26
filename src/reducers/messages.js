import * as types from '../types';

const initialState = {
    messages:[]
};

export default function messages(state = initialState, action) {
    switch (action.type) {
        case types.ADD_MESSAGE:
            return {...state, messages: state.messages.concat(action.message)}
        default:
            return state;
    }
}