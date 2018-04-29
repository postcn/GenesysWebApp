import * as types from '../types';

const initialState = {
    user: null,
    description: "The user reducer only contains the registered information for the current user. There is no need to export it as it is not intended to share amongst other users"
};

export default function user(state = initialState, action) {
    switch (action.type) {
        case types.SET_USER: {
            return {...state, user: action.user};
        }
        default:
            return state;
    }
}