import * as types from '../types';

const defaultState = {
    dice: [],
    symbols: [],
    selectedDice: {}
};

export default function die(state=defaultState, action) {
    switch (action.type) {
        case types.ADD_DIE_SYMBOL:
            return {...state, symbols: state.symbols.concat(action.symbol)};
        case types.DELETE_DIE_SYMBOL:
            return {...state, symbols: state.symbols.filter(symbol => {
                return symbol.name !== action.name;
            })};
        case types.ADD_DIE:
            return {...state, dice: state.dice.concat(action.die)};
        case types.DELETE_DIE:
            return {...state, dice: state.dice.filter(die => {
                return die.name !== action.name;
            })};
        case types.CHANGE_DIE_SELECTION:
            return {...state, selectedDice:
                {...state.selectedDice, [action.name]: action.count}
            };
        case types.CLEAR_DIE_POOL:
            return {...state, selectedDice:{}};
        default:
            return state;
    }
};