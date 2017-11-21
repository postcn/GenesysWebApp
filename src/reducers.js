import { combineReducers } from 'redux';

import character from './reducers/character';
import characteristic from './reducers/characteristic';
import skill from './reducers/skill';

export default combineReducers({
    character,
    characteristic,
    skill
});