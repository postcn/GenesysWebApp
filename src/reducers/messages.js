import * as types from '../types';

const initialState = {
    messages:[]
};

export default function messages(state = initialState, action) {
    switch (action.type) {
        case types.ADD_MESSAGE:
            return {...state, messages: state.messages.concat({type: 'text', text: action.message})}
        case types.ADD_DATA:
            return {...state, messages: state.messages.concat(action.data)}
        default:
            return state;
    }
}