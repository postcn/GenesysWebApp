import * as userActions from '../../actions/userActions';
import * as types from '../../types';

it('should return back an action object when passed', () => {
    expect(userActions.setUser({name: 'bar'})).toEqual({
        type: types.SET_USER,
        user: {
            name: 'bar'
        }
    });
});