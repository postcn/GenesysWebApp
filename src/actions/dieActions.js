import * as types from '../types';

export const addDieSymbol = (symbol) => ({
    type: types.ADD_DIE_SYMBOL,
    symbol: symbol
});

export const deleteDieSymbol = (name) => ({
    type: types.DELETE_DIE_SYMBOL,
    name: name
});

export const addDie = (name, sides, image) => ({
    type: types.ADD_DIE,
    die: {
        name: name,
        sides: sides,
        image: image
    }
});

export const deleteDie = (name) => ({
    type: types.DELETE_DIE,
    name: name
});

export const setDieCountInPool = (name, count) => ({
    type: types.CHANGE_DIE_SELECTION,
    name: name,
    count: count
});

export const clearDiePool = () => ({
    type: types.CLEAR_DIE_POOL
});