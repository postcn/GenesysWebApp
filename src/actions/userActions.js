import * as types from '../types';

export const setUser = (user) => ({
    type: types.SET_USER,
    user: user
});