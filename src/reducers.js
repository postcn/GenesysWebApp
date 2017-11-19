import { combineReducers } from 'redux';

import character from './reducers/character';
import characteristic from './reducers/characteristic';

export default combineReducers({
    character,
    characteristic
});