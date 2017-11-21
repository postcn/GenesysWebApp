import * as types from '../types';

const initialState = {
    skills:[]
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