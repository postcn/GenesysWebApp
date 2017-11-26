import * as types from '../types';

export const addDieSymbol = (name, image) => ({
    type: types.ADD_DIE_SYMBOL,
    symbol: {
        name: name,
        imagePath: imagePath
    }
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