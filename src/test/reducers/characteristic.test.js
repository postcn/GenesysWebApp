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