import * as types from '../types';

const initialState = {
    messages:[],
    description: "Messages stores any information shared by users across the gameplay. It is not necessary to export this unless you want everyone synchronized on what is happening"
};

export default function messages(state = initialState, action) {
    switch (action.type) {
        case types.ADD_DATA:
            return {...state, messages: state.messages.concat(action.data)}
        default:
            return state;
    }
}