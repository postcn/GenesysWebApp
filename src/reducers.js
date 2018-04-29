import { combineReducers } from 'redux';

import character from './reducers/character';
import characteristic from './reducers/characteristic';
import skill from './reducers/skill';
import messages from './reducers/messages';
import die from './reducers/die';
import destiny from './reducers/destiny';
import user from './reducers/user';

export default combineReducers({
    character,
    characteristic,
    die,
    messages,
    skill,
    destiny,
    user
});