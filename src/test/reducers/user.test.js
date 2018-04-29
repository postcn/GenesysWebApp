import user from '../../reducers/user';
import * as types from '../../types';
import { start } from 'repl';

it('should default to the state when an unrecognized action is passed', () => {
    const startingState = {
        user: {
            name: 'foo'
        }
    };
    const result = user(startingState, {});
    expect(result).toEqual(startingState);
});

it('should set the user value', () => {
    const startingState = {
        user: {
            name: 'foo'
        }
    };
    const result = user(startingState, {
        type: types.SET_USER,
        user: {
            name: 'bar'
        }
    });
    expect(result).toEqual({user: {name: 'bar'}});
});