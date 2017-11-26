import die from '../../reducers/die';
import * as types from '../../types';

it('should default to the state when an unrecognized action is passed', () => {
    const startingState = {
        dice: ['die1', 'die2'],
        symbols: ['symbol1']
    };
    const result = die(startingState, {});
    expect(result).toEqual(startingState);
});

it('should add a die symbol', () => {
    const startingState = {
        symbols: []
    };
    const result = die(startingState, {
        type: types.ADD_DIE_SYMBOL,
        symbol: 'foo'
    });
    expect(result).toEqual({symbols:['foo']});
});

it('should remove a die symbol', () => {
    const startingState = {
        symbols:[{name: 'bar'}]
    };
    const result = die(startingState, {
        type: types.DELETE_DIE_SYMBOL,
        name: 'bar'
    });
    expect(result).toEqual({symbols:[]});
});

it('should not remove a non matching die symbol', () => {
    const startingState = {
        symbols:[{name: 'bar'}]
    };
    const result = die(startingState, {
        type: types.DELETE_DIE_SYMBOL,
        name: 'bass'
    });
    expect(result).toEqual(startingState);
});

it('should add a die', () => {
    const startingState = {
        dice: []
    };
    const result = die(startingState, {
        type: types.ADD_DIE,
        die: 'dice'
    });
    expect(result).toEqual({dice:['dice']});
});

it('should remove a die', () => {
    const startingState = {
        dice:[{name: 'foo'}]
    };
    const result = die(startingState, {
        type: types.DELETE_DIE,
        name: 'foo'
    });
    expect(result).toEqual({dice:[]});
});

it('should not remove a non matching die', () => {
    const startingState = {
        dice:[{name: 'foo'}]
    };
    const result = die(startingState, {
        type: types.DELETE_DIE,
        name: 'bass'
    });
    expect(result).toEqual(startingState);
});