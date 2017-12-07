import * as types from '../types';

const initialState = {
    skills:[],
    description: "The skill section of the data storage contains the list of skills being used in this game. It is reliant on having the appropriate characteristics in the characteristic section. It is recommended that this only be updated and edited by your gamemaster and shared from there."
};

export default function skill(state = initialState, action) {
    switch (action.type) {
        case types.ADD_SKILL: {
            return {...state, skills: state.skills.concat(action.skill)};
        }
        case types.DELETE_SKILL: {
            return {...state, skills: state.skills.filter(function (skill) {
                return skill.name !== action.skill.name;
            })};
        }
        default:
            return state;
    }
}