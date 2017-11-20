import characteristic from '../../reducers/characteristic';
import * as types from '../../types';

it('should default to the state when an unrecognized action is passed', () => {
    const result = characteristic({characteristics: []}, {type: 'foo', characteristic: 'bar'});
    expect(result).toEqual({characteristics: []});
});

it('should add to the state when an action is provided', () => {
    const action = {
        type: types.ADD_CHARACTERISTIC,
        characteristic: 'bar'
    };
    expect(characteristic({characteristics:[]}, action)).toEqual({characteristics:['bar']});
    expect(characteristic({characteristics:['bass']}, action)).toEqual({characteristics:['bass','bar']});
});

it('should remove the characteristic from the list when it matches', () => {
    const action = {
        type: types.DELETE_CHARACTERISTIC,
        characteristic: {
            name: 'foo',
            description: 'bar'
        }
    };
    const initialState = {
        characteristics:[
            {
                name: 'foo',
                description: 'bass'
            }
        ]
    };
    expect(characteristic(initialState, action)).toEqual({characteristics:[]});
});