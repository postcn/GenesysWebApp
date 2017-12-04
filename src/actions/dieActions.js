import * as types from '../types';
import {sendData} from './messageActions';
import shortid from 'shortid';

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

const randomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
};

const rollSingleDie = (dieResults, currentDie) => {
    const maxResult = currentDie.sides.length;
    const index = randomInt(0, maxResult);
    const roll = currentDie.sides[index];
    return dieResults.concat({die: currentDie, dieRoll: roll});
};

export const roll = (dice) => {
    return dispatch => {
        let rollResults = dice.reduce(rollSingleDie, []);
        dispatch(sendData({
            type: 'roll',
            id: shortid.generate(),
            results: rollResults
        }));
        dispatch(clearDiePool());
    }
};