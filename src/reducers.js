import { combineReducers } from 'redux';

import character from './reducers/character';
import characteristic from './reducers/characteristic';
import skill from './reducers/skill';
import messages from './reducers/messages';

export default combineReducers({
    character,
    characteristic,
    messages,
    skill
});